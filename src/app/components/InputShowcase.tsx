import React from 'react';
import { ComponentPageLayout, ComponentSection, ApiReference } from './ComponentPageLayout';
import { Input } from './mspbotsui';
import { MagnifyingGlassIcon, EnvelopeClosedIcon, LockClosedIcon, CheckCircledIcon } from '@radix-ui/react-icons';

export function InputShowcase() {
  const props = [
    { name: 'label', type: 'string', default: 'undefined' },
    { name: 'error', type: 'string', default: 'undefined' },
    { name: 'success', type: 'string', default: 'undefined' },
    { name: 'leftIcon', type: 'ReactNode', default: 'undefined' },
    { name: 'rightIcon', type: 'ReactNode', default: 'undefined' },
    { name: 'type', type: 'string', default: '"text"' },
  ];

  return (
    <ComponentPageLayout
      title="Input"
      description="Foundational controls for manual data entry and interaction patterns."
      props={props}
      prev={{ label: 'Button', href: '#' }}
    >
      <ComponentSection 
        code={`<Input placeholder="Placeholder" />`}
      >
        <div className="w-full max-w-sm">
          <Input placeholder="Placeholder" />
        </div>
      </ComponentSection>

      <ApiReference props={props} />

      <div className="space-y-20">
        <ComponentSection 
          title="Basic"
          description="Use the Input component to capture user text input."
          code={`<Input 
  placeholder="Find components..." 
  leftIcon={<MagnifyingGlassIcon />} 
/>`}
        >
          <div className="w-full max-w-sm">
            <Input placeholder="Find components..." leftIcon={<MagnifyingGlassIcon />} />
          </div>
        </ComponentSection>

        <ComponentSection 
          title="Validation States" 
          description="Provide feedback for error and success states."
          code={`<Flex direction="column" gap="4">
  <Input error="Invalid email format" defaultValue="user@invalid" />
  <Input success="Username available" defaultValue="mspbots-pro" />
</Flex>`}
        >
          <div className="w-full max-w-md grid grid-cols-1 sm:grid-cols-2 gap-8">
            <Input label="Error State" error="Invalid email format" defaultValue="user@invalid" />
            <Input label="Success State" success="Username available" defaultValue="mspbots-pro" />
          </div>
        </ComponentSection>

        <ComponentSection 
          title="Password" 
          description="Standard password input pattern."
          code={`<Input type="password" label="Password" placeholder="••••••••" />`}
        >
          <div className="w-full max-w-sm">
            <Input type="password" label="Password" placeholder="••••••••" leftIcon={<LockClosedIcon />} />
          </div>
        </ComponentSection>

        <ComponentSection 
          title="Disabled" 
          description="Prevent user interaction using the disabled prop."
          code={`<Input disabled label="Disabled Input" placeholder="You cannot type here" />`}
        >
          <div className="w-full max-w-sm">
            <Input disabled label="Disabled Input" placeholder="You cannot type here" />
          </div>
        </ComponentSection>
      </div>
    </ComponentPageLayout>
  );
}