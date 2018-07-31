# DP9 BBQ2018
LPとかの共同作業用リポジトリです   
LP以外に用途あるかわからん

## 編集環境
[_custom.scss](./scss/bootstrap/_custom.scss)を編集し、[bootstrap.scss](./scss/bootstrap/bootstrap.scss)に@importしています。   
写真などの素材は[assets](assets)、scssをコンパイルしたcssは[css](css)、htmlは[pages](pages)に入ってます。   
なおBootstrapはv4.1.2を使用しています。

## build setup
``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn run dev

# build scss
$ yarn run compile
```
