# Implement Slider Component

## Analysis
The user wants to implement the `Slider` component based on Figma node `54448-517`.
- **Figma Data**: Confirms the component name is `Slider` with variants for `Position` (Horizontal/Vertical), `Range` (True/False), and `Marks` (True/False).
- **Existing Code**: The project uses `@radix-ui/react-slider` (installed). There is currently no `Slider.tsx` or CSS styles for it.

## Plan

### 1. Component Implementation (`src/app/components/Slider.tsx`)
Create a new `Slider` component wrapping `@radix-ui/react-slider`.
- **Props**:
    - `defaultValue` / `value`: `number[]` (Radix Slider always uses array).
    - `min`, `max`, `step`: Standard numeric props.
    - `orientation`: `'horizontal' | 'vertical'`.
    - `disabled`: Boolean.
    - `marks`: Optional array of objects `{ value: number, label: string }` or boolean to auto-generate.
    - `showTooltip`: Optional boolean to show value tooltip on hover/drag.
- **Structure**:
    - `SliderPrimitive.Root`
    - `SliderPrimitive.Track` -> `SliderPrimitive.Range`
    - `SliderPrimitive.Thumb` (render multiple if range)
    - Marks container (custom implementation positioned absolutely).

### 2. Styling (`src/styles/mspbotsui.css`)
Add CSS variables and classes for the slider.
- **Variables**:
    - `--mspbots-slider-track-bg`: Background color of the track (e.g., `#E4E7ED`).
    - `--mspbots-slider-range-bg`: Color of the filled range (e.g., Primary color).
    - `--mspbots-slider-thumb-size`: Size of the thumb (e.g., 20px).
    - `--mspbots-slider-thumb-border`: Border color of the thumb.
- **Classes**:
    - `.mspbots-slider-root`: Flex container, relative positioning.
    - `.mspbots-slider-track`: Relative, full width/height, background color, rounded.
    - `.mspbots-slider-range`: Absolute, background color, rounded.
    - `.mspbots-slider-thumb`: Block, shadow, border, hover states.
    - `.mspbots-slider-vertical`: Flex-col, height constraints.
    - `.mspbots-slider-horizontal`: Flex-row, width constraints.
    - `.mspbots-slider-mark`: Absolute position, text styles.

### 3. Documentation (`src/app/pages/Components/SliderShowcase.tsx`)
Create a showcase page to demonstrate:
- **Basic Slider**: Simple 0-100.
- **Range Slider**: Two thumbs.
- **Vertical Slider**: Vertical orientation.
- **With Marks**: Discrete steps with labels.
- **Disabled State**: Visual feedback.

### 4. Registration
- Export `Slider` in `src/app/components/index.ts`.
- Add `Slider` to `src/app/components/Sidebar.tsx` navigation.
- Add `Slider` card to `src/app/pages/Components.tsx` (Grid view).
- Update `src/app/App.tsx` to route to `SliderShowcase`.

## Next Steps
1. Create `Slider.tsx`.
2. Update `mspbotsui.css`.
3. Create `SliderShowcase.tsx`.
4. Register and verify.