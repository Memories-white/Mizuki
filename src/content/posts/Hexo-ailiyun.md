---
title: 阿里云搭建hexo
published: 2025-04-16 17:50:41
description: 使用阿里云搭建hexo博客教程
tags: [Hexo, 教程, 阿里云, 云服务器]
category: 教程
draft: false
---

### 本教程基于 阿里云 Centos7

### 前置条件

- 1. 阿里云账号
- 2. 域名
- 3. 云服务器

本教程会大概告诉你遇到的一些问题、解决方法、注意事项以及相关链接，希望能帮到你。有关服务器购买以及域名的内容，这里只会初略带过，这里跳过服务器购买，直接从域名开始。

### 域名购买以及备案后

首先去解析 DNS 服务，这里以阿里云为例。
![域名解析](/images/教程/DNS.png)
点击快速添加解析，然后勾选必要选项即可。网站的 IP 地址为你服务器的公网 IP。完成以上操作后，你会看到像上面截图那样多出来两个选项。至此，你的域名就准备完成了。

### 本地主机配置

#### 安装 Node.js

浏览器进入 [NodeJS 官网](https://nodejs.org/zh-cn)，点击下载 Node.js(LTS 版本)安装包。验证 Node.js 是否安装成功：按下 `win+r` 进入 cmd 窗口，输入 `node -v`，出现版本号即为安装成功。如果不成功，就需要去环境变量中添加 Node.js 的安装路径，或者重新安装 Node.js。
![Node](/images/教程/Node.png)

#### 安装 Hexo

在 cmd 窗口输入以下命令安装 Hexo：

```bash
npm install hexo-cli -g
```

完成后输入 `hexo -v` 验证是否安装成功。出现下图就说明安装成功。
![hexo](/images/教程/hexo.png)

#### 初始化根目录

你需要自己找个地方创建文件夹，尽可能使用英文路径。例如像这样：
![hexo-folder](/images/教程/hexo-folder.png)
你不一定要跟示例一样，这个路径你自己找个熟悉的地方存放即可。文件夹名称随意，但不要用中文。在文件夹根目录下打开 cmd 窗口，然后输入 `hexo init`，然后回车。这里可能会出现警告信息，不用管它，只要目录下有相关文件就行。
![hexo-init](/images/教程/hexo-init.png)
![hexo-tage](/images/教程/hexo-tage.png)

#### 完成以上步骤后就能打开服务器了

输入以下命令（生成静态文件，并开启本地服务器）：

```bash
hexo g&&hexo s
```

![hexo-g](/images/教程/hexo-g.png)
在浏览器中打开 `http://localhost:4000`，即可看到初始的博客页面。出现以下画面说明本地部署已经成功。
![hexo-s](/images/教程/hexo-s.png)

至此，本地主机配置完成。

### 服务器配置

如果出现安装问题，可以去最底下的相关链接查看解决方法。

#### 安装 nginx

首先切换到 root 用户：

```bash
sudo su root
```

安装 nginx（nginx 不在默认的 yum 源中，需要改用别的源）：

```bash
sudo yum install epel-release
sudo yum install nginx
```

完成后启动 nginx：

```bash
systemctl start nginx # 启动服务
systemctl enable nginx # 设为开机自启
```

#### 建立博客根目录

将博客的页面文件放在 `/home/www/blog/` 路径下，需要先创建这些文件，然后再给文件夹赋权限：

```bash
cd /home
mkdir www
cd www
mkdir blog
chmod 777 /home/www/blog
chmod 777 /home/www
```

查看创建的路径：
![hexo-path](/images/教程/hexo-path.png)

#### 配置 nginx

建立了博客的根目录后，需要将 nginx 服务器指向这个根目录地址，才能访问到博客页面，所以需要修改 nginx 的配置文件。

```bash
cd /etc/nginx
ls
```

如果有这个配置文件说明 nginx 已经安装成功了，如果没有，那可能你安装失败了。
![nginx-config](/img/教程/nginx-config.png)
创建 `vhosts` 文件夹：

```bash
cd /etc/nginx
mkdir vhost
cd vhost
```

输入 `vim blog.conf` 新建 `blog.conf` 文件并编辑内容：

```nginx
server {
    listen 80;
    root /home/www/blog;
    server_name 这里改成你的域名;
    location / {
    }
}
```

保存退出，然后输入 `nginx -t` 检查配置文件是否有误，如果没有错误，输入 `nginx -s reload` 重启 nginx。
![nginx-blog](/images/教程/nginx-blog.png)
打开 `/etc/nginx/` 目录下的 `nginx.conf` 文件，添加下面一行代码，将刚才新建的配置文件引入进来。`*.conf` 的意思是将 `vhost` 文件夹下的所有 `.conf` 后缀的文件都引入了进来。

```nginx
include /etc/nginx/vhost/*.conf;
```

![nginx--conf](/images/教程/nginx-conf.png)

#### 安装 nodeJS

输入命令：

```bash
curl -sL https://rpm.nodesource.com/setup_10.x | bash -
yum install -y nodejs
```

安装完成后执行 `node -v` 和 `npm -v`，如果打印版本号则安装成功。
![node-version](/images/教程/node-version.png)

#### 配置服务端 Git

这一部分主要目的是本地电脑可以通过 ssh 方式连接到云服务器，然后就可以通过命令行方式将博客传到云服务器上。
首先安装 git：

```bash
yum install git
```

配置 git 用户：

```bash
adduser git # 添加 git 用户
passwd git # 设置密码
chmod 740 /etc/sudoers # 修改 sudoers 文件权限
```

在 `vi /etc/sudoers` 打开的文件中，找到合适位置添加如下命令：

```plaintext
git ALL=(ALL) ALL
```

![git-config](/images/教程/git-config.png)
保存退出后，将 sudoers 文件权限改回原样：

```bash
chmod 400 /etc/sudoers
```

切换到 git 用户，然后在 `~` 目录下创建 `.ssh` 文件夹：

```bash
su git
cd ~
mkdir .ssh
cd .ssh
```

#### 配置 SSH 密钥

生成密钥对：

```bash
ssh-keygen -t rsa
```

输入后一路回车。然后在这个目录下就会有两个文件，分别是 `id_rsa` 和 `id_rsa.pub`，其中 `id_rsa.pub` 就是公钥文件，复制一份：

```bash
cp id_rsa.pub authorized_keys
```

这样目录下就会有一个 `authorized_keys` 文件，修改它的权限：

```bash
chmod 600 ~/.ssh/authorized_keys
chmod 700 ~/.ssh
```

#### 客户端生成密钥

在本地电脑的 cmd 窗口中输入 `ssh-keygen -t rsa`，也是都按回车，之后会在这个目录下生成密钥。
![ssh-keygen](/images/教程/ssh-keygen.png)
之后打开 `id_rsa.pub` 公钥，复制里面的所有内容，然后到云服务器的 `authorized_keys` 文件中粘贴，并保存退出。
之后在本地电脑打开 cmd，输入 `ssh -v git@云服务器的公网 IP`。
![ssh-connect](/images/教程/ssh-connect.png)
出现 `Welcome to Alibaba Cloud Elastic Compute Service !`，说明不用输入密码也登录成功了，配置 Git 密钥成功，以后更新博客部署的时候不用输入 Git 密码了！

#### 部署 git 仓库

创建一个 Git 的仓库，并且新建一个 `post-receive` 文件：

```bash
cd ~
git init --bare blog.git
vi ~/blog.git/hooks/post-receive
```

文件中输入：

```bash
git --work-tree=/home/www/blog --git-dir=/home/git/blog.git checkout -f
```

保存退出并授予该文件可执行权限：

```bash
chmod +x ~/blog.git/hooks/post-receive
```

至此，服务端配置完成。

### 配置 Hexo 并部署发布

#### 安装插件

本地电脑和服务器端配置都完成后，在本地电脑的 Hexo 根目录下，输入以下命令安装插件：

```bash
npm install hexo-deployer-git --save
npm install hexo-server
```

#### 修改参数

打开 `_config.yml` 文件，修改 `deploy` 项目如下：

```yaml
deploy:
  type: git
  repo: git@云服务器公网IP:/home/git/blog.git
  branch: master
```

其中，`type` 项表示部署类型为 git，仓库 `repo` 地址为 `git@云服务器公网IP:/home/git/blog.git`，分支 `branch` 为 `master` 主分支。

#### 远程部署

在本地电脑的 Hexo 根目录下，输入以下命令：

```bash
hexo clean
hexo g
hexo d
```

或

```bash
hexo c&&hexo g&&hexo d
```

这时候到服务器输入：

```bash
nginx -s reload # 重启 nginx
```

再查看 `/home/www/blog` 目录可以看到有上传的文件存在了。到这一步你只需要去你的网站看看就可以看到你的博客了。

### 以下为一些问题的解决方法相关链接

[Centos7 安装 node.js 以及遇到的各种问题](https://www.cnblogs.com/liupiaos/p/18465792)
