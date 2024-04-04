mdrs-util
=================

Command-line utility for generating reports for the Mars Desert Research Station (MDRS)

[![GitHub license](https://img.shields.io/github/license/mdrs-community/mdrs-util)](https://github.com/mdrs-community/mdrs-util/blob/main/LICENSE)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g mdrs-util
$ mdrs-util COMMAND
running command...
$ mdrs-util (--version)
mdrs-util/0.0.0 linux-x64 node-v20.11.1
$ mdrs-util --help [COMMAND]
USAGE
  $ mdrs-util COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`mdrs-util create greenhab-report`](#mdrs-util-create-greenhab-report)
* [`mdrs-util help [COMMANDS]`](#mdrs-util-help-commands)

## `mdrs-util create greenhab-report`

Create a new GreenHab report

```
USAGE
  $ mdrs-util create greenhab-report [-n <value>] [-d <value>] [-a <value>]

FLAGS
  -a, --author=<value>      Author of new GreenHab Report
  -d, --dateString=<value>  Date (DD-MM-YYYY)
  -n, --crewNumber=<value>  Crew number

DESCRIPTION
  Create a new GreenHab report

EXAMPLES
  Display command help

    $ mdrs-util create greenhab-report --help

  Create a new GreenHab Report and be prompted for inputs

    $ mdrs-util create greenhab-report

  Create a new GreenHab Report entirely from command line

    $ mdrs-util create greenhab-report -n 297 -d "14-04-2024" -a "Mark Watney"
```

_See code: [src/commands/create/greenhab-report.ts](https://github.com/mdrs-community/mdrs-util/blob/v0.0.0/src/commands/create/greenhab-report.ts)_

## `mdrs-util help [COMMANDS]`

Display help for mdrs-util.

```
USAGE
  $ mdrs-util help [COMMANDS] [-n]

ARGUMENTS
  COMMANDS  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for mdrs-util.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v6.0.12/src/commands/help.ts)_
<!-- commandsstop -->
