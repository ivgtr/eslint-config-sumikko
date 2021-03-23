# eslint-config-sumikko
ルール及び構成は[teppeis氏](https://github.com/teppeis) の[eslint-config-teppeis](https://github.com/ivgtr/eslint-config-sumikko) を参考にしつつ、ルールを自分好みに改変し、ルールセットを追加したものです。

## Install

```
npm install -D eslint-config-sumikko eslint
```

## Usage

`.eslintrc`
### NodeJS

```json
{
  "extends": ["eslint-config-sumikko", "eslint-config-sumikko/node", "eslint-config-sumikko/prettier"]
}
```

### TypeScript

```json
{
  "extends": ["eslint-config-sumikko", "eslint-config-sumikko/node", "eslint-config-sumikko/ts", "eslint-config-sumikko/prettier"]
}
```

### Browser

```json
{
  "extends": ["eslint-config-sumikko", "eslint-config-sumikko/node", "eslint-config-sumikko/ts", "eslint-config-sumikko/browser", "eslint-config-sumikko/prettier"]
}
```

### Nuxt

```json
{
  "extends": ["eslint-config-sumikko", "eslint-config-sumikko/node", "eslint-config-sumikko/nuxt", "eslint-config-sumikko/prettier"]
}
```

### React/Next

```json
{
  "extends": ["eslint-config-sumikko", "eslint-config-sumikko/node", "eslint-config-sumikko/react", "eslint-config-sumikko/prettier"]
}
```

 - +TypeScript

```json
{
  "extends": ["eslint-config-sumikko", "eslint-config-sumikko/node", "eslint-config-sumikko/ts", "eslint-config-sumikko/react", "eslint-config-sumikko/prettier"]
}
```

## License
MIT ©[ivgtr](https://github.com/ivgtr)

[![Twitter Follow](https://img.shields.io/twitter/follow/mawaru_hana?style=social)](https://twitter.com/mawaru_hana) [![MIT License](http://img.shields.io/badge/license-MIT-blue.svg?style=flat)](LICENSE) [![Donate](https://img.shields.io/badge/%EF%BC%84-support-green.svg?style=flat-square)](https://www.buymeacoffee.com/ivgtr)  