export default function SectionHeading({ eyebrow, title, description, light = false }) {
  return (
    <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-8 md:gap-10 mb-10 md:mb-[60px] animate-fadeUp">
      <div>
        <div className="flex items-center gap-[9px] text-purple text-[10px] font-bold tracking-[.18em] uppercase">
          {eyebrow}
        </div>
        <h2 className={`heading-tight mt-[18px] uppercase text-[clamp(38px,7vw,90px)] leading-[.9] ${light ? 'text-white' : 'text-ink'}`}>
          {title}
        </h2>
      </div>
      <p className={`max-w-[320px] mr-0 md:mr-[4%] mb-0 md:mb-[5px] text-sm leading-[1.65] ${light ? 'text-darkmuted' : 'text-muted'}`}>
        {description}
      </p>
    </div>
  )
}
