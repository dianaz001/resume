# Project Specification: Diana Zaraza Web Resume & Portfolio

## Overview
A minimalistic, professional web application to showcase Diana Zaraza's professional experience and portfolio. The site will feature a dark blue theme and focus on Operations Management, Coordination, and Sustainability.

## Tech Stack
- **Framework**: React (Vite + TypeScript)
- **Styling**: Vanilla CSS (with CSS Variables for the design system)
- **Icons**: Lucide-React or similar
- **Routing**: React Router (if multi-page) or simple state-based navigation

## UI/UX Design
- **Theme**: Minimalistic with a professional dark blue palette.
- **Colors**:
  - Primary: Deep Navy Blue (`#001f3f` or similar)
  - Accent: Sky Blue or Slate for contrast
  - Text: High contrast (White/Light Grey for dark backgrounds, Dark Navy for light backgrounds)
- **Typography**: Clean sans-serif (e.g., Inter, Roboto, or Outfit)
- **Layout**:
  - **Resume Page**: Traditional structure but enhanced with web elements (hover states, smooth scrolling).
  - **Portfolio Page**: A grid or list view matching the resume experiences. Each experience in the resume will have a corresponding entry in the portfolio showcasing "proof of work" with placeholder images.
- **Components**:
  - Navigation bar/sidebar
  - Hero section with a personal summary
  - Timeline/List for Experience
  - Education section
  - Skills chips/tags
  - Portfolio Grid with image cards

## Content Structure
### 1. Resume Page
- **Contact Info**: Name, Title, LinkedIn, Email, Phone, Location.
- **Profile Summary**: Engineering professional with 2+ years of experience optimizing systems, workflows, and documentation.
- **Experience**:
  - Research Assistant @ University of Toronto
  - Process Analyst @ Eco Soluciones Internacionales
- **Education**:
  - MASc in Engineering @ University of Toronto
  - BASc in Chemical Engineering @ Universidad Industrial de Santander
- **Awards**: Outstanding Student Award.

### 2. Portfolio Page
Each portfolio item will correspond to a resume role:
- **Optimization Projects (Eco Soluciones)**: Visualizing workflow automation, tool integration screenshots (placeholders).
- **Sustainable Research (UofT)**: Graphs/Diagrams related to carbon dioxide removal strategies.
- **Tools Showcased**: Cloud productivity suites, time-tracking systems, folder structures.

## Roadmap
1. **Phase 1: Setup & Design System**: Initialize project, define CSS variables and global styles.
2. **Phase 2: Resume Implementation**: Build the main resume layout and content.
3. **Phase 3: Portfolio Implementation**: Build the portfolio grid and detail views.
4. **Phase 4: Assets & Logos**: Add company logos (Aslan Renewables, UofT, Eco Soluciones) and placeholder portfolio images.
5. **Phase 5: Polish & Debug**: Refine animations, responsiveness, and dark mode consistency.

## Open Questions
- Specific color codes for the "dark blue" preference?
- Preferred URLs for the company logos or should I fetch them?
- Any specific projects under each role you'd like to highlight in the portfolio?
- Single page (SPAs) vs. Multiple pages?
