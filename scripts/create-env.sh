# !/bin/bash

env | grep AWS | sed 's/.*/VUE_APP_&/'>> .env.local