---
name: Zenith Light
colors:
  surface: '#f9f9ff'
  surface-dim: '#d8d9e3'
  surface-bright: '#f9f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f3fd'
  surface-container: '#ecedf7'
  surface-container-high: '#e6e7f2'
  surface-container-highest: '#e1e2ec'
  on-surface: '#191b23'
  on-surface-variant: '#424754'
  inverse-surface: '#2e3038'
  inverse-on-surface: '#eff0fa'
  outline: '#727785'
  outline-variant: '#c2c6d6'
  surface-tint: '#005ac2'
  primary: '#0058be'
  on-primary: '#ffffff'
  primary-container: '#2170e4'
  on-primary-container: '#fefcff'
  inverse-primary: '#adc6ff'
  secondary: '#00687a'
  on-secondary: '#ffffff'
  secondary-container: '#57dffe'
  on-secondary-container: '#006172'
  tertiary: '#924700'
  on-tertiary: '#ffffff'
  tertiary-container: '#b75b00'
  on-tertiary-container: '#fffbff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d8e2ff'
  primary-fixed-dim: '#adc6ff'
  on-primary-fixed: '#001a42'
  on-primary-fixed-variant: '#004395'
  secondary-fixed: '#acedff'
  secondary-fixed-dim: '#4cd7f6'
  on-secondary-fixed: '#001f26'
  on-secondary-fixed-variant: '#004e5c'
  tertiary-fixed: '#ffdcc6'
  tertiary-fixed-dim: '#ffb786'
  on-tertiary-fixed: '#311400'
  on-tertiary-fixed-variant: '#723600'
  background: '#f9f9ff'
  on-background: '#191b23'
  surface-variant: '#e1e2ec'
typography:
  display:
    fontFamily: Inter
    fontSize: 4.5rem
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  h1:
    fontFamily: Inter
    fontSize: 3rem
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  h2:
    fontFamily: Inter
    fontSize: 2.25rem
    fontWeight: '600'
    lineHeight: '1.3'
  h3:
    fontFamily: Inter
    fontSize: 1.5rem
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 1.125rem
    fontWeight: '400'
    lineHeight: '1.75'
  body-md:
    fontFamily: Inter
    fontSize: 1rem
    fontWeight: '400'
    lineHeight: '1.6'
  label-sm:
    fontFamily: Inter
    fontSize: 0.875rem
    fontWeight: '500'
    lineHeight: '1.25'
    letterSpacing: 0.02em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 4px
  xs: 8px
  sm: 16px
  md: 24px
  lg: 40px
  xl: 64px
  container-max: 1280px
  gutter: 24px
---

## Brand & Style

This design system is built on a foundation of **Modern Minimalism** tailored for a high-end digital agency. The visual narrative centers on "Precision and Clarity," utilizing expansive whitespace to signify premium quality and operational confidence. 

The aesthetic avoids unnecessary decoration, instead relying on mathematical spacing, expert typography, and a "High-Contrast Light" approach. The interface should feel breathable yet structured, using subtle depth to guide the user's eye toward call-to-action elements without the friction of heavy borders or aggressive gradients.

## Colors

The palette is anchored by a pure white and light gray foundation to ensure a clinical, high-end feel. 

*   **Primary Accent:** Electric Blue is used exclusively for primary actions and critical focus states.
*   **Secondary Accent:** Cyan is reserved for supportive visual interest, such as data visualization or secondary badges.
*   **Neutral Foundation:** Slate tones provide the necessary contrast for legibility. Dark Slate ensures headings have a strong "ink" feel on the page, while Medium Slate provides a relaxed reading experience for body copy.

## Typography

The design system utilizes **Inter** for all text to lean into a systematic, "product-as-a-service" agency vibe. 

Headings use tight tracking and heavy weights to command attention and convey authority. Body text is set with generous line heights to maximize readability on light backgrounds. Labels and small utility text should be rendered in Medium Slate, often using medium weights to maintain crispness at smaller scales.

## Layout & Spacing

This design system employs a **Fixed Grid** model for desktop viewports, centering content within a 1280px container to maintain a focused, editorial layout. 

Spacing follows a strict 4pt / 8pt rhythmic scale. Use larger "xl" increments for vertical section padding to emphasize the "premium" use of space. Gutters are kept wide (24px) to ensure that even dense information displays feel airy and un-cluttered.

## Elevation & Depth

Depth is achieved through **Ambient Shadows** and tonal layering rather than lines. 

1.  **Low Elevation (Cards):** Use a subtle Y-offset shadow with a wide blur (e.g., `0px 4px 20px rgba(0,0,0,0.03)`).
2.  **High Elevation (Overlays/Dropdowns):** Use a more pronounced but still soft shadow (`0px 10px 30px rgba(0,0,0,0.06)`).
3.  **Borders:** Use the subtle Slate-200 (`#E2E8F0`) border only when necessary to define boundaries on white backgrounds, specifically for input fields and structural dividers.

## Shapes

The shape language is defined by **rounded-xl** standards. This soft geometry counteracts the high-contrast professional color palette, making the agency feel approachable and modern. 

Standard components (buttons, inputs) utilize the base roundedness, while large containers and card elements should utilize the maximum `rounded-xl` (1.5rem) setting to create a distinct, friendly silhouette.

## Components

### Buttons
Primary buttons use the Electric Blue background with white text. They should have no border, but a soft shadow that matches the "Low Elevation" profile. Hover states should slightly darken the blue without changing the shadow size.

### Cards
Cards are the primary container. They feature a white background, a 1px border of `#E2E8F0`, and the signature soft shadow. Corner radii must be `rounded-xl`.

### Input Fields
Inputs should have a background of `#F8FAFC` to subtly distinguish them from the card surface. The border should be `#E2E8F0`, transitioning to the Primary Electric Blue on focus with a 2px outer glow (using a 10% opacity blue).

### Chips & Badges
Use the Secondary Cyan color at 10% opacity for the background, with the text set in the full-strength Cyan. This adds a "tech" layer to the premium feel.

### Lists
Lists should be separated by thin `#E2E8F0` horizontal lines. Interactive list items should use a very light gray (`#F8FAFC`) hover state with a transition speed of 200ms.