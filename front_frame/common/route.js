// +----------------------------------------------------------------------
// | Description: 路由配置。
// +----------------------------------------------------------------------
// | Author: xiezhenbin <Xzbde163yx@163.com>
// +----------------------------------------------------------------------

/**
 *   
 *   引用说明需要引用jquery、layer
 *   (此处不引用是担心页面引用了不同版本的jquery导致冲突)
 *   
 */



/** 
 *  接口请求路由
 *  @param   str    路由名
 *  @return  json   
 */
function ajaxMethod(str,requestdata) {
    var oLink = urlLink(str);
    var result = {};
    console.log("我准备好了---开始ajax请求===");
    console.log(oLink);
    $.ajax({
        type: oLink.method,
        url: '${url}' + oLink.url,
        data: requestdata,
        dataType:'json',
        async:false,
        cache:false,
        success:function (responsedata) {
            console.log('请求完成--输出响应结果：');
            result = responsedata;
            console.log(result);
            // // 执行根据返回结果，进行相关操作
            // if(data.code == '1012' ||data.code == 1012 )
            // {
            //      window.location.href = 'index.html';
            // }
            // if(data.status == '0'){
            //     layerMes(data.msg);
            // }
        },
        error:function (xhr,textStatus) {
            if(xhr == 504){
                // layerMes('请求超时，请稍后再试。');
                console.log('请求超时，请稍后再试。');
            }else{
                // layerMes('连接出错，请稍后再试。');
                console.log('连接出错，请稍后再试。');
            }
            result.status = 0;
        }
    });
    return result;
}




/** 
 *  接口请求路由
 *  @param   str    路由名
 *  @return  json   
 */
function urlLink(str)
{
    // 【 请求路由列表 】
    var url = {
        // 【 测试 】 ==================================================
            server1:{//服务1
                method:'get',
                url:'/server1.php'
            },
            server2:{//后台登陆
                method:'get',
                url:'/server2.php'
            },
        // 【 前台 】 我的账户==================================================
            login:{//后台登陆
                method:'post',
                url:'/admin/base/login'
            },
            logout:{//退出
                method:'post',
                url:'/index.php/admin/base/logout'
            },
        // 【 前台 】 其他======================================================
            address:{//地址
                method:'post',
                url:'/cityC/SelctACS.do'
            },
            picUpload:{//图片上传
                method:'post',
                url:'/attachment/upload'
            },
        // 【 后台 】 其他======================================================
            adminPwd:{//修改密码
                method:'post',
                url:'/index.php/admin/users/setpwd'
            },
            operatRecord:{//操作日志
                method:'get',
                url:'/index.php/admin/operationlog/list'
            },
        // 【 后台 】 其他======================================================
            address:{//地址
                method:'post',
                url:'/cityC/SelctACS.do'
            },
            picUpload:{//图片上传
                method:'post',
                url:'/attachment/upload'
            }
    }
    return url[str];
}
