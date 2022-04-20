# minecraft-skin-type
[![NPM Package](https://img.shields.io/npm/v/@unicorecms/minecraft-skin-type.svg?style=flat-square)](https://www.npmjs.com/package/@unicorecms/minecraft-skin-type)
[![MIT License](https://img.shields.io/badge/license-MIT-yellowgreen.svg?style=flat-square)](https://github.com/unicore-project/minecraft-skin-type/blob/master/LICENSE)

Detect slim or default minecraft skin type on backend for [UnicoreCMS](https://unicorecms.ru)

## Install

```bash
npm i @unicorecms/minecraft-skin-type
```

## Usage

```ts
import { MinecraftSkinType } from '@unicorecms/minecraft-skin-type';

// Detect skin model type
const isSlim = MinecraftSkinType.isSlim("./folder/skin.png") // true if slim-skin or false if default
```
