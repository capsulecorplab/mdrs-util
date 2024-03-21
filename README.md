oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![GitHub license](https://img.shields.io/github/license/oclif/hello-world)](https://github.com/oclif/hello-world/blob/main/LICENSE)

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
* [`mdrs-util hello PERSON`](#mdrs-util-hello-person)
* [`mdrs-util hello world`](#mdrs-util-hello-world)
* [`mdrs-util help [COMMAND]`](#mdrs-util-help-command)
* [`mdrs-util plugins`](#mdrs-util-plugins)
* [`mdrs-util plugins:install PLUGIN...`](#mdrs-util-pluginsinstall-plugin)
* [`mdrs-util plugins:inspect PLUGIN...`](#mdrs-util-pluginsinspect-plugin)
* [`mdrs-util plugins:install PLUGIN...`](#mdrs-util-pluginsinstall-plugin-1)
* [`mdrs-util plugins:link PLUGIN`](#mdrs-util-pluginslink-plugin)
* [`mdrs-util plugins:uninstall PLUGIN...`](#mdrs-util-pluginsuninstall-plugin)
* [`mdrs-util plugins reset`](#mdrs-util-plugins-reset)
* [`mdrs-util plugins:uninstall PLUGIN...`](#mdrs-util-pluginsuninstall-plugin-1)
* [`mdrs-util plugins:uninstall PLUGIN...`](#mdrs-util-pluginsuninstall-plugin-2)
* [`mdrs-util plugins update`](#mdrs-util-plugins-update)

## `mdrs-util hello PERSON`

Say hello

```
USAGE
  $ mdrs-util hello PERSON -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [src/commands/hello/index.ts](https://github.com/mdrs-community/mdrs-util/blob/v0.0.0/src/commands/hello/index.ts)_

## `mdrs-util hello world`

Say hello world

```
USAGE
  $ mdrs-util hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ mdrs-util hello world
  hello world! (./src/commands/hello/world.ts)
```

_See code: [src/commands/hello/world.ts](https://github.com/mdrs-community/mdrs-util/blob/v0.0.0/src/commands/hello/world.ts)_

## `mdrs-util help [COMMAND]`

Display help for mdrs-util.

```
USAGE
  $ mdrs-util help [COMMAND...] [-n]

ARGUMENTS
  COMMAND...  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for mdrs-util.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v6.0.17/src/commands/help.ts)_

## `mdrs-util plugins`

List installed plugins.

```
USAGE
  $ mdrs-util plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ mdrs-util plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.3.6/src/commands/plugins/index.ts)_

## `mdrs-util plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ mdrs-util plugins add plugins:install PLUGIN...

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -s, --silent   Silences yarn output.
  -v, --verbose  Show verbose yarn output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ mdrs-util plugins add

EXAMPLES
  $ mdrs-util plugins add myplugin 

  $ mdrs-util plugins add https://github.com/someuser/someplugin

  $ mdrs-util plugins add someuser/someplugin
```

## `mdrs-util plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ mdrs-util plugins inspect PLUGIN...

ARGUMENTS
  PLUGIN...  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ mdrs-util plugins inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.3.6/src/commands/plugins/inspect.ts)_

## `mdrs-util plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ mdrs-util plugins install PLUGIN...

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -s, --silent   Silences yarn output.
  -v, --verbose  Show verbose yarn output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ mdrs-util plugins add

EXAMPLES
  $ mdrs-util plugins install myplugin 

  $ mdrs-util plugins install https://github.com/someuser/someplugin

  $ mdrs-util plugins install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.3.6/src/commands/plugins/install.ts)_

## `mdrs-util plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ mdrs-util plugins link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help          Show CLI help.
  -v, --verbose
      --[no-]install  Install dependencies after linking the plugin.

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ mdrs-util plugins link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.3.6/src/commands/plugins/link.ts)_

## `mdrs-util plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ mdrs-util plugins remove plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ mdrs-util plugins unlink
  $ mdrs-util plugins remove

EXAMPLES
  $ mdrs-util plugins remove myplugin
```

## `mdrs-util plugins reset`

Remove all user-installed and linked plugins.

```
USAGE
  $ mdrs-util plugins reset [--hard] [--reinstall]

FLAGS
  --hard       Delete node_modules and package manager related files in addition to uninstalling plugins.
  --reinstall  Reinstall all plugins after uninstalling.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.3.6/src/commands/plugins/reset.ts)_

## `mdrs-util plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ mdrs-util plugins uninstall PLUGIN...

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ mdrs-util plugins unlink
  $ mdrs-util plugins remove

EXAMPLES
  $ mdrs-util plugins uninstall myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.3.6/src/commands/plugins/uninstall.ts)_

## `mdrs-util plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ mdrs-util plugins unlink plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ mdrs-util plugins unlink
  $ mdrs-util plugins remove

EXAMPLES
  $ mdrs-util plugins unlink myplugin
```

## `mdrs-util plugins update`

Update installed plugins.

```
USAGE
  $ mdrs-util plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.3.6/src/commands/plugins/update.ts)_
<!-- commandsstop -->
