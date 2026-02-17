---
title: "Redesigning Pleo's focus indicator"
description: "A deep dive into redesigning a core accessibility pattern, balancing brand, WCAG 2.2 compliance, and real-world edge cases"
order: 2
slug: "redesigning-pleos-focus-indicator"
---

## TL;DR

I redesigned Pleo’s focus indicator to be on-brand, accessible, and robust across edge cases like Windows High Contrast Mode. The update replaced the off-brand blue ring with a high-contrast black focus style, introduced context-specific variants, improved spacing, and added system-level fallbacks. The result was a consistent, WCAG 2.2–compliant focus indicator standardised in the design system and adopted across Pleo’s products.

## Context

One of my first tasks on Pleo’s design systems team was to redesign our focus indicator. It was a `2px` blue ring, which designers had long complained looked off-brand. It even spawned a Slack emoji meme of our team lead’s face outlined in blue.

## Research

Given the brief task description, I started by researching the following questions.

### What is a focus indicator?

A focus indicator is a visual cue (usually an outline) highlighting the currently focused element for keyboard users. Without it, sighted keyboard users can’t track their position or interactions, similar to a mouse cursor for mouse users.

### What do designers dislike about the existing focus indicator?

I interviewed five designers and identified three key issues:

1. **Color**: The blue ring felt off-brand; black was preferred
2. **Contrast**: Poor visibility against dark component borders
3. **Spacing**: The ring sat too close to elements, feeling cramped

### What do other design systems do?

Reviewing the focus indicators of [Adobe](https://spectrum.adobe.com/), [IBM](https://carbondesignsystem.com/), [Shopify](https://polaris-react.shopify.com/?shpxid=7a7803af-B33A-4BF9-6C1D-56FB1D5B9FB2), and [Atlassian](https://atlassian.design/) revealed common patterns:

- `2px` blue focus indicators are the norm
- `box-shadow` or `outline` are preferred over `border` or `background`
- Both inset and outset rings are used, depending on the component

### What are the accessibility requirements?

Based on [WCAG 2.2](https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance.html) and [Sara Soueidan’s guide](https://www.sarasoueidan.com/blog/focus-indicators/#new-focus-indicator-accessibility-requirements-in-wcag-2.2), focus indicators must:

1. Feature at least 3:1 contrast between focused and unfocused states
2. Cover a minimum area equivalent to a `2px` perimeter
3. Maintain at least 3:1 contrast against adjacent colors
4. Remain unobscured by surrounding content

### What about Windows High Contrast Mode?

Windows High Contrast Mode (WHCM) is an OS-level feature that applies high-contrast color schemes across applications. Over 50% of low-vision users rely on some form of high-contrast mode ([WebAIM, 2018](https://webaim.org/projects/lowvisionsurvey2/#at)), making support essential. [WHCM disables box-shadows](https://accessabilly.com/accessibility-issues-concerning-windows-high-contrast-mode/), so focus indicators either need to use a visible `outline` or a transparent fallback.

### What’s the best way to style a focus indicator?

I reviewed the trade-offs of [different CSS approaches](https://adhoc.team/2022/02/08/creating-focus-style-for-themable-design-system):

| Scenario                                   | Outline | Box-shadow | Border    | Text-decoration underline | Background color |
| :----------------------------------------- | :------ | :--------- | :-------- | :------------------------ | :--------------- |
| Doesn’t take up height or width            | Good    | Good       | Poor      | Good                      | Good             |
| Can control spacing from focused element   | Good    | Poor       | Poor      | Good                      | Good             |
| Works well with Windows High Contrast mode | Good    | Supported  | Supported | Good                      | Supported        |
| Consistently applied to all elements       | Good    | Good       | Good      | Poor                      | Good             |
| Honors the border-radius property          | Poor    | Good       | Good      | Poor                      | Good             |
| Works with letters that have descenders    | Good    | Good       | Poor      | Good                      | Good             |
| More styling options                       | Poor    | Good       | Poor      | Poor                      | Poor             |
| Can use more than one color                | Poor    | Good       | Poor      | Poor                      | Poor             |

## Requirements

I created the following list of requirements based on the task description and research:

- Address designers' concerns regarding contrast, spacing, and brand alignment
- Be accessible (including support for Windows High Contrast Mode)
- Use `box-shadow` (with `outline` fallback)

## Result

### Colour

I changed the focus ring from blue (`#4588e3`) to pure black (`#000000`), which is part of [Pleo’s core brand palette](https://www.pleobrand.site/colour/). This addressed designer feedback that the previous colour felt off-brand.

Pure black also simplified accessibility compliance. It provides maximum contrast against Pleo’s default white backgrounds (21:1) and comfortably exceeds the 3:1 requirement even on the darkest supported background (`#ececec`, 17.77:1).

### Variants

I introduced three variants to support different UI contexts:

1. **Regular**  — Sits flush against the focused element. Works well for elements with padding but no border.
2. **Offset** — Designed for elements with dark borders. A white spacer increases separation and improves visibility, addressing feedback about tight spacing.
3. **Inset** — Used where space is constrained and external focus rings risk being clipped. The ring is drawn inside the element instead.

### Size

I increased the focus ring thickness from `2px` to `3px`. While `2px` was sufficient for the `regular` and `offset` variants, the `inset` variant required a slightly thicker ring to meet the [minimum contrasting area](https://www.sarasoueidan.com/blog/focus-indicators/#2.-minimum-contrasting-area) requirement. To avoid inconsistent sizing across variants, I standardised on `3px`.

### Box-shadow and outline fallback

I used box-shadows to implement the focus rings, as they offer the most flexible styling and allow the focus ring to follow an element’s border radius.

The `offset` variant is created by layering a black box-shadow on top of a white one, visually separating the ring from the element on white backgrounds.

Because [Windows High Contrast Mode hides box-shadows](https://accessabilly.com/accessibility-issues-concerning-windows-high-contrast-mode/), I added transparent outlines as a fallback. These remain invisible by default but become visible when WHCM is enabled.

### Semantic tokens

I created semantic tokens exposing key styling parameters: colour (`--colorShadowFocus`, `--colorShadowFocusInvalid`), thickness (`--sizeFocusRing`), and fallback behaviour. This enabled product teams to implement custom focus rings where necessary, while maintaining alignment with the design system’s accessibility and visual standards.

## Impact

The redesigned focus indicator was standardised in the design system and adopted across Pleo’s product teams. Designers reported that it now matched the brand, and feedback about cramped spacing and insufficient contrast against component borders was eliminated.

The implementation met WCAG 2.2 requirements and improved support for Windows High Contrast Mode. Semantic tokens reduced ad-hoc implementations, giving teams a consistent way to customise focus indicators while staying aligned with the system.

Overall, the work reduced design debt, improved cross-team consistency, and increased confidence that keyboard focus was accessible and visually intentional.

## Reflections

if I were to redo this project today, here are some things I'd do differently:

1. **Use `outline instead of box-shadow`:** All modern browsers now support `border-radius` for outlines, removing the need to use box-shadows and simplifying implementation
2. **Replace the polyfill with `:focus-visible`:** All modern browsers support it now, and it makes focus debugging significantly clearer
3. **Revisit animation curve:** A faster ease-out or custom timing function would better reflect the purpose of a focus indicator, which should appear immediately rather than ease in.
