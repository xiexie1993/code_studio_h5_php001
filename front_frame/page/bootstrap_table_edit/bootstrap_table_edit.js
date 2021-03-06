// +----------------------------------------------------------------------
// | Description: 例子页面自定义业务逻辑JavaScript。
// +----------------------------------------------------------------------
// | Author: xiezhenbin <Xzbde163yx@163.com>
// +----------------------------------------------------------------------

/**
 *   
 *   Bootstrap-Table页面js
 *   依赖： jQuery
 *   
 */



/**
 *   
 *   描述： 不需调用直接加载
 *   依赖： jQuery
 *   
 */
$(function()
{
       console.log("Bootstrap-table页面js: 我准备好了! ^_^ ");
})





/** 
 *  描述：定制组件 表1-编辑-表格初始化数据写法 （本地数据）
 *  依赖：jQuery、Bootstrap、Bootstrap-Table
 *        jquery、bootstrap、bootstrap-table的依赖关系，所以要放在他们的后面。
 */
$(function () {
    //1.初始化Table
    var oTable1 = new Table1Init();
    oTable1.Init();
    //2.初始化Button的点击事件
    var oButton1Init = new Button1Init();
    oButton1Init.Init();

});


var Table1Init = function () {
    var oTableInit = new Object();
    //初始化Table
    oTableInit.Init = function () {
        $('#tb1_departments').bootstrapTable({
            // // 写法一：
            // url: '/Home/GetDepartment',         //请求后台的URL（*）
            // // 写法二：
            // url: 'http://ssss.com'+'/Home/GetDepartment',         //请求后台的URL（*）
            // // 写法三：
            // url: '/${url}/index.php/api/bootstraptable/list',         //请求后台的URL（*）
            data: [{  
                tid: 1,  
                title: '总经办',  
                remark: '无'
            }, {  
                tid: 2,
                title: '技术部',
                remark: '总经办'
            }, {  
                id: 3,
                title: '行政部',  
                remark: '总经办'
            }],
            method: 'get',                      //请求方式（*）
            toolbar: '#toolbar1',                //工具按钮用哪个容器
            striped: true,                      //是否显示行间隔色
            cache: false,                       //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
            pagination: true,                   //是否显示分页（*）
            sortable: false,                     //是否启用排序
            sortOrder: "asc",                   //排序方式
            queryParams: oTableInit.queryParams,//传递参数（*）
            sidePagination: "client",           //分页方式： client 客户端分页， server 服务端分页（*）
            pageNumber:1,                       //初始化加载第一页，默认第一页
            pageSize: 10,                       //每页的记录行数（*）
            pageList: [10, 25, 50, 100],        //可供选择的每页的行数（*）
            search: true,                       //是否显示表格搜索，此搜索是客户端搜索，不会进服务端，所以，个人感觉意义不大
            strictSearch: true,
            showColumns: true,                  //是否显示所有的列
            showRefresh: true,                  //是否显示刷新按钮
            minimumCountColumns: 2,             //最少允许的列数
            clickToSelect: true,                //是否启用点击选中行
            height: 500,                        //行高，如果没有设置height属性，表格自动根据记录条数觉得表格高度
            uniqueId: "ID",                     //每一行的唯一标识，一般为主键列
            showToggle:true,                    //是否显示详细视图和列表视图的切换按钮
            cardView: false,                    //是否显示详细视图
            detailView: false,                  //是否显示父子表
            columns: [{
                checkbox: true
            }, {
                field: 'title',
                title: '标题',
                editable:true //是否启用行内编辑
            }, {
                field: 'remark',
                title: '备注',
                editable:true //是否启用行内编辑
            }, ],
           onClickRow: function (row, $element) {
                // curRow = row;
                console.log('你点到我了');
            },
            onEditableSave:function (field,row,oldValue,$el) {  
                // alert('保存addr='+row.addr+' id='+row.itemid);  
                console.log('你点到我了->去保存');
            }  
        });
    };


    //得到查询的参数
    oTableInit.queryParams = function (params) {
        var temp = {   //这里的键的名字和控制器的变量名必须一直，这边改动，控制器也需要改成一样的
            limit: params.limit,   //页面大小
            offset: params.offset,  //页码
            departmentname: $("#txt_search_departmentname").val(),
            statu: $("#txt_search_statu").val()
        };
        return temp;
    };
    return oTableInit;
};


var Button1Init = function () {
    var oInit = new Object();
    var postdata = {};
    oInit.Init = function () {
        //初始化页面上面的按钮事件
    };
    return oInit;
};

// 


/** 
 *  描述：定制组件 表2-编辑-表格初始化数据写法 （服务器数据）
 *  依赖：jQuery、Bootstrap、Bootstrap-Table
 *        jquery、bootstrap、bootstrap-table的依赖关系，所以要放在他们的后面。
 */
$(function () {
    //1.初始化Table
    var oTable2 = new Table2Init();
    oTable2.Init();
    //2.初始化Button的点击事件
    var oButton2Init = new Button2Init();
    oButton2Init.Init();

});


