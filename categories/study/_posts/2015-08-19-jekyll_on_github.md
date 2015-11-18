---
layout: posts
title: Jekyll+github建站实践
tags: [gtd_next, study]
comments: true
---

本文通过实践介绍使用Jekyll+github建立个人站点的过程。
假设我们已经申请了一个github账户，账户名称为`username`。  

# 创建一个用来建站的仓库#   
* 仓库名：  

        username/username.github.io  

* 检出仓库：  

        $git clone https://github.com/username/username.github.io  
    个人主页的网站内容是在master分支下的。  

* 创建主页：  

        $cd username.github.io  
        $echo "Hello World" > index.html  
        $git add --all  
        $git commit -m "Initial commit"  
        $git push -u origin master  

        注意：第一次push的时候使用`-u origin master`，以后直接用`git push`命令即可。

* 访问主页：  

        http://username.github.io  
    至此，个人站点创建完毕，我们可以自己添加html内容来完善自己的站点。  
    完全手写html代码建立站点的过程过于复杂，下面我们将讲述如何使用Jekyll来创建个人站点。

# 搭建Jekyll环境 #   
使用Jekyll可以帮助我们自动生成静态网站，减少建站的负担，使我们将主要精力集中到文章和内容上。
github使用的就是Jekyll来生成站点项目的网页，所以这里我们可以在本地先搭建一个和github一样的环境。  
发布文章之前可以预览效果，确认可以了就能直接push到github。

* 安装ruby  
    过程大致如下:

        $wget -c https://cache.ruby-lang.org/pub/ruby/2.2/ruby-2.2.2.tar.gz
        $tar -xzvf ruby-2.2.2.tar.gz
        $mkdir -p ~/myinstalled
        $mv ruby-2.2.2 ~/myinstalled
        $cd ~/myinstalled/ruby-2.2.2
        $./configure
        $make
        $sudo make install
  
    这里要求ruby大于2.0.0，所以直接从官方下载源代码安装。

* 安装bundle  

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
    注：  
    + 此处安装可能会有错误，提示类似如下：  

            $gem install bundle
            ERROR:  While executing gem ... (Gem::Exception)
            Unable to require openssl, install OpenSSL and rebuild ruby (preferred) or use non-HTTPS sources

    + 如果这样，我们可以查看一下源信息：  

            $ gem sources -l
            *** CURRENT SOURCES ***

            https://rubygems.org/

    + 然后换一个没有被“墙”的代理，如下尝试：  

            $ gem sources --remove https://rubygems.org/
            https://rubygems.org/ removed from sources
            $ gem sources -a http://ruby.taobao.org/
            http://ruby.taobao.org/ added to sources
            $ gem sources -l
            *** CURRENT SOURCES ***

            http://ruby.taobao.org/

* 配置***Gemfile***文件  

        $>Gemfile
        $vim Gemfile

    内容如下：

        source 'http://ruby.taobao.org/'
        gem 'github-pages'


* 安装jekyll环境  
    下面根据实际安装时出现的状况，给出两种方式。  
    + 方式一、利用bundle安装与更新(***报错, 待解决***)  

            $ bundle install
            $ bundle update
        至此，通过bundle方式安装完毕，可以用如下命令启动和转化本地服务:  

            $ bundle exec jekyll serve（失败）

    + 方式二、手动安装：  

            $sudo gem update --system
            $sudo gem install jekyll
            $jekyll --version
        至此，jekyll安装完毕，通过`jekyll --version`可以检测安装是否成功。  
        可能遇到的问题：  
        - 如果`jekyll --version`运行失败，安装依赖  

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

        - 如果nodejs安装失败，手动源码安装  

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

* 使用Jekyll建站  
    + 建立用户构建站点的文件  
    需要建立的文件不多解释，大致如下：  

            $ pwd
            /home/quietheart/github/vaqeteart.github.io
            $ tree
            .
            ├── assets
            ├── _config.yml
            ├── _includes
            ├── index.html
            ├── _layouts
            │   └── default.html
            ├── _plugins
            ├── _posts
            │   └── 2015-08-14-first_page.md
            ├── readme.md

    + 使用Jekyll生成站点  
        根据前面建立的文件，生成站点。运行编译如下：  

            $ jekyll build
            Configuration file: /media/sda6/study/github/vaqeteart.github.io/_config.yml
            Source: /media/sda6/study/github/vaqeteart.github.io
            Destination: /media/sda6/study/github/vaqeteart.github.io/_site
            Generating...
            done.
            Auto-regeneration: disabled. Use --watch to enable.
        如果语法错误会有提示。  

    + 运行服务器：  

            $ jekyll server
            Configuration file: /media/sda6/study/github/vaqeteart.github.io/_config.yml
            Source: /media/sda6/study/github/vaqeteart.github.io
            Destination: /media/sda6/study/github/vaqeteart.github.io/_site
            Generating...
            done.
            Auto-regeneration: enabled for '/media/sda6/study/github/vaqeteart.github.io'
            Configuration file: /media/sda6/study/github/vaqeteart.github.io/_config.yml
            Server address: http://127.0.0.1:4000/
            Server running... press ctrl-c to stop.
            Regenerating: 1 file(s) changed at 2015-08-14 18:56:40 ...done in 0.018106602 seconds.
        运行之后，可以在浏览器上通过`http://127.0.0.1:4000/`预览生成的站点。  

    + 注意：
        - 如果对于jekyll想知道更多的命令
            可以运行`jelly --help`。  
        - 如果需要每次修改文件jekyll会自动检测到变化并生成对应新页面。
            可以直接使用`jekyll server -w`。这样就不用每次修改文件都运行`jekyll build`&`jekyll server`了。  


# 参考资料#
下面列出一些不错的参考资料：  
http://www.cnblogs.com/purediy/archive/2013/03/07/2948892.html  
http://blog.csdn.net/on_1y/article/details/19259435  
https://github.com/minixalpha/minixalpha.github.io  
http://www.ruanyifeng.com/blog/2012/08/blogging_with_jekyll.html  
http://higrid.net/c-art-blog_jekyll.htm  
http://www.tuicool.com/m/articles/INBnMz  
http://higrid.net/c-art-jeklly_template_data.htm  
http://holbrook.github.io/  
http://jekyllrb.com/docs/datafiles/  

其它的还有：  
http://www.pchou.info/web-build/2014/07/04/build-github-blog-page-08.html  
https://pages.github.com/  
https://help.github.com/articles/using-jekyll-with-pages/  
http://www.cnblogs.com/netbuddy/p/3501147.html  
http://segmentfault.com/q/1010000000476530  
http://www.cnblogs.com/hwpayg/archive/2012/11/04/2753404.html  
