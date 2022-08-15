// -*- coding: utf-8 -*-
// @name   : 摛藻Book(Chizao Book)
// @author : fly6022 
// @date   : 2022/8/14
// @Licence: GPL v3.0
// @Website: https://chizao.fly6022.fun
// @version: v0.1.0

Chizaobook_appData = new Object(); // 静态属性

    Chizaobook_appData.Version = "v0.1.0"; // 版本号
    Chizaobook_appData.Developers = ['fly6022']; // 开发者
    Chizaobook_appData.update_Time = "2022-8-14 17:16:24 / TimeZone: UTC+8"; // 最近维护时间

let DefaultPackageSource, packageSource, rq, requestData, container, packageType, judgeType, result, ErrorCode;

class Chizaobook { // 传入参数

    constructor({container, packageSource, packageType}) { // 构造函数

        this.container = container, // String
        this.packageSource = packageSource, // String
        this.packageType = packageType // Int

    }

    /*debug(debugswitch){

        var debug = debugswitch;

        return this.debug;
    }*/

}

window.onload = function selector(){ // 选择器

    DefaultPackageSource = "/default.json"; // 调试时使用的数据包（内置）

    packageSource = chizaobook.packageSource;

    if ((packageSource === undefined) || (packageSource == null) || (packageSource == "") || (packageSource == []) || (packageSource == [''])) {

        packageSource = "/package_source.json" // 默认数据源

        getPackage();

    }

    else {

        rq = new request(packageSource, null);

        getPackage();

    }
}

class request { // 预请求

    constructor(requestTarget, subTarget){ // 构造函数

        this.subTarget = subTarget; // 备用目标，当主目标请求失败后请求该目标

        this.requestTarget = requestTarget;

        this.Request = new XMLHttpRequest();

            this.Request.open('GET', requestTarget);

            this.Request.send(null);

    }

}

function getPackage(){

    rq = new request(packageSource, null);

    rq.Request.onload = function() {

        if ((rq.Request.status == 200) || (rq.Request.status == 304)) {

            requestData = eval(JSON.parse(rq.Request.responseText));

            judgeType = requestData[0].Data_Type; // 判断传回的数据类型

            result = "请求数据";
    
            ErrorCode = "0x0000";

                if (judgeType == "Package"){ // 是数据包

                    rnd = Math.floor(Math.random() * requestData[1].length);
    
                    socket();
    
                }
    
                else if (judgeType == "Package_source"){ // 是数据源
    
                    rnd = Math.floor(Math.random() * requestData[1].length);
    
                    packageSource = requestData[1][rnd].Package_Source
                    
                    getPackage(); // 递归一次（请求数据包）
    
                }
    
                else { // 错误跳出

                    result = "判断请求传回数据的类型";
    
                    ErrorCode = "0x0001";
    
                    console.error("\n %c 摛藻(Chizao Book) " + Chizaobook_appData.Version + "%c ❌ERROR!未正确加载!该错误是在" + result + "出现的。（错误码：" + ErrorCode + "）" + "HTTP状态码：" + rq.Request.status + "\n","color: #fadfa3; background: #89303f; padding:5px 0;","background: #ccc3aa; padding:5px 0;"); // 控制台日志 ERROR

            }

        }

        else {

            console.error("\n %c 摛藻(Chizao Book) " + Chizaobook_appData.Version + "%c ❌ERROR!未正确加载!该错误是在" + result + "出现的。（错误码：" + ErrorCode + "）" + "HTTP状态码：" + rq.Request.status + "\n","color: #fadfa3; background: #89303f; padding:5px 0;","background: #ccc3aa; padding:5px 0;"); // 控制台日志 ERROR
        }

    }

}

function socket(){ // 存储桶
    
    const Chizao_content = requestData[1][rnd].content;

    const Chizao_author = requestData[1][rnd].author;

    const Chizao_from = requestData[1][rnd].from;

    Chizao_Output = "<center>" + "“" + Chizao_content + "”" + "<br>——" + Chizao_author + "&nbsp;" + Chizao_from + "</center>"; 

        const container = document.getElementsByTagName(chizaobook.container)[0];
    
        container.innerHTML = Chizao_Output;


    class Chizao_Package_Data {

        constructor(Name, Developer, Date, Type) {
    
            this.Package_Name = Name;
            this.Package_Developer = Developer;           
            this.Package_Date = Date;           
            this.Package_Type = Type;
      
        }
    
    }

    var Package_Data = new Chizao_Package_Data(requestData[0].package, requestData[0].developer, requestData[0].date, requestData[0].type);

    var Package_Info = "数据包信息：" + Package_Data.Package_Developer + ", " + Package_Data.Package_Name + ".json, " + Package_Data.Package_Date + ", " + Package_Data.Package_Type; // 数据包信息（调试）

    console.log("\n %c 摛藻(Chizao Book) " + Chizaobook_appData.Version + "%c https://github.com/ChizaoProject/chizaobook \n","color: #fadfa3; background: #89303f; padding:5px 0;","background: #ccc3aa; padding:5px 0;"); // 控制台日志 SUCCEED

}