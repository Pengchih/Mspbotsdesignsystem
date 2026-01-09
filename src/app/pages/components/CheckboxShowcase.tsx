import React from 'react';
import { ComponentExample } from '../../components/ComponentExample';
import { Checkbox } from '../../components/Checkbox';

export function CheckboxShowcase() {
  const [checked, setChecked] = React.useState<boolean | 'indeterminate'>(true);

  return (
    <div className="w-full max-w-5xl mx-auto space-y-10 pb-20">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Checkbox</h1>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
          A control that allows the user to toggle between checked and not checked.
        </p>
      </div>

      {/* General Preview */}
      <div className="flex flex-wrap gap-4 p-12 border border-border rounded-[8px] bg-background items-center justify-center min-h-[160px]">
        <Checkbox 
          id="c1" 
          defaultChecked 
          label="Accept terms and conditions" 
        />
      </div>

      <div className="space-y-12">
        <ComponentExample
          title="Default"
          description="A standard checkbox component."
          code={`import { Checkbox } from '@mspbotsui/components';

<Checkbox id="terms" label="Accept terms and conditions" />`}
        >
          <Checkbox id="terms" label="Accept terms and conditions" />
        </ComponentExample>

        <ComponentExample
          title="Sizes"
          description="Checkboxes come in three sizes: xs, sm (default), and md."
          code={`<Checkbox size="xs" label="Extra Small" />
<Checkbox size="sm" label="Small" />
<Checkbox size="md" label="Medium" />`}
        >
          <div className="flex flex-col gap-4">
            <Checkbox size="xs" id="size-xs" label="Extra Small (xs)" />
            <Checkbox size="sm" id="size-sm" label="Small (sm)" />
            <Checkbox size="md" id="size-md" label="Medium (md)" />
          </div>
        </ComponentExample>

        <ComponentExample
          title="Bordered Variant"
          description="Checkboxes can have a bordered style, useful for card-like selections."
          code={`<Checkbox variant="bordered" size="sm" label="Option 1" />
<Checkbox variant="bordered" size="sm" label="Option 2" checked />`}
        >
          <div className="flex flex-col gap-4">
             <div className="flex gap-4 items-center">
                <Checkbox variant="bordered" size="xs" id="b-xs-1" label="Extra Small" />
                <Checkbox variant="bordered" size="xs" id="b-xs-2" label="Checked" defaultChecked />
             </div>
             <div className="flex gap-4 items-center">
                <Checkbox variant="bordered" size="sm" id="b-sm-1" label="Small" />
                <Checkbox variant="bordered" size="sm" id="b-sm-2" label="Checked" defaultChecked />
             </div>
             <div className="flex gap-4 items-center">
                <Checkbox variant="bordered" size="md" id="b-md-1" label="Medium" />
                <Checkbox variant="bordered" size="md" id="b-md-2" label="Checked" defaultChecked />
             </div>
             <div className="flex gap-4 items-center">
                <Checkbox variant="bordered" size="md" id="b-md-3" label="Disabled" disabled />
                <Checkbox variant="bordered" size="md" id="b-md-4" label="Checked Disabled" defaultChecked disabled />
             </div>
          </div>
        </ComponentExample>
        
        <ComponentExample
          title="Indeterminate State"
          description="Checkboxes can be in an indeterminate state, often used for 'select all' functionality."
          code={`const [checked, setChecked] = React.useState<boolean | 'indeterminate'>('indeterminate');

<Checkbox 
  checked={checked}
  onCheckedChange={setChecked}
  label="Select All" 
/>`}
        >
          <div className="flex flex-col gap-4">
            <Checkbox 
              id="indeterminate"
              checked={checked}
              onCheckedChange={setChecked}
              label="Indeterminate (Click to cycle)" 
            />
            <div className="pl-6 flex flex-col gap-2">
               <Checkbox checked={checked === true} disabled label="Child 1" />
               <Checkbox checked={checked === true} disabled label="Child 2" />
            </div>
            <div className="flex gap-2">
                <button 
                  className="text-xs px-2 py-1 bg-secondary rounded"
                  onClick={() => setChecked(true)}
                >
                  Set Checked
                </button>
                <button 
                  className="text-xs px-2 py-1 bg-secondary rounded"
                  onClick={() => setChecked(false)}
                >
                  Set Unchecked
                </button>
                <button 
                  className="text-xs px-2 py-1 bg-secondary rounded"
                  onClick={() => setChecked('indeterminate')}
                >
                  Set Indeterminate
                </button>
            </div>
          </div>
        </ComponentExample>
      </div>
    </div>
  );
}
