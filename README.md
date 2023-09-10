# Sanity Studio v3 + Remix + Cloudflare Pages + Github Actions

Embedded Studio

Access to Sanity Studio v3 from within the Remix application itself. Now the whole Studio is a component, it lives at the /studio route
# Inspiration
https://github.com/meetdave3/sanity-studio-cloudflare-deploy

https://github.com/SimeonGriggs/sanity-remix-template

# Required
API TOKEN Must be created at https://dash.cloudflare.com/profile/api-tokens

(Create Token -> Permissions: Account - Cloudflare Pages - Edit)

Add the following secrets. Path: github.com/username/reponame/settings/secrets/actions:

CLOUDFLARE_ACCOUNT_ID

CLOUDFLARE_API_TOKEN

# Start
npx sanity@latest init --env

npm i

npm run dev

# Deploy
Upload repo to github

Add github secrets to repo

Create new application in Cloudflare Pages

Select repo, Framework preset -> None

Push deploy from Github Actions


# Current error

Error: Failed to publish your Function. Got error: Uncaught ReferenceError: process is not defined

at functionsWorker-0.9622555224340603.js:114556:100 in Wc
  
at functionsWorker-0.9622555224340603.js:114560:40
