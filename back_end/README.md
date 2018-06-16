# 前端框架用来测试的后端服务
===============

## 概述

>主要适用技术栈：

+ 后端框架：ThinkPHP 5.0.6
+ 前端MVVM框架：自制简单的框架

>不仅适用于管理后台或管理系统开发，且广泛适用于B/S架构的项目开发。

> ThinkPHP的运行环境要求PHP5.4以上。

>> 详细开发文档参考 [ThinkPHP5完全开发手册](http://www.kancloud.cn/manual/thinkphp5)


## 目录结构

<pre><code>
project  应用部署目录
├─application           应用目录（可设置）
│  ├─common             公共模块目录（可更改）
│  ├─api                模块目录(可更改)
│  │  ├─config.php      模块配置文件
│  │  ├─common.php      模块函数文件
│  │  ├─controller      控制器目录
│  │  ├─model           模型目录
│  │  ├─view            视图目录
│  │  └─ ...            更多类库目录
│  ├─command.php        命令行工具配置文件
│  ├─common.php         应用公共（函数）文件
│  ├─config.php         应用（公共）配置文件
│  ├─database.php       数据库配置文件
│  ├─tags.php           应用行为扩展定义文件
│  └─route_api.php          路由配置文件
├─extend                扩展类库目录（可定义）
├─public                WEB 部署目录（对外访问目录）
│  ├─static             静态资源存放目录(css,js,image)
│  ├─index.php          应用入口文件
│  ├─router.php         快速测试文件
│  └─.htaccess          用于 apache 的重写
├─runtime               应用的运行时目录（可写，可设置）
├─vendor                第三方类库目录（Composer）
├─thinkphp              框架系统目录
│  ├─lang               语言包目录
│  ├─library            框架核心类库目录
│  │  ├─think           Think 类库包目录
│  │  └─traits          系统 Traits 目录
│  ├─tpl                系统模板目录
│  ├─.htaccess          用于 apache 的重写
│  ├─.travis.yml        CI 定义文件
│  ├─base.php           基础定义文件
│  ├─composer.json      composer 定义文件
│  ├─console.php        控制台入口文件
│  ├─convention.php     惯例配置文件
│  ├─helper.php         助手函数文件（可选）
│  ├─LICENSE.txt        授权说明文件
│  ├─phpunit.xml        单元测试配置文件
│  ├─README.md          README 文件
│  └─start.php          框架引导文件
├─build.php             自动生成定义文件（参考）
├─composer.json         composer 定义文件
├─LICENSE.txt           授权说明文件
├─README.md             README 文件
├─think                 命令行入口文件
└─test_server.sql       数据库sql文件


</code></pre>


##  更新日志


## 开发日志

### 1、nginx转发配置调试技巧

+ a、设置nginx日志格式

    ~~~
        http {
            #...其他配置...
            log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                              '$status $body_bytes_sent "$http_referer" '
                              '"$http_user_agent" "$http_x_forwarded_for"';
             #...其他配置...
             }


    ~~~

+ b、在相应的服务配置里开启
    ~~~
         #access_log  logs/XXXX_access.log  main;
    ~~~
    
+ 参考资料
    * [文章18 ：Nginx中http请求的处理过程](https://blog.csdn.net/yankai0219/article/details/8220695)
    * [搭建nginx反向代理用做内网域名转发](http://www.ttlsa.com/nginx/use-nginx-proxy/)
    * [Nginx 记录请求分发日志](https://blog.csdn.net/lkx94/article/details/54575225)

### 2、数据库调试技巧

+ 开启数据库日志输出
  ~~~
    set global general_log="ON";
    show variables like "general_log%";
    查看配置： SHOW VARIABLES LIKE "general_log%"; 
    开启日志 ： SET GLOBAL general_log = 'ON';
  ~~~
