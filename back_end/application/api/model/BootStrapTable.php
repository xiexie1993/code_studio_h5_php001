<?php
// +----------------------------------------------------------------------
// | Description: Bootstrap-Table 模型 增删查改
// +----------------------------------------------------------------------
// | Author: xiezhenbin <Xzbde163yx@163.com>
// +----------------------------------------------------------------------

namespace app\api\model;

use think\Db;
use think\Model;
// use app\api\model\Common;

class BootStrapTable extends Model 
{

    /**
     * 为了数据库的整洁，同时又不影响Model和Controller的名称
     * 我们约定每个模块的数据表都加上相同的前缀，比如微信模块用weixin作为数据表前缀
     */
    protected $name = 'bootstrap_table';
    /**
     * [getDataList 获取列表]
     * @Author xiezhenbin
     * @DateTime  2017-12-15 22:21:08
     * @param   
     * @return    [type]                               [description]
     */
    public function getDataList($map)
    {
        // 获取
        // $map['status'] = 1;
        // $info = $this->where($map)->order('sort desc')->select();
        $info = $this->where($map)->select();
        // 返回信息
        $data = $info;
        return $data;
    }

    /**
     * [getDataList 获取特定某一数据]
     * @Author xiezhenbin
     * @DateTime  2017-12-15 22:21:08
     * @param   
     * @return    [type]                               [description]
     */
    public function getOneData($map)
    {
        $info = $this->where($map)->find();
        // 返回信息
        if (!$info) {
            $this->error = '查询出错';
            return false;
        }
        $data = $info;
        return $data;
    }

    /**
     * [增加]
     * @xiezhenbin
     * @DateTime  2017-12-17 00:42:43
     * @return    [array]                         
     */
    public function createData($param)
    {
        try {
            // 过滤数组中的非数据表字段数据
            $data = $this->data($param)->allowField(true)->save();
            return true;
            // return $data;//成功 $data的值为 1
        }
        catch(\Exception $e)
        {
            $this->rollback();
            $this->error = '添加失败';
            return false;
        }
        return $data;
    }

    /**
     * [ 编辑]
     * @xiezhenbin
     * @DateTime  2017-12-17 00:42:51
     * @return    [array]                         
     */
    public function updateData($param,$map)
    {
        try {
            // 过滤post数组中的非数据表字段数据
            // $this->data($param)->allowField(true)->save();
            // post数组中只有name和email字段会写入
            // $this->allowField(['name','email'])->save($_POST, ['id' => 1]);
            $ret = $this->allowField(true)->save($param,$map);
            // return true;
            //修改成功放回修改成功后的整条数据
            $oneData = $this->getOneData($map);
            return $oneData;
        }
        catch(\Exception $e)
        {
            $this->rollback();
            $this->error = '修改失败';
            return false;
        }
        return $data;
    }

    /**
     * [ 软删除]
     * @xiezhenbin
     * @DateTime  2017-12-17 00:42:51
     * @return    [array]                         
     */
    public function vdelData($param,$map)
    {
        try {
            // 过滤post数组中的非数据表字段数据
            // $this->data($param)->allowField(true)->save();
            // post数组中只有name和email字段会写入
            // $this->allowField(['name','email'])->save($_POST, ['id' => 1]);
            $this->allowField(true)->save($param,$map);
            return true;
        }
        catch(\Exception $e)
        {
            $this->rollback();
            $this->error = '修改失败';
            return false;
        }
        return $data;
    }
}