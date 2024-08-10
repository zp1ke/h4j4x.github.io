#!/bin/sh

docker build -t zp1k_e-docker .
docker run -d --name zp1ke -p 8080:80 zp1k_e-docker
