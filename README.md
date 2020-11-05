# eslint-config-sumikko
[![Twitter Follow](https://img.shields.io/twitter/follow/mawaru_hana?style=social)](https://twitter.com/mawaru_hana) [![MIT License](http://img.shields.io/badge/license-MIT-blue.svg?style=flat)](LICENSE) [![Donate](https://img.shields.io/badge/%EF%BC%84-support-green.svg?style=flat-square)](https://www.buymeacoffee.com/ivgtr)

#### これは何?
ESlint + Prettier のルールセット  

#### 使える
JavaScript, TypeScript, Next.js, Nuxt.js

## Install

```
npm install -D eslint-config-sumikko eslint prettier
```

## Usage

`.eslintrc`
### JavaScript

```json
{
  "extends": ["eslint-config-sumikko"]
}
```

### TypeScript

```json
{
  "extends": ["eslint-config-sumikko","eslint-config-sumikko/ts"]
}
```

### Nuxt + TypeScript

```json
{
  "extends": ["eslint-config-sumikko/nuxt"]
}
```

### Next + TypeScript

```json
{
  "extends": ["eslint-config-sumikko/next"]
}
```


## License
MIT ©[ivgtr](https://github.com/ivgtr)