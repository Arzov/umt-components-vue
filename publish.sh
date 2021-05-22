vue-cli-service build --target lib --name umt-components ./index.js;

git add dist/;
git commit -m "dist updated";

np --skip-2fa --no-publish;