<?php
// +----------------------------------------------------------------------
// | Description: 用户部分的业务逻辑
// +----------------------------------------------------------------------
// | Author: xiezhenbin <Xzbde163yx@163.com>
// +----------------------------------------------------------------------

namespace app\home\logic;


use think\Model;
use think\Db;
/**
 * 用户逻辑定义
 */
class UsersLogic extends Model
{
    protected $logic_desc = '【 用户部分的业务逻辑 】' ; //描述
    protected $logic_error_msg =array(); //错误信息
    protected $logic_debug_msg =array(); //调试信息

    // 第三方登录
    public function third_party_login($param)
    {

        $ret_data['status'] = 1; // 0 错误/失败； 1 正确/成功
        $ret_data['data'] = null;
        $ret_data['msg']  = $this->outmsg();
        $ret_data['code'] = null;
        if(config('api_debug_enabled')==1)//开启调试输出调试参数
        {
            $debug['title'] = $this->logic_desc .'第三方登录';
            $debug['param'] = $param;
            $debug['logic_error_msg'] = $this->logic_error_msg;
            $debug['logic_debug_msg'] = $this->logic_debug_msg;
            $ret_data['debug'] = $debug;
        }
        return $ret_data;
    }


    // 非第三方登录（用户名、邮箱名、手机号）
    public function no_third_party_login($param)
    {
        // 
        // $this->logic_desc[] = '非第三方登录（用户名、邮箱名、手机号）';
        // 调用数据库模型查看用户是否能登录
        $map['identity_type'] = $param['identity_type'];
        $map['identifier']    = $param['identifier'];
        $map['credential']    = $param['credential'];
        $map['enable']        = 1;
        $map['status']        = 1;
        $objModel =  model('UserAuth');
        $model_ret = $objModel ->getOneData($map);
        if($model_ret!=false)
        {
            $need_param['identity_type'] = $model_ret['identity_type'];
            $need_param['identifier']    = $model_ret['identifier'];
            $need_param['credential']    = $model_ret['credential'];
            $need_param['uid']           = $model_ret['uid'];
            $base_info = $this->get_customer_info($need_param);

            $ret_data['status'] = 1; // 0 错误/失败； 1 正确/成功
            $ret_data['data'] = $base_info;
            $ret_data['msg']  = $this->outmsg();
            $ret_data['code'] = null;
        }
        else
        {
            $ret_data['status'] = 0; // 0 错误/失败； 1 正确/成功
            $ret_data['data'] = null;
            $ret_data['msg']  = $this->outmsg();
            $ret_data['code'] = null;
        }
        if(config('api_debug_enabled')==1)//开启调试输出调试参数
        {
            $debug['title'] = $this->logic_desc .'非第三方登录';
            $debug['param'] = $param;
            $debug['logic_error_msg'] = $this->logic_error_msg;
            $debug['logic_debug_msg'] = $this->logic_debug_msg;
            $debug['need_param'] = $need_param;
            $debug['model_ret'] = $model_ret;
            $debug['base_info'] = $base_info;
            $ret_data['debug'] = $debug;
        }
        return $ret_data;
    }


    // 非法登录（未知登录方式）
    public function tillegal_login_mode($param)
    {
        // 
        $this->logic_error_msg[] ='非法登录（未知登录方式）';
        $ret_data['status'] = 0; // 0 错误/失败； 1 正确/成功
        $ret_data['data'] = null;
        $ret_data['msg']  = $this->outmsg();
        $ret_data['code'] = null;
        if(config('api_debug_enabled')==1)//开启调试输出调试参数
        {
            $debug['title'] = $this->logic_desc .'非法登录（未知登录方式）';
            $debug['param'] = $param;
            $debug['logic_error_msg'] = $this->logic_error_msg;
            $debug['logic_debug_msg'] = $this->logic_debug_msg;
            $ret_data['debug'] = $debug;
        }
        return $ret_data;
    }



    // 第三方注册
    public function third_party_register($param)
    {

        $ret_data['status'] = 1; // 0 错误/失败； 1 正确/成功
        $ret_data['data'] = null;
        $ret_data['msg']  = $this->outmsg();
        $ret_data['code'] = null;
        if(config('api_debug_enabled')==1)//开启调试输出调试参数
        {
            $debug['title'] = $this->logic_desc .'第三方注册';
            $debug['param'] = $param;
            $debug['logic_error_msg'] = $this->logic_error_msg;
            $debug['logic_debug_msg'] = $this->logic_debug_msg;
            $ret_data['debug'] = $debug;
        }
        return $ret_data;
    }


