<h1 align="center">『书摘。』好句</h1>

<center><img src="https://book.fly6022.fun/img/logo.png" width="30%"></center>

> 『书摘。』是一个基于JavaScript开发的书籍好句摘录插件，收录了书籍/影视/动漫中的好句。

![](https://book.fly6022.fun/img/tags/language-javascript-orange.svg)
![](https://book.fly6022.fun/img/tags/book-excerpts-brightgreen.svg)
![](https://book.fly6022.fun/img/tags/build-passing-success.svg)
[![](https://book.fly6022.fun/img/tags/licence-MIT-brightgreen.svg)](https://github.com/Book-Excerpts/haoju/blob/master/LICENSE)

## 特性

- 可移植性强
- JavaScript开发
- 轻量化
- 基于 GPL 协议开源

[官方网站](https://book.fly6022.fun/)
[原作者博客](https://fly6022.fun/)

## 调用

- 使用html代码直接引用。

```html
  <!-- html -->
  <div id="haoju" class="shuzhai"></div>
                  
  <!-- Javascript（必须位于<body>与</body>之间） -->
  <script src="https://book.fly6022.fun/note/haoju.js"></script>
                  
  <!-- CSS -->
  <link rel="stylesheet" type="text/css" href="https://book.fly6022.fun/note/css/shuzhai.css">
```

## 使用者

- [幻空盒子 - HK Box](http://www.hkbox.club/):幻空盒子是一款提供给MC玩家但不限于MC玩家的多功能盒子，是SRF技术部旗下品牌之一，由幻空Hub技术团队开发。我们的宣传词：“创你所想，造你之梦”。

## 贡献

**1.下载。** 将『书摘。』好句插件源码 ```clone``` 下来。

**2.编辑。** 之后打开任意代码编辑器（例如：VSCode）进行编辑。**请注意：```haoju.js```在2.0.0版本及之后的版本作为了控制文件，存储文件在```/src/haoju```文件夹中。当Json文件大小≥100KB时，建议您另建新Json文件。**

**3.格式。** 确保书摘好句段落及文字格式与原插件一致。

格式遵循 JSON 语法。

```json
   {
	  "haoju": "好句内容",
	  "author": "作者",
	  "from": "《作品名称》"
	}
```

**示例：**

```json
   {
	  "haoju": "怕什么？一切要来的都得来，不必怕。",
	  "author": "沈从文",
	  "from": "《边城》"
	}
```

**4.检查。** 编辑完毕后记得修改“书摘数量”参数（在控制文件```haoju.js```中。）

```javascript
    var len=472;// 好句数量
```

**5.测试。** 点击根目录的 ```test.html``` 将插件在**服务器**中运行，检查是否可正常运行，如果不能，则是语法错误，需要再次修改。（运行时可能会有一定的延时）

**6.提交。** 将编辑后的插件通过 ```pull```上传到Github仓库，由我审核无误之后，我会将版本上传，并将编辑者的昵称添加到『书摘。』官方网站的贡献者名单中。

## 🔧 『书摘。』实现原理

仅说明几个重大版本更新的实现原理。

### v1.1.0

  『书摘。』核心插件使用JavaScript编写，其原理为访问者每一次刷新网页，都会触发“haoju.js”生成一个随机数，之后，浏览器根据“haoju.js”生成的随机数，在“haoju.js”中调用为这个随机数的句子，再显示到网页的指定位置上。

例如：

```
“haoju.js”生成了随机数 0.
    
经过查找，0 所对应的句子是 “‘怕什么？一切要来的都得来，不必怕。’ —— 沈从文 《边城》”
```

如果返回的是以下的值，是插件bug，刷新一下试试：（暂时未找到解决方案，不过看了看Javascript手册，以下返回值是“未定义”的意思，我认为应该是插件已经生成了随机数，但是未执行查找对应字符串的命令而引起的）

```javascript
undefined
```
    
### v1.3.0

1.3.0版本在1.1.0版本基础之上，增加了自动更新功能，下面我来介绍一下自动更新功能的实现原理。

自动更新功能的实现基于Javascript语言。

1.3.0版本在1.2.0版本JavaScript脚本基础上，将字符串嵌套进了```函数（function）```，之后通过加载```setTimeout```以及```setInterval```方法来实现自动更新。前者（setTimeout）用于在指定的毫秒数后调用函数，我此处配置毫秒数为0，主要是因为如果不设置为0，会与后者（setInterval）产生冲突，造成无法显示；后者（setInterval）用于在用户打开页面后计时，这里将毫秒数设置为10000，即10秒，也就是在用户打开页面后10秒钟自动更新下一个内容。

```javascript
setTimeout("haoju()","0");setInterval("haoju()","10000"); // 计时器，单位毫秒
```

### v2.0.0

2.0.0版本是一次重大更新。

```haoju.js```不再兼顾控制功能及存储功能，而是只负责控制书摘好句，存储功能由被单独划分出来的若干个存储Javascript文件（以下称作“数据源文件”；每个文件最大不超过100KB，达到100KB的文件将不再添加新数据）负责。如：

```/src/haoju/1.js``` 以及 ```/src/haoju/2.js```。

这样做的好处是节省带宽（上文提到每个数据源文件的大小应不超过100KB，也就意味着书摘在加载过程中消耗的流量不会超过100KB），同时便于开发者维护（便于排除bug）。

同时，控制脚本也发生了改变：

依然采用“获取随机数 → 寻找枚举对象”这一机制。通过该机制可以快速获取到数据源文件（GET方式），根据此机制，我们将控制文件，即```haoju.js```的大小精简到了603字节。

### v3.0.0

3.0.0版本是一次重大更新。

在之前的版本中，“好句”是以```Array```（数组）的形式被存储在JavaScript文件中的，此次更新，废除了这一机制（会造成代码十分臃肿且不利于维护），改用JSON存储“好句”。

同时，由于存储机制的改变，控制文件也被做了微调：

- 采用XMLHttpRequest库，并由GET方式请求JSON文件：

```
var request = new XMLHttpRequest();
request.open("GET", url);
```

- 控制文件（Javascript）由两部分（```getdata()```函数和```dealdata()```函数）组成，它们的分工不同，前者负责请求，后者负责处理。

## 注意事项

由于书摘好句插件依赖 Ajax ，由于 Ajax 本身不支持跨域的特性，因此，在您需要跨域调用插件时，请在服务器端配置```CORS```（跨域访问）。否则会导致无法调用插件。

## 许可证

『书摘。』好句插件开源遵循 GPL 许可证。

## 作者

[官方网站](https://book.fly6022.fun/)
[作者博客](https://fly6022.fun/)