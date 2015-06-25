#Polymer Podcast

To get started, clone the repo, run `npm install`, and type `gulp
serve`.

##INSTALL
* Step 1: clone the repo

```
$ git clone git@github.com:filaraujo/polymer-podcast.git
```

* Step 2: install dependencies

```
$ npm install
$ bower install
```

* Step 3: run the build process

```
$ gulp
```

* Step 4: start your server

```
$ gulp serve
```

##DEPLOY
```
gulp serve:dist
gsutil rsync -R dist gs://www.polymerpodcast.com
#gzip
gsutil cp -z js,html -R dist/* gs://www.polymerpodcast.com
```
