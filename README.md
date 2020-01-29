# tfe-state-hack

## Project setup
```
yarn install
```

### Local dev

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
