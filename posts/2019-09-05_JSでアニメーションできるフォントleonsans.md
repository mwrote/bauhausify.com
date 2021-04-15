---
templateKey: post
date: 2019-09-05T0:00:00.007Z
cover: ''
category: Coding
propertags:
commontags:
  - 'animation'
  - 'generative'
  - 'javascript'
title: JSでアニメーションできるフォントleonsans
excerpt: CanvasやPIXI.js上で展開できるプログラマブルなフォントleonsansを紹介します。
---

https://codepen.io/mwrote/pen/YzKExxj?defaultTab=result

[leonsans](https://github.com/cmiscm/leonsans)というライブラリを使うと、Canvas上にJavaScriptで文字を描くことができます。

[公式のサンプル](https://leon-kim.com/#intro)をみると実際にどんなことができるのかがわかります。<br>
組み合わせとアイデア次第では無限大にいろいろできすそうです。<br>
[メニューごとのサンプル](https://leon-kim.com/examples/#all)や[GithubにGIF画像](https://github.com/cmiscm/leonsans)もあります。

## 使い方

CDNやnpmパッケージは用意されていません。<br>
[Githubからダウンロード](https://github.com/cmiscm/leonsans/archive/master.zip)し、
zip展開したあとにでてくる``dist/leon.js``ファイルをHTMLから読み込ませましょう。

```html
<script src="leon.js"></script>
```

## 描画する

``LeonSans``をnewし、draw関数の引数にCanvasの2D Contextをわたすことで、Canvas上に描画されます。

```js
const canvas = document.createElement('canvas');
cosnt ctx = canvas.getContext("2d");

leon = new LeonSans({
    text: 'The quick brown\nfox jumps over\nthe lazy dog',
    color: ['#000000'],
    size: 80,
    weight: 200
});

leon.draw(ctx);
```

PIXIの場合は、``draw``の代わりに``drawPixi``関数を使用します。

```js
leon.drawPixi(graphics)
```
