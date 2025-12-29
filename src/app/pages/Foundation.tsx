import React from "react";
import { BlendingModeIcon, FontFamilyIcon } from "@radix-ui/react-icons";
import { OverviewCard, PageHeader } from "../components/shared";

interface FoundationProps {
  onNavigate: (tab: string) => void;
}

export function Foundation({ onNavigate }: FoundationProps) {
  const items = [
    {
      icon: BlendingModeIcon,
      title: "Colors",
      description: "Our functional and aesthetic palette for consistent branding.",
      route: "colors"
    },
    {
      icon: FontFamilyIcon,
      title: "Typography",
      description: "System-wide font families, weights, and readability guidelines.",
      route: "typography"
    }
  ];

  return (
    <div className="space-y-16">
      <section>
        <PageHeader
          title="Foundation Overview"
          description="Core visual language of our applications, ensuring consistency across all products."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {items.map((item) => (
            <OverviewCard
              key={item.route}
              icon={item.icon}
              title={item.title}
              description={item.description}
              onClick={() => onNavigate(item.route)}
            />
          ))}
        </div>
      </section>
    </div>
  );
}