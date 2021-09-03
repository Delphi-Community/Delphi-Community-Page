---
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Build from source


## Repository

Official repository:
- `https://gitlab.com/freepascal.org/lazarus/lazarus` 

Mirrors (Inofficial):
- `https://github.com/fpc` 
- `https://sourceforge.net/p/lazarus/git/ci/main/tree/`

You can use [git](https://git-scm.com/) in your terminal or download an [GUI Client](https://git-scm.com/downloads/guis/) like [GitHub Desktop](https://desktop.github.com/).

Clone the source in any path you want. For this tutorial we will use the home directory: `~./lazarus`

## Build

:::info

Be sure `make` is installed on your operating system.

:::

Open the terminal, go to the directory you cloned the source. `cd ~./lazarus`

```shell
  make clean && make bigide
```

## Start the IDE

```shell
  ~./lazarus --pcp=~./lazarus/localconfig
```