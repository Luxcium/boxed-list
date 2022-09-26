#!/bin/bash

(npx http-server ./coverage/lcov-report -p 8100 &)
google-chrome --new-window http://0.0.0.0:8100/
