import React from 'react';
import { Slider } from '../../components/Slider';
import { ComponentExample } from '../../components/ComponentExample';

export function SliderShowcase() {
  return (
    <div className="space-y-12 max-w-4xl mx-auto p-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight mb-2">Slider</h1>
        <p className="text-lg text-muted-foreground mb-8">
          An input where the user selects a value from within a given range.
        </p>
        <div className="p-4 bg-yellow-100 text-yellow-800 rounded mb-8">
            Debug: Slider Showcase Loaded Successfully
        </div>
      </div>

      <div className="space-y-10">
        <section>
          <h2 className="text-xl font-semibold mb-4">Basic Usage</h2>
          <ComponentExample
            title="Standard Slider"
            description="A default slider with a range of 0 to 100."
            code={`<Slider defaultValue={[50]} max={100} step={1} />`}
          >
            <div className="w-full px-4">
              <Slider defaultValue={[50]} max={100} step={1} />
            </div>
          </ComponentExample>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Range Slider</h2>
          <ComponentExample
            title="Range Selection"
            description="You can provide multiple values to create a range slider."
            code={`<Slider defaultValue={[20, 80]} max={100} step={1} />`}
          >
            <div className="w-full px-4">
              <Slider defaultValue={[20, 80]} max={100} step={1} />
            </div>
          </ComponentExample>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">With Marks</h2>
          <ComponentExample
            title="Discrete Marks"
            description="Slider with specific marks and labels."
            code={`<Slider 
  defaultValue={[40]} 
  max={100} 
  step={10} 
  marks={[0, 25, 50, 75, 100]} 
/>`}
          >
            <div className="w-full px-4 pt-4 pb-8">
              <Slider 
                defaultValue={[40]} 
                max={100} 
                step={10} 
                marks={[0, 25, 50, 75, 100]} 
              />
            </div>
          </ComponentExample>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Vertical Orientation</h2>
          <ComponentExample
            title="Vertical Slider"
            description="Slider rendered vertically."
            code={`<div className="h-[200px] flex gap-12 p-4">
  <Slider 
    defaultValue={[50]} 
    orientation="vertical" 
    max={100} 
    step={1} 
  />
  <Slider 
    defaultValue={[20, 80]} 
    orientation="vertical" 
    max={100} 
    step={1} 
    marks={[0, 50, 100]}
  />
</div>`}
          >
            <div className="h-[200px] flex gap-12 p-4">
              <Slider 
                defaultValue={[50]} 
                orientation="vertical" 
                max={100} 
                step={1} 
              />
              <Slider 
                defaultValue={[20, 80]} 
                orientation="vertical" 
                max={100} 
                step={1} 
                marks={[0, 50, 100]}
              />
            </div>
          </ComponentExample>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Disabled State</h2>
          <ComponentExample
            title="Disabled"
            description="Slider in disabled state."
            code={`<Slider defaultValue={[50]} disabled />`}
          >
            <div className="w-full px-4">
              <Slider defaultValue={[50]} disabled />
            </div>
          </ComponentExample>
        </section>
      </div>
    </div>
  );
}
