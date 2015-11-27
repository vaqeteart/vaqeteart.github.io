---
layout: posts
title: Vim实践与学习-09其他
categories: [categories, study, vim]
tags: [gtd_next, study]
comments: true
---
* 查看vim的简易教程：  
    输入`:!vimtutor`.  
    这里实际vimtutor是shell终端下的一个命令，这里实际是执行的shell命令，可以在终端直接输入vimtutor。  
  
* 保存与恢复上次的编辑状态：  
  
	+ 保存会话与状态，步骤如下：  
		1. 输入`:cd src`。  
			这将切换到./src目录  
		2. 输入`:mksession vim70.vim`  
			这将在./src目录创建一个会话文件，该会话文件保存了当前的窗口状态（例如打开几个窗口）  
		3. 输入`:wviminfo vim70.viminfo`  
			这将在./src目录创建一个viminfo文件，该会话文件保存了当前的命令历史，缓冲等等状态。  
		4. 输入`:qa`  
			这样，退出vim。  
  
	+ 根据上次保存的文件恢复会话与状态，步骤如下：  
		1）输入`:source ~/src/vim70/src/vim70.vim`  
			这样，载入vim70.vim会话文件(mksession建立的不一定非要.vim后缀)，当前立即会出现上次保存vim70.vim时候的窗口布局状态。  
		2）输入`rviminfo vim70.viminfo`  
			这样，读入viminfo文件（wviminfo建立的），当前的历史、缓冲等状态会被恢复（如`set nu`等）。  
  
* 更新并重新载入.vimrc：  
	输入`:source ~/.vimrc`。  
	这里，当我们修改完了.vimrc文件之后，执行这句话，不用重启vim就能载入.vimrc中的新设置。  
  
* 查找当前光标位置单词的man手册：  
	输入`[Shift]k`.  
	这个命令经常用来查某个库函数，等同于`:!man <当前光标单词>`。  
  
* 显示所有命令：  
	输入`:[Ctrl]d`.  
	按`[Tab]`可以依次选择每一个。  
  
* 显示所有以`e`开始的命令：  
	输入`:e[Ctrl]d`.  
	这里先在命令模式下面输入一个字母`e`（其他字母类似），然后按`[Ctrl]D`就会显示所有以`e`开始的命令。按`[TAB]`选择一个命令。  
  
* 在vi中暂时进入shell:  
	输入`:shell`.  
	这样,临时从vi进入shell,当前路径就是刚才vi的路径。从shell返回vi,则敲入`exit`。  
  
