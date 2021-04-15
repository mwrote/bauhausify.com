---
templateKey: post
date: 2019-07-06T00:00:00.000Z
cover: >-
  https://res.cloudinary.com/mwrote/image/upload/v1562429989/bauhausify/spacemacs.png
category: Coding
propertags:
  - 'spacemacs'
  - 'emacs'  
commontags:
  - 'editor'
title: 人生のパートナーとなるテキストエディタSpacemacs!
excerpt: >-
  近年VSCode[VisualStudioCode]というエディタが私の界隈では人気ですが、10年以上前から生存し、今もなお進化し続けるエディタSpacemacsがとてもおすすめなのでご紹介します。
---
普段よく書く言語が、HTML, CSS, JavaScriptなどの場合、ライトウェイトなテキストエディタが非常に重宝します。<br>
主観ですが、ここ近年の私の界隈での人気のエディタは、[Sublime Text](https://www.sublimetext.com/), [Atom](https://atom.io/), [VSCode[VisualStudioCode]](https://code.visualstudio.com/)と遷移してるように感じます。今はVSCodeで収まっているのかなという印象です。しかし、それでもやはりSpacemacsはいいと思います。この記事ではその魅力をご紹介したいと思います。

## Spacemacsとは

[Spacemacs](http://spacemacs.org/)とは、[Emacs(GNU Emacs)](https://www.gnu.org/software/emacs/)というエディタの拡張機能セットです。<br>
EmacsはLisp(Emacs Lisp)という言語でエディタ自体を自分で拡張することも、他の人が書いた拡張機能を自分のエディタに設定することもできます。<br>
しかし、いざ設定してみると、うまく動かなかったり、時間がかかったり、使いづらいショートカットキーになったります。<br>
そこで、みんなのベスト機能を選別して、さらに使いやすくチューンナップしてあげよう！といったのがSpacemacsになります。

このエディタを使うメリットはたくさんあります。

### メリット

- 無料。無料に勝るものはないです
- かっこいい。無駄なUIが無いので玄人プログラマー感がでます。マウスを一切使わないので、手がキーボードから離れることがなく効率がいいです。
- 高機能。IDEと言われるようなIntellijIDEAとかXcodeとかVisualStudioに勝る機能がたくさんあります。
- org-modeがすばらしい。Markdownに似ているorgというドキュメント形式があるのですが、そのためだけに使うでも価値があります
- Mac標準でemacsのキーに対応している。これはMac開発者にemacsユーザーが多いかららしいです
- 有名な人が使っていたりします。Rubyの作者の松本さんも使われているそうです。個人的にはアート界隈で尊敬しているJosh Nimoy さんが使っているのに注目しています。映画 Tron: Legacy のかっこいい3D部分の原型をコーディングして作った人です。http://www.talisman.org/~erlkonig/misc/tron-legacy-effects-blog/

### デメリットは特殊なキーバインド？

もちろんデメリットもあります。それは特殊なショートカットキーです。<br>
Ctrl + Y で貼り付け, Ctrl + W で切り取りといった具合です。一旦覚えると非常に早くコードがかけるのですが、他のソフトを触った時にご作動が多発します。<br>
正直これはなれるしかないです、、、ただなれた先には爆速コーディングがまっています。

## インストールしてみよう

### 前提条件

- Mac向けです。Windowsでも動きます。この記事はMac向けです。
- [homebrew](https://brew.sh/index_ja.html)の事前インストールをお願いします。
- [git](https://git-scm.com/)Spacemacsの設定を管理するのに必要です。もしhomebrewがインストールされているなら、ターミナルで ``brew install git``を実行してください。

### Emacsのインストール

まずはhomebrewからGUI版のEmacsをインストールします。すでにインストールされているなら不要です。

```sh
brew install emacs-plus
```

他のアプリケーションと同じように起動できるようにシンボリックリンクを作っておきましょう。
```sh
ln -s /usr/local/opt/emacs-plus/Emacs.app /Applications/Emacs.app
```

### Spacemacsの設定のインストール

Spacemacsのメインとなる設定を適用していきます。<br>
もし、すでにemacsを起動していたら既存の設定を退避するか、削除してください。

```sh
cd ~/

# .emacs.d.bakというフォルダに既存の設定を退避します。
mv .emacs.d .emacs.d.bak

# 既存の設定を削除します。
rm -rf .emacs.d
```

次にSpacemacs本体を落とします。

```sh
git clone https://github.com/syl20bnr/spacemacs ~/.emacs.d
```

この状態でEmacsを起動するとSpacemacsとして起動できます。

## 初期設定を変更してみよう

一度Spacemacsを起動するとホームフォルダ以下に.spacemacsというファイルが生成されます。<br>
このファイルがSpacemacsの命です!<br>

ファイルを開いて中身を確認しましょう。
場所がわからない人は、以下のコマンドをターミナルで実行すると開きます。
```sh
open ~/.spacemacs
```

このファイルの大事な箇所は以下です。

```lisp
(defun dotspacemacs/layers ()
  (setq-default
   dotspacemacs-configuration-layers
   '(
    ;; ここにSpacemacsでデフォルトで用意されているパッケージを追加します。
    ;; 例えばjavascriptを追加すると
    ;; https://github.com/syl20bnr/spacemacs/tree/master/layers/%2Blang/javascript
    ;; にかかれている設定が適用されます。
    ;; 設定可能なパッケージ(レイヤーと呼びます)は
    ;; https://github.com/syl20bnr/spacemacs/tree/master/layers
    ;; で確認してください。
    )
    dotspacemacs-additional-packages
    '(
    ;; ここではelpa(パッケージレジストリ)に公開されているような他の外部パッケージを読み込ませたい場合はここに設定します。
    )
  )
)

(defun dotspacemacs/init ()
  (setq-default
   ;; ここでspacemacsで用意されている初期設定を変更できます。フォントサイズやテーマの設定など、基本的な部分です。
  )
)

(defun dotspacemacs/user-config ()
   ;; このエリアに自分だけの設定を書いていきます。
   ;; 各モード時の設定変更やキー設定など、ここですべてカスタマイズしていきます。
)
```

実際に自分で好きなパッケージをインストールして自分好みにカスタマイズしていきましょう。<br>
この部分が一番の醍醐味で、このエディタの楽しいところです。<br>

参考までに私のインストールしているパッケージを載せておきます。<br>
普段フロントエンドでマークアップやJS書いているタイプの人に向いています。
ここにかかれているパッケージの内容はすべて``~/.emacs.d/layers``に保存されているものです。<br>
https://github.com/syl20bnr/spacemacs/tree/master/layers<br>
を眺めて、自分に合うパッケージがあったらどんどん試してみましょう。<br>
一つ一つが厳選されているので、自分に合うものがあれば絶対に役立つはずです。

```lisp:title=dotspacemacs-configuration-layers内のパッケージ
csv
php
yaml
git
github
colors
better-defaults
helm
emacs-lisp
markdown
org
osx
html
javascript
react
typescript
cscope
(gtags :variables gtags-enable-by-default t)
spell-checking
syntax-checking
emoji
dash
ruby
wakatime
python
ipython-notebook
haskell
shaders
docker
csharp
imenu-list
rust
version-control
plantuml
(shell :variables
       shell-default-shell 'shell
       shell-default-term-shell "/usr/local/bin/zsh"
       shell-default-height 30
       shell-default-position 'bottom)
(auto-completion :variables
                 auto-completion-enable-help-tooltip t
                 auto-completion-complete-with-key-sequence-delay 0.2
                 auto-completion-enable-snippets-in-popup t)
```

Spacemacs以外のパッケージでは以下を導入しています。

```lisp:title=dotspacemacs-additional-packages内のパッケージ
bind-key
quickrun
all-the-icons
all-the-icons-dired
editorconfig
processing-mode
scad-mode
helm-chrome
vue-mode
confluence
dotnet
indium
import-js
```

## おすすめのキー練習方法

とは言え、このエディタはまずはキーバインドが特殊すぎて毛嫌いする人もいるかと思います。<br>
僕もこれで習得したのですが、まずは公式のチュートリアルをおすすめします。<br>
あとは、ちょっとしたメモ書きからemacsなどで徐々に書いていき、業務では余裕があるときに導入していきましょう<br>

公式のチュートリアルはEmacsを起動したあとに、<br>
``optionキー(メターキーをcommandにしていたらcommandキー) + x``をおして<br>
``help-with-tutorial-spec-language``を選択してください。<br>
次に``Japanese``を選択します。<br>
すると日本語のEmacsチュートリアルが始まります。

### 意外と大事なモチベーションあげる

私はよく動画とかみて憧れて、こんな風になりたいという動機をバネに勉強したりします。
バーチャルな世界観がかっこいいTRON: LegacyのワンシーンでEmacsが使われているのはご存知ですか？

https://vimeo.com/62734435

00:42あたりの画面は完全にemacsですね。<br>

みなさんも、ぜひ自分ならではのEmacsの良さを見つけて楽しくコーディングをしていきましょう:smile:
