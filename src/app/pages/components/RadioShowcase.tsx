import React from 'react';
import { ComponentExample } from '../../components/ComponentExample';
import { RadioGroup, RadioGroupItem } from '../../components/Radio';

export function RadioShowcase() {
  return (
    <div className="w-full max-w-5xl mx-auto space-y-10 pb-20">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Radio</h1>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
          A set of checkable buttons—known as radio buttons—where no more than one of the buttons can be checked at a time.
        </p>
      </div>

      {/* General Preview */}
      <div className="flex flex-wrap gap-4 p-12 border border-border rounded-[8px] bg-background items-center justify-center min-h-[160px]">
        <RadioGroup className="flex flex-col gap-2.5" defaultValue="default">
          <RadioGroupItem value="default" label="Default" />
          <RadioGroupItem value="comfortable" label="Comfortable" />
          <RadioGroupItem value="compact" label="Compact" />
        </RadioGroup>
      </div>

      <div className="space-y-12">
        <ComponentExample
          title="Default"
          description="A standard radio component."
          code={`import { RadioGroup, RadioGroupItem } from '@mspbotsui/components';

<RadioGroup defaultValue="default">
  <RadioGroupItem value="default" label="Default" />
  <RadioGroupItem value="comfortable" label="Comfortable" />
</RadioGroup>`}
        >
          <RadioGroup defaultValue="default">
            <RadioGroupItem value="default" id="r1-example" label="Default" />
            <RadioGroupItem value="comfortable" id="r2-example" label="Comfortable" />
          </RadioGroup>
        </ComponentExample>

        <ComponentExample
          title="Sizes"
          description="Radio buttons come in three sizes: xs, sm (default), and md."
          code={`<RadioGroup size="xs">...</RadioGroup>
<RadioGroup size="sm">...</RadioGroup>
<RadioGroup size="md">...</RadioGroup>`}
        >
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <span className="text-sm text-muted-foreground">Extra Small (xs)</span>
              <RadioGroup size="xs" defaultValue="xs-1" direction="horizontal">
                <RadioGroupItem value="xs-1" label="Option 1" />
                <RadioGroupItem value="xs-2" label="Option 2" />
              </RadioGroup>
            </div>
            
            <div className="flex flex-col gap-2">
              <span className="text-sm text-muted-foreground">Small (sm) - Default</span>
              <RadioGroup size="sm" defaultValue="sm-1" direction="horizontal">
                <RadioGroupItem value="sm-1" label="Option 1" />
                <RadioGroupItem value="sm-2" label="Option 2" />
              </RadioGroup>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-sm text-muted-foreground">Medium (md)</span>
              <RadioGroup size="md" defaultValue="md-1" direction="horizontal">
                <RadioGroupItem value="md-1" label="Option 1" />
                <RadioGroupItem value="md-2" label="Option 2" />
              </RadioGroup>
            </div>
          </div>
        </ComponentExample>

        <ComponentExample
          title="Bordered Variant"
          description="Radio buttons can have a bordered style, useful for card-like selections."
          code={`<RadioGroup variant="bordered" size="sm">
  <RadioGroupItem value="option1" label="Option 1" />
  <RadioGroupItem value="option2" label="Option 2" />
</RadioGroup>`}
        >
          <div className="flex flex-col gap-8">
             <div className="flex flex-col gap-2">
              <span className="text-sm text-muted-foreground">Extra Small (xs)</span>
              <RadioGroup variant="bordered" size="xs" defaultValue="b-xs-1" direction="horizontal">
                <RadioGroupItem value="b-xs-1" label="Option 1" />
                <RadioGroupItem value="b-xs-2" label="Option 2" />
                <RadioGroupItem value="b-xs-3" label="Disabled" disabled />
              </RadioGroup>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-sm text-muted-foreground">Small (sm)</span>
              <RadioGroup variant="bordered" size="sm" defaultValue="b-sm-1" direction="horizontal">
                <RadioGroupItem value="b-sm-1" label="Option 1" />
                <RadioGroupItem value="b-sm-2" label="Option 2" />
                <RadioGroupItem value="b-sm-3" label="Disabled" disabled />
              </RadioGroup>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-sm text-muted-foreground">Medium (md)</span>
              <RadioGroup variant="bordered" size="md" defaultValue="b-md-1" direction="horizontal">
                <RadioGroupItem value="b-md-1" label="Option 1" />
                <RadioGroupItem value="b-md-2" label="Option 2" />
                <RadioGroupItem value="b-md-3" label="Disabled" disabled />
              </RadioGroup>
            </div>
          </div>
        </ComponentExample>
        
        <ComponentExample
          title="Options Prop API"
          description="You can also use the options prop for simpler configuration."
          code={`const options = [
  { value: '1', label: 'Option 1' },
  { value: '2', label: 'Option 2' },
];

<RadioGroup options={options} variant="bordered" />`}
        >
           <RadioGroup 
             variant="bordered" 
             defaultValue="opt-1" 
             direction="horizontal"
             options={[
               { value: 'opt-1', label: 'Option 1' },
               { value: 'opt-2', label: 'Option 2' },
               { value: 'opt-3', label: 'Disabled', disabled: true },
             ]} 
           />
        </ComponentExample>
      </div>
    </div>
  );
}
