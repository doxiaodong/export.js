SHELL := /bin/bash

format:
	node_modules/typescript-formatter/bin/tsfmt -r

formatCheck:
	node_modules/typescript-formatter/bin/tsfmt --verify

build:
	npm run build

publish:
	tsc -d
	npm publish --registry http://registry.npmjs.org
