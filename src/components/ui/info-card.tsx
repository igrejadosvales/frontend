import { ReactNode } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface InfoCardProps {
  title: string;
  description: ReactNode;
  icon?: ReactNode;
  imageSrc?: string;
  imageAlt?: string;
  linkText?: string;
  linkHref?: string;
  className?: string;
}

export function InfoCard({
  title,
  description,
  icon,
  imageSrc,
  imageAlt = "",
  linkText,
  linkHref,
  className,
}: InfoCardProps) {
  const hasImage = !!imageSrc;

  return (
    <div
      className={cn(
        "group flex flex-col bg-card rounded-xl overflow-hidden border border-border transition-all duration-300 hover:border-border/80 hover:bg-accent/50 shadow-sm",
        className
      )}
    >
      {hasImage && (
        <div className="relative w-full h-48 overflow-hidden">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      )}

      <div className={cn("flex flex-col flex-1", hasImage ? "p-6" : "p-8")}>
        {!hasImage && icon && (
          <div className="mb-6 text-primary">
            <div className="w-10 h-10 [&>svg]:w-full [&>svg]:h-full">
              {icon}
            </div>
          </div>
        )}

        <h3 className="text-xl font-bold text-card-foreground mb-3">{title}</h3>

        <div className="text-muted-foreground text-sm leading-relaxed flex-1">
          {description}
        </div>

        {linkText && linkHref && (
          <div className="mt-7">
            <Link
              href={linkHref}
              className="inline-flex items-center text-sm font-bold text-primary hover:text-primary/80 transition-colors group/link"
            >
              {linkText}
              <ChevronRight className="ml-1 w-4 h-4 transition-transform group-hover/link:translate-x-1" />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
