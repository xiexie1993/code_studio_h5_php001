<?php

/**
 * 行为绑定
 */
\think\Hook::add('app_init','app\\common\\behavior\\InitConfigBehavior');

/**
 * 返回对象
 * @param $array 响应数据
 */
function resultArray($array)
{
    if(isset($array['data'])) {
        $array['error'] = '';
        $code = 200;
    } elseif (isset($array['error'])) {
        $code = 400;
        $array['data'] = '';
    }
    return [
        'code'  => $code,
        'data'  => $array['data'],
        'error' => $array['error']
    ];
}





/**
 * 调试方法
 * @param  array   $data  [description]
 */
function p($data,$die=1)
{
    echo "<pre>";
    print_r($data);
    echo "</pre>";
    if ($die) die;
}

/**
 * 用户密码加密方法
 * @param  string $str      加密的字符串
 * @param  [type] $auth_key 加密符
 * @return string           加密后长度为32的字符串
 */
function user_md5($str, $auth_key = '')
{
    return '' === $str ? '' : md5(sha1($str) . $auth_key);
}

/**
  * 列表分页
  * @author  xiezhenbin  
  * @version v1.1 add    by xiezhenbin @2017-08-08 17:34:25
  *          v1.2 modify by 
  * @param   $List
  * @param   $OnePageQuantity  一页的数量
  * @param   $NowPage          当前页码
  * @return  array   
  * 
  */
function ListPaging($List,$OnePageQuantity,$NowPage)
{
  if(empty($List))
  {
    // $ret_data['total_number'] = 0;//总条数
    $ret_data['total'] = 0;//总条数
    $ret_data['page_size'] = $OnePageQuantity;//一页几条数据
    $ret_data['total_page'] = 1;//总页数
    $ret_data['now_page'] = $NowPage;//当前页数
    // $ret_data['now_page_list'] = array();//当前页列表数据
    $ret_data['rows'] = array();//当前页列表数据
  }
  else
  {
    $OnePageQuantity = $OnePageQuantity ? $OnePageQuantity : 10; //设置默认值 
    $NowPage = $NowPage ? $NowPage : 1; //设置默认值
    //计算该数据有多少条
    //按一页几条可分成多少页
    //要取得页数是第几条到第几条
    //用数组截取函数截取
    $Total_number = count($List); 
    $Total_page = ceil($Total_number/$OnePageQuantity);//算出按此分页最多可取几页 进一法取整
    $NowPageStartId = ($NowPage-1)*$OnePageQuantity;//选择页面的第一条数据编号
    
    //截取
    $NowPageList = array_slice($List,$NowPageStartId,$OnePageQuantity);//当前页列表数据
    // dump(__LINE__);dump($NowPageStartId);dump($NowPageEndId);exit;
    // dump(__LINE__);dump($NowPageList);exit;
    // $ret_data['total_number'] = $Total_number;//总条数
    $ret_data['total'] = $Total_number;//总条数
    $ret_data['page_size'] = $OnePageQuantity;//一页几条数据
    $ret_data['total_page'] = $Total_page;//总页数
    $ret_data['page_no'] = $NowPage;//当前页数
    $ret_data['start_id'] = $NowPageStartId; //当前页面开始编号
    
    if($Total_page >= $NowPage )
    {
        // $ret_data['now_page_list'] = $NowPageList;//当前页列表数据
        $ret_data['rows'] = $NowPageList;//当前页列表数据
    }
  }
    return $ret_data;
}
    