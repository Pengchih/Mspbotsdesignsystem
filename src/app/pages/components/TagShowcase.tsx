import React from 'react';
import { ComponentExample } from '../../components/ComponentExample';
import { Tag, TagColor } from '../../components/Tag';
import { PersonIcon, CheckIcon, Cross2Icon } from '@radix-ui/react-icons';

export function TagShowcase() {
  const colors: TagColor[] = [
    'seafoam', 'blue', 'celery', 'orange', 'red', 'slate',
    'yellow', 'magenta', 'indigo', 'purple', 'cyan', 'green', 'chartreuse'
  ];

  return (
    <div className="w-full max-w-5xl mx-auto space-y-10 pb-20">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Tag</h1>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
          Used for items that need to be labeled, categorized, or organized using keywords that describe them.
        </p>
      </div>

      {/* General Preview */}
      <div className="flex flex-wrap gap-4 p-12 border border-border rounded-[8px] bg-background items-center justify-center min-h-[160px]">
        <Tag color="seafoam">Seafoam</Tag>
        <Tag color="blue" variant="solid">Blue</Tag>
        <Tag color="celery" round>Celery</Tag>
        <Tag color="orange" onClose={() => alert('Closed')}>Closable</Tag>
      </div>

      <div className="space-y-12">
        <ComponentExample
          title="Variants"
          description="Tags come in three variants: plain (default), solid, and outline."
          code={`<Tag variant="plain">Plain</Tag>
<Tag variant="solid">Solid</Tag>
<Tag variant="outline">Outline</Tag>`}
        >
          <div className="flex gap-4">
            <Tag variant="plain">Plain</Tag>
            <Tag variant="solid">Solid</Tag>
            <Tag variant="outline">Outline</Tag>
          </div>
        </ComponentExample>

        <ComponentExample
          title="Sizes"
          description="Tags are available in two sizes: sm and md (default)."
          code={`<Tag size="sm">Small</Tag>
<Tag size="md">Medium</Tag>`}
        >
          <div className="flex gap-4 items-center">
            <Tag size="sm">Small</Tag>
            <Tag size="md">Medium</Tag>
          </div>
        </ComponentExample>

        <ComponentExample
          title="Shapes"
          description="Tags can be fully rounded."
          code={`<Tag>Default</Tag>
<Tag round>Rounded</Tag>`}
        >
          <div className="flex gap-4">
            <Tag>Default</Tag>
            <Tag round>Rounded</Tag>
          </div>
        </ComponentExample>

        <ComponentExample
          title="Colors"
          description="Supports a wide range of palette colors."
          code={`<Tag color="seafoam">Seafoam</Tag>
<Tag color="blue">Blue</Tag>
...`}
        >
          <div className="space-y-4">
             <div className="flex flex-wrap gap-2">
              {colors.map(color => (
                <Tag key={`${color}-plain`} color={color}>{color}</Tag>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              {colors.map(color => (
                <Tag key={`${color}-solid`} color={color} variant="solid">{color}</Tag>
              ))}
            </div>
          </div>
        </ComponentExample>

        <ComponentExample
          title="Icons"
          description="Tags can have an icon on the left."
          code={`<Tag icon={<PersonIcon />}>User</Tag>
<Tag icon={<CheckIcon />} color="celery">Completed</Tag>`}
        >
          <div className="flex gap-4">
            <Tag icon={<PersonIcon />}>User</Tag>
            <Tag icon={<CheckIcon />} color="celery">Completed</Tag>
          </div>
        </ComponentExample>

        <ComponentExample
          title="Closable"
          description="Tags can be closable."
          code={`<Tag onClose={() => {}}>Closable</Tag>
<Tag variant="solid" onClose={() => {}}>Closable Solid</Tag>`}
        >
          <div className="flex gap-4">
            <Tag onClose={() => {}}>Closable</Tag>
            <Tag variant="solid" onClose={() => {}}>Closable Solid</Tag>
            <Tag variant="outline" onClose={() => {}}>Closable Outline</Tag>
          </div>
        </ComponentExample>
      </div>
    </div>
  );
}
