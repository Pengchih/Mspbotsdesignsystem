import React from 'react';
import { ComponentExample } from '../../components/ComponentExample';

export function AvatarShowcase() {
  return (
    <div className="w-fit mx-auto space-y-10 pb-20">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Avatar</h1>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
          An image element with a fallback for representing the user.
        </p>
      </div>

      {/* General Preview */}
      <div className="flex flex-wrap gap-4 p-12 border border-border rounded-[8px] bg-background items-center justify-center min-h-[160px]">
        <div className="mspbots-avatar mspbots-avatar-lg">
           <img 
              src="https://images.unsplash.com/photo-1672685667592-0392f458f46f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMG1hbnxlbnwxfHx8fDE3Njc2NjU5NTl8MA&ixlib=rb-4.1.0&q=80&w=1080" 
              alt="User"
              className="mspbots-avatar-img"
            />
        </div>
        <div className="mspbots-avatar mspbots-avatar-md">
           <span className="mspbots-avatar-fallback">CN</span>
        </div>
      </div>

      <div className="space-y-12">
        <ComponentExample
          title="Sizes"
          description="Avatars come in three sizes: small (32px), medium (40px), and large (48px)."
          code={`<div className="mspbots-avatar mspbots-avatar-sm">
  <span className="mspbots-avatar-fallback">SM</span>
</div>

<div className="mspbots-avatar mspbots-avatar-md">
  <span className="mspbots-avatar-fallback">MD</span>
</div>

<div className="mspbots-avatar mspbots-avatar-lg">
  <span className="mspbots-avatar-fallback">LG</span>
</div>`}
        >
          <div className="flex items-end gap-6">
            <div className="mspbots-avatar mspbots-avatar-sm">
              <span className="mspbots-avatar-fallback">SM</span>
            </div>
            <div className="mspbots-avatar mspbots-avatar-md">
              <span className="mspbots-avatar-fallback">MD</span>
            </div>
            <div className="mspbots-avatar mspbots-avatar-lg">
              <span className="mspbots-avatar-fallback">LG</span>
            </div>
          </div>
        </ComponentExample>

        <ComponentExample
          title="Image & Fallback"
          description="Displays an image if available, otherwise shows a fallback."
          code={`<div className="mspbots-avatar mspbots-avatar-md">
  <img 
    src="https://images.unsplash.com/photo-1649589244330-09ca58e4fa64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200" 
    alt="User"
    className="mspbots-avatar-img"
  />
</div>

<div className="mspbots-avatar mspbots-avatar-md">
  <span className="mspbots-avatar-fallback">JD</span>
</div>`}
        >
          <div className="flex items-center gap-6">
            <div className="mspbots-avatar mspbots-avatar-md">
              <img 
                src="https://images.unsplash.com/photo-1649589244330-09ca58e4fa64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200" 
                alt="User"
                className="mspbots-avatar-img"
              />
            </div>
            <div className="mspbots-avatar mspbots-avatar-md">
              <span className="mspbots-avatar-fallback">JD</span>
            </div>
          </div>
        </ComponentExample>
      </div>
    </div>
  );
}
