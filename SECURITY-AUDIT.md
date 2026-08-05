# Security Audit -- Premium Dog Walking (Paws & Paths)

**Date:** 2026-08-03
**Project path:** `Portfolio/Premium-Dog-Walking/`
**Framework:** React 18.3.1 + Vite 6.0.3 + TypeScript 5.6.3 + TailwindCSS 3.4.16

---

## 1. Secrets and Credentials Scan

| Check | Result |
|---|---|
| API keys / tokens | Clean -- none found |
| Hardcoded passwords | Clean -- none found |
| Real email addresses | Clean -- none found |
| Real phone numbers | Clean -- none found |
| Environment variables | Clean -- zero uses of `import.meta.env` or `process.env` |

## 2. Dependency Audit

| Dependency | Version | Risk |
|---|---|---|
| react | ^18.3.1 | Low |
| react-dom | ^18.3.1 | Low |
| framer-motion | ^11.15.0 | Low |
| gsap | ^3.12.5 | Low |
| lenis | ^1.1.18 | Low |
| react-icons | ^4.12.0 | Low |
| react-router-dom | ^6.28.0 | Low |
| vite | 6.0.3 | Low |
| typescript | 5.6.3 | Low |
| tailwindcss | 3.4.16 | Low |

**Audit command:** `npm audit --audit-level=high`

## 3. Security Headers (Vite Dev Server)

| Header | Value | Status |
|---|---|---|
| X-Content-Type-Options | nosniff | Configured |
| X-Frame-Options | DENY | Configured |
| Referrer-Policy | strict-origin-when-cross-origin | Configured |
| Permissions-Policy | camera=(), microphone=(), geolocation=() | Configured |
| Content-Security-Policy | -- | **Missing** |
| Strict-Transport-Security | -- | **Missing** (not applicable to dev server) |

**Note:** Headers are only applied to the Vite dev server. For production, a `public/_headers` file (Netlify) with full CSP, HSTS, and security headers is in place. Vite copies `public/` to `dist/` on build.

## 4. Form Security (Booking.tsx)

| Measure | Status |
|---|---|
| HTML5 input constraints | type="email", type="tel", maxLength, required, pattern |
| Client-side validation | Multi-step: `validateStep0()` (personal details) + `validateStep1()` (dog details) |
| Email regex validation | `/^[^\s@]+@[^\s@]+\.[^\s@]+$/` |
| Phone pattern | `[\d\s\-\+\(\)]{7,20}` |
| Honeypot anti-bot | Hidden field with `tabIndex={-1}`, off-screen positioning |
| Submit cooldown | 3-second button disable after submit |
| Success state | Inline confirmation with GiPawPrint icon and "Book Another" reset |
| Input sanitization | maxLength limits on all fields (100 name/email, 20 phone, 500 notes) |

## 5. Code-Level Security

| Check | Result |
|---|---|
| dangerouslySetInnerHTML | Clean -- zero uses |
| eval() | Clean -- zero uses |
| document.write() | Clean -- zero uses |
| innerHTML usage | Clean -- zero uses |
| localStorage / sessionStorage | Clean -- zero uses |
| XSS via URL params | Clean -- no `useSearchParams` usage |

## 6. Build and Source Protection

| Measure | Status |
|---|---|
| Sourcemaps disabled in production | `sourcemap: false` |
| .gitignore covers .env* | Yes |
| .gitignore covers dist/ | Yes |
| .gitignore covers node_modules/ | Yes |
| TypeScript strict mode | Enabled via `tsc` build step |

## 7. Recommendations

