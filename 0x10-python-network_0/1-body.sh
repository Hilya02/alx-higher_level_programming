#!/bin/bash
# takes in a URL, sends a request to that URL, displays the size of the response
curl -sX GET $1 -L
