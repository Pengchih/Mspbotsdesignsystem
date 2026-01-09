import React from 'react';
import { Switch } from '../../components/Switch';
import { ComponentExample } from '../../components/ComponentExample';

export function SwitchShowcase() {
  return (
    <div className="space-y-12 max-w-4xl mx-auto p-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight mb-2">Switch</h1>
        <p className="text-lg text-muted-foreground mb-8">
          A control that allows the user to toggle between checked and not checked.
        </p>
      </div>

      <div className="space-y-10">
        <section>
          <h2 className="text-xl font-semibold mb-4">Basic Usage</h2>
          <ComponentExample
            title="Standard Switch"
            description="The default switch component."
            code={`<Switch />`}
          >
            <Switch />
          </ComponentExample>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Sizes</h2>
          <ComponentExample
            title="Switch Sizes"
            description="Available in xs, sm, and md sizes."
            code={`<div className="flex items-center gap-8">
  <Switch size="xs" />
  <Switch size="sm" />
  <Switch size="md" />
</div>`}
          >
            <div className="flex items-center gap-8">
              <Switch size="xs" />
              <Switch size="sm" />
              <Switch size="md" />
            </div>
          </ComponentExample>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Variants</h2>
          <ComponentExample
            title="Brand vs No-Brand"
            description="Brand style (Teal) vs No-Brand style (Green/Red)."
            code={`<div className="flex items-center gap-8">
  <Switch brand={true} defaultChecked />
  <Switch brand={false} defaultChecked />
  <Switch brand={false} />
</div>`}
          >
            <div className="flex items-center gap-8">
              <Switch brand={true} defaultChecked />
              <Switch brand={false} defaultChecked />
              <Switch brand={false} />
            </div>
          </ComponentExample>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">States</h2>
          <ComponentExample
            title="Disabled State"
            description="Switches can be disabled."
            code={`<div className="flex items-center gap-8">
  <Switch disabled />
  <Switch disabled checked />
  <Switch brand={false} disabled />
  <Switch brand={false} disabled checked />
</div>`}
          >
            <div className="flex items-center gap-8">
              <Switch disabled />
              <Switch disabled checked />
              <Switch brand={false} disabled />
              <Switch brand={false} disabled checked />
            </div>
          </ComponentExample>
        </section>
      </div>
    </div>
  );
}
