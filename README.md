# 一、自建的前端学习框架

## 二、项目概述

### 1、目的
    * 保存调试过的代码
    * 积累代码片段
    * 梳理前端用过的组件
    * 自己整理方便以后用的时候拿

## 三、目录结构

<pre><code>

root directory                       根目录
├─ front_frame                          前端代码项目
│  ├─ README.md                         前端代码的自述文件
|  └─ ...
├─ back_end                             后端项目
│  ├─ README.md                         后端代码的自述文件
|  └─ ...
├─ deployment_configuration             项目代码部署配置主文件
│  ├─ README.md                         部署配置的自述文件
|  └─ ...
├─ resource_package                     前端项目代码的资源包（运行时不需要引用）
│  ├─ README.md                         自述文件
|  └─ ...
├─ README.md                            自述文件
└─ ...

</code></pre>



## 四、部署运行概述

### 配置方案一

+ 详细配置见./deployment_configuration/README.conf

### 配置方案二

+ 1、域名配置（前台域名、后台域名）---本地配置修改host
            * 本地开发的重定向配置（windows配置文件C:\Windows\System32\drivers\etc\HOSTS）
            ~~~
                127.0.0.1 qianduan.studio.com
                127.0.0.1 api.studio.com
            ~~~



+ 2、nginx配置

    ~~~
    ## 前端
        server {
          listen       80;
          server_name  qianduan.studio.com;
          #access_log  logs/qianduan_studio_com_access.log  main;
          access_log  logs/qianduan_studio_com_access.log;
          root   'C:/MyWorkSpace/GitHub_Prj/code_studio_h5_php001/front_frame';

          #转发1
          location ^~ /${url}/ {
            proxy_pass          http://api.studio.com/;
            #proxy_set_header  X-Real-IP  $remote_addr;
          }
        }

   ## 服务端1
    server {
        listen       80;
        server_name  api.studio.com;
        
        #charset koi8-r;
        
        #access_log  logs/api_studio_com_access.log  main;
        access_log  logs/api_studio_com_access.log;
        
            root   "C:/MyWorkSpace/GitHub_Prj/code_studio_h5_php001/back_end/public";
        location / {
            index  index.html index.htm index.php l.php;
           autoindex  off;
        }

        #error_page  404              /404.html;

        # redirect server error pages to the static page /50x.html
        #
        error_page   500 502 503 504  /50x.html;


        # proxy the PHP scripts to Apache listening on 127.0.0.1:80
        #
        #location ~ \.php$ {
        #    proxy_pass   http://127.0.0.1;
        #}

        # pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000
        #
        location ~ \.php(.*)$  {
            fastcgi_pass   127.0.0.1:9000;
            fastcgi_index  index.php;
            fastcgi_split_path_info  ^((?U).+\.php)(/?.+)$;
            fastcgi_param  SCRIPT_FILENAME  $document_root$fastcgi_script_name;
            fastcgi_param  PATH_INFO  $fastcgi_path_info;
            fastcgi_param  PATH_TRANSLATED  $document_root$fastcgi_path_info;
            include        fastcgi_params;
        }

        # deny access to .htaccess files, if Apache's document root
        # concurs with nginx's one
        #
        #location ~ /\.ht {
        #    deny  all;
        #}
    }
    ~~~

## 五、调试技巧

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
