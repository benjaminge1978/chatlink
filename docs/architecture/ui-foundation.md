# UI Foundation

This document sets the MVP UI stack and conventions to ensure a fast, accessible, and consistent interface.

## Stack Decisions
- Styling: Tailwind CSS (utility-first, predictable theming)
- UI Primitives: Radix UI (accessible, unstyled components)
- Component Library: shadcn/ui (optional; generate selectively for speed)

## Rationale
- Tailwind accelerates MVP velocity and keeps bundles lean when used thoughtfully.
- Radix ensures accessibility and interaction quality without locking visual design.
- shadcn/ui provides production-ready compositions when needed without over-coupling.

## Conventions
- Use RSC by default; keep client components minimal.
- Prefer composition over heavy design systems for MVP; extract shared components incrementally.
- Accessibility: WCAG AA, keyboard navigation, focus states. Validate with automated checks (axe) and manual spot checks.

## Structure (example)
```
src/
  app/
  components/
    ui/        # shared building blocks (atoms/molecules)
    patterns/  # composite patterns (forms, dialogs)
```

## Theming
- Start with light theme; define CSS variables for color semantics.
- Add dark mode as a progressive enhancement post-MVP.

## Testing
- Use Testing Library for component behavior and accessibility assertions.
- Keep snapshot tests to a minimum; prefer role/label-based queries.

