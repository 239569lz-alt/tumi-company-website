type Props = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export default function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left"
}: Props) {
  const centered = align === "center";

  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="mb-3 text-sm font-bold uppercase tracking-[0.24em] text-brand-600">
        {eyebrow}
      </p>
      <h2 className="text-balance text-3xl font-black tracking-tight text-slate-950 md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-base leading-8 text-slate-600 md:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
