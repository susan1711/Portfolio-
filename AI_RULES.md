# AI Development Rules

Version: 1.0

Project: Personal Portfolio

Owner: Sudharsan

---

# Purpose

This document defines the development rules that every AI coding assistant must follow when contributing to this project.

The goal is to ensure consistency, maintainability, performance, and scalability throughout the portfolio.

These rules take priority over AI-generated assumptions.

---

# Core Principles

Every change must improve the project.

Avoid unnecessary complexity.

Choose readability over cleverness.

Prefer simple, maintainable solutions.

Follow existing patterns instead of introducing new ones.

---

# Development Philosophy

The portfolio should feel like a professionally engineered product.

Every feature should have a clear purpose.

Avoid adding features that do not improve the user experience.

---

# Project Structure

Respect the existing folder structure.

Do not create new folders unless there is a strong architectural reason.

Group related files together.

Keep imports organized.

---

# Component Rules

Components must be:

- Reusable
- Small
- Focused
- Easy to understand

A component should solve one problem.

Avoid large components with multiple responsibilities.

---

# Styling Rules

Use Tailwind CSS utilities whenever possible.

Avoid inline styles.

Maintain consistent spacing.

Use the design system for colors, typography, spacing, and layout.

Do not introduce random spacing or colors.

---

# Design Consistency

Before creating a new UI component:

- Check whether a similar component already exists.
- Reuse existing components whenever possible.
- Keep visual consistency across all pages.

---

# Content Management

Never hardcode portfolio content inside components.

All editable content should come from structured content files.

Examples:

- Projects
- Skills
- Experience
- Learning
- Social Links
- Site Metadata

Updating content should not require editing UI components.

---

# Performance

Prioritize performance.

Avoid unnecessary dependencies.

Avoid unnecessary re-renders.

Optimize images.

Lazy load heavy components when appropriate.

Write efficient React code.

---

# Accessibility

Every feature should be accessible.

Use semantic HTML.

Maintain keyboard navigation.

Provide focus states.

Use meaningful labels.

Ensure sufficient color contrast.

---

# Responsive Design

Every page must work well on:

- Mobile
- Tablet
- Laptop
- Desktop

Never build desktop-only layouts.

Test responsiveness before considering a feature complete.

---

# Animations

Animations should improve usability.

Preferred animations:

- Fade
- Slide
- Scale
- Stagger

Avoid excessive motion.

Keep interactions smooth and subtle.

---

# Code Quality

Write self-explanatory code.

Use meaningful names.

Avoid duplicated logic.

Remove unused code.

Keep functions focused.

Refactor when repetition appears.

---

# Error Handling

Handle edge cases gracefully.

Avoid runtime errors.

Provide sensible fallbacks where necessary.

Do not ignore TypeScript warnings without justification.

---

# File Creation Rules

Before creating a new file:

- Check if an existing file can be extended.
- Avoid unnecessary fragmentation.
- Keep the project structure clean.

---

# Dependencies

Do not install new packages unless they provide significant value.

Prefer built-in solutions when possible.

Explain why a new dependency is required before adding it.

---

# Git Practices

Make focused commits.

One logical feature per commit.

Use meaningful commit messages.

Do not mix unrelated changes.

---

# SEO

Follow SEO best practices.

Use meaningful page titles.

Use descriptive metadata.

Maintain clean URLs.

Optimize images.

Use semantic structure.

---

# Documentation

When introducing major architectural decisions:

- Update the relevant documentation.
- Keep documentation concise.
- Remove outdated information.

Documentation should evolve alongside the project.

---

# Decision Making

When multiple solutions exist:

Choose the solution that is:

1. Easier to maintain.
2. Easier to understand.
3. Easier to extend.
4. Better aligned with the project goals.

Avoid overengineering.

---

# What AI Should Never Do

Do not redesign existing sections without being asked.

Do not change colors, typography, or spacing without following the design system.

Do not remove features unless instructed.

Do not introduce unnecessary animations.

Do not add placeholder content without clearly marking it.

Do not create duplicate components.

Do not ignore accessibility.

Do not sacrifice readability for clever code.

---

# Definition of Done

A task is complete only when:

✓ Code is clean.

✓ Responsive.

✓ Accessible.

✓ Uses reusable components.

✓ Matches the design system.

✓ No obvious bugs.

✓ TypeScript passes.

✓ ESLint passes.

✓ Performance is considered.

✓ The solution is easy to maintain.

---

# AI Collaboration Workflow

For every task:

1. Understand the request.
2. Review existing project structure.
3. Reuse existing components.
4. Implement the smallest effective solution.
5. Verify responsiveness.
6. Verify accessibility.
7. Verify consistency.
8. Deliver clean, maintainable code.

---

# Guiding Principle

Build the portfolio as if it will be maintained for the next five years.

Every decision should improve the quality of the project without adding unnecessary complexity.