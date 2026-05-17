#!/usr/bin/env bash

set -euo pipefail

docker run --rm -it \
  --user "$(id -u):$(id -g)" \
  --volume "$PWD:/app" \
  --workdir /app \
  node:lts-alpine sh
