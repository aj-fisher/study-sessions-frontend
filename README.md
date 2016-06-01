# study-sessions-frontend

## Running Locally

Make sure you have [Node.js](http://nodejs.org/) and the [Heroku Toolbelt](https://toolbelt.heroku.com/) installed.

```sh
$ git clone git@github.com:aj-fisher/study-sessions-frontend.git # or clone your own fork
$ cd study-sessions-frontend
$ npm install
$ npm start
```

Your app should now be running on [localhost:5000](http://localhost:5000/).

## Deploying to Heroku

```
$ heroku git:remote -a study-sessions-frontend # if not added already

$ heroku create
$ git push heroku master
$ heroku open
```
