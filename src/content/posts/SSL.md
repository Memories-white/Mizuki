---

title: 域名绑定SSL教程
published: 2025-04-17 10:15:40
description: nginx域名配置SSL教程
image: "https://t.alcy.cc/fj"
tags: [教程, 阿里云, 云服务器]
category: 教程
draft: false
---

### 域名绑定 SSL

这里仅演示 Nginx 的配置方法。首先，你需要到阿里云或其他域名服务商购买 SSL 证书。下面会展示阿里云的免费申请步骤，较为简单的申请途径还有 [httpsok](https://httpsok.com/)。

#### 域名 SSL 申请

##### 阿里云

首先访问这个链接 [阿里云 SSL 证书](https://yundun.console.aliyun.com/?spm=5176.100251.111252.41.5fb44f15MZPMGP&p=cas#/certExtend/free/cn-hangzhou?currentPage=1&pageSize=10&keyword=&statusCode=)。购买成功后，如下图所示，点击“更多”，在里面下载 Nginx 证书。
![阿里云 SSL 证书](/images/教程/SSL/阿里云SSL.png)

##### httpsok

进入 [httpsok](https://httpsok.com/) 官网，注册成功后，直接进入申请免费 SSL 的流程。
![httpsok](/images/教程/SSL/httpsok.png)

输入域名后会进行 DNS 解析，这里的主机记录和记录值需要到 DNS 服务商处设置，一般是 CNAME 记录，就像图中的记录类型一样。之后，从 httpsok 复制主机记录和记录值并粘贴到相应位置，然后点击“提交”即可。
![httpsok zs](/images/教程/SSL/httpsokzs.png)
![httpsok DNS](/images/教程/SSL/httpsokDNS.png)

#### 上传证书

首先，在服务器上找到 Nginx 的安装路径，这里我的路径是 `/etc/nginx/`，在 Nginx 目录下创建 `cert` 文件夹。

```bash
mkdir /etc/nginx/cert
```

完成以上步骤后，找到你下载好的证书（.zip 格式），压缩包里有两个文件，分别是以 `.pem` 结尾的证书和以 `.key` 结尾的密钥。将这两个文件解压出来，上传到服务器。这里以 `scp` 命令为例，在证书文件目录下打开命令提示符（CMD），输入以下命令：

```bash
scp * root@你的服务器公网ip:/etc/nginx/cert
```

![scp](/images/教程/SSL/scp.png)

#### 配置 Nginx

在修改 `nginx.conf` 配置文件之前，先备份一份配置文件，输入 `cp` 命令，之后打开配置文件。

```bash
cp /etc/nginx/nginx.conf /etc/nginx/nginx.conf.bak
vim nginx.conf # 打开配置文件
```

在 `nginx.conf` 中添加以下配置信息，服务器端口需要打开 443。

```bash
# HTTPS server
server {
    listen       443 ssl;  # 监听 443 端口
    server_name  这里填域名;

    ssl_certificate      cert/这里填你的证书文件名.pem;
    ssl_certificate_key  cert/这里填你的密钥文件名.key;

    ssl_session_timeout  5m;

    ssl_ciphers  HIGH:!aNULL:!MD5;

    ssl_protocols TLSv1 TLSv1.1 TLSv1.2;

    ssl_prefer_server_ciphers  on;

    root /home/www/blog;   # 这里填你的网站目录
    index index.html index.php;
    location / {

    }
}
```

配置完成之后，保存文件，使用 Nginx 的命令测试一下配置文件是否正确：

```bash
nginx -t
```

如果输出结果没有错误，如下所示：

```bash
nginx: the configuration file /usr/local/nginx/conf/nginx.conf syntax is ok
nginx: configuration file /usr/local/nginx/conf/nginx.conf test is successful
```

然后重新加载 Nginx 配置文件：

```bash
nginx -s reload
```

至此，配置就完成了。接下来，你只需访问你的网站，查看左上角的小锁，就能看到 SSL 证书的绿色锁标志了。
![SSL 证书](/images/教程/SSL/SSL证书.png)
