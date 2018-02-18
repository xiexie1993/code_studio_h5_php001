// +----------------------------------------------------------------------
// | Description: JavaScript js 读写本地txt文件。
// +----------------------------------------------------------------------
// | Author: xiezhenbin <Xzbde163yx@163.com>
// +----------------------------------------------------------------------

/**
 *   
 *   自定义页面 js
 *   
 *   
 */
$(function()
{
       console.log("我准备好了---js_rwtxt页面js===");
       // 读取文件内容
       // var file_path = "C:/Code/html_js_code/front_frame/prj001/readme.txt";
       // // 读取文件内容
       // var file_text =read_txt(file_path);
       // document.getElementById("text_show").innerHTML = file_text; 
       // import_file();
})

/**
 *   
 *   写文件内容
 *   兼容性：只支持IE
 *   
 */
// function write_txt(file_path)
// {
//     // 第一步:
//     //        创建一个可以将文件翻译成文件流的对象。 
//     var fso=new ActiveXObject(Scripting.FileSystemObject); //IE 浏览器才有
//     // 第二步:
//     //        用于创建一个textStream 对象 
//     //        括号里边有三个属性
//     //        1. 文件的绝对路径 
//     //        2. 文件的常数 只读=1，只写=2 ，追加=8 等权限。（ForReading 、 ForWriting 或 ForAppending 。）； 
//     //        3. 一个布尔值 允许新建则为true 相反为false；
//     // Var f=fso.createtextfile("C:\a.txt",2,true); 
//     var f=fso.createtextfile(file_path,2,true);
//     // 第三步：
//     //       调用textStream的方法 
//     //       1. Write（不在写入数据末尾添加新换行符） 
//     //       2. WriteLine（要在最后添加一个新换行符） 
//     //       3. WriteBlankLines（增加一个或者多个空行）
//     f.writeLine("wo shi di yi hang"); 
//     // 第四步： 
//     //        关闭textStream 对象： 
//     f.close(); 
    
//     //返回数据
//     var ret_data = 1;
//     return ret_data;
// }



/**
 *    
 *    读文件内容
 *    兼容性：只支持IE
 *    
 */
// function read_txt(file_path)
// {
//     // 第一步：
//     //        创建一个可以将文件翻译成文件流的对象。 
//     var fso = new ActiveXObject(Scripting.FileSystemObject); //IE 浏览器才有
//     // 第二步：
//     //        用于创建一个textStream 对象 
//     //        括号里边有三个属性 
//     //        1. 文件的绝对路径 
//     //        2. 文件的常数 只读=1，只写=2 ，追加=8 等权限。（ForReading 、 ForWriting 或 ForAppending 。）； 
//     //        3. 一个布尔值 允许新建则为true 相反为false；
//     // var f=fso.opentextfile("C:\a.txt",1,true); 
//     var f=fso.opentextfile(file_path,1,true); 
//     // 第三步：
//     //        调用读取方法 
//     //        1. Read （用于读取文件中指定数量的字符） 
//     //        2. ReadLine （读取一整行，但不包括换行符） 
//     //        3. ReadAll （则读取文本文件的整个内容）； 
     
//     var file_content = f.ReadAll();
//     // 判断是否读取到最后一行
//     // while (!f.AtEndOfStream)
//     // {
//     //     f.ReadAll(); 
//     // }
//     // 第四步： 
//     //        关闭textStream 对象： 
//     f.close();
//     var ret_data = file_content;
//     return ret_data;
// }

/**
 *  页面点击 导入文件
 */
// $("#import").click(function(){//点击导入按钮，使files触发点击事件，然后完成读取文件的操作。
//         $("#files").click();
//     });

/**
 *  读取本地文件内容
 */
function import_file()
{

    var selectedFile = document.getElementById("files").files[0];//获取读取的File对象
    console.log(selectedFile);
    var name = selectedFile.name;//读取选中文件的文件名
    var size = selectedFile.size;//读取选中文件的大小
    console.log("文件名:"+name+"大小："+size);

    var reader = new FileReader();//这里是核心！！！读取操作就是由它完成的。
    reader.readAsText(selectedFile);//读取文件的内容

    reader.onload = function()
    {
        console.log(this.result);//当读取完成之后会回调这个函数，然后此时文件的内容存储到了result中。直接操作即可。
        var file_text = this.result;
        console.log(file_text);
        document.getElementById("text_show").innerHTML = file_text; 
    };


    // return this.result;
}
/**
 * 
 参考资料：

使用HTML5来实现本地文件读取和写入
http://blog.csdn.net/zdavb/article/details/50266215


 */