commander-cli
=============

cli client for commander

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/commander-cli.svg)](https://npmjs.org/package/commander-cli)
[![Downloads/week](https://img.shields.io/npm/dw/commander-cli.svg)](https://npmjs.org/package/commander-cli)
[![License](https://img.shields.io/npm/l/commander-cli.svg)](https://github.com/juan-cantero/commander-cli/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g commander-cli
$ commander-cli COMMAND
running command...
$ commander-cli (-v|--version|version)
commander-cli/0.0.0 linux-x64 node-v14.15.1
$ commander-cli --help [COMMAND]
USAGE
  $ commander-cli COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`commander-cli hello [FILE]`](#commander-cli-hello-file)
* [`commander-cli help [COMMAND]`](#commander-cli-help-command)

## `commander-cli hello [FILE]`

describe the command here

```
USAGE
  $ commander-cli hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ commander-cli hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/juan-cantero/commander-cli/blob/v0.0.0/src/commands/hello.ts)_

## `commander-cli help [COMMAND]`

display help for commander-cli

```
USAGE
  $ commander-cli help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.1/src/commands/help.ts)_
<!-- commandsstop -->
