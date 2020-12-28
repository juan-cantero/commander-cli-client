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
$ npm install -g commander-juan
$ commander-cli COMMAND
running command...
$ commander-cli (-v|--version|version)
commander-juan/0.0.0 linux-x64 node-v10.19.0
$ commander-cli --help [COMMAND]
USAGE
  $ commander-cli COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`commander-cli create-command`](#commander-cli-create-command)
* [`commander-cli delete-command`](#commander-cli-delete-command)
* [`commander-cli get-commands`](#commander-cli-get-commands)
* [`commander-cli help [COMMAND]`](#commander-cli-help-command)
* [`commander-cli login`](#commander-cli-login)

## `commander-cli create-command`

create command

```
USAGE
  $ commander-cli create-command
```

_See code: [src/commands/create-command.ts](https://github.com/juan-cantero/commander-cli/blob/v0.0.0/src/commands/create-command.ts)_

## `commander-cli delete-command`

Get all the commands

```
USAGE
  $ commander-cli delete-command

OPTIONS
  -n, --name=name          (required) name of the command
  -p, --platform=platform  (required) platform
```

_See code: [src/commands/delete-command.ts](https://github.com/juan-cantero/commander-cli/blob/v0.0.0/src/commands/delete-command.ts)_

## `commander-cli get-commands`

Get all the commands

```
USAGE
  $ commander-cli get-commands

OPTIONS
  -b, --bgcolor=bgBlue|bgBlueBright|bgGreen|bgGreenBright|bgRedBright|bgRed|bgMagenta|bgYellow  background color for
                                                                                                table

  -c, --color=red|blue|green|redBright|blueBright|redBright|greenBright|magenta|yellow          color

  -d, --description=description                                                                 command description

  -p, --platform=platform                                                                       platform
```

_See code: [src/commands/get-commands.ts](https://github.com/juan-cantero/commander-cli/blob/v0.0.0/src/commands/get-commands.ts)_

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

## `commander-cli login`

```
USAGE
  $ commander-cli login
```

_See code: [src/commands/login.ts](https://github.com/juan-cantero/commander-cli/blob/v0.0.0/src/commands/login.ts)_
<!-- commandsstop -->