* 一个基于vi的比较工具，vimdiff  
	vimdiff可以同时打开两个或者多个文件,进行比较。它会将两个文件的相同指出尽量列在同一位置上面，便于查对比较。其实vimdiff就是vim，只是一个符号链接而已，你可以用`file /etc/alternatives/*|grep bin/vim`看看, 其命令基本和vim是一致的。  
  
	命令格式:`vimdiff [options] file1 file2 [file3]`  
  
	启动后，vimdiff使用vim加载两个或者多个文件，每个文件有其自己的窗口。每个文件中不同的地方会用高亮显示出来。它在进行改变的检查以及将改动从一个版本的文件移动到另一个版本的情况下非常方便。首先你得保证安装了vim才能是用vimdiff.用这个命令安装：  
	`#apt-get install vim-full`  
	其他类似的工具还tkdiff,meld 和 xfdiff4等。   
  
	+ 同时打开main.cpp和main2.cpp，垂直方向分屏:  
		输入`$vimdiff main.cpp main2.cpp`  
		或`$vim -d main.cpp main2.cpp`  
		这样会同时打开两个文件垂直在两栏显示，可以打开不止两个文件。  
  
	+ 同时打开main.cpp和main2.cpp，水平方向分屏：  
		`$vimdiff -o main.cpp main2.cpp`  
		这样会同时打开两个文件在上下两栏显示.  
  
	+ 打开文件之后  
		可以看见不同的地方会高亮显示，相同的地方默认会被折叠起来。如下常用操作：  
  
		- 跳到下一个不同的地方:  
			输入`]c`.  
  
		- 跳到上一个不同的地方：  
			输入`[c`.  
  
		- 用另外一个窗口的不同处替换当前：  
			输入`do`.  
			这里，前提是用`]c`或者`[c`跳到相应的不同处,执行完毕之后，当前窗口当前位置内容被替换为另外一个窗口的当前位置内容。注意这里是两个文件的情况,当前窗口有多于两个文件时无法进行。  
  
		- 先指定范围1-100行，再用另外一个窗口的不同处替换当前：  
			输入`1,100 diffg`.  
			或输入`1,100 diffget`.  
			这里，等同于`do`不过指定了范围，如果有缓冲还可在diffg后面指定缓冲名字。  
  
		- 先指定范围1-100行，再用指定3号缓冲(假设是文件file3)的不同处替换当前：  
			输入`1,100 diffg 3`.  
			或输入`1,100 diffget 3`.  
			这里，在`diffg`后面指定缓冲名字。  
  
		- 用当前替换另外一个窗口的不同处：  
			输入`dp`.  
			这里，前提是用`]c`或者`[c`跳到相应的不同处,执行完毕之后，另外一个窗口的当前位置内容被替换成当前窗口当前的位置内容。注意这里是两个文件的情况,当前窗口有多于两个文件时无法进行。  
  
		- 先指定范围1-100行，再用另外一个窗口的不同处替换当前：  
			输入`1,100 diffpu`.  
			或输入`1,100 diffput`.  
			这里，等同于`dp`不过指定了范围，如果有缓冲还可在`diffpu`后面指定缓冲名字。  
  
		- 先指定范围1-100行，再用指定3号缓冲(假设是文件file3)的不同处替换当前：  
			输入`1,100 diffpu 3`.  
			或输入`1,100 diffput 3`.  
			这里，在`diffpu`后面指定缓冲名字。  
  
		- 新开一个水平窗口载入file文件进行对比：  
			输入`:diffsplit file`.  
			这里新开的窗口是水平排列的,在不同窗口间移动的命令同vim。  
  
		- 新开一个垂直窗口载入file文件进行对比：  
			输入`vert diffsplit file`.  
			这里,vert实际是vertical前缀的简写。新开的窗口是垂直排列的,在不同窗口间移动的命令同vim。  
  
		- 强制更新文件的不同状态：  
			输入`:diffupdate`.  
			这里，当我们修改某一个文件的时候，vim会试图使它和另外一个文件的不同之处保持更新，例如插入和删除行。但是，更复杂的修改或者在一个行内的修改可能会导致不同处(vimdiff)没有及时更新，这时候可以运行这个命令`diffupdate`进行强制更新。  
  
		- 修改缺省的上下文行为3行:  
			输入`:set diffopt=context:3`.  
			这里vimdiff 缺省是会把不同之处上下各 6 行的文本都显示出来以供参考。其他的相同的文本行被自动折叠。如果希望修改缺省的上下文行数，可以这样设置.  
  
		- 打开折叠的文本：  
			输入`zo`.  
  
		- 折叠折叠的文本：  
			输入`zc`.  
  
		- 修改完毕之后保存所有文件：  
			输入`wqa`.  
  
* 杂项  
	+ 关于vim的配置文件：  
		如果让vim启动自动执行某些命令可以在主目录（~/）下建立一个`.vimrc`文件，填入相关命令即可。Vim启动时会自动读取这个文件，当然可以在编辑文件的状态下输入`:source ~/.vimrc`实时读取该文件，这样修改了这个文件的时候就不用重新启动vim了。例如：设置vi启动后，不备份当前修改文件，输入：`echo 'set nobackup' >>~/.vimrc` ，这样相当于把`set nobackup`加到.vimrc中去了。  
  
		举例：  
		一个简单的程序员的vi编辑器, 创建或修改`~/.vimrc`文件,内容如下:  
  
			set tabstop=4  
			set softtabstop=4  
			set shiftwidth=4  
			set autoindent  
			set cindent  
			set number  
			set showmatch  
			set mouse=a  
  
		更多的选项，具体有待研究，如：  
		- 打开语法高亮：  
			输入`:syntax enable`。  
			或输入`:syntax on`。  
			这里前者设置完了还可以用hilight设置自己喜欢的颜色，后者只用默认的颜色（??help这样说??）；都只在当前编辑中起作用。  
  
		- 换行时自动缩进：  
			输入`:set si`。  
			或输入`:set smartindent`。  
			红色的不确定  
  
		- 据说X/Windows 的剪贴板的内容是存在寄存器+中，粘贴命令为：  
			输入`"+P`.  
  
		- 将简单的 `y` 和 `p`命令与系统剪贴板联系起来:  
			输入`:set clipboard+=unnamed " set clipboard`.  
  
		- 注释代码块的步骤：  
			1. 先移到第一行，输入 `I//` (就是`ESC`键).  
				这样，将第一行注释。  
			2. 移到第二行，按 `V` 进行 line visual mode，再按`j` 或其它方向移动键选好要注释的所有代码行。  
			3. 最后按`.`.  
				实际这只是在visual mode 里使用 redo 的功能而已。这样应该就将许多代码块一并注释了。（可以看看先用`V`选择，再`i`插入`//`）  
  
		- 用一個 '適當' 的 space數量取代 tab：  
			输入`:set expandtab`.  
			这里，需要和shiftwidth一块使用，在多人一起开发项目时，为了使代码风格尽量保持一致，一般不允许在代码使用TAB符，而以4个空格代之。我们可以编辑一个文件，包含下面的内容：  
  
				set shiftwidth=4  
				set expandtab  
  
		- 遇到make不做expandtab：  
			输入`:au FileType make set noexpandtab`.  
			这里，make和python中[Tab]有特殊的含义，所以不做[Tab]向[Space]的转换。  
  
		- 遇到python不做expandtab：  
			输入`:au FileType python set noexpandtab`.  
			这里，make和python中[Tab]有特殊的含义，所以不做[Tab]向[Space]的转换。  
			据说可以把下面的命令加入到.vimrc中：`autocmd FileType c,cpp set shiftwidth=4 | set expandtab`  
			就可以只在编辑c和cpp文件时实行相应的设置了  
  
