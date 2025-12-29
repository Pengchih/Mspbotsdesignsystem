import React from 'react';
import { ComponentPageLayout, ComponentSection } from './ComponentPageLayout';
import { Button } from './mspbotsui';
import { BookmarkIcon, MagnifyingGlassIcon } from '@radix-ui/react-icons';

export function ButtonShowcase() {
  return (
    <ComponentPageLayout
      title="Button"
      description="Trigger an action or event, such as submitting a form or displaying a dialog."
      next={{ label: 'Input', href: '#' }}
    >
      {/* Main Preview */}
      <ComponentSection 
        code={`<div className="flex gap-4">
  <Button variant="primary">Primary</Button>
  <Button variant="secondary">Secondary</Button>
  <Button variant="outline">Outline</Button>
  <Button variant="ghost">Ghost</Button>
</div>`}
      >
        <div className="flex gap-4">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
        </div>
      </ComponentSection>

      {/* Examples */}
      <div className="space-y-20">
        <ComponentSection 
          title="Variant" 
          description="Use the variant prop to control the visual style of the button."
          code={`<div className="flex flex-wrap gap-4">
  <Button variant="primary">Primary</Button>
  <Button variant="secondary">Secondary</Button>
  <Button variant="outline">Outline</Button>
  <Button variant="ghost">Ghost</Button>
</div>`}
        >
          <div className="flex flex-wrap gap-4">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
          </div>
        </ComponentSection>

        <ComponentSection 
          title="Size" 
          description="Use the size prop to control the size of the button."
          code={`<div className="flex items-center gap-4">
  <Button size="sm">Small</Button>
  <Button size="md">Medium</Button>
  <Button size="lg">Large</Button>
</div>`}
        >
          <div className="flex items-center gap-4">
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
          </div>
        </ComponentSection>

        <ComponentSection 
          title="With icons" 
          description="You can insert icons directly inside the Button using leftIcon and rightIcon props."
          code={`<div className="flex gap-4">
  <Button variant="primary" leftIcon={<BookmarkIcon className="size-4" />}>Bookmark</Button>
  <Button variant="secondary" rightIcon={<MagnifyingGlassIcon className="size-4" />}>Search</Button>
</div>`}
        >
          <div className="flex gap-4">
            <Button variant="primary" leftIcon={<BookmarkIcon className="size-4" />}>Bookmark</Button>
            <Button variant="secondary" rightIcon={<MagnifyingGlassIcon className="size-4" />}>Search</Button>
          </div>
        </ComponentSection>

        <ComponentSection 
          title="Loading" 
          description="Use the loading prop to display a loading indicator."
          code={`<div className="flex gap-4">
  <Button variant="primary" loading>Loading</Button>
  <Button variant="secondary" loading>Loading</Button>
</div>`}
        >
          <div className="flex gap-4">
            <Button variant="primary" loading>Loading</Button>
            <Button variant="secondary" loading>Loading</Button>
          </div>
        </ComponentSection>

        <ComponentSection 
          title="Disabled" 
          description="Use the disabled prop to prevent user interaction."
          code={`<div className="flex gap-4">
  <Button variant="primary" disabled>Primary</Button>
  <Button variant="secondary" disabled>Secondary</Button>
  <Button variant="outline" disabled>Outline</Button>
</div>`}
        >
          <div className="flex gap-4">
            <Button variant="primary" disabled>Primary</Button>
            <Button variant="secondary" disabled>Secondary</Button>
            <Button variant="outline" disabled>Outline</Button>
          </div>
        </ComponentSection>
      </div>
    </ComponentPageLayout>
  );
}