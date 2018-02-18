// +----------------------------------------------------------------------
// | Description: 公共JavaScript配置函数。
// +----------------------------------------------------------------------
// | Author: xiezhenbin <Xzbde163yx@163.com>
// +----------------------------------------------------------------------

/**
 *   
 *   配置参数
 *   
 *   
 */
function Config(namestr) 
{
     // 【 配置值列表 】
    var DataValue = {
            // 项目信息
            PRJ_INFO:{
                NAME:'前端学习代码框架',
                AUTHOR:'xiezhenbin',
                VERSION:'1.0.1'
            },
            // 域名
            DOMAIN_NAME:'http://www.xzb.cn/',
            // 其他信息
            OTHER_INFO:{
            }
    }
    return DataValue[namestr];
}