    // 非第三方注册（用户名登录、邮箱名、手机号）
    public function no_third_party_register($param)
    {
        
        // $this->logic_desc[] = '非第三方注册（用户名、邮箱名、手机号）';
        $identity_type = $param['identity_type'];
        $identifier    = $param['identifier'];
        $credential    = $param['credential'];
        $user_is_existence = $this->user_is_existence($identity_type,$identifier);
        if($user_is_existence['status'] == 0)
        {
            $add_user = $this->add_user_auth($identity_type,$identifier,$credential);
            if($add_user)
            {
                $ret_data['status'] = 1; // 0 错误/失败； 1 正确/成功
                $ret_data['data'] = null;
                // $ret_data['msg']  = $this->outmsg();
                $ret_data['msg']  = '添加成功';
                $ret_data['code'] = null;
            }
            else
            {
                $ret_data['status'] = 0; // 0 错误/失败； 1 正确/成功
                $ret_data['data'] = null;
                // $ret_data['msg']  = $this->outmsg();
                $ret_data['msg']  = '添加失败';
                $ret_data['code'] = null;
            }
        }
        else
        {
            $ret_data['status'] = 0; // 0 错误/失败； 1 正确/成功
            $ret_data['data'] = null;
            // $ret_data['msg']  = $this->outmsg();
            $ret_data['msg']  = '用户存在';
            $ret_data['code'] = null;
        }

        if(config('api_debug_enabled')==1)//开启调试输出调试参数
        {
            $debug['title'] = $this->logic_desc .'非第三方注册';
            $debug['param'] = $param;
            $debug['logic_error_msg']   = $this->logic_error_msg;
            $debug['logic_debug_msg']   = $this->logic_debug_msg;
            $debug['user_is_existence'] = $user_is_existence;
            $debug['add_user'] = $add_user;
            $ret_data['debug'] = $debug;
        }
        return $ret_data;
    }


    // 非法注册（未知注册方式）
    public function tillegal_register_mode($param)
    {
        // 
        $this->logic_error_msg[] ='非法注册（未知注册方式）';
        $ret_data['status'] = 0; // 0 错误/失败； 1 正确/成功
        $ret_data['data'] = null;
        $ret_data['msg']  = $this->outmsg();
        $ret_data['code'] = null;
        if(config('api_debug_enabled')==1)//开启调试输出调试参数
        {
            $debug['title'] = $this->logic_desc .'非法注册（未知注册方式）';
            $debug['param'] = $param;
            $debug['logic_error_msg'] = $this->logic_error_msg;
            $debug['logic_debug_msg'] = $this->logic_debug_msg;
            $ret_data['debug'] = $debug;
        }
        return $ret_data;
    }


    // 组合输出 提示语句
    public function outmsg()
    {
        $msg_str ='逻辑信息：';
        $param = $this->logic_error_msg;
        foreach ($param as $key => $value)
        {
            if($value != null)
            {
                $msg_str = $msg_str.';'.$msg_str;
            }
        }
        $msg_str = $msg_str.'。';
        $ret_data = $msg_str;
        return $ret_data;
    }

/***++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/



    /**
     *  判断用户是否存在
     *  @param $identity_type   登录类型（手机号 邮箱 用户名）或第三方应用名称（微信 微博等） 
     *  @param $identifier      标识（手机号 邮箱 用户名或第三方应用的唯一标识）
     *  @return Array  status   1 存在
     */
    public function user_is_existence($identity_type,$identifier)
    {
        
        // 调用数据库模型查看用户是否存在
        $map['identity_type'] = $identity_type;
        $map['identifier']    = $identifier;
        $map['status']        = 1;
        $objModel =  model('UserAuth');
        $model_ret = $objModel ->getOneData($map);
        if (!$model_ret)
        {
            $this->logic_error_msg[]  = $objModel->getError();
            $ret_data['status'] = 0;
            $ret_data['msg']    = $objModel->getError();
            $ret_data['code']   = null;
            $ret_data['data']   = null;
        }
        else
        {
            $ret_data['status'] = 1;
            $ret_data['msg']    = null;
            $ret_data['code']   = null;
            $ret_data['data']   = $model_ret;
        }
        if(config('api_debug_enabled')==1)//开启调试输出调试参数
        {
            $debug['title']    = $this->logic_desc.'[=== 判断用户是否存在 ===]';
            $debug['param']    = $param;
            $debug['ret_data'] = $ret_data;
            $this->logic_debug_msg[] = $debug;
        }
        return $ret_data;
    }



    // /**
    //  *  用户登录验证
    //  *  @param $identity_type   登录类型（手机号 邮箱 用户名）或第三方应用名称（微信 微博等） 
    //  *  @param $identifier      标识（手机号 邮箱 用户名或第三方应用的唯一标识）
    //  *  @param $credential      密码凭证（站内的保存密码，站外的不保存或保存token） 
    //  *  @return Array  status   1 存在 通过
    //  */
    // public function user_is_existence($param)
    // {
        
