---
sidebar_position: 2
---

# Build from source


## Repository

Official repository:
- `https://gitlab.com/freepascal.org/lazarus/lazarus` 

Mirrors (Inofficial):
- `https://github.com/fpc` 
- `https://sourceforge.net/p/lazarus/git/ci/main/tree/`

You can use [git](https://git-scm.com/) in your terminal or download an [GUI Client](https://git-scm.com/downloads/guis/) like [GitHub Desktop](https://desktop.github.com/).

Clone the source in any path you want. For this tutorial we will use the home directory: `~./revivedIDE`

## Build

:::info

Be sure `make` is installed on your operating system.

If make isn't working, check your environement variable path.

:::

Open the terminal, go to the directory you cloned the source. `cd ~./revivedIDE`

```shell
  make clean && make bigide
```

## Start the IDE

```shell
  ~./revivedIDE --pcp=~./revivedIDE/localconfig
```


### Applying changes to the IDE
Now you've started the application. Open `~./revivedIDE/ide/startlazarus.lpr`.

Go to line 240 and add `ShowMessage('test');`.

```pascal {7}
procedure TLazarusManager.Initialize;
var
  CmdLineFiles: TStrings;
  i: integer;
  PCP: String;
begin
  ShowMessage('test');
  FShowSplashOption:=true; 
  ...
  ```

### Rebuild the IDE
The simplest way to rebuild this project, go to `Tools -> Build Lazarus with Profile: Normal IDE`.

You can also rebuild the IDE with this command in your terminal:

```shell
  make clean && make bigide
```

Just [start the IDE](#start-the-ide) and your changes will be successfully added.