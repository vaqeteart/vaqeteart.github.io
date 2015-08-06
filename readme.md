#
##1. 创建一个用来建站的仓库  
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

+ 访问主页：
`http://username.github.io`


___
参考资料：
http://www.pchou.info/web-build/2014/07/04/build-github-blog-page-08.html
https://pages.github.com/