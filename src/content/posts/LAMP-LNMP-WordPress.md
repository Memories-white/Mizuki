---
title: 部署搭建LAMP-LNMP-WordPress
published: 2025-06-10 17:18:24
description: 使用CentOS7部署搭建LAMP-LNMP-WordPress
image: "https://wp.upx8.com/api.php?content=风景"
tags: [教程, CentOS7, 实验]
category: 教程
draft: false
---

### 前言

<h3>如果你发现安装不了第一步的包时你需要去看上一篇文档的换源操作</h3>

---

### 安装必要软件包

#### 系统工具包

<h4>包含 wget vim 两种包</h4>

```bash
#安装wget vim
yum install wget vim epel-release -y
```

#### 安装 Apache Web 服务器

```bash
#安装 Apache
yum install httpd -y

c
systemctl start httpd
systemctl enable httpd

# 配置防火墙
firewall-cmd --permanent --add-service=http
firewall-cmd --permanent --add-service=https
firewall-cmd --reload
```

#### 安装 MariaDB 数据库

```bash
#安装 MariaDB
yum install mariadb-server -y

#设置开机自启
systemctl start mariadb
systemctl enable mariadb

# 安全初始化（设置root密码，移除匿名用户等）
mysql_secure_installation
```

##### 安全初始化说明

部分直接使用翻译是否启用自行斟酌
这里可能需要登录,默认密码为空直接回车即可

```bash
#这里是问你是否重置或创建新密码
Setting the root password ensures that nobody can log into the MariaDB
root user without the proper authorisation.

#这里直接选择是y
Set root password? [Y/n] y
New password:
Re-enter new password:
Password updated successfully!
Reloading privilege tables..
#创建成功提示
 ... Success!


By default, a MariaDB installation has an anonymous user, allowing anyone
to log into MariaDB without having to have a user account created for
them.  This is intended only for testing, and to make the installation
go a bit smoother.  You should remove them before moving into a
production environment.
#默认情况下，MariaDB 安装会有一个匿名用户，这使得任何人无需创建用户账户即可登录 MariaDB。这仅用于测试目的，以使安装过程更顺畅一些。在进入生产环境之前，你应该删除这些匿名用户。

Remove anonymous users? [Y/n] n
 ... skipping.

Normally, root should only be allowed to connect from 'localhost'.  This
ensures that someone cannot guess at the root password from the network.
#通常情况下，应该只允许 root 从 “localhost” 进行连接。这能确保没有人能从网络上猜出 root 密码。

Disallow root login remotely? [Y/n] n
 ... skipping.

By default, MariaDB comes with a database named 'test' that anyone can
access.  This is also intended only for testing, and should be removed
before moving into a production environment.
#默认情况下，MariaDB 带有一个名为 “test” 的数据库，任何人都可以访问。此数据库仅用于测试目的，在进入生产环境之前应将其删除。

Remove test database and access to it? [Y/n] n
 ... skipping.

Reloading the privilege tables will ensure that all changes made so far
will take effect immediately.
#重新加载权限表将确保到目前为止所做的所有更改立即生效。

Reload privilege tables now? [Y/n] n
 ... skipping.

Cleaning up...


#全部准备好后出现这个提示则表示成功
All done!  If you've completed all of the above steps, your MariaDB
installation should now be secure.

Thanks for using MariaDB!
```

#### 安装 PHP 7.4

```bash
# 添加Remi源
wget http://rpms.remirepo.net/enterprise/remi-release-7.rpm
rpm -Uvh remi-release-7.rpm
yum update -y

# 安装PHP 7.4及扩展
yum --enablerepo=remi-php74 install php php-cli php-fpm php-mysqlnd php-gd php-json php-mbstring php-xml php-zip -y

# 验证PHP版本
php -v  # 应显示PHP 7.4.x
```

#### 下载并安装 WordPress

```bash
cd /tmp
wget https://cn.wordpress.org/latest-zh_CN.tar.gz
tar -xzf latest-zh_CN.tar.gz

# 复制文件到Web根目录
cp -r wordpress/* /var/www/html/
chown -R apache:apache /var/www/html/
```

### 配置 PHP 与 Apache 集成

```bash
# 编辑Apache配置文件
vim /etc/httpd/conf/httpd.conf

# 在文件中添加以下内容（在LoadModule区域后）
# LoadModule 后的内容视版本决定，你是什么版本就选择那个版本
LoadModule php_module modules/libphp.so #8.x版本
LoadModule php7_module modules/libphp7.so #7.x版本
AddHandler php-script .php
DirectoryIndex index.php index.html

# 重启Apache
systemctl restart httpd
```

