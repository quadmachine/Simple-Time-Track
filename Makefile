build:
	rm -Rf ./dist && rm -Rf ./simpletimetrack.zip
	./node_modules/.bin/lessc src/css/style.less > src/css/style.css
	./node_modules/.bin/webpack --stable
	cd dist && zip -r ../simpletimetrack *