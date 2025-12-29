import React from 'react';
import { ComponentBooleanIcon, DesktopIcon } from '@radix-ui/react-icons';
import { OverviewCard, PageHeader } from '../components/shared';

interface ComponentsProps {
  onNavigate: (tab: string) => void;
}

export function Components({ onNavigate }: ComponentsProps) {
  const items = [
    {
      icon: ComponentBooleanIcon,
      title: "Buttons",
      description: "Interactive triggers for user actions and process flows.",
      route: "buttons"
    },
    {
      icon: DesktopIcon,
      title: "Inputs",
      description: "Form controls and interaction patterns for data gathering.",
      route: "inputs"
    }
  ];

  return (
    <div className="space-y-16">
      <section>
        <PageHeader
          title="Library Overview"
          description="Reusable, production-ready UI elements designed to work seamlessly together."
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