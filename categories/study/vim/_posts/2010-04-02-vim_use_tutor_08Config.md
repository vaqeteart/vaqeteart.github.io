---
layout: posts
title: Vim实践与学习-08配置相关
categories: [categories, study, vim]
tags: [gtd_next, study]
comments: true
---
* 查看vim的版本及功能：  
	输入`:version`.  
	这样会显示当前vim的版本，编译选项，vim配置路径等信息。  
  
* 查看所有set选项:  
	输入`:set all`.  
	或输入`:se all`.  
	这样可以查看所有可以设置的选项。  
  
* 显示当前set设置：  
	输入`:set`.  
	或输入`:se`  
	这样，可以显示当前set设置。  
  
* 显示制定选项的设置:  
	输入`:set {option}?`.  
	或输入`:se {option}?`  
	这里，可以查看选项`{option}`的值，例如`:set nu?`可以查看是`nu`或是`nonu`（是否显示行号）。  
  
* 显示所有行行号：  
	输入`:set nu`。  
  
* 设置搜索时显示高亮：  
	输入`:set hls`。  
	或输入`set hlsearch`。  
  
* 取消搜索时高亮显示：  
	输入`:set nohls`。  
	或输入`:set nohlsearch`。  
	或输入`:nohl`.  
	这里，查找一个字符，程序会用高亮显示出来，这样设置就不高亮了，当然查找一个不存在的字符也可取消当前高亮状态。通过`:nohlsearch`只是暂时关闭高亮显示，下次搜索时将自动恢复高亮(当然是在一次启动vim的期间，如果关闭vim再重新启动，那么状态是.vimrc规定的)。高亮就不能用`:hls`需要用`:set hls`.实践发现，`:set nohls`之后，关闭vi,再打开之后上次搜索的还是高亮状态，但是用`:nohls`之后再打开那么上次的搜索就不是高亮了.  
  
* 搜索时忽略大小写：  
	输入`set ic`.  
	这样输入`/`进行搜索的时候，就不考虑大小写了。  
  
* 取消搜索时忽略大小写：  
	输入`set noic`.  
	也即搜索不忽略大小写，这也是默认的情况。  
  
* 对netrw插件（文件浏览）窗口方向的配置：  
	输入`:let g:netrw_preview=0`.  
	或输入`:let g:netrw_preview=1`.  
	设置内部变量g:netrw_preview.假设光标在目录的某一个文件上面，如果为0（默认）则按p的时候水平开窗口预览文件，为1则垂直。  
  
* 高亮当前行：  
	输入`:set cursorline`.  
	或输入`:set cul`.  
	这样光标当前行会有一个下划线。  
  
* 取消高亮当前行：  
	输入`:set no cursorline`.  
	或输入`:set no cul`.  
	这样取消了当前行的下划线。  
  
* 在’complete‘选项中去掉`i`标记:  
	输入`:set complete -=i`  
	如果CTRL-N和CTRL-P补全时查找所包含的头文件，耗时会比较久。此时，可以在 ’complete‘ 选项中去掉`i`标记`:set complete-=i` 。  
  
* 让vi自动缩进对齐代码:  
	输入`:set ai`.  
	或输入`:set autoindent`.  
	这样在你敲入一个新行的时候,会自动将上一行的缩进拷贝过来,这样上下两行的缩进就会一样了,并且即使输入`{`之后,再新起一行也会这样,而不是多缩进一个,为了保持代码的语法缩进输入`{`之后新行要手动再输入一个缩进.如果该行没有任何内容就进入下一行,那么这个缩进会自动被删除.  
  
* 让vi智能缩进对齐代码:  
	输入`:set si`.  
	或输入`:set smartindent`.  
	亦或`:set cindent`.  
	这里，`si`是`smartindent`的简写，它比`ai`智能，而`ai`只管复制上一行缩进。如果有`si`那么`ai`就会自动也有了，并且在输入`{`或者一些`cinwords`关键字的时候会自动插入一个缩进(不止是复制，还多插入一个缩进，这导致输入这样字符之后新起一行看起来像是自动又缩进了)，而且输入`}`的时候如果它是一行的第一个字符会自动让它和与它匹配的那个`{`取相同的缩进。`smartindent`和`cindent`有点不一样，前者在多数语言中比较通用，而后者比较严格像c.`cindent`如果打开那么`smartindent`就会关闭。  
  
* 设置在敲`}`,`]`或`)`显示出对应匹配的`{`,`[`或`(`:   
	输入`:set sm`.  
	这样,在敲入右半括号的时候会自动把前面的左半括号高亮一下.  
  
