# Sanity Studio + Remix + Cloudflare Pages + Github Actions

# Inspiration
https://github.com/meetdave3/sanity-studio-cloudflare-deploy
https://github.com/SimeonGriggs/sanity-remix-template

# Required
API TOKEN Must be created at https://dash.cloudflare.com/profile/api-tokens (Create Token -> Permissions: Account - Cloudflare Pages - Edit)

Add the following secrets. Path: github.com/username/reponame/settings/secrets/actions:
CLOUDFLARE_ACCOUNT_ID
CLOUDFLARE_API_TOKEN

# Start
Clone this repo
npx sanity@latest init --env
npm i
npm run dev

# Current error
Error: Failed to publish your Function. Got error: Uncaught ReferenceError: process is not defined
  at functionsWorker-0.9622555224340603.js:114556:100 in Wc
  at functionsWorker-0.9622555224340603.js:114560:40