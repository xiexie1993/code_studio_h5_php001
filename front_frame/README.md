# 前端代码编写框架 测试

## 一、概述



## 二、 环境

+ 系统环境（建议）
    + windows7/win10/Linux


+ 运行集成环境（建议）
    + phpstudy
    + nginx-1.13.8


+ 开发与调试工具（建议）

    + Filder                             http协议调试代理工具
    + Navicat for MySQL                  数据库客户端
    + BareTailProfessional               Windows 下 tail 查看日志命令工具
    + Sublime Text 3 / Vim /Notepad++    代码编辑器
    + Chrome浏览器

## 三、部署

### （a）配置总纲

+ 1、用nginx当前台前端、后台后端的web服务器
+ 2、使用nginx的转发代理功能转发请求到后端
+ 3、配置本地域名解析

    > 域名（前台域名、后台域名）---本地配置修改host

> 详细部署参考(deployment_configuration/README.md)

## 三、目录结构

### 目录结构总纲

<pre><code>

project  应用部署目录
├─ vendor                          供应商目录/扩展插件资源
│  ├─ bootsrap                     引用的bootstrap模块资源
│  │  ├─ bootstrap-3.3.7-dist      bootstrap-3.3.7-dist基础资源
│  │  ├─ bootstrap-table-develop   bootstrap-table-develop资源
|  |  └─ ...                       更多类库目录（欢迎创建）
│  ├─ jquery                       引用的jQuery模块资源
│  │  ├─ jquery-3.2.1.min.js       jquery摸个版本的.js文件
|  |  └─ ...                       更多目录或文件（欢迎创建）
|  └─ ...                          更多目录或文件（欢迎创建）
├─ common                          公共资源(js、css、json)
|  ├─ conf.json                    公共配置.json文件
|  ├─ conf.js                      公共配置.js文件
|  ├─ route.js                     请求路由表
|  └─ ...                          更多目录或文件（欢迎创建）
├─ page                            页面资源文件夹（按一个页面一个文件夹）
│  ├─ index                        index页面资源
│  |  ├─ index.css                 页面css
│  |  ├─ index.js                  页面js资源
|  |  └─ ...                       更多目录或文件（欢迎创建）
|  └─ ...                          更多目录或文件（欢迎创建）
├─ index.html                      页面入口（欢迎创建）
├─ readme.txt                      自述文件
└─ ...                             更多目录或文件（欢迎创建）

</code></pre>



### 实际目录结构

<pre><code>

project  应用部署目录
├─ vendor                               供应商目录/扩展插件资源
│  ├─ bootsrap                          引用的bootstrap模块资源
│  │  ├─ bootstrap-3.3.7-dist           bootstrap-3.3.7-dist基础资源
│  │  ├─ bootstrap-table-develop        bootstrap-table-develop资源 
│  │  ├─ x-editable-develop             bootstrap-table编辑 资源 (之前名为bootstrap-editable，现在改名叫做x-editable了，可以适用不同的框架)
|  |  └─ ...                            更多类库目录（欢迎创建）
│  ├─ jquery                            引用的jQuery模块资源
│  │  ├─ jquery-3.2.1.min.js            jquery摸个版本的.js文件
|  |  └─ ...                            更多目录或文件（欢迎创建）
│  ├─ vue                               引用的vue模块资源
│  │  ├─ vue-2.5.13.min.js              vue某个版本的.js文件
|  |  └─ ...                            更多目录或文件（欢迎创建）
|  └─ ...                               更多目录或文件（欢迎创建）
├─ common                               公共资源(js、css、json)
|  ├─ conf.json                         公共配置.json文件
|  ├─ conf.js                           公共配置.js文件
|  ├─ route.js                          请求路由表
|  └─ ...                               更多目录或文件（欢迎创建）
├─ page                                 页面资源文件夹（按一个页面一个文件夹）
│  ├─ index                             index 页面资源
│  |  ├─ index.css                      index 页面css
│  |  └─ index.js                       index 页面js资源
│  ├─ example                           例子 页面资源
│  |  └─ example.js                     例子 页面js资源
│  ├─ js_rwtxt                          js读写txt 页面资源
│  |  └─ js_rwtxt.js                    js读写txt 页面js资源
│  ├─ bootstrap_table_edit1             bootstrap_table_edit1 页面资源
│  |  └─ bootstrap_table_edit1.js       bootstrap_table_edit1 页面js资源
│  ├─ bootstrap_table_edit2             bootstrap_table_edit2 页面资源
│  |  └─ bootstrap_table_edit2.js       bootstrap_table_edit2 页面js资源
│  ├─ bootstrap_table                   bootstrap_table 页面资源
│  |  └─ bootstrap_table_edit.js        bootstrap_table 页面js资源
|  └─ ...                               更多目录或文件（欢迎创建）
├─ index.html                           index 页面入口
├─ example.html                         例子 页面入口
├─ js_rwtxt.html                        js读写txt 页面入口
├─ bootstrap_table.html                 Bootstrap-Table-编辑 页面入口
├─ bootstrap_table_edit1.html           Bootstrap-Table-编辑1 页面入口(行内编辑)
├─ bootstrap_table_edit2.html           Bootstrap-Table-编辑2 页面入口(父子表 )
├─ visual_interface_test_control.html   CMI-0007_可视化接口测试控件
├─ readme.txt                           自述文件
└─ ...                                  更多目录或文件（欢迎创建）

</code></pre>



## 四、开发规范

+ 1、vendor文件为第三方资源，不允许修改;
+ 2、目录使用小写+下划线；(自添加的、引入第三方的目录文件建议保留原来的方便识别);
+ 3、公共的js里的函数，统一采用驼峰法命名（首字母大写）[方便识别];
    + a、常量和配置;
    + b、常量以大写字母和下划线命名，例如 APP_PATHD 和 THINK_PATH;
    + c、配置参数以小写字母和下划线命名，例如 url_route_on 和url_convert;
+ 4、开发原则：高内聚、低耦合
    + a、修改尽量少修改与添加公告配置（减少不必要加载）;
    + b、但总开关，之类的需写在公共配置;


## 五、开发日志

2018-02-16 12:57:09



## 项目开发记录

【 需求/任务记录 】
2018-02-16 13:24:03
  富文本编辑器
      1、百度富文本编辑器
          参考 地址http://fex.baidu.com/ueditor/
      2、bootstrap的summernote富文本编辑器
          参考：https://www.cnblogs.com/jingmin/p/6592325.html
          下载：https://summernote.org/getting-started/
          坑：记得允许跨域 不然无法返回

  文件上传
    bootstrap 前端文件上传

  弹出窗
    遮罩层
    layer

  上传进度条
  
  拖动排序
  按钮排序
  组合框


## 常用内容

nginx命令：
    start nginx
    nginx s stop

nginx php

  D:/phpStudy/php/php-7.0.12-nts/php-cgi.exe -b 127.0.0.1:9000 -c D:/phpStudy/php/php-7.0.12-nts/php.ini

  C:/phpStudy/php/php-7.0.12-nts/php-cgi.exe -b 127.0.0.1:9000 -c C:/phpStudy/php/php-7.0.12-nts/php.ini
