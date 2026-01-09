import React from 'react';
import { 
  CheckIcon, 
  Cross1Icon, 
  ChevronRightIcon, 
  ChevronLeftIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  MagnifyingGlassIcon,
  GearIcon,
  BellIcon,
  PersonIcon,
  ExitIcon,
  HomeIcon,
  FileTextIcon,
  CalendarIcon,
  ChatBubbleIcon,
  EnvelopeClosedIcon,
  LockClosedIcon,
  TrashIcon,
  Pencil1Icon,
  PlusIcon,
  MinusIcon,
  CopyIcon,
  ExternalLinkIcon,
  DownloadIcon,
  UploadIcon,
  ReloadIcon,
  InfoCircledIcon,
  ExclamationTriangleIcon,
  CheckCircledIcon,
  CrossCircledIcon
} from '@radix-ui/react-icons';
import { toast } from 'sonner';
import { copyToClipboard } from '../../utils/clipboard';

const IconItem = ({ name, icon: Icon }: { name: string; icon: React.ElementType }) => {
  const handleCopy = async () => {
    await copyToClipboard(`<${name} />`, `Copied <${name} /> to clipboard`);
  };

  return (
    <div 
      className="flex flex-col items-center justify-center p-6 gap-3 rounded-lg border border-border bg-card hover:shadow-md hover:border-primary/20 transition-all duration-200 cursor-pointer group"
      onClick={handleCopy}
    >
      <div className="p-3 rounded-md bg-muted/50 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
        <Icon className="w-[15px] h-[15px]" />
      </div>
      <span className="text-xs text-muted-foreground group-hover:text-foreground text-center font-mono">{name}</span>
    </div>
  );
};

export function Icons() {
  return (
    <div className="w-full max-w-5xl mx-auto space-y-10 pb-20">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Icons</h1>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
          The system uses Radix UI Icons. All icons are standardized to 15x15px size for consistency across the application.
          Click any icon to copy its component name.
        </p>
      </div>

      <section className="space-y-6">
        <h3 className="text-lg font-semibold tracking-tight border-b border-border/40 pb-4">Navigation</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          <IconItem name="ChevronRightIcon" icon={ChevronRightIcon} />
          <IconItem name="ChevronLeftIcon" icon={ChevronLeftIcon} />
          <IconItem name="ChevronDownIcon" icon={ChevronDownIcon} />
          <IconItem name="ChevronUpIcon" icon={ChevronUpIcon} />
          <IconItem name="HomeIcon" icon={HomeIcon} />
          <IconItem name="ExternalLinkIcon" icon={ExternalLinkIcon} />
        </div>
      </section>

      <section className="space-y-6">
        <h3 className="text-lg font-semibold tracking-tight border-b border-border/40 pb-4">Actions</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          <IconItem name="PlusIcon" icon={PlusIcon} />
          <IconItem name="MinusIcon" icon={MinusIcon} />
          <IconItem name="Pencil1Icon" icon={Pencil1Icon} />
          <IconItem name="TrashIcon" icon={TrashIcon} />
          <IconItem name="CopyIcon" icon={CopyIcon} />
          <IconItem name="DownloadIcon" icon={DownloadIcon} />
          <IconItem name="UploadIcon" icon={UploadIcon} />
          <IconItem name="ReloadIcon" icon={ReloadIcon} />
          <IconItem name="MagnifyingGlassIcon" icon={MagnifyingGlassIcon} />
        </div>
      </section>

      <section className="space-y-6">
        <h3 className="text-lg font-semibold tracking-tight border-b border-border/40 pb-4">Status & Feedback</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          <IconItem name="CheckIcon" icon={CheckIcon} />
          <IconItem name="Cross1Icon" icon={Cross1Icon} />
          <IconItem name="InfoCircledIcon" icon={InfoCircledIcon} />
          <IconItem name="ExclamationTriangleIcon" icon={ExclamationTriangleIcon} />
          <IconItem name="CheckCircledIcon" icon={CheckCircledIcon} />
          <IconItem name="CrossCircledIcon" icon={CrossCircledIcon} />
        </div>
      </section>

      <section className="space-y-6">
        <h3 className="text-lg font-semibold tracking-tight border-b border-border/40 pb-4">General</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          <IconItem name="PersonIcon" icon={PersonIcon} />
          <IconItem name="GearIcon" icon={GearIcon} />
          <IconItem name="BellIcon" icon={BellIcon} />
          <IconItem name="LockClosedIcon" icon={LockClosedIcon} />
          <IconItem name="FileTextIcon" icon={FileTextIcon} />
          <IconItem name="CalendarIcon" icon={CalendarIcon} />
          <IconItem name="ChatBubbleIcon" icon={ChatBubbleIcon} />
          <IconItem name="EnvelopeClosedIcon" icon={EnvelopeClosedIcon} />
          <IconItem name="ExitIcon" icon={ExitIcon} />
        </div>
      </section>
    </div>
  );
}
