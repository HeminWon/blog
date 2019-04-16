---
title: github与svn实现git仓库单文件(夹)下载
date: 2019/04/16
categories: tech
---

很早就过想在github仓库下载指定分支下的某个文件(夹)，特别是对于一些资源收集归档的仓库只是想去下载自己关心的部分，要整个仓库clone的话会有不必要的时间和网络资源的浪费。当时查到可以使用[git](https://git-scm.com/)在`1.7.0`开始支持的[sparse-checkout](https://git-scm.com/docs/git-read-tree)的方式解决此问题，但是对于只是想下载一个文件(夹)资源的需求来说略有麻烦。

最近又有小伙伴询问此类问题的解决方式，在交流中发现[git-svn](<https://git-scm.com/docs/git-svn>)可以用来github克隆指定文件夹，这说明github已经支持svn[1][1]，那么通过svn实现在github下载单文件(夹)也就比较简单了，现将目前的常用解决方案整理如下：

***

#### [git-svn](<https://git-scm.com/docs/git-svn>)

```
# 此方法只可实现对文件夹的下载
# 下载 master 文件夹
$ git svn clone <rul>/trunk/<dir> <localdir>
# 下载 指定brach文件夹
$ git svn clone <rul>/branches/<branchname>/<dir> <localdir>
# 下载 指定tag文件夹
$ git svn clone <rul>/tags/<tagname>/<dir> <localdir>
```

#### [svn](<https://subversion.apache.org/>)

```
# 查看仓库trunk、branch及tag信息
$ svn list <url>
# 下载 master 文件夹
$ svn checkout <rul>/trunk/<dir> <localdir>
# 下载 指定brach文件夹
$ svn checkout <rul>/branches/<branchname>/<dir> <localdir>
# 下载 指定tag文件夹
$ svn checkout <rul>/tags/<tagname>/<dir> <localdir>
# 下载 单个文件
$ svn cat <rul>/trunk/<tagname>/<dir>/<file> > <file>
```

#### other tools

- [DownGit](https://minhaskamal.github.io/DownGit/#/home) 直接键入对应分支文件目录即可下载文件



[1]: https://help.github.com/en/articles/support-for-subversion-clients



#### 参考文档

- [用SVN操作GitHub](http://www.worldhello.net/gotgithub/06-side-projects/svn.html#id6) by gotgithub
- [稀疏检出和浅克隆](https://www.worldhello.net/gotgit/08-git-misc/090-sparse-checkout-and-shallow-clone.html) by gotgithub
- [Git和SVN协同模型](http://www.worldhello.net/gotgit/04-git-model/070-git-svn.html) by gotgithub