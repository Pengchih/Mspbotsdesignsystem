import React from 'react';
import { ComponentExample } from '../../components/ComponentExample';
import { ChevronDownIcon } from '@radix-ui/react-icons';

export function CardShowcase() {
  return (
    <div className="w-fit mx-auto space-y-10 pb-20">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Card</h1>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
          Displays a card with header, content, and footer.
        </p>
      </div>

      {/* General Preview */}
      <div className="flex flex-wrap gap-4 p-12 border border-border rounded-[8px] bg-background items-center justify-center min-h-[160px]">
        <div className="mspbots-card w-[350px]">
          <div className="mspbots-card-header">
            <h3 className="mspbots-card-title">Notification</h3>
            <p className="mspbots-card-description">You have 3 unread messages.</p>
          </div>
          <div className="mspbots-card-content">
            <div className="p-4 bg-secondary/50 rounded-md text-sm text-secondary-foreground">
               Your subscription will expire soon.
            </div>
          </div>
          <div className="mspbots-card-footer">
            <button className="mspbots-button mspbots-button-primary mspbots-button-sm w-full">Mark as read</button>
          </div>
        </div>
      </div>

      <div className="space-y-12">
        <ComponentExample
          title="Simple Card"
          description="A basic card with all sections."
          code={`<div className="mspbots-card w-[350px]">
  <div className="mspbots-card-header">
    <h3 className="mspbots-card-title">Create project</h3>
    <p className="mspbots-card-description">Deploy your new project in one-click.</p>
  </div>
  <div className="mspbots-card-content">
    <div className="space-y-4">
      <div className="mspbots-input-container">
        <label className="mspbots-input-label">Name</label>
        <input className="mspbots-input" placeholder="Name of your project" />
      </div>
      <div className="mspbots-input-container">
        <label className="mspbots-input-label">Framework</label>
        <div className="mspbots-select-wrapper">
          <select className="mspbots-select">
            <option value="next">Next.js</option>
            <option value="svelte">SvelteKit</option>
          </select>
          <ChevronDownIcon className="mspbots-select-arrow" width={15} height={15} />
        </div>
      </div>
    </div>
  </div>
  <div className="mspbots-card-footer justify-between">
    <button className="mspbots-button mspbots-button-outline mspbots-button-md">Cancel</button>
    <button className="mspbots-button mspbots-button-primary mspbots-button-md">Deploy</button>
  </div>
</div>`}
        >
          <div className="mspbots-card w-full max-w-[350px]">
            <div className="mspbots-card-header">
              <h3 className="mspbots-card-title">Create project</h3>
              <p className="mspbots-card-description">Deploy your new project in one-click.</p>
            </div>
            <div className="mspbots-card-content">
              <div className="space-y-4">
                <div className="mspbots-input-container">
                  <label className="mspbots-input-label">Name</label>
                  <input className="mspbots-input" placeholder="Name of your project" />
                </div>
                <div className="mspbots-input-container">
                  <label className="mspbots-input-label">Framework</label>
                  <div className="mspbots-select-wrapper">
                    <select className="mspbots-select">
                      <option value="next">Next.js</option>
                      <option value="svelte">SvelteKit</option>
                    </select>
                    <ChevronDownIcon className="mspbots-select-arrow" width={15} height={15} />
                  </div>
                </div>
              </div>
            </div>
            <div className="mspbots-card-footer justify-between">
              <button className="mspbots-button mspbots-button-outline mspbots-button-md">Cancel</button>
              <button className="mspbots-button mspbots-button-primary mspbots-button-md">Deploy</button>
            </div>
          </div>
        </ComponentExample>
      </div>
    </div>
  );
}
