#
### 创建一个用来建站的仓库  
+ 仓库名：  
`username/username.github.io`

+ 检出仓库：  
`$git clone https://github.com/username/username.github.io`  
个人主页的网站内容是在master分支下的。

+ 创建主页：  
```
$cd username.github.io
$echo "Hello World" > index.html
$git add --all
$git commit -m "Initial commit"
$git push -u origin master
```
注意：第一次push的时候使用`-u origin master`，以后直接用`git push`命令即可。

+ 访问主页：  
`http://username.github.io`

---
## 待整理与实践
### 使用Jekyll建站
#### 安装Jekyll
+ 安装ruby  
过程大致如下:
```
$wget -c https://cache.ruby-lang.org/pub/ruby/2.2/ruby-2.2.2.tar.gz
$tar -xzvf ruby-2.2.2.tar.gz
$mkdir -p ~/myinstalled
$mv ruby-2.2.2 ~/myinstalled
$cd ~/myinstalled/ruby-2.2.2
$./configure
$make
$sudo make install
```  
这里要求ruby大于2.0.0，所以直接从官方下载源代码安装。

+ 搭建和github一样的环境  
	- 安装bundle  
	```
    $ sudo gem install bundle
    [sudo] password for quietheart:
    Fetching: bundler-1.10.6.gem (100%)
    Successfully installed bundler-1.10.6
    Fetching: bundle-0.0.1.gem (100%)
    Successfully installed bundle-0.0.1
    Parsing documentation for bundler-1.10.6
    Installing ri documentation for bundler-1.10.6
    Parsing documentation for bundle-0.0.1
    Installing ri documentation for bundle-0.0.1
    Done installing documentation for bundler, bundle after 4 seconds
    2 gems installed
	```  
	注：  
		* 此处安装可能会有错误，提示类似如下：  
		```
        $gem install bundle
        ERROR:  While executing gem ... (Gem::Exception)
        Unable to require openssl, install OpenSSL and rebuild ruby (preferred) or use non-HTTPS sources
		```

		* 如果这样，我们可以查看一下源信息：  
		```
		$ gem sources -l
		*** CURRENT SOURCES ***

		https://rubygems.org/

 		```
		* 然后换一个没有被“墙”的代理，如下尝试：  
		```
		$ gem sources --remove https://rubygems.org/
		https://rubygems.org/ removed from sources
		$ gem sources -a http://ruby.taobao.org/
		http://ruby.taobao.org/ added to sources
		$ gem sources -l
		*** CURRENT SOURCES ***

		http://ruby.taobao.org/

		```

	- 配置***Gemfile***文件  
	```
	$>Gemfile
	$vim Gemfile
	```
	内容如下：
	```
	source 'http://ruby.taobao.org/'
	gem 'github-pages'
	```
	- 安装jekyll环境  
	下面根据实际安装时出现的状况，给出两种方式。  
        1. 方式一、利用bundle安装与更新(***报错***, 待解决)  
          ```
          $ bundle install
          $ bundle update
          ```

        2. 方式二、手动安装：  
        ```
        $sudo gem update --system
        $sudo gem install jekyll
        $jekyll --version
        ```  
        可能遇到的问题：  
            * 如果`jekyll --version`运行失败，安装依赖  
            ```
            $sudo gem install directory_watcher
            $sudo gem install liquid
            $sudo gem install open4
            $sudo gem install maruku
            $sudo gem install classifier
            $sudo gem install rdiscount
            $sudo gem install rouge
            $sudo gem install therubyracer
            $sudo gem install execjs
            $sudo apt-get install nodejs
            $jekyll --version
            ```  
            * 如果nodejs安装失败，手动源码安装  
            ```
            $ sudo apt-get install python
            $ sudo apt-get install build-essential
            $ sudo apt-get install gcc
            $ sudo apt-get install g++
            $ wget -c https://nodejs.org/dist/v0.12.7/node-v0.12.7.tar.gz
            $ tar -xzvf node-v0.12.7.tar.gz
            $ mkdir -p ~/myinstalled
            $ mv node-v0.12.7 ~/myinstalled && cd ~/myinstalled
            $./configure
            $make
            $sudo make install
            $node -v
            v0.12.7
            ```
	- 启动和转化本地服务  
	`$ bundle exec jekyll serve`

___
### 参考资料：
http://www.pchou.info/web-build/2014/07/04/build-github-blog-page-08.html
https://pages.github.com/
https://help.github.com/articles/using-jekyll-with-pages/
http://www.cnblogs.com/netbuddy/p/3501147.html
http://www.cnblogs.com/purediy/archive/2013/03/07/2948892.html

http://segmentfault.com/q/1010000000476530
http://www.cnblogs.com/hwpayg/archive/2012/11/04/2753404.html
