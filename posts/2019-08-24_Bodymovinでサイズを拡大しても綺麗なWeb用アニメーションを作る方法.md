---
templateKey: post
date: 2019-08-24T00:00:00.000Z
cover: ''
category: Design
commontags:
  - 'animation'
  - 'software'
title: Bodymovinでサイズを拡大しても綺麗なWeb用アニメーションを作る方法
excerpt: アニメーション作成にはどのツールを使うべきでしょうか。SVGアニメーションのように拡大してもあれない、そして再利用しやすいアニメーションが作れるBodymovinというAfterEffectsのプラグインを紹介します。
---

[Framer X](https://www.framer.com/)や[Principle](https://principleformac.com/)といったすばらいいツールもありますが、なかなかデファクトスタンダードにはなっていない印象です。<br>
そこで、アニメーション制作に関して、特に映像分野ですでに地位を獲得している、AfterEffects(以下AE)を使ったアニメーションの書き出し方法を説明します。<br>

なぜAEがいいのか、以下の理由があげられます。

- コーディングでSVGアニメーションを作る場合と比べて、再利用、再加工、管理がしやすい
- 精密なアニメーションも簡単に作成できる
- 企業ですでにをAdobeのコンプリートプランに加入していると、すぐに使うことができる

さらに、[Bodymovin](https://github.com/airbnb/lottie-web)というプラグインを使うと、デザイナーが作ったものを二次加工や書き写ししなくても、そのままWebやアプリで使えることができます。

## Bodymovinとは

[hernan](https://github.com/bodymovin)さんが制作された、AEのアニメーションを解析し、Webで読み込み可能なJSONファイルとして出力するAEプラグインです。
宿泊予約サイト[Airbnb](https://www.airbnb.jp/)が公開している[Lottie](http://airbnb.io/lottie/)という、ネイティブアプリやWebで書き出せる方法の中で使われています。
余談ですが、Airbnbのデザインチームが以下にすばらしいかは、[https://airbnb.design/](https://airbnb.design/)で見ることができます。<br>
また、GoogleのデザインチームもBodymovinを利用しているようです。[Mediumの記事](https://medium.com/google-design/bodymovin-to-android-6e53e5f7a96)にアプリで使用している形跡がありますし、実際にブラウザ上のコードの中身をみるとBodymovinの文字がありました。

これだけでも使う価値がありますね。特に企業ユースで。

## インストール手順

1. 念のためAEは終了してください
1. AEのプラグインをインストールするためZXP Installerをインストールします。[公式サイト](https://aescripts.com/learn/zxp-installer/)からダウンロードしましょう。<br>
homebrewをインストールしている人は以下のコマンドでインストールできます。
```sh
brew cask install zxpinstaller
```
1. BodymovinはAirbnbの[lottie-webリポジトリ](https://github.com/bodymovin/bodymovin/releases)から最新のzipファイルをダウンロードできます。リンク先の最新の``v*.*.*``の箇所をクリックし、Source code(zip)をダウンロードしましょう。
1. 解答した中にある、bodymovin.zxp(build > extension > bodymovin.zxp)を、先程インストールしたZXP Installelrを起動し、ウィンドウ内にドラッグします。
1. AEを起動します。メニュー > Window > 拡張機能 を確認し、Bodymovin が追加されていたらインストール完了です。<br>
頻繁に更新されるので、定期的に新しいバージョンにすることをお勧めします。
1. 最後に設定を変更します。環境設定 > 一般設定 > スクリプトによるファイルへの書き込みとネットワークへのアクセス をチェックしてください。

## アニメーションを作る

AEのすべての機能が使えるわけではありません。<br>
[公式サイト](http://airbnb.io/lottie/#/supported-features)を確認して、対応している機能のみを使ってアニメーションを作りましょう。<br>
AEの使い方は長くなるので割愛します。<br>
このようなデザインツールのリソースの勉強にはYoutubeをおすすめします<br>
``ae bodymovin``などで検索するとたくさんでてきますね。<br>
例えばDesignCourseさんはアイコンアニメーションを作り、Bodymovinで書き出す方法を紹介されています。<br>
https://www.youtube.com/watch?v=2Tm8ijJsuMc


## Web向けに書き出す

1. メニュー > Window > 拡張機能 > Bodymovin を選択します。
1. 書き出したいコンポジションを選択し > 歯車アイコンを選択します。
1. 書き出したい種類を選択し、demoを選択するとHTMLファイル１つに書き出してくれます。
1. Destination Folder(3点リーダーのアイコン)をクリックして保存先を指定します。
1. Renderを実行すると、指定したフォルダに書き出してくれます。
1. 書き出されたHTMLをブラウザーで表示し、アニメーションが動いていることを確認します。

完成したらフロントエンドエンジニアに、[Webの実装方法](http://airbnb.io/lottie/#/web)のURLとAEファイルか書き出したファイルを渡しましょう。

参考です。powermojoさんが動画で書き出し方法を説明されています。<br>
https://www.youtube.com/watch?v=5XMUJdjI0L8

[Lottie](http://airbnb.io/lottie/#/)のサイトをみると、見ていて楽しい魅力的なアニメーションがたくさんありますね。<br>
フロントエンドエンジニアとしても、このようなアニメーションを実装するのは楽しいはずです。<br>

今回はAdobeのAEを使った手法を紹介しましたが、<br>後日、[Framer X](https://www.framer.com/)や[Principle](https://principleformac.com/)などの他のツールを使ったアニメーション構築方法も記事にしたいと思います。

Happy Designing Animation!
