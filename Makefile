install: 
	npm install
	nqm install readline-sync
	npm install --save-dev babel-core babel-cli babel-preset-env babel-preset-stage-0

start: 
	npm run babel-node -- src/bin/brain-games.js

publish:
	npm publish
lint:
	npm run eslint src/