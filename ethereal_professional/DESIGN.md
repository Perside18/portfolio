---
name: Ethereal Professional
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f4'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1a1c1c'
  on-surface-variant: '#45464d'
  inverse-surface: '#2f3131'
  inverse-on-surface: '#f0f1f1'
  outline: '#76777d'
  outline-variant: '#c6c6cd'
  surface-tint: '#565e74'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#131b2e'
  on-primary-container: '#7c839b'
  inverse-primary: '#bec6e0'
  secondary: '#0058be'
  on-secondary: '#ffffff'
  secondary-container: '#2170e4'
  on-secondary-container: '#fefcff'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#191c1e'
  on-tertiary-container: '#818486'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae2fd'
  primary-fixed-dim: '#bec6e0'
  on-primary-fixed: '#131b2e'
  on-primary-fixed-variant: '#3f465c'
  secondary-fixed: '#d8e2ff'
  secondary-fixed-dim: '#adc6ff'
  on-secondary-fixed: '#001a42'
  on-secondary-fixed-variant: '#004395'
  tertiary-fixed: '#e0e3e5'
  tertiary-fixed-dim: '#c4c7c9'
  on-tertiary-fixed: '#191c1e'
  on-tertiary-fixed-variant: '#444749'
  background: '#f9f9f9'
  on-background: '#1a1c1c'
  surface-variant: '#e2e2e2'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 72px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  display-lg-mobile:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 40px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0em
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0em
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.0'
    letterSpacing: 0.05em
  caption:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: '1.4'
    letterSpacing: 0em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1200px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
  stack-sm: 16px
  stack-md: 32px
  stack-lg: 80px
---

## Brand & Style
The design system is engineered for a premium personal portfolio that balances executive leadership with technical innovation. The aesthetic is a refined blend of **Minimalism** and **Glassmorphism**, prioritizing clarity, generous whitespace, and high-end depth.

The brand personality is authoritative yet approachable—evoking a sense of calm expertise. Visuals should feel "expensive" through the use of precise alignment, subtle translucent layers, and a restrained color palette that allows the portfolio content to take center stage.

## Colors
The palette is anchored by **Deep Navy (#0F172A)**, providing a sophisticated alternative to pure black for text and primary branding. **Pure White (#FFFFFF)** serves as the primary canvas, while **Soft Light Gray (#F8FAFC)** creates subtle section differentiation without breaking the minimalist flow.

The **Accent Blue (#3B82F6)** is used sparingly for interactive elements, progress indicators, and focal points. Success, warning, and error states should utilize desaturated versions of green and red to maintain the professional, low-vibrancy atmosphere.

## Typography
This design system utilizes **Inter** exclusively to achieve a systematic, "tech-literate" appearance. The hierarchy relies on extreme scale contrast rather than decorative fonts. 

Large display titles use heavy weights and tight letter-spacing for a high-fashion, editorial impact. Body copy is set with generous line height (1.6) to ensure maximum readability and a relaxed, open feel. Labels use a slight tracking (letter spacing) increase and uppercase styling to provide a structural contrast to the fluid body text.

## Layout & Spacing
The layout follows a **Fixed Grid** philosophy for desktop to maintain a premium "gallery" feel, centering the content at a maximum width of 1200px. On mobile, the system transitions to a fluid model with 20px side margins.

Spacing follows an 8px base unit. Vertical rhythm is characterized by "breathing room"—using `stack-lg` (80px) between major sections to prevent visual clutter. Internal component spacing remains tight (`stack-sm`) to keep related information grouped and organized.

## Elevation & Depth
Depth is communicated through **Glassmorphism** and soft, multi-layered ambient shadows. 

1.  **The Base:** Pure White or Soft Light Gray.
2.  **The Glass Layer:** Used for navigation bars and floating cards. These elements feature a `backdrop-filter: blur(12px)`, a `20%` white opacity background, and a very thin `1px` white border at `30%` opacity to simulate a light-catching edge.
3.  **Shadows:** Shadows are highly diffused. Use a primary shadow of `0 10px 30px rgba(15, 23, 42, 0.05)` and a secondary, tighter shadow of `0 2px 4px rgba(15, 23, 42, 0.02)` for a realistic, grounded effect.

## Shapes
The shape language is modern and approachable. A `roundedness: 2` (0.5rem base) is used for standard inputs and buttons. However, larger containers such as Project Cards and the "Hero" section use `rounded-xl` (1.5rem) to emphasize the soft, premium nature of the glassmorphic elements. All decorative icons should use a "rounded" or "soft" corner style to match.

## Components
-   **Buttons:** Primary buttons are Solid Deep Navy with white text. Secondary buttons are "Ghost" style with the thin 1px Navy border. All buttons feature a 200ms ease-in-out transition on hover, slightly increasing the shadow depth.
-   **Project Cards:** Large-format cards with `rounded-xl` corners. They utilize the glassmorphism effect on the footer/overlay where project titles reside.
-   **Chips/Tags:** Used for "Skills" or "Tech Stack." These are Pill-shaped with a background of Soft Light Gray and Deep Navy text at `label-md` sizing.
-   **Input Fields:** Minimalist design with only a bottom border (2px) that animates from Gray to Accent Blue upon focus.
-   **Navigation:** A fixed-top header with a heavy backdrop blur. The active link is indicated by a small, 4px Accent Blue dot centered beneath the label.
-   **Micro-animations:** Utilize subtle vertical "float" movements for cards when hovered (Y-axis: -4px). Page transitions should use a gentle fade-in with a slight upward slide.