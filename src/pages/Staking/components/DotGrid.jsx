"use client";

import {
  useRef,
  useEffect,
  useCallback,
  useMemo,
} from "react";
import { gsap } from "gsap";

function hexToRgb(hex) {
  const m = hex.match(
    /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i
  );

  if (!m) {
    return {
      r: 0,
      g: 0,
      b: 0,
    };
  }

  return {
    r: parseInt(m[1], 16),
    g: parseInt(m[2], 16),
    b: parseInt(m[3], 16),
  };
}

const DotGrid = ({
  dotSize = 3,
  gap = 32,
  baseColor = "#241a35",
  activeColor = "#a855f7",
  proximity = 180,
  speedTrigger = 100,
  shockRadius = 250,
  shockStrength = 5,
  maxSpeed = 5000,
  resistance = 750,
  returnDuration = 1.5,
  className = "",
  style,
}) => {
  const wrapperRef = useRef(null);
  const canvasRef = useRef(null);

  const dotsRef = useRef([]);

  const pointerRef = useRef({
    x: -1000,
    y: -1000,
    vx: 0,
    vy: 0,
    speed: 0,
    lastTime: 0,
    lastX: 0,
    lastY: 0,
  });

  const baseRgb = useMemo(
    () => hexToRgb(baseColor),
    [baseColor]
  );

  const activeRgb = useMemo(
    () => hexToRgb(activeColor),
    [activeColor]
  );

  const buildGrid = useCallback(() => {
    const wrapper = wrapperRef.current;
    const canvas = canvasRef.current;

    if (!wrapper || !canvas) return;

    const rect = wrapper.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const dpr = window.devicePixelRatio || 1;

    canvas.width = width * dpr;
    canvas.height = height * dpr;

    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const cell = dotSize + gap;

    const cols = Math.ceil(width / cell) + 1;
    const rows = Math.ceil(height / cell) + 1;

    const gridWidth = (cols - 1) * cell;
    const gridHeight = (rows - 1) * cell;

    const startX = (width - gridWidth) / 2;
    const startY = (height - gridHeight) / 2;

    const dots = [];

    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        dots.push({
          cx: startX + x * cell,
          cy: startY + y * cell,

          xOffset: 0,
          yOffset: 0,

          scale: 1,
        });
      }
    }

    dotsRef.current = dots;
  }, [dotSize, gap]);

  useEffect(() => {
    buildGrid();

    let resizeObserver;

    if ("ResizeObserver" in window) {
      resizeObserver = new ResizeObserver(buildGrid);

      if (wrapperRef.current) {
        resizeObserver.observe(wrapperRef.current);
      }
    } else {
      window.addEventListener("resize", buildGrid);
    }

    return () => {
      if (resizeObserver) {
        resizeObserver.disconnect();
      } else {
        window.removeEventListener(
          "resize",
          buildGrid
        );
      }
    };
  }, [buildGrid]);

  useEffect(() => {
    let animationFrame;

    const draw = () => {
      const canvas = canvasRef.current;

      if (!canvas) return;

      const ctx = canvas.getContext("2d");

      if (!ctx) return;

      const rect =
        canvas.getBoundingClientRect();

      const width = rect.width;
      const height = rect.height;

      ctx.clearRect(0, 0, width, height);

      const pointer = pointerRef.current;

      for (const dot of dotsRef.current) {
        const x = dot.cx + dot.xOffset;
        const y = dot.cy + dot.yOffset;

        const dx = dot.cx - pointer.x;
        const dy = dot.cy - pointer.y;

        const distance = Math.sqrt(
          dx * dx + dy * dy
        );

        let r = baseRgb.r;
        let g = baseRgb.g;
        let b = baseRgb.b;

        let scale = 1;

        if (distance < proximity) {
          const strength =
            1 - distance / proximity;

          r = Math.round(
            baseRgb.r +
              (activeRgb.r - baseRgb.r) *
                strength
          );

          g = Math.round(
            baseRgb.g +
              (activeRgb.g - baseRgb.g) *
                strength
          );

          b = Math.round(
            baseRgb.b +
              (activeRgb.b - baseRgb.b) *
                strength
          );

          scale =
            1 +
            strength * 1.8;
        }

        const radius =
          (dotSize / 2) * scale;

        ctx.beginPath();

        ctx.arc(
          x,
          y,
          radius,
          0,
          Math.PI * 2
        );

        ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;

        ctx.fill();
      }

      animationFrame =
        requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(
        animationFrame
      );
    };
  }, [
    proximity,
    dotSize,
    baseRgb,
    activeRgb,
  ]);

  useEffect(() => {
    const onMove = (event) => {
      const canvas = canvasRef.current;

      if (!canvas) return;

      const rect =
        canvas.getBoundingClientRect();

      const pointer =
        pointerRef.current;

      const now = performance.now();

      const dt =
        pointer.lastTime
          ? now - pointer.lastTime
          : 16;

      const dx =
        event.clientX -
        pointer.lastX;

      const dy =
        event.clientY -
        pointer.lastY;

      let vx =
        (dx / dt) * 1000;

      let vy =
        (dy / dt) * 1000;

      let speed = Math.hypot(
        vx,
        vy
      );

      if (speed > maxSpeed) {
        const scale =
          maxSpeed / speed;

        vx *= scale;
        vy *= scale;

        speed = maxSpeed;
      }

      pointer.lastTime = now;
      pointer.lastX = event.clientX;
      pointer.lastY = event.clientY;

      pointer.vx = vx;
      pointer.vy = vy;
      pointer.speed = speed;

      pointer.x =
        event.clientX -
        rect.left;

      pointer.y =
        event.clientY -
        rect.top;

      for (const dot of dotsRef.current) {
        const dx =
          dot.cx - pointer.x;

        const dy =
          dot.cy - pointer.y;

        const distance =
          Math.sqrt(
            dx * dx +
              dy * dy
          );

        if (
          distance < proximity &&
          speed > speedTrigger
        ) {
          const force =
            1 -
            distance / proximity;

          const pushX =
            dx *
            force *
            0.35;

          const pushY =
            dy *
            force *
            0.35;

          gsap.killTweensOf(dot);

          gsap.to(dot, {
            xOffset:
              pushX +
              vx * 0.003,

            yOffset:
              pushY +
              vy * 0.003,

            duration: 0.25,

            ease: "power2.out",

            overwrite: true,

            onComplete: () => {
              gsap.to(dot, {
                xOffset: 0,
                yOffset: 0,

                duration:
                  returnDuration,

                ease:
                  "elastic.out(1,0.75)",

                overwrite: true,
              });
            },
          });
        }
      }
    };

    const onLeave = () => {
      pointerRef.current.x = -1000;
      pointerRef.current.y = -1000;
    };

    window.addEventListener(
      "mousemove",
      onMove,
      { passive: true }
    );

    window.addEventListener(
      "mouseleave",
      onLeave
    );

    return () => {
      window.removeEventListener(
        "mousemove",
        onMove
      );

      window.removeEventListener(
        "mouseleave",
        onLeave
      );
    };
  }, [
    proximity,
    speedTrigger,
    maxSpeed,
    returnDuration,
  ]);

  return (
    <div
      ref={wrapperRef}
      className={`relative h-full w-full ${className}`}
      style={style}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full"
      />
    </div>
  );
};

export default DotGrid;