    //     // 调用数据库模型查看用户是否存在
    //     $map['identity_type'] = $identity_type;
    //     $map['identifier']    = $identifier;
    //     $map['credential']    = $credential;
    //     $map['status']        = 1;
    //     $objModel =  model('UserAuth');
    //     $model_ret = $objModel ->getOneData($map);
    //     if (!$model_ret)
    //     {
    //         $this->logic_error_msg[]  = $objModel->getError();
    //         $ret_data['status'] = 0;
    //         $ret_data['msg']    = $objModel->getError();
    //         $ret_data['code']   = null;
    //         $ret_data['data']   = null;
    //     }
    //     else
    //     {
    //         $ret_data['status'] = 1;
    //         $ret_data['msg']    = null;
    //         $ret_data['code']   = null;
    //         $ret_data['data']   = $model_ret;
    //     }
    //     if(config('api_debug_enabled')==1)//开启调试输出调试参数
    //     {
    //         $debug['title']    = $this->logic_desc.'[=== 判断用户是否存在 ===]';
    //         $debug['param']    = $param;
    //         $debug['ret_data'] = $ret_data;
    //         $this->logic_debug_msg[] = $debug;
    //     }
    //     return $ret_data;
    // }




    /**
     *  添加用户
     *  @param $identity_type   登录类型（手机号 邮箱 用户名）或第三方应用名称（微信 微博等） 
     *  @param $identifier      标识（手机号 邮箱 用户名或第三方应用的唯一标识）
     *  @param $credential      密码凭证（站内的保存密码，站外的不保存或保存token）
     *  @return Array  status   1 存在
     */
    public function add_user_auth($identity_type,$identifier,$credential)
    {

        $map1['nickname']  = $identifier;
        $map1['create_time']   = time();
        $map1['update_time']   = $map1['create_time'];
        $map1['enable']        = 1;
        $map1['status']        = 1;
        $UserModel =  model('User');
        $model_ret1 = $UserModel->createData($map1);
        if ($model_ret1==false)
        {
            $this->logic_error_msg[]  = $UserModel->getError();
            $ret_data['status'] = 0;
            $ret_data['msg']    = $UserModel->getError();
            $ret_data['code']   = null;
            $ret_data['data']   = null;
        }
        else
        {
            //查询刚插入的那条数据 获取 uid
            $create_user = $UserModel->getOneData($map1);
            $map2['uid'] = $create_user['uid'];
            $map2['identity_type'] = $identity_type;
            $map2['identifier']    = $identifier;
            $map2['credential']    = $credential;
            $map2['create_time']   = time();
            $map2['update_time']   = $map2['create_time'];
            $map2['enable']        = 1;
            $map2['status']        = 1;
            $UserAuthModel =  model('UserAuth');
            $model_ret2 = $UserAuthModel ->createData($map2);
            if ($model_ret1==false)
            {
                $this->logic_error_msg[]  = $UserAuthModel->getError();
                $ret_data['status'] = 0;
                $ret_data['msg']    = $UserAuthModel->getError();
                $ret_data['code']   = null;
                $ret_data['data']   = null;
            }
            else
            {
                $ret_data['status'] = 1;
                $ret_data['msg']    = null;
                $ret_data['code']   = null;
                $ret_data['data']   = $model_ret2;
            }
        }
        if(config('api_debug_enabled')==1)//开启调试输出调试参数
        {
            $debug['title']   = $this->logic_desc.'[=== 添加用户 ===]';
            $debug['map1']    = $map1;
            $debug['map2']    = $map2;
            $debug['model_ret1'] = $model_ret1;
            $debug['model_ret2'] = $model_ret2;
            $debug['ret_data'] = $ret_data;
            $this->logic_debug_msg[] = $debug;
        }
        return $ret_data;
    }



    /**
     * 
     *  登录成功根据用户uid 获取基本数据
     *  组合成身份标识   返回
     */
    public function get_customer_info($param)
    {
        $objModel =  model('User');
        $map['uid']    = $param['uid'];
        $map['enable'] = 1;
        $map['status'] = 1;
        $sql_ret = $objModel ->getOneData($map);
        // 保存缓存        
        session_start();
        $session_id = session_id();
        
        //将数据缓存在服务端 防止篡改

        $customer_info['uid'] = $param['uid'];
        $customer_info['nickname'] = $sql_ret['nickname'];
        $customer_info['avatar'] = $sql_ret['avatar'];
        $customer_info['identity_type'] = $param['identity_type']; //登录类型
        $customer_info['identifier'] = $param['identifier'];       //标识
        // $customer_info['credential'] = $sql_ret['credential'];       //密码凭证
        $auth_key = user_md5($customer_info['identity_type'].$customer_info['uid'].$customer_info['identifier'].$param['credential']);
        cache('auth_'.$auth_key, null);
        cache('auth_'.$auth_key, $customer_info, config('LOGIN_SESSION_VALID'));
        // 返回信息
        $data['auth_key']        = $auth_key;
        $data['session_id']      = $session_id;
        $data['customer_info']   = $customer_info;
        $ret_data = $data;
        return $ret_data;
    }

}