<h1 align="center">『摛藻』</h1>

<center><img src="https://chizao.fly6022.fun/images/logo.png" width="30%"></center>

> 『摛藻』是一个基于 JavaScript 开发的文学类项目.

![](https://img.shields.io/badge/language-Javascript-yellow?style=flat-square) ![](https://img.shields.io/badge/build-passing-brightgreen?style=flat-square) [![](https://img.shields.io/badge/license-GPL%20v3.0-blue?style=flat-square)](https://github.com/ChizaoProject/chizaobook/blob/master/LICENSE) ![](https://img.shields.io/badge/version-0.1.0-red?style=flat-square)

[![hits](https://img.shields.io/jsdelivr/gh/hy/ChizaoProject/chizaobook?style=flat-square)](https://cdn.jsdelivr.net/gh/ChizaoProject/chizaobook) ![code-size](https://img.shields.io/github/languages/code-size/ChizaoProject/chizaobook?style=flat-square) 

## 特性

- 基于 JavaScript 开发
- 支持第三方数据源构建
- 轻量级 / 模块化

[在线示例]() [项目手册]()

## 安装

- 通过 jsDelivr 安装

```html
<script src="https://cdn.jsdelivr.net/gh/ChizaoProject/chizaobook@latest/app.js"></script>
```

## 使用

在页面添加一个容器：

```html
<chizaobook>
```

之后使用以下JavaScript代码来生成插件：

```javascript
const chizaobook = new Chizaobook({
	container: "chizaobook", // string
    packageSource: "", // string
    packageType: 8 // int
});
```

### packageSource

该参数的参数值可以为“数据包”链接，也可以为“数据源”（数据包索引）链接。

我们推荐将该项设置为 ```"https://cdn.jsdelivr.net/gh/ChizaoProject/Packages@latest/package_source.json"```(即官方数据包索引)

当然您也可以根据自己的喜好，制作自己的数据包索引，或是使用第三方数据包索引。

## 关键参数说明

以下仅列举安装时所需的关键参数，插件的详细参数说明请到官网查看。

```packageSource```: 数据源文件链接，数据类型为```string```，用来存储句子信息。

```packageType```: 数据源文件类型，数据类型为```number```，用来描述句子的种类。

## 贡献

您可以通过以下任意方式为本项目做出贡献：

1. 通过[爱发电](https://afdian.net/@fly6022)平台对作者进行赞助；
2. Fork 本代码仓库，并从```master```创建新分支；
3. 发现项目存在的BUG后，在本项目内提出 Issues；
4. 在遵守开源许可证且确保项目测试通过及代码风格一致的前提下，发起```Pull Request```，在本项目中贡献你的代码。详情请参考[代码贡献参考]()。

## 贡献者

![https://opencollective.com/ChizaoProject/contributors.svg?width=890&button=false](https://opencollective.com/ChizaoProject/contributors.svg?width=890&button=false)

## 源信息

以下包含了开源项目信息、作者信息以及开源许可信息，供开发人员参考。

```
// -*- coding: utf-8 -*-
// @name   : 摛藻Book(Chizao Book)
// @author : fly6022 
// @date   : 2022/8/15
// @Licence: GPL v3.0
// @Website: https://chizao.fly6022.fun
// @version: v0.1.0
```

欲获取更加详细的项目内容，您可以尝试调用项目内置的静态属性：

|                 Key                  |         Details          |
| :----------------------------------: | :----------------------: |
|   ```Chizaobook_appData.Version```   |      项目的版本信息      |
| ```Chizaobook_appData.Developers```  | 参与项目制作的全体开发者 |
| ```Chizaobook_appData.Update_Time``` |    项目最新的更新时间    |

![sponsors](https://img.shields.io/github/sponsors/fly6022?style=flat-square) [![stars](https://img.shields.io/github/stars/ChizaoProject/chizaobook?style=social)](https://github.com/ChizaoProject/chizaobook)