# STANDARDOS high-fidelity prototype plan

## Experience
- Replace the current parchment editorial theme with the supplied light-blue government-tech direction: transparent public header, navy typography, cyan intelligence accents, restrained orange warnings, thin rules, and selective glass surfaces.
- Rebuild the public landing page around “From Specifications to Certainty,” with a layered specification-to-certification visual, workflow, capabilities, example analysis, use cases, and direct routes into authentication and analysis.
- Add a narrow responsive application sidebar, mobile drawer, global command palette, consistent page transitions, and session-aware account controls.

## Working product flow
- Create protected Overview, Analyze, Documents, Standards, Compliance, Change Impact, Settings, and document-analysis routes.
- Build a complete mock analysis workflow: validated upload or pasted text, staged processing, results summary, interactive relationship graph, finding details, and editable specification repair with accept/reject controls.
- Populate three realistic procurement documents and linked requirements, standards, certifications, audit findings, repairs, and change-impact records.
- Add functional search, filters, sorting, empty/error/loading states, row navigation, dialogs, tooltips, and keyboard command navigation.

## Accounts and data
- Enable email/password and Google sign-in through Lovable Cloud.
- Store full name and organization in a protected profile record created at signup.
- Protect all workspace routes and preserve sessions; include sign-up, sign-in, forgot/reset password, demo account access, and correct sign-out cleanup.
- Keep analysis content behind clean service interfaces so the mock engine can later be replaced by real AI endpoints.

## Validation
- Verify every route has unique metadata and every major control has an outcome.
- Check the full journey in the running preview: landing → authentication/demo → overview → analyze → processing → report → graph → finding → repair → libraries → change impact → settings → logout.
- Validate desktop and mobile layouts, keyboard command palette, file errors, runtime logs, and current build status.

## Technical details
- TanStack Start routes and protected pathless layout; React 19, TypeScript, Tailwind v4 semantic tokens, shadcn primitives, Lucide icons, and Motion for React.
- Lovable Cloud authentication with row-level protected profiles; mock domain services for analysis data.
- Uploaded image is treated as visual reference only, not embedded as a page image.
