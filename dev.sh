#!/bin/bash

sh build.sh

# Jade
jade_input='./*.jade'
jade_output='./'
jade --watch --pretty --out $jade_output $jade_input > /dev/null &

# Server
server_port=8084
http-server -p $server_port
