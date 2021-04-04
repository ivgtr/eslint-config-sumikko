# eslint-config-sumikko
ルール及び構成は[teppeis氏](https://github.com/teppeis) の[eslint-config-teppeis](https://github.com/ivgtr/eslint-config-sumikko) を参考にしつつ、ルールを自分好みに改変し、ルールセットを追加したものです。

## Install

```
npm install -D eslint-config-sumikko eslint prettier
```

## Usage

`.eslintrc`

### Default Rule

```json
{
  "extends": ["eslint-config-sumikko"]
}
```

- +prettier

```json
{
  "extends": [/* Rules */, "eslint-config-sumikko/prettier"]
}

```

### +Node

```json
{
  "extends": ["eslint-config-sumikko", "eslint-config-sumikko/node"]
}
```

### +TypeScript

```json
{
  "extends": ["eslint-config-sumikko", "eslint-config-sumikko/node", "eslint-config-sumikko/ts"]
}
```

### +Browser

```json
{
  "extends": ["eslint-config-sumikko", "eslint-config-sumikko/browser"]
}
```

### Vue3 (TypeScript)

```json
{
  "extends": ["eslint-config-sumikko", "eslint-config-sumikko/vue3"]
}
```
### Nuxt (TypeScript)

```json
{
  "extends": ["eslint-config-sumikko", "eslint-config-sumikko/nuxt"]
}
```

### React/Next

```json
{
  "extends": ["eslint-config-sumikko", "eslint-config-sumikko/react"]
}
```

 - +TypeScript

```json
{
  "extends": ["eslint-config-sumikko", "eslint-config-sumikko/ts", "eslint-config-sumikko/react"]
}
```

## License
MIT ©[ivgtr](https://github.com/ivgtr)

[![Twitter Follow](https://img.shields.io/twitter/follow/mawaru_hana?style=social)](https://twitter.com/mawaru_hana) [![MIT License](http://img.shields.io/badge/license-MIT-blue.svg?style=flat)](LICENSE) [![Donate](https://img.shields.io/badge/%EF%BC%84-support-green.svg?style=flat-square)](https://www.buymeacoffee.com/ivgtr)  