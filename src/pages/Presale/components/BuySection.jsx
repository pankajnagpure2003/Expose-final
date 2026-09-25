 
import { useState } from "react";
import {
  ArrowRight,
  Wallet,
  LockKeyhole,
  Sparkles,
  ShieldCheck,
} from "lucide-react";

import currency_icon from "../../../assets/icon_expo_currency.png";
import USDT_icon from "../../../assets/USDT.jpg";

const RATE = 0.05;
const TARGET = 7_500_000;
const RAISED = 0;

export default function BuySection() {
  const [payAmount, setPayAmount] = useState("");
  const [receiveAmount, setReceiveAmount] = useState("");

  const progressPct =
    TARGET > 0
      ? Math.min(100, (RAISED / TARGET) * 100)
      : 0;

  // -----------------------------------------
  // USDT -> EXPOSE
  // Example:
  // 10 USDT / 0.05 = 200 EXPOSE
  // -----------------------------------------
  const handlePayChange = (e) => {
    let value = e.target.value;

    // Allow only numbers and decimal
    if (!/^\d*\.?\d*$/.test(value)) {
      return;
    }

    // Prevent multiple decimal points
    if ((value.match(/\./g) || []).length > 1) {
      return;
    }

    setPayAmount(value);

    // Empty input
    if (value === "") {
      setReceiveAmount("");
      return;
    }

    const usdt = Number(value);

    if (!Number.isFinite(usdt) || usdt < 0) {
      setReceiveAmount("");
      return;
    }

    const expose = usdt / RATE;

    setReceiveAmount(
      expose.toFixed(2)
    );
  };

  // -----------------------------------------
  // EXPOSE -> USDT
  // Example:
  // 200 EXPOSE * 0.05 = 10 USDT
  // -----------------------------------------
  const handleReceiveChange = (e) => {
    let value = e.target.value;

    // Allow only numbers and decimal
    if (!/^\d*\.?\d*$/.test(value)) {
      return;
    }

    // Prevent multiple decimal points
    if ((value.match(/\./g) || []).length > 1) {
      return;
    }

    setReceiveAmount(value);

    // Empty input
    if (value === "") {
      setPayAmount("");
      return;
    }

    const expose = Number(value);

    if (!Number.isFinite(expose) || expose < 0) {
      setPayAmount("");
      return;
    }

    const usdt = expose * RATE;

    setPayAmount(
      usdt.toFixed(2)
    );
  };

  // -----------------------------------------
  // BUY BUTTON
  // -----------------------------------------
  const handleBuy = () => {
    if (!payAmount || Number(payAmount) <= 0) {
      alert("Please enter a valid USDT amount.");
      return;
    }

    alert(
      `Buy flow ready for ${payAmount} USDT`
    );
  };

  // -----------------------------------------
  // CONNECT WALLET
  // -----------------------------------------
  const handleConnectWallet = () => {
    alert("Wallet connection will be added here.");
  };

  return (
    <section
      id="presale"
      className="
        relative
        overflow-hidden
        bg-black
        pt-8
        pb-20
        text-white
        md:pt-10
        md:pb-24
      "
    >
      {/* =====================================================
          BUY HEADER
      ====================================================== */}

      <div
        className="
          relative
          mx-auto
          mb-10
          w-[min(100%-32px,1180px)]
        "
      >
        <div
          className="
            flex
            flex-col
            gap-4
            sm:flex-row
            sm:items-end
            sm:justify-between
          "
        >
          <div className="animate-fadeUp">

            {/* LABEL */}

            <div className="flex items-center gap-2 text-purple">

              <span
                className="
                  h-1.5
                  w-1.5
                  animate-pulse
                  rounded-full
                  bg-purple
                  shadow-[0_0_12px_rgba(155,77,255,.9)]
                "
              />

              <span
                className="
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[.22em]
                "
              >
                EXPOSE / PRESALE
              </span>

            </div>

            {/* TITLE */}

            <h2
             className="heading-tight mt-5 mb-[14px]   animate-fadeUp uppercase text-[clamp(34px,6vw,68px)] leading-[.93] text-white"
            >
              Get in{" "}
              <span className="text-purple">
                early.
              </span>
            </h2>

          </div>
        </div>
      </div>


      {/* =====================================================
          TERMINAL
      ====================================================== */}

      <div
        className="
          relative
          mx-auto
          w-[min(100%-32px,680px)]
          animate-fadeUp
          [animation-delay:.18s]
        "
      >

        {/* OUTER GLOW */}

        <div
          className="
            pointer-events-none
            absolute
            -inset-6
            rounded-[28px]
            bg-purple/[0.055]
            blur-[55px]
            animate-pulseSlow
          "
        />

        {/* ANIMATED BORDER */}

        <div
          className="
            pointer-events-none
            absolute
            -inset-px
            rounded-[12px]
            bg-gradient-to-r
            from-transparent
            via-purple/40
            to-transparent
            opacity-70
            animate-borderFlow
          "
        />

        {/* CARD */}

        <div
          className="
            group
            relative
            overflow-hidden
            rounded-[11px]
            border
            border-white/[0.09]
            bg-[#08080b]/95
            shadow-[0_30px_100px_rgba(0,0,0,.65)]
            backdrop-blur-md
          "
        >

          {/* TOP LINE */}

          <div
            className="
              absolute
              left-0
              right-0
              top-0
              h-[2px]
              overflow-hidden
              bg-purple/20
            "
          >
            <span
              className="
                absolute
                inset-y-0
                left-[-30%]
                w-[30%]
                bg-purple
                shadow-[0_0_18px_rgba(155,77,255,.9)]
                animate-cardLine
              "
            />
          </div>


          {/* HOVER GLOW */}

          <div
            className="
              pointer-events-none
              absolute
              inset-0
              bg-gradient-to-br
              from-purple/[0.055]
              via-transparent
              to-transparent
              opacity-0
              transition-opacity
              duration-700
              group-hover:opacity-100
            "
          />


          <div className="relative p-5 sm:p-7 md:p-8">

            {/* =================================================
                HEADER
            ================================================== */}

            <div className="flex items-center justify-between">

              <div>

                <span
                  className="
                    block
                    text-[8px]
                    font-semibold
                    uppercase
                    tracking-[.2em]
                    text-[#68646f]
                  "
                >
                  Presale Terminal
                </span>

                <h3
                  className="
                    mt-1
                    text-[15px]
                    font-bold
                    uppercase
                    tracking-[.08em]
                    text-white
                  "
                >
                  Buy EXPOSE
                </h3>

              </div>

            </div>


            {/* =================================================
                PRICE
            ================================================== */}

            <div
              className="
                relative
                mt-6
                overflow-hidden
                rounded-[8px]
                border
                border-purple/[0.18]
                bg-purple/[0.045]
                px-5
                py-5
              "
            >

              <div
                className="
                  pointer-events-none
                  absolute
                  -right-10
                  -top-10
                  h-32
                  w-32
                  rounded-full
                  bg-purple/[0.12]
                  blur-[35px]
                "
              />

              <div className="relative flex items-center justify-between">

                <div>

                  <span
                    className="
                      block
                      text-[8px]
                      uppercase
                      tracking-[.17em]
                      text-[#6f6a77]
                    "
                  >
                    Current planning rate
                  </span>

                  <div className="mt-1 flex items-baseline gap-2">

                    <strong
                      className="
                        text-[27px]
                        font-bold
                        tracking-[-.04em]
                        text-white
                      "
                    >
                      ${RATE}
                    </strong>

                    <span
                      className="
                        text-[9px]
                        uppercase
                        tracking-[.1em]
                        text-[#77737e]
                      "
                    >
                      / EXPOSE
                    </span>

                  </div>

                </div>


                <div
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-purple/20
                    bg-purple/[0.08]
                    text-purple
                    animate-floatIcon
                  "
                >
                  <Sparkles size={16} />
                </div>

              </div>

            </div>


            {/* =================================================
                PROGRESS
            ================================================== */}

            <div className="mt-6">

              <div
                className="
                  flex
                  items-center
                  justify-between
                  text-[9px]
                  uppercase
                  tracking-[.1em]
                "
              >

                <span className="text-[#6f6a77]">
                  Raised

                  <b className="ml-1 text-[#d8d5dc]">
                    {RAISED.toLocaleString()} USDT
                  </b>
                </span>

                <span className="text-[#6f6a77]">
                  Target

                  <b className="ml-1 text-[#d8d5dc]">
                    {TARGET.toLocaleString()} USDT
                  </b>
                </span>

              </div>


              <div
                className="
                  relative
                  mt-3
                  h-[6px]
                  overflow-hidden
                  rounded-full
                  bg-white/[0.07]
                "
              >

                <span
                  className="
                    relative
                    block
                    h-full
                    rounded-full
                    bg-purple
                    shadow-[0_0_12px_rgba(155,77,255,.65)]
                    transition-[width]
                    duration-1000
                    ease-out
                  "
                  style={{
                    width: `${progressPct}%`,
                  }}
                />

                <span
                  className="
                    absolute
                    inset-y-0
                    left-0
                    w-[90px]
                    -translate-x-full
                    bg-gradient-to-r
                    from-transparent
                    via-white/40
                    to-transparent
                    animate-progressShine
                  "
                />

              </div>


              <div
                className="
                  mt-2
                  flex
                  justify-between
                  text-[8px]
                  uppercase
                  tracking-[.12em]
                  text-[#57525f]
                "
              >

                <span>
                  {progressPct.toFixed(0)}% funded
                </span>

                <span>
                  Presale target
                </span>

              </div>

            </div>


            {/* =================================================
                INPUTS
            ================================================== */}

            <div className="mt-7 space-y-4">

              {/* PAY */}

              <div>

                <div className="flex items-center justify-between">

                  <label
                    className="
                      text-[9px]
                      font-bold
                      uppercase
                      tracking-[.12em]
                      text-[#aaa6b0]
                    "
                  >
                    Amount you pay
                  </label>

                  <span className="text-[8px] text-[#5f5b65]">
                    Balance = 0 USDT
                  </span>

                </div>


                <div
                  className="
                    mt-2
                    flex
                    items-center
                    gap-3
                    rounded-[7px]
                    border
                    border-white/[0.09]
                    bg-[#0d0d11]
                    px-4
                    py-4
                    transition-all
                    duration-300
                    hover:border-white/[0.15]
                    focus-within:border-purple/60
                    focus-within:bg-[#101016]
                    focus-within:shadow-[0_0_0_3px_rgba(155,77,255,.07),0_0_25px_rgba(155,77,255,.06)]
                  "
                >

                  <div
                    className="
                      flex
                      h-8
                      w-8
                      shrink-0
                      items-center
                      justify-center
                      overflow-hidden
                      rounded-full
                      bg-white/[0.07]
                    "
                  >
                    <img
                      src={USDT_icon}
                      alt="USDT"
                      className="
                        h-full
                        w-full
                        rounded-full
                        object-cover
                      "
                    />
                  </div>


                  <input
                    type="text"
                    value={payAmount}
                    onChange={handlePayChange}
                    placeholder="Enter USDT amount"
                    inputMode="decimal"
                    className="
                      w-full
                      border-0
                      bg-transparent
                      text-sm
                      font-medium
                      text-white
                      outline-none
                      placeholder:text-[#4f4b55]
                    "
                  />


                  <span
                    className="
                      text-[8px]
                      font-bold
                      uppercase
                      tracking-[.1em]
                      text-[#77737e]
                    "
                  >
                    USDT
                  </span>

                </div>

              </div>


              {/* SWAP */}

              <div
                className="
                  relative
                  flex
                  items-center
                  justify-center
                  py-1
                "
              >

                <div
                  className="
                    absolute
                    left-0
                    right-0
                    h-px
                    bg-white/[0.07]
                  "
                />

                <div
                  className="
                    relative
                    z-10
                    flex
                    h-8
                    w-8
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/[0.1]
                    bg-[#08080b]
                    text-purple
                    shadow-[0_0_20px_rgba(155,77,255,.12)]
                    animate-swapPulse
                  "
                >
                  <ArrowRight
                    size={12}
                    className="rotate-90"
                  />
                </div>

              </div>


              {/* RECEIVE */}

              <div>

                <div className="flex items-center justify-between">

                  <label
                    className="
                      text-[9px]
                      font-bold
                      uppercase
                      tracking-[.12em]
                      text-[#aaa6b0]
                    "
                  >
                    Amount you get
                  </label>

                  <span className="text-[8px] text-[#5f5b65]">
                    Balance = 0.00 EXPOSE
                  </span>

                </div>


                <div
                  className="
                    mt-2
                    flex
                    items-center
                    gap-3
                    rounded-[7px]
                    border
                    border-white/[0.09]
                    bg-[#0d0d11]
                    px-4
                    py-4
                    transition-all
                    duration-300
                    hover:border-white/[0.15]
                    focus-within:border-purple/60
                    focus-within:bg-[#101016]
                    focus-within:shadow-[0_0_0_3px_rgba(155,77,255,.07),0_0_25px_rgba(155,77,255,.06)]
                  "
                >

                  <div
                    className="
                      flex
                      h-8
                      w-8
                      shrink-0
                      items-center
                      justify-center
                      overflow-hidden
                      rounded-full
                      bg-purple/[0.1]
                    "
                  >
                    <img
                      src={currency_icon}
                      alt="EXPOSE"
                      className="
                        h-full
                        w-full
                        object-contain
                      "
                    />
                  </div>


                  <input
                    type="text"
                    value={receiveAmount}
                    onChange={handleReceiveChange}
                    placeholder="Enter EXPOSE amount"
                    inputMode="decimal"
                    className="
                      w-full
                      border-0
                      bg-transparent
                      text-sm
                      font-medium
                      text-white
                      outline-none
                      placeholder:text-[#4f4b55]
                    "
                  />


                  <span
                    className="
                      text-[8px]
                      font-bold
                      uppercase
                      tracking-[.1em]
                      text-purple
                    "
                  >
                    EXPOSE
                  </span>

                </div>

              </div>

            </div>


            {/* =================================================
                BUTTONS
            ================================================== */}

            <div
              className="
                mt-6
                grid
                grid-cols-1
                gap-3
                sm:grid-cols-2
              "
            >

              {/* CONNECT WALLET */}

              <button
                type="button"
                onClick={handleConnectWallet}
                className="
                  group/btn
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-[6px]
                  border
                  border-white/[0.1]
                  bg-white/[0.025]
                  px-5
                  py-4
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[.1em]
                  text-white
                  transition-all
                  duration-300
                  hover:border-purple/30
                  hover:bg-purple/[0.06]
                "
              >

                <Wallet
                  size={16}
                  className="
                    text-purple
                    transition-transform
                    duration-300
                    group-hover/btn:scale-110
                  "
                />

                Connect Wallet

              </button>


              {/* BUY */}

              <button
                type="button"
                onClick={handleBuy}
                className="
                  group/buy
                  relative
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  overflow-hidden
                  rounded-[6px]
                  bg-purple
                  px-5
                  py-4
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[.1em]
                  text-white
                  shadow-[0_0_25px_rgba(155,77,255,.14)]
                  transition-all
                  duration-300
                  hover:bg-[#ad69ff]
                  hover:shadow-[0_0_40px_rgba(155,77,255,.32)]
                  active:scale-[.98]
                "
              >

                <span
                  className="
                    absolute
                    inset-y-0
                    -left-[80%]
                    w-[45%]
                    skew-x-[-20deg]
                    bg-white/25
                    transition-all
                    duration-700
                    group-hover/buy:left-[130%]
                  "
                />

                <span className="relative">
                  Buy Now
                </span>

                <ArrowRight
                  size={16}
                  className="
                    relative
                    transition-transform
                    duration-300
                    group-hover/buy:translate-x-1
                  "
                />

              </button>

            </div>


            {/* =================================================
                FOOTER
            ================================================== */}

            <div
              className="
                mt-6
                border-t
                border-white/[0.07]
                pt-5
              "
            >

              <div className="flex items-start gap-3">

                <div
                  className="
                    flex
                    h-7
                    w-7
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/[0.08]
                    bg-white/[0.025]
                  "
                >
                  <LockKeyhole
                    size={12}
                    className="text-purple"
                  />
                </div>


                <div>

                  <div className="flex items-center gap-2">

                    <span
                      className="
                        text-[8px]
                        font-bold
                        uppercase
                        tracking-[.14em]
                        text-[#77737e]
                      "
                    >
                      Presale information
                    </span>

                    <ShieldCheck
                      size={11}
                      className="text-[#5d5864]"
                    />

                  </div>


                  <p
                    className="
                      mt-1
                      text-[11px]
                      leading-[1.7]
                      text-[#5c5862]
                    "
                  >
                    Presale has not yet launched — figures above
                    are illustrative. Final pricing, allocation and
                    launch conditions remain subject to final project
                    decisions.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
 