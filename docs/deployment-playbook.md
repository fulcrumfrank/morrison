# Deployment Playbook

## Recommended stack
- GitHub for source control
- Vercel for hosting and preview deployments
- Production domain: `fulcrumhouse.net`
- Optional staging subdomain: `staging.fulcrumhouse.net`

## First publish
1. Create a new GitHub repository.
2. Upload this project to the repository root.
3. In Vercel, import the GitHub repository.
4. Accept the detected Next.js framework settings.
5. Trigger the first deployment.
6. Review the generated `*.vercel.app` URL.
7. Add `fulcrumhouse.net` and optionally `www.fulcrumhouse.net` in Vercel project settings.
8. Update DNS at your registrar using the Vercel-provided records.
9. Confirm the production deployment resolves on the custom domain.

## Suggested branch model
- `main` -> production
- `develop` -> preview / integration
- feature branches -> work in progress

## Suggested deployment flow
### Feature work
- Create a feature branch from `develop`
- Push commits normally
- Open a pull request into `develop`
- Review the Vercel preview deployment URL generated for the PR
- Merge into `develop` once approved

### Release to production
- Open a pull request from `develop` to `main`
- Confirm the preview deployment looks correct
- Merge into `main`
- Vercel automatically creates a new production deployment from `main`

## Simple alternative
If you want to keep it lighter initially:
- Use only `main`
- Let every push to `main` publish to production
- Use feature branches + pull requests for review

## Recommended first-cycle setup
For this project, a good balance is:
- production branch: `main`
- working branches: feature branches
- preview: every pull request
- production release: merge to `main`

That keeps the process simple while still giving you a safe review step.

## What to check on every deployment
- Home page loads
- Top navigation works
- Financial model page renders
- Charts load without errors
- CSV export works
- No console errors in browser dev tools
- Domain resolves correctly
- Mobile layout is usable

## Change checklist
Before merging:
- Pull latest changes
- Run local install and build
- Review preview deployment
- Confirm no obvious visual regressions
- Merge to target branch

## Rollback approach
If a production deployment is bad:
- Revert the merge in GitHub or
- Redeploy the prior successful deployment in Vercel

## Future enhancements
- Add a staging domain mapped to `develop`
- Add analytics
- Add error monitoring
- Add automated lint/build checks in GitHub Actions
