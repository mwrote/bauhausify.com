---
templateKey: post
date: 2019-08-30T00:00:00.000Z
cover: ''
category: Coding
propertags:
commontags:
  - 'css'
  - 'arch'
title: BEM, SMACCSを受け継いだ書きやすいCSS記法RSCSS
excerpt: >-
  気軽にCSS書きたいけどGlobal汚染して破綻するのは避けたい。RSCSSというCSS記法(設計)はそんなケースにぴったりです。私は2年ほど前から今もずっと使い続けているので、その特徴などをコードベースでご紹介します。
---

以前は、SMACCSやBEMを仕事で使っていました。しかし、今は[RSCSS](https://rscss.io/)というCSS記法に落ち着いています。

## ルーズだけど破綻しない

RSCSSの特徴は一言で言うなら、ミニマムです。

- 公式のドキュメントは絵が殆どで非常にわかりやすい、Google翻訳で問題なく読める
- ルールが厳選されており、覚えることが少なく導入しやすい
- BEMのコンポーネントの捉え方が取り込まれている。Block,Element,Modifierあたり
- SMACCSのようなマルチクラス前提。Modifierもマルチクラスで指定
- 書き方が非常に簡潔。例えばModifierは``-``で始まり、打ち消し系クラスは``_ ``で始まる

## これだけは守らないといけないこと

RSCSSのルールの中から、これだけは守らないと破綻します。

### コンポーネントベースでUIを捉える

コンポーネントでデザインを捉えることが前提です。<br>
2箇所以上同じコードの塊があり、見た目が同じか派生している場合、私はコンポーネントと捉えます。<br>
あっこれどっかで似たようなの書いてるとあれば、コンポーネント化を考えましょう。

### コンポーネントは2単語以上ハイフンつなぎ、子要素は1単語

以下のように2単語以上でコンポーネントを命名し、
子要素(Element)は1単語で命名します。

```css
.primary-button {
  > .icon {

  }

  > .text {

  }
}
```

<br>
以下のようなコードを書くと、<br>
簡単にGlobal汚染してしまいます。

:x: 1単語のコンポーネントはだめです。
```css
.button {

}
```

:x: コンポーネントの中にコンポーネントではない2単語以上もだめです。それが他で定義済みのコンポーネントなら問題ないです。
```css
.primary-button {
  > .button-icon {
    /* コンポーネントじゃないここでしか登場しないスタイル */
  }

  > .text {

  }
}
```

### コンポーネントの中の要素の指定はすべてセレクタを使用する

子セレクタを使用して、<br>
*必ずそのコンポーネント直下の1単語のクラス* にのみスタイルが適用されるようにします。

```css
.description-panel {
  > .title {

  }
}
```

:x: 以下のようにしてしまうと、``.description-panel``のDOM要素以下のコンポーネント``.title``を使ったすべてコンポーネントに影響がでてしまいます。

```css
.description-panel {
  .title {

  }
}
```

### コンポーネント自身に自信のサイズ定義をかかない

コンポーネント自身のサイズは親に書きます、<br>
これをしないと他の場所でそのコンポーネントを使い回せません。

```css
.button-group {
  > .primary-button {
    width: 100px;
  }
}

.primary-button {
  /* 自身のサイズ定義はかかない */
}
```

:x: 例えば幅100%で使いたいといったときに、わざわざ打ち消さないといけません。
```css
.primary-button {
  width: 100px;
}
```


### コンポーネント単位でファイルを区切る

*クラス名の重複* を防ぐことができます。<br>
2単語以上ハイフンつなぎの命名規則は、チーム人数多いとかぶりやすいです。

## 追加したほうが良さそうなルール

### 命名するときの共通の言葉集が必要

見た目や機能に対してどんな英語を使うのか共通化すると、<br>
チームで運営した際に、もっとリーディングしやすくなります。

[codic](https://codic.jp/)などの辞書サイトで、検索した言葉を使うようにしましょう。<br>
一人でしか触らない場合はあまり必要はないです。

### Media Queryの中に原則クラス定義をかかない

あとからコードを移植しやすいように、クラス定義の中にスタイルを書きます。

```css
.primary-button {
  font-size: 20px;

  @media (min-width: 480px) {
    font-size: 14px;
  }
}

```

:x: 以下のように書いてしまうと、``.primary-button``を移植する場合、場所が離れてしまい移動しづらいです。

```css
.primary-button {
  font-size: 20px;
}

/* ここに他のコンポーネントの定義も書かれている */

@media (min-width: 480px) {

  /* ここに他のコンポーネントの定義も書かれている */

  .primary-button {
    font-size: 14px;
  }
}

```

## 破ったルール

### ネストはDOMの階層構造とリンクしていればOK

SCSSであることが前提ですが、HTMLの構造を維持して、CSSを書いていきます。

```css
.description-panel {

  > .main {

    > .title {

    }

  }

}
```

RSCSSでは、ネストは直接の子までです。<br>
しかし、深いネストを避けるにはコンポーネントをさらに分けなければなりません。<br>
そうすると、時間がかかり、コンポーネントの場所が離れてしまい編集しづらくなります。
ただ、チーム共通のライブラリの用途等の場合は、しっかりコンポーネントを分けて作りましょう。<br>

<br>
以上になります。<br>

どうでしょうか、長々しく書いてしまいましたが、<br>
まずは[公式のドキュメント](https://rscss.io/)をみるのをおすすめします。<br>
非常にわかりやすいです。<br>

そして実際に書いてみてください。<br>
今までBEMなどで厳格に書いていた人は非常に書きやすいと感じるかと思います。

他にも、CSSの種別と読み込み順の設計方法である[itcss](https://itcss.io/)と組み合わせるとよりいいのですが、<br>
それは後日書きます。

Happy Coding CSS!