* 快速输入匹配的小技巧  
	这里介绍一个小技巧，可以快速输入`{}`,`()`等匹配对里面的内容。  
  
	经常在编程的时候输入`{}`,`()`等等需要成对输入的元素，如果不一下输入一对，很容易就会忘记了匹配，这是一个好习惯，但是这样，我们在往匹配对里面输入字符的时候还要按方向键进入匹配对里面，输入之后还要再按方向键从匹配对里面出来，这样很麻烦，手的动作很大，所以我用如下方法解决这个问题。  
  
	原理：利用vim里面编辑状态的`[Ctrl]o`临时切换程命令行状态执行命令，然后自动回到编辑状态。  
  
	举例：  
	如果我输入`{good}a`，则：  
	1. 输入`{}`。  
		这里意思是先输入匹配对  
	2. 输入`[Ctrl]o`.  
		临时切换到命令行状态  
	3. 输入`i`.  
		命令行状态下`}`一般都会在行尾，所以按`i`就回到了`{}`里面；注意如果按左方向键，就到了`{}`的左面了，当然若你的`{}`不在行尾的话可以用左方向键进入`{}`。  
	4.  输入`good`.  
		这里，自动回到了编辑状态，所以输入的`good`是在`{}`里面的。  
	5.  输入`[Ctrl]o`.  
		这里输入完了`{}`的内容，想要从`{}`出来，所以又临时切换成命令模式。  
	6.  输入`o`.  
		或输入`a`.  
		如果输入`o`则在新行继续输入你要输入的内容，如果输入`a`则在`{}`的后面继续输入你要输入的内容。  
	7.  继续输入你想要输入的内容。  
		过程说着很麻烦，但是，如果实践一下很简单的，任何知识都是说着麻烦做着简单的。试试看，你一定会有所收获，如果养成了习惯，一定会提高效率的。  
		根据原理，你还可以扩展其它的类似技巧。^_^  
  
