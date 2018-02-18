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
 *  描述：表1-表格初始化数据写法
 *  依赖：jQuery、Bootstrap、Bootstrap-Table
 *  
 */
$('#table1').bootstrapTable({
    columns: [{
        field: 'id',  
        title: 'Item ID'  
    }, {  
        field: 'name',  
        title: 'Item Name'  
    }, {  
        field: 'price',  
        title: 'Item Price'  
    }],  
    // 表格数据
    data: [{  
        id: 1,  
        name: 'Item 1',  
        price: '$1'  
    }, {  
        id: 2,  
        name: 'Item 2',  
        price: '$2'  
    }]
});



// 这个data也可以换成url：
// 写法如下：
// $('#table1').bootstrapTable({
//     url: 'data1.json',
//     columns: [{  
//         field: 'id',
//         title: 'Item ID'
//     }, {  
//         field: 'name',
//         title: 'Item Name'
//     }, {
//         field: 'price',
//         title: 'Item Price'
//     }, ]
// });



/** 
 *  描述：定制组件 表2-表格初始化数据写法 （本地数据）
 *  依赖：jQuery、Bootstrap、Bootstrap-Table
 *  
 */
// 写法一：
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
            // url: '/Home/GetDepartment',         //请求后台的URL（*）
            data: [{  
                id: 1,  
                Name: '总经办',  
                ParentName: '无',
                Level: '1'
            }, {  
                id: 2,
                Name: '技术部',
                ParentName: '总经办',
                Level: '2'
            }, {  
                id: 2,
                Name: '技术部',
                ParentName: '总经办',
                Level: '2'
            }, {  
                id: 2,
                Name: '技术部',
                ParentName: '总经办',
                Level: '2'
            }, {  
                id: 2,
                Name: '技术部',
                ParentName: '总经办',
                Level: '2'
            }, {  
                id: 2,
                Name: '技术部',
                ParentName: '总经办',
                Level: '2'
            }, {  
                id: 2,
                Name: '技术部',
                ParentName: '总经办',
                Level: '2'
            }, {  
                id: 2,
                Name: '技术部',
                ParentName: '总经办',
                Level: '2'
            }, {  
                id: 2,
                Name: '技术部',
                ParentName: '总经办',
                Level: '2'
            }, {  
                id: 2,
                Name: '技术部',
                ParentName: '总经办',
                Level: '2'
            }, {  
                id: 2,
                Name: '技术部',
                ParentName: '总经办',
                Level: '2'
            }, {  
                id: 2,
                Name: '技术部',
                ParentName: '总经办',
                Level: '2'
            }, {  
                id: 2,
                Name: '技术部',
                ParentName: '总经办',
                Level: '2'
            }, {  
                id: 2,
                Name: '技术部',
                ParentName: '总经办',
                Level: '2'
            }, {  
                id: 3,
                Name: '行政部',  
                ParentName: '总经办',
                Level: '2'
            }],
            method: 'get',                      //请求方式（*）
            toolbar: '#toolbar2',                //工具按钮用哪个容器
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
            detailView: false,                   //是否显示父子表
            columns: [{
                checkbox: true
            }, {
                field: 'Name',
                title: '部门名称'
            }, {
                field: 'ParentName',
                title: '上级部门'
            }, {
                field: 'Level',
                title: '部门级别'
            }, {
                field: 'Desc',
                title: '描述'
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



/** 
 *  描述：定制组件 表3-表格初始化数据写法 （请求服务器数据）
 *  依赖：jQuery、Bootstrap、Bootstrap-Table
 *  
 */
// 写法二：

$(function () {
    //1.初始化Table
    var oTable3 = new Table3Init();
    oTable3.Init();
    //2.初始化Button的点击事件
    var oButton3Init = new Button3Init();
    oButton3Init.Init();

});


var Table3Init = function () {
    var oTableInit = new Object();
    //初始化Table
    oTableInit.Init = function () {
        $('#tb3_departments').bootstrapTable({
            // url: 'http://192.168.10.109'+'/Home/GetDepartment',         //请求后台的URL（*）
            url: '/Home/GetDepartment',         //请求后台的URL（*）
            method: 'get',                      //请求方式（*）
            toolbar: '#toolbar3',                //工具按钮用哪个容器
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
            cardView: false,                    //是否显示详细视图
            detailView: false,                   //是否显示父子表
            columns: [{
                checkbox: true
            }, {
                field: 'Name',
                title: '部门名称'
            }, {
                field: 'ParentName',
                title: '上级部门'
            }, {
                field: 'Level',
                title: '部门级别'
            }, {
                field: 'Desc',
                title: '描述'
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


var Button3Init = function () {
    var oInit = new Object();
    var postdata = {};
    oInit.Init = function () {
        //初始化页面上面的按钮事件
    };
    return oInit;
};
