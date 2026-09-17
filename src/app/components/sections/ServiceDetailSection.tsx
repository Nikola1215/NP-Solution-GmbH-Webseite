import Link from "next/link";
import { SlideFromLeft, SlideFromRight, StaggerContainer, StaggerItem, HoverLift } from "../motion-primitives";
import { ArrowRight, CheckIcon } from "../icons";
import { CONTACT_HREF } from "../nav-links";

function FeatureCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="h-full bg-[#111] border border-white/5 rounded-xl p-5 hover:border-brand/25 transition-colors group">
      <div className="flex items-start gap-3">
        <div className="w-7 h-7 rounded-lg bg-brand/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-brand/20 transition-colors">
          <CheckIcon />
        </div>
        <div>
          <p className="font-semibold text-white mb-1 text-sm">{title}</p>
          <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
        </div>
      </div>
    </div>
  );
}

export default function ServiceDetailSection({
  id, number, tag, title, subheadline, description, features, reverse = false,
}: {
  id: string; number: string; tag: string; title: string;
  subheadline?: string; description: string;
  features: [string, string][]; reverse?: boolean;
}) {
  const TextCol = reverse ? SlideFromRight : SlideFromLeft;
  return (
    <section id={id} className="py-20 px-6 border-b border-white/5">
      <div className={`max-w-6xl mx-auto flex flex-col ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"} gap-16 items-start`}>
        <TextCol className="flex-1 space-y-5 lg:pt-2">
          <div className="flex items-center gap-3">
            <span className="text-brand text-sm font-mono font-medium">{number}</span>
            <span className="w-8 h-px bg-brand/40" />
            <span className="text-brand text-xs font-semibold tracking-widest uppercase">{tag}</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight">{title}</h2>
          {subheadline && <p className="text-white/70 text-lg font-medium leading-snug">{subheadline}</p>}
          <p className="text-gray-400 text-lg leading-relaxed">{description}</p>
          <Link href={CONTACT_HREF} className="inline-flex items-center gap-2 text-brand font-medium text-sm hover:gap-3 transition-all">
            Kontakt aufnehmen <ArrowRight />
          </Link>
        </TextCol>
        <StaggerContainer className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-3" stagger={0.1} delay={0.15}>
          {features.map(([t, d]) => (
            <StaggerItem key={t}>
              <HoverLift className="h-full">
                <FeatureCard title={t} desc={d} />
              </HoverLift>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