* 配置cscope  
	配置好cscope之后，可以在代码中完成函数跳转、搜索代码标号、以及查看被调用函数、搜索文件等等。cscope与ctags的不同之处在于，cscope产生的索引是静态的，文件内容改变之后，定位信息就不准确了。  
	可以在vim的配置中加入相关的配置，如cscope.vim的内容如下：  

		""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
		" CSCOPE settings for vim           
		""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
		"
		" This file contains some boilerplate settings for vim's cscope interface,
		" plus some keyboard mappings that I've found useful.
		"
		" USAGE: 
		" -- vim 6:     Stick this file in your ~/.vim/plugin directory (or in a
		"               'plugin' directory in some other directory that is in your
		"               'runtimepath'.
		"
		" -- vim 5:     Stick this file somewhere and 'source cscope.vim' it from
		"               your ~/.vimrc file (or cut and paste it into your .vimrc).
		"
		" NOTE: 
		" These key maps use multiple keystrokes (2 or 3 keys).  If you find that vim
		" keeps timing you out before you can complete them, try changing your timeout
		" settings, as explained below.
		"
		" Happy cscoping,
		"
		" Jason Duell       jduell@alumni.princeton.edu     2002/3/7
		""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
		" This tests to see if vim was configured with the '--enable-cscope' option
		" when it was compiled.  If it wasn't, time to recompile vim... 
		if has("cscope")
			""""""""""""" Standard cscope/vim boilerplate
			" use both cscope and ctag for 'ctrl-]', ':ta', and 'vim -t'
			set cscopetag
			" check cscope for definition of a symbol before checking ctags: set to 1
			" if you want the reverse search order.
			set csto=0
			" add any cscope database in current directory
			if filereadable("cscope.out")
				cs add cscope.out  
			" else add the database pointed to by environment variable 
			elseif $CSCOPE_DB != ""
				cs add $CSCOPE_DB
			endif
			" show msg when any other cscope db added
			set cscopeverbose  
			""""""""""""" My cscope/vim key mappings
			"
			" The following maps all invoke one of the following cscope search types:
			"
			"   's'   symbol: find all references to the token under cursor
			"   'g'   global: find global definition(s) of the token under cursor
			"   'c'   calls:  find all calls to the function name under cursor
			"   't'   text:   find all instances of the text under cursor
			"   'e'   egrep:  egrep search for the word under cursor
			"   'f'   file:   open the filename under cursor
			"   'i'   includes: find files that include the filename under cursor
			"   'd'   called: find functions that function under cursor calls
			"
			" Below are three sets of the maps: one set that just jumps to your
			" search result, one that splits the existing vim window horizontally and
			" diplays your search result in the new window, and one that does the same
			" thing, but does a vertical split instead (vim 6 only).
			"
			" I've used CTRL-\ and CTRL-@ as the starting keys for these maps, as it's
			" unlikely that you need their default mappings (CTRL-\'s default use is
			" as part of CTRL-\ CTRL-N typemap, which basically just does the same
			" thing as hitting 'escape': CTRL-@ doesn't seem to have any default use).
			" If you don't like using 'CTRL-@' or CTRL-\, , you can change some or all
			" of these maps to use other keys.  One likely candidate is 'CTRL-_'
			" (which also maps to CTRL-/, which is easier to type).  By default it is
			" used to switch between Hebrew and English keyboard mode.
			"
			" All of the maps involving the macro use '^$': this is so
			" that searches over '#include " return only references to
			" 'time.h', and not 'sys/time.h', etc. (by default cscope will return all
			" files that contain 'time.h' as part of their name).
			" To do the first type of search, hit 'CTRL-\', followed by one of the
			" cscope search types above (s,g,c,t,e,f,i,d).  The result of your cscope
			" search will be displayed in the current window.  You can use CTRL-T to
			" go back to where you were before the search.  
			"
			nmap s :cs find s =expand("")
			nmap g :cs find g =expand("")
			nmap c :cs find c =expand("")
			nmap t :cs find t =expand("")
			nmap e :cs find e =expand("")
			nmap f :cs find f =expand("")
			nmap i :cs find i ^=expand("")$
			nmap d :cs find d =expand("")
			" Using 'CTRL-spacebar' (intepreted as CTRL-@ by vim) then a search type
			" makes the vim window split horizontally, with search result displayed in
			" the new window.
			"
			" (Note: earlier versions of vim may not have the :scs command, but it
			" can be simulated roughly via:
			"    nmap s :cs find s =expand("")
			nmap s :scs find s =expand("")
			nmap g :scs find g =expand("")
			nmap c :scs find c =expand("")
			nmap t :scs find t =expand("")
			nmap e :scs find e =expand("")
			nmap f :scs find f =expand("")
			nmap i :scs find i ^=expand("")$
			nmap d :scs find d =expand("")
			" Hitting CTRL-space *twice* before the search type does a vertical 
			" split instead of a horizontal one (vim 6 and up only)
			"
			" (Note: you may wish to put a 'set splitright' in your .vimrc
			" if you prefer the new window on the right instead of the left
			nmap s :vert scs find s =expand("")
			nmap g :vert scs find g =expand("")
			nmap c :vert scs find c =expand("")
			nmap t :vert scs find t =expand("")
			nmap e :vert scs find e =expand("")
			nmap f :vert scs find f =expand("")
			nmap i :vert scs find i ^=expand("")$
			nmap d :vert scs find d =expand("")
			""""""""""""" key map timeouts
			"
			" By default Vim will only wait 1 second for each keystroke in a mapping.
			" You may find that too short with the above typemaps.  If so, you should
			" either turn off mapping timeouts via 'notimeout'.
			"
			"set notimeout 
			"
			" Or, you can keep timeouts, by uncommenting the timeoutlen line below,
			" with your own personal favorite value (in milliseconds):
			"
			"set timeoutlen=4000
			"
			" Either way, since mapping timeout settings by default also set the
			" timeouts for multicharacter 'keys codes' (like ), you should also
			" set ttimeout and ttimeoutlen: otherwise, you will experience strange
			" delays as vim waits for a keystroke after you hit ESC (it will be
			" waiting to see if the ESC is actually part of a key code like ).
			"
			"set ttimeout 
			"
			" personally, I find a tenth of a second to work well for key code
			" timeouts. If you experience problems and have a slow terminal or network
			" connection, set it higher.  If you don't set ttimeoutlen, the value for
			" timeoutlent (default: 1000 = 1 second, which is sluggish) is used.
			"
			"set ttimeoutlen=100
		endif
