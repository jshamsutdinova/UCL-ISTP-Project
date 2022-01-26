#!/usr/bin/env sh

set -e

npm run build

cd dist
mkdir mw-sources-of-meter-radio-events
mv css mw-sources-of-meter-radio-events
mv img mw-sources-of-meter-radio-events
mv js mw-sources-of-meter-radio-events


git init
git add -A
git commit -m 'New Deployment'
git push -f git@github.com:jshamsutdinova/ucl-istp-project-rebuild.git master:gh-pages

cd -