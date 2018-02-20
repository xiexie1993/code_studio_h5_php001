## 目录结构

<pre><code>

./                          根目录
├─ front_studio_ngix.cnf          nginx的配置
├─ front_studio_apache.cnf        apache的虚拟目录配置
├─ StartNG.bat                    windows的脚本（开关nginx）
├─ README.md                      自述文件
└─ ...

</code></pre>

## 部署运行环境

+ phpstudy
+ nginx-1.13.8

## 详细部署步骤

### （a）配置总纲

+ 1、用nginx当前台前端、后台后端的web服务器
+ 2、使用nginx的转发代理功能转发请求到后端
+ 3、配置本地域名解析

    > 域名（前台域名、后台域名）---本地配置修改host

### （b） nginx 部署说明

配置步骤：

具体配置内容见 deployment_configuration 内的nginx.conf文件

+ 1、备份默认配置的 Nginx 的conf/http.conf的,使用拆分配置文件的方式，删除不必要的注释等内容nginx.conf的完整配置如下：

<pre><code>

#user  nobody;
worker_processes  1;

#error_log  logs/error.log;
#error_log  logs/error.log  notice;
#error_log  logs/error.log  info;

#pid        logs/nginx.pid;

events {
    worker_connections  1024;
}

http {
    include       mime.types;
    default_type  application/octet-stream;

    #log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
    #                  '$status $body_bytes_sent "$http_referer" '
    #                  '"$http_user_agent" "$http_x_forwarded_for"';

    #access_log  logs/access.log  main;

    sendfile        on;
    #tcp_nopush     on;

    #keepalive_timeout  0;
    keepalive_timeout  65;

    #gzip  on;


    include front_studio_nginx_upstream.conf; # 引入拆分的配置文件_负载均衡

    include front_studio_nginx.conf; # 引入拆分的配置文件,虚拟目录
}

</code></pre>

+ 2、添加新配置文件
    将根目录下的deployment_configuration内的 ngin.conf、front_studio_ngix.conf、front_studio_nginx_upstream.conf文件，复制或者创建软连接到本地的 Nginx 的 conf 目录里


+ 3、修改配置文件里的项目目录
    + a、修改根目录下的deployment_configuration内的front_studio_ngix.conf的root 后的目录地址

> 注：
> windows 建立软连接
> 命令格式：
><pre><code>

> MKLINK [[/D] | [/H] | [/J]] Link Target
> 
>         /D      创建目录符号链接。默认为文件
>                 符号链接。
>         /H      创建硬链接而非符号链接。
>         /J      创建目录联接。
>         Link    指定新的符号链接名称。
>         Target  指定新链接引用的路径
>                 (相对或绝对)。
></code></pre>

具体命令：
><pre><code>
>                       软连接                                                  源目录
> mklink  C:\Software\IDE\nginx-1.13.8\conf\nginx.conf                          C:\MyWorkSpace\GitHub_Prj\code_studio_h5_php001\deployment_configuration\nginx.conf
> mklink  C:\Software\IDE\nginx-1.13.8\conf\front_studio_nginx.conf             C:\MyWorkSpace\GitHub_Prj\code_studio_h5_php001\deployment_configuration\front_studio_nginx.conf
> mklink  C:\Software\IDE\nginx-1.13.8\conf\front_studio_nginx_upstream.conf    C:\MyWorkSpace\GitHub_Prj\code_studio_h5_php001\deployment_configuration\front_studio_nginx_upstream.conf
></code></pre>


### (c) php 的Apache 部署说明

配置步骤：

+ 1、在Apache的conf/http.conf的 添加

<pre><code>

# 引入配置片段的文件
Include conf/front_studio_apache.conf

</code></pre>

+ 2、添加新配置文件
    + 将根目录下的deployment_configuration内的 front_studio_apache.conf文件，复制或者创建软连接到本地的 Apache 的 conf 目录里

+ 3、修改配置里的项目代码的位置
    + a、修改根目录下的deployment_configuration内的 front_studio_apache.conf的里的项目目录地址
> 注：
> windows 建立软连接
><pre><code>
>                       软连接                                           源目录
> mklink  C:\phpStudy\Apache\conf\front_studio_apache.conf       C:\MyWorkSpace\GitHub_Prj\code_studio_h5_php001\deployment_configuration\front_studio_apache.conf
></code></pre>

+ 4、开启mysql导入数据库（.sql文件在../back_end/testserver.sql）
> a、需先建数据库
> b、在ThinkPHP 数据库配置文件database.php里修改数据库主机地址、数据库名字、端口（文件在../back_end/config/database.php）


### （c）本地调试需要设置域名本地解析
目的：实现域名访问  

+ win7或win10 在C:\Windows\System32\drivers\etc\hosts 文件添加映射关系

内容如下：

<pre><code>

  127.0.0.1 qianduan.studio.com

</code></pre>