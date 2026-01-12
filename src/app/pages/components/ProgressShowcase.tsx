import React from 'react';
import { ComponentExample } from '../../components/ComponentExample';
import { Progress } from '../../components/Progress';

export function ProgressShowcase() {
  return (
    <div className="w-full max-w-5xl mx-auto space-y-10 pb-20">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Progress</h1>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
          Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.
        </p>
      </div>

      {/* General Preview */}
      <div className="flex flex-col gap-8 p-12 border border-border rounded-[8px] bg-background justify-center min-h-[160px]">
        <div className="flex gap-8 items-center justify-center flex-wrap">
          <div className="flex-1 min-w-[200px] space-y-4">
            <Progress value={25} semantic="brand" />
            <Progress value={50} semantic="success" />
            <Progress value={75} semantic="warning" />
            <Progress value={100} semantic="error" />
          </div>
          <div className="flex gap-4">
             <Progress value={75} type="circle" showValue />
             <Progress value={60} type="dashboard" semantic="success" showValue />
          </div>
        </div>
      </div>

      <div className="space-y-12">
        <ComponentExample
          title="Semantics"
          description="Progress bars come in 4 semantic colors."
          code={`<Progress value={40} semantic="brand" />
<Progress value={40} semantic="success" />
<Progress value={40} semantic="warning" />
<Progress value={40} semantic="error" />`}
        >
          <div className="flex flex-col gap-4 w-full max-w-md">
            <Progress value={40} semantic="brand" />
            <Progress value={40} semantic="success" />
            <Progress value={40} semantic="warning" />
            <Progress value={40} semantic="error" />
          </div>
        </ComponentExample>

        <ComponentExample
          title="Sizes"
          description="Progress bars are available in two sizes: sm (default) and lg."
          code={`<Progress value={60} size="sm" />
<Progress value={60} size="lg" />`}
        >
          <div className="flex flex-col gap-4 w-full max-w-md">
            <Progress value={60} size="sm" />
            <Progress value={60} size="lg" />
          </div>
        </ComponentExample>

        <ComponentExample
          title="Segments"
          description="You can customize the number of segments. Use segments={1} for a continuous bar."
          code={`<Progress value={60} segments={4} />
<Progress value={60} segments={1} />
<Progress value={60} segments={10} />`}
        >
          <div className="flex flex-col gap-4 w-full max-w-md">
            <Progress value={60} segments={4} />
            <Progress value={60} segments={1} />
            <Progress value={60} segments={10} />
          </div>
        </ComponentExample>
        
        <ComponentExample
          title="Values"
          description="Progress values from 0 to 100."
          code={`<Progress value={0} />
<Progress value={25} />
<Progress value={50} />
<Progress value={75} />
<Progress value={100} />`}
        >
          <div className="flex flex-col gap-4 w-full max-w-md">
             <Progress value={0} />
             <Progress value={25} />
             <Progress value={50} />
             <Progress value={75} />
             <Progress value={100} />
          </div>
        </ComponentExample>

        <ComponentExample
          title="Circular Style"
          description="Circular progress indicators."
          code={`<Progress value={25} type="circle" />
<Progress value={50} type="circle" semantic="success" />
<Progress value={75} type="circle" semantic="warning" showValue />
<Progress value={100} type="circle" semantic="error" showValue />`}
        >
          <div className="flex gap-8 items-center">
            <Progress value={25} type="circle" />
            <Progress value={50} type="circle" semantic="success" />
            <Progress value={75} type="circle" semantic="warning" showValue />
            <Progress value={100} type="circle" semantic="error" showValue />
          </div>
        </ComponentExample>

        <ComponentExample
          title="Dashboard Style"
          description="Dashboard style progress indicators (270 degrees)."
          code={`<Progress value={25} type="dashboard" />
<Progress value={50} type="dashboard" semantic="success" />
<Progress value={75} type="dashboard" semantic="warning" showValue />
<Progress value={100} type="dashboard" semantic="error" showValue />`}
        >
          <div className="flex gap-8 items-center">
            <Progress value={25} type="dashboard" />
            <Progress value={50} type="dashboard" semantic="success" />
            <Progress value={75} type="dashboard" semantic="warning" showValue />
            <Progress value={100} type="dashboard" semantic="error" showValue />
          </div>
        </ComponentExample>

        <ComponentExample
          title="Custom Dimensions"
          description="You can customize the width and stroke width."
          code={`<Progress value={60} type="circle" circleWidth={120} strokeWidth={12} showValue />
<Progress value={60} type="dashboard" circleWidth={80} strokeWidth={6} />`}
        >
          <div className="flex gap-8 items-center">
            <Progress value={60} type="circle" circleWidth={120} strokeWidth={12} showValue />
            <Progress value={60} type="dashboard" circleWidth={80} strokeWidth={6} />
          </div>
        </ComponentExample>
      </div>
    </div>
  );
}
