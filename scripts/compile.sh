#!/usr/bin/env bash

compile_dir () {
    babel $1 --out-dir build/$1 --copy-files --source-maps
}

compile_file () {
    babel $1 --out-file build/$1 --source-maps
}

mkdir build
compile_dir src