### 验证 LAMP 环境

#### 创建 phpinfo.php 测试文件

```bash
#创建文件并写入
echo "<?php phpinfo(); ?>" > /var/www/html/phpinfo.php
#赋予权限
chown apache:apache /var/www/html/phpinfo.php

#成功后访问地址
http://你的ip地址/phpinfo.php
```

示例图
![LAMP](/images/教程/LAMP-WordPress/PHP.png)

### WordPress 部署

#### 创建 WordPress 数据库

```bash
# 登录MySQL（使用之前设置的root密码）
mysql -u root -p

# 创建WordPress数据库和用户（wordpress为数据库名）
CREATE DATABASE wordpress DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
CREATE USER '用户名'@'localhost' IDENTIFIED BY '数据库密码';
GRANT ALL PRIVILEGES ON wordpress.* TO '用户名'@'localhost';
FLUSH PRIVILEGES;
EXIT;
```

#### 配置 WordPress

```bash
# 创建配置文件
cd /var/www/html
cp wp-config-sample.php wp-config.php
vim wp-config.php

# 修改以下配置（找到对应行并替换）（wordpress为数据库名，需要填上你上面那个步骤创建的数据库）
define('DB_NAME', 'wordpress');
define('DB_USER', '用户名');
define('DB_PASSWORD', '你的密码');
define('DB_HOST', 'localhost');

# 可选：添加安全密钥（从https://api.wordpress.org/secret-key/1.1/salt/生成）
# 直接复制生成的内容替换下面的部分
define('AUTH_KEY',         'put your unique phrase here');
define('SECURE_AUTH_KEY',  'put your unique phrase here');
define('LOGGED_IN_KEY',    'put your unique phrase here');
define('NONCE_KEY',        'put your unique phrase here');
define('AUTH_SALT',        'put your unique phrase here');
define('SECURE_AUTH_SALT', 'put your unique phrase here');
define('LOGGED_IN_SALT',   'put your unique phrase here');
define('NONCE_SALT',       'put your unique phrase here');
```

#### 进入 WordPress 安装向导

```bash
http://你的ip地址/wp-admin
```

<h3>后台管理界面</h3>

![WordPress](/images/教程/LAMP-WordPress/WordPress.png)

### LNMP 环境部署

#### 安装 Nginx

```bash
# 添加Nginx官方源
cat > /etc/yum.repos.d/nginx.repo << EOF
[nginx]
name=nginx repo
baseurl=http://nginx.org/packages/centos/7/\$basearch/
gpgcheck=0
enabled=1
EOF

# 安装Nginx
yum install nginx -y

# 启动并设置开机自启
systemctl start nginx
systemctl enable nginx

# 配置防火墙
firewall-cmd --permanent --add-service=http
firewall-cmd --permanent --add-service=https
firewall-cmd --reload
```

#### 配置 Nginx 与 PHP-FPM

```bash
#创建 Nginx 虚拟主机配置
vim /etc/nginx/conf.d/wordpress.conf


#内容
server {
    listen 80; #这里的端口视情况调整，如果有Apache则调整端口号
    server_name 192.168.0.0;  # 修改为您的域名或IP
    root /var/www/html;
    index index.php index.html;

    location / {
        try_files $uri $uri/ /index.php?$args;
    }

    # PHP-FPM处理PHP文件
    location ~ \.php$ {
        fastcgi_pass 127.0.0.1:9000;
        fastcgi_index index.php;
        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
        include fastcgi_params;
    }

    # 禁止访问敏感文件
    location ~ /\.ht {
        deny all;
    }
}
```

```bash
#验证 Nginx 配置
nginx -t
#重启 nginx php-fpm
systemctl restart nginx php-fpm
```

#### 验证 PHP 与 Nginx 集成

```bash
#创建文件验证是否成功
echo "<?php phpinfo(); ?>" > /var/www/html/info.php

#浏览器输入
http://你的ip地址/info.php
```

### WordPress 在 LNMP 环境下的配置

#### 确保数据库已创建（如果之前已创建可跳过）

```bash
mysql -u root -p
CREATE DATABASE wordpress DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
CREATE USER '用户名'@'localhost' IDENTIFIED BY '密码';
GRANT ALL PRIVILEGES ON wordpress.* TO '用户名'@'localhost';
FLUSH PRIVILEGES;
EXIT;
```

```bash
#配置 WordPress 文件权限
chown -R nginx:nginx /var/www/html
chmod -R 755 /var/www/html

#浏览器访问
http://你的ip地址/wp-admin
```

出现后台界面即为成功
