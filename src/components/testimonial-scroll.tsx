/* eslint-disable @next/next/no-img-element */
import { Marquee } from "@/components/ui/marquee";
import { cn } from "@/lib/utils";

export interface TestimonialCardProps
  extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  role: string;
  img?: string;
  description: React.ReactNode;
  className?: string;
  linkedin?: string;
}

export const TestimonialCard = ({
  description,
  name,
  img,
  role,
  className,
  linkedin,
  ...props
}: TestimonialCardProps) => {
  const content = (
    <>
      <div className="select-none leading-relaxed font-normal text-primary/90">
        {description}
      </div>

      <div className="flex w-full select-none items-center justify-start gap-3.5">
        <img src={img} alt={name} className="size-8 rounded-full" />

        <div>
          <p className="font-medium text-primary/90">{name}</p>
          <p className="text-xs font-normal text-primary/50">{role}</p>
        </div>
      </div>
    </>
  );

  const cardClasses = cn(
    "flex w-full cursor-pointer break-inside-avoid flex-col items-center justify-between gap-6 rounded-xl p-4",
    // light styles
    "bg-accent",
    "shadow-[0px_0px_0px_1px_rgba(0,0,0,0.04),0px_8px_12px_-4px_rgba(15,12,12,0.08),0px_1px_2px_0px_rgba(15,12,12,0.10)] dark:shadow-[0px_0px_0px_1px_rgba(250,250,250,0.1),0px_0px_0px_1px_#18181B,0px_8px_12px_-4px_rgba(15,12,12,0.3),0px_1px_2px_0px_rgba(15,12,12,0.3)]",
    className,
  );

  if (linkedin) {
    return (
      <a
        href={linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className={cardClasses}
      >
        {content}
      </a>
    );
  }

  return (
    <div className={cardClasses} {...props}>
      {content}
    </div>
  );
};

interface Testimonial {
  id: string;
  name: string;
  role: string;
  img: string;
  description: React.ReactNode;
  linkedin?: string;
}

export function SocialProofTestimonials({
  testimonials,
}: {
  testimonials: Testimonial[];
}) {
  return (
    <div className="h-full">
      <div className="px-10">
        <div className="relative max-h-[750px] overflow-hidden">
          <div className="gap-0 md:columns-2">
            {/* Left column with 3 testimonials */}
            <Marquee
              vertical
              className="[--duration:60s]"
            >
              {testimonials.slice(0, 3).map((card, idx) => (
                <TestimonialCard {...card} key={idx} />
              ))}
            </Marquee>
            {/* Right column with 2 testimonials */}
            <Marquee
              vertical
              className="[--duration:50s]"
            >
              {testimonials.slice(3, 5).map((card, idx) => (
                <TestimonialCard {...card} key={idx} />
              ))}
            </Marquee>
          </div>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/6 md:h-1/5 w-full bg-gradient-to-t from-background from-20%"></div>
          <div className="pointer-events-none absolute inset-x-0 top-0 h-1/6 md:h-1/5 w-full bg-gradient-to-b from-background from-20%"></div>
        </div>
      </div>
    </div>
  );
}
