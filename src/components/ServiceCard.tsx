"use client";

import { Clock, DollarSign } from "lucide-react";
import { Service } from "@/lib/data";
import { useLanguage } from "@/components/LanguageProvider";

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const { copy } = useLanguage();
  const translatedService =
    copy.services[service.id as keyof typeof copy.services];

  return (
    <div className="group relative h-full flex flex-col bg-charcoal-800 border border-charcoal-600 rounded-lg p-6 transition-all duration-300 hover:border-gold-500/50 hover:-translate-y-1 hover:shadow-xl hover:shadow-gold-500/5">
      {/* Gold top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-gold-500/0 to-transparent rounded-t-lg transition-all duration-300 group-hover:via-gold-500/70" />

      <div className="flex items-start justify-between gap-4 mb-3">
        <h3 className="text-offwhite font-semibold text-lg leading-tight group-hover:text-gold-500 transition-colors duration-200">
          {translatedService.name}
        </h3>
        <span className="shrink-0 text-gold-500 font-bold text-xl">
          {service.price}
        </span>
      </div>

      <p className="text-muted text-sm leading-relaxed mb-5 flex-1">
        {translatedService.description}
      </p>

      <div className="flex items-center gap-4 text-xs text-muted">
        <span className="flex items-center gap-1.5">
          <Clock size={13} className="text-gold-500" />
          {service.duration}
        </span>
        <span className="flex items-center gap-1.5">
          <DollarSign size={13} className="text-gold-500" />
          {copy.common.startingAt} {service.price}
        </span>
      </div>
    </div>
  );
}
