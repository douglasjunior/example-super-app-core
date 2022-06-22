#!/bin/sh

watchman watch-del-all
rm -rf ${TMPDIR:-/tmp}/metro-*
rm -rf node_modules
yarn install
yarn start --reset-cache