* 设置简写：  
	输入`:ab `.  
	这里，会将做为的简写，例如：输入`:ab usa United States of America`之后，当你在文见里插入 `usa` 之后，按下回车或空格等，这时 `United States of America` 就蹦出来了。  
  
* 设置显示的颜色主题为`ron`：  
	输入`:color ron`.  
	或输入`:colorscheme ron`.  
	这里，`ron`主题是我个人感觉比较好看的一种主题，可以先输入`:colorscheme`再`[Ctrl]d`可以查看所有的可选主题。  
  
* 打开语法高亮：  
	输入`:syntax on`.  
	或输入`:syn on`.  
	这里，syntax还有enable等值，具体察看`:help syntax`,之后搜索`syntax on`.  
  
* 关于缩进的宽度：  
	+ 一個tab用4个space寬度顯示：  
		输入`:set tabstop=4`.  
		这里，定义tab所等同的空格长度，一般来说最好设置成8，因为如果是其它值的话，可能引起文件在打印之类的场合中看起来很别扭。除非你设置了 expandtab模式，也就是把tabs转换成空格，这样的话就不会一起混淆，不过毕竟制表符为8是最常用最普遍的设置，所以一般还是不要改。  
  
	+ 一個縮排 (indent) 跳的 space 數为4：  
		输入`:set shiftwidth=4`.  
		或输入`:set sw=4`.  
		这个是用于程序中自动缩进（(auto)indent）所使用的空白长度指示的。一般来说为了保持程序的美观，和tabstop参数最好一致。同时它也是符号移位长度的制定者。  
  
	+ 一個 tab 含幾個 space (under editing operation)：  
		输入`:set softtabstop=4`.  
		这里，若我们希望改变程序中的缩进，shiftwidth和tabstop不一样的话，你会发现程序比较难看的。这时需要设置这个softtabstop。从vim说明可知，一旦设置了softtabstop的值，你按下tab键，插入的是空格和tab制表符的混合，具体如何混合取决于你设定的softtabstop。例如，如果设定`softtabstop=8`,那么按下tab键，插入的就是正常的一个制表符;如果设定 `softtabstop=16`,那么插入的就是两个制表符；如果`softtabstop=12`,那么插入的就是一个制表符加上4个空格；如果 `softtabstop=4`呢？那么一开始，插入的就是4个空格，此时一旦你再按下一次tab，这次的四个空格就会和上次的四个空格组合起来变成一个制表符。换句话说，softtabstop是`逢8空格进1制表符`,前提是你`tabstop=8`。  
  
	+ 设置举例1(建议使用)：  

			set shiftwidth=4  
			set tabstop=4  
		这样，缩进的宽度和制表宽度都是4个空格的宽度，也没有前面的在Makefile等需要制表符的语法里需要敲两次[Tab]才产生一个制表符号的缺点了。  
  
	+ 设置举例2：  

			set shiftwidth=4  
			set tabstop=8  
			set softtabstop=4  
		这样，代码自动缩进(shiftwidth)的宽度是4个空格，一个制表符的宽度(tabstop)是8个空格,按下一次[Tab]会产生4个空格，产生8个空格的时候会自动转换成一个制表符号（很智能地，删除的时候可以判断是删[Tab]产生的4个空格）。缺点是这样的设置在Makefile等需要制表符的语法里需要敲两次[Tab]才产生一个制表符号。  
  
* 设置当前目录自动跟随当前文件:  
	输入`:set autochdir`.  
	或输入`:set acd`.  
	这样之后，当切换到另一个文件的时候，vim的当前工作目录就会自动地切换到那个文件所在的目录。这里即使有tab标签打开多个文件，当前显示的文件，所在的目录就是vim的工作目录。取消这个选项的命令是`set noacd`.  
  
* 不要备份编辑的文件:  
	输入`:set nobackup`.  
	这里，当vi打开一个文件开始编辑的时候，会创建一个原始文件的备份文件（一般以原名加`~`结尾），如果不想创建这个备份，那么就设置这个选项。一般这个选项可以和writebackup一块使用，两者的值的组合决定了不同的备份策略。当backup和writebackup同时为no的时候就会什么备份也不创建了。使用具体参见帮助`help backup`。一般默认的设置就是`:set nobackup`和`:set writebackup`,就是备份当前文件，过后（成功写入之后）再删除？。  
  
* 备份编辑的文件：  
	输入`:set backup`.  
	这样设置之后，会在你编辑并且保存写好的文件的时候，备份文件。  