var Table2Init = function () {
    var oTableInit = new Object();
    //初始化Table
    oTableInit.Init = function () {
        $('#tb2_departments').bootstrapTable({
            // // 写法一：
            // url: '/Home/GetDepartment',         //请求后台的URL（*）
            // // 写法二：
            // url: 'http://ssss.com'+'/Home/GetDepartment',         //请求后台的URL（*）
            // // 写法三：
            url: '/${url}/index.php/api/bootstraptable/list',         //请求后台的URL（*）
            // data: [{  
            //     tid: 1,  
            //     title: '总经办',  
            //     remark: '无'
            // }, {  
            //     tid: 2,
            //     title: '技术部',
            //     remark: '总经办'
            // }, {  
            //     id: 3,
            //     title: '行政部',  
            //     remark: '总经办'
            // }],
            method: 'get',                      //请求方式（*）
            toolbar: '#toolbar2',                //工具按钮用哪个容器
            striped: true,                      //是否显示行间隔色
            cache: false,                       //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
            pagination: true,                   //是否显示分页（*）
            sortable: false,                     //是否启用排序
            sortOrder: "asc",                   //排序方式
            queryParams: oTableInit.queryParams,//传递参数（*）
            sidePagination: "server",           //分页方式： client 客户端分页， server 服务端分页（*）
            pageNumber:1,                       //初始化加载第一页，默认第一页
            pageSize: 10,                       //每页的记录行数（*）
            pageList: [10, 25, 50, 100],        //可供选择的每页的行数（*）
            search: true,                       //是否显示表格搜索，此搜索是客户端搜索，不会进服务端，所以，个人感觉意义不大
            strictSearch: true,
            showColumns: true,                  //是否显示所有的列
            showRefresh: true,                  //是否显示刷新按钮
            minimumCountColumns: 2,             //最少允许的列数
            clickToSelect: true,                //是否启用点击选中行
            height: 500,                        //行高，如果没有设置height属性，表格自动根据记录条数觉得表格高度
            uniqueId: "ID",                     //每一行的唯一标识，一般为主键列
            showToggle:true,                    //是否显示详细视图和列表视图的切换按钮
            cardView: true,                    //是否显示详细视图
            detailView: false,                  //是否显示父子表
            columns: [{
                checkbox: true
            }, {
                field: 'title',
                title: '标题',
                editable:true //是否启用行内编辑
            }, {
                field: 'remark',
                title: '备注',
                // // 配置法1：最简单配置
                // editable:true //是否启用行内编辑
                // // 配置法2：编辑输入框带标题，有输入检验与提示
                // editable: {
                //         type: 'text',
                //         title: '用户名',//编辑时的输入框显示标题栏
                //         validate: function (v) { //输入校验
                //             if (!v) return '用户名不能为空';//校验提示语
                //         }
                //     }
                // // 配置法3：编辑输入框带标题，有输入检验(验证数字)与提示
                // editable: {
                //     type: 'text',
                //     title: '年龄',
                //     validate: function (v) {
                //         if (isNaN(v)) return '年龄必须是数字';
                //         var age = parseInt(v);
                //         if (age <= 0) return '年龄必须是正整数';
                //     }
                // }
                // // 配置法4：选择框 、编辑输入框带标题
                // editable: {
                //     type: 'select',
                //     title: '部门',
                //     source: [{ value: "1", text: "研发部" }, { value: "2", text: "销售部" }, { value: "3", text: "行政部" }]
                // }
                // // 配置法5： 复选框
                // editable: {
                // type: "checklist",
                // separator:",",
                // source: [{ value: 'bsb', text: '篮球' },
                //      { value: 'ftb', text: '足球' },
                //      { value: 'wsm', text: '游泳' }],
                // }

                // // 配置法5：取后台数据
                editable: {
                    type: 'select',
                    title: '部门',
                    source: function () {
                        var result = [];
                        $.ajax({
                            // url: '/Editable/GetDepartments',
                            url: '/${url}/index.php/api/bootstraptable/list',         //请求后台的URL（*）
                            async: false,
                            type: "get",
                            data: {},
                            success: function (data, status) {
                                $data
                                $.each(data, function (key, value) {
                                    result.push({ value: value.ID, text: value.Name });
                                });
                            }
                        });
                        return result;
                    }
                }

                // // 配置法6： 时间框 、编辑输入框带标题
                // editable: {
                //     type: 'datetime',
                //     title: '时间'
                // }
            }, ]
        });
    };


    //得到查询的参数
    oTableInit.queryParams = function (params) {
        var temp = {   //这里的键的名字和控制器的变量名必须一直，这边改动，控制器也需要改成一样的
            limit: params.limit,   //页面大小
            offset: params.offset,  //页码
            departmentname: $("#txt_search_departmentname").val(),
            statu: $("#txt_search_statu").val()
        };
        return temp;
    };
    return oTableInit;
};


var Button2Init = function () {
    var oInit = new Object();
    var postdata = {};
    oInit.Init = function () {
        //初始化页面上面的按钮事件
    };
    return oInit;
};
