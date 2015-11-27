---
layout: posts
title: Vim实践与学习-02输入模式
categories: [categories, study, Vim]
tags: [gtd_next, study]
comments: true
---
## Vim基本模式  
Vim中有6个基本模式和6个基本模式的变种的辅助模式，后面的讲述中会涉及到这些模式。这里将这些模式做一个简单介绍，更多文档请参考vim手册中 `*vim-modes-intro* *vim-modes*` 部分的内容（可通过`:help vim-modes`浏览）。

### Normal Mode  
也被称作Command Mode。是Vim启动后默认进入的模式（除非设置设置了`insertmode`选项），该模式下不能编辑文件内容，但是可以接收大多数编辑指令（例如拷贝、删除、修改保存等）。

### Visual mode  
类似Normal Mode Mode，在Normal mode中通过`V`或`v`可进入该模式下，该模式中任何移动光标的动作都会将光标所经过的区域高亮，非光标移动的指令作用于高亮区域；设置`showmode`选项为`on`后，可以在窗口底部看到进入该模式的提示`-- VISUAL --`。具体可参见 `:help Visual-mode`。

### Select mode  
类似Visual mode，但是命令有很大不同。在Visual mode中输入`<C-g>`、或者在Normal中输入`gh`、`gH`、`g <C-h>`等可以进入该模式。它有点像MS Windows中的选择模式，键入一个可打印的字符后，会删除选择区域并进入插入模式。设置`showmode`选项为`on`后，可以在窗口底部看到进入该模式的提示`-- SELECT --`。

### Insert mode  
在该模式下你键入类似打开普通编辑器（如记事本）的状态，在Normal mode中键入`i`、`a`、`o`、`s`等都可以进入该模式。在该模式下可以键入你想插入的字符，字符会被插入到当前文件缓存中。设置`showmode`选项为`on`后，可以在窗口底部看到进入该模式的提示`-- INSERT --`。具体可参见`:help Insert-mode`。

### Command-line mode/Cmdline mode  
该模式下你可以在窗口底部键入一行文本，完成复杂的操作指令。从Normal mode进入该模式的方式，比如用于 Ex命令键入`:`，用于搜索键入`/`和`?`，用于过滤内容键入`!`、`=`……
具体参见`:help Cmdline-mode`。

### Ex mode  
类似Command-line mode，在Normal mode中通过键入`Q`、`gQ`可以进入该模式。该模式下输入的命令和Command-line mode中的差不多，但是输入完一条命令之后，你会保持在Ex mode中继续输入其他命令，期间当前屏幕不会刷新，键入`vi`会退出该模式。具体参见`:help Ex-mode`。

## Vim的辅助模式  
除了基本模式之外，Vim还有六个辅助模式，如下。

### Operator-pending mode  
该模式类似Normal Mode，但是在一个操作命令开始之后，Vim会等待一个`{motion}`（移动），来指定操作对应的文本。

### Replace mode  
该模式是一种特殊的Insert mode，你可以进行和Insert mode一样的操作，但是不同的是每次你键入一个被插入的字符之时，插入之处原来所在的字符就会被替换成你键入的字符。设置`showmode`选项为`on`后，可以在窗口底部看到进入该模式的提示`-- REPLACE --`。

### Virtual Replace mode  
该模式类似Replace mode，不同的是它会替换屏幕当前的内容状态，在Normal mode中键入`gR`会进入该模式。设置`showmode`选项为`on`后，可以在窗口底部看到进入该模式的提示`-- VREPLACE --`。

### Insert Normal mode  
该模式类似Normal mode，在Insert mode下键入`<C-o>`可以进入该模式，该模式下执行一条Normal mode命令后，又会回到之前的Insert mode。设置`showmode`选项为`on`后，可以在窗口底部看到进入该模式的提示`-- (insert) --`。

### Insert Visual mode  
这个模式类似Visual mode，是在Insert mode中进入 Insert Normal mode后再键入`v`、`V`、`<C-v>`，该状态结束后，会回到Insert mode。设置`showmode`选项为`on`后，可以在窗口底部看到进入该模式的提示`-- (insert) VISUAL --`。

### Insert Select mode  
这个模式类似Select mode，是在Insert mode中进入 Insert Normal mode后再键入从Normal进入Select mode的命令，会进入该模式，该状态结束后，会回到Insert mode。设置`showmode`选项为`on`后，可以在窗口底部看到进入该模式的提示`-- (insert) SELECT --`。

## 最常见的模式及相关操作  
前面介绍了Vim的多种模式，内容较多，为便于理解和继续，这里给出其中最常见的模式和相关操作。深入理解可在学习完本系列文章后再回顾。内容是在输入模式下的功能。输入模式主要有如下的操作：

* 回到指令模式(Command mode)：  
    输入：`<Esc>`.

* 输入内容：  
    输入：`...[你要输入的字符串]...`

    在这里，直接输入相应的字符即可。

* 临时切换到指令模式，执行完命令之后自动回到输入模式(Insert mode)：  
切换指令模式时输入：`<C-o>`.  
回到输入模式时输入：`<Esc>`

本文剩余部分介绍的大部分都是指令模式的相关操作。
