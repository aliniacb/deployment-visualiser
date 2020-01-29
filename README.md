# tfe-state-hack

## Project setup
```
yarn install
```

### Local dev

* To run locally you will need to have the variables `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY` in your local environment.
    * Then run `yarn create-env` which will spit these out into the local environment file (that is not stored in Git).
    * When running `yarn serve` these credentials will now be available in the app.

* Add an environment variable with the team and service names comma separated:
```
VUE_APP_TEAMS= # comma separated list of teams as per below variables

# One comma separated list of services per entry in the above team map
VUE_APP_TEAM1_SERVICES=
VUE_APP_TEAM2_SERVICES=
VUE_APP_TEAM3_SERVICES=
VUE_APP_TEAM4_SERVICES=
```


* Set local environment variables with `yarn create-env`. This will append AWS creds to env vile.

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
