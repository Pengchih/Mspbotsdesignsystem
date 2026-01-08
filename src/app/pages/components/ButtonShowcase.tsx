import React from 'react';
import { ComponentExample } from '../../components/ComponentExample';
import { Button } from '../../components/Button';
import { 
  PlayIcon, 
  PlusIcon, 
  TrashIcon, 
  Share1Icon, 
  DownloadIcon,
  PaperPlaneIcon,
  CheckIcon,
  InfoCircledIcon
} from '@radix-ui/react-icons';

export function ButtonShowcase() {
  return (
    <div className="w-fit mx-auto space-y-10 pb-20">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Button</h1>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
          Buttons allow users to take actions, and make choices, with a single tap.
          Multiple color styles, variants and sizes are available to fit different contexts.
        </p>
      </div>

      {/* General Preview */}
      <div className="flex flex-wrap gap-4 p-12 border border-border rounded-[8px] bg-background items-center justify-center min-h-[160px]">
        <Button colorStyle="primary" variant="solid" size="md">Primary</Button>
        <Button colorStyle="info" variant="solid" size="md">Info</Button>
        <Button colorStyle="success" variant="solid" size="md">Success</Button>
        <Button colorStyle="danger" variant="solid" size="md">Danger</Button>
      </div>

      <div className="space-y-12">
        {/* Color Styles - Solid */}
        <ComponentExample
          title="Color Styles (Solid Variant)"
          description="Four color styles are available: Primary for main actions, Info for neutral actions, Success for positive confirmations, and Danger for destructive actions."
          code={`import { Button } from '@mspbotsui/components';

<Button colorStyle="primary" variant="solid">Primary</Button>
<Button colorStyle="info" variant="solid">Info</Button>
<Button colorStyle="success" variant="solid">Success</Button>
<Button colorStyle="danger" variant="solid">Danger</Button>`}
        >
          <div className="flex flex-wrap gap-4 items-center justify-center">
            <Button colorStyle="primary" variant="solid">Primary</Button>
            <Button colorStyle="info" variant="solid">Info</Button>
            <Button colorStyle="success" variant="solid">Success</Button>
            <Button colorStyle="danger" variant="solid">Danger</Button>
          </div>
        </ComponentExample>

        {/* All Variants - Primary */}
        <ComponentExample
          title="Variants (Primary Style)"
          description="Each color style has four variants: Solid for main actions, Plain for subtle emphasis, Outline for secondary actions, and Ghost for minimal visual presence."
          code={`<Button colorStyle="primary" variant="solid">Solid</Button>
<Button colorStyle="primary" variant="plain">Plain</Button>
<Button colorStyle="primary" variant="outline">Outline</Button>
<Button colorStyle="primary" variant="ghost">Ghost</Button>`}
        >
          <div className="flex flex-wrap gap-4 items-center justify-center">
            <Button colorStyle="primary" variant="solid">Solid</Button>
            <Button colorStyle="primary" variant="plain">Plain</Button>
            <Button colorStyle="primary" variant="outline">Outline</Button>
            <Button colorStyle="primary" variant="ghost">Ghost</Button>
          </div>
        </ComponentExample>

        {/* Info Variants */}
        <ComponentExample
          title="Variants (Info Style)"
          description="Info style variants for neutral or informational actions."
          code={`<Button colorStyle="info" variant="solid">Solid</Button>
<Button colorStyle="info" variant="plain">Plain</Button>
<Button colorStyle="info" variant="outline">Outline</Button>
<Button colorStyle="info" variant="ghost">Ghost</Button>`}
        >
          <div className="flex flex-wrap gap-4 items-center justify-center">
            <Button colorStyle="info" variant="solid">Solid</Button>
            <Button colorStyle="info" variant="plain">Plain</Button>
            <Button colorStyle="info" variant="outline">Outline</Button>
            <Button colorStyle="info" variant="ghost">Ghost</Button>
          </div>
        </ComponentExample>

        {/* Success Variants */}
        <ComponentExample
          title="Variants (Success Style)"
          description="Success style variants for positive confirmations and completed actions."
          code={`<Button colorStyle="success" variant="solid">Solid</Button>
<Button colorStyle="success" variant="plain">Plain</Button>
<Button colorStyle="success" variant="outline">Outline</Button>
<Button colorStyle="success" variant="ghost">Ghost</Button>`}
        >
          <div className="flex flex-wrap gap-4 items-center justify-center">
            <Button colorStyle="success" variant="solid">Solid</Button>
            <Button colorStyle="success" variant="plain">Plain</Button>
            <Button colorStyle="success" variant="outline">Outline</Button>
            <Button colorStyle="success" variant="ghost">Ghost</Button>
          </div>
        </ComponentExample>

        {/* Danger Variants */}
        <ComponentExample
          title="Variants (Danger Style)"
          description="Danger style variants for destructive or irreversible actions."
          code={`<Button colorStyle="danger" variant="solid">Solid</Button>
<Button colorStyle="danger" variant="plain">Plain</Button>
<Button colorStyle="danger" variant="outline">Outline</Button>
<Button colorStyle="danger" variant="ghost">Ghost</Button>`}
        >
          <div className="flex flex-wrap gap-4 items-center justify-center">
            <Button colorStyle="danger" variant="solid">Solid</Button>
            <Button colorStyle="danger" variant="plain">Plain</Button>
            <Button colorStyle="danger" variant="outline">Outline</Button>
            <Button colorStyle="danger" variant="ghost">Ghost</Button>
          </div>
        </ComponentExample>

        {/* Sizes */}
        <ComponentExample
          title="Sizes"
          description="Buttons come in three sizes: small (24px), medium (32px), and large (40px)."
          code={`<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>`}
        >
          <div className="flex flex-wrap gap-4 items-end justify-center">
            <Button colorStyle="primary" variant="solid" size="sm">Small</Button>
            <Button colorStyle="primary" variant="solid" size="md">Medium</Button>
            <Button colorStyle="primary" variant="solid" size="lg">Large</Button>
          </div>
        </ComponentExample>

        {/* With Icons */}
        <ComponentExample
          title="With Icons"
          description="Icons can be added to buttons using leftIcon or rightIcon props to enhance meaning. Use 15px Radix UI icons for consistency."
          code={`import { PlusIcon, Share1Icon, TrashIcon, CheckIcon } from '@radix-ui/react-icons';

<Button colorStyle="primary" variant="solid" leftIcon={<PlusIcon width={15} height={15} />}>
  Add Item
</Button>

<Button colorStyle="success" variant="solid" leftIcon={<CheckIcon width={15} height={15} />}>
  Confirm
</Button>

<Button colorStyle="info" variant="outline" leftIcon={<Share1Icon width={15} height={15} />}>
  Share
</Button>

<Button colorStyle="danger" variant="outline" leftIcon={<TrashIcon width={15} height={15} />}>
  Delete
</Button>`}
        >
          <div className="flex flex-wrap gap-4 items-center justify-center">
            <Button colorStyle="primary" variant="solid" leftIcon={<PlusIcon width={15} height={15} />}>
              Add Item
            </Button>
            <Button colorStyle="success" variant="solid" leftIcon={<CheckIcon width={15} height={15} />}>
              Confirm
            </Button>
            <Button colorStyle="info" variant="outline" leftIcon={<Share1Icon width={15} height={15} />}>
              Share
            </Button>
            <Button colorStyle="danger" variant="outline" leftIcon={<TrashIcon width={15} height={15} />}>
              Delete
            </Button>
          </div>
        </ComponentExample>

        {/* Icon Positions */}
        <ComponentExample
          title="Icon Positions"
          description="Icons can be placed on the left or right side of the button text."
          code={`<Button leftIcon={<DownloadIcon width={15} height={15} />}>
  Download
</Button>

<Button rightIcon={<PaperPlaneIcon width={15} height={15} />}>
  Send
</Button>`}
        >
          <div className="flex flex-wrap gap-4 items-center justify-center">
            <Button colorStyle="primary" variant="solid" leftIcon={<DownloadIcon width={15} height={15} />}>
              Download
            </Button>
            <Button colorStyle="primary" variant="solid" rightIcon={<PaperPlaneIcon width={15} height={15} />}>
              Send
            </Button>
          </div>
        </ComponentExample>

        {/* Disabled State */}
        <ComponentExample
          title="Disabled State"
          description="Add the disabled prop to indicate that a button is not interactive."
          code={`<Button colorStyle="primary" variant="solid" disabled>Disabled Solid</Button>
<Button colorStyle="primary" variant="plain" disabled>Disabled Plain</Button>
<Button colorStyle="primary" variant="outline" disabled>Disabled Outline</Button>
<Button colorStyle="primary" variant="ghost" disabled>Disabled Ghost</Button>`}
        >
          <div className="flex flex-wrap gap-4 items-center justify-center">
            <Button colorStyle="primary" variant="solid" disabled>Disabled Solid</Button>
            <Button colorStyle="primary" variant="plain" disabled>Disabled Plain</Button>
            <Button colorStyle="primary" variant="outline" disabled>Disabled Outline</Button>
            <Button colorStyle="primary" variant="ghost" disabled>Disabled Ghost</Button>
          </div>
        </ComponentExample>

        {/* All Color Styles Disabled */}
        <ComponentExample
          title="Disabled State (All Color Styles)"
          description="Disabled buttons have consistent styling across all color styles."
          code={`<Button colorStyle="primary" variant="solid" disabled>Primary</Button>
<Button colorStyle="info" variant="solid" disabled>Info</Button>
<Button colorStyle="success" variant="solid" disabled>Success</Button>
<Button colorStyle="danger" variant="solid" disabled>Danger</Button>`}
        >
          <div className="flex flex-wrap gap-4 items-center justify-center">
            <Button colorStyle="primary" variant="solid" disabled>Primary</Button>
            <Button colorStyle="info" variant="solid" disabled>Info</Button>
            <Button colorStyle="success" variant="solid" disabled>Success</Button>
            <Button colorStyle="danger" variant="solid" disabled>Danger</Button>
          </div>
        </ComponentExample>
      </div>
    </div>
  );
}
