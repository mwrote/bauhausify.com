---
templateKey: post
date: 2019-07-23T00:00:00.000Z
propertags:
commontags:
  - 'css'
  - 'component'
cover: ''
category: Coding
title: かわいいファミコン風CSSライブラリNES.css
excerpt: 簡単にファミコン風の見た目にするCSSライブラリ NES.css について、その内容や導入方法、使用感などをレポートします。
---

早速ですが、こちらのデモをご覧ください。

https://codepen.io/mwrote/pen/MNgQMw?run=true&defaultTab=result

装飾的なCSSは一切かかずに、すべて[NES.css](https://github.com/nostalgic-css/NES.css)というライブラリのみで装飾しています。<br>
(演出として、タイピングエフェクト部分は[Typed.js](https://github.com/mattboldt/typed.js)というJSライブラリを使っています)

デモ以外にも、チェックボックスやリスト、テーブルなど基本的なHTML要素のスタイルはそろっています。<br>
詳しくは[公式サイト](https://nostalgic-css.github.io/NES.css/)をご覧ください。

作者は日本人です。作者自身の紹介記事は[こちら](https://kuroeveryday.blogspot.com/2018/12/nescss-released.html)です。

## 導入方法

### CDN版

ページの<head>内を編集できる場合は、こちら
```html
<link href="https://unpkg.com/nes.css@2.2.0/css/nes.min.css" rel="stylesheet" />
```

### package版

インストールします。
```html
npm install nes.css
# or
yarn add nes.css
```

css-loaderが設定されている場合は、JSファイルでcssをインポート
```js
import "nes.css/css/nes.css";
```

scssの場合は、scssファイル内でインポートします。
```scss
@import "~nes.css/scss/nes.scss";
```

## 使用する上での注意点

### 日本語はフォントの準備が必要

英語のレトロフォントはGoogle Fontsにあるのですぐ使えますが、<br>
日本語を使う場合は、別途サーバーなどにWebフォントを準備する必要があります。

大抵のフォントファイルはTTF形式で配布されているので、[WOFFコンバータ](https://opentype.jp/woffconv.htm)などを使ってEOT, WOFF形式のWebフォントを生成し、サーバーに配置してCSSから読み込みましょう。この記事ではその方法は割愛します。

### dialogを使う場合はpolyfillの導入が必要

dialogにはhtmlの``<dialog>``要素が使われているため、デフォルトだと[対応しているブラウザ](https://developer.mozilla.org/ja/docs/Web/HTML/Element/dialog#Browser_compatibility)しか動きません。<br>
JSとCSSの２つのpolyfillファイルのimportが必要です。<br>
CDNの場合は以下を``<head>``タグ内で読み込みましょう

```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/dialog-polyfill/0.4.9/dialog-polyfill.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/dialog-polyfill/0.5.0/dialog-polyfill.min.js"></script>
```

## Bootstrapやtailwindcssなどのレイアウト系クラスと組み合わせると使いやすい

NES.cssはあくまでウィンドウやボタンなどの単体コンポーネントの装飾スタイルのみ提供します。<br>
デモのコードもそうですが、Bootstrapやtailwindcssなどと組み合わせることにより、CSSは書かずに使うことができます。
https://codepen.io/mwrote/pen/MNgQMw?run=true&defaultTab=html

## CSSアーキテクチャはBootstrapベース？

Bootstrapではお馴染みのカラー、Primary, Info, Danger, Warn, Successが用意されています。<br>
prefixとして``is-primary``といったように``is-***``がつきます。
暗くしたい場合は``is-dark``、丸みをもたせる場合は``is-rounded``となります。
とてもシンプルです。

## このライブラリの使い所

趣向性が高い分、使い所はけっこう限られていますが、なんといっても見た目がかわいいので個人的にはうまく使っていきたいところです。

- ゲーム紹介サイトなど
- レトロな考えでやるてきな思想のサイトやサービスなど
- 開発者向けのサイトなど、ファミコン好き多いでしょう、たぶん受けはいいはず
