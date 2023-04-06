#!/usr/bin/env node

//console.log("hello from crypt");

const program = require('commander');
const pkg = require('../package.json')

program
    .version(pkg.version)
    .command('key', 'get API key at https://coinlayer.com')
    .command('check', 'get coin info')
    .parse(process.argv);
