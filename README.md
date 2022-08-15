# 面试八股文记录

注:  
    &emsp;&emsp;整个库的文档都是自己整理，自己手码的，有错误的地方，请指出，谢谢!!!。如果你喜欢的话，麻烦点一个star吧，谢谢!!!  
    &emsp;&emsp;下面进行正题。  

# HTML篇
### src和href的区别
src指向外部资源的位置，在请求src资源时会将其指向的资源下载并应用到文档内。<font color="	#FF6347">当浏览器解析到该元素时，**会暂停其他资源的下载和处理**，直到将该资源加载、编译、执行完毕</font>，图片和框架等元素也是如此。<font color="	#FF6347">所以应该将js文件的引入放到文档最底部</font>。

href指向网络资源所在的位置，建立与当前元素或当前文档之间的链接，如果在文档中添加：
```html
<link href=”common.css” rel=”stylesheet”/>
```
那么浏览器会识别该文档为css文件，就会<font color="	#FF6347">**并行下载资源并不会停止对当前文档的处理**，建议使用link来引入css，而不是@import</font>。

**src与href的区别在于**：
1. src用于引入外部资源；href用于引入网络资源
2. src在解析外部资源时会暂停其他资源的下载和处理；href会并行处理下载资源和处理当前文档
3. src用于替换当前元素；href用于在当前文档和引用资源之间建立连接

### 对HTML语义化的理解
语义化就是根据内容选择合适的标签，让元素、属性有含义。

语义化的优点如下：
- 对机器友好，带有语义化的文字表现力丰富，适合搜索引擎爬取有效信息。
- 对开发者友好：语义化标签使HTML文档结构清晰，增强了可读性，便于团队开发与维护。

常见的语义化标签：
```html
<header></header>  头部
<nav></nav>  导航栏
<section></section>  区块（有语义化的div）
<main></main>  主要区域
<article></article>  主要内容
<aside></aside>  侧边栏
<footer></footer>  底部
```

### DOCTYPE的作用
DOCTYPE是文档类型声明，告诉浏览器应该以什么样的文档类型来解析文档。不同的渲染模式会影响浏览器对CSS代码甚至JS脚本的解析，所以它必须放在文档的第一行。

### script标签中defer和async的区别
如果没有defer和async属性，浏览器会立即加载并执行相应的脚本，不会等待后续加载的文档元素，读取到就会开始加载和执行，这样就阻塞了后续文档的加载。

![image](https://user-images.githubusercontent.com/70066311/164873705-75330fb5-1c29-4c32-ab4a-cf76ef1e9342.png)

上图中蓝色代表js脚本网络加载时间，红色代表js脚本执行时间，绿色代表html解析。可以看出<font color="	#FF6347">defer和async属性都是去异步加载外部的js脚本文件，他们都不会阻塞页面的解析，区别在于：</font>
- 执行顺序：多个带async属性的标签，不能保证加载的顺序；多个defer属性的标签，按照加载顺序执行。
- 脚本是否并行执行：async属性，表示后续文档的加载和执行与js脚本的加载和执行是并行进行的，在加载完js脚本后会暂停html脚本的解析，立即执行js脚本；而defer属性在加载完js脚本后会等待html解析完后在执行js脚本。
- async适合加载第三方脚本；而defer适合加载与DOM有关联的脚本

### 常用的meta标签有哪些
1. charset：执行编码类型
```html
<meta charset="UTF-8" >
``` 

2. keywords：页面关键词
```html
<meta name="keywords" content="关键词" />
```

3. description：页面描述
```html
<meta name="description" content="页面描述内容" />
```

4. viewport：适配移动端
```html
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
```

5. refresh：页面重定向和刷新
```html
<meta http-equiv="refresh" content="0;url=" />
```


### HTML5新特性
1. 语义化标签
2. 媒体标签：audio、video、source
3. 表单
    - 表单类型：
        - email：验证邮箱
        - url：验证URL
        - number：只能输入数字
        - date：日期选择
    - 表单属性：
        - placeholder：提示信息
        - autofocus：自动获取焦点
        - required：输入框不能为空
    - 表单事件：
        - oninput：每当输入框的内容发生变化时都会触发该事件
        - oninvaild：当表单验证不通过触发该事件
4. 进度条：progress标签用来表示任务进度
5. DOM查询：document.querySelector()和document.querySelectorAll()可以查询标签、类、ID
6. Web存储
localStorage和sessionStorage
7. 新增了画布Canvas，可以在网页上绘制图像
8. SVG矢量图：使用XML格式定义图形，在图像改变尺寸的情况下图像质量不会有损失
8. 新增了Geolocation：定位用户位置

### 行内元素有哪些，块级元素有哪些、空元素有哪些
- 行内元素：a、b、span、img、input
- 块级元素：div、ul、ol、li、h1~h6、p
- 空元素：没有内容的HTML标签，即没有闭合标签：br、hr、img、input

### 对于web worker的理解
当JS执行耗时长的同步任务时，会阻塞后面的线程，而<font color="	#FF6347">web worker给JS创建多线程的运行环境，将一些任务分配给worker线程，主线程执行的同时worker线程也在执行，这样在进行复杂操作时就不会阻塞主线程了</font>。

Worker线程一旦创建成功，就会始终运行，不会被主线程上的活动（比如用户点击按钮，提交表单）打断。这样有利于随时响应主线程的通信，但这样也更浪费资源，不应该过度使用，而且一旦使用完毕，就应该关闭。

使用web worker要注意以下几点：
1. 同源限制。分配给worker线程运行的脚本文件，必须与主线程的脚本文件同源。
2. DOM限制。无法读取主线程所在网页的DOM对象，也无法使用`document`、`window`这些对象。

### HTNL5离线存储
离线存储是指：<font color="	#FF6347">在用户没有连接网络时，可以正常访问应用或某些网站，当用户连接后，自动更新用户机器上的缓存文件</font>。

- 在线的情况下：浏览器发现html头部有`manifest`属性，它会请求`menifest`文件，如果是第一次访问页面，那么浏览器就会根据`manifest`文件的内容下载相应的资源并且进行离线存储 。如果已经访问过该页面并已经进行了离线存储，那么浏览器就会使用离线的资源加载页面，然后浏览器会对比`manifest`文件，查看是否发生改变，如果改变了就重新下载文件中的资源并进行离线存储。
- 离线的情况下：浏览器直接使用离线存储的资源。

### strong和b、i和em、title和h1的区别
- strong标签有语义，是起到加重语气的效果，而b标签是没有的，b标签只是一个简单加粗标签。b标签之间的字符都设为粗体，strong标签加强字符的语气都是通过粗体来实现的，而搜索引擎更侧重strong标签。
- title属性没有明确意义只表示是个标题，h1则表示层次明确的标题，对页面信息的抓取有很大的影响
- i内容展示为斜体，em表示强调的文本

### iframe有哪些优缺点
<font color="	#FF6347">iframe属性可以将一个文档嵌入在另一个文档中</font>

**优点**：
- 用来加载速度较慢的内容（例如广告、视频等）
- 可以使脚本并行加载
- 可以实现跨子域通信

**缺点**：
- 会阻塞主页面的`onload`事件
- 容易产生安全问题。将一个不可见的或用户感兴趣内容的`iframe`覆盖在文档的某个位置上，诱导用户点击。

### label的作用是什么
label标签用来定义与表单控件的关系，会自动将焦点转到和label标签对应的表单控件上。
```html
<label for="mobile">Number:</label>
<input type="text" id="mobile"/>

<label>Date:<input type="text"/></label>
```

### SVG和Canvas的区别
- SVG是使用XML格式定义的矢量图，SVG是基于XML的，可以为其添加JS事件处理器。如果SVG对象的属性发生变化，那么浏览器能够自动重现图形。其特点如下：
    - 不依赖分辨率
    - 支持事件处理器
    - 适合带有大型渲染区域的应用程序，例如地图
    - 复杂度高会减慢渲染速度
    - 不适合游戏应用
- Canvas通过JS来绘制图形，其位置发生改变，就会重新进行渲染。其特点如下：
    - 依赖分辨率
    - 不支持事件处理器
    - 可以以图片格式保存图像

### head标签的作用
head可以引入脚本、样式、提供元信息等。还可以规定字符集，描述了文档的各种属性，例如title、description。还可以配置是否适配移动端等。

### 严格模式与怪异模式
- 严格模式：浏览器按照W3C标准解析代码
- 怪异模式：浏览器按照自己的方式解析代码，模拟浏览器的行为，以防止老站点无法工作

HTML5不分严格模式与怪异模式

### HTML5 drag API
- dragstart：在开始拖放元素时触发的事件
- drag：正在拖放时触发的事件
- dragenter：在被拖放元素进入某元素时触发
- dragover：在被拖放在某元素内移动时触发
- dragleave：在被拖放元素移出目标元素时触发
- drop：在目标元素完全接受被拖放元素时触发
- dragend：在整个拖放操作结束时触发

### a标签
`a`标签定义超链接，用于从一个页面链接到另一个页面。

`href`属性，指定链接的目标URL。

`target`属性，规定在何处打开目标URL
- _blank：新窗口打开
- _parent：在父窗口打开链接
- _self：当前页面跳转
- _top：在当前窗体打开链接，替换当前的整个窗体

### form标签
在`form`标签中添加Action（提交的地址）和method（post方法），且有一个submit按钮，就可以实现数据的提交。

form标签分为三部分：表单标签、表单域、表单按钮。

**表单标签**：

```html
<FORM ACTION="URL" METHOD="GET|POST" ENCTYPE="MIME" TARGET="...">
  ...
</FORM>
```

- action = url：用来指定处理提交表单的格式，可以是一个`URL`，或一个电子邮件地址。
- method = get | post：指明提交表单的方法
- enctype=cdata
- target：指明结果页面显示的位置，类似于`a`标签的target

**表单域**：包含文本框、多行文本框、密码框、单选框等。

**表单按钮**：用于将输入的内容提交到服务器。

### 一个ul里有若干个li，如何实现li倒序？
共有三种方法：innerHTML, createElement(), createDocumentFragment()

首先初始化1000个li。

```js
var ul = document.createElement("ul");
var inner = "";
for (var i = 0; i < 1000; i++) {
  inner += "<li>" + i + "</li>"
}
ul.innerHTML = inner;
document.body.appendChild(ul);
```

#### innerHTML

```js
function reverseULStr(ul) {
  var nul = document.createElement("ul");
  var cs = ul.children;
  var results = [];
  for (var i = cs.length - 1; i >= 0; i--) {    
    results.push(cs[i].outerHTML);
  }
  nul.innerHTML = results.join("");
  document.body.removeChild(ul);
  document.body.appendChild(nul);
  return nul;
}
```

该方法的基本思路就是：首先创建一个新的ul，一个数组，然后将旧的ul中的li倒序添加到数组中，最后将数组添加到新的ul中。<font color="	#FF6347">该方法是将**string类型**的标签添加到数组中，然后在将string添加到新的ul中</font>

#### createElement

```js
function reverseULNode(ul) {
  var nul = document.createElement("ul")
  var cs = ul.children
  for (let i = cs.length - 1; i >= 0; i--) {
    nul.appendChild(cs[i])
  }
  document.body.removeChild(ul)
  document.body.appendChild(nul)
}
```

该方法<font color="	#FF6347">直接将Node节点添加到新的ul中</font>。

#### createDocumentFragment
- createDocumentFragment用来创建一个虚拟的节点对象，可以包含任何类型的节点，在创建之初是空的。
- 他创建出的节点不属于文档树，当将DocumentFragment插入到文档树中，插入的不是DocumentFragment自身，而是它的孩子节点。<font color="	#FF6347">当需要添加多个DOM元素时，首先将这些元素添加到DocumentFragment中，再将DocumentFragment添加到页面，会减少页面渲染的次数，效率会得到明显的提升</font>。
- <font color="	#FF6347">如果使用appendChid方法将原DOM树中的节点添加到DocumentFragment中，会删除原来的节点</font>。

```js
function reverseULFragment(ul) {
  const nul = document.createElement("ul")
  const frag = document.createDocumentFragment()
  const cs = ul.children

  for (let i = cs.length - 1; i >= 0; i--) {
    frag.appendChild(cs[i])
  }

  nul.appendChild(frag)
  document.body.removeChild(ul)
  document.body.appendChild(nul)
}
```

#### 总结

![image](https://user-images.githubusercontent.com/70066311/170901468-17100a50-e094-49c4-9adc-0ec5da3336b4.png)

- 当进行多次的插入和删除DOM操作时，如果使用`innerHTML`，在每一次插入删除时都会引起页面的重新渲染（重绘和重排），效率很低。所以在第一种方法中进行了优化：<font color="	#FF6347">将多次的插入的节点写到一个字符串中，然后将字符串一次性的写入innerHTML中。这种方法的效率也是最高的</font>。
- createDocumentFragment创建的是虚拟的DOM节点，存在于内存中，对其进行添加或删除操作不会引起重绘和重排，可以做到性能优化的作用。

**createElement和createDocumentFragment方法比较**
- createElement创建的元素可以进行重复操作；createDocumentFragment创建的元素是一次性的，添加后就不能再继续操作了
- 节点类型必须为Node类型，不能为文本
- 都可以使用appendChild添加子元素
- 若添加的子元素是文档中存在的元素，通过appendChild在为其添加子元素时，会从文档中删除之前存在的元素。

### 前端无障碍
前端无障碍是指<font color="	#FF6347">任何人都可以平等的、方便的、无障碍地获取信息、利用信息</font>。常见的无障碍设计例如：键盘上突起的F和J键，可以使人们方便的找到键盘字母的位置；某些浏览器无法显示图像，采用文字或声音的方式描述图像。

腾讯无障碍说明：每个页面至少有一个h1并不为空、每个页面应至少有一个导航栏、每个页面的title不应长于60个字符等等。字节跳动无障碍短视频。无障碍检测工具：pa11y，可以很方便的进行用户测试，例如假设你自己是一个纯键盘的网站浏览者，尝试一下用键盘浏览自己开发的网站，是否能够方便的导航到网页的各个部分，并进行无障碍的阅读和交互。

### 对MVVM的理解
MVVM分为：Model、View、ViewModel
- Model：数据模型，数据和业务的逻辑都在Model中定义
- View：UI视图，负责数据的展示
- ViewModel：负责监听Model中的数据变换并控制View进行视图更新，处理用户操作

Model和View并无直接联系，而是通过ViewModel进行联系，Model和ViewMedol之间有着双向数据绑定的联系，因此当Medol中的数据改变时会触发View层的刷新，View中由于用户交互操作而改变的数据也会在Medol中同步。这种模式实现了Model和View的数据自动同步，因此开发者只需要专注于数据的维护，而不需要自己操作DOM。

![image](https://user-images.githubusercontent.com/70066311/165209081-5b2f1034-1230-40db-b732-3a6a69369feb.png)

优点：
- 双向绑定
- 将View和Medol彻底分离，降低了耦合性，有利于测试

### 对MCV的理解
MVC是一种设计模式。
- M：模型层，是应用程序中用于处理应用程序数据逻辑的部分，模型对象负责在数据库中存取数据
- V：视图层：在应用程序中处理数据显示的部分，视图是依据模型数据创建的
- C：控制层，在应用程序中处理用户交互的部分，控制器接受用户的输入并调用模型和视图去完成用户的需求，控制器本身不输出任何东西和做出任何处理。它只是接收请求并决定调用哪个模型去处理请求，然后再确定用哪个视图来显示返回数据。

![image](https://user-images.githubusercontent.com/70066311/173271858-691015a2-1cff-42d7-a27d-d29cba6c2029.png)


### MVVM和MVC的区别
MVC和MVVM都是一种设计思想，区别在于<font color="	#FF6347">MVVM实现了双向绑定，即View和Model的自动同步，当Model的属性改变时，不需要再去手动操作DOM就可以自动更新View。而MVC中大量的DOM操作会影响页面渲染的性能</font>。

### 对SPA的理解
SPA为单页面应用，它将所有活动局限于一个Web页面中，仅在该Web页面初始化时加载相应的HTML、JS、CSS，一旦页面加载完成了，<font color="	#FF6347">SPA不会因为用户的操作而进行页面的重新加载或跳转，取而代之的是利用JS动态的变换HTML的内容</font>，从而实现UI与用户交互。

优点：
1. 避免了页面的重新加载
2. 对服务器的压力小
3. 前后端职责分离，前端负责页面交互，后端负责数据处理

缺点：
1. 初次加载耗时多。SPA应用需要在页面初次加载时就将JS、CSS同一加载，可以通过路由懒加载实现部分页面按需加载
2. 兼容性差，并不是所有浏览器都支持hash
3. 不利于SEO

### SEO
SEO（搜索引擎优化）是一种了解搜索引擎的运作规则（如何抓取网站页面、如何索引以及如何根据特定的关键字展现搜索结果排序等）来调整网站，以提高该网站在搜索引擎中某些关键词的搜索结果排名。

### SSR（服务器端渲染）
在普通的SPA中，<font color="	#FF6347">一般是将框架及网页代码发送到浏览器，然后在浏览器中生成和操作DOM</font>（这也是第一次访问SPA页面在同等带宽及网络延迟下比传统的在后端生成HTML发送到浏览器要更慢的主要原因），但其实也可以将SPA应用打包到服务器上，在服务器上渲染出HTML，发送到浏览器，这样的HTML页面还不具备交互能力，所以还需要与SPA框架配合，在浏览器上“混合”成可交互的应用程序。

SSR能够在服务端先进行请求渲染，由于服务端进行请求数据的时延较小，能够快速拿到数据并且返回HTML代码。在客户端可以直接渲染数据而不需要花费一些请求数据的时间，这是服务端渲染的好处。返回内容SSR会比普通的SPA在HTML代码中多出首次渲染的结果，这样在初始化的时候直接将页面进行渲染，无需花费时间去请求数据再次渲染。SSR并不是说只在服务端进行渲染，而是说SSR会比普通的客户端渲染多一次在服务端渲染。到浏览器这边，SSR还是需要进行再次初始化React，并且经过生命周期。

**SSR的优势**
- 对SEO友好
- 所有模板、图片等资源都存在服务器端
- 一个html返回所有数据
- 减少HTTP请求
- 响应快、用户体验好、首屏渲染快：首屏发送来的是`html字符串`，不再依赖于js文件了，这就会使用户更快地看到页面的内容，尤其针对大型单页面应用。

**SSR的局限性**
- 服务器压力大：在服务器端渲染会占用CPU资源
- 开发条件受限：在服务器端渲染中，只会执行到componentDidMount之前的生命周期函数。
- 一些常用的浏览器API可能不可以使用，例如：window、document和alert等

### 什么是DOM，什么是BOM
#### DOM对象
DOM是指文档对象模型，它指的是把文档当作一个对象，这个对象主要定义了处理网页内容的方法和接口。在js中提供了`document`对象来对`DOM`操作，js认为网页中的每个标签就是一个对象，使用`面向对象`的思想来操作DOM。

**DOM常见的API**：
- document.getElementById("id");
- document.getElementsByTagName("p");
- document.getElementsByClassName("p");
- document.getELementsByName("name")

#### BOM对象
BOM是浏览器对象，主要定义了和浏览器进行交互的方法和接口。`BOM`的核心是`window`，而`window`对象具有双重角色，<font color="	#FF6347">它既是通过js访问浏览器窗口的一个接口，又是一个全局对象</font>。这意味着在网页中定义的任何对象、变量和函数，都作为`window`的一个属性或者方法存在。

在全局作用域中声明的对象都会变成window对象的属性和方法。

**常用的BOM属性**：
- location对象
    - location.href：返回或设置当前文档的url
    - location.search：返回URL中的查询字符串部分
    - location.port：返回URL中的端口
    - location.hash：返回URL中#后面的部分
- history对象
    - history.go
    - history.back
    - history.forward

### location
location对象包含有关当前的url的信息，它既是`window`的属性也是`document`的属性，我们可以通过改变其属性值修改页面的url。

### history
history对象包含用户访问过的URL，它内置了三个方法可以实现浏览器的前进后退：`history.go`、`history.back`、`history.forward`

`history.replaceState`、`history.push`、`history.pop`

### click在ios上有300ms延迟的原因，应该如何解决
iphone为了能把PC端大屏幕的页面以较好的效果展示在手机屏幕上，采用了双击缩放，浏览器为了区分用户是单机还是双击进行操作，所以设置了300ms的延迟。

- 禁用缩放：将缩放禁用，就没有300ms的延迟了
- FastClick：在检测到touched事件后，立即触发一个模拟click事件，并把浏览器300ms之后真正触发的click事件阻断掉。

# CSS篇
## CSS选择器
 - 通配（*）
 - id选择器（#）
 - 类选择器（.）
 - 标签选择器
 - 相邻选择器（+）
 - 后代选择器(ul li)
 - 子元素选择器（>）
 - 属性选择器（a[href]）

### CSS优先级算法问题
!important > 内联样式 > id > class > 标签 > 通配 

### CSS权重计算
首先我给每个CSS选择器赋一个权重：
 - !important权重为10000
 - 内联样式权重为：1000
 - id为：100
 - class、属性选择器、伪类选择器：10
 - 标签、伪元素选择器：1
 - 通配、后代、子选择器、兄弟选择器：0

然后计算每个样式的权重值，权重大的优先

### 注意事项
1. 继承得到的样式的优先级最低
2. !important的优先级最高
3. 如果权重相同，最后出现的样式生效
4. 样式来源不同时：内联样式 > 内部样式 > 外部样式 > 浏览器用户自定义样式 > 浏览器默认样式

### CSS属性哪些可以继承
常见的有：font-family、font-size、font-style、text-align、line-height、visibility、list-style、opacity等。

 1. 字体系列属性：
    - font：组合字体
    - font-family：规定元素的字体系列
    - font-weight：设置字体的粗细
    - font-size：设置字体的尺寸
    - font-style：定义字体的风格
    - font-variant：设置小型大写字母的字体显示文本，这意味着所有的小写字母均会被转换为大写，但是所有使用小型大写字体的字母与其余文本相比，其字体尺寸更小。

 2. 文本系列属性：
    - text-indent：文本缩进
    - text-align：文本水平对齐
    - line-height：行高
    - word-spacing：增加或减少单词间的空白（即字间隔）
    - letter-spacing：增加或减少字符间的空白（字符间距）
    - text-transform：控制文本大小写
    - direction：规定文本的书写方向
    - color：文本颜色
 3. 元素可见性：visibility
 4. 表格布局属性：
    - caption-side： 指定表格标题的位置
    - border-collapse：设置表格的边框是否被合并为一个单一的边框
    - border-spacing：设置相邻单元格的边框间的距离
    - empty-cells：设置是否显示表格中的空单元格
    - table-layout：为表格设置表格布局算法
 5. 列表属性:
    - list-style-type：设置一些不同的列表样式    
    - list-style-image：指定列表中的列表项标记的图像
    - list-style-position：规定列表中列表项目标记的位置
    - list-style：设置列表属性

### CSS属性哪些不可以继承
常见的有：display、border、padding、background、position等

1. display
2. 文本属性：
    - text-decoration：规定添加到文本的装饰
    - text-shadow：文本阴影效果
    - white-space：空白符的处理
3. 盒子模型的属性：border、padding、margin、width、height
4. 背景属性：background、background-color、background-image、background-repeat
5. 定位属性：position、top、right、bottom等
6. 页面样式属性：size

### display有哪些属性，作用是什么？
  display: none   - 表示该元素不会显示，并且从文档流中移除    
  display: block  - 把某元素转化为块元素，会占一行，<font color="	#FF6347">默认宽度为父元素宽度，可以设置宽高</font>  
  display: inline - 把某元素转化为行内元素，<font color="	#FF6347">默认宽度为内容宽度，不可以设置宽高，同行显示 </font>  
  display: inline-block - 把某元素转化为行内块元素  
  display: list-item - 像块级元素一样显示，但会加上一个标记，例如：  
  ![list-item](https://user-images.githubusercontent.com/70066311/157609326-04ade374-811f-429f-a68a-0ce65da62d21.png)  
  display：table - 将元素当作表格使用，<font color="	#FF6347">默认宽度为父元素宽度，可以设置宽高</font>    
  display: inherit - 继承父元素的display属性

### display的block、inline和inline-block的区别
- block：    
      - <font color="#FF6347">元素表现为块级元素，可以设置宽高，独占一行，若没有设置宽度，则默认填满父级元素的宽度</font>。     
      - <font color="#FF6347">使用padding、margin上下左右都可以产生边距效果</font>。
      - <font color="#FF6347">使用width和height都会生效</font>。
- inline：   
      - <font color="#FF6347">元素表现为行内元素</font>；   
      - <font color="#FF6347">大小完全由内容撑开</font>；   
      - <font color="#FF6347">padding上下左右都有效，但margin只有左右会产生效果，上下不生效</font>。
      - <font color="#FF6347">使用width和height不会生效</font>。
- inline-block：     
      - <font color="#FF6347">对外表现为行内元素，对内表现为块级元素</font>     
      - <font color="#FF6347">可以设置宽高</font>    
      - <font color="#FF6347">使用padding、margin上下左右都可以产生边距效果</font>

### 隐藏元素的方式
1. display:none是彻底消失，<font color="	#FF6347">不在文档流中占位，浏览器也不会解析该元素，不会响应绑定事件，子节点不会继承</font>。  
2. visibility:hidden是视觉上消失了，可以理解为透明度为0的效果，<font color="	#FF6347">在文档流中占位，浏览器会解析该元素，不会响应绑定事件，子节点会继承</font>。  
3. opacity:0将透明度设置为0，以此来实现元素的隐藏，<font color="#FF6347">在文档流中占位，会响应绑定的事件</font>。
4. z-index:负值使其他元素覆盖该元素，实现隐藏。 
5. 将height设为0。<font color="#FF6347">脱离文档流，不会响应绑定的事件</font>。
6. position: absolute。使用绝对定位将元素移到可视区外。
7. transform: scale(0, 0)将元素缩放为0。<font color="#FF6347">在文档流中占位，不会响应绑定的事件</font>。

### display:none与visibility:hidden的区别
两者都是隐藏元素的方式，都不会对事件做出响应，区别在于：
- 使用visibility:hidden比display:none性能更好，<font color="	#FF6347">当display进行切换属性时，页面会发生重排；而visibility切换时不会引起重排，只会引起本元素重绘</font>。
- display:none不可继承，visibility:hidden可以继承
- display:none会让元素完全从渲染树中消失，渲染时不会占据任何空间;visibility:hidden不会让元素从渲染树中消失，渲染的元素还会占据相应的空间，只是内容不可见。

```html
<style>
  div {
    width: 200px;
    height: 200px;
    background-color: pink;
    /* display: none; */
    visibility: hidden;
    
  }
</style>

<div>
  123
</div>
<ul>
  <li>1</li>
  <li>2</li>
  <li>3</li>
</ul>
```

### opacity和rgba的区别
opacity和rgba都可以给元素设置透明度，但不同之处在于：
1. **opacity作用于元素以及元素内的所有内容的透明度**，而**rgba()只作用于元素的颜色和其背景色**
2. **opacity可以被继承，rgba()不会被继承**
```html
<style>
  div {
    width: 200px;
    height: 200px;
    background: rgba(255, 0, 0, 0.5);
    /* opacity: 0.5; */
  }
</style>

<div>
  你好，css
</div>
```

### link和@import的区别
两者都是外部引用CSS的方式，区别如下：
1. link是XHTML标签，除了可以引用CSS还可以引用其他文件；@import只能引用CSS文件
2. link兼容性比@import更好
3. link在引入CSS时，在页面载入的同时进行加载；@import要等页面完全加载完后再加载CSS
4. link可以使用JS控制DOM改变样式；@import不可以。

### transiton和animation的区别
 - transition是过渡属性，在某些时候触发的事件例如输入框得到焦点、失去焦点等。
 - animation是动画属性，它的实现不需要触发事件，设定好时间会自己执行。

## 伪元素和伪类的区别和作用
 - 伪元素：<font color="	#FF6347">在元素的前后插入额外的元素或样式</font>，但这些元素实际上并不在文档中产生，只在外部显示可见，例如：
 ```css
  p::before {content:"第一章：";}
  p::after {content:"Hot!";}
  p::first-line {background:red;}
  p::first-letter {font-size:30px;}
 ```

 - 伪类：将特殊的效果添加到特定选择器上，在已有元素上添加样式，<font color="	#FF6347">不会产生新元素</font>。例如：
 ```css
  a:hover {color: #FF00FF}
  p:first-child {color: red}
 ```

 - 区别：伪类是通过元素选择器加上伪类改变该元素状态；伪元素是增加额外的元素或样式。


## 盒子模型
盒模型规定了网页元素如何显示以及元素之间的相互关系。盒子模型分为标准盒子模型和IE盒子模型，
 - 标准盒子模型包括4个部分：
     margin、border、padding、content
 - IE盒子模型包括2个部分：
     margin、content(padding、border、content)

### 如何转化盒子模型
标准盒子模型：box-sizing: content-box    
IE盒子模型： box-sizing: border-box    
box-sizing默认值为`content-box`，不可继承    

### 两者的区别
 - 标准盒子模型元素的宽度为border * 2 + padding * 2 + content(width)
 - IE盒子模型元素的宽度为border * 2 + padding * 2 > width ? border + padding : width

### li 与 li 之间有看不见的空白间隔是什么原因引起的？如何解决？
浏览器会把`inline`元素间的空白字符（空格、换行、Tab等）渲染成一个空格。在`ul`中，通常是一个`li`占据一行，这导致`li`换行后会产生换行字符，它变成了一个空格，占用了一个字符的宽度。

解决方法：
1. 为`li`设置`float:left`。缺点：`li`中的某些元素可能不能设置浮动。
2. 将`ul`中的`font-size`设为0。缺点：如果`ul`中的其它字符的`fontsize`也被设为0，需要重新设定`font-size`
3. 将`ul`中的字符间隔`letter-spacing`设置为`-8px`，同时设置`li`内的字符间隔为`normal`。

### 超链接访问过后hover样式就不出现的问题
<font color="	#FF6347">被点击访问后的超链接样式不在具有`:hover`和`:active`，解决方法是改变CSS属性的排列顺序：L-V-H-A（LINK-VISITED-HOVER-ACTIVE）</font>

### **CSS3有哪些新特性**
- 边框：border-radius、border-shadow
- 背景：background-origin（设置图像的起始位置）、background-size
- transform：让一个元素在一个坐标系统中缩放
- 线性渐变：linear-gradient
- CSS动画：animation
- rgba
- 字体：text-shadow

### transform
transform可以实现元素的位移、旋转、倾斜、缩放等功能。

#### 移动，translate(x, y)
典型应用，实现水平垂直居中

#### 缩放，scale(x, y)
默认值为1。

```css
transform:scale(0.8, 1.2);
```

表示在水平方向缩小20%，垂直方向方大20%

#### 旋转，rotate(deg)
可以对元素进行旋转，正值为顺时针，负值为逆时针。

```css
transform:rotate(45deg);
```

#### 以何处为中心，transform-origin

```css
transform-origin: top left;
transform: rotate(45deg);
```

### CSS动画
<font color="#FF6347">CSS动画就是元素从一种样式过渡到另一种样式的过程</font>。常见的动画效果很多，比如：平移、缩放、旋转等。CSS实现动画的方式有以下几种：

1. transition：实现渐变动画
2. transform：实现缩放、平移等效果
3. animation：实现自定义动画

#### transition
- property：填写需要变化的CSS属性
- duration：完成过渡效果需要的时间单位(s或者ms)
- timing-function：完成效果的速度曲线，比如：linear（匀速变化）、ease（从慢到快再到慢）、ease-in(慢慢变快)、esae-out（慢慢变慢）等
- delay：动画效果的延迟触发时间

<font color="	#FF6347">并不是所有属性都能过渡，比如display: none 到 display: block</font>。

#### transform
- translate：位移
- scale：缩放
- rotate：旋转
- skew：倾斜

一般配合`transition`过度使用。<font color="	#FF6347">transform不支持inline元素，使用之前把它变为block</font>。

#### animation
|  属性   | 描述  |  属性值 |
|  ----  | ----  | ---- |
| animation-duration  | 指定动画完成的一个周期所需要的时间，单位s或ms，默认为0| |
| animation-timing-function  | 完成动画的速度曲线 | linear、ease、ease-in、ease-out、ease-in-out |
| animation-delay  | 指定动画的延迟时间，即动画何时开始，默认为0| |
| animation-iteration-count  | 指定动画的次数，默认为1 | |
| animation-direction  | 指定动画播放的方向，默认为normal | normal、reverse、alternate、alternate-reverse |
| animation-fill-mode  | 指定动画的填充模式，默认为none | forwards、backwards、both |
| animation-play-state  | 指定动画播放状态，正在运行或暂停。默认是 running | running、pauser |
| animation-name  | 指定动画的名称 | |

CSS动画只需要定义一些关键帧，其余的帧由浏览器根据计时函数插值计算出来。使用`@ketframes`定义关键帧，例如我们想要让元素旋转一圈，只需要定义开始和结束两帧即可：

```css
@keyframes rotate{
  from{
    transform: rotate(0deg)
  }

  to{
    transform: rotate(360deg)
  }
}
```

也可以使用`百分比`来刻画帧
```css
@keyframes rotate{
    0%{
        transform: rotate(0deg);
    }
    50%{
        transform: rotate(180deg);
    }
    100%{
        transform: rotate(360deg);
    }
}
```

### **CSSSprites（精灵图）**
CSSSprites（精灵图），<font color="	#FF6347">将一个页面涉及到的所有图片都包含到一张大图中去，然后利用CSS的 background-image，background-repeat，background-position属性的组合进行背景定位</font>。

优点：
- 可以减少网络请求，提高页面性能
- 占用的字节数更少

缺点：
- 维护麻烦：如果图片中的一小部分需要改动，那么整个合并的图片都要改变。
- 定位复杂：需要借助其他工具来得到图片的准确位置

### **什么是物理像素，逻辑像素和像素密度，为什么在移动端开发时需要用到@3x, @2x这种图片？**
以 iPhone XS 为例，当写 CSS 代码时，针对于单位 px，其宽度为 414px & 896px，也就是说当赋予一个 DIV元素宽度为 414px，这个 DIV 就会填满手机的宽度；

而如果有一把尺子来实际测量这部手机的物理像素，实际为 1242*2688 物理像素；经过计算可知，1242/414=3，也就是说，在单边上，`一个逻辑像素=3个物理像素`，就说这个屏幕的`像素密度为3`，也就是常说的3倍屏。

对于图片来说，为了保证其不失帧，1 个图片像素至少要对应一个物理像素，假如原始图片是 500300 像素，那么在 3 倍屏上就要放一个 1500900 像素的图片才能保证 1 个物理像素至少对应一个图片像素，才能不失真。

### margin 和 padding 的使用场景
- 需要在border外部添加空白，且空白处不需要背景色时，使用margin
- 需要在border内测添加空白，且空白处需要背景色时，使用padding

### line-height的三种赋值方式
1. 单位：使用px为固定值，em会参考父元素font-size值计算自身行高
2. 数字：按比例传给后代，例如父元素行高为1.5，子元素字体为18px，则子元素的行高为1.5 * 18 = 24px
3. 百分比：按计算后的值传给后代

## height和line-height的区别
### height
height是整个盒子的高度
### line-height
- line-height是一行文字的高度，实际上是下一行基线到上一行基线的距离。
- 盒子的高度 = 行数 * 行高。
- 如果一个元素没有定义height，那么最终表现的高度为line-height。
- 如果height === line-height，那么文字会居行中显示。

## <font color="	#FF6347">CSS优化性能的方法</font>
### **<font color="	#FF6347">加载性能</font>**
1. css压缩：将css文件进行打包压缩，减少文件体积
2. 使用单一样式：尽量使用margin-left: 10px这种的单一样式，比使用margin:left 10px效率更高
3. 使用link，少使用@import。因为link是在页面加载的同时进行加载，而@import要等页面加载完后再加载CSS文件

### **<font color="	#FF6347">选择器性能</font>**
1. 关键选择器：尽量使用类、id选择器，少使用标签、后代选择器，<font color="	#FF6347">因为使用标签、后代选择器时，浏览器会遍历所有标签来确定指定的标签</font>。
2. 避免无关的选择器规则
3. 避免使用通配选择器
4. 尽量多使用class
5. 少使用后代选择器，因为这样做会增加选择器的深度，<font color="	#FF6347">后代选择器的开销是最高的</font>
6. 使用可继承的属性，避免重复定义

### **<font color="	#FF6347">渲染性能</font>**
1. 属性值为0时，不要加单位
2. 慎重使用浮动、定位等高性能属性
3. 减少页面的重排、重绘
4. 避免选择器深层嵌套
5. 使用精灵图

### <font color="	#FF6347">可维护性、健壮性</font>
1. 将具有相同属性的CSS代码抽离出来，提高CSS可维护性
2. 将CSS定义到外部文件，做到样式与内容分离

### ::before 和 :after 的双冒号和单冒号有什么区别？
- :用于伪类，::用于伪元素
- ::before就是一个子元素的存在，定义在元素主题内容之前的一个伪元素，并不存在于DOM之中，只存在页面之中

### CSS预处理器
因为传统的CSS结构混乱，可维护性差，编写起来较复杂。     

而Sass、Less等都是CSS预处理器，他们是一种特殊的语法编译成的CSS。可以在CSS中使用变量，函数以及一些简单逻辑的代码。可以让CSS更加简洁、复用性更强、可维护性更高。

- 预处理器结构清晰、便于扩展。
- 可以轻松实现多重继承。 
- 完全兼容 CSS 代码，可以方便地应用到老项目中。
- 使CSS代码复用性更强，可维护性更高。

### CSS后处理器
CSS后处理器如`postCss`通常对已经定义好的CSS进行处理，让其更符合规范，常见的就是给样式添加浏览器私有前缀，使其兼容更多的浏览器。

### 单行、多行文本溢出隐藏
- 单行文本溢出

```css
overflow: hidden
text-overflow: ellipsis
white-space: nowrap   // 绑定段落中的文本不进行换行
```

- 多行文本溢出
```css
overflow: hidden;            // 溢出隐藏
text-overflow: ellipsis;     // 溢出用省略号显示
display:-webkit-box;         // 作为弹性伸缩盒子模型显示。
-webkit-box-orient:vertical; // 设置伸缩盒子的子元素排列方式：从上到下垂直排列
-webkit-line-clamp:3;        // 显示的行数
```

### 媒体查询
当我们在不同的设备上运行我们的程序时，样式不会很好的展现，例如：宽度、高度和颜色等。媒体查询可以针对不同的屏幕尺寸设置不同的样式，当浏览器大小发生变化时，页面也会根据浏览器的宽高重新渲染页面，实现响应式页面。

语法规范：
```css
@media mediatype and|not|only (media feature){
  css-Code
}
```
- 用@media开头
- mediatype媒体类型
- 关键字：and、not、only
- media feature媒体特性

**mediatype**      
媒体类型主要分为：all（用于所有设备）、print（打印设备）、screen（电脑屏幕、平板、手机等）

**媒体特性**
- width：定义输出设备中页面可见区域的宽度
- min-width：定义输出设备中页面最小可见区域宽度
- max-width：定义输出设备中页面最大可见区域宽度

### CSS工程化
CSS工程化主要解决的问题是：
1. CSS如何拆分，如何进行模块化设计
2. 如何使CSS打包结果最优
3. CSS的可维护性

CSS工程化的实践：CSS预处理器、webpack loader

## z-index属性
在有两个重叠的标签时，想要一个在另一个上方或下方出现，z-index的值越大，就越在上层。使用z-index属性需要position属性是relative、absolute或fixed。

z-index属性在下列情况会失效：
1. 若父元素的position为relative，子元素的z-index就会失效
2. 元素的position属性不是relative、absolute或fixed
3. 元素在设置了z-index的同时还设置了float浮动。去除float，改为display:inline-block

### nth-child和:nth-of-type的区别
- nth-child：找出包含对应元素父元素内所有的子元素然后再去找到对应位置的元素后再去匹配选择器
- nth-of-type：找出包含对应元素父元素内的子元素，然后根据样式选择器找到的元素的tag，把父元素内子元素所有对应tag种类分别取出排列后，分别比对对应的位置然后匹配选择器

```html
<!DOCTYPE html>
<html>

<head>
  <style>
    .a:nth-of-type(4) {
      background: #ff0000;
    }

    .a:nth-child(4) {
      background: green;
    }
  </style>
</head>

<body>

  <h1>这是标题</h1>
  <div class="a">div1</div>
  <p>p1特别</p>
  <label class="a">label1</label>
  <div>div2特别</div>
  <div>div2特别的</div>
  <div class="a">div3</div>
  <p class="a">p2</p>
  <label class="a">label2</label>
  <div class="a">div4</div>
  <p class="a">p3</p>
  <label>label3特别</label>
  <div class="a">div5</div>
  <p class="a">p4</p>
  <label class="a">label4</label>
</body>

</html>
```

首先是 `.a:nth-child(4)`：
1. 找到`.a`元素的父元素下的所有子元素，即`body`下的所有子元素
2. 找到第四个元素
3. 再匹配class选择器`.a`，如果匹配到了，就赋予样式

`.a:nth-of-type(4)`：
1. 找到`.a`元素的父元素下的所有子元素，即`body`下的所有子元素
2. 并根据标签进行归类

div组：
```html
<div class="a">div1</div>
<div>div2特别</div>
<div>div2特别的</div>
<div class="a">div3</div>
<div class="a">div4</div>
<div class="a">div5</div>
```

label组：
```html
<label class="a">label1</label>
<label class="a">label2</label>
<label>label3特别</label>
<label class="a">label4</label>

```

p组：
```html
<p>p1特别</p>
<p class="a">p2</p>
<p class="a">p3</p>
<p class="a">p4</p>
```

3. 然后分别对每个type组内找到第4个元素
4. 再匹配class选择器`.a`，如果匹配到了，就赋予样式


### css的弊端
1. CSS是一门非程序化语言，没有变量、函数、作用于等概念
2. 不方便维护，不利于复用
3. 冗余度高
4. CSS没有很好的计算能力

### 如何判断元素是否到达可视区域
![image](https://user-images.githubusercontent.com/70066311/164966495-05ce76c5-e33a-4b92-b2d1-4206197cccdc.png)

- window.innerHeight：浏览器可视区的高度
- document.body.scrollTop || document.documentElement.scrollTop：浏览器滚动过的高度
- imgs.offsetTop：元素顶部距离文档顶部的高度

那么元素到达可视区域的条件就是：`img.offsetTop < window.innerHeight + document.body.scrollTop`

## 常见的CSS布局单位
1. px  
px是页面布局的基础，px是屏幕能显示的最小区域，分为CSS像素和物理像素。
    - css像素是为开发者提供的一个抽象单位
    - 物理像素只与设备的硬件密度有关，任何设备的物理像素都是固定的
2. em和rem  
em和rem都是相对长度单位。em是相对于父元素，rem相对于root。
- em：文本相对长度单位，**相对父元素字体大小的倍数**。相对于当前对象内文本的字体尺寸。如果当前行内文本的字体尺寸未被设置，则相对于浏览器默认字体大小（16px）进行设置。为了简化`font-size`的换算，我们需要在`css`中的`body`选择器中声明`font-size` = `62.5%`，这就使em的值变为`16px * 62.5% = 10px`，这样`1em = 10px`
- rem：**相对于html根元素的字体大小的倍数**。使用rem可以实现响应式布局，当屏幕分辨率发生变化时，元素也随之变化。
3. %  
当浏览器的宽高发生变化时，通过%可以实现响应式效果。<font color="	#FF6347">一般认为子元素的百分比相对于父元素</font>
4. vw和vh  
vw表示相对于视图窗口的宽度，vh表示相对于视图窗口的高度，除了vw和vh之外，还有vmin和vmax两个相关的单位。vmin代表vw和vh之中的较小值，vmax代表较大值。使用vw和vh也可以实现响应式。

vw根据窗口的宽度，分成100等份，`100vw`就表示满宽，`50vw`就表示一半宽。

### vw/vh和%的区别：
- %大部分相对于父元素，也有相对于自身的元素：比如（border-radius、translate）
- vw/vh：相对于视口的尺寸

## px、em、rem的区别及使用场景
### 区别
1. px是固定的像素，一旦设置了就无法根据页面的宽度变化做出动态调整
2. em和rem相对于px有更高的灵活性，他们是相对长度单位，其长度不固定，更适用响应式布局。
3. em相对父元素设置字体大小，这就有个问题：<font color="#FF6347">进行任何元素设置，都需要知道它父元素的大小</font>，而rem只需要知道根元素的大小。

### 使用场景：
1. 对于只需要适配少数移动设备，且分辨率对页面影响不大的，使用px即可。
2. 对于需要适配各种移动设备，就用rem。

## 一个盒子不给宽高如何水平居中
方法一：使用弹性布局

```html
 <style>
   .container {
     width: 200px;
     height: 200px;
     border: 5px solid gray;
     /* 第一种方式：弹性布局 */
     display: flex;
     /* justify-content属性定义了项目在主轴上的对齐方式 */
     justify-content: center;
     /* align-items属性定义项目在交叉轴上如何对齐。 */
     align-items: center;
   }

   .content {
     background-color: brown;
   }
 </style>

 <div class="container">
   <div class="content">123</div>
 </div>    
```

方法二：使用绝对定位
```html
  <style>
    * {
      padding: 0;
      margin: 0;
    }

    .container {
      width: 200px;
      height: 200px;
      border: 5px solid gray;

      /* 第一种方式：弹性布局 */
      /* display: flex; */
      /* justify-content属性定义了项目在主轴上的对齐方式 */
      /* justify-content: center; */
      /* align-items属性定义项目在交叉轴上如何对齐。 */
      /* align-items: center; */

      /* 第二种方式：使用绝对定位 */
      position: relative;
    }

    .content {
      background: brown;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  </style>
```

## CSS布局
### **table布局**
table的特性决定了它非常适合用来做布局，表格中的内容可以自动居中。但table局部有很多缺点：
1. <font color="#FF6347">比其他HTML标签占更多的字节，造成下载时间延迟，占用服务器更多资源</font>
2. <font color="#FF6347">阻挡浏览器渲染引擎的渲染顺序，延迟页面的加载速度</font>

### **flex布局**
**1. 盒模型**    
- 标准盒子模型：width = 2 * border + 2 * padding + content
- IE盒子模型：width = 2 * border + 2 * padding > content ? border * 2 + padding * 2 : content

**2. display/position**
display：
- block：    
      - <font color="#FF6347">元素表现为块级元素，可以设置宽高，独占一行，若没有设置宽度，则默认填满父级元素的宽度</font>。     
      - <font color="#FF6347">使用padding、margin上下左右都可以产生边距效果</font>。
- inline：   
      - <font color="#FF6347">元素表现为行内元素</font>；   
      - <font color="#FF6347">不能设置宽高，大小完全由内容撑开</font>；   
      - <font color="#FF6347">padding上下左右都有效，但margin只有左右会产生效果，上下不生效</font>。
- inline-block：     
      - <font color="#FF6347">对外表现为行内元素，对内表现为块级元素</font>     
      - <font color="#FF6347">可以设置宽高</font>    
      - <font color="#FF6347">使用padding、margin上下左右都可以产生边距效果</font>

**inline-block与浮动**
不同点：<font color="#FF6347">inline-block不会脱离文档流；浮动会脱离文档流</font>。
相同点：<font color="#FF6347">可以达到一样的效果</font>。


position：
- static：<font color="#FF6347">没有定位，存在于正常的文档流中</font>
- relative：<font color="#FF6347">相对元素本来的位置进行偏移，其偏移后，原来的位置仍然占据空间</font>
- absolute：<font color="#FF6347">脱离文档流，相对于第一个不是static的父元素进行定位</font>
- fixed：<font color="#FF6347">脱离文档流，固定定位，相对于浏览器窗口进行定位</font>

static不可以设置z-index。    

**3. flex布局（弹性盒子布局）**     
任何容器都可以指定为flex布局。采用flex布局的元素，称为flex容器，它的所有子元素自动成为容器成员。

![image](https://user-images.githubusercontent.com/70066311/161722952-f8e30262-53e0-4ee5-8911-64a3ab607dee.png)

容器默认存在两根轴，<font color="#FF6347">水平的主轴和垂直的交叉轴</font>。

**flex容器**有6个属性：
- flex-direction：<font color="#FF6347">决定主轴方向的排列</font>

![image](https://user-images.githubusercontent.com/70066311/161723235-b8eda26f-1225-492f-b3b4-bc8db7625f17.png)

- flex-wrap：默认情况下，项都排列在一条直线上。<font color="#FF6347">而该属性定义如果排列不下，该如何换行</font>。

![image](https://user-images.githubusercontent.com/70066311/161723699-b60322b1-d78f-41fd-a907-6c8f9c028c82.png)
nowrap：不换行     
wrap：换行，第一行在上方：

![image](https://user-images.githubusercontent.com/70066311/161723822-ccfd4fd7-40ca-47bb-bb31-0b829d3be4c6.png) 
wrap-reverse：换行，第一行在下方：

![image](https://user-images.githubusercontent.com/70066311/161724323-64fa817c-2ca8-4c71-9a17-4a1134f9d56f.png)

- flex-flow：是flex-direction属性和flex-wrap属性的简写形式，默认值为row nowrap

- justify-content：定义了项目在主轴上对齐的方式

![image](https://user-images.githubusercontent.com/70066311/161724697-1c9f09cc-b935-49eb-9f22-042c4c387d63.png)

space-between：两端对齐，项目之间的间隔都相等。

space-around：每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。

- align-item：定义项目在交叉轴上如何对齐

![image](https://user-images.githubusercontent.com/70066311/161724975-4a4ff18b-f619-48f9-8eb3-d9dca5409b5b.png)

stretch（默认值）：如果项目未设置高度或设为auto，将占满整个容器的高度。

- align-content：定义了多根轴线的对齐方式，如果只有一根轴线，则该属性不起作用

![image](https://user-images.githubusercontent.com/70066311/161726025-401fa82b-4290-4662-95ef-b53c6be84260.png)

**子项**的6个属性：
- order：数值越小，排列越靠前

![image](https://user-images.githubusercontent.com/70066311/161726640-59d02e21-b97e-4236-9546-a59d92b53251.png)

- flex-grow：定义项目放大的比例，默认为0。<font color="#FF6347">如果所有项目的flex-grow属性都为1，则它们将等分剩余空间（如果有的话）。如果一个项目的flex-grow属性为2，其他项目都为1，则前者占据的剩余空间将比其他项多一倍</font>。

![image](https://user-images.githubusercontent.com/70066311/168708588-49f9e071-0ec1-4767-b585-55f3248fd7b0.png)


- flex-shrink：定义项目缩小的比例，默认为1。<font color="#FF6347">如果一个项目的flex-shrink属性为0，其他项目都为1，则空间不足时，前者不缩小</font>。负值对该属性无效。

![image](https://user-images.githubusercontent.com/70066311/168708630-d9261625-12a6-43d8-8b92-d934a8d2e78c.png)

- flex-basis：在计算剩余空间之前设置子项的基础宽度。

- flex：<font color="#FF6347">flex属性是flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto。后两个属性可选</font>。该属性有两个快捷值：<font color="#FF6347">auto (1 1 auto) 和 none (0 0 auto)</font>。

- align-self：align-self属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch。

### Grid布局
Grid布局将网页划分为一个个网格，可以任意组合不同的网格，做出各种各样的布局。<font color="#FF6347">使用display: grid指定网格布局</font>。默认情况下，容器元素都为块级元素，也可以设置为行内元素。<font color="#FF6347">使用display: inline-grid指定行内网格布局</font>。

**划分行列**
- grid-template-colums：定义每一列的列宽
- grid-template-rows：定义每一行的行高

**实现一个九宫格布局：**
```html
  <style>
    .container {
      display: grid;      
      /* grid-template-columns: 100px 100px 100px;
      grid-template-rows: 100px 100px 100px; */

      /* 除了使用绝对单位，也可以使用百分比 */
      /* grid-template-columns: 33.33% 33.33% 33.33%;
      grid-template-rows: 33.33% 33.33% 33.33%; */

      /* 可以使用repeat函数简化重复值 */
      grid-template-columns: repeat(3, 33.33%);
      grid-template-rows: repeat(3, 33.33%);

    }
  </style>
  
  <div>foo</div>
  <div class="container">
    <div class="item">1</div>
    <div class="item">2</div>
    <div class="item">3</div>
    <div class="item">4</div>
    <div class="item">5</div>
    <div class="item">6</div>
    <div class="item">7</div>
    <div class="item">8</div>
    <div class="item">9</div>
  </div>
  <div>bar</div>
```

**网格间隔**
- row-gap：行间隔
- column-gap：列间隔
- gap：上述两个的简写形式

**项目排序顺序**
- grid-auto-flow：默认值为row，先行后列。
- grid-auto-flow还可以设置为<font color="#FF6347">row dense和column dense</font>，表示某些项目指定位置后，剩余项目如何放置。


**justify-items、align-items**    
- justify-items属性设置单元格内容的水平位置（左中右）
- align-items属性设置单元格内容的垂直位置（上中下）

这两个属性的写法完全相同，都可以取下面这些值。
- start：对齐单元格的起始边缘
- end：对齐单元格的结束边缘
- center：单元格内部居中
- stretch：拉伸，占满单元格的整个宽度（默认值）

place-items属性是align-items属性和justify-items属性的合并简写形式。

```html
place-items: <align-items> <justify-items>;
```

**justify-content、align-content**
- justify-content属性是整个内容区域在容器里面的水平位置（左中右）
- align-content属性是整个内容区域的垂直位置（上中下）

- start
- end
- center
- stretch
- space-around
- space-between
- space-evenly：<font color="#FF6347">项目与项目的间隔相等，项目与容器边框之间也是同样长度的间隔</font>。

place-content属性是align-content属性和justify-content属性的合并简写形式。
```html
place-content: <align-content> <justify-content>
```

**grid-auto-columns、grid-auto-rows**     
有时候，项目的指定位置，在现有网格的外部。比如网格只有3列，但某一个项目指定在第5行，这时，浏览器会生成多余的网格，以便放置项目。
<font color="#FF6347">grid-auto-columns、grid-auto-rows属性就是用来设置浏览器自动生成网格的宽高的。如果不指定，浏览器会根据内容大小，决定新增网格的大小</font>。

**grid-template、grid**    
- grid-template属性是grid-template-columns、grid-template-rows和grid-template-areas这三个属性的合并简写形式
- grid属性是grid-template-rows、grid-template-columns、grid-template-areas、 grid-auto-rows、grid-auto-columns、grid-auto-flow这六个属性的合并简写形式

### **响应式布局**
响应式布局就是一个网站同时能兼容多个终端。通过对不同宽度进行布局和样式的设置，从而适配不同设备的目的。

|  设备划分   | 尺寸区间  |
|  ----  | ----  |
| 超小屏幕（手机）  | <768px |
| 小屏设备（平板）  | >=768 and <992px |
| 中等屏幕（桌面显示器）  | >=992px and <1200px |
| 宽屏设备（大桌面显示器）  | >=1200px |

优点：
1. 面对不同分辨率设备灵活性强
2. 能够快捷解决多设备显示适应问题

缺点：
1. 不能兼容所有浏览器
2. 加载时间长
3. 一定程度上改变了网站原有的布局结构，使用户混淆

响应式布局分为三个部分：
- 流式布局
- 媒体查询
- 响应式布局

1. 流式布局（百分比布局）。元素的宽高定位等属性都以百分数参照父标签的属性来设定。常见的布局单位有：%、em、rem。

2. 媒体查询。使用@media查询，可以针对不同的媒体类型定义不同的样式。

3. 响应式布局：常见的响应式布局为两栏布局、三栏布局

使用rem可以实现响应式布局。<font color="#FF6347">rem 指的是 html 元素的 font-size，html 元素的 font-size 默认是 16px，所以 1 rem = 16px；然后根据 rem 来计算各个元素的宽高</font>。

### 双飞翼布局与圣杯布局
圣杯布局和双飞翼布局是前端工程师需要日常掌握的重要布局方式。两者的功能相同，都是为了实现一个两侧宽度固定，中间宽度自适应的三栏布局。

**特点：**

1. 两侧宽度固定，中间宽度自适应（三栏布局）
2. <font color="#FF6347">中间部分在DOM结构上有限，以便先行渲染</font>
3. 允许三列中的任意一列成为最高列
4. 只需要使用一个额外的div标签

**圣杯布局：**    
DOM结构：
```html
<div class="header"></div>
<div class="container">
  <div class="center"></div>
  <div class="left"></div>
  <div class="right"></div>
</div>
<div class="footer"></div>
```
首先定义出整个布局的DOM结构，主体部分是由`container`包裹的`center,left,right`三列，其中`center`定义在最前面。

CSS代码：
假设左侧的固定宽度为`200px`，右侧的固定宽度为`150px`，则首先在`container`上设置：
```css
#container {
  padding-left: 200px;
  padding-right: 200px;
}
```
为左右两列预留出相应的空间，得到如下示意图：

![image](https://user-images.githubusercontent.com/70066311/161888533-8d9fe687-4adb-4fe4-86e6-09935258c632.png)

随后分别为三列设置宽度与浮动，同时对`footer`设置清除浮动：

```css
#container .column {
  float: left;
}

#center {
  width: 100%;
}

#left {
  width: 200px; 
}

#right {
  width: 150px; 
}

#footer {
  clear: both;
}
```

得到如下效果：

![image](https://user-images.githubusercontent.com/70066311/161889070-724b8b8a-5178-47a3-9036-8cf772ba86ae.png)

根据浮动的特性，由于`center`的宽度为`100%`，即占据了第一行的所有空间，所以`left`和`right`被“挤”到了第二行。

接下来的工作是将`left`放置到之前预留出的位置上，这里使用<font color="#FF6347">负外边距（nagetive margin）</font>：
```css
#left {
  width: 200px; 
  margin-left: -100%;
}
```

得到：

![image](https://user-images.githubusercontent.com/70066311/161889254-473b86bc-59fb-41fc-b6f8-21d7bea4dc48.png)

随后还需要使用定位(position)方法：
```css
#left {
  width: 200px; 
  margin-left: -100%;
  position: relative;
  right: 200px;
}
```

这里使用`position: relative`和`right: 200px`将`left`的位置在原有位置基础上`左移200px`，以完成`left`的放置：

![image](https://user-images.githubusercontent.com/70066311/161889588-6ef63bc4-fea1-4b99-9a6e-51423d1722ac.png)

接下来放置`right`，只需添加一条声明即可：
```css
#right {
  width: 150px; 
  margin-right: -150px; 
}
```

得到最终的效果图：

![image](https://user-images.githubusercontent.com/70066311/161890580-30d5b27f-65bd-4907-aa8a-3aacc6e0b494.png)

最后，<font color="#FF6347">为了保证布局效果的正常显示，我们要给页面设置一个最小宽度</font>。由于两侧都有固定宽度，而`left`使用了`position: relative`，所以就意味着在`center`开始的区域，还存在着一个`left`的宽度。所以页面的最小宽度应该设置为<font color="#FF6347">200+150+200=550px</font>：
```css
body {
  min-width: 550px;
}
```

**双飞翼布局**：    

**DOM结构**
```html
<body>
  <div id="header"></div>
  <div id="container" class="column">
    <div id="center"></div>
  </div>
  <div id="left" class="column"></div>
  <div id="right" class="column"></div>
  <div id="footer"></div>
<body>
```

双飞翼布局的DOM结构与圣杯布局的区别是<font color="#FF6347">用`container`仅包裹住`center`，另外将`.column`类从`center`移至`container`上</font>。

**CSS：**
按照与圣杯布局相同的思路，首先设置各列的宽度与浮动，并且为左右两列预留出空间，以及为`footer`设置浮动清除：

```css
    .column {
      float: left;
    }

    #container {
      width: 100%;
    }

    #center {
      margin-left: 200px;
      margin-right: 150px;
      background: cadetblue;
    }

    #left {
      width: 200px;
      background-color: coral;
    }

    #right {
      width: 150px;
      background-color: skyblue;
    }

    #footer {
      clear: both;
      background-color: beige;
    }

    #header {
      background-color: brown;
    }
```

得到如下效果图：

![image](https://user-images.githubusercontent.com/70066311/161898073-bb8752e9-2dec-4f5b-9d96-a65debf42ebb.png)

将`left`放置到预留位置：
```css
#left {
  width: 200px; 
  margin-left: -100%;
}
```

得到：

![image](https://user-images.githubusercontent.com/70066311/161898592-bc4a7e91-a267-486f-a750-686e3cbedbf8.png)

将`right`放置到预留位置：
```css
#right {
  width: 150px; 
  margin-left: -150px;
}
```

得到

![image](https://user-images.githubusercontent.com/70066311/161898653-8f723506-5760-4d31-8ea9-ec7e269a6353.png)

最后计算最小页面宽度：由于双飞翼布局没有用到`position:relative`进行定位，所以最小页面宽度应该为`200+150=350px`。<font color="#FF6347">但是当页面宽度缩小到350px附近时，会挤占中间栏的宽度，使得其内容被右侧栏覆盖</font>，如下所示：

![image](https://user-images.githubusercontent.com/70066311/161898917-8202629f-2084-44de-b987-8d7060d677e1.png)

因此在设置最小页面宽度时，应该适当增加一些宽度以供中间栏使用（假设为150px），则有：
```css
body {
  min-width: 500px;
}
```

**对比圣杯布局和双飞翼布局**
- 圣杯布局结构上更加自然和直观，在平时的开发中更容易形成这样的布局结构；
- 双飞翼布局由于不使用定位，所以更加简洁，允许页面的最小宽度小于圣杯布局。

## 定位于浮动
### 为什么要清除浮动？清除浮动的方式
**浮动**：容器不设高度且子元素浮动时，容器高度不能被内容撑开。此时，内容会溢出到容器外面而影响布局，这种现象被称为浮动（溢出）。

**浮动的工作原理**：
- 浮动元素会脱离文档流，不占据空间（引起高度塌陷问题）
- 浮动元素碰到包含它的边框或其它浮动元素的边框会停留

<font color="#FF6347">浮动元素可以左右移动，直到遇到另一个浮动元素或者遇到它外边缘的包含框。浮动框不属于文档流中的普通流，当元素浮动之后，不会影响块级元素的布局，只会影响内联元素布局。此时文档流中的普通流就会表现得该浮动框不存在一样的布局模式。当包含框的高度小于浮动框的时候，此时就会出现“高度塌陷”</font>

**浮动元素引起的问题**：
- 父元素的高度无法被撑开，影响与父元素同级的元素
- 与浮动元素同级的非浮动元素会跟随其后
- 若浮动的元素不是第一个元素，则该元素之前的元素也要浮动，否则会影响页面的显示结构

**清除浮动的方式**：
- 给父元素定义height属性
- 给最后一个浮动元素之后添加一个空的div，并添加`clear: both`样式
- BFC
- 使用`:after`伪元素

### 使用clear清除浮动的原理
clear属性：元素的边不能和前面的浮动元素相邻，对元素设置clear属性是为了避免浮动元素对该元素的影响，而不是清除掉浮动。考虑到float属性要么是left，要么是right，不可能同时存在。

由于clear属性对“后面的”浮动元素不闻不问，因此，当clear:left有效的时候，clear:right必定无效，也就是此时clear:left等同于设置clear:both；同样地，clear:right如果有效也是等同于设置clear:both。由此可见，clear:left和clear:right这两个声明就没有任何使用的价值。

一般使用`伪元素`的方式清除浮动：
```css
.clear::after{
  display: block;
  clear: both;
  content: '';
}
```

<font color="#FF6347">clear属性只有块级元素才有效，而::after等伪元素默认都是内敛元素，所以需要使用**display:block**</font>

### BFC规范
BFC(块级格式化上下文)就是页面上一个独立的容器，在容器中按照一定规则拜访元素，里面的元素不会影响到容器外面的元素。如果一个元素符合触发BFC的条件，那么BFC的元素布局不受外部影响。

### 如何创建BFC
- float的值不为none
- position的值为absolute或者fixed
- overflow的值为hidden、auto、scroll
- display的值为inline-block、table-cell、flex、table-caption

### BFC布局规则
- BFC内部垂直方向上，自上而下排列，和文档流的排列方式一致
- 元素垂直方向的距离由margin决定，属于同一个BFC的两个相邻元素的margin会发生重叠
- 计算BFC的高度时，浮动元素也参与计算
- 每个元素的左margin值与容器的左border相接触
- BFC内浮动元素不会发生重叠

### BFC解决的问题
- margin重叠
- 高度塌陷
- 两栏布局
- 文字环绕

### margin重叠
margin重叠就是两个块级元素的上下外边距会合并为一个外边距，这个外边距取值为两个元素上下外边距值较大的那个，重叠只会出现在`垂直方向`。<font color="#FF6347">浮动元素和绝对定位元素这种脱离文档流的元素的外边距不会重叠</font>。

### 解决margin重叠问题
- 兄弟之间重叠：
    - 底部元素变为行内元素：`display: inline-block`
    - 底部元素设置为浮动: `float: left`
    - 底部元素的position的值为`absolute/fixed`
- 父子之间重叠：
    - 父元素加入：`overflow:hidden`
    - 父元素添加透明边框：`border: 1px solid transparent`
    - 子元素变为行内元素：`display: inline-block`
    - 子元素加入浮动或定位

 ### :before 和 :after
 :before 和 :after 的主要作用是在元素内容前后加上指定内容

 可以使用:after来清除浮动，例如：
 ```html
   <style>
    * {
      padding: 0;
      margin: 0;
    }

    ul {
      border: 5px solid black;
    }

    ul:after {
      content: '';
      display: block;
      /* 清除左右两边浮动 */
      clear: both;   
    }

    ul li {
      width: 200px;
      height: 200px;
      background-color: orange;
      float: left;
    }
  </style>

  <ul>
   <li>1</li>
   <li>2</li>
   <li>3</li>
  </ul>
 ``` 

### position有哪些值，分别根据什么定位
- position: static; - 默认值，没有定位，遵循正常的文档流对象
- position: fixed;   - 固定定位，相对于窗口定位，不管浏览器怎么滚动。<font color="#FF6347">会导致其他元素位置发生变化</font>
- position: relative;   - 相对于自身原本的位置进行定位，不脱离文档流
- position: absolute;   - 浏览器会递归查询该元素的所有父元素，如果找到了一个设置了`position: relative/absolute/fixed`的父元素，就以该元素为基准定位；如果没有找到，就以浏览器边界定位

### absolute和fixed的区别
共同点：
- 脱离了文档流，不再占据文档流空间
- 会覆盖非定位的文档元素
- 改变元素的呈现方式，将元素的display设置为inline-block

不同点：
- absolute和fixed的根元素不同：absolute的根元素可以设置，而fixed的根元素是浏览器
- fixed会固定在页面的具体位置，absolute会进行移动

### reset.css
reset是一个css文件，可以重置css样式

### Normalize.css
Normalize.css：可以增强跨浏览器渲染的一致性

## 重绘与重排
### 重排
<font color="	#FF6347">当DOM的变化引起了元素几何属性的变化时</font>，比如：改变元素的宽高、元素的位置等，导致浏览器不得不重新计算元素的几何属性，并重新构建渲染树，这个过程为重排

### 重绘
完成重排后，将重新构建的渲染树渲染到页面上，这个过程称为重绘。  

<font color="	#FF6347">重排负责元素的几何属性更新，重绘负责元素的样式更新。重排必然会带来重绘，但重绘不一定带来重排，例如改变背景颜色，不会引起重排，但会带来重绘。</font>

### 什么情况会触发重绘重排
1. 页面首次渲染时
2. 页面元素大小改变时
3. 字体，背景色改变时
4. 进行DOM操作时
5. 浏览器窗口大小发生变化时
6. 元素位置发生变化时

### 如何减少重绘和重排
1. 避免频繁操作DOM。在操作DOM时，尽量在底层的DOM节点进行操作
2. 不要使用table布局，因为一个小改动都可能会引起table进行重新布局
3. 不要频繁操作元素样式
4. 使用absolute和fixed，使元素脱离文档流，这样他们的变化会不会影响其他元素
5. 可以使用display: none，操作结束后再把它显示出来，因为在display: none的元素上进行操作不会引起重绘和重排
6. 将DOM的多个读操作或写操作放在一起，而不是多个读写操作穿插着写。这得益于浏览器的渲染队列机制

### CSS如何针对不同浏览器做适应
1. 做浏览器CSS样式初始化，常见的做法是引入`reset.css`或`Normalize.css`。最好不要使用`*`来重置CSS样式，因为会影响效率。
2. 添加浏览器私有属性，比如`-webkit-`、`-moz-`、`-ms-`

### CSS哪些属性不被IE兼容
1. inherit
2. outline。在调试CSS时，我们经常会给元素加上border属性来更加精确的查看元素发生了什么样的变化。但如果是块级元素，添加边框会影响到布局，会让整个元素的宽度额外增加。<font color="	#FF6347">而outline可以在不影响文档流的情况下呈现该元素</font>
3. :hover
4. :focus
5. display的inline-block

### font-size在不同浏览器中兼容性问题
<font color="#FF6347">CSS在浏览器表现的运用，例如font-size、盒模型</font>
在css中使用font-size设定字体大小，不同浏览器的字体`height`是一样的，但是`width`不同，比如在火狐和谷歌中，`font-size: 20px`字体中的高度为20px，但是谷歌的字体宽度比火狐长。

解决方法如下：
1. 将浏览器的基准字号设置为`62.5%`，也就是`10px`，现在`1rem=10px`。然后在`body`上应用`font-size: 2rem`，那么现在`body`的字体大小就是`20px`。
```css
html{
  font-size: 62.5%
}

body{
  font-size: 2rem
}
```

2. 在html中使用calc()函数

场景：在大小为360px的设计稿中放一个宽度为100px的元素
```css
html{
    font-size:calc((100vw / 360) * 100);
}
```

- 100vw：是浏览器视口宽度
- 360：ui设计图的宽度

加入现在有一个`button`，宽度为180px，那么在任何尺寸的移动设备上，宽度都要占一半。所以`button`的`width`不能写死，要使用`rem`来动态设置`width`。默认情况下根元素的`font-size`大小是`16px`，我们要根据html设置的`font-size`的大小，利用`rem`动态设置元素的宽度。

例如：
```
在1080px的界面上，按钮宽度为：180rem = (1080 / 360) * 180（这个180是button的宽度） = 540px
在750px的界面上，按钮宽度为：180rem = (750 / 360) * 180 = 375px
```

# JS
## JS基础
### **JS有哪些数据类型**
JS中有Undefined、Null、Object、Number、String、Boolean、Symbol、BigInt。  
- Symbol代表创建后独一无二且不可变的数据类型，它主要是为了解决<font color="#FF6347">可能出现的全局变量冲突问题</font>。

```js
let genericSymbol = Symbol();
let otherGenericSymbol = Symbol();
console.log(genericSymbol == otherGenericSymbol); // false

let fooSymbol = Symbol('foo');
let otherFooSymbol = Symbol('foo');
console.log(fooSymbol == otherFooSymbol); // false
```

- BigInt是一种数字类型的数据，他可以表示任意精度格式的整数，使用BitInt可以<font color="#FF6347">安全的存储和操作大整数</font>，即使这个数已经超出了Number能够表示的安全整数范围。

这些数据类型可以分为：
- 原始数据类型：null、undefined、Number、String、Boolean、Symbol，存储在栈
- 引用数据类型：<font color="#FF6347">Object、数组、函数、`date`和`正则表达式`</font>，存储在堆

### 原始数据类型和引用数据类型的区别在于<font color="#FF6347">存储位置不同</font>
- 原始数据类型因为简单，占用空间小，频繁使用，所以放在栈中存储。
- 引用数据类型大小不固定，占用空间大，如果存储到栈中，会影响性能。<font color="#FF6347">引用数据类型在栈中存放指向堆的指针，在需要使用该值时，js会先在栈中寻找指向堆内存地址的指针，然后获得堆中的实体</font>。

### **数据类型检测方法**
1. typeof
```js
console.log(typeof 2);               // number
console.log(typeof true);            // boolean
console.log(typeof 'str');           // string
console.log(typeof []);              // object    
console.log(typeof function(){});    // function
console.log(typeof {});              // object
console.log(typeof undefined);       // undefined
console.log(typeof null);            // object
```

2. instacneof
instacneof可以正确判断对象的类型，<font color="#FF6347">其内部运行机制是判断实例的原型链中是否能找到该类型的原型</font>。

也就是<font color="#FF6347">右边变量的prototype在左边变量的原型链上即可。因此instanceof会依次遍历左边变量的原型链，直到找到右边变量的prototype属性为止</font>。

instacneof只能判断引用数据类型，不能判断原始数据类型。
```js
console.log(2 instanceof Number);                    // false
console.log(true instanceof Boolean);                // false 
console.log('str' instanceof String);                // false 
 
console.log([] instanceof Array);                    // true
console.log(function(){} instanceof Function);       // true
console.log({} instanceof Object);                   // true
```

3. constructor
```js
console.log((2).constructor === Number); // true
console.log((true).constructor === Boolean); // true
console.log(('str').constructor === String); // true
console.log(([]).constructor === Array); // true
console.log((function() {}).constructor === Function); // true
console.log(({}).constructor === Object); // true
```

4. Object.prototype.toString.call()
使用Object的原型方法`toString`来判断数据类型

```js
var a = Object.prototype.toString;
 
console.log(a.call(2));
console.log(a.call(true));
console.log(a.call('str'));
console.log(a.call([]));
console.log(a.call(function(){}));
console.log(a.call({}));
console.log(a.call(undefined));
console.log(a.call(null));
```

### 四种判断类型的区别
1. typeof方法存在判断类型不准确的情况，例如数组、对象、null都会被判断为object
2. instanceof只能判断引用数据类型，不能判断基本数据类型
3. 如果改变了一个对象的原型，那么constructor方法就不能用来判断数据类型了
4. Object.prototype.toString可以准确的比较数据类型

### null和undefined的区别
null和undefined都是基本数据类型，区别在于

- null：是一个空对象，一般赋值给那些可能返回数据的变量，作为初始化；undefined：未定义的变量，一般变量声明了但没有定义会返回undefined
- 数据类型不同：null的数据类型是Object；undefined的数据类型是undefined
- 相等性判断时不同：== 比较时返回true，因为规范中提到， **要比较相等性之前，不能将 null 和 undefined 转换成其他任何值**，并且规定null 和 undefined 是相等的；===比较时返回false，因为数据类型不同
- 转化成数字的值不同：null转换为0；undefined转化为NaN

undefined在JS中并不是一个保留字，这意味着可以使用`undefined`来作为变量名，但这样做是十分危险的，因为<font color="#FF6347">会影响对undefined值的判断</font>。为了安全起见，可以使用`void 0`代替undefined。

### 为什么0.1+0.2 ! == 0.3，如何让其相等
```js
console.log(0.1 + 0.2)   // 0.30000000000000004
```

计算机是通过二进制进行存储数据的，而0.1和0.2的二进制都是无限循环的数。在JS中，只有一种数字类型Number。它的实现<font color="#FF6347">遵循了IEEE 754标准</font>，使用64位固定长度来表示，也就是标准的double双精度浮点数。而在二进制中，小数部分最多保留52位，剩余的部分要舍去，遵循”0舍1入的原则“。

简单来说，<font color="#FF6347">0.1和0.2的小数部分用二进制表示都是一个无限循环的数字，在计算机中最多保留了52位，所以将0.1与0.2相加不等于0.3</font>。

解决方法：
1. 采用四舍五入保留小数的函数
```js
// 四舍五入保留一位小数  
console.log((0.1 + 0.2).toFixed(1))   // 0.3
```

2. 对精度进行判断
设置一个误差范围，通常称为“机器精度”。对JavaScript来说，这个值通常为2 ** -52，在ES6中，提供了Number.EPSILON属性，而它的值就是2 ** -52，只要判断0.1+0.2-0.3是否小于Number.EPSILON，如果小于，就可以判断为0.1+0.2 ===0.3
```js
function numberepsilon(arg1,arg2){                   
  return Math.abs(arg1 - arg2) < Number.EPSILON;        
}        

console.log(numberepsilon(0.1 + 0.2, 0.3)); // true
```

### 如何获取安全的undefined值
因为undefined不是一个js的字面量，所以可以用来当作变量，但这样会影响正常的undefined的判断。如果想获得安全的undefined的值，可以使用<font color="#FF6347">void</font>。<font color="#FF6347">void并不改变表达式的结果，只是让表达式不返回值，因此可以用**void 0**来获得undefined</font>。

### typeof NaN的结果是什么
NaN代表<font color="#FF6347">**不是一个数字**</font>，指在数字类型的运算中发生错误的情况。<font color="#FF6347">NaN与自身不相等，是唯一一个非自反值</font>。
```js
console.log(typeof NaN);   // number
console.log(NaN !== NaN);   // true
```

### isNaN和Number.isNaN的区别
<font color="#FF6347">isNaN本意是通过Number方法把参数转换成数字类型，如若转换成功，则返回false，反之返回true，它只判断参数是否会转换为数字</font>。

而Number.isNaN用来严格判断传入的值是否等于NaN，<font color="#FF6347">它首先会判断传入的值是否为数字类型，如果不是，直接返回false</font>。

```js
const a = 2
console.log(isNaN(a));    // false
console.log(Number.isNaN(a));    // false

const b = "b2"
console.log(isNaN(b));   // true
console.log(Number.isNaN(b));    // false
```

### ==的判断流程
1. 首先判断两者的类型是否相同，不相同则进行类型转换
2. 判断是否是null与undefined进行比较，是的话返回true  (null == undefined，而null !== undefined)
3. 判断两者类型是否为string和number，如果是则将string转换为number
```js
1 == '1'
      ↓
1 ==  1
```
4. 判断两者是否有boolean，有的话就把boolean转换为number进行比较
```js
'1' == true
        ↓
'1' ==  1
        ↓
 1  ==  1
```
5. 判断两者是否有一者是object且另一方为string、number或symbol，如果是就把object转为原始类型再进行判断
```js
'1' == { name: 'js' }
        ↓
'1' == '[object Object]'
```

![image](https://user-images.githubusercontent.com/70066311/163975853-4d06fe0a-c818-45aa-9d53-a5c695ed54dd.png)

### **Object.is()与比较操作符"==="、"=="的区别**
- "=="：如果两边类型不一致，会转换类型再做比较
- "==="：如果两边类型不一致，直接返回false
- Object.is()：与 "===" 判断相同，但<font color="#FF6347">-0与+0不再相等，两个NaN是相等的</font>。

### <font color="#FF6347">数组的常用方法</font>
**增**     
- push，会对数组产生影响
- unshift，会对数组产生影响
- splice，会对数组产生影响
- concat，不会对数组产生影响

push()方法接收任意数量的参数，并将它们添加到数组的末尾，返回数组的最新长度。

```js
let colors = []; // 创建一个数组
let count = colors.push("red", "green"); // 推入两项
console.log(count) // 2
```

unshift()方法在数组的开头添加任意多个值，返回数组的最新长度

```js
let colors = new Array(); // 创建一个数组
let count = colors.unshift("red", "green"); // 从数组开头推入两项
alert(count); // 2
```

splice()传入三个参数，分别是开始位置、0（要删除的元素）、插入的元素，返回一个空数组

```js
let colors = ["red", "green", "blue"];
let removed = colors.splice(1, 0, "yellow", "orange")
console.log(colors) // red,yellow,orange,green,blue
console.log(removed) // []
```

concat()会先创建一个数组的副本，然后将元素添加到副本的末尾，最后返回一个新构建的数组，不会影响原始数组

```js
let colors = ["red", "green", "blue"];
let colors2 = colors.concat("yellow", ["black", "brown"]);
console.log(colors); // ["red", "green","blue"]
console.log(colors2); // ["red", "green", "blue", "yellow", "black", "brown"]
```

**删**
- pop，会对数组产生影响
- shift，会对数组产生影响
- splice，会对数组产生影响
- slice，不会对数组产生影响

pop()用于删除数组的最后一项，返回被删除的项

```js
let colors = ["red", "green"]
let item = colors.pop(); // 取得最后一项
console.log(item) // green
console.log(colors.length) // 1
```

shift()用于删除数组的第一项，返回这一项

```js
let colors = ["red", "green"]
let item = colors.shift(); // 取得第一项
console.log(item) // red
console.log(colors.length) // 1
```

splice()传入两个参数，分别是开始位置、删除元素的数量，返回包含删除元素的数组

```js
let colors = ["red", "green", "blue"];
let removed = colors.splice(0,1); // 删除第一项
console.log(colors); // green,blue
console.log(removed); // red，只有一个元素的数组
```

slice()创建一个包含原数组中一个或多个元素的新数组，不会影响原始数组

```js
let colors = ["red", "green", "blue", "yellow", "purple"];
let colors2 = colors.slice(1);
let colors3 = colors.slice(1, 4);
console.log(colors)   // red,green,blue,yellow,purple
concole.log(colors2); // green,blue,yellow,purple
concole.log(colors3); // green,blue,yellow，左闭右开
```

**改**
- splice

splice()传入三个参数，分别是开始位置、删除元素的数量、插入的元素，返回删除元素的数组

```js
let colors = ["red", "green", "blue"];
let removed = colors.splice(1, 1, "red", "purple"); // 插入两个值，删除一个元素
console.log(colors); // red,red,purple,blue
console.log(removed); // green，只有一个元素的数组
```

**查**
- indexOf
- includes
- find

indexOf()查找元素，返回元素坐标，没有找到返回-1

```js
let numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];
numbers.indexOf(4) // 3
```

includes()返回元素在数组中的位置，如果找到则返回true，否则为false

```js
let numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];
numbers.includes(4) // true
```

find()返回满足条件的第一个元素

```js
const people = [
    {
        name: "Matt",
        age: 27
    },
    {
        name: "Nicholas",
        age: 29
    }
];
people.find((element, index, array) => element.age < 28) // // {name: "Matt", age: 27}
```

**排序方法**：reverse、sort

**filter**的作用也是生成一个新数组，在遍历数组的时候将返回值为 true 的元素放入新数组，我们可以利用这个函数删除一些不需要的元素

```js
let array = [1, 2, 4, 6]
let newArray = array.filter(item => item !== 6)
console.log(newArray) // [1, 2, 4]
```

**map**的作用是生成一个新数组，遍历原数组，将每个元素拿出来做一些变换然后放入到新的数组中。

```js
[1, 2, 3].map(v => v + 1) // -> [2, 3, 4]
```

**reduce**可以将数组中的元素通过回调函数最终转换为一个值。例如实现数组求和。

```js
const arr = [1,2,3]
const sum = arr.reduce((acc,current)=>acc + current,0)
console.log(sum)
```

### 类数组和数组
类数组与数组类似，但它是一个对象，不具有数组的方法，但有length属性，类数组的原型是`Object`。常见的类数组就是`arguments`。
```js
var obj = {
  "2": "a",
  "3": "b",
  "4": "cc",
  "length": 5,
  "push": Array.prototype.push,
  "splice": Array.prototype.splice,
  "pop": Array.prototype.pop
};
console.log(obj);
obj.push("c");
obj.push("d");
obj.push("f");

console.log(obj);
obj.pop();
console.log(obj);
```

### 将类数组转为数组的方式
1. Array.from
```js
const args = Array.from(arguments)
```
2. 拓展运算符
```js
const args = [...arguments];
```
3. [].slice.call
```js
const args = [].slice.call(arguments);
```
4. Array.prototype.slice.call
```js
const args = Array.prototype.slice.call(arguments);
```
5. Array.prototype.splice.call
```js
const args = Array.prototype.splice.call(arguments, 0);
```
6. Array.prototype.concat.apply
```js
const args = Array.prototype.concat.apply([], arguments);
```

### 将集合转换为数组的方式

### JS原生实现双向绑定
JS实现双向绑定使用：`Object.defineProperty`方法。

Object.defineProperty()用于在一个对象上定义一个新属性，或者修改一个已经存在的属性。

Object.defineProperty(obj, prop, desc)
- obj：需要定义属性的对象
- prop：需要定义的属性名
- desc：具体的改变方法

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>

<body>
  <input type="text" id="first" oninput="handleInput()" />
  <p id="second"></p>

  <script>
    let input = document.getElementById('first')
    let p = document.getElementById('second')
    let data = {}

    Object.defineProperty(data, 'val', {
      get: function () {
        return val
      },

      set: function (newVal) {
        val = newVal
        input.value = val
        p.innerHTML = val
      }
    })

    function handleInput() {
      data.val = input.value
    }
  </script>
</body>

</html>
```

### **JS中的设计模式**
#### 工厂模式
先来理解一个概念 —— **构造器模式**

假如有一个动物园，有两只动物，你可能会这样录入系统：
```js
const monkey = {
    name: '悟空'，
    age: '1'
}
​
const tiger = {
    name: '泰格伍兹'，
    age: '3'
}
```

如果你的动物越来越多，对象字面量也会越来越多，这个时候可以使用<font color="#FF6347">构造函数</font>来自动创建动物对象，比如：
```js
function Animal(name, age){
  this.name = name
  this.age = age
}

const animal = new Animal(name, age)
```

像Animal这样当新建对象的内存被分配后，用来初始化对象的特殊函数，就是构造函数。在JS中，我们使用构造函数去舒适化对象，就是应用了<font color="#FF6347">构造器模式</font>。

可以看出每个实例化后 对象（ animal ）属性的key (name,age) 是不变的，对应的value（悟空，泰格伍兹）是变的。所以构造器将赋值过程封装，确保了每个对象属性固定，开放了取值确保个性灵活。

1. 简单工厂模式
重新封装构造函数，增加新的属性或方法。
```js
function Animal(name, age){
  this.name = name
  this.age = age
  this.favorite = 'fruit'
  this.food = [apple, banaba]
}
```

2. 复杂工厂模式
比如输入框可以设置为，文本框、密码框、邮箱框等；按钮可以设置主要的、危险的和普通按钮。

#### 装饰器模式
比如给一个类添加属性或者方法，装饰器模式不关心类或对象是如何创建的，只专注于怎么扩展它们的功能。
```js
var Car = function() {}
Car.prototype.drive = function() {
    console.log('乞丐版');
}

var AutopilotDecorator = function(car) {
    this.car = car;
}

AutopilotDecorator.prototype.drive = function() {
    this.car.drive();
    console.log('启动自动驾驶模式');
}

var car = new Car();
car = new AutopilotDecorator(car);
car.drive();    
// 乞丐版
// 启动自动驾驶模式
```

#### 单例模式
<font color="#FF6347">一个类只有一个实例，可以供全局访问</font>。全局对象就是最简单的单例模式。还有例如登陆弹出框只需要实例化一次，就可以反复使用了。

```js
// 实现单例模式弹窗
var createWindow = (function(){
    var div;
    return function(){
        if(!div) {
            div = document.createElement("div");
            div.innerHTML = "我是弹窗内容";
            div.style.display = 'none';
            document.body.appendChild(div);
        }
        return div;
    }
})()

document.getElementById("Id").onclick = function(){
    // 点击后先创建一个div元素
    var win = createWindow();
    win.style.display = "block";
}
```

- 优点：适用于单一对象，只生成一个对象实例，避免频繁创建和销毁实例，减少内存占用。
- 缺点：不适用于动态扩展对象，或需要创建多个相似对象的场景。


#### 适配器模式
点外卖的时候有美团、饿了么可以选择，但对于同一家店我们进行价格比较，需要来回切换，十分不便。

```js
class Eleme() {
    getElePice() {
        console.log('在饿了么上商品的价格')
        return {elePrice:xx}
    }
} 

class Meituan() {
    getMeiPice() {
        console.log('在美团上商品的价格')
        return {meiPrice:xx}
    }
}
```

如果再多增加一些其他平台，前端渲染的时候要写多少个if else去判断来源。这个时候我们可以通过引入**适配器**。

```js
class ElemeAdapter() {
  getPrice () {
    const e =  new Eleme()
    return { price:e.elePrice}
  }
}
​
class MeituanAdapter() {
  getPrice () {
    const m =  new Meituan()
    return { price:m.meiPrice}
  }
}
​
//通过适配器拿到的数据格式都是统一的 {price:xx}
//同样，入参也可以在适配器中统一处理
```
<font color="#FF6347">适配器主要用来解决两个已有接口之间不匹配的问题，它不考虑这些接口是如何实现的，也不考虑他们将来可能如何演化</font>。


#### 代理模式

#### 发布订阅模式
发布-订阅模式是一种一对多的依赖关系，让多个观察者对象同时监听某一个目标对象，当这个目标对象的状态发生变化时，会通知所有观察者对象，使他们自动更新。


#### 策略模式
策略模式定义了一系列算法，把每个算法分别封装起来，让它们可以相互替换。例如：年终奖是薪水的几倍，是按等级来划分的，A级别是3倍，B级别是2倍，C级别是1倍，那么我们就可以写三个等级方法，然后封装在一个方法中，传入等级和薪水就好了。

#### 迭代模式
迭代模式就是用来遍历集合对象的，主要作用是解耦容器代码和遍历代码。
```js
// jQuery 中的迭代器模式
$.each([1, 2, 3], function(i, n) {
 console.log('当前下标为:' + i)
 console.log('当前的值为：' + n)
})
```


### **JS中的包装类**
在JS中，三大基本类型String、Number、Boolean没有属性和方法，JS为了方便开发者使用这三个基本类型进行快速开发，实现了包装类，使String、Number、Boolean变为String对象、Number对象、Boolean对象，是他们可以添加属性并使用某些方法。

例如：
```js
const a = "abc";
a.length; // 3
a.toUpperCase(); // "ABC"
```

### **JS中的类型转换机制**
JS类型转换分为：
- 强制转换（显示转化）
- 自动转换（隐式转换）


### **JS进行隐式类型转换**
1. ToPrimitive()方法：将值转换为基本数据类型。如果<font color="#FF6347">值为基本类型，则直接返回值本生；如果值为对象，则：</font>。
```js
/**
 * obj为需要转换的对象
 * type为结果类型 
 */
ToPrimitive(obj, type)
```
当type为**Number**时：
- 调用obj的valueOf方法，如果为原始值，则返回
- 调用toString方法，如果为原始值，则返回
- 抛出TypeError异常

当type为**String**时：
- 调用obj的toString方法，如果为原始值 ，则返回
- 调用valueOf方法，如果为原始值，则返回
- 抛出TypeError异常

当type为Date时，默认为String类型，其余情况下默认为Number类型。

2. 使用字符串拼接可以隐式转换为String类型
```js
1 + '23' // '123'
1 + false // 1 
1 + Symbol() // Uncaught TypeError: Cannot convert a Symbol value to a number
'1' + false // '1false'
false + true // 1
```
3. 使用操作符拼接可以隐式转换为Number类型
```js
1 * '23' // 23
1 * false // 0
1 / 'aa' // NaN
```
4. 使用 ==、>、< 操作符可以隐式转换为Boolean类型
```js
3 == true // false, 3 转为number为3，true转为number为1
'0' == false //true, '0'转为number为0，false转为number为0
'0' == 0 // '0'转为number为0
'ca' < 'bd' // false
'a' < 'b' // true
```

### **Object.assign和扩展运算符是深拷贝还是浅拷贝**
扩展运算符是浅拷贝：
```js
let obj1 = {
  a: 1,
  b: 2,
  c: {
    d: 4,
  },
}

let obj2 = { ...obj1 }
obj1.a = 111
obj1.c.d = 444

console.log(obj1);
console.log(obj2);
```

Object.assign是浅拷贝：
```js
let obj1 = {
  a: 1,
  b: 2,
  c: {
    d: 4,
  },
}

let obj2 = Object.assign(obj1)
obj1.a = 111
obj1.c.d = 444

console.log(obj1);
console.log(obj2);
```
<font color="#FF6347">Object.assign()方法接收的第一个参数是**目标对象**，后面所有的参数作为**源对象**，Object.assign会把所有的源对象放入到目标对象中</font>。

<font color="#FF6347">扩展运算符会将数组或对象中每个值都拷贝到新的数组或对象中</font>。

### 如何判断一个对象是空对象
1. 使用JSON.stringify
```js
const obj = {}
console.log(JSON.stringify(obj) === "{}");
```

2. 使用Object.keys().length
```js
const obj = {}
console.log(Object.keys(obj).length === 0);
```

### new操作符实现原理
new的执行过程：
1. 首先创建一个空对象
2. 设置原型，将对象的原型设置为prototype对象
3. 让函数的this指向这个对象，执行构造函数（为这个对象添加属性）
4. 判断函数的返回值类型，如果是值类型，返回创建的对象，如果是引用类型，返回这个引用类型的对象

```js
function objectFactory() {
  let newObject = null;
  let constructor = Array.prototype.shift.call(arguments);
  let result = null;
  // 判断参数是否是一个函数
  if (typeof constructor !== "function") {
    console.error("type error");
    return;
  }
  // 新建一个空对象，对象的原型为构造函数的 prototype 对象
  newObject = Object.create(constructor.prototype);
  // 将 this 指向新建对象，并执行函数
  result = constructor.apply(newObject, arguments);
  // 判断返回对象
  let flag = result && (typeof result === "object" || typeof result === "function");
  // 判断返回结果
  return flag ? result : newObject
}
// 使用方法
objectFactory(构造函数, 初始化参数)
```

### map和object的区别
<font color="#FF6347">Map 对象存有键值对，其中的键可以是任何数据类型；Map对象记得键的原始插入顺序；Map对象具有表示映射大小的属性</font>。

**Map的API：**      
- new Map()：创建新的Map对象
- set()：为Map对象中的键设置值
- get()：获取Map对象中键的值
- clear()：	删除Map中的所有元素
- delete()：删除由键指定的元素
- has()：如果键存在，则返回 true
- size：返回Map的长度

Map三个遍历生成函数和一个遍历方法：
- entries()：返回Map对象中键/值对的数组
- keys()：返回Map对象中键的数组
- values()：返回Map对象中值的数组
- forEach()：为每个键/值对调用回调

使用set给Map的键值
```js
// 创建对象
const apples = {name: 'Apples'};
const bananas = {name: 'Bananas'};
const oranges = {name: 'Oranges'};

// 创建新的 Map
const fruits = new Map();

// 给Map添加新元素
fruits.set(apples, 500);
fruits.set(bananas, 300);
fruits.set(oranges, 200);
```

使用数组给Map添加键值
```js
const apples = {name: 'Apples'};
const bananas = {name: 'Bananas'};
const oranges = {name: 'Oranges'};

// 创建新的 Map
const fruits = new Map([;
  [apples, 500],
  [bananas, 300],
  [oranges, 200]
]);
```

使用get获取Map中键的值
```js
fruits.get(apples);    // 返回 500
```
<font color="#FF6347">get中直接传入键值，如果传入非键值会找不到返回undefined</font>。

|     | Map  | Object |
|  ----  | ----  | ---- |
| 意外的键  | Map默认不包含任何键，只包含显示插入的键 | Object有原型，原型链上的键名可能会和自己定义的键名产生冲突 |
| 键的类型  | Map的键可以为任意类型 | Object的键为String |
| 键的顺序  | Map中的key是有序的 | Object的键是无序的 |
| Size  | Map有size属性 | Object对长度只能手动计算 |
| 迭代  | Map可以被直接迭代 | Object需要获取键后才可以迭代 |
| 性能  | 在频繁增删键值时表现更好 | 在频繁添加和删除键值对的场景下未作出优化。 |

### Map和weakMap的区别
Map本质上就是键值对的集合，但是普通的Object中的键值对中的键只能是字符串。而ES6提供的Map数据结构类似于对象，但是它的键不限制范围，可以是任意类型，是一种更加完善的Hash结构。<font color="#FF6347">如果Map的键是一个原始数据类型，只要两个键严格相同，就视为是同一个键</font>。

实际上Map是一个数组，他的每个数据也都是一个数组：
```js
const map = [
     ["name","张三"],
     ["age",18],
]
```

WeakMap 对象也是一组键值对的集合，其中的键是弱引用的。<font color="#FF6347">**其键必须是对象**，原始数据类型不能作为key值，而值可以是任意类型的</font>。

WeakMap的API：
- set(key,value)：设置键名key对应的键值value，然后返回整个Map结构，如果key已经有值，则键值会被更新，否则就新生成该键。（因为返回的是当前Map对象，所以可以链式调用）
- get(key)：该方法读取key对应的键值，如果找不到key，返回undefined。
- has(key)：该方法返回一个布尔值，表示某个键是否在当前Map对象中。
- delete(key)：该方法删除某个键，返回true，如果删除失败，返回false。
- 其clear()方法已经被弃用，所以<font color="#FF6347">可以通过创建一个空的WeakMap并替换原对象来实现清除</font>。

**WeakMap设计的目的在于**：有时想在某个对象上面存放一些数据，但是这会形成对于这个对象的引用。一旦不再需要这个对象，就必须手动删除这个引用，否则垃圾回收机制就不会释放对象占用的内存。而weakMap设计的目的在于<font color="#FF6347">**WeakMap的键名所引用的对象都是弱引用**，垃圾回收机制不将弱引用考虑在内</font>。因此，只要所引用的对象的其他引用都被清除，垃圾回收机制就会释放该对象所占用的内存。也就是说，一旦不再需要，<font color="#FF6347">**WeakMap 里面的键名对象和所对应的键值对会自动消失，不用手动删除引用**</font>。

**总结：**
- Map 数据结构。它类似于对象，也是键值对的集合，但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键。
- WeakMap 结构与 Map 结构类似，也是用于生成键值对的集合。但是 WeakMap 只接受对象作为键名（ null 除外），不接受其他类型的值作为键名。而且 WeakMap 的键名所指向的对象，不计入垃圾回收机制。

### WeakMap详解
先来看一个例子：
```js
let obj = { name: 'toto' }

// { name: 'toto' }这个对象能够被读取到，因为obj这个变量名有对它的引用

// 将引用覆盖掉
obj = null

// 这个对象将会被从内存中移除，因为我们已经失去了对它所有的引用
```

再来看另一个例子：
```js
let obj = { name: 'toto' }
let arr = [ obj ]

obj = null
```
在这个例子中，对象`{ name: 'toto' }`不会被`内存`中移除，因为数组arr保存了对它的引用。

#### 强引用和弱引用之间的区别是什么？
JS中大多数变量都保存着对一个对象的强引用，比如上面这个数组保存着对对象`{ name: 'toto' }`的强引用。

<font color="#FF6347">如果一个变量保存着对一个对象的强引用，那么这个对象将不会被垃圾回收，但如果一个变量只保存这对这个对象的弱引用，那么这个对象会在不使用后被垃圾回收</font>。

#### Map与WeakMap的对比
使用map，对象会占用内存，可能不会被垃圾回收。Map对一个对象时强引用。
```js
let obj = { name: 'toto' }
let mapObj = new Map()
mapObj.set(obj, 'any value')

obj = null
mapObj.size() // 1
```

使用weakMap，他直接收`Object`作为`key`，并且对`Object`的引用为`弱引用`。
```js
let obj = { name: 'toto' }
let weakmapObj = new WeakMap()
weakmapObj.set(obj, 'any value')

obj = null
weakmapObj .size() // 0
```



### **JS中的内置对象**
1. 值属性：<font color="#FF6347">这些全局属性返回一个简单值，这些值没有自己的属性和方法</font>，例如：NaN、infinity、undefined、null
2. 函数属性：全局函数可以直接调用，不需要在调用时指定所属对象，执行结束后会将结果直接返回给调用者。例如：eval、parseFloat、parseInt等。

eval() 函数计算 JavaScript 字符串，并把它作为脚本代码来执行。<font color="#FF6347">当参数格式是字符串时，JavaScript引擎会调用eval()执行，而eval的执行环境是全局作用域</font>。
```js
const a = "123"
console.log(typeof a);   // float
console.log(typeof parseFloat(a));   // number
console.log(typeof parseInt(a));     // number
console.log(eval("2 + 2"));   // 4

let b = function () {
  console.log('outer')
}
function container () {
  let b = function () {
    console.log('inner')
  }
  setTimeout(b,1000)
  setTimeout('b()', 5000)
}
container()
// inner  outer
```
3. 基本对象：Object、Function、Boolean、Symbol、Error等
4. 数字和日期对象：Number、Date、Math
5. 字符串对象：String
6. 可索引的集合对象：Array
7. 使用键的集合对象：Map、Set、WeakMap、WeakSet
8. 结构化数据：JSON
9. 控制抽象对象：Promise

### **对JSON的理解**
<font color="#FF6347">JSON是一种基于文本的轻量级数据交换格式，它可以被任何编程语言读取和作为数据格式来传递，结构清晰，便于阅读</font>。

在项目开发中，JSON作为前后端数据交换的方式。<font color="#FF6347">在前端，将一个符合JSON格式的数据结构**序列化为JSON字符串**，然后将它传递到后端，后端通过JSON格式的字符串解析后生成对应的数据结构，以此来实现前后端数据的传递</font>。

js提供了两个函数来实现js数据结构和JSON格式的转换处理：
- JSON.stringify：<font color="#FF6347">传入一个符合JSON格式的数据结构，将其转化为一个JSON字符串</font>。
- JSON.parse()：<font color="#FF6347">将JSON格式的字符串转化为js数据结构</font>。

### **JS脚本延迟加载的方式**
1. setTimeout
2. 将js脚本放在文档的最底部，使其最后来执行
3. **defer属性**：给js脚本添加defer属性，这个属性<font color="#FF6347">会让脚本的加载与文档的解析同步，然后在文档解析完成后再执行这个脚本文件，这样的话就可以使页面的渲染不被阻塞</font>。
4. **async属性**：给js脚本添加async属性，这个属性<font color="#FF6347">会使脚本异步加载，不会阻塞页面解析的过程，但当脚本加载完成后会立即执行，如果这时页面还没渲染完成的话同样会造成页面阻塞</font>。多个async属性的脚本执行顺序是不可预测的，一般不会按照代码的顺序依次执行。
5. **动态创建DOM**：可以对文档加载事件进行监听，<font color="#FF6347">当文档加载完成后再动态创建script标签来引入js脚本</font>。

## this
### **对this的理解**
this是执行上下文中的一个属性，它指向最后一次调用这个方法的对象。

### **call()、apply()、bind()**
例子1:
```js
const name = "小王"
const age = 17

const obj = {
  name: "校长",
  objAge: this.age,
  func: function () {
    console.log(this.name + "年龄" + this.age)
  }
}
```
调用obj.func()输出”校长年龄undefined“。

例子2：
```js
const name = "盲僧"
function shows(){
  console.log(this.name)
}
```
调用shows()输出“盲僧”
比较上边两个例子this的差别，第一个this指向obj，第二个this指向window。

**1. call、apply、bind都是用来重定义this这个对象的**  
例如：
```js
const name = "小王", age = 12
const obj = {
  name: "小张",
  objAge: this.age,
  func: function () {
    console.log(this.name + "年龄" + this.age);
  }
}

const db = {
  name: "约德尔人",
  age: 99,
}

obj.func.call(db)
obj.func.apply(db)
obj.func.bind(db)()
```
bind返回的是一个函数，必须调用它才会执行。  

**2. 对比call、apply、bind传参情况**
```js
const name = "小王", age = 12
const obj = {
  name: "小张",
  objAge: this.age,
  func: function (fm, t) {
    console.log(this.name + "年龄" + this.age, "来自" + fm + "去往" + t);
  }
}

const db = {
  name: "约德尔人",
  age: 99,
}

obj.func.call(db,'成都','上海')；　　　　 // 德玛 年龄 99  来自 成都去往上海
obj.func.apply(db,['成都','上海']);      // 德玛 年龄 99  来自 成都去往上海  
obj.func.bind(db,'成都','上海')();       // 德玛 年龄 99  来自 成都去往上海
obj.func.bind(db,['成都','上海'])();　　 // 德玛 年龄 99  来自 成都, 上海去往 undefined
```
call、bind、apply这三个函数的第一个参数都是this的指向对象，第二个参数差别就来了：
<font color="#FF6347">call可以传入多个参数，每个参数用逗号相隔</font>。
<font color="#FF6347">apply的所有参数都要放在一个数组中</font>。
<font color="#FF6347">bind除了返回的是函数外，其余都和call是一样的</font>。

### **this原理**
[阮一峰this原理](https://www.ruanyifeng.com/blog/2018/06/javascript-this.html)

### **this指向问题**
this是执行上下文的一个属性，它指向最后一次调用这个方法的对象。可以通过下面四种方法来判断：
1. **函数调用模式**：当一个函数不是一个对象的属性时，直接作为函数来调用，那么<font color="#FF6347">this指向全局对象</font>。
```js
const obj = {
  a: 2,
  b: {
    c: function test() {
      function test2() {
        console.log(this);   // window
      }
      test2()   // 直接作为函数来调用
    }
  }
}

obj.b.c()
```

2. **方法调用模式**：如果一个函数作为一个对象的方法来调用时，this指向这个对象。
3. **构造器调用模式**：如果一个函数用new调用时，函数执行前会新创建一个对象，this指向这个新创建的对象。
4. **apply、call、bind调用模式**：apply接收两个参数，<font color="#FF6347">一个是this绑定的对象，一个是参数数组</font>。call方法接收多个参数<font color="#FF6347">一个是this绑定的对象，其余的时 传入的参数</font>。bind方法除了返回的是函数外，其余的都和call一样。

### **判断this指向的七种方法**
1. obj.fun()   <font color="#FF6347">this指向obj</font>
2. fun() 或 (function(){ ... })() 或 多数回调函数 或 定时器函数   <font color="#FF6347">this指向window</font>
3. new Fun()   <font color="#FF6347">this指向new正在创建的实例</font>
4. 类型名.prototype.共有方法=function(){ ... }   <font color="#FF6347">将来谁调用this就指向谁，同第一种情况</font>
5. DOM或jq中事件处理函数中的this  <font color="#FF6347">当前正在触发事件的DOM元素对象</font>，如果需要使用简化版函数，必须$(this)
6. 箭头函数中的this  <font color="#FF6347">箭头函数外部作用域中的this</font>
7. jQuery.fn.自定义函数=function(){ ... }   <font color="#FF6347">this指向将来调用这个自定义函数的 . 前的jQuery子对象</font>

### **手写call**
实现call函数的步骤：
- 判断调用对象是否为函数，即使是定义在函数的原型上，但是可能出现使用call等方式调用的情况。
- 判断传入上下文对象是否存在，如果不存在，设置为window
- 处理传入的参数，截取第一个参数后的所有参数
- 将函数作为上下文对象的一个属性
- 使用上下文对象来调用这个方法，并保存返回结果
- 删除刚才新增的属性
- 返回结果
```js
Function.prototype.myCall = function (context) {
  // 判断调用对象
  if (typeof this !== "function") {
    console.log("type error");
  }

  // 获取参数
  let args = [...arguments].slice(1)
  let result = null

  // 判断context是否传入，如果未传入则设置为window
  context = context || window
  // 将调用函数设为对象的方法
  context.fn = this
  // 调用函数
  result = context.fn(...args)
  // 将属性删除
  delete context.fn
  return result
}
```

## 深拷贝与浅拷贝
如何区分深拷贝与浅拷贝，简单点来说，就是假设B复制了A，当修改A时，看B是否会发生变化，如果B也跟着变了，说明这是浅拷贝；如果B没变，那就是深拷贝。

对于<font color="#FF6347">引用数据类型</font>，key存在栈内存，value存在堆内存中，但栈内存会提供一个引用的地址指向堆内存的值。

**浅拷贝**

![image](https://user-images.githubusercontent.com/70066311/161970282-947ca2a5-05e5-4ecc-a27a-0533d02dd0f7.png)

<font color="#FF6347">当b = a进行拷贝时，其实复制的是a的引用地址，而不是堆中的值</font>。

![image](https://user-images.githubusercontent.com/70066311/161970418-657e9e89-b53a-44ac-a700-d1de3fe11cdf.png)

而当我们a[0]=1时进行数组修改时，由于a与b指向的是同一个地址，所以自然b也受了影响，这就是所谓的<font color="#FF6347">浅拷贝</font>了。

![image](https://user-images.githubusercontent.com/70066311/161970572-29125196-72bf-4a8a-ae5d-f7b7304f08f7.png)

**深拷贝**
要是<font color="#FF6347">在堆内存中也开辟一个新的内存专门为b存放值</font>，就像基本类型那样，岂不就达到深拷贝的效果了。

## 原型与原型链
在JS中是使用构造函数来新建一个对象的，每个构造函数的内部都有一个prototype属性，它的属性值是一个对象，这个对象包含了该构造方法所有的实例可以共用的属性和方法。当使用构造函数新建了一个对象后，在这个对象的内部将包含一个指针，这个指针指向构造函数的prototype属性对应的值。

### prototype（原型）
在JS中，每个函数都有一个prototype属性，这个属性指向函数的原型对象。
```js
function Person(age) {
    this.age = age       
}
Person.prototype.name = 'kavin'   
var person1 = new Person()
var person2 = new Person()
console.log(person1.name) //kavin
console.log(person2.name)  //kavin
```

在上面的代码中，函数的prototype指向了一个对象，而这个对象正是调用构造函数时创建的实例的原型，也就是person1和person2的原型。而Person.prototype是一个构造函数，所以可以使用Person.prototype可以定义属性。
<font color="#FF6347">每个JS对象创建时，就会与之关联另一个对象，这个对象就是我们说的原型，每个对象都会从原型中继承属性</font>。
![image](https://user-images.githubusercontent.com/70066311/161051022-d32de349-62ec-49b8-babd-0bfb3b951aca.png)

### \_\_proto\_\_
<font color="#FF6347">该属性指向对象的原型</font>。

``` js
function Person() {
}
var person = new Person();
console.log(person.__proto__ === Person.prototype); // true
```
上面代码实例化了一个对象`person`，而这个对象的__proto__属性就指向它的原型。
![image](https://user-images.githubusercontent.com/70066311/161052367-8f33ff21-829f-405d-a2c5-378b9f276c5a.png)

### constructor
<font color="#FF6347">每个原型都有一个constructor属性，指向关联的构造函数</font>。

```js
function Person() {

}
console.log(Person===Person.prototype.constructor)  //true
```
![image](https://user-images.githubusercontent.com/70066311/161053035-ddd97909-4237-4cda-8ccb-06edaf7ab145.png)

### **实例与原型**
当读取实例的属性时，如果找不到，就会查找与对象关联的原型的属性，如果还是找不到，就会去原型的原型中进行查找，直到查找到Object为止。最上层的原型是Object，它的原型为null。
```js
function Person() {

}

Person.prototype.name = 'Kevin';

var person = new Person();

person.name = 'Daisy';
console.log(person.name) // Daisy

delete person.name;
console.log(person.name) // Kevin
```

![image](https://user-images.githubusercontent.com/70066311/161053741-1713e101-c2c6-432e-8477-874c4839edd3.png)

### **构造函数、原型和实例的关系**
<font color="#FF6347">每个构造函数都有一个原型对象，原型对象都包含一个指向构造函数的指针，而实例都包含一个指向原型对象的内部指针</font>。

### **原型链**
假如我们让原型对象等于另一个原型的实例，结果会怎样？显然，此时的原型对象将包含一个指向另一个原型的指针，相应地，另一个原型中也包含着一个指向另一个构造函数的指针。假如另一个原型又是另一个类型的实例，那么上述关系依然成立。如此层层递进，就构成了实例与原型的链条。这就是所谓的原型链的基本概念。

![image](https://user-images.githubusercontent.com/70066311/161055142-79c09e45-9710-4b0c-be3c-7cd27ed688e7.png)

可以使用Object.getPrototypeOf()方法来获得对象的原型
```js
Object.getPrototypeOf(person)  === Person.prototype
```

可以使用hasOwnProperty()方法来判断一个属性或方法是不是属于自身，该方法返回一个布尔值。例如：
```js
teacher.hanOwnProperty('name')
```

### 原型链的终点是什么？怎么打印出原型链的终点
<font color="#FF6347">原型链的终点是Object.prototype.\_\_proto\_\_ === null</font>。因为原型链上所有的原型都是对象，所有对象都是由Oject构造的。
<font color="#FF6347">通过原型来实现</font>。


### **JS如何实现多重继承**
1. 首先创建一个空的父类构造函数，通过prototype属性为该父类定义属性和方法；
2. 然后创建一个空的子类构造函数，将子类的原型绑定在父类的实例上，再将子类原型的父类也绑定在父类的实例上，然后通过prototype属性定义子类的属性和方法；
3. 然后创建一个空的孙类构造函数，将孙类的原型绑定在子类的实例上，再将孙类原型的子类也绑定在子类的实例上，然后通过prototype属性定义孙类的属性和方法；
4. 这样，实例化孙类后，孙类可以调用自己的属性和方法，以及子类与父类的属性和方法，从而实现多继承。

## 函数柯里化
函数柯里化是是把<font color="#FF6347">接受多个参数的函数变换成接受一个单一参数（最初函数的第一个参数）的函数，并且返回接受余下的参数而且返回结果的新函数的技术</font>。

**柯里化的作用：**     
1. 参数复用
```js
function url_curring(protocol) {
  return function (hostname, pathname) {
    return `${protocol}${hostname}${pathname}`
  }
}

// 减少参数的复用
const url_https = url_curring("https://")

const url1 = url_https('www.baidu.com', '/home')
const url2 = url_https('www.baidu.com', '/login')
const url3 = url_https('www.baidu.com', '/user')

console.log(url1)
console.log(url2)
console.log(url3)
```

2. 延迟执行
```js
function add() {
  // 将参数赋值给args
  // 因为arguments是对象，要将它转化为数组
  let args = Array.prototype.slice.call(arguments)

  let inner = function () {
    // 将inner接收到的参数加到args中
    args.push(...arguments)
    // 因为不知道有多少次add调用，所以要一直递归
    return inner
  }

  // 因为再返回的inner函数之前被调用了toString()
  // 所以返回的其实是一个字符串
  // 这里重写toString()方法，进行累加求和
  inner.toString = function () {
    return args.reduce(function (pre, cur) {
      return pre += cur
    })
  }
  return inner
}

const res = add(1, 5, 6)(2)(3)(4).toString()
console.log(res)
```

3. 箭头函数遍历数组
```js
const nameList1 = [
  { mid: "亚索", profession: '中单' },
  { mid: "永恩", profession: '中单' },
  { mid: "发条", profession: '中单' },
  { mid: "刀妹", profession: '中单' },
]

const nameList2 = [
  { adc: "vn", profession: 'ADC' },
  { adc: "efls", profession: 'ADC' },
  { adc: "萨米拉", profession: 'ADC' },
  { adc: "EZ", profession: 'ADC' },
]

const curring = name => element => element[name]
const name_mid = curring('mid')
const name_adc = curring('adc')

console.log(nameList1.map(name_mid))
console.log(nameList2.map(name_adc))
```
 
## 执行上下文/作用域链/闭包
### **1. 对闭包的理解**
**闭包是指有权访问另一个函数作用域中变量的函数**。创建闭包最常见的方法就是在一个函数中创建另一个函数，创建的函数可以访问到当前函数的局部变量。  
闭包有两个常用的用途：
 - <font color="#FF6347">在函数外部能够访问到函数内部的变量</font>。可以通过外部调用闭包函数，从而在外部访问到函数内部的变量，可以使用这种方法来创建私有变量。
 - <font color="#FF6347">是已经运行结束的函数中的上下文变量对象继续留在内存中，因为闭包函数保留了这个变量对象的引用，所以这个变量对象不会被回收</font>。

在JS中，闭包存在的意义就是让我们可以在函数外部访问函数内部的变量。
比如，函数 A 内部有一个函数 B，函数 B 可以访问到函数 A 中的变量，那么函数 B 就是闭包。
```js
function A() {
  let a = 1
  window.B = function () {
      console.log(a)
  }
}
A()
B() // 1
```
当我们将B作为返回值，就可以得到A中的变量的值了。

下面有一个在面试中关于必报的典型例子：
```js
for (var i = 1; i <= 5; i++) {
  setTimeout(function timer() {
    console.log(i)
  }, i * 1000)
}
```
因为`setTimeout()`是一个异步函数，所以会先执行完`for`，此时i已经=6，所以会打印5个6。可以使用三种方式解决上述问题：
1. 使用let定义i
```js
for (let i = 1; i <= 5; i++) {
  setTimeout(function timer() {
    console.log(i)
  }, i * 1000)
}
```

2. 使用闭包
```js
for (var i = 1; i <= 5; i++) {
  (function(j) {
    setTimeout(function timer() {
      console.log(j)
    }, j * 1000)
  })(i)
}
```
在上面的代码中，使用立即执行函数将i传入函数内部，这个时候值就被固定在参数j上面不会改变，当执行timer时，就可以使用外部函数的变量j。

3. 使用setTimeout的回调函数
```js
for (var i = 1; i <= 5; i++) {
  setTimeout(function timer(j) {
    console.log(j)
  }, i * 1000, i)
}
```

**使用闭包要注意的点：**    
1. 因为使用闭包函数中的变量会一直保存到内存中，内存消耗很大，容易浪费资源，解决办法是<font color="#FF6347">在退出函数之前，将不用的变量全部删除</font>。
2. 闭包会在父函数外部，改变父函数内部的值。

### **闭包的优点和缺点**
优点：可以在全局重复使用变量，便不会造成变量污染。可以用来定义私有属性和私有方法。

缺点：比普通函数更消耗内存，会导致网页性能变差。

### **闭包的应用**
1. 防抖与节流     
防抖
```js
function debounce(fn, delay) {
  let timer = null   // 借助闭包
  return function () {
    if (timer) {
      clearTimeout(timer)   // 取消由 setTimeout() 方法设置的定时操作。
    }
    timer = setTimeout(fn, delay)
  }
}
```
节流
```js
// 定时器版
function throttleTime(fn, delay) {
  let timer = null   // 表示当前函数是否在执行
  return function () {
    if (!timer) {
      timer = setTimeout(() => {
        fn()
        timer = null
      }, delay)
    }
  }
}

// 时间戳版
function throttleTimeStamp(fn, delay) {
  let preTime = Date.now()
  return function () {
    let nowTime = Date.now()
    if (nowTime - preTime >= delay) {
      // 保存函数的执行时间
      preTime = Date.now()
      return fn()
    }
  }
}
```
2. 函数柯里化
```js
function add() {
  // 将参数赋值给args
  // 因为arguments是对象，要将它转化为数组
  let args = Array.prototype.slice.call(arguments)

  let inner = function () {
    // 将inner接收到的参数加到args中
    args.push(...arguments)
    // 因为不知道有多少次add调用，所以要一直递归
    return inner
  }

  // 因为在返回的inner函数之前被调用了toString()
  // 所以返回的其实是一个字符串
  // 这里重写toString()方法，进行累加求和
  inner.toString = function () {
    return args.reduce(function (pre, cur) {
      return pre += cur
    })
  }
  return inner
}

const res = add(1, 5, 6)(2)(3)(4).toString()
console.log(res)

```

### 2.作用域、作用域链
**全局作用域**  
 - 最外层函数和最外层函数外面定义的变量拥有全局作用域
 - 所有未定义直接赋值的变量自动声明为全局作用域
 - 所有window对象的属性拥有全局作用域
 - 全局作用域容易引起命名冲突问题，过多的全局作用域变量会污染全局命名空间

**函数作用域**  
 - 函数作用域声明在函数内部
 - 内层作用域可以访问到外部，反之不行

**块级作用域**  
 - 使用let和const指令可以声明块级作用域
 - let和const声明的变量不会有变量提升，但不可重复声明

**作用域链**  
在当前作用域中查找所需变量，但该作用于没有这个变量，那么这个变量就是自由变量，如果在自己的作用域找不到该变量就去父级作用域查找，直到访问到window的作用域终止，这一层层的关系就是作用域链。

### 3.执行上下文
1. 全局执行上下文      
任何不在函数内部的都是全局执行上下文，它首先会创建一个全局window对象，并且设置this的值等于这个全局对象，<font color="#FF6347">一个程序中只有一个全局上下文</font>。
2. 函数执行上下文     
当一个函数被调用时，就会为该函数创建一个新的执行上下文，<font color="#FF6347">函数的上下文可以有任意多个</font>。

### **执行上下文栈**
- JS使用执行上下文栈来管理执行上下文
- 当JS执行代码时，首先遇到全局代码，会创建一个全局执行上下文并且压入执行栈中，每当遇到一个函数调用，就会为该函数创建一个新的执行上下文并压入栈顶，引擎会执行位于执行上下文栈顶的函数，当函数执行完成之后，执行上下文从栈中弹出，继续执行下一个上下文。当所有的代码都执行完毕之后，从栈中弹出全局执行上下文。

## 异步编程
### JS异步机制
1. 回调函数  
使用多个回调函数嵌套会造成<font color="#FF6347">回调地狱</font>，上下两层的代码耦合度高。
2. Promise  
Promise是ES6引入的异步编程的解决方案，Promise可以封装异步操作，获取成功和失败的结果。Promise的优点是：支持链式调用，可以解决回调地狱问题。<font color="#FF6347">但是，进行多个链式调用时会造成代码语义不够明确的问题</font>。
3. generator  
4. async  
当函数内部执行到一个await语句时，如果语句返回一个promise对象，那么函数会等待promise变为resolve状态在继续向下执行。

### **setTimeout、Promise、Async/Await 的区别**
1. setTimeout
```js
console.log('script start')	//1. 打印 script start
setTimeout(function(){
    console.log('settimeout')	// 4. 打印 settimeout
})	// 2. 调用 setTimeout 函数，并定义其完成后执行的回调函数
console.log('script end')	//3. 打印 script start
// 输出顺序：script start->script end->settimeout
```

2. Promise
<font color="#FF6347">Promise本身是同步的立即执行函数，当在执行器中执行resolve或者reject的时候，此时是异步操作，会先执行then/catch等，当主栈完成后，才会去调用resolve/reject中存放的方法执行</font>。

```js
console.log('script start')
let promise1 = new Promise(function (resolve) {
    console.log('promise1')
    resolve()
    console.log('promise1 end')
}).then(function () {
    console.log('promise2')
})
setTimeout(function(){
    console.log('settimeout')
})
console.log('script end')
// 输出顺序: script start->promise1->promise1 end->script end->promise2->settimeout
```

当JS主线程执行到Promise对象时：
- promise1.then() 的回调就是一个 task
- promise1 是 resolved或rejected: 那这个 task 就会放入当前事件循环回合的 microtask queue
- promise1 是 pending: 这个 task 就会放入 事件循环的未来的某个(可能下一个)回合的 microtask queue 中
- setTimeout 的回调也是个 task ，它会被放入 macrotask queue 即使是 0ms 的情况

3. async/await
async 函数返回一个 Promise 对象，当函数执行的时候，一旦遇到 await 就会先返回，等到触发的异步操作完成，再执行函数体内后面的语句。<font color="#FF6347">可以理解为，是让出了线程，跳出了 async 函数体</font>。

### **对Promise的理解**
Promise是一种异步编程的解决方案，可以解决回调地狱问题。<font color="#FF6347">Promise有三种状态：pending（进行中）、resolved（已完成）、rejected（已拒绝）。Promise只能由pending转化到resolved状态或pending转化到rejected状态。一旦从进行中状态转化为其他状态就不可再改变了</font>。  

### **Promise使用流程**
首先创建Promise实例，然后Promise对象会执行异步操作，若异步操作成功，则调用resolve()方法并将Promise对象的状态改为resolved，失败则调用reject()方法并将Promise对象的状态改为rejected。在后续调用then方法时，若Promise对象的的状态为resolved，则调用第一个回调函数，否则调用第二个回调函数。then()方法的返回对象也是一个Promise对象，因此可以进行链式调用。

### **Promise转换状态的三种方式**
1. resolve函数
2. reject函数
3. 抛出错误：使用throw抛出错误，promise的状态变为rejected

**Promise的缺点：**
1. 无法取消，一旦新建就会立即执行。
2. 如果不设置回调函数，Promise内部抛出错误，不会反应到外部。

### Promise是改变状态先执行还是指定回调先执行
<font color="#FF6347">当执行器中的代码为同步时，会先改变状态后执行回调</font>。

```js
let promise1 = new Promise((resolve, reject) => {
  resolve("ok1")
  console.log(111);
}).then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
})
```
<font color="#FF6347">当执行器中的代码为异步时，会先执行回调再改变状态</font>。

```js
let promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("ok2")
  }, 100)
}).then(res => {
  console.log(222);
  console.log(res);
}).catch(err => {
  console.log(err);
})
```

### Promise.then()返回新的promise的结果状态由什么决定？
由then()返回的回调函数执行的结果决定。
- 如果<font color="#FF6347">抛出异常</font>，则新的promise的状态为rejected
- 如果<font color="#FF6347">返回的是非promise的值</font>，则新的promise状态为fulfilled
- 如果<font color="#FF6347">返回的是promise</font>，则promise的执行结果为新的promise的结果

### 如何中断promise链
<font color="#FF6347">返回一个状态为pendding的promise对象</font>。

### Promise的基本用法
1. 创建Promise对象。
Promise构造函数接受一个函数作为参数，该函数的两个参数分别是resolve、reject。
```js
const promise1 = new Promise((resolve, reject) => { 
  ...
  resolve('promise1')
  ...

}).then(res => {   // then方法接受两个回调函数作为参数，第一个回调函数在请求成功时调用，第二个在失败时调用。
  ...
},()=>{

}).catch(err=>{
  console.log(err)
})
```
2. Promise方法  

**all()**   
all()方法可以完成并行任务，它接收一个数组，数组的每一项都是一个promise对象，<font color="#FF6347">当数组中所有的promise的状态都达到了resolved的时候，all方法的状态就会变为resolved，如果有一个状态变为了rejected，那么all方法的状态就会变成rejected</font>。all()方法**成功后返回一个数组**，该数组记录着每个promise的resolve执行的值。**失败后返回最先被reject失败状态的值**。  

**race()**
race()方法和all()方法一样，区别是race()会返回最先执行完的promise对象。
<font color="#FF6347">race()方法可以用来解决某一件事超过多久就不做了</font>。例如：  

```js
Promise.race(promise1, timeOutPromise(5000)).then(res=>{})
```

**all和race都传入空数组**:Promise.all 会立即返回 resolved 状态，因而会立马输出，而 Promise.race 则一直处于 pending 状态，不会走到 then ，所以永远不会输出

**finally()**
finally()方法用于指定不管Promise对象最后状态如何，都会执行的操作。

### async
async的返回值为promise对象。这个promise的状态是由async的返回值决定的。

### await
await必须写在async()函数内部，await表达式的运算结果取决于它等的是什么：
 - 如果它等到是<font color="#FF6347">普通表达式，那么表达式的运算结果就是await返回的结果</font>。
 - 如果等到的是<font color="#FF6347">promise对象，那么await会等promise对象的状态变为resolve后，得到resolve的值，作为await表达式的运算结果</font>。

 ### async/await对比promise的优势
 1. 代码阅读起来更加像同步。promise虽然解决了回调地狱问题，但then的链式调用也会带来额外的阅读负担。
 2. 调试友好。调试器只能跟踪同步代码的每一步。
 3. 错误处理友好。
 4. promise传递中间值比较麻烦，而async/await几乎是同步写法，非常优雅。

 ### promise、async&await和setTimeout运行顺序
 1. JS运行的机制
 <font color="#FF6347">JS有一个主线程和一个调用栈，所有的任务都会被放到调用栈中等待主线程执行</font>。

 在JS中，任务被分为两种，一种宏任务，一种微任务。
 宏任务主要为script全部代码、setTimeout、setInterval。
 
 微任务执行栈在执行完同步任务后，查看执行栈是否为空，如果执行栈为空，就会去检查微任务队列是否为空，如果为空时，就执行宏任务，否则就一次性执行完所有微任务。

 2. setTimeout属于宏任务；Promise本身属于同步的立即执行函数，Promise.then()属于微任务；async方法执行时，遇到await会立即执行await后面的代码，在await之后的代码放入微任务队列。

 JS运行的流程为：
 1. 首先执行同步代码
 2. 若遇到宏任务调用则同步执行宏任务代码
 3. 宏任务代码执行完后，检测微任务队列，若微任务队列不为空，一次性执行完所有微任务
 4. 重复2.3步骤直到所有代码执行完毕

### **并行和并发的区别**
|     | 并发  | 并行  |
|  ----  | ----  | ---- |
| 概念  | 在某个时刻通过CPU切换对多个任务进行处理  | 同一时刻发生多个事件  |
| CPU资源  | 需要对CPU资源进行抢占 | 不会对CPU资源进行抢占 |
| 线程切换  | 会进行线程切换  | 线程之间不会进行切换 |

### **setTimeout、setInterval、requestAnimationFrame 各有什么特点？**
1. setTimeout
<font color="#FF6347">由于JS是单线程执行的，如果前面的代码影响了性能，就会导致setTimeout不会按期执行</font>。可以通过代码修正校准定时器。

2. setInterval
setInterval是<font color="#FF6347">每隔一定delay就执行一次回调函数</font>。它和setTimeout一样，<font color="#FF6347">不能在预期的时间执行任务，而且存在累计执行的问题</font>。

**setInterval的缺点：**     
1. 无视代码错误：setInterval不关心自己调用的代码是否报错
2. 无网络延迟：setInterval不会管网络延迟（流量剧增、临时断网、带宽限制等），指挥定时发送请求，导致客户端网络队列中都是请求。
3. 不保证执行：如果你调用的函数需要花很长时间才能完成，那某些调用会被直接忽略。

**setTimeout和setInterval的区别**
1. setTimeout() 方法用于在指定的毫秒数后调用函数或计算表达式；而setInterval()则可以在每隔指定的毫秒数循环调用函数或表达式，直到clearInterval把它清除。
2. <font color="#FF6347">setTimeout()只执行一次，setInterval()可以执行多次</font>。
3. setTimeout用于延迟执行某方法或功能。setInterval则一般用于刷新表单，对于一些表单的假实时指定时间刷新同步。

3. requestAnimationFrame
<font color="#FF6347">requestAnimationFrame自带函数节流功能，延时效果精准</font>。


### **setTimeout准时执行**
**1. 采用系统时间补偿法**：修正每次时间间隔，前面耽误了时间，那么就缩小当前定时器的间隔时间。

![image](https://user-images.githubusercontent.com/70066311/169434315-15ba14a0-86c4-425a-a727-ecc1310c3e29.png)

第一个定时器执行了67ms，为了能在100ms的时候执行两次定时器，所以第二次定时器的时间就设置为33ms。

Offset = 现在的时间（67ms）- 执行一个定时器消耗的时间（50ms） = 时间差（17ms）

<font color="#FF6347">Offset = new Date().getTime() - (startTime + count * interval)</font>

当前定时器的时间间隔 = 原来定时器的时间间隔（50ms）- 时间差Offset（17ms）= 33ms。则下次定时器的时间间隔为33ms。

**2. While法**：在定时器执行之前，设置一个preTime计时器，记录执行器开始执行的时间，然后在while循环中得到当前的时间nowTime，判断是否(nowTime - preTime >= delay)，如果>=，则立即终止当前线程，执行setTimeout中的代码，这样时间间隔就为0了。<font color="#FF6347">这么做的坏处就是会强行霸占主线程，使页面无法响应</font>。

![image](https://user-images.githubusercontent.com/70066311/169430988-48784ca2-d9bf-444b-86f5-cfa89c6ef463.png)

**3. 使用web worker**：在HTML页面，如果在执行脚本时，页面状态是不可响应的，直到脚本执行完成后，页面才变得可响应。<font color="#FF6347">web Worker是运行在后台的js，独立于其他脚本，不会影响页面的性能</font>。

**4. 使用requestAnimationFrame**
`requestAnimationFrame`告诉浏览器你希望执行一个动画，并且要求浏览器在下次重绘之前调用指定的回调函数更新动画。该方法需要传入一个回调函数作为参数，该回调函数会在浏览器下一次重绘之前执行，回调函数执行次数通常是每秒60次，也就是每16.7ms 执行一次，但是并不一定保证为 16.7 ms。
```js
function setTimeout2 (cb, delay) {
    let startTime = Date.now()
    loop()
  
    function loop () {
      const now = Date.now()
      if (now - startTime >= delay) {
        cb();
        return;
      }
      requestAnimationFrame(loop)
    }
}
```

![1653490945(1)](https://user-images.githubusercontent.com/70066311/170294373-02f61a88-5ca7-4a7f-8b68-65f59a37a3d7.jpg)


### **AJAX、Fetch、axios**

![image](https://user-images.githubusercontent.com/70066311/170616707-82743a2d-f866-4526-89e2-5464f66e88d6.png)

**AJAX**

<font color="#FF6347">AJAX可以在不更新全局的情况下更新局部页面。通过在与服务器进行数据交换，可以使网页实现异步更新</font>。

AJAX的原理就是通过XHR对象来向服务器发起异步请求，从服务器获得数据，然后用JS来操作DOM更新页面。领导想找小李汇报一下工作，就委托秘书去叫小李，自己就接着做其他事情，直到秘书告诉他小李已经到了，最后小李跟领导汇报工作。Ajax请求数据流程与“领导想找小李汇报一下工作”类似，上述秘书就相当于XMLHttpRequest对象，领导相当于浏览器，响应数据相当于小李。浏览器可以发送HTTP请求后，接着做其他事情，等收到XHR返回来的数据再进行操作。

![image](https://user-images.githubusercontent.com/70066311/170992029-bdde0af0-20a0-4de2-b694-976fc9020b76.png)

**创建AJAX**     
```js
// 1. 创建 XMLHttpRequest 实例
let xhr = XMLHttpRequest()
// 2. 打开和服务器的连接
xhr.open('get', 'URL')
// 3.发送
xhr.send()
// 4. 接收变化。
xhr.onreadystatechange = () => {
    if(xhr.readyState == 4 && xhr.status == 200){   // readyState: ajax 状态，status：http 请求状态
        console.log(xhr.responseText);   //响应主体
    }
}
```
1. 创建`AJAX`实例：`let xhr = new XMLHttpRequest()`
2. 打开请求，配置请求前的配置项：`xhr.open([http method], [url], [async], [userName], [userPass])`
    - `http methods` 请求方式：`post`，`get`，`delete`，`put`，`head`，`options`，`trace`，`connect`
    - `url`：想服务器请求的路径
    - `async`：是否为异步请求
    - `userName`、`userPass`：用户名与密码
3. 通过`XMLHttpRequest.open()`方法与服务器建立连接
4. 发送请求：`XMLHttpRequest.send()` 方法中如果 Ajax 请求是异步的则这个方法发送请求后就会返回，如果Ajax请求是同步的，那么请求必须知道响应后才会返回。
5. 通过`XMLHttpRequest`对象的`onreadystatechange`事件监听服务器端的通信状态
6. 接收数据并进行处理
7. 将处理后的结果更新到页面上

**AJAX的优点**：
- 无需刷新页面就可以更新局部页面
- 异步操作：在进行异步请求时，客户端可以进行其他操作

**AJAX的缺点**：
- 本是针对MVC架构，不符合前端MVVM的浪潮
- 基于原生的XHR开发
- 配置和调用方式混乱

**axios原理**
<font color="#FF6347">axios是使用promise封装的ajax，它内部有两个拦截器，分别是request拦截器和response拦截器</font>。

- 请求拦截器的作用是<font color="#FF6347">在请求发送之前进行一些操作，例如在每个请求体上加入token</font>
- 响应拦截器的作用是<font color="#FF6347">接收到响应后做的一些操作，例如登录失效后需要重新登录跳转到登录页</font>

**axios的特点**
- 由浏览器端发起请求，在浏览器中创建XHR
- 支持promise API
- 监听请求和返回
- 更好的格式化，自动将数据转换为json数据
- 安全性更高，可抵御CSRF攻击

**axios常用的方法**
axios常用的方法有`get`、`post`、`put`、`patch`、`delete`等。其中<font color="#FF6347">`get`和`post`返回的都是`promise`对象，可以使用`promise`方法</font>

1. `axios.get(url[, config])`：get请求用于列表和信息查询
```js
axios.get('apiURL', {
    param: {
        id: 1
    }
    // param 中的的键值对最终会 ? 的形式，拼接到请求的链接上，发送到服务器。
}).then(res => {
    console.log(res);
})
.catch( error => {
    console.log(error)
}
```

2. `axios.delete(url[, config])`：删除
```js
axios.delete('apiURL', {
    params: {
        id: 1
    },
    timeout: 1000
})
```

3. `axios.post(url[, data[, config]])`：post请求用于信息的添加
```js
axios.post('apiURL',{
        user: '小新',
        age: 18
}).then( res => {
    console.log(res);
})
.catch( error => {
    console.log(error)
}
```

4. `axios.put(url[, data[, config]])`：更新操作
```js
axios.put('apiURL', {
    name: '小新',
})
```

5. `axios.patch(url[, data[, config]])`：更新操作
```js
axios.patch('apiURL', {
    id: 13,
},{
   timeout: 1000,
})
```

**put和patch的区别**
`patch`方法用来更新局部资源，<font color="#FF6347">假设我们有一个UserInfo，里面有userId，userName，userGender等10个字段。可你的编辑功能因为需求，在某个特别的页面里只能修改userName，这个时候就可以使用`patch`</font>。    

`put`也适用于更新数据，但必须提供完整的资源对象。

**axios相关配置**
- url：用于请求服务器的url
- method：请求方法，默认为get
- baseURL：会自动加到url前面
- proxy：用于配置代理
- transformRequest：允许在服务器发送请求之前修改请求数据

**axios拦截器执行顺序问题** 

- 请求拦截：axios的请求拦截器会先执行最后指定的回调函数，再依次向前执行
- 响应拦截：axios的响应拦截器会先执行最先执行的回调函数，再依次向后执行
例如：

```js
axios.interceptors.request.use(config => {
  console.log(`请求拦截1`);
  return config;
});
axios.interceptors.request.use(config => {
  // 在发送请求之前做些什么 
  console.log(`请求拦截2`);
  return config;
});

// 添加响应拦截器 
axios.interceptors.response.use(response => {
  // 对响应数据做点什么 
  console.log(`成功的响应拦截1`);
  return response.data;
});

// 添加响应拦截器 
axios.interceptors.response.use(response => {
  // 对响应数据做点什么 
  console.log(`成功的响应拦截2`);
  return response;
});

// 发送请求 
axios.get('/posts')
  .then(response => {
    console.log('成功了');
  }) 
```

执行结果为
```js
console.log("请求拦截2");
console.log("请求拦截1");
console.log("成功的响应拦截1");
console.log("成功的响应拦截2");
console.log("成功了");
```

**为什么axios中需要拦截器**

在SPA应用中，通常会使用token进行用户身份认证，这就要求每次请求必须携带用户的身份信息，针对这个需求，为了避免在每个请求中单独处理，我们可以通过封装统一的request函数来为每隔请求统一添加token信息。

但如果想为某些请求添加缓存时间或者控制某些请求的调用频率的话，我们就需要不断地修改request函数来扩展对应的功能。此时，如果在考虑对响应进行统一处理，我们的request函数将变得越来越庞大，也越来越难维护。<font color="#FF6347">所以axios为我们提供了拦截器</font>。

**为什么请求拦截2会在请求拦截1之前执行呢？**

在`axios`源码中将发送请求分为了<font color="#FF6347">请求拦截器、发送请求、响应拦截器、响应回调</font>，通过Promise的链式调用将这些部分结合起来了，这样就得到了发送请求拿到数据的全部过程。

下面分析源码：
1. 代码开始构建了一个`config配置对象`，用于第一次执行Promise返回一个成功的Promise
2. 最核心的数组`chain`，这个数组中保存了`请求拦截器`、`响应拦截器`和`发送请求函数`。该数组中间放的是`发送请求的函数`，左边放的是`请求拦截器`，右边放的是`响应拦截器`。在第一步中返回的Promise对象，将遍历`chain`数组逐一执行里面的函数，并返回新的Promise对象
3. 往数组中添加请求拦截函数，<font color="#FF6347">依照axios请求的执行顺序，请求拦截器应该在发送请求之前执行，故应该添加在发送请求函数的前面</font>，使用`unshift`方法
4. 往数组中添加响应拦截器函数，<font color="#FF6347">依照axios请求的执行顺序，响应拦截器应该在发送请求之后执行，故应该添加在发送请求函数的后面</font>，所以使用的是数组的push方法
5. Promise遍历执行，每次从`chain`中取出两个 函数执行（一个成功回调，一个失败回调）
6. 最后返回一个Promise对象，用于执行响应数据的回调

![image](https://user-images.githubusercontent.com/70066311/170620867-41f6a9ca-da44-4805-870c-fd7b62e5d42f.png)

**fetch**    
`fetch`是http请求数据的方式，它使用Promise，但不使用回调函数。`fetch`采用模块化设计，<font color="#FF6347">通过数据流处理数据，对于请求大文件或网速慢的情况相当有用</font>。默认情况下fetch不会接收或发送cookies。

优点：
- 采用模块化思想，将输入、输出、状态跟踪分离
- 基于promise，返回一个promise对象

缺点：
- 过于底层，有很多状态码没有进行封装
- 无法阻断请求
- 兼容性差
- 无法检测请求进度

### **Fetch、ajax与axios的区别**
- 传统的ajax利用的是`HMLHttpRequest这个对象`，和后端进行交互。而`JQury ajax`是对原生`XHR`的封装，多请求间有嵌套的话就会出现回调地狱的问题。
- `axios`使用`promise`封装`XHR`，解决了回调地狱的问题。
- 而`Fetch`没有使用`XHR`，使用的是`promise`

### **Fetch和Ajax比有什么优点**
`Fetch`使用的是`promise`，方便使用异步，没有回调地狱的问题。

### **总结**

![image](https://user-images.githubusercontent.com/70066311/168945541-08ae4f16-0796-49cb-b31a-1585cfc4a813.png)

`Ajax`是一种web数据交互的方式，它可以使页面在不重新加载的情况下请求数据并进行局部更新，它内部使用了`XHR`来进行异步请求。<font color="#FF6347">`Ajax`在使用`XHR`发起异步请求时得到的是`XML`格式的数据，如果想要JSON格式，需要进行额外的转换；`Ajax`本身针对的是`MVC框架`，不符合现在的`MVVM架构`；`Ajax`有回调地狱问题；`Ajax`的配置复杂</font>

而`Fetch`是XHR的代替品，它基于`Promise`实现的，并且不使用回调函数，它<font color="#FF6347">采用模块化结构设计，并使用数据流进行传输，对于大文件和网速慢的情况非常友好。但是`Fetch`不会对请求和响应进行监听；不能阻断请求；过于底层，对一些状态码没有封装；兼容性差</font>。

`axios`是基于`Promise`对`XHR`进行封装，它内部封装了两个拦截器，分别是请求拦截器和响应拦截器。请求拦截器用于在请求发出之前进行一些操作，比如：设置请求体，携带Cookie、token等；响应拦截器用于在得到响应后进行一些操作，比如：登录失效后跳转到登录页面重新登录。`axios`有get、post、put、patch、delete等方法。<font color="#FF6347">axios可以对请求和响应进行监听；返回`Promise`对象，可以使用`Promise`的API；返回`JSON`格式的数据；由浏览器发起请求；安全性更高，可以抵御CSRF攻击</font>。

### axios源码分析
#### axios的执行流程

1. 使用axios.create创建单独的实例，或直接使用axios实例
2. 对于axios调用进入到request()中进行处理
3. 执行请求拦截器
4. 请求数据转换器，将传入的数据进行处理，比如`JSON.stringify(data)`
5. 执行适配器，判断是浏览器端还是node端，以执行不同的方法
6. 响应数据转换器，对服务器端的数据进行处理，比如`JSON.parse(data)`
7. 执行响应拦截器，对服务器端数据进行处理，比如token失效跳转到登录页
8. 返回数据

![image](https://user-images.githubusercontent.com/70066311/170621660-20811d2b-f1bb-4510-9e8e-df47a7c7af3b.png)

**入口文件(lib/axios.js)**

导出的axios就是 实例化后的对象，还在其上挂载`create`方法，以供创建独立的实例，实现实例之间互不影响。

```js
// 创建实例过程的方法
function createInstance(defaultConfig) {
  return instance;
}
// 实例化
var axios = createInstance(defaults);
 
// 创建独立的实例，隔离作用域
axios.create = function create(instanceConfig) {
  return createInstance(mergeConfig(axios.defaults, instanceConfig));
};
// 导出实例
module.exports = axios;
```

**createInstance()**

```js
function createInstance(defaultConfig) {
  // 实例化，创建一个上下文
  var context = new Axios(defaultConfig);
 
  // 平时调用的 get/post 等等请求，底层都是调用 request 方法
  // 将 request 方法的 this 指向 context(上下文)，形成新的实例
  var instance = bind(Axios.prototype.request, context);
 
  // Axios.prototype 上的方法 (get/post...)挂载到新的实例 instance 上，
  // 并且将原型方法中 this 指向 context
  utils.extend(instance, Axios.prototype, context);
 
  // Axios 属性值挂载到新的实例 instance 上
  // 开发中才能使用 axios.default/interceptors
  utils.extend(instance, context);
 
  return instance;
}
```

`createInstance`执行流程：
1. 通过构造函数`Axios`创建实例`context`，作为下面`request`方法的上下文(this指向)
2. 将`Axios.prototype.request`方法作为实例使用，并把`this`指向`context`，形成新的实例`instance`
3. 将构造函数`Axios.prototype`上的方法挂载到新的实例`instance`上，然后将原型各个方法中的`this`指向`context`，这样才能使用`get、post`等方法
4. 将`Axios`的属性挂载到`instance`上

可以看到axios不是简单的创建实例context，而是在context上进行this绑定形成新的实例，然后将Axios属性和请求方法挂载到新的实例上

**拦截器(lib/core/InterceptorManager.js)**

拦截器涉及一个属性和三个方法：
- handler：存放use注册的回调函数
- use：注册成功和失败的回调函数
- eject：删除注册过的函数
- forEach：遍历回调函数

```js
function InterceptorManager() {
  // 存放 use 注册的回调函数
  this.handlers = [];
}

InterceptorManager.prototype.use = function use(fulfilled, rejected, options) {
  // 注册成功和失败的回调函数
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected,
    ...
  });
  return this.handlers.length - 1;
};

InterceptorManager.prototype.eject = function eject(id) {
  // 删除注册过的函数
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

InterceptorManager.prototype.forEach = function forEach(fn) {
  // 遍历回调函数，一般内部使用多
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};
```

**dispatchRequest(lib/core/dispatchRequest.js)**

dispatchRequest主要做了以下操作：
1. transformRequest: 对 config 中的 data 进行加工，比如对 post 请求的 data 进行字符串化(JSON.stringify(data))
2. adapter：适配器，包含浏览器端 xhr 和 node 端的 http
3. transformResponse: 对服务端响应的数据进行加工，比如 JSON.parse(data)

![image](https://user-images.githubusercontent.com/70066311/170645763-15c13090-7aeb-425e-abd7-8ca4dabcbd71.png)

**取消请求(lib/cancel/CancelToken.js)**

```js
var CancelToken = axios.CancelToken;
var source = CancelToken.source();
axios.get('/user/12345', {
  cancelToken: source.token
}).catch(function(thrown) {
  if (axios.isCancel(thrown)) {
    console.log('Request canceled', thrown.message);
  } else {
    // 处理错误
  }
});
// 取消请求（message 参数是可选的）
source.cancel('Operation canceled by the user.');
```

1. CancelToken 挂载 source 方法用于创建自身实例，并且返回 {token, cancel}
2. token 是构造函数 CancelToken 的实例，cancel 方法接收构造函数 CancelToken 内部的一个 cancel 函数，用于取消请求
3. 创建实例中，有一步是创建处于 pengding 状态的 promise，并挂在实例方法上，外部通过参数 cancelToken 将实例传递进 axios 内部，内部调用 cancelToken.promise.then 等待状态改变
4. 当外部调用方法 cancel 取消请求，pendding 状态就变为 resolve，即取消请求并且抛出 reject(message)

**总结**
1. 为了支持 axios() 简洁写法，内部使用 request 函数作为新实例
2. 使用 promsie 链式调用的巧妙方法，解决顺序调用问题
3. 数据转换器方法使用数组存放，支持数据的多次传输与加工
4. 适配器通过兼容浏览器端和 node 端，对外提供统一 api
5. 取消请求这块，通过外部保留 pendding 状态，控制 promise 的执行时机

## 面向对象
### **对象继承的方式**
继承就是<font color="#FF6347">使子类可以使用父类的属性和方式而不必编写相同的代码，子类也可以重写父类的属性和方法，这样会覆盖父类的属性和方法，使其获得与父类不同的功能</font>。

![image](https://user-images.githubusercontent.com/70066311/168773972-1d6ebe86-30e1-4bbc-940a-abd1acc62387.png)

实现方式：
1. 属性拷贝
将对象的所有成员复制一份给需要继承的对象。<font color="#FF6347">因为**浅拷贝**，对于引用类型，如果子类修改会对父类产生影响</font>

2. 原型继承
原型继承就是基于已有的对象来创建新的对象。实现原理就是向函数中传入一个对象，然后返回一个以这个对象为原型的对象。<font color="#FF6347">缺点与原型链继承相同：只能继承父构造函数的原型对象上的成员，不能继承父构造函数的实例对象的成员</font>

使用Object.create方法实现继承

```js
  let parent4 = {
    name: "parent4",
    friends: ["p1", "p2", "p3"],
    getName: function() {
      return this.name;
    }
  };

  let person4 = Object.create(parent4);
  person4.name = "tom";
  person4.friends.push("jerry");

  let person5 = Object.create(parent4);
  person5.friends.push("lucy");

  console.log(person4.name); // tom
  console.log(person4.name === person4.getName()); // true
  console.log(person5.name); // parent4
  console.log(person4.friends); // ["p1", "p2", "p3","jerry","lucy"]
  console.log(person5.friends); // ["p1", "p2", "p3","jerry","lucy"]
```

因为Object.create实现的是浅拷贝，所以对于引用类型，存在修改数据混乱的问题

3. 原型链继承
原型链继承涉及构造函数、原型和实例。
```js
function Parent() {
  this.name = 'parent1';
  this.play = [1, 2, 3]
}
function Child() {
  this.type = 'child2';
}
Child.prototype = new Parent()
console.log(new Child())
```
<font color="#FF6347">创建子类实例时，不能向父构造函数传递参数，导致继承的父类属性没有值。如果包含引用类型，会被所有的实例对象共享，容易造成修改混乱</font>

```js
const s1 = new Child()
const s2 = new Child()
s1.play.push(4)
console.log(s1.play, s2.play)   // [1, 2, 3, 4]
```

4. 借助构造函数
使用call或apply继承。<font color="#FF6347">可以解决向父构造函数传参的问题，可以继承父类的实例属性和方法，但是不能获取父构造函数原型上的属性和方法</font>

```js
function Parent(){
  this.name = "parent"
}

Parent.prototype.getName = function(){
  return this.name
}

function Child(){
  Parent.call(this)
  this.type = "Child"
}

let child = new Child()

console.log(child)
console.log(child.getName())
```

5. 组合继承
使用call或apply和原型继承。<font color="#FF6347">父类构造函数的属性和方法继承到了子类构造函数的实例中，并且继承了父类构造函数原型对象上的成员，但会给子类添加很多不必要的属性和方法</font>

```js
function Parent() {
  this.name = "parent"
  this.play = [1, 2, 3]
}

Parent.prototype.getName = function () {
  return this.name
}

function Child() {
  // 第一次调用父类
  Parent.call(this)
  this.type = "child"
}

// 第二次调用父类
Child.prototype = new Parent()
Child.prototype.constructor = Child
const child1 = new Child()
const child2 = new Child()
child1.play.push(4)

console.log(child1)
console.log(child2)
console.log(child1.getName())
```

<font color="#FF6347">组合继承解决了构造函数继承和原型链继承的缺点，但是却调用了两次父类，造成了额外的性能开销</font>。

6. 构造函数 + 深拷贝

7. 寄生式继承
在原型继承的基础上增加一些方法。<font color="#FF6347">无法实现函数的复用</font>

```js
let parent5 = {
    name: "parent5",
    friends: ["p1", "p2", "p3"],
    getName: function() {
        return this.name;
    }
};

function clone(original) {
    let clone = Object.create(original);
    clone.getFriends = function() {
        return this.friends;
    };
    return clone;
}

let person5 = clone(parent5);

console.log(person5.getName()); // parent5
console.log(person5.getFriends()); // ["p1", "p2", "p3"]
```

8. 寄生组合式继承
<font color="#FF6347">寄生式组合继承的方式是使用父类型的原型的副本来作为子类型的原型，这样就避免了创建不必要的属性</font>

```js
function clone (parent, child) {
    // 这里改用 Object.create 就可以减少组合继承中多进行一次构造的过程
    child.prototype = Object.create(parent.prototype);
    child.prototype.constructor = child;
}

function Parent6() {
    this.name = 'parent6';
    this.play = [1, 2, 3];
}
Parent6.prototype.getName = function () {
    return this.name;
}
function Child6() {
    Parent6.call(this);
    this.friends = 'child5';
}

clone(Parent6, Child6);

Child6.prototype.getFriends = function () {
    return this.friends;
}

let person6 = new Child6();
console.log(person6); //{friends:"child5",name:"child5",play:[1,2,3],__proto__:Parent6}
console.log(person6.getName()); // parent6
console.log(person6.getFriends()); // child5
```

9. es6 extends

### ES5继承和ES6继承的区别
ES5的继承是通过prototype和构造函数机制来实现。<font color="#FF6347">ES5的继承是先创建子类的实例对象，然后再将父类的方法添加到this上</font>。

```js
function parent(a, b) {
  this.a = a;
  this.b = b;
}

function child(c) {
  this.c = c
};

parent.call(child, 1, 2)
// 使用call绑定其实是实现了如下代码：
// child.prototype = new Parent(1, 2)
console.log(child);
```

ES6的继承机制<font color="#FF6347">是先创建父类的实例对象this，然后再调用子类的构造函数修改this</font>。

```js
class Parent {
  constructor(a, b) {
    this.a = a
    this.b = b
  }
}

class child extends Parent {
  constructor(a, b, c) {
    // super(a, b)
    this.c = c
  }
}

const c = new child(1, 2, 3)
console.log(c);
```

可以看到：<font color="#FF6347">ES5的继承原理是先创建子类元素child的实例对象，然后再把父类元素parent的`原型对象`中的属性赋值给子类元素child的实例对象里面，从而实现继承；ES6引入了class的概念，父类首先实例化出来，再修改子类构造函数中的this实现继承</font>。

## 垃圾回收机制
### **垃圾回收的概念**
<font color="#FF6347">JS代码运行时，需要分配内存空间来存储变量和值，当变量不再参与运行时，就需要系统收回被占用的内存空间</font>。

### **回收机制**
- JS具有自动回收机制，会定期对那些不再使用的变量、对象所占用的内存进行释放，原理就是找到不再使用的变量，然后释放掉其占用的内存。
- JS有全局变量和局部变量。 <font color="#FF6347">全局变量会一直保存在内存中，直到页面卸载才回收变量内存；局部变量声明在函数内部，会在函数执行结束后回收内存</font>。
- 当使用闭包时，函数内部定义的局部变量会一直留在内存中，不会被使用。 <font color="#FF6347">所以尽量避免使用闭包，以免造成内存泄漏</font>。
 
### **垃圾回收方式**
1. 标记清除：
- 当变量进入执行环境时，就标记这个变量`进入环境`，被标记为`进入环境`的变量是不能被回收的，因为他们正在被使用。当变量离开环境时，就会被标记为`离开环境`，被标记为`离开环境`的变量会被内存释放。
- 垃圾收集器在运行时会给存储在内存中的所有变量加上标记。然后，它会去掉环境中的变量和被环境中的变量引用的标记，剩下的变量将被视为需要删除的变量，垃圾收集器完成内存清除工作，销毁那些带有标记的值并回收他们所占用的内存。
2. 引用计数：
- 引用计数就是跟踪记录每个值被引用的次数。当声明了一个变量并将一个引用类型赋值给该变量时，则这个值的引用次数就是1。相反，如果包含对这个值引用的变量又取得了另外一个值，则这个值的引用次数就减1。当这个引用次数变为0时，说明这个变量已经没有价值，因此，在垃圾回收器下次再运行时，这个变量所占有的内存空间就会被释放出来。
- 这种方法会引起<font color="#FF6347">循环引用</font>问题，例如：
```js
function fun(){
  let obj1 = {}
  let obj2 = {}
  obj1.a = obj2   // obj1引用obj2
  obj2.a = obj1   // obj2引用obj1
}
```
在上面的例子中，obj1和obj2相互引用，两个对象的引用次数都为2.当函数执行完后，两个对象离开作用域，但obj1和obj2的引用次数还是2，不会减为0，这样就不会被回收。

解决方式就是：<font color="#FF6347">手动释放内存</font>。
```js
obj1.a = null
obj2.a = null
```


### **减少垃圾回收**
虽然浏览器可以进行自动垃圾回收，但当代码比较复杂时，垃圾回收的代价比较大，所以应该尽量减少垃圾回收。
- 对数组进行优化：在清空一个数组时，将其赋值为`[]`
- 对object进行优化：对象尽量复用，对于不再使用的对象，赋值为`null`
- 对函数进行优化：在循环中的`函数表达式`，如果可以复用，尽量放在函数外部

### **哪些情况会导致内存泄漏**
1. **意外的全局变量**：<font color="#FF6347">如果一个变量未声明，就会意外的创建一个全局变量，这会使这个变量一直放在内存中无法被回收</font>
2. **被遗忘的计时器或回调函数**：设置了setInterval而忘记取消它，<font color="#FF6347">如果循环函数有对外部变量的引用的话</font>，那么这个变量会被一直留在内存中，而无法被回收
3. **闭包**：不合理的使用闭包，会导致变量一直存在内存中
4. **脱离DOM的引用**：<font color="#FF6347">获取了一个DOM元素的引用，而后面这个元素被删除，由于一直保留了对这个元素的引用，所以无法被回收</font>

### for in 和 for of 的区别
- for in会遍历对象的原型链，性能差；for of只遍历当前对象
- for in获取对象的index；for of获取对象的value
- for in适合遍历对象，不适合遍历数组；for of可以用来遍历数组、类数组对象，字符串、Set、Map 以及 Generator 对象。

### splice和slice的区别
#### **splice**
splice会改变原数组，他通过删除或者替换现有元素或者原地添加新的元素来修改数组，并且以数组形式返回被修改的内容。有三个参数：
start，指定修改的开始位置，如果超出数组的长度，则从数组末尾开始添加;
       如果是负值，从数组末尾开始第几位;如果负数也大于数组的长度，则开始位置为0。
deleteCount 可选参数，表述要移除的数组元素的个数。
items，可选，表示要添加进数组的元素。
```js
let arr1 = [1, 2, 3, 4, 5, 6, 7, 8]
// arr1.splice(1, 2)   // [2, 3]
arr1.splice(1, 3, 9, 10, 11)   // [ 1, 9, 10, 11, 7, 8 ]
arr1.splice(1, 0, 9, 10, 11)   // [1, 9, 10, 11, 2, 3, 4, 5,  6, 7, 8]
```

#### **slice**
slice返回由start和end决定的一个浅拷贝的新数组，原数组不会改变。有两个参数：
start，起始索引，从该索引提取原数组元素，如果是负数，则从末尾开始;如果省略start，则默认是数组的0下标开始
end，结束索引，在该索引结束提取原数组元素，如果end被省略，slice会一直到末尾;如果end大于数组的长度，也会提取到数组末尾 
```js
let arr2 = [1, 2, 3, 4, 5, 6, 7, 8]
const res1 = arr2.slice(1, 2)    // [ 2 ]
const res2 = arr2.slice(1)   // [2, 3, 4, 5, 6, 7, 8]
```

# 前端工程化
## Git
### 常用的git命令
#### git init
创建一个新的代码库

#### git clone
根据URL获得一个代码库

#### git add 
将文件添加到暂存区

#### git commit 
将文件提交到本地仓库，可以在版本历史记录中永久记录

#### git push
将本地仓库代码提交到远程仓库

#### git reset commit 
撤销指定提交之后的所有提交，在本地保留变更

#### git pull
该命令将获取远程服务器上的变更，并合并到你的工作目录


### **git和svn的区别**
- git是分布式的，svn是集中式的。因此如果服务器出现问题，我们无法使用svn来提交代码。
- svn的分支是复制整个版本库的一份完整目录，而git的分支是指针只想某次提交。因此<font color="#FF6347">git分支创建开销更小而且在分支上变化不会影响到其他人；svn的分支变化会影响到其他人。
</font>

### **git pull和git fetch的区别**
- git fetch只能将远程仓库的变化下载下来，并没有和本地分支合并
- git pull会将远程仓库的变化下载下来，并和当前分支进行合并

### **git rebase和git merge的区别**
- git merge会新建一个commit对象，将两个分支以前的commit记录都指向这个新commit记录。这种方法会保留之前每个分支的commit历史。
- git rebase会先找到两个分支的第一个共同的commit祖先记录，然后将提取当前分支之后的所有commit记录，然后将这个 commit 记录添加到目标分支的最新提交后面。经过这个合并后，两个分支合并后的 commit 记录就变为了线性的记录了。

## node.js 
### 对node.js的理解
`node.js`是一个跨平台的JS运行时环境，是基于V8 JS引擎的，利用事件驱动、非阻塞和异步输入输出模型等技术提高性能。<font color="#FF6347">`node.js`就是一个服务器端的JS运行环境</font>。

#### 非阻塞异步
`node.js`采用了非阻塞型I/O机制，在做I/O操作时不会造成任何的阻塞，当完成之后会以时间的形式通知执行操作。

例如：在执行了访问数据库的操作后，立即执行其之后的代码，把数据库返回结果的处理代码放在回调函数中，从而提高了程序的执行效率。

#### 事件驱动
事件驱动就是当进来一个新的请求时，请求将会被压入一个事件队列中，然后通过一个循环来检测队列中的时间状态的变化，如果检测到有状态变化的事件，那么就执行该事件对应的回调函数。

例如：比如读取一个文件，文件读取完毕后，就会触发对应的状态，然后通过对应的回调函数来进行处理。

![image](https://user-images.githubusercontent.com/70066311/171083320-c068157b-828f-497d-90b2-922ddb4840b4.png)

### node.js的优缺点
优点：
- 处理高并发场景性能更佳
- 适合I/O密集型应用

因为node.js也是单线程的，所以也会带来一些缺点：
- 不适合CPU密集型应用
- 只支持单核CPU，不能充分利用CPU
- 可靠性低，一旦代码某个环境崩溃，整个系统都崩溃

### 如何实现jwt鉴权机制


## Webpack
### **对webpack的理解**
webpack是一个用于现代JS应用程序的静态模块打包工具。webpack的目的是实现前端项目的模块化，皆在更高效的管理和维护项目中的每一个资源。<font color="#FF6347">webpack可以很好的管理、打包开发中使用的HTML、CSS、JS和静态文件（图片、字体）等，让开发更高效
</font>。

### **webpack解决了什么问题（基本功能）**
- 代码转化：可以把ts转化为js；less、scss转换为css
- 文件优化：压缩HTML、CSS、JS文件，压缩图片等
- 代码分割：提取首屏不需要执行的代码，让其异步执行，实现按需加载
- 代码校验：会检查代码是否合规，检测单元测试是否通过

### **webpack的构建**
1. 初始化流程：从配置文件中读取并合并参数，初始化需要使用的插件和插件执行所需要的参数
2. 编译构建流程：从Entry发出，针对每个Moudule串行调用对应的Loader编译文件，再找到该Module以来的Module，递归地进行编译处理
3. 输出流程：对编译后的Module组合成Chunk，把Chunk转换成文件，输出到文件系统


### **Webpack和grunt、gulp的区别**
Grunt和Gulp是<font color="#FF6347">基于任务运行的工具
</font>：他们会自动执行指定的任务，就像流水线，把资源放上去然后通过不同的插件进行加工。

Webpack是<font color="#FF6347">基于模块化打包的工具</font>：自动化处理模块，webpack把一切都当作模块，当webpack处理应用程序时，他会递归地构建一个依赖关系图，其中包含应用程序需要的每个模块，然后将这些模块打包成一个或多个bundle。

### **loader**
在遇到import或require加载模块时，webpack只能支持对js和json文件的打包，其他类型的文件都需要经过loader处理。<font color="#FF6347">loader可以做语言翻译（将TS转化为JS）、格式转换（将内联图像转换为data URL）、样式编译（允许直接在JS模块中import
CSS文件）</font>。

### **plugin**
plugin的作用比loader更大，webpack在生命周期内会广播出许多事情，plugin可以监听这些事情，在合适的时机处理事务，例如打包优化和压缩、重新定义环境中的变量、按需加载等。

### **loader和plugin的区别**
1. 作用不同
loader是文件加载器，能够加载资源文件，并对这些文件进行编译、压缩，最终打包到指定的文件中。将A文件转化为B文件，单纯的进行文件转化。     
plugin扩展了webpack的功能，例如：打包优化、重新定义环境中的变量、按需加载等。

2. 运行时机不同

![image](https://user-images.githubusercontent.com/70066311/166476716-b8f172cb-f5f7-44f2-a579-340fc51cc972.png)

loader运行在打包文件之前；plugin在整个webpack生命周期都起作用。


### **有哪些常见的loader**
- file-loader：把文件输出到每一个文件夹中，在代码中通过相对URL去引用输出的文件
- url-loader：把文件内容以base64的方式注入到代码中
- source-map-loader：加载额外的Source Map文件，以方便断点调试
- image-loader：加载并压缩图片文件
- babel-loader：把ES6代码转化为ES5代码
- css-loader：加载CSS，支持模块化、压缩、文件导入等特性
- style-loader：把CSS代码注入到JS中，通过DOM操作去加载CSS
- eslint-loader：通过ESlint检查JS代码

通常css-loader配合style-loader使用，因为<font color="#FF6347">css-loader只是用来解析css，而不会将解析后的css文件插入到DOM中，这时要用style-loader将css挂载到\<head>中</font>

### **常见的plugin**
- define-plugin：定义环境变量
- html-webpack-plugin：简化html文件创建
- uglifyjs-webpack-plugin：通过UglifyES压缩ES6代码
- webpack-parallel-uglify-plugin：多核压缩，提高压缩效率
- webpack-bundlde-analyzer：可视化webpack输出文件和体积
- mini-css-extract-plugin：CSS提取到单独的文件中，支持按需加载

### **bundle、chunk、module是什么？**
- bundle：<font color="#FF6347">由webpack打包出来的文件</font>
- chunk：代码块，一个chunk由多个模块组合而成，<font color="#FF6347">用于代码的合并和分割</font>
- module：是开发中的单个模块，在webpack的世界中一切皆模块，<font color="#FF6347">一个模块对应一个文件，webpack会从配置的entry中递归开始找出所有依赖的模块</font>。

### **loader和plugin的区别**
不同的作用：
- Loader：webpack将以切换文件都看作模块，但webpack只能加载和解析js文件和JSON文件，如果想要将其他文件打包的话，就必须要使用loader。所以<font color="#FF6347">loader的作用是让webpack有了加载和解析非JS文件的能力</font>。
- Plugin：plugin可以扩展webpack的功能，让webpack具有更多的灵活性。在webpack运行的生命周期中会广播许多事件，plugin可以监听这些事件、在合适的时机通过webpack提供的API改变输出结果。

### **webpack热更新的实现原理**  
热更新又称为热替换（HMR），可以做到不刷新浏览器就将更新的内容替换就内容。

![1649059032(1)](https://user-images.githubusercontent.com/70066311/161499544-083ee38f-28c3-4d01-9264-921ea2ee2c9c.jpg)

### **如何利用webpack优化前端性能**
- 压缩代码：删除多余的代码、注释，简化代码写法。利用webpack的 UglifyJsPlugin 和 ParallelUglifyPlugin 来压缩JS⽂件
- Tree Shanking：将代码永远不会走到的片段删除
- Code Splitting：将代码按组件分块、做到按需加载，同时充分利用浏览器缓存
- 提取公共第三方库：将公共模块抽取，利用浏览器缓存可以长期缓存这些无需变动的代码

webpack优化前端的手段有：
- 图片压缩
- Tree Shaking：删除项目中未被引用的代码和被走到的分支
- 代码分离：将代码分离到不同的bundle中，按需加载。代码分离可以使bundle更小，以控制资源加载的优先级
- 优化loader（在配置loader中设置属性）：对于Loader来说，影响打包效率的首先肯定是babel，因为babel会将代码转换成字符串，再转换成AST，对AST进行词法分析后再进行转变生成新的代码。项目越大，转换代码越多，效率就越低。所以我们在配置babel中可以在`excludes`属性中添加不需要被babel转译的代码，例如`node_modules`。还可以设置将babel编译过的文件缓存起来，下次只需要编译更改过的代码文件即可。
- HappyPack（插件）：因为webpack在打包过程中也是单线程的，而HappyPack可以将Loader的同步执行转换为并行的，开启多个线程，并行执行loader，这样就能充分利用系统资源来加快打包效率了。
- 代码压缩：在weboack中使用`UglifyJS`来压缩代码，但这个插件也是单线程运行的，可以使用`webpack-parallel-uglify-plugin`来并行运行`UglifyJS`从而提高效率；在webpack4直接将`mode`设置为`production`即可开启代码压缩的功能。
- 设置别名来映射一个路径
- 按需加载：在开发SPA应用时，项目中都会存在很多路由页面，将这些页面全部打包到一个js文件中，但这样同时也加载了很多不需要的代码。为了首页能够更快的呈现给用户，希望页面能加载的文件体积越小越好，这时就可以使用按需加载，将每个路由页面单独打包为一个文件，在使用当前页面时再去加载。
- 利用CDN加速：将引用的静态资源路径修改为CDN上对应的路径

### source-map
JS脚本正在变得越来越复杂，大部分源码都要经过`转换`，才能投入生产环境。

常见的`源码转换`，主要是以下三种情况：
1. 压缩，减小体积
2. 多个文件合并，减少http请求次数
3. 其它语言编译成js，例如jsx编译为js

这三种情况，都使得实际运行的代码`debug`变得很难。通常，JavaScript的解释器会告诉你，第几行第几列代码出错。但是，这对于转换后的代码毫无用处。举例来说，jQuery 1.9压缩后只有3行，每行3万个字符，所有内部变量都改了名字。你看着报错信息，感到毫无头绪，根本不知道它所对应的原始位置。

这就是`source-map`要解决的问题。

#### 什么是source-map
<font color="#FF6347">`source-map`就是一个信息文件，里面存储着位置信息，也就是说，转换后的代码的每一个位置，所对应的转换前的位置</font>。有了`source-map`，除错工具将直接展示原始代码，而不是转换后的代码。

source-map的文件结构
```js
{
　version: 3,
　file: "out.js",
　sourceRoot: "",
　sources: ["foo.js", "bar.js"],
　names: ["src", "maps", "are", "fun"],
　mappings: "AAgBC,SAAQ,CAAEA"
}
```

#### source-map如何做到两个文件的各个位置一一对应
`source-map`中的`mapping`属性，这是一个很长的字符串，分为三层：
1. 第一层是<font color="#FF6347">行对应</font>，以`；`表示，每个`；`对应转换后的源码的一行。所以，第一个分号前的内容，就对应源码的第一行，以此类推。
2. 第二层是<font color="#FF6347">位置对应</font>，以`，`表示，每个`，`对应转换后源码的一个位置。所以，第一个逗号前的内容，就对应该行源码的第一个位置，以此类推。
3. 第三层是<font color="#FF6347">位置转换</font>，代表该位置对应的转换前的源码位置。

例如：
```js
mappings:"AAAAA,BBBBB;CCCCC"
```

上述mappings表示：转换后的源码分成两行，第一行有两个位置，第二行有一个位置。

#### 位置对应的原理
每个位置使用五位，表示五个字段。
1. 第一位表示这个位置在转换后的代码的第几列
2. 第二位表示这个位置属于sources属性中的哪一个文件
3. 第三位表示这个位置属于转换前代码的第几行
4. 第四位表示这个位置属于转换前代码的第几列
5. 第五位表示这个位置属于names属性中的哪一个变量

### webpack压缩合并js后如何去排查错误？



### **Babel**
Babel可以让我们在开发中使用TS、JSX、ES6语法而不用担心浏览器兼容性问题，它可以将这些语法特性转换为浏览器可以识别的语言。

Babel的原理是<font color="#FF6347">将代码转换为AST，对AST应用各种插件进行处理，最终输出编译后的JS代码</font>。

# 计算机网络
## 什么是HTTP协议
HTTP（超文本传输协议）是客户端与服务器之间交换报文的方式，默认使用80端口，是应用层协议，它使用TCP作为传输层协议，保证了数据传输的可靠性。 

## HTTP协议的优点和缺点   
**优点**：  
1. 简单：客户端向服务器发送请求时，只需要传送请求方法和路径。
2. 无连接：限制每次连接只处理一个请求。服务器处理完客户端的请求并收到客户端的应答后，才断开连接，这样可以节省传输时间。
3. 灵活：HTTP允许传输任意类型的数据。
4. 无状态：HTTP是无状态协议。缺少状态意味着如果后面的处理需要前面的信息，则必须重传，这样会导致每次连接传送的数据量非常大。如果它不需要前面的数据，应答就非常快。

**缺点**：
1. 无状态：HTTP服务器不会保存关于客户的任何信息。
2. 明文传输。
3. 没有进行身份认证。
4. 无法验证报文的完整性。

## **HTTP常见的字段**
- Host：客户端发送请求时，用来指定服务器的域名。<font color="#FF6347">有了Host字段，就可以将请求发往对应的网站</font>。

![image](https://user-images.githubusercontent.com/70066311/168030943-d6fe8874-dc5c-49d6-813b-ddcf2e520b53.png)


- Content-Length：服务器返回数据时，表明返回数据的长度。
```
Content-Length
```

- Connection：最常用于客户端要求服务器使用TCP连接。
```
Connection: keep-alive
```

- Content-Type：用于服务器回应时，告诉客户端，本次数据是什么格式。
```
Content-Type: text/html; charset=utf-8
```
上面的类型表明，发送的是网页，而且编码是UTF-8。

- Accept：客户端请求时，使用Accept字段声明自己可以接受哪些数据格式
```
Accept: */*
```
上面代码中，客户端声明自己可以接受任何格式的数据。


##  <font color="#FF6347">HTTP 1.0 和 HTTP 1.1之间的区别</font>
- 连接方面：HTTP 1.0使用非持久连接；HTTP 1.1使用持久连接。持久连接可使多个HTTP请求复用同一个TCP连接，以此来避免使用非持久连接时每次需要建立连接的时延。
- 资源请求方面：HTTP 1.0存在浪费带宽的现象，当只想请求数据的某个部分时，HTTP 1.0会将整个数据返回；而HTTP 1.1允许返回部分数据。
- 缓存方面：HTTP 1.1比HTTP 1.0的缓存策略更多，例如：Etag、if-Match、if-None-Match等。
- HTTP 1.1还增加了PUT、HEAD等请求。

##  <font color="#FF6347">HTTP 1.1 和 HTTP 2.0的区别</font>
- 二进制协议：HTTP 2.0的头部信息和数据体都是二进制，HTTP 1.1的头部信息是文本。
- 多路复用：HTTP 2.0中客户端和服务器都可以同时发送多个请求或回应，这样就避免了队头堵塞（HTTP 规定报文必须是“一发一收”，如果某个请求因为处理耽误了太多时间，那么它后面的请求就不得不等待，造成<font color="#FF6347">队头堵塞</font>的问题）。
- 头部数据压缩：HTTP 2.0对头部信息进行了压缩。因为头部信息中例如cookie等字段都是重复，每次请求都会带上这些字段造成带宽的浪费。
- 服务器推送：HTTP 2.0允许未经服务器允许，向客户端推送资源（静态资源），这样可以减少延迟。
- HTTP2.0使用数据流进行传输，因为HTTP2.0不按顺序发送，每个数据包都有这个数据流ID，用于区分它是哪个数据流的。

## HTTP协议是什么工作模式
- http 1.0：单工。因为是短连接，客户端发起请求之后，服务器处理完请求并收到客户端的响应后才断开连接。
- http 1.1：半双工。默认开启长连接`keep-alive`，开启一个连接可以发送多个请求。
- http 2.0：全双工。允许服务器主动向客户端发送数据。

### **页面有多张图片，HTTP如何加载**
- 对于HTTP 1，需要进行多次请求来加载图片，因为一个域名下最大的TCP连接数为6。<font color="#FF6347">可以使用**多域名部署**来解决，提高同时请求的数目，加快页面图片的获取速度</font>。
- 对于HTTP 2，可以一次加载出多张图片，因为HTTP 2采用多路复用，可以在一个TCP连接多进行多次HTTP请求。

## HTTP 3.0
在HTTP 2.0中多个HTTP请求会复用一个TCP，一旦发生丢包，会阻塞所有的HTTP请求，这时基于TCP传输可能出现的问题，所以HTTP 3.0把TCP换成了UDP。
UDP是不可靠的传输协议，不会管传输顺序，不管丢包，所以不会出现HTTP 1.1中的队头阻塞和HTTP 2.0中丢包全部重传的问题。

HTTP 3.0基于UDP协议实现了类似于TCP的多路复用数据流、传输可靠性等功能。
HTTP 3.0在UDP的基础上增加了一层用来保障数据传输的可靠性，提供了数据包重传、拥塞控制等特性。

## 如何使用UDP实现可靠传输
### **TCP协议的缺陷**
- 升级TCP的工作很困难
- TCP建立连接的延迟
- TCP存在队头阻塞问题
- 网络迁移需要重新建立TCP连接

#### 1. 升级TCP工作困难
TCP协议是现在内核中实现的，应用程序只能使用不能修改，如果想升级TCP协议，那么只能升级内核，但是升级内核涉及到计算机底层，比较复杂，并且升级后还要进行大量测试，所以内核的升级都十分保守和缓慢。

#### 2. TCP建立连接的延迟
TCP需要建立三次握手有才能进行数据传输，而如果使用了HTTPS协议还要经历TSL四次握手后才能进行TCP传输，这样就增加了传输的延迟。

#### 3. TCP存在队头阻塞问题
HTTP 2.0多个请求实在一个TCP连接中的，当发生丢包时，整个TCP都要等待重传，那么就会阻塞该TCP连接中的所有请求。

#### 4. 网络迁移需要重新建立TCP连接
TCP连接是通过（源IP、源端口、目标IP、目标端口）的一个四元组确定的。如果从4G网络切换到Wifi，那么IP地址就发生了变化，就意味着必须要重新建立连接。


### UDP基于**QUIC协议**进行可靠传输
![image](https://user-images.githubusercontent.com/70066311/167784542-46c90495-5baf-425b-a2ca-e27e6eb8bc35.png)

#### QUIC是如何实现可靠传输的？
在HTTP 3.0中，在UDP报文头部与HTTP消息之间，共有3层头部：
![image](https://user-images.githubusercontent.com/70066311/167785000-3fee4127-5f9b-4e00-a2b8-893ec28482b0.png)

整体看的视角是这样的：
![image](https://user-images.githubusercontent.com/70066311/167785056-9b1aa542-2d8c-441e-a7f7-44e01b6dba9e.png)

**Packet Header**：Packet Header在首次建立连接和日常传输数据时使用的Header是不同的。

![image](https://user-images.githubusercontent.com/70066311/167785727-94f4165e-f277-4dee-91da-fbecdc2f80e6.png)

- Long Packet Header 用于首次建立连接。
- Short Packet Header 用于日常传输数据。

QUIC也需要进行三次握手建立连接，目的是<font color="#FF6347">确定链接ID</font>。

建立连接时，连接ID是由服务器根据客户端的 Source Connection ID 字段生成的，这样后续传输时，双方只需要固定住Destination Connection ID（连接 ID ）即可，从而实现连接迁移功能。所以可以看到日常传输数据的 Short Packet Header 不需要再传输 Source Connection ID 字段了。

<font color="#FF6347">Short Packet Header 中的 Packet Number 是每个报文独一无二的编号，它是严格递增的，也就是说就算Packet N丢失了，重传是已经不是Packet N了，还是Packet N + M</font>。

![image](https://user-images.githubusercontent.com/70066311/167787163-375dd7c7-bdb0-4379-94c9-ab0bf7653036.png)

对比TCP，<font color="#FF6347">TCP在重传的序号和丢包的序号是一样的，所以服务器返回的ACK也是一样的，这样的话客户端就无法判断出到底是哪一个报文的响应</font>。在计算RTT（往返时间）时应该选择从发送原始报文开始计算，还是重传原始报文开始计算？

- 如果算成原始报文的响应，但实际上是重传报文的响应（上图右），会导致采样 RTT 变大；
- 如果算成重传报文的响应，但实际上是原始报文的响应（上图左），又很容易导致采样 RTT 过小；

RTT计算不准确的话，那么RTO（超时时间）也就不精确，因为RTO是基于RTT来计算的，RTO计算不准确可能导致重传的概率事件增大。

<font color="#FF6347">在QUIC中，Packet Number是严格递增的，即使是重传报文，它的Packet Number也和原始报文不同，这样就能更加精确地计算出报文的RTT</font>。

![image](https://user-images.githubusercontent.com/70066311/167788451-12ccd95d-4d11-471e-b37d-f59a10d4a4e5.png)

QUIC使用的Packet Number单调递增的设计，可以让数据包不再像TCP那样必须有序确认，QUIC支持乱序确认，当报文丢后，只要新的已接收的报文确认，当前窗口就会继续移动。

<font color="#FF6347">待发送端超过一定时间没有收到Packet N的确认报文后，会将需要重传的数据包放到待发送的队列中，重新编号比如数据包Packet N + M后重新发送给接收端，对重传数据包的处理跟发送新的数据包类似，这样就不会因为丢包重传将当前窗口阻塞在原地，从而**解决了队头阻塞的问题**</font>。

<font color="#FF6347">packet Number单调递增有两个好处：</font>

- 可以更加精确的计算RTT，没有TCP重传的歧义。
- 可以支持乱序确认，防止因为丢包重传将当前窗口阻塞在原地，而TCP必须是顺序确认的，丢包时会导致窗口不滑动。

**QUIC Frame Header：**一个Packet报文中可以放多个 QUIC Frame

![image](https://user-images.githubusercontent.com/70066311/167790381-23421ebe-196f-412e-b9ba-a489c9200ba1.png)

Packet Number 是严格递增，即使重传报文的 Packet Number 也是递增的，既然重传数据包的 Packet N+M 与丢失数据包的 Packet N 编号并不一致，我们怎么确定这两个数据包的内容一样呢？

<font color="#FF6347">通过Stream类型的 Frame，来确认两个报文是否一致</font>。（还有很多其它类型的Frame）

![image](https://user-images.githubusercontent.com/70066311/167791962-d52c6d71-b141-4cba-ad1d-618703cd7aea.png)

- Stream ID：多个并发传输的HTTP消息，通过不同的Stream ID加以区别
- Offset：类似于TCP中的Seq，保证数据传输的有序性和可靠性
- Length：指明了Frame数据的长度

<font color="#FF6347">通过Stream ID + Offset字段信息实现数据的有序性，通过比较两个数据包的Stream ID和Stream Offset，如果都一致，就说明这两个数据包的内容一致</font>。

<font color="#FF6347">QUIC通过Packet Number配合Stream ID和Offset字段信息，可以乱序确认而不影响数据包的正确组装</font>。


#### QUIC如何解决TCP队头阻塞问题的
QUIC 也借鉴 HTTP/2 里的 Stream 的概念，在一条 QUIC 连接上可以并发发送多个 HTTP 请求 (Stream)。

但是 QUIC 给每一个 Stream 都分配了一个独立的滑动窗口，这样使得一个连接上的多个 Stream 之间没有依赖关系，都是相互独立的，各自控制的滑动窗口。

假如 Stream2 丢了一个 UDP 包，也只会影响 Stream2 的处理，不会影响其他 Stream，与 HTTP/2 不同，HTTP/2 只要某个流中的数据包丢失了，其他流也会因此受影响。

![image](https://user-images.githubusercontent.com/70066311/167795213-7c3cc780-c38d-46aa-847e-65e7528eaf8b.png)

## HTTP的性能
### **长连接**
HTTP有两种连接方式，一种是持久连接，另一种是非持久连接。
- 非持久连接指的是服务器必须为每一个请求的对象建立和维护一个全新的连接。
- 持久连接指的是TCP连接可以被多个请求复用，可以避免每次建立TCP连接三次握手而消耗的时间。
### **管道网络传输**
在同一个TCP连接里面，客户端可以发起多个请求，只要第一个请求发送出去了，就可以发出第二个请求，减少整体的响应时间。但服务器还是按照顺序回应请求。
### **队头堵塞**
解决方法：
1. 增加任务队列。分配多个长连接，不至于一个队列的任务阻塞所有任务。
2. 将域名分出很多二级域名，使它们指向同一台服务器，能够并发的持久连接变多了。

## 常见的HTTP请求方法
- GET：向服务器获取数据
- POST：将实体提交到服务器，通常为修改服务器资源
- PUT：上传文件，更新数据
- DELETE：删除服务器上的对象
- HEAD：获取报文首部，<font color="#FF6347">与GET相比，不会返回报文的主体部分</font>
- TRACE：回显服务器收到的请求，用于测试或诊断 
- OPTIONS：询问支持的请求方法，用来跨域请求

## OPTIONS请求方法及适用场景
OPTIONS方法用于<font color="#FF6347">客户端请求资源时，决定对该资源采取何种必要的措施，或者了解服务器的性能</font>。主要有以下两个用途：
1. 获取服务器支持的所有HTTP请求方法
2. 查询访问权限。比如使用CORS跨域之前会使用OPTIONS发送一个跨域请求，以判断当前域是否允许访问指定资源

## 什么是HTTPS协议
HTTPS（超文本传输安全协议）是一种通过计算机网络进行安全通信的传输协议。<font color="#FF6347">HTTPS由HTTP协议进行通信，由SSL/TSL协议进行加密数据包</font>。HTTPS主要的目的是<font color="#FF6347">提供对网站服务器的身份认证，保护交换数据的隐私的完整性</font>。

![image](https://user-images.githubusercontent.com/70066311/162150301-d0d1c9de-cafd-459b-aad5-ce7a943f1330.png)

<font color="#FF6347">HTTP协议采用明文传输，存在信息窃听、信息篡改和信息劫持等问题。而SSL/TSL协议具有身份认证（非对称加密）、信息加密（对称加密）和完整性校验（散列函数）的功能，可以避免此问题发生</font>。

## SSL/TSL的工作原理
SSL/TSL（安全传输层协议），是介于HTTP和TCP协议之间的一层安全协议。

SSL/TSL主要依赖于三个算法：<font color="#FF6347">散列函数hash、对称加密、非对称加密</font>。
- 基于散列函数验证信息的完整性
- 对称加密用于对数据的加密
- 非对称加密用于身份认证和密钥协商

![image](https://user-images.githubusercontent.com/70066311/162152499-4083c1bc-7a29-42ce-b8b2-e00dc0c6e667.png)

1. 常见的散列函数有MD5、SHA256等。这些函数的特点是<font color="#FF6347">单向不可逆，对输入数据非常敏感、输出的长度固定，任何数据的修改都会影响散列函数的结果，可以用于防止信息篡改并验证数据的完整性</font>。

2. 对称加密：对传输数据进行加密

3. 非对称加密：主要用于身份认证和对称加密使用的密钥，保证数据只能是通信的双方获取。

## 数字证书
<font color="#FF6347">HTTPS存在的问题</font>：客户端先向服务器索要公钥，然后用公钥加密信息，服务器收到密文后，用自己的私钥解密。那么<font color="#FF6347">如何保证公钥不被篡改以及公钥是否为服务器发来的公钥而不是中间人发来的公钥</font>。这就需要借助`CA`（数字证书认证机构），<font color="#FF6347">将服务器公钥放在数字证书，数字证书由数字证书认证机构颁发，只要证书是可信的，那么公钥就是可信的</font>。

![image](https://user-images.githubusercontent.com/70066311/170399206-c4444d38-6024-4462-8d38-d959dcb21b80.png)


即使HTTPS是采用加密传输的，但HTTPS仍然是不安全的。如果某个中间人，将自己的公钥发送给了客户端，而客户端并不知情，而是以为是服务器发送过来的公钥，那么它将用这个公钥进行数据发送，中间人就可以使用自己的私钥进行解密，从而达到数据劫持的目的。

### **数字证书的生成过程**
1. 使用一种Hash算法对公钥和其它信息进行加密，生成一个信息摘要。
2. 让有公信力的认证中心用它的私钥对信息摘要进行加密，生成签名。
3. 将原始的信息和签名结合在一起，就是**数字证书**。

### **使用数字证书进行校验**
1. 当接收方收到数字证书时，先根据原始信息使用同样的hash算法生成一个摘要。
2. 使用公证处的公钥对数字证书中的摘要进行解密。
3. 最后将解密的摘要和生成的摘要进行对比，就能发现得到的信息是否被修改了。

### SSL/TSL握手过程
1. 客户端向服务器发起建立SSL连接请求，发送当前客户端支持的加密方式、当前协议的版本号和一个随机数
2. 服务器收到请求后，确认双方使用的加密方式，然后返回数字证书和随机数
3. 客户端验证数字证书有效后，生成一个随机数，并使用数字证书的公钥进行加密，将加密后的结果返回给服务器，还会返回一个hash值，用于服务器校验
4. 服务器解密该密钥，并返回一个hash值用于客户端校验
5. 客户端和服务器通过之前确定好的加密方式，对三个随机数进行加密，生成会话密钥，之后就使用会话密钥进行通信

## HTTPS特点
HTTPS的优点：
1. HTTPS可以进行身份认证，保证数据发送正确。
2. HTTPS可以进行加密传输，防止数据在传输过程中被窃取、篡改、监听，确保数据的完整性。

HTTPS的缺点：
1. 可能会遭受中间人攻击。
2. HTTPS握手更加耗时，页面响应更慢。
3. HTTPS进行加密更浪费资源。

## HTTPS如何保证安全的？
采用<font color="#FF6347">两种加密方式 + 数字证书</font>。

![image](https://user-images.githubusercontent.com/70066311/162168524-eaeaffb4-3d00-4e8b-ace5-a0946fe44e1b.png)

1. 客户端向服务器发送请求。
2. 服务器接收到请求后返回给客户端一个证书和一个公钥。
3. 客户端验证该证书是否有效，如果有效，使用随机数生成会话密钥。
4. 并使用服务器发送来的公钥对会话密钥进行加密，然后将加密后的发送给服务器。
5. 服务器解密后得到会话密钥，此后客户端和服务器就可以通过会话密钥进行通信了。
6. 将明文数据用会话密钥加密后发送，接收端再使用会话密钥进行解密得到明文。

但这么做存在一个问题，如果存在中间人攻击，中间人将自己的公钥发送给客户端，而客户端不知道这个公钥是来自于攻击者的，然后使用这个公钥对会话密钥进行加密，这样攻击者就可以拿到会话密钥，揭秘数据了。使用数字证书可以有效防止中间人攻击。

##  <font color="#FF6347">HTTP和HTTPS的区别</font>
HTTP是服务器用于传输数据到本地浏览器的协议，它的传输是明文的，未加密的，因此不安全。HTTPS在HTTP的基础上加入了SSL协议，构建可进行加密传输和身份认证的传输协议，比HTTP安全性更高。  
主要区别在于：
- HTTPS协议需要CA证书，费用较高；
- HTTP协议是明文传输的；HTTPS是密文传输的；
- HTTP的端口是80；HTTPS的端口是443；
- HTTP协议的连接简单，是无状态的；HTTPS协议由SLL和HTTP协议共同构建，比较复杂；
- HTTP的响应速度比HTTPS快，因为HTTPS除了进行三次握手外，还要进行SSL握手。

### *HTTPS工作原理
1. 客户端向服务器发送建立SSL协议连接请求；
2. 服务器接收到请求后将公钥发送给客户端；
3. 服务端与客户端协商安全协议等级；
4. 客户端使用公钥加密会话密钥，并发送给服务器；
5. 服务器使用私钥解密会话密钥。

这样，服务器和客户端就可以通过会话密钥来实现通信了。

### *HTTPS的优点
1. HTTPS可以认证用户和服务器，保证数据传输正确
2. 使用密文传输更加安全

### *HTTPS的缺点
1. 页面加载时间变长
2. 开销变大

## 端口的作用
一个IP地址对应一台主机，一台主机可以提供多个服务，例如ftp服务、web服务等。如果只有一个IP号就无法区分对应的服务，因此要使用IP+端口的方式来区分不同的服务。

## GET和POST请求的区别
- 应用场景：GET请求用于对服务器资源不会产生影响的场景；POST请求用于对服务器资源会产生影响的情景。
- 是否缓存：浏览器一般会对GET请求进行缓存，POST请求很少缓存
- 发送报文格式：GET请求的报文中实体部分为空，POST请求的报文中实体部分一般为向服务器发送的数据
- 安全性：<font color="#FF6347">对于用户信息来说：</font>GET请求会将请求的参数放入到url中，这样不太安全，因为请求的url会被保留在历史记录中；<font color="#FF6347">对于资源来说：</font>Get是安全的，因为Get只进行读操作，无论进行多少次操作，都不会对数据产生影响。
- 参数类型：POST请求支持传递更多的参数
- 浏览器回退：GET在浏览器进行回退时是无害的，POST会再次提交请求
- URL长度

## POST和PUT请求的区别
- PUT请求是向服务器发送数据，从而修改数据内容，但不会增加数据，可以理解为更新数据。
- POST请求是向服务器发送数据，该请求可以改变数据资源，也可以创建新的内容，可以理解为创建数据。

## 常见的请求头
- Accept：浏览器能够处理的数据类型
- Cookie：携带用户信息，例如登录状态、IP、用户名密码、浏览记录等
- Host：浏览器所在的域
- Accept-Charset：浏览器能够显示的字符集
- Accept-Encoding：浏览器能够处理的压缩编码
- Accept-Language：浏览器当前设置的语言
- User-Agent：浏览器的用户代理字符串

## 常见的响应头
- Date：表示消息发送的时间
- server：服务器名称
- Cache-Control：控制HTTP缓存

### **状态码类别**
|  类别   | 原因  | 描述 |
|  ----  | ----  | ---- |
| 1xx  | 信息性状态码 | 接受的请求正在处理 |
| 2xx  | 成功状态码 | 请求正常处理完成 |
| 3xx  | 重定向状态码 | 需要进行附加操作完成请求 |
| 4xx  | 客户端错误状态码 | 服务器无法处理请求 |
| 5xx  | 服务器错误状态码 | 服务器处理请求错误 |

### **状态码**
1. 2XX（成功状态码）
- 200 OK：请求被服务器正常处理了。
- 204 No Content：该状态码表示<font color="#FF6347">请求已被服务器正常处理但没有返回内容。例如：需要从客户端向服务器发送请求但服务器不需要向客户端发送内容的情况</font>。
- 206 Partial Content：表示<font color="#FF6347">响应返回的数据并不是资源的全部，而是其中的一部分</font>。应用于HTTP分块下载或断点续传。

2. 3XX（重定向状态码）
3XX表明浏览器需要执行某些特殊的处理以正确处理请求。
- 301 永久重定向：表示<font color="#FF6347">请求的资源已经被分配了新的URL，当用户向旧的URL发起请求时会被重新定向到新的URL</font>。若用户已经把旧的URL保存为书签，此时会将新的URL替换为该书签。使用场景：<font color="#FF6347">更换域名</font>。
- 302 临时重定向：与301状态码相似，<font color="#FF6347">302表示新的URL在未来还可能会改变，</font>若用户把URL保存为书签，不会像301状态码那样更新URL，而还会将请求保存到旧的URL中。使用场景：1)访问404重定向到首页；2)未登陆的用户跳转到登录页。
- 303 See Other：表示<font color="#FF6347">由于请求对应的资源存在着另一个URL，应使用GET方法定向获取请求的资源</font>。303状态码通常作为PUT或POST操作的返回结果，他表示重定向链接指向的不是新上传的资源，而是另外一个页面，比如消息确认页面或上传进度页面，而请求重定向页面的方法总是要用GET。
- 304 Not Modified：资源未修改，重定向到缓存文件。

3. 4XX（客户端错误状态码）
- 400 Bed Request：客户端请求的报文有错。
- 401 Unauthorized：权限认证失败
- 403 Forbidden：服务器禁止访问该资源。
- 404 Not Found：请求的资源未在服务器上找到。

4. 5XX（服务器错误状态码）
- 500 Internal Server Error：服务器内部错误。
- 501 Not Implemented：客户端请求的功能还不支持。
- 502 Bad Gateway：服务器自身工作正常，访问后端服务器发生了错误。

### **常见的状态码**
- 100：客户端在发送POST数据给服务器前，征询服务器情况，看服务器是否处理POST的数据，如果不处理，客户端则不上传POST数据，如果处理，则POST上传数据。常用于POST大数据传输
- 206：一般用来做断点续传，或者是视频文件等大文件的加载
- 301：永久重定向会缓存。新域名替换旧域名，旧的域名不再使用时，用户访问旧域名时用301就重定向到新的域名
- 302：临时重定向不会缓存，常用 于未登陆的用户访问用户中心重定向到登录页面
- 304：协商缓存，告诉客户端有缓存，直接使用缓存中的数据，返回页面的只有头部信息，是没有内容部分
- 400：参数有误，请求无法被服务器识别
- 403：告诉客户端进制访问该站点或者资源，如在外网环境下，然后访问只有内网IP才能访问的时候则返回
- 404：服务器找不到资源时，或者服务器拒绝请求又不想说明理由时
- 503：服务器停机维护时，主动用503响应请求或 nginx 设置限速，超过限速，会返回503
- 504：网关超时

### **304状态码**
服务器为了提高网站访问速度，会对之前的部分页面指定缓存机制，当客户端在此前对这些页面进行请求，服务器会根据缓存内容判断页面与之前是否相同，若相同直接返回304，此时客户端调用缓存内容，不必对资源进行二次下载。

### **产生较多304状态码的原因**
- 页面长时间不更新或更新周期长
- 纯静态页面或强制生成静态html

### **304状态码会造成以下问题**
- 网站快照停止（网页快照是搜索引擎在收录网页时，对网页进行备份，存在自己的服务器缓存里）
- 收录减少
- 权重下降

### **keep-alive**
keep-alive就是使用长连接。
优点：
- 较少的CPU和内存使用
- 降低了拥塞控制
- 减少了请求的延迟

缺点：
- 可能长期没有连接请求导致TCP链接无效占用，浪费系统资源

## DNS
### 1. DNS协议
**DNS（域名系统）**：<font color="	#FF6347">是域名和IP地址相互映射的一个分布式数据库</font>，通过域名找到互联网中实际IP地址的服务器，该服务器会把请求解析，然后将资源返回给浏览器，最后浏览器对资源进行渲染。通过主机名，最终得到该主机名对应的IP地址的过程叫做域名解析。

**各级域名服务器**
![image](https://user-images.githubusercontent.com/70066311/162659411-00eb5ddb-75a9-4644-b417-5fa1b474ebbb.png)

1. 根域名服务器：最高层次的服务器，<font color="	#FF6347">所有的根域名服务器都知道所有的顶级域名服务器的IP地址</font>。
    - 不管是哪个本地域名服务器，只要自己无法解析，首先会求助于根域名服务器；
    - 共有13个根域名服务器，每个根域名服务器都是荣誉的服务器集群，以提供安全性和可靠性；
    - 根域名服务器主要管理顶级域名服务器，通常它不直接将请求的IP地址告诉本地DNS服务器，而是将顶级域名服务器的地址转发给本地DNS服务器，由本地DNS服务器向顶级域名服务器进行请求查找（迭代查询）。
2. 顶级域名服务器：.com、.edu、.org等
3. 权限域名服务器：每台主机都必须在权威域名服务器上登记

### 2. DNS的作用
<font color="	#FF6347">将域名解析为IP地址</font>。客户端向DNS服务器发起域名查询请求，DNS服务器查询域名对应的IP地址并发送给客户端。

### 3. DNS同时使用TCP和UDP协议
<font color="	#FF6347">DNS使用53端口号，同时使用TCP和UDP协议</font>。 

（1） 在区域传输时使用TCP协议   
<font color="	#FF6347">辅助域名服务器会定时向主域名服务器进行查询以便了解数据是否发生变动，如果有变动，会发生一次区域传送，进行数据同步</font>。      

（2）在域名解析时使用UDP协议
DNS服务器进行域名查询时返回的数据不超过512字节，用UDP传输即可，这样不需要经过三次握手，使DNS服务器负载更低，响应速度更快。

### 4. DNS查询的完整过程
- 首先会在<font color="#FF6347">浏览器缓存、系统缓存、路由缓存</font>中查找对应的IP地址，如果查找到直接返回；
- 将请求发送给<font color="#FF6347">本地DNS服务器</font>，在本地域名服务器缓存中查询；
- 本地DNS服务器向<font color="#FF6347">根域名服务器</font>发送请求，根域名服务器会返回一个<font color="#FF6347">所查询域的顶级域名服务器地址</font>；
- 本地DNS服务器向<font color="#FF6347">顶级域名服务器</font>发送请求，接受请求的服务器查询自己的缓存；
- 本地DNS服务器向<font color="#FF6347">权限域名服务器</font>发送请求，权限域名服务器返回对应结果；
- 本地DNS服务器<font color="#FF6347">将返回结果存在缓存中</font>，以便下次使用；
- 本地DNS服务器将返回结果返回给浏览器。

例如：查询 www.baidu.com 的IP地址。首先会在浏览器缓存中查找是否有该域名的缓存，如果不存在就将请求发送到本地的DNS服务器中，本地DNS服务器会判断是否存在该域名的缓存，如果不存在，则向根域名服务器发送一个请求，根域名服务器返回<font color="	#FF6347">负责 .com 的顶级域名服务器的IP地址列表</font>，然后本地DNS服务器向顶级域名服务器发送一个请求，<font color="#FF6347">负责 .com 的顶级域名服务器返回负责 .baidu 的权限域名服务器的IP地址列表</font>。然后本地DNS服务器再向权限域名服务器发送请求，最后权限域名服务器返回一个对应的主机名的IP地址列表。

### 5. 迭代查询和递归查询
- 递归查询：如果DNS服务器没有查询到对应的IP地址，那么该服务器会询问其他服务器，并将查询结果返回。<font color="	#FF6347">用户只需要发出一次查询请求</font>。
- 迭代查询：DNS服务器会将能够解析查询请求的其它DNS服务器地址返回给客户端，由客户端向该地址发送请求，直到得到查询结果。<font color="#FF6347">用户需要进行多次查询请求</font>。

一般<font color="#FF6347">客户端向本地DNS服务器发送请求的方式就是递归查询</font>，因为客户端只需要发送一次请求，然后本地DNS服务器返回给我们最终的请求结果。而<font color="#FF6347">本地DNS服务器向其它域名服务器请求的过程就是迭代查询</font>
，因为每次域名服务器只返回单次查询的结果，下次的查询还是由本地DNS服务器自己进行。

## OSI七层模型
![image](https://user-images.githubusercontent.com/70066311/161662185-41cf100b-2795-44d7-84bc-e92bac34d935.png)

1. 应用层  
<font color="	#FF6347">应用层为用户提供应用接口和用户直接提供各种网络服务</font>。
    - 在客户端与服务器中经常会有数据的请求，这个时候就会用到http和https协议。
    - FTP是文件传输协议。百度网盘、迅雷应该是基于此协议的。
    - SMTP是简单邮件传输协议。在用户邮箱验证码登录时，需要使用此协议。
2. 表示层  
<font color="	#FF6347">表示层提供各种用于应用层数据的编码和转换功能</font>，确保一个系统的应用层发送的数据能被另一个系统的应用层识别，base64的工作在表示层。<font color="	#FF6347">表示层还可以进行数据压缩和加密</font>。
3. 会话层  
负责建立、管理和终止<font color="	#FF6347">表示层实体之间的通信会话</font>。该层的通信由不同的设备中的应用程序之间的服务请求和响应组成。
4. 传输层  
<font color="	#FF6347">建立了主机端到端的连接，为上层协议提供端到端的可靠和透明的数据传输服务。</font>传输层为上层屏蔽了下层数据传输的细节，使上层只是看到两个传输实体的数据通路。<font color="	#FF6347">TCP、UDP即在这一层，端是指端口号</font>。
5. 网络层  
我的理解是IP协议层，<font color="	#FF6347">该层通过IP寻址来创建两个节点之间的连接，在两个节点间选择合适的路由进行数据转发。网络层规定了数据传输的路线（数据链路层就是传输的路线），传输层规定了数据传输的方式</font>。
6. 数据链路层  
网络层规划了数据的传输路线，而<font color="	#FF6347">数据链路层就是这些传输路线</font>。数据链路层主要对数据进行包装，将比特合成字节，将字节合成帧，并对数据进行差错检测。
7. 物理层  
进行信号的传输。

### **OSI的特点：对等通信**
为了使数据分组从源传送到目的地，源端OSI模型的每一层都必须与目的端的对等层进行通信，这种通信方式为对等通信。在每一层通信的过程中，使用本层自己的协议进行通信。

### **TCP五层协议**
![image](https://user-images.githubusercontent.com/70066311/161668269-b4ba5041-05af-47d5-880d-5dbc3c14cb0a.png)

1. 应用层：直接为应用进程提供服务。应用层协议定义的是应用进程间通讯和交互的规则，不同的应用有不同的协议。
2. 传输层：为两台主机中的进程提供通信服务。
3. 网络层：为两台主机提供通信服务，通过选择合适的路由将数据传递到目标主机。
4. 数据链路层：将数据进行封装，在链路的两个相邻节点之间传送帧。
5. 物理层：在物理介质上进行信号传输。

在每一层都工作着不同的设备：
![image](https://user-images.githubusercontent.com/70066311/161668815-d041dde9-f5eb-4466-88ea-4bb4414cfcf4.png)

在每一层有不同的协议：
![image](https://user-images.githubusercontent.com/70066311/161668871-54add3d6-f8c0-4bee-ac15-5c002aee2e63.png)

TCP五层协议也为对等协议：   
![image](https://user-images.githubusercontent.com/70066311/161668950-a076d7a9-2761-4739-b8d2-48519f1d7773.png)


## TCP和UDP
TCP和UDP都是传输层协议，它们都属于TCP/IP协议族
### **UDP**
UDP全称为<font color="	#FF6347">用户数据报协议</font>，在网络中它与TCP协议一样用于处理数据包，<font color="	#FF6347">是一种无连接协议</font>。UDP有<font color="	#FF6347">不提供数据包分组、组装和不能对数据包进行排序</font>的缺点，也就是说，<font color="	#FF6347">当报文发送后，无法得知其是否安全送达</font>。   

UDP的特点如下：
1. 面向无连接。<font color="	#FF6347">UDP不像TCP一样在发送数据前需要进行三次握手建立连接，UDP在想发送数据时就可以发送了，并且也能是数据报文的搬运工，不会对报文进行拆分和拼接操作</font>。
    - 在发送端，应用层将数据传递给传输层的UDP协议，UDP只会给数据加上一个UDP报文头标识其为UDP协议，然后就转发给网络层。
    - 在接收端，网络层将数据传给传输层，UDP只去除IP报文头就传递给应用层，不会做任何拼接操作。
2. 有单播、多播、广播的功能。
3. 面向报文。
4. 不可靠的：不清楚对方是否接收到了数据、收到什么数据就传递什么数据，不会进行备份。
5. 头部开销小，传输数据报文时很高效。

UDP多用于实时性要求高的场景：例如电话会议、直播等。

### **TCP**
TCP全称为<font color=#FF6347">传输控制协议</font>，是一种<font color="	#FF6347">可靠的，面向连接的，基于字节流的传输层通信协议</font>。   
TCP的特点如下：
1. 面向连接。在发送数据之前必须在两端建立链接。
2. 仅支持单播传输：TCP只建立两个端点的连接，只能进行点对点的传输。
3. 面向字节流的：TCP不会像UDP那样按照一个个报文进行传输，而是不区分报文边界以字节流的方式进行传输。
4. 可靠传输：<font color="	#FF6347">TCP为了保证报文传输的可靠，会在每个报文包上加一个序号，若接收方收到了报文包，会返回一个确认号（序号+1）表明接收到了数据。若发送方在往返时延（RTT）内未收到确认，就会重传数据</font>。序号也保证了数据按序接收。
5. 提供拥塞控制。<font color="	#FF6347">当网络出现拥塞时，TCP能够减小向网络注入数据的速率和数量，缓解拥塞</font>。
6. 提供全双工通信。TCP允许通信双方的应用程序在任何时候都能发送数据，TCP连接在两端设有缓存，可以临时存放双向通信的数据。TCP可以立即发送一个数据段，也可以缓存一段时间以便发送更多的数据段。

### **TCP和UPD的区别**
|     | UDP  | TCP |
|  ----  | ----  | ---- |
| 是否连接  | 无连接  | 有连接 |
| 是否可靠  | 不可靠 | 可靠 |
| 连接对象个数  | 支持单播、广播、多播 | 单播 |
| 传输方式  | 报文 | 字节流 |
| 首部开销  | 首部开销小，仅8字节 | 最小20字节，最大60字节 |
| 适用场景  | 适用于实时应用，视频会议、直播等 | 适用于要求可靠的传输应用，例如文件传输 |

### **TCP和UDP的适用场景**
- TCP：效率要求不高，但对准确率要求高的场景。例如：文件传输，接收邮件、远程登录等。
- UDP：效率要求高，准确率要求相对低的场景。例如：QQ聊天、在线视频、语音电话、广播通信等。

### **UDP为什么不可靠**
UDP在传输数据之前不需要建立连接，远程主机在接收到UDP报文后，不需要确认，提供不可靠交付。
1. 不保证消息的交付：不确认、不重传、无超时
2. 不保证交付顺序：不设置包序号、不重排、不会发生队首阻塞
3. 不跟踪连接状态：不必建立连接或重启状态机
4. 不进行拥塞控制

### **TCP是如何保证可靠传输的**
TCP保证可靠传输依赖于下列机制：
1. 校验和
2. 序号、确认应答机制
3. 重传机制
4. 滑动窗口
5. 流量控制
6. 拥塞控制

### **校验和**
由发送方计算待发送TCP报文的校验和，然后接收端对接收到报文后验证校验和，如果发现两端校验和不一致，则会把报文直接丢弃。其目的就是：<font color="	#FF6347">检查接收方接收到的数据有没有在发送过程中被篡改</font>。

### **序号和确认应答机制**
发送方在发送报文时会给报文加上一个序号，接收方接收到数据后返回一个确认，其中确认号为序号 + 1，目的是<font color="	#FF6347">保证TCP报文的按序传输</font>。

### **滑动窗口**
TCP每发送一个数据，都要进行一次确认应答，只有收到确认应答后，才发送下一个数据，这样会导致通信效率慢，所以有了滑动窗口。

**滑动窗口**其实就是一个缓存区，在这个缓存区之前的数据是<font color="#FF6347">已经发送且已经得到确认的数据</font>，在这个缓存区中的数据是<font color="#FF6347">已经发送但还未得到确认的数据和已经得到允许但未发送的数据</font>，在这个缓存区之后的是<font color="#FF6347">未得到发送允许的数据</font>。

TCP头部有一个字段为`window`，是指滑动窗口大小，这个字段是<font color="#FF6347">接收方告诉发送方自己还有多少字段可以接收数据，发送方会根据这个字段来发送数据，不至于接收方处理不过来</font>。

下面我们看看发送方的窗口实际是咋样的：

下图就是<font color="#FF6347">发送方缓存</font>的数据，根据处理的情况分成四个部分，其中深蓝色方框是发送窗口，紫色方框是可用窗口：

![image](https://user-images.githubusercontent.com/70066311/163538182-3399a299-abb1-4248-8c23-067b2a8695c5.png)

当发送方把数据「全部」都一下发送出去后，可用窗口的大小就为 0 了，表明可用窗口耗尽，在没收到 ACK 确认之前是无法继续发送数据了，如下图所示：

![image](https://user-images.githubusercontent.com/70066311/163538294-1f28bcaa-2295-4487-b24c-5e078cc86bb9.png)

当收到之前发送的数据 `32-36` 字节的 ACK 确认应答后，如果发送窗口的大小没有变化，则滑动窗口往右边移动 5 个字节，因为有 5 个字节的数据被应答确认，接下来 `52-56` 字节又变成了可用窗口，那么后续也就可以发送 `52-56` 这 5 个字节的数据了，如下图所示：

![image](https://user-images.githubusercontent.com/70066311/163538375-0a9603e2-7b30-4504-bec4-a92007cbc077.png)

我们知道了滑动窗口的四个部分，那这四个部分是怎么表示出来的呢？

TCP 滑动窗口方案使用三个指针来跟踪在四个传输类别中的每一个类别中的字节。其中两个指针是绝对指针（指特定的序列号），一个是相对指针（需要做偏移）。就像下面这样：

![image](https://user-images.githubusercontent.com/70066311/163538624-e4297944-1e3a-4198-9d6c-f9eecf997162.png)

- SND.WND：表示发送窗口的大小（大小是由接收方指定的）。
- SND.UNA：是一个绝对指针，它指向的是已发送但未收到确认的第一个字节的序列号，也就是 #2 的第一个字节。
- SND.NXT：也是一个绝对指针，它指向未发送但可发送范围的第一个字节的序列号，也就是 #3 的第一个字节。
- 指向 #4 的第一个字节是个相对指针，它需要 SND.UNA 指针加上 SND.WND 大小的偏移量，就可以指向 #4 的第一个字节了。

然后看<font color="#FF6347">接收方的窗口</font>。
![image](https://user-images.githubusercontent.com/70066311/163539409-6e7bf432-65f1-45bc-ab12-b4fe239f4419.png)

- #1 + #2 是已成功接收并确认的数据（等待应用进程读取）；
- #3 是未收到数据但可以接收的数据；
- #4 未收到数据并不可以接收的数据；

其中三个接收部分，使用两个指针进行划分:

- RCV.WND：表示接收窗口的大小，它会通告给发送方。
- RCV.NXT：是一个指针，它指向期望从发送方发送来的下一个数据字节的序列号，也就是 #3 的第一个字节。
- 指向 #4 的第一个字节是个相对指针，它需要 RCV.NXT 指针加上 RCV.WND 大小的偏移量，就可以指向 #4 的第一个字节了。

### **TCP的重传机制**
TCP在传输过程中可能会出现丢包、重传等问题，为了保证数据的正确传输，TCP会重传它认为已经丢失的包。

常见的TCP重传机制：
- 超时重传
- 快速重传
- SACK

**超时重传**：      
TCP在发送一个数据之后，就开启一个定时器，若是在这个时间内没有收到发送数据的ACK确认报文，则对报文进行重传，<font color="	#FF6347">在达到一定次数还没有成功时，放弃并发送一个复位信号</font>。一般`数据包丢失`和`确认丢失`会导致超时重传。

超时重传时间以RTO表示。<font color="	#FF6347">如果把RTO设置的时间较大，导致丢了半天才重发，效率差；如果设置的较小，可能导致没有丢包就重传，增加网络拥塞</font>。<font color="	#FF6347">我们RTO的值应略大于RRT，这样就能确定丢包，并及时发送丢失的数据包</font>。

<font color="	#FF6347">如果超时重传的数据又超时，则会对时间间隔加倍</font>，但这样又会导致RTO时间间隔较大，又会导致效率差。这就要用到超时重传。

**快速重传**
快速重传见下面第三点。

<font color="	#FF6347">但快速重传也有一次问题，就是重传多少数据呢？</font>

**SACK**
SACK在TCCP头部加了一个SACK字段，可以将缓存的索引发送给发送方，这样发送方就可以知道哪些数据收到了，哪些数据没有收到，这样就可以只发送那些丢失的数据了。

比如发送方收到了三次同样的 ACK 确认报文，于是就会触发快速重发机制，通过 SACK 信息发现只有 200~299 这段数据丢失，则重发时，就只选择了这个 TCP 段进行重复。

### **TCP的拥塞控制机制**
TCP的拥塞控制主要是以下四种机制：
1. 慢启动。
    - 在开始发送时设置cwnd = 1，（cwnd是拥塞窗口）
    - 开始时不发送大量数据，先测试网络的拥塞程度，由小到大增加拥塞窗口的大小
    - 为了防止cwnd增长过大引起网络拥塞，设置一个慢开始门限(ssthresh)
        1. 当cwnd < ssthresh时，使用慢开始算法
        2. 当cwnd = ssthresh时，即可使用慢开始算法，也可以使用拥塞避免算法
        3. 当cwnd > ssthresh时，使用拥塞避免算法
2. 拥塞避免
    - 在拥塞避免阶段将拥塞窗口控制为按线性增长，使网络不容易出现阻塞。
    - 让拥塞窗口cwnd缓慢增大，每经过一个返回时间就把发送方的拥塞控制窗口加一
    - 无论是慢开始阶段还是拥塞避免阶段，只要发送方判断网络出现拥塞（<font color="	#FF6347">发送方没有收到确认就认为出现了网络拥塞</font>），就把ssthresh设置为原来的一半，然后把cwnd设置为1，执行满开始算法。如图所示：
![6UDR26C(74WGDI6(E8E1BQK](https://user-images.githubusercontent.com/70066311/158375955-48d935dc-3e7e-48b8-ae8f-ffd2c13db149.png)

3. 快速重传
    - 快速重传要求接收方在收到<font color="	#FF6347">一个失序的报文段后就立即发出重复确认(为的是让发送方尽早知道报文没有送达)，发送方在收到三个连续的重复确认就立即重传接收方尚未收到的报文段，而不必继续等待设置的重传机器时间到期</font>。可以提高整个网络的吞吐量。
4. 快速恢复
    - 当发送方收到三个重复确认时，就执行“乘法减小”算法，把门限大小减半，但不立即执行满开始算法，因为发送方此时可以接收到三个重复确认，因此发送方会认为此时网络没有拥塞，所以不执行慢开始算法，而是将cwnd设置为ssthresh的大小，然后执行拥塞避免算法。
  ![image](https://user-images.githubusercontent.com/70066311/158376919-2679dd76-62ed-4e9c-a4be-281637b5a46c.png)

### **TCP的流量控制算法**
流量控制就是<font color="	#FF6347">让发送方控制发送数据的速度，让接收方来得及接受</font>。TCP采用大小可变的<font color="	#FF6347">**滑动窗口**</font>进行流量控制，窗口大小的单位是字节。<font color="	#FF6347">这里说的窗口大小指的就是每次传输数据的大小</font>。

- 当一个连接建立时，连接的双方都会分配一个缓冲区来保存输入的数据，并将缓冲区的大小发送给另一端。
- 当数据到达时，接收方发送确认，确认中包含确认号和剩余缓冲区大小（<font color="	#FF6347">剩余的缓冲区大小为窗口，发送每个窗口的通知被称为窗口通告，接收方在每次发送确认时都会发送窗口通告</font>）。
- 如果接收方每次读取数据的速度和发送方发送数据的速度一样快时，则会返回一个正的窗口通告。如果发送方发送数据的速度快于接收方读取数据的速度，导致接收方缓存区快满时，接收方会返回一个为0的窗口通告，这时，发送方就会停止发送数据，直到接收方返回一个正的窗口通告。

![image](https://user-images.githubusercontent.com/70066311/163543436-3f4c698c-abab-4e82-a181-5499eb4ce3af.png)

### **TCP的三次握手和四次挥手**
**三次握手**
![image](https://user-images.githubusercontent.com/70066311/158377197-02514074-efc7-4521-a730-4a5dd861148f.png)
三次握手其实就是建立一个TCP连接时，需要客户端和服务器总共发送3个包，<font color="	#FF6347">确认双方的接收能力和发送能力是否正常、指定自己的初始化序列号为后面的可靠性传送做准备</font>。   

ACK：确认序号有效；SYN：发起一个新连接。   
刚开始客户端处于Closed的状态，服务器处于Listen状态。
 - 第一次握手：首先<font color="	#FF6347">客户端向服务器发送一段TCP报文</font>，其中：标记位SYN=1表示<font color="	#FF6347">请求建立新连接</font>；序号seq=X，X一般为1；随后客户端进入SYN-SENT阶段。
 - 第二次握手：服务器接收到来自客户端的TCP报文后，结束Listen阶段，并返回一段TCP报文，其中：标志位为SYN和ACK，表示<font color="	#FF6347">确认客户端的报文seq序号有效，服务器能正常接收客户端发送的数据，并同意创建新连接</font>；序号seq=Y；确认号Ack=X+1,表示<font color="	#FF6347">收到客户端的序号seq并将其值加1作为自己确认号ACK的值；随后服务器进入SYN-RCVD阶段</font>。
 - 第三次握手：客户端收到来自服务器的确认收到数据的TCP报文之后，<font color="	#FF6347">明确了从客户端到服务器的数据传输是正常的</font>，结束SYN-SENT阶段，并返回最后一段TCP报文。其中：标志位为ACK，表示<font color="	#FF6347">确认收到服务器发来的同意连接信号</font>；序号seq=X+1，<font color="	#FF6347">表示收到服务器端的确认号ACK，并将其值作为自己的序号</font>；确认号为ACK=Y+1，表示<font color="	#FF6347">收到服务器端的序号seq，并将其值加1作为自己的确认号ACK的值</font>；随后客户端进入ESTABLISHED阶段。

**seq和ack序号的作用**：
在客户端与服务器传输的TCP报文中，双方的确认号ACK和序号seq的值，都是在彼此ACK和seq值的基础上进行计算的，这样保证了TCP报文传输的连贯性。一旦出现某一方发出的TCP报文丢失，便无法继续握手，以此确保了三次握手的顺利完成。

**为什么进行三次握手**  
为了防止服务器开启一些无用的连接增加服务器开销以及防止已失效的连接请求报文突然又传送到了服务器，因而产生错误。

### **什么是SYN洪泛攻击，如何防范？**
SYN洪泛攻击属于DOS攻击的一种，它的原理是：
- 在三次握手中，<font color="	#FF6347">服务器发送`SYN/ACK`包之后，收到客户端发送的`ACK`之前的TCP连接称为半连接</font>，此时服务器处于`SYN_RECV`状态，如果收到客户端的ACK，则TCP连接成功；如果未收到，则会不断重发请求直至成功。
- `SYN`的攻击者伪造大量IP地址，向服务器不断发送`SYN`包，服务器返回`SYN/ACK`包，并等待客户的信任。由于源地址是不存在的，服务器需要不断地重新发送`SYN/ACK`包，直至超时。
- 这会影响正常的`SYN`包的发送，导致网络拥塞，甚至超时。

**防范：**
- SYN cookies技术
- 增大最大半连接数，缩短超时时间
- 过滤网关

### 三次握手的第三次丢包会发生什么？
- 服务器端：超过一定时间未收到客户端发来的确认包，会重传`SYN/ACK`包、若多次重传后还未收到确认包，则会关闭该连接。  
- 客户端：客户端在发送`ACK`包后会认为该连接建立成功，随后发送数据进行通信，服务器段会返回一个`RST`包告诉客户端这个连接异常已被关闭，这样客户端就知道三次握手失败了。

### 如果已经建立了连接，但客户端出现了故障怎么办？
通过<font color="	#FF6347">**定时器与超时重传机制**</font>，尝试获取**确认**，直到最后自动断开连接。

TCP 设有一个计时器Keep-alive。服务器每收到一次客户端的数据，都会重新复位这个计时器，时间通常是设置为 2 小时。若 2 小时还没有收到客户端的任何数据，服务器就开始重试：每隔 75 分钟发送一个探测报文段，若发送 10 个探测报文后客户端依然没有回应，那么服务器就认为连接已经断开了。

### TCP建立连接可以两次握手吗？
不可以。
- <font color="#FF6347">可能会出现已失效的连接请求报文段有传到了服务器端</font>。client发出的第一个连接请求报文段并没有丢失，而是在某个网络结点长时间的滞留了，以致延误到连接释放以后的某个时间才到达 server。本来这是一个早已失效的报文段。但 server 收到此失效的连接请求报文段后，就误认为是 client 再次发出的一个新的连接请求。于是就向 client 发出确认报文段，同意建立连接。假设不采用 “三次握手”，那么只要 server 发出确认，新的连接就建立了。由于现在 client 并没有发出建立连接的请求，因此不会理睬 server 的确认，也不会向 server 发送数据。但 server 却以为新的运输连接已经建立，并一直等待 client 发来数据。这样，server 的很多资源就白白浪费掉了。采用 “三次握手” 的办法可以防止上述现象发生。例如刚才那种情况，client 不会向 server 的确认发出确认。server 由于收不到确认，就知道 client 并没有要求建立连接。
- Server无法确认Client是否收到第二次握手的报文。

### 可以四次握手吗？
四次握手会降低传输的效率。

四次握手是在第二次握手时，Server只发送ACK和ack，而Server的SYN的seq在第三次握手时发送。处于优化的目的，将四次握手中的二三次握手合并。

**四次挥手**  
FIN：释放一个连接

四次挥手就是<font color="	#FF6347">TCP连接的释放</font>。连接的释放必须是一方主动释放，一方被动释放。以下是以客户端主动发起释放连接的图解：
![image](https://user-images.githubusercontent.com/70066311/158497814-c0984ba5-6eb4-45ba-8b79-c9e8d0352179.png)
挥手之前主动释放连接的客户端结束ESTABLISHED阶段，随后开始“四次挥手”：
1. 首先客户端想要释放连接，向服务器端发送一段TCP报文，<font color="	#FF6347">标志位FIN=1，**表示请求释放连接**，序号seq=U，随后客户端进入半关闭状态</font>，并且<font color="	#FF6347">停止在客户端到服务器端方向上发送数据，但是客户端仍能接收从服务器端传输过来的数据</font>。**这里不发送的是正常连接时传输的数据，而不是一切数据，所以客户端仍能发送ACK确认报文**。
2. 服务器收到客户端发出的TCP报文后，确认了客户端想要释放连接，返回一段TCP报文，<font color="	#FF6347">标志位为ACK=1，表示**接收到客户端发来的释放连接请求**，序号为seq=V，ack=U+1</font>。随后<font color="	#FF6347">服务器开始准备释放服务器到客户端方向上的连接</font>。  

前两次挥手既让服务器知道了客户端想要释放连接，也让客户端知道了服务器端已经接收到了连接释放的请求，于是，可以确认关闭客户端到服务器端方向上的连接了。

3. 服务器端在发送确认报文后，等待做好了释放服务器到客户端方向上的连接准备后，再次向客户端发送一段TCP报文，<font color="	#FF6347">标志位为FIN=1，ACK=1，**表示已经准备好释放连接了**，序号seq=W，ack=U+1</font>，停止在服务器端到客户端方向上的发送数据，但是服务器端仍能够接收到从客户端传输过来的数据。
4. 客户端收到从服务器端发出的确认TCP报文，确认了服务器端已做好释放连接的准备，随后向服务器发送一段报文，<font color="	#FF6347">标志位ACK=1，**表示已经接收到服务器准备好释放连接的信号**，序号seq=U+1，ack=W+1</font>，并<font color="	#FF6347">等待2MSL</font>。

后两次挥手既让客户端知道了服务器端准备好释放连接，也让服务器知道了客户端已经收到自己准备好释放连接的确认报文段了。于是，可以确认关闭服务器端到客户端的连接，由此完成了四次挥手。  

**为什么握手是三次，挥手是四次**   
之所以是三次握手是因为在第二次握手时<font color="	#FF6347">服务器端发送给客户端的TCP报文是请求连接和确认报文一起发送给客户端的</font>。请求连接表示服务器端同意建立连接，确认报文表示告诉客户端，服务器收到了它的请求。  
而四次挥手是因为<font color="	#FF6347">释放连接报文和确认接收报文分别传输的。因为在收到客户端发来的释放连接请求时，服务器可能还有必要的数据需要处理，所以只能先发送确认报文，等准备好释放连接后再发送释放连接报文</font>。

**为什么客户端需要等待2MSL**  
主要有两个原因:
1. 为了确认服务器端是否收到客户端发出的ACK确认报文,从而使服务器正常关闭连接

当客户端发出最后的ACK确认报文后，并不能确定服务器端是否收到，所以客户端会设置一个2MSL（MSL：一段报文在传输过程中的最大生命周期，2MSL即服务器端发出报文以及客户端发出确认报文的总时长）的计时器。在客户端发出最后一个确认报文段后，服务器端在1MSL内没有收到客户端发来的确认报文，就再次向客户端发送报文。<font color="	#FF6347">如果客户端在2MSL内，再次收到了来自服务器端的FIN报文，说明服务器端由于各种原因没有接收到客户端发出的ACK确认报文。客户端再次向服务器端发出ACK确认报文，计时器重置，重新开始2MSL的计时；客户端在2MSL内没有再次收到来自服务器端的FIN报文，说明服务器端正常接收了ACK确认报文，客户端可以进入CLOSED阶段，完成“四次挥手”</font>。

2. 防止已失效的连接请求报文段出现在之后的连接中
TCP要求2MSL内不适用相同的序列号，客户端在在送完最后一个ACK报文段后，再经过2MSL就可以保证本连接持续的时间内产生的所有报文段都从网络中消失，这样就可以使下个连接中不会出现这种旧的连接请求报文段，或者即使受到这些超时的报文段，也不处理他们。

### TIME-WAIT和CLOSE_WAIT的区别
- TIME-WAIT是主动关闭连接的一方：需要等待2MSL，主要是 防止最后一个ACK丢失
- CLOSE_WAIT是被动关闭连接的一方

### CLOSE_WAIT状态过多会产生什么后果？
产生原因：被动关闭连接的一方忙于读或写，没有关闭连接
- 占用系统内存
- 服务不可用：服务器开启的连接个数是有限的，当连接达到上限时，服务器无法再创建新的请求，导致服务不可用

### TIME-WAIT 状态过多会产生什么后果？
从服务器来讲，短时间内关闭了大量的Client连接，就会造成服务器上出现大量的TIME_WAIT连接，严重消耗着服务器的资源，此时部分客户端就会显示连接不上。

从客户端来讲，客户端TIME_WAIT过多，就会导致端口资源被占用，因为端口就65536个，被占满就会导致无法创建新的连接。

### TIME_WAIT 是服务器端的状态?还是客户端的状态?
TIME_WAIT 是主动断开连接的一方会进入的状态，一般情况下，都是客户端所处的状态;服务器端一般设置不主动关闭连接。

TIME_WAIT 需要等待 2MSL，在大量短连接的情况下，TIME_WAIT会太多，这也会消耗很多系统资源。对于服务器来说，在 HTTP 协议里指定 KeepAlive（浏览器重用一个 TCP 连接来处理多个 HTTP 请求），由浏览器来主动断开连接，可以一定程度上减少服务器的这个问题。


### **TCP粘包**
在默认情况下，<font color="	#FF6347">TCP连接会启用延时传送算法</font>，在数据发送之前缓存他们，如果短时间内有多个数据发送，会缓冲到一起一次发送，这样可以减少IO消耗提高性能。<font color="	#FF6347">如果是发送文件的话，不用处理粘包问题；如果发送的是数据的话，就需要处理粘包问题</font>。

粘包有以下几种情况：如果连续调用两次sand分别发送两端数据data1、data2，那么：
1. 先接收到data1，再接收到data2
2. 先接收到data1的部分数据，然后接收到data1的剩余部分和data2
3. 先接收到data1和data2的部分数据、然后接收到data2的剩余部分
4. 一次性接收到了data1和data2

### **如何解决粘包问题**
- 多次发送之前间隔一个等待时间：只需要等上一段间隔时间结束再进行下一次send，<font color="#FF6347">适用于交互频率较低的场景；如果交互频率频繁，传输效率较低</font>。
- 不使用延迟传送算法（Nagle）：<font color="	#FF6347">适用于每次发送的数据比较大，但文件不是很大的情况</font>，
- 进行封包/拆包：<font color="	#FF6347">给每个数据包的之前或之后放一些有特征的数据，就收到数据后按特征进行分割</font>。

### **为什么UDP不会粘包**
- TCP是面向流的协议，UDP是面向消息的协议。UDP段是一条消息，必须以消息为单位接收数据，不能以字节为单位接收数据。
- 每个UDP包中都有消息头，这样对于接收端来说就很容易区别UDP包了。


### **TCP的keep-alive**
keep-alive就是<font color="	#FF6347">定义一个时间段，如果在这个时间段内没有报文传输，那么服务器就会每隔一个时间间隔发送一个探测报文，如果连续几个探测报文没有收到响应，那么就会认为当前的TCP链接已经断开，服务器就会断开连接</font>。

### **TCP保活机制**
#### 为什么需要保活机制
TCP建立连接后，在一段时间内双方没有发送任何数据，那么：
1. <font color="#FF6347">怎么判断对方是否还处于连接状态。这是因为，TCP的非正常断开的连接系统并不能侦测到（比如网线断掉）</font>。
2. <font color="#FF6347">长时间没有任何数据发送，连接可能被中断</font>。网络连接会经过路由器、防火墙等设备，这些设备可能会断掉长时间没有活动的连接。

#### TCP保活机制的实现
<font color="	#FF6347">保活机制由一个定时器实现的，当计时器被激发，一端将发送一个保活探测报文，另一端收到报文会返回一个ACK报文作出响应</font>。

过程描述：
在开启了keep-alive后，连接的一段会向另一端发送一个探测报文，如果收到响应则重置计时器，如果没有收到响应，则经过一段时间间隔后再次发送探测报文，当达到一定次数还没有收到响应后，则认为连接不可到达，则断开连接。

#### 保活机制的弊端
1. 会占用不必要的带宽
2. 出现短暂的网络错误时，保活机制会把正常的TCP连接断开

### **拔掉网线后几秒，再插回去，原本的TCP连接还会存在嘛？**
<font color="#FF6347">客户端拔掉网线后，并不会直接影响到TCP连接的状态</font>。所以，拔掉网线后，TCP链接还会存在。

- 在传输数据的情况下：
    - 在客户端拔掉网线后，如果服务器发送了数据报文，那么服务器在没有收到确认报文就会进行重传，如果重传次数没有达到最大值之前，客户端将网线，那么双方的TCP连接还是正常存在的
    - 如果重传次数达到了最大值，那么服务器就会断开TCP连接，等到客户端插回网线并重新发送数据时，服务器会返回一个RST报文，表示TCP连接已经断开了，客户端收到这个报文后就知道了TCP连接已经断开了
- 在不传输数据的情况下：
    - 如果双方没有开启keep-alive机制，那么在客户端拔掉网线后没有插回，那么客户端和服务器的TCP连接状态还是会一直存在
    - 如果开启了keep-alive机制，那么客户端拔掉网线后，如果客户端一直不插回网线，那么服务器就会认为客户端已经断开了连接，那么服务器也会断开连接。如果在TCP探测期间客户端插回了网线，那么双方原本的TCP连接还是能正常存在。

除了客户端拔掉网线后，还有客户端`宕机`和`杀死进程`两种场景
1. 宕机。客户端宕机和拔掉网线是一样无法被服务器感知的，所以如果在没有数据传输并没有开启TCP的keep-alive机制的情况下，服务器的TCP连接会一直处于ESTABLISHED连接状态，知道服务器重启进程。
2. 杀死进程。杀死客户端进程后，客户端会向服务器进行四次挥手。

### **WebSocket**
WebSocket是HTML5提供的一种浏览器与服务器进行全双工通讯的网络技术，属于应用层协议，它是基于TCP传输协议的。<font color="	#FF6347">WebSocket的出现就解决了半双工通信的弊端。服务器可以主动向客户端推送数据，客户端也可以主动向服务器推送消息</font>。

**WebSocket的原理**：客户端向WebSocket服务器发送通知，带有所有接收者ID的事件，服务器会立即通知所有活跃的客户端，只有ID在接收者ID序列中的客户端才会处理这个事件。

**WebSocket的特点**：
- 支持双向通信，实时性更强
- 可以发送文本，也可以发送二进制数据
- 建立在TCP协议之上
- 数据格式轻量，性能开销小，通信高效
- <font color="	#FF6347">没有同源限制，客户端可以和任意服务器通信</font>

### **短轮询、长轮询、SSE和WebSocket的区别**
- 短轮询：客户端每隔一段时间就像服务器发送一次http请求，服务器收到请求后不管数据是否更新，都直接进行响应，通过客户端不断的发送请求，客户端可以收到服务器端的数据变化。<font color="	#FF6347">这种方式简单、易于理解。缺点就是建立http请求频繁，浪费了服务器和客户端的资源</font>。
- 长轮询：客户端向服务器发送请求后，服务器不会立即响应，而是判断服务器数据是否有更新，如果有更新，则进行响应；如果没有更新，则到达一定时间限制才返回。客户端 JS 响应处理函数会在处理完服务器返回的信息后，再次发出请求，重新建立连接。长轮询和短轮询比起来，它的优点是明显减少了很多不必要的 http 请求次数，相比之下节约了资源。长轮询的缺点在于，连接挂起也会导致资源的浪费。
- SSE：服务器使用流信息向客户端推送信息。严格地说，http 协议无法做到服务器主动推送信息。但是，有一种变通方法，就是服务器向客户端声明，接下来要发送的是流信息。也就是说，发送的不是一次性的数据包，而是一个数据流，会连续不断地发送过来。这时，客户端不会关闭连接，会一直等着服务器发过来的新的数据流，视频播放就是这样的例子。SSE 就是利用这种机制，使用流信息向浏览器推送信息。它基于 http 协议，目前除了 IE/Edge，其他浏览器都支持。它相对于前面两种方式来说，不需要建立过多的 http 请求，相比之下节约了资源。
- WebSocket：是 HTML5 定义的一个新协议议，与传统的 http 协议不同，该协议允许由服务器主动的向客户端推送信息。使用 WebSocket 协议的缺点是在服务器端的配置比较复杂。WebSocket 是一个全双工的协议，也就是通信双方是平等的，可以相互发送消息，而 SSE 的方式是单向通信的，只能由服务器端向客户端推送信息，如果客户端需要发送信息就是属于下一个 http 请求了。

### **URL各个组成部分详解**
`http://www.aspxfans.com:8080/news/index.asp?boardID=5&ID=24618&page=1#r_70732423`

这是一个完整的url，包括以下几部分内容：
1. 协议：该url的<font color="	#FF6347">协议部分为http</font>，代表该网页使用的是http协议，在互联网中可以使用多种协议，如HTTP、FTP等；
2. 域名：该url的<font color="	#FF6347">域名部分为www.aspxfans.com</font>，在url中可以使用ip地址作为域名；
3. 端口：该url的<font color="	#FF6347">端口部分为8080</font>，如果不指定端口，则使用默认端口；
4. 虚拟目录：该url的<font color="	#FF6347">虚拟目录部分为/news/</font>，虚拟目录为url中第一个`/`到最后一个`/`，虚拟目录也不是url必要的组成部分；
5. 文件名：该url的<font color="	#FF6347">文件名为index.asp，文件名部分为最后一个`/`到`？`或`#`之间的部分，如果没有`?`或`#`，则一直到url结束</font>，文件名不是url必要的组成部分；
6. 参数：该url的<font color="	#FF6347">参数部分为boardID=5&ID=24618&page=1，从`?`到`#`之间的部分</font>
7. 锚：该url的<font color="	#FF6347">锚部分为#r_70732423，锚指定页面打开时滚动的位置</font>，例如：
一个页面的html中有一段代码为：
```html
<div name='r_70732423'>...</div>
```
那么用户打开上面的url后，页面会滚动到该div对应的位置。

### **URL与URI**
- URL（uniform resource locator，全球资源定位符）：就是地址栏输入的字符串。
- URI（Universal Resource Identifier，统一资源标识符）：<font color="	#FF6347">是Web上可用的资源，例如：图像、视频、HTML文档、程序等</font>。

例如下面的url：
http://www.why.com.cn/myhtml/html1223/
我们可以这样理解：
1. 这是一个 通过HTTP协议访问的资源
2. 位于主机www.why.com.cn上
3. 通过路径/myhtml/html1223/访问它

URL主要由协议、域名和主机资源的详细地址组成；URI主要由<font color="	#FF6347">访问资源的命名机制、存放资源的主机名、资源名称（由路径表示）</font>。

URL和URI差别：
- URI：URL是URI的一种，URI更抽象，详细定位资源要使用URL
- Web上每一种资源都是由URI定位的，这里的定位是指web上的资源相对于主机server来说，存放在server上的详细路径。
- URL：定位客户端连接server所需要的信息，不仅定位了这个信息资源，也定义了如何找到这个资源。

### **用户输入网址到页面呈现中间经历了哪些步骤？**
1. **解析URL**：用户在浏览器中输入url，<font color="	#FF6347">浏览器对url进行解析</font>；
2. **缓存判断**：浏览器先后在<font color="	#FF6347">浏览器缓存、系统缓存和路由缓存</font>中查找请求的资源，如果找到了就直接使用查找到的资源，如果找不到就将请求发送给DNS服务器；
3. **DNS解析**：发送到DNS（域名服务器）获得域名对应的Web服务器的IP地址。DNS服务器会<font color="	#FF6347">先判断本地是否有该域名的IP地址缓存</font>，没有则向<font color="	#FF6347">本地DNS服务器发起请求</font>，如果没有则像<font color="	#FF6347">根域名服务器发起请求，获得负责顶级域名服务器的地址后，再向顶级域名服务器发送请求，获得负责权限域名服务器的地址后，再向权限域名服务器发起请求，最终获得域名的IP地址</font>，最后本地DNS服务器将IP地址返回。<font color="	#FF6347">用户向DNS服务器发起请求属于递归查询；本地DNS服务器向各级域名服务器发送请求属于迭代查询</font>。
4. **获取MAC地址**：当浏览器得到IP地址后，传输数据还需要直到目的主机的MAC地址，<font color="	#FF6347">因为数据链路层发送数据需要知道通信双方的MAC地址</font>。
5. **三次握手**：客户端浏览器与WEB服务器建立TCP连接(三次握手)；
6. **SLL/TSL协议握手**
7. **返回数据**；<font color="	#FF6347">当页面请求发送到服务器后，服务器会返回一个html文件作为响应，浏览器接收到响应后，开始对html文件进行解析，开始页面渲染过程</font>。
8. **页面渲染**：浏览器根据HTML文件构建DOM树，根据CSS文件构建CSS树，当DOM树和CSS树构建好后，根据他们来构建渲染树，<font color="	#FF6347">根据渲染树进行布局，布局完成后，使用浏览器接口对页面进行绘制，这时整个页面就显示出来了</font>。
9. **TCP四次挥手**


URL分为协议、网络地址、资源路径三个部分：
- 协议：从该计算机获取资源的方式，有HTTP、HTTPS、FTP等，不同的协议有不同的通讯内容格式
- 网络地址：指连接网络上的哪台计算机，可以是域名、IP地址，可以包括端口号
- 资源路径：指从服务器上获取哪一项资源

**永久重定向（301重定向）**：服务器给浏览器响应一个301永久重定向响应，这样浏览器就会访问“http://www.google.com/” 而非“http://google.com/”。<font color="	#FF6347">浏览器会认为这是两个网站，这样会减少网站的搜索率，导致网站在搜索引擎的排名降低。而使用301重定向后，会把这两个网站划分到一个网站下，增加搜索排名，同样也会节约缓存资源</font>。

**301和302的区别**：
- 301表示旧地址A的资源已经被永久移除了，浏览器在抓取新内容的同时也将旧的网址交换为重定向到新网址。<font color="	#FF6347">使用301的场景是旧地址因为某些原因被移除掉了，现在需要访问新的地址</font>。
- 302表示旧地址A的资源还在，这个重定向只是临时地从旧地址A跳转到地址B，浏览器会抓取新的内容保存到旧地址A中。SEO中，302好于301。<font color="	#FF6347">使用302的场景是网站被临时移动到一个新的位置</font>

# 浏览器原理
## 浏览器安全
### **SQL注入**
SQL注入即是指web应用程序对用户输入数据的合法性没有判断或过滤不严，攻击者可以在web应用程序中事先定义好的查询语句的结尾上添加额外的SQL语句，在管理员不知情的情况下实现非法操作，以此来实现欺骗数据库服务器执行非授权的任意查询，从而进一步得到相应的数据信息。

### **XSS攻击**
XSS攻击指的是<font color="	#FF6347">跨站脚本攻击，是一种代码注入攻击</font>。攻击者通过在网站注入恶意脚本，使之在用户的浏览器上运行，从而盗取用户的信息如cookie等。  

XSS的本质是因为网站没有对恶意代码进行过滤，与正常的代码混合到了一起，浏览器没有办法分辨哪些脚本是可信的，从而导致了恶意代码的执行。  

<font color="	#FF6347">攻击者可以通过这种攻击方式进行以下操作</font>：
- 获取页面数据：如DOM、localstroage、cooike
- DOS攻击：发送合理请求，占用服务器资源，从而使用户无法正常访问服务器
- 破坏页面结构
- 流量劫持（将链接指向某网站）

### **攻击类型**
XSS分为存储型、反射型、DOM型。
- 存储型指的是恶意脚本会存储在目标服务器上，当浏览器请求数据时，脚本从服务器传回并执行。
- 反射型指的是攻击者诱导用户访问一个带有恶意代码的 URL 后，服务器端接收数据后处理，然后把带有恶意代码的数据发送到浏览器端，浏览器端解析这段带有 XSS 代码的数据后当做脚本执行，最终完成 XSS 攻击。 
- DOM型指的通过修改页面的 DOM 节点形成的 XSS。

### **<font color="	#FF6347">存储型和反射型的区别</font>**
- 存储型是持久化的；反射型是非持久化的，需要欺骗用户点击URL
- 存储型将恶意代码存放在目标网站的数据库中；反射型将恶意代码存储到URL中
- 反射型常见于通过URL传递参数的功能，如网站搜索、跳转，需要用户主动打开恶意的URL才能生效。

### **DOM型与存储型、反射型的区别**
DOM型跟前两种的区别在于：<font color="	#FF6347">DOM型XSS攻击取出和执行恶意代码由浏览器端完成，属于前端JS自身的安全漏洞；而其他两种XSS都属于服务器端的安全漏洞</font>。

### **如何防御XSS攻击**
- 在进行<font color="	#FF6347">数据获取渲染和字符串拼接</font>的时候应该对可能出现的恶意代码情况进行判断。
- 使用CSP。<font color="	#FF6347">CSP的本质是建立一个白名单，告诉浏览器哪些外部资源可以加载和执行，从而防止恶意代码的注入攻击</font>。
- 对敏感信息进行保护。如：进行人机验证，避免脚本伪装成用户执行一些操作。
- 在Cookie中设置了`HTTP-Only`，这样js脚本就无法读取到Cookie信息，有效的防止了XSS攻击

### **CSRF攻击**
CSRF攻击是指<font color="	#FF6347">跨站请求伪造攻击</font>。攻击者诱导用户进入一个第三方网站，然后该第三方网站向被攻击网站发送跨站请求。如果用户在被攻击网站中保存了登录状态，那么攻击者就可以利用这个登录状态，绕过后台用户验证，冒充用户向服务器执行一些操作。  

![image](https://user-images.githubusercontent.com/70066311/170649553-759fe345-3128-41cd-b3e9-59508a8ea53b.png)

CSRF的本质是<font color="	#FF6347">**在同源请求中cookie会携带发送给服务器的数据的特点，以此来实现冒充用户**</font>。

### CSRF的攻击过程
1. 受害者登录a.com，并保留了登录凭证（Cookie）
2. 攻击者引诱受害者访问了b.com
3. b.com向a.com发送了一个请求：`a.com/act=xx`，浏览器会默认携带a.com的Cookie
4. a.com接收到请求后，对请求进行验证，并确认是受害者的凭证，误以为是受害者自己发送的请求
5. a.com以受害者的名义执行了`act=xx`
6. 攻击完成后，攻击者就可以在受害者不知情的情况下，冒充受害者，让a.com执行自己定义的操作

### **攻击类型**
常见的CSRF攻击有三种：
- GET类型。比如在网站中的一个img标签里构建一个请求，当用户打开这个网站的时候就会自动发起请求。

![](https://awps-assets.meituan.net/mit-x/blog-images-bundle-2018b/ff0cdbee.example/withdraw?amount=10000&for=hacker)

当受害者访问这个含有img的页面后，浏览器会自动向`http://bank.example/withdraw?account=xiaoming&amount=10000&for=hacker`发送一次HTTP请求，`bank.example`就会收到包含受害者登录信息的一次跨域请求。
- POST类型。比如构建一个表单，然后隐藏它，当用户进入页面时，自动提交这个表单。
```html
<form action="http://bank.example/withdraw" method="POST">
  <input type="hidden" name="account" value="xiaoming" />
  <input type="hidden" name="amount" value="10000" />
  <input type="hidden" name="for" value="hacker" />
</form>
<script> 
  document.forms[0].submit(); 
</script> 
```
- 链接类型。比如在a标签的href属性里构建一个请求，然后诱导用户去点击。比起其他两种用户打开页面就中招的情况，这种需要用户点击链接才会触发。
```html
<a href="http://test.com/csrf/withdraw.php?amount=1000&for=hacker" taget="_blank">
重磅消息！！
</a>
```

### **如何防御CSRF攻击**
#### 同源检测
既然CSRF大多来自第三方网站，那么我们就直接禁止外域（或者不受信任的域名）对我们发起请求。

那么问题来了，我们如何判断请求是否来自外域呢？

在HTTP协议中，每一个异步请求都会携带两个Header，用于标记来源域名：

- Origin Header
- Referer Header

这两个Header在浏览器发起请求时，大多数情况会自动带上，并且不能由前端自定义内容。 服务器可以通过解析这两个Header中的域名，确定请求的来源域。
##### Origin Header
在部分与CSRF有关的请求中，请求的Header中会携带Origin字段。字段内包含请求的域名（不包含path及query）。

如果Origin存在，那么直接使用Origin中的字段确认来源域名就可以。

但是Origin在以下两种情况下并不存在：
- IE11的同源策略：IE 11 不会在跨站CORS请求上添加Origin标头，Referer头将仍然是唯一的标识。最根本原因是因为IE 11对同源的定义和其他浏览器有不同。
- 302重定向： 在302重定向之后Origin不包含在重定向的请求中，因为Origin可能会被认为是其他来源的敏感信息。对于302重定向的情况来说都是定向到新的服务器上的URL，因此浏览器不想将Origin泄漏到新的服务器上。

##### 使用Referer Header确定来源域名
<font color="#FF6347">检查请求头中的Referer字段，进行同源检测</font>。`Referer`字段用于表明请求来源于哪个地址，`Referer`字段应和请求的地址位于同一域名下。这种方法有局限性，例如：依赖于浏览器发送`Referer`字段，这可能会有攻击者篡改`Referer`字段的可能性。

#### Token验证
<font color="	#FF6347">使用CSRF Token进行验证</font>。服务器向用户返回一个随机数token，当用户再次发起请求时，在请求参数中加入服务器端返回的token，然后服务器对这个token进行验证。

#### 显示验证方法
<font color="	#FF6347">添加验证码、密码</font>等。

### **中间人攻击**
中间人攻击是指攻击者与通讯的两端分别创建独立的连接，并交换其所接收到的数据，通讯两端认为他们正在通过一个私密的连接与对方直接对话。但事实上整个会话都被攻击者完全控制。攻击者可以拦截双方的通信内容并加入新的内容。

### **哪些可能引起前端安全问题**
- XSS
- CSRF
- 恶意第三方库

### **网络劫持有哪几种？如何防范**
DNS劫持（例如：输入京东强制跳转到淘宝就属于DNS劫持）
- DNS强制解析：通过修改运营商的本地DNS记录，来引导用户流量到缓存服务器
- 302跳转方式：通过监控网络出口的流量，分析判断哪些内容是可以进行劫持处理的，再对劫持的内存发起302跳转的回复，引导用户获取内容。

HTTP劫持（例如：访问谷歌但一直弹出广告）  
由于http时明文传输的，运营商会修改http相应内容（即加广告）  

DNS劫持由于涉嫌违法，已被监管起来。而http劫持依然非常盛行，最有效的办法就是使用https，将http加密，使得运营商无法获取明文。

## 进程与线程
- 进程是一个具有一定独立功能的程序在一个数据集上的一次动态执行的过程。
- 线程是进程的一部分，是程序执行中一个单一的顺序控制流程。

<font color="	#FF6347">进程是资源分配的最小单位，线程是CPU调度的最小单位</font>。

### **进程和线程的关系**
1. 进程中任意一线程崩溃都会导致整个进程崩溃
2. 线程之间可以共享进程中的数据
3. 当一个进程被关闭后，操作系统会回收进程占用的资源
4. 进程之间的内容相互隔离，使OS中的进程互不干扰

### **Chrome浏览器架构图**

![image](https://user-images.githubusercontent.com/70066311/165016802-fd0f4625-f7ae-453e-ac61-9162373ec2ea.png)

Chrome浏览器包括：浏览器主进程、GOU进程、网络进程、多个渲染进程、多个插件进程。

- 浏览器主进程负责<font color="#FF6347">界面显示、用户交互、子进程管理、存储</font>
- 渲染进程：<font color="#FF6347">将HTML、CSS、JS转换为用户可以与之交互的网页</font>
- GPU进程：<font color="#FF6347">绘制UI界面</font>
- 网络进程：<font color="#FF6347">负责网络资源的加载</font>
- 插件进程：<font color="#FF6347">负责插件的运行。因为插件容易奔溃，所以将插件 独立出来，防止插件崩溃对浏览器和页面造成影响</font>

**打开一个网页时，至少需要4个进程**。

虽然多线程造就了浏览器的稳定性、安全性，但也带来了一些问题，例如：
- 更多的资源占用：每个进程都会包含公共基础结构的副本，意味着浏览器会消耗更多的资源
- 更复杂的体系结构：耦合性高、扩展性差

### **进程和线程的区别**
- 进程可以看作独立的应用，线程不能
- 进程是cpu资源分配的最小单位，是能拥有资源和独立运行的最小单位；线程是cpu调度的最小单位，线程是建立在进程的基础上的一次程序运行单位，一个进程中可以有多个线程。
- 线程可以共享同一进程中的资源；进程必须通过协助进行通信
- 进程切换比线程切换开销大。线程切换不会引起进程的切换，但某个进程中的线程切换到另一个进程中的线程时，会引起进程切换
- 创建和撤销进程时，系统都要为其分配或回收资源

### **浏览器<font color="	#FF6347">渲染进程</font>的线程有哪些**
![image](https://user-images.githubusercontent.com/70066311/160823144-9939b969-30e7-4460-b752-b2c609d7595b.png)20
(1) GUI渲染进程：    
负责渲染页面，解析HTML、CSS，构建DOM树。当页面发生重绘或重排时，该线程就会执行。

(2) JS引擎线程：     
负责解析、执行JS脚本，一个页面无论什么时候都只有一个JS引擎在运行JS脚本。

<font color="	#FF6347">GUI渲染进程和JS引擎进程是互斥的，当JS进程执行时GUI引擎会被挂起，等待JS进程空闲再执行；但如果JS进程执行的时间过长，会造成页面渲染不连贯，导致页面渲染加载阻塞</font>。

(3) 事件触发线程：    
<font color="	#FF6347">用于控制事件循环</font>，当JS引擎进程执行到如setTimeout、鼠标事件、AJAX异步请求等操作时，会把对应的任务添加到事件触发线程中，事件触发线程会把这些事件添加到一个事件队列里，等待JS引擎进程处理。

(4) 定时器触发线程：     
因为JS引擎是单线程的，如果遇到线程阻塞可能会影响定时器的准确性，因此使用<font color="	#FF6347">单独的定时器线程，计时完成后加入任务队列等待JS引擎空闲后执行</font>。

（5）异步请求线程：     
进行异步请求连接后浏览器会开一个线程将请求后的回调函数加入事件队列中，等待JS引擎空闲后执行。

### **进程之间的通信方式**
1. 管道通信     
管道就是操作系统开辟的一段缓冲区，进程A可以将需要交互的数据拷贝到这段缓冲区中，进程B就可以读取了。     
管道通信的特点：
- 面向字节流的
- 只能单向通信
- 只能适用于父子进程
- 管道内部提供了同步机制

2. 消息队列通信     
消息队列就是一个消息的列表，用户可以在消息队列中添加、读取消息。<font color="	#FF6347">消息队列提供了一种从一个进程向另一个进程发送一个数据块的方法，但是数据块的最大长度受到了限制，如果进程需要频繁地读取队列中的数据到内存中，就相当于将一个进程拷贝到另一个进程中，这比较耗费时间</font>。

3. 信号量通信    
信号量的本质就是一个计数器，用来实现进程之间的互斥与同步。<font color="	#FF6347">例如信号量的初始值是 1，然后 a 进程来访问内存1的时候，我们就把信号量的值设为 0，然后进程b 也要来访问内存1的时候，看到信号量的值为 0 就知道已经有进程在访问内存1了，这个时候进程 b 就会访问不了内存1</font>。所以说，信号量也是进程之间的一种通信方式。

4. 共享内存      
共享内存就是映射一段能被其他进程所访问的内存，这段共享内存由一个进程创建，但多个进程都可以访问（使多个进程可以访问同一块内存空间）。

5. 套接字通信     
例如我们平时通过浏览器发起一个 http 请求，然后服务器给你返回对应的数据，这种就是采用 Socket 的通信方式了。

### **僵尸进程和孤儿进程**
- 孤儿进程：<font color="	#FF6347">父进程退出了，而它的一个或多个子进程还在运行</font>，那么这鞋子进程就是孤儿进程，他们将被init进程收养，并由init进程对它们完成状态收集工作。
- 僵尸进程：<font color="	#FF6347">子进程先比父进程结束，而父进程没有释放子进程占用的资源</font>，此时仍然认为子进程还在系统中，这种进程称为僵尸进程。

### **死锁产生的原因？如何解决**
死锁就是多个进程在运行过程因为争夺某一资源而造成的一种循环等待。

系统中的资源可以分为可剥夺资源和不可剥夺资源。

<font color="	#FF6347">产生死锁的原因</font>： 

1. 资源竞争：
- <font color="	#FF6347">竞争不可剥夺资源</font>。例如，系统中只有一台打印机，进程P1正在使用，P2进程若请求打印机资源将会被阻塞。
- <font color="	#FF6347">竞争临时资源</font>。临时资源包括信号、消息、硬件中断等。通常消息通信顺序不当会产生死锁。

2. 进程的推进顺序非法：
若P1保持了资源R1，P2保持了资源R2，系统处于不安全状态，因为这两个进程再向前推进，便可能发生死锁。例如：当P1需要R2资源而P2又需要R1资源时，就会发生相互等待的情况，这时就会发生死锁。

### **产生死锁的必要条件**
1. 互斥条件：某段时间内某资源仅为一进程所占用。
2. 请求和保持条件：进程因请求资源时发生阻塞而对已获得资源保持不放时。
3. 不剥夺条件：进程获得资源的未使用完成前不能剥夺，只能在使用完成时由自身释放。
4. 环路等待条件：在发生死锁时，必然存在一个进程——资源的环形链。

### **预防死锁的方法**
1. 资源一次性分配：一次性分配所有资源，这样就不会再有请求了（破坏请求条件）。
2. 资源有序分配：每个进程按照编号递增的顺序进行请求资源，释放则相反（破坏环路等待条件）
3. 可剥夺资源：当某进程获得了部分资源，若得不到其他资源，则释放当前拥有的资源（破坏不可剥夺条件）
4. 如果只有一个资源的到不到分配，那么就不给这个进程分配其它资源（破坏请求保持条件）

### **如何实现浏览器内多个标签页之间的通信**
<font color="#FF6347">多个标签页之间的通信，本质上都是通过中介者模式来实现的，因为标签页之间无法进行通信，所以应该找一个中介，进行数据通信</font>。

- localStorage：我们可以在一个标签页对 localStorage 的变化事件进行监听，然后当另一个标签页修改数据的时候，我们就可以通过这个监听事件来获取到数据。这个时候 localStorage 对象就是充当的中介者的角色。
- postMessage：用于将一条消息放入到消息队列中。消息队列里的消息通过调用GetMessage和PeekMessage取得。使用postMessage必须要获得对应标签页的引用。
- websocket：因为 websocket 协议可以实现服务器推送，所以服务器就可以用来当做这个中介者。标签页通过向服务器发送数据，然后由服务器向其他标签页推送转发。
- shareWorker：shareWorker 会在页面存在的生命周期内创建一个唯一的线程，并且开启多个页面也只会使用同一个线程。这个时候共享线程就可以充当中介者的角色。标签页间通过共享一个线程，然后通过这个共享的线程来实现数据的交换。


## 浏览器缓存
### 什么是浏览器缓存
**浏览器缓存**是浏览器在本地磁盘对用户最近请求过的文档进行存储，当访问者再次访问同一页面时，浏览器就可以直接从本地磁盘加载文档。

### 浏览器缓存的优点
1. 减少了冗余的数据传输
2. 减少了服务器压力，提升了网站性能
3. 加快了页面加载的速度

### 协商缓存与强缓存
**强缓存**：如果缓存资源有效，就不会向服务器发送请求，直接从缓存中读取资源，**返回200状态码**。

强缓存可以通过两种方式来设置：分别是htpp头信息中的Expires属性和Cache-Control属性。
1. <font color="	#FF6347">服务器通过在响应头中添加 Expires 属性，来指定资源的过期时间</font>。在过期时间以内，该资源可以被缓存使用，不必再向服务器发送请求。这个时间是一个绝对时间，它是服务器时间。使用服务器时间有这个坏处：<font color="	#FF6347">客户端与服务器的时间可能会不一样并且用户可以对客户端时间进行修改，影响缓存命中的结果</font>。
2. Cache-Control是HTTP1.1中提出的，提供了对资源更精确的控制。一般使用max-age设置缓存最大的有效期；no-store设置不进行缓存，每次请求都向服务器发起请求；no-cache设置请求前先向服务器确认返回的资源是否发生变化，如果未发生变化，则直接使用本地缓存。

Cache-Control的优先级比Expires高。

**协商缓存**：如果命中了强制缓存，那我们就不需要再向服务器发起请求，直接使用缓存资源。若没有命中则使用协商缓存。

命中协商缓存的条件有两个：
1. <font color="#FF6347">max-age过期</font>
2. <font color="#FF6347">使用no-cache</font>

协商缓存策略：先向服务器发送一个请求，如果资源没有发生修改，则返回一个304状态，让浏览器使用本地缓存，如果资源发生了修改，则返回修改后的资源。

协商缓存通过两种方式设置，分别是http头信息中的Etag和Last-Modified：
1. <font color="#FF6347">服务器通过响应头来添加Last-Modified表示资源最后一次修改的时间。当浏览器下一次发起请求时，会在请求头中加一个if-Modified-Since属性，表示上次返回资源时的Last-Modified属性。当服务器收到请求后，通过if-Modified-Since属性与资源最后一次修改时间进行对比，以此来判断是否做了修改</font>。
2. <font color="#FF6347">因为使用Last-Modified可能会不准确，http提供了Etag属性。当服务器返回资源时，会在头信息中添加Etag属性，这个属性是资源生成的唯一标识符，当资源发生改变时，Etag也会发生变化。在下一次资源请求时，浏览器会在请求头中添加一个 If-None-Match 属性，这个属性的值就是上次返回的资源的 Etag 的值。服务接收到请求后会根据这个值来和资源当前的 Etag 的值来进行比较，以此来判断资源是否发生改变</font>。

**总结**：     
<font color="#FF6347">强缓存的优先级高于协商缓存</font>。强缓存策略和协商缓存策略在缓存命中时都会直接使用本地的缓存副本，区别只在于协商缓存会向服务器发送一次请求，判断缓存是否命中。它们缓存不命中时，都会向服务器发送请求来获取资源。在实际的缓存机制中，强缓存策略和协商缓存策略是一起合作使用的。<font color="#FF6347">浏览器首先会根据请求的信息判断，强缓存是否命中，如果命中则直接使用资源。如果不命中则根据头信息向服务器发起请求，使用协商缓存，如果协商缓存命中的话，则服务器不返回资源，浏览器直接使用本地资源的副本，如果协商缓存不命中，则服务器返回最新的资源给浏览器</font>。


### **对浏览器的缓存机制的理解**
浏览器缓存全过程：
- 浏览器第一次加载资源时，服务器返回200，浏览器从服务器下载该资源文件，并缓存资源文件与response header，以供下次加载时对比使用
- 下次加载资源时，由于强制缓存优先级较高，<font color="#FF6347">先比较当前时间与上次返回200时的时间差，如果没有超过cache-control（控制HTTP缓存）设置的max-age，则没有过期，并命中强缓存，直接从本地读取资源</font>。如果浏览器不支持HTTP1.1，则使用Expires头判断是否过期
- 如果资源已过期，则表明强缓存没有被命中，则开始协商缓存，向服务器发送带有<font color="#FF6347">if-None-Match(Etag)和if-Modified-Since(Last-Modified)的请求</font>
- <font color="#FF6347">服务器收到请求后，优先根据Etag的值判断被请求的文件有没有做修改，Etag值一致则没有修改，命中协商缓存，返回304；如果不一致则有改动，直接返回新的资源文件带上新的Etag值并返回200</font>
- 如果服务器收到的请求没有Etag值，则将if-Modified-Since和被请求文件的最后修改时间做比对，一致则命中协商缓存，返回304；不一致则返回新的last-modified和文件并返回200

![image](https://user-images.githubusercontent.com/70066311/164454205-0c23d922-41b3-45b6-933e-16db887a7b00.png)

很多网站的资源后面都加了**版本号**，这么做是因为：<font color="	#FF6347">每次升级了JS或CSS文件后，为了防止浏览器进行缓存，强制改变版本号，让浏览器放弃缓存，重新下载新的JS或CSS文件，以保证用户能够及时获得网站的最新更新</font>。

```html
<link ref="stylesheet" href="a.css?v=1.0.0" />
```

### 点击刷新按钮或者按 F5、按 Ctrl+F5 （强制刷新）、地址栏回车有什么区别？
- 点击刷新按钮或者按F5：浏览器直接对本地缓存的文件过期，但是会带上If-Modifed-Since，If-None-Match，这就意味着服务，返回结果可能是 304，也有可能是 200。
- 按Ctrl+F5 （强制刷新）：浏览器不仅对本地缓存文件过期，还不会带上If-Modifed-Since，If-None-Match，相当于之前没有请求过，返回200状态。
- 地址栏回车：浏览器发起请求，按正常的强缓存 -> 协商缓存 -> 请求资源的过程执行。

### 浏览器资源缓存的位置有哪些
浏览器缓存为止一共有三个，优先级从低到高分别是：
1. Disk Cache。缓存在硬盘中， <font color="	#FF6347">存储时间久，容量大，但读取速度慢</font>。Disk Cache根据HTTP Header中的字段判断哪些资源需要缓存，哪些资源可以不请求直接使用，哪些资源需要重新请求。
2. Memory Cache。内存缓存<font color="	#FF6347">效率最快，但内存缓存虽然读取效率高，但是持续性很短，会随着进程的释放而释放</font>。一旦我们关闭了Tab页面，内存中的缓存就被释放掉了。
3. Service Worker。<font color="	#FF6347">Service Worker就是服务器与浏览器之间的中间人角色。它会拦截当前网站所有的请求，进行判断，可以让我们自由控制缓存哪些文件，并且缓存是持久的，如果需要向服务器发起请求就转发给服务器，如果可以直接使用缓存就返回缓存而不转发给服务器，从而提高浏览体验</font>。

## 浏览器渲染原理 
### 浏览器的渲染过程
1. 文档解析：首先解析收到的文档，根据文档构建一颗DOM树，DOM树是由DOM元素及属性节点组成的
2. CSS文件解析：然后对CSS进行解析，生成CSSOM规则树
3. 生成渲染树：根据DOM树与CSSOM规则树构建渲染树。渲染树的节点被称为渲染对象，渲染对象和DOM元素相对应。<font color="	#FF6347">渲染对象和DOM元素的对应关系不是一对一的，不可见的DOM元素不会被插入到渲染树，还有一些DOM元素对应几个可见对象</font>
4. 页面布局：浏览器根据渲染树进行布局，确定各个节点在页面中的大小和位置
5. 绘制页面：浏览器调用接口绘制页面

![image](https://user-images.githubusercontent.com/70066311/167817006-de92fd8a-c6b6-40e5-8515-3e7fb300bc5c.png)

<font color="	#FF6347">为了更好的用户体验，渲染引擎将尽可能早的将内容呈现在屏幕上，并不会等到所有的html解析完成后再去构建和布局render树，它是解析完一部分内容就显示一部分内容，同时，还可能通过网络下载其余内容</font>

### 浏览器渲染优化
- 针对JS：JS既会阻塞HTML的解析，也会阻塞CSS的解析。因此我们可以对JS的加载方式进行改变，从而达到优化的效果：
    1. 将JS引用放到文档底部
    2. body中尽量不要写Script标签
    3. 使用defer引入JS
- 针对CSS：使用link代替@import，如果样式少，写成内联样式
- 针对DOM树、CSSOM树：
    1. HTML标签的深度不要太深
    2. 使用语义化标签
    3. 减少CSS代码层级，因为选择器是从右向左进行解析的
- 减少重排和重绘

### 什么是文档的预解析
<font color="	#FF6347">预解析就是分一个线程加载接下来需要使用到的资源（图片、脚本等）</font>。预解析不会改变DOM树，它只解析外部资源的引用，比如图片、脚本、样式等。

### CSS 如何阻塞文档解析？
理论上，既然样式表不改变 DOM 树，也就没有必要停下文档的解析等待它们。然而，存在一个问题，JavaScript 脚本执行时可能在文档的解析过程中请求样式信息，如果样式还没有加载和解析，脚本将得到错误的值，显然这将会导致很多问题。所以如果浏览器尚未完成 CSSOM 的下载和构建，而我们却想在此时运行脚本，那么浏览器将延迟 JavaScript 脚本执行和文档的解析，直至其完成 CSSOM 的下载和构建。也就是说，在这种情况下，浏览器会先下载和构建 CSSOM，然后再执行 JavaScript，最后再继续文档的解析。

### 如何优化关键渲染路径
为了尽快完成首次渲染，我们要最大限度减小以下三种可变因素：
- 关键资源的数量：可能阻止网页首次渲染的资源。这些资源越少，浏览器的工作量也就越小，对CPU和其他资源的占用也就越少。
- 关键路径长度：关键路径长度受所有关键资源与其字节大小之间依赖关系图的影响。某些资源只能在上一资源处理完后才能开始下载，并且资源越大，下载所需的往返次数就越多、
- 关键字节的数量：浏览器需要下载的关键字节数量越少，处理内容并让其在页面上展示的速度就越快。<font color="	#FF6347">要减少字节数，可以减少资源数，把它们设为非关键资源或删除</font>。

优化关键渲染路径的常规步骤：
1. 对关键路径进行分析和特性描述：资源数、字节数、长度
2. 最大限度减少关键资源的数量：延迟它们的加载，将它们标记为异步等
3. 优化关键字节数以缩短下载时间（往返次数）
4. 优化其余关键资源的加载顺序：您需要尽早下载所有关键资产，以缩短关键路径长度

## Cookie和Session
### 什么是Cookie
Cookie的本质就是一段文本，它是浏览器第一次向服务器发起请求后浏览器返回给客户端的，在以后发送时浏览器都会写带上这个Cookie，用于<font color="	#FF6347">服务器判断前后请求是否由同一个用户发起，起到保持用户登录状态的作用</font>。

#### Cookie的作用
- 会话状态管理：如用户登陆状态、购物车、游戏分数等
- 个性化设置：主题、用户自定义设置等
- 浏览器行为跟踪：分析用户行为

### 什么是Session
Session是服务器和客户端一次会话的过程。<font color="	#FF6347">Session对象存储特定用户会话所需的属性及配置信息，这样用户在应用程序的Web页之间跳转时，存储在Session对象中的变量将不会丢失，而是在整个用户会话中一直存在下去。当客户端关闭会话或者Session超时失效时会话结束</font>。

### Cookie和Session是如何配合的
用户第一次请求服务器的时候，服务器根据用户提交的相关信息，创建对应的 Session ，请求返回时将此 Session 的唯一标识信息 SessionID 返回给浏览器，浏览器接收到服务器返回的 SessionID 信息后，会将此信息存入到 Cookie 中，同时 Cookie 记录此 SessionID 属于哪个域名。

当用户第二次访问服务器的时候，请求会自动判断此域名下是否存在 Cookie 信息，如果存在自动将 Cookie 信息也发送给服务端，服务端会从 Cookie 中获取 SessionID，再根据 SessionID 查找对应的 Session 信息，如果没有找到说明用户没有登录或者登录失效，如果找到 Session 证明用户已经登录可执行后面操作。

根据以上流程可知，SessionID 是连接 Cookie 和 Session 的一道桥梁，大部分系统也是根据此原理来验证用户登录状态。

### Cookie和Session的区别
- 作用范围不同：Cookie保存在客户端；Session保存在服务器
- 存储方式不同：Cookie只能保存二进制；Session可以存放任意类型的数据
- 有效期不同：Cookie可以长时间保持；而Session一般时效较短
- 安全性不同：Cookie存储在客户端，容易被劫持；Session存储在服务器，更加安全
- 存储大小不同：Cookie存储空间不超过4K；Session可存储数据远大于Cookie


## 浏览器本地存储
### 浏览器本地存储方式及使用场景
(1) Cookie    
在<font color="	#FF6347">使用HTTP协议本身不对请求和响应之间的通信状态进行保存，所以引用了Cookie</font>，Cookie的本质是一个文本，可以用来<font color="	#FF6347">判断网络中两个请求是否由同一个用户发起的</font>。

**Cookie的组成**
1. <font color="#FF6347">NAME=[VALUE]</font>
Cookie的值，NAME是唯一标识Cookie的名称，不区分大小写；VALUE是存储在Cookie里的字符串值，该值必须通过URL编码
2. <font color="#FF6347">Domain=[域名]</font>
Cookie有效的域，发送到这个域所有的请求都会包含对应的Cookie
3. <font color="#FF6347">Path=[PATH]</font>
4. <font color="#FF6347">Expires=[DATE]</font>
Cookie的有效期。浏览器结束后会删除所有Cookie
5. <font color="#FF6347">Secure</font>
设置仅在使用HTTPS进行通信时才发送Cookie
6. <font color="#FF6347">HttpOnly</font>
设置只在服务器上读取，不能再通过JS读取Cookie

**Cookie的特性**
- Cookie一旦创建成功，名称就无法改变
- Cookie在请求一个新的页面时，都会被发送过去
- <font color="	#FF6347">Cookie是无法跨域的，这也保证了隐私性和安全性，无法获取其他网站的Cookie</font>。如果想要不同域之间共享Cookie，必须使用Nginx反向代理或向其他网站写Cooike
- Cookie的体积小，一般不超过4k
- Cookie的个数有限，如果超过Cookie个数的限制，则会删除之前设置的Cookie

**Cookie的使用场景**：
1. 统计页面的点击次数
2. 与session结合使用，<font color="	#FF6347">将sessionId存储到Cookie中，每次发送请求都携带这个sessionId，这样服务器段就知道是谁发送的请求了</font>。

(2) LocalStorage
有时我们储存的信息比较多，Cookie就存储不下了，这时候就需要LocalStorage。

LocalStorage的优点：
- 相比Cookie可以存储更多的信息，大小一般为5MB
- <font color="	#FF6347">LocalStorage是持久存储的，除非主动清理，不然会永久存在</font>
- 仅储存在本地，不会像Cookie那样每次发起请求都会被携带

LocalStorage的缺点：
- 存在浏览器兼容问题
- 如果浏览器设置为隐私模式，则无法读取到LocalStorage
- 受同源策略的限制，即<font color="	#FF6347">端口、协议、主机地址有任何一个不相同都不会访问</font>

LocalStorage常用的API：
```js
// 保存数据到LocalStorage
LocalStorage.setItem("key", "value")

// 从LocalStorage获取数据
LocalStorage.getItem("key")

// 删除LocalStorage中保存的数据
LocalStorage.removeItem("key")

// 清空LocalStorage
LocalStorage.clear()

// 获取某个索引的key
LocalStorage.key(index)
```

LocalStorage的适用场景：
1. 网站有换主题之类的功能
2. 在网站中<font color="	#FF6347">用户的浏览信息</font>也会保存到LocalStorage中，还有网站中<font color="	#FF6347">不常变动的个人信息</font>也保存在LocalStorage中。

(3) SessionStorage
SessionStorage用于<font color="	#FF6347">临时保存同一个标签页中的数据，刷新页面不会删除SessionStorage，关闭标签页才会删除SessionStorage</font>。

SessionStorage和LocalStorage的对比：
1. <font color="	#FF6347">SessionStorage和LocalStorage都存储在本地</font>
2. SessionStorage也有同源策略的限制，<font color="	#FF6347">SessionStorage只有在同一浏览器的同一窗口下才能共享</font>
3. SessionStorage和LocalStorage都不能被爬虫获取

SessionStorage常用的API：
```js
// 保存数据到SessionStorage
SessionStorage.setItem("key" ,"value")

// 从SessionStorage获取数据
SessionStorage.getItem("key")

// 删除SessionStorage中保存的数据
SessionStorage.removeItem("key")

// 清空SessionStorage
SessionStorage.clear()

// 获取某个索引的key
SessionStorage.key(index)
```

SessionStorage的适用场景：
由于<font color="	#FF6347">SessionStorage具有时效性</font>，可以用来存储一些网站的<font color="	#FF6347">游客登录信息，还有临时的浏览记录的信息</font>，当网站关闭之后，这些信息也就随之消除了。

### **Cookie、LocalStorage、SessionStorage区别**
- Cookie：<font color="	#FF6347">Cookie是服务器端用于记录用户状态的一种方式，由服务器设置，在客户端存储，然后每次发起同源请求后，发送给服务器端</font>，Cookie最多能存储4k，生命周期由expires指定，Cookie只能被同源的页面访问共享。
- LocalStorage：是浏览器本地存储的方法，<font color="	#FF6347">除非手动删除，不然会被永久保存在本地，可以用来存储主题颜色、用户一些补偿修改的信息等</font>，只能被同源的页面访问。
- SessionStorage：是浏览器本地存储方法，<font color="	#FF6347">刷新不会删除存储，在关闭页面时会删除存储</font>，SessionStorage只能被同一个窗口的同源页面访问。

### **IndexedDB**
当本地存储大量数据时，就可以使用：IndexedDB。<font color="#FF6347">：IndexedDB是浏览器提供的一种本地的数据库存储机制，他不是关系型数据库，它内部采用对象仓库的形式存储数据</font>。

![image](https://user-images.githubusercontent.com/70066311/164193620-422d47c0-c81f-4286-9f9f-775ab98cf5a8.png)

- 一个域名下可以包含多个数据库
- 一个数据库包括多个对象仓库
- 每个对象仓库中包含多条数据记录

**IndexedDB的特点**
1. **键值对存储**：所有类型的数据都可以直接存入，包括JS对象。<font color="#FF6347">对象仓库中，数据以“键值对”的形式保存，每条数据记录都有对应的主键，主键都是独一无二的，不能有重复</font>。
2. **异步**：IndexedDB操作时不会锁死浏览器，用户依然可以进行其他操作。LocalStorage的操作是同步的。<font color="#FF6347">异步的设计是为了防止大量数据的读写，拖慢网页的表现</font>。
3. **支持事务**：如果在操作时有一步失败，那么整个事务就取消，数据库就回滚到事务发生之前的状态，不存在只改写一部分数据的情况。
4. **同源限制**：每个数据库对应创建它的域名，网页只能访问自身域名下的数据库，而不能访问跨域的数据库。
5. **存储空间大**
6. **支持二进制存储**

## 跨域
### 1. 同源策略
同源策略限制了从一个源加载的文档或脚本与另一个源的资源的交互。<font color="	#FF6347">同源即协议、端口号、域名必须一致</font>。  
下表给出了与 URL `http://store.company.com/dir/page.html` 的源进行对比的示例:
|  URL   | 是否跨域  | 原因 | 
|  ----  | ----  | ---- |
| http://store.company.com/dir/page.html  | 同源 | 完全相同 |
| http://store.company.com/dir/inner/another.html  | 同源 | 只有路径不同 |
| https://store.company.com/secure.html  | 跨域 | 协议不同 |
| http://store.company.com:81/dir/etc.html  | 跨域 | 端口不同 ( http:// 默认端口是80) |
| http://news.company.com/dir/other.html  | 跨域 | 主机不同 |
同源策略主要限制了三个方面：
1. **数据层面**：当前域下的js脚本不能访问其他域下的cookie、localStorage
2. **DOM层面**：当前域下的js脚本不能操作或访问其它域下的DOM
3. **网络层面**：当前域下的ajax无法发送跨域请求

同源策略的目的主要是<font color="	#FF6347">为了保证用户的信息安全，防止恶意网站盗取资源</font>。

### 2. 如何解决跨域问题
1. CORS跨域资源共享机制
跨域资源共享机制（CORS）是一种基于HTTP头的机制，该机制通过允许服务器标示除了它自己之外的其它`Origin（域名、协议、端口号）`，使得浏览器允许这些`Origin`访问加载自己的资源。

浏览器将CORS分为简单请求和非简单请求：     
1.  简单请求：浏览器会直接发出CORS请求，它会在请求的头信息中加上一个Origin字段，该字段说明本次请求来自哪个源，服务器会根据这个Origin字段来判断是否同意本次请求，如果Origin请求的域在许可范围内，服务器会返回响应和`Access-Control-Allow-Origin`等信息头；如果不在许可范围内，服务器就返回一个正常的HTTP回应，浏览器发现没有Access-Control-Allow-Origin等头部信息，就知道请求出错了。

2. 
- 非简单请求：非简单请求是对服务器有特殊要求的请求，比如使用DELETE或PUT等请求，非简单请求会在正式请求之前先进行一次查询请求，称为预检请求。
- 在预检请求中，浏览器会询问服务器当前所在的网页是否允许访问，以及可以使用哪些HTTP请求方式和头信息字段。预检请求使用的是OPTIONS，表示这个请求时来询问的，他的头信息中的关键字段是Origin，表示请求来自哪个源；还有Access-Control-Request-Method，表示HTTP请求所使用的方法；`Access-Control-Request-Headers`，表示额外发送的头信息字段。服务器在收到浏览器的预检请求之后，会根据头信息的三个字段来进行判断，如果返回的头信息在中有Access-Control-Allow-Origin这个字段就是允许跨域请求，如果没有，就是不同意这个预检请求，就会报错。
- 通过了预检请求，在以后每次的CORS请求都会自带一个Origin头信息字段。服务器的回应，也都会有一个Access-Control-Allow-Origin头信息字段。


2. JSONP    
**JSONP**的原理就是利用`<script>`标签没有对跨域限制。首先在客户端定义一个`callback`函数，然后把`callback`的函数名传给服务器。服务器在接收到请求后发现有这个函数，就知道了客户端向要用该函数接收请求的数据，然后后端就将数据写入函数中返回给客户端。客户端执行回调函数拿到数据。

实现跨域主要得益于`<script>`的两个特点：
- src属性能够访问任何URL资源，并不会受到同源策略的限制
- 如果访问的资源包含JS代码，其会在下载后自动执行

JSONP的缺点：
- 具有局限性，仅支持get方法
- 不安全，可能会遭受XSS攻击

3. nodejs中间件代理跨域
通过一个代理服务器，实现数据的转发。

4. nginx代理
反向代理请求。

5. document.domain
<font color="	#FF6347">如果只想实现主域名下的不同子域名的跨域操作，可以设置document.domain来解决</font>。将`document.domain`设置为主域名，来实现子域名的跨域操作，这时候主域名下的`cookie`就可以被子域名访问。


### **正向代理与反向代理的区别**
- 正向代理：客户端想获得一个服务器数据，但是因为种种原因无法直接获取。于是客户端设置了一个代理服务器，并且指定目标服务器，之后代理服务器会向服务器转交请求并在获得资源后返回给浏览器。这样的本质上起到了<font color="	#FF6347">对真实服务器隐瞒真实客户端的目的</font>。
- 反向代理：服务器为了能够将工作负载分不到多个服务器来提高网站性能 (负载均衡)等目的，当其受到请求后，会首先根据转发规则来确定请求应该被转发到哪个服务器上，然后将请求转发到对应的真实服务器上。这样本质上起到了对客户端隐藏真实服务器的作用。一般使用反向代理后，需要通过修改 DNS 让域名解析到代理服务器 IP，这时浏览器无法察觉到真正服务器的存在，当然也就不需要修改配置了。

![image](https://user-images.githubusercontent.com/70066311/166883613-da84da5f-e248-4dea-9a02-514469a3414f.png)

## 浏览器事件机制
### **什么是事件**
事件是用户操作页面时发生的交互动作，比如click/move等，事件除了用户触发的动作外，还可以是文档加载、窗口滚动和大小调整。事件被封装为一个event对象，包含了事件的属性和方法。

### **事件流**
事件流就是<font color="	#FF6347">事件的流向，先捕获，再到事件源，最后再冒泡，在DOM2级事件模型中，事件流分为三个阶段：事件捕获、事件处理、事件冒泡</font>。

![image](https://user-images.githubusercontent.com/70066311/168778692-6ce7250c-132c-460a-9f4c-0faf6c1c86a0.png)

### **事件模型**
- DOM0级事件模型：可以在网页中直接定义监听函数，也可以通过js来指定监听函数，直接在DOM对象上注册事件。

HTML代码中直接绑定
```html
<input type="button" onclick="fun()">    
```

通过JS代码绑定
```js
var btn = document.getElementById('.btn');
btn.onclick = fun;
```

**特性**：   
  1. 绑定速度快。但由于绑定速度太快，有可能页面还未加载出来就已经完成绑定，导致绑定事件不可用。
  2. 只支持冒泡，不支持捕获。   
  3. 同一个类型的事件只能绑定一次。
```html
<input type="button" id="btn" onclick="fun1()">

<script>
  var btn = document.getElementById('.btn');
  btn.onclick = fun2;
</script>
```

- IE事件模型：该事件模型共有两个过程：事件处理阶段和事件冒泡阶段。事件处理阶段会首先执行目标元素绑定的监听事件。然后是事件冒泡阶段，冒泡指的是事件从目标元素冒泡到document，依次检查经过的节点是否绑定了事件监听函数，如果有则执行。

- DOM2级事件模型：一共三个过程：
1. <font color="	#FF6347">事件捕获阶段：事件从document一直向下传播到目标元素，依次检查经过的结点是否绑定了事件监听函数，如果绑定则执行</font>。
2. 事件处理阶段：事件到达目标元素，出发目标元素的监听函数。
3. 事件冒泡阶段：事件从目标元素冒泡到`document`，依次检查经过的节点是否绑定了事件监听函数，如果有则执行。

**特性**：
1. 一个DOM元素可以绑定多个事件，并不会冲突。
```js
btn.addEventListener(‘click’, showMessage1, false);
btn.addEventListener(‘click’, showMessage2, false);
btn.addEventListener(‘click’, showMessage3, false);
```
2. 执行时机：如果第三个参数设置为true时，会在事件捕获阶段执行，如果为false会在事件冒泡中执行。


### **事件冒泡**
事件冒泡就是<font color="	#FF6347">元素自身的事件被触发后，如果父元素有相同的事件，如onclick 事件，那么元素本身的触发状态就会传递，也就是冒泡到父元素，父元素的相同事件也会一级一级根据嵌套关系向外触发，直到 document/window，冒泡过程结束</font>。

![image](https://user-images.githubusercontent.com/70066311/168251514-1e11c64f-668e-4909-8ec1-ea866fb5a71c.png)

### **如何阻止事件冒泡**
- 普通浏览器：event.stopPropagation()
- IE浏览器：event.cancelBubble = true

### **事件委托**
事件委托就是<font color="	#FF6347">把子元素响应事件的函数委托到父元素，由父元素统一处理多个子元素的事件</font>。事件委托的优点是<font color="	#FF6347">内存消耗少，效率较高、可以动态绑定事件</font>。

```html
<ul id="list">
  <li>item 1</li>
  <li>item 2</li>
  <li>item 3</li>
  ......
  <li>item n</li>
</ul>

<script>
  // 给父层元素绑定事件
  document.getElementById('list').addEventListener('click', function (e) {
    // 兼容性处理
    var event = e || window.event;
    var target = event.target || event.srcElement;
    // 判断是否匹配目标元素
    if (target.nodeName.toLocaleLowerCase() === 'li') {
      console.log('the content is: ', target.innerHTML);
    }
  });
</script>
```

事件委托的局限性：对于一些事件没有事件冒泡机制，无法实现事件委托。

### **事件委托的使用场景**
**场景一**：给页面的所有的a标签添加click事件，代码如下：
```js
document.addEventListener("click", function(e) {
	if (e.target.nodeName == "A")
		console.log("a");
}, false);
```

但是这些a标签可能包含一些像span、img等元素，如果点击到了这些a标签中的元素，就不会触发click事件，因为事件绑定上在a标签元素上，而触发这些内部的元素时，e.target指向的是触发click事件的元素（span、img等其他元素）。

这种情况下就可以使用事件委托来处理，将事件绑定在a标签的内部元素上，当点击它的时候，就会逐级向上查找，直到找到a标签为止，代码如下：

```js
document.addEventListener("click", function(e) {
	var node = e.target;
	while (node.parentNode.nodeName != "BODY") {
		if (node.nodeName == "A") {
			console.log("a");
			break;
		}
		node = node.parentNode;
	}
}, false);
```

**场景二**：动态绑定事件。在很多情况下我们会进行动态的删除或添加元素，需要给这些元素解绑或绑定事件。如果有了事件委托，那么事件绑定到父层，那么子元素的添加或删除就不会涉及到动态添加或删除事件，就可以减少很多工作。

**局限性**：事件委托也有局限性，例如：<font color="#FF6347">focus、blur之类的事件没有事件冒泡机制；mousemove、mouseout 这样的事件需要进行定位，对性能的消耗比较高，不适合事件委托</font>。

**缺点**：事件委托会影响页面性能：
- 对于最底层元素，如果点击了最底层元素，那么到绑定元素之间的`DOM层数`如果太多就会影响性能。
- 对于元素，绑定事件委托的次数太多也会影响性能。

### **event.target 和 event.currentTarget 的区别**
我们为一个元素绑定一个点击事件的时候，可以指定是要在捕获阶段绑定或者换在冒泡阶段绑定。 <font color="#FF6347">当addEventListener的第三个参数为true的时候，代表是在捕获阶段绑定，当第三个参数为false或者为空的时候，代表在冒泡阶段绑定</font>。

<font color="#FF6347">event.target指向引起触发事件的元素，而event.currentTarget则是事件绑定的元素，只有被点击的那个目标元素的event.target才会等于event.currentTarget</font>。

结合下面的例子，就可以很好来理解event.target和event.currentTarget：
```html
<div id="a">
    <div id="b">
      <div id="c">
        <div id="d"></div>
      </div>
    </div>
</div>

<script>
    document.getElementById('a').addEventListener('click', function(e) {
      console.log('target:' + e.target.id + '&currentTarget:' + e.currentTarget.id);
    });    
    document.getElementById('b').addEventListener('click', function(e) {
      console.log('target:' + e.target.id + '&currentTarget:' + e.currentTarget.id);
    });    
    document.getElementById('c').addEventListener('click', function(e) {
      console.log('target:' + e.target.id + '&currentTarget:' + e.currentTarget.id);
    });    
    document.getElementById('d').addEventListener('click', function(e) {
      console.log('target:' + e.target.id + '&currentTarget:' + e.currentTarget.id);
    });
</script>
```

### **同步和异步的区别**
- 同步指的是当一个进程在执行某个请求时，如果这个请求需要等待一段时间才能返回，那么这个进程会一直等待下去，直到消息返回为止再继续向下执行。
- 异步指的是当一个进程在执行某个请求时，如果这个请求需要等待一段时间才能返回，这个时候进程会继续往下执行，不会阻塞等待消息的返回，当消息返回时系统再通知进程进行处理。

### **事件循环**
JS是单线程运行的，在执行代码时，JS通过将不同函数的执行上下文压入栈中保证代码的有序执行。当执行到异步任务时，JS并不会等待异步任务执行完，而是将这个事件挂起，继续执行后面的任务，当异步任务执行完后，将它的回调函数加入到任务队列中等待执行。任务队列分为宏任务队列和微任务队列，当当前的执行栈执行结束后，JS引擎会判断微任务队列中是否有任务，如果有则执行任务，然后再执行宏任务队列中的任务。

![image](https://user-images.githubusercontent.com/70066311/164969442-d06118b2-b17b-439f-b4fb-0990126c58f7.png)

EventLoop的执行顺序如下：
- 首先执行同步代码，这属于宏任务
- 当执行完所有同步代码后，执行栈为空，查询是否有异步代码需要执行
- 执行所有微任务
- 当执行完所有微任务后，如有必要会渲染页面
- 然后开始下一轮 Event Loop，执行宏任务中的异步代码

### **宏任务和微任务有哪些**
- 微任务：promise、
- 宏任务：setTimeout、setInterval、I/O 操作、UI 渲染   

![image](https://user-images.githubusercontent.com/70066311/168248924-b90e2dd9-f8d4-41ef-81a8-71bc10b4ada1.png)

### 浏览器垃圾回收机制
#### V8的垃圾回收机制是怎样的
V8采用了分布式垃圾回收机制，将内存分为新生代和老生代两个部分。

**新生代算法**      
<font color="#FF6347">新生代中的对象一般存活时间较短，使用Scavenge GC算法。Scavenge GC算法具体实现中，主要采用了一种复制式的方法，即`Cheneny算法`</font>。

在新生代空间中，`Cheney算法`将内存空间分为两部分，分别为From空间和To空间。在这两个空间中，必定有一个空间是使用的，另一个空间是空闲的。新分配的对象会被放入From空间中，当From空间被占满时，新生代GC就会启动了。算法会检查From空间中存活的对象并复制到To空间中，如果有失活的对象就会销毁。当复制完成后From空间和To空间互换，GC结束。

![image](https://user-images.githubusercontent.com/70066311/169829860-83e7361a-c783-4014-b715-46d8a342c97f.png)

有两种情况会使新生代中的对象移到老生代中：
1. 当一个对象经过2次复制后依然存活，它将会被认为是生命周期较长的对象，随后会被移动到老生代中，采用老生代的垃圾回收策略进行管理。
2. 如果复制一个对象到空闲区时，空闲区空间占用超过了25%，那么这个对象会被直接晋升到老生代空间中。设置25%的原因是<font color="#FF6347">当完成Scanvenge回收后，空闲区将翻转成使用区，继续进行对象内存的分配，若占比过大，将影响后续的内存分配</font>。

**老生代算法**     
<font color="#FF6347">老生代中的对象一般存活时间较长且占用空间大，因为老生代中的对象通常比较大，如果再用新生代赋值的方法就会非常耗时，从而导致回收执行效率不高</font>。老生代使用了两个算法，分别是标记清除算法和标记压缩算法。

- 标记清除算法和JS回收机制的标记清除算法相同。
- 并行回收。      
    **全停顿**：JS是单线程的，当进行垃圾回收时就会阻塞当前的JS脚本的执行，需等待垃圾回收完毕后再回复脚本执行，这种行为就是**全停顿**。如果某次GC时间过长，那么对用户来说就会造成页面卡顿的情况，所以有了并行回收。

![image](https://user-images.githubusercontent.com/70066311/169842107-4983927f-e761-4390-8854-626c6918fd3b.png)

    而并行回收就是使用多个辅助线程，与主线程同时进行垃圾回收，加快回收速度。但是主线程还是要让出。
- 并发回收。

并行回收依然可能阻塞主线程，而是用并发回收，辅助线程可以在后台完成执行垃圾回收的操作，主线程也可以自由执行不被挂起。

并发回收的缺点：<font color="#FF6347">在一边进行垃圾回收一边执行JS时，堆中的对象引用关系随时都会发生变化，辅助线程之前做的一些标记或者正在进行的标记就会发生改变，所以需要额外的锁来进行限制</font>。

- 标记整理算法
标记整理算法可以有效解决标记清除法的缺点。在标记结束后，标记整理算法会将活着的对象向内存的一端移动，最后清理掉边界的内存。

![image](https://img-blog.csdnimg.cn/img_convert/5265460a9e79e18c83793ae1a00f539c.png)


#### 哪些行为会引起内存泄漏
1. **意外的全局变量**：在js中未对变量进行声明直接赋值的话，该变量会被当作全局变量。如果有大量的变量没有声明，会出现大量的全局变量，导致内存泄漏。
2. **闭包**：在使用闭包后，可以使我们访问到函数内部的变量和函数，当函数执行完毕后，这些变量会被保留在内存中，仍然可以使用，不会被回收。所以如果大量使用闭包，会导致内存泄漏。
3. **引用了DOM元素，删除了DOM元素后，该引用还被保留在内存中没被删除**
4. **设置了setInterval定时器但忘记取消它**：设置了 setInterval 定时器，而忘记取消它，如果在定时器中有循环函数有对外部变量的引用的话，那么这个变量会被一直保留在内存中，无法被回收。

# Node.js
### **对Node.js的理解**
Node.js就是一个js运行时环境，让js运行在服务器端，利用事件驱动，非阻塞和异步输入输出模型等技术提高性能。

- 非阻塞异步：Nodejs采用了非阻塞型I/O机制，在做I/O操作时不会造成任何阻塞，当完成之后，以时间的形式通知执行操作。例如在执行了访问数据库的代码之后，将立即转而知行其后面的代码，把数据库返回结果的处理代码放在回调函数中，从而提高了程序的执行效率。
- 事件驱动：

![image](https://user-images.githubusercontent.com/70066311/166232968-b5f10e7d-93c0-4595-ad8a-cee0041e7b1e.png)


# 前端性能优化
### **为什么会有白屏**
1. 等待HTML文件返回
2. 浏览器兼容问题
3. js未完成加载

### **如何减少首屏和白屏加载时间**
1. 加速或减少HTTP请求损耗：使用CDN加载公用库，使用强换存与协商缓存，小图片使用base64代替，使用get请求代替post请求。
2. 延迟加载：非首屏资源延迟加载，使用懒加载，webpack按需加载等。
3. 减少请求内容的体积：通过JS、CSS文件压缩，减少cookie大小。
4. 优化用户等待体验：白屏使用进度条、loading图等。
5. 使用HTTP2。
6. 使用Defer加载JS。尽量把css文件放在头部，js文件放在底部，避免堵塞渲染。

### **计算首屏时间**
通过document.addEventListener对DOMContentLoad进行监听或者performance计算。

### **如何优化首屏加载**
1. webpack代码分割，将公共代码抽取，避免重复
2. 按需加载第三方依赖
3. 路由懒加载、图片懒加载、组件动态加载
4. 避免使用相似的依赖包，例如less和scss，Element UI和antd

### **路由懒加载**
刚打开整个网页默认加载所有页面，路由懒加载就是只加载你当前点击的那个模块。按需加载路由对应的资源，提高首屏加载速度。

实现原理就是不直接import对应的路由，而是写成异步的形式，只有当函数被调用的，才去导入对应的路由


## CDN
### **什么是CDN**
<font color="	#FF6347">CDN是一种通过互联网相连接的电脑网络系统，利用最靠近每位用户的服务器，更快、更可靠的将音乐、图片、视频、应用程序等其它静态资源发送给用户，来提高性能，可扩展性及低成本的网络内容传递给用户</font>。

CDN分为以下三部分：
-  分发服务系统：最基本的工作单元就是cache设备。<font color="	#FF6347">cache负责直接响应最终用户的访问请求，把缓存在本地的内容快速地提供给用户。同时cache还负责与原站点进行内容同步，从源站点获取本地还未更新的数据并保存在本地</font>。
- 负载均衡系统：主要负责<font color="	#FF6347">对所有发起服务器请求的用户进行访问调度，确定提供给用户的实际访问地址</font>。调度体系又分为<font color="	#FF6347">全局负载均衡</font>和<font color="	#FF6347">本地负载均衡</font>。<font color="	#FF6347">**全局负载均衡**主要根据用户就近性原则，通过对每个服务器节点进行最优判断，确定向用户提供服务的cache物理地址</font>。<font color="	#FF6347">本地负载均衡</font>主要负责节点内部的设备负载均衡。
- 运营管理系统：运营管理系统分为运营管理和网络管理子系统，负责处理业务层面与外界系统交互所必须的收集、整理、交付工作，包含客户管理、产品管理、计费管理、统计分析等功能。

### **CDN的作用**
CDN一般会用来托管静态资源（包括文本、图片、视频、音频、脚本）、可供下载的资源、应用程序。使用CDN来加速这些资源的访问。

1. 在性能方面，引入CDN的作用是：
    - 用户收到的内容来自最近的数据中心，延迟更低，内容加载更快
    - 部分资源请求分配给了CDN，减少了服务器的负载
2. 在安全方面，CDN有助于防御DDoS、MITM等网络攻击：
    - 针对DDoS：通过监控异常流量，限制其请求频率
    - 针对MITM，从源服务器到CDN节点再到ISP（网络业务提供商），全链路使用HTTPS通信

### **CDN的原理**
<font color="	#FF6347">CDN与DNS有着密不可分的联系，因为要确定与用户较近的CDN服务器，需要知道CDN服务器的ip地址，这时就需要使用DNS服务器来查询ip地址。

为了访问CDN中的静态资源，通过URL来进行访问，URL就是常见的描述的网络资源位置的方式。有了URL之后，通过DNS服务器去查询URL对应的ip地址，然后http才能与该ip地址建立连接（因为TCP连接需要知道源IP、源端口、目的URL、目的IP）</font>。

![image](https://user-images.githubusercontent.com/70066311/167798841-29dd8a30-8883-43ea-bfe5-645f63780485.png)

- 用户未使用CDN缓存资源的过程：
    1. 浏览器通过DNS对域名进行解析，得到域名对应的ip地址
    2. 浏览器根据得到的ip地址，像域名的服务主机发送数据请求
    3. 服务器向浏览器返回响应的数据
- 用户使用CDN缓存资源的过程：
    1. 对于点击的数据的URL，经过本地的DNS系统的解析，发现该URL对应的是一个CDN专用的DNS服务器，DNS服务器就会将域名解析权交给CNAME指定的CND专用的DNS服务器
    2. CDN专用DNS服务器将CDN的全局负载设备IP地址返回给用户
    3. 用户向CDN的全局负载均衡设备发起数据请求
    4. CDN全局负载均衡设备根据用户的IP地址，以及用户请求内容的URL，选择一台用户所属区域的区域负载均衡设备
    5. 区域负载均衡设备选择一台合适的缓存服务器来提供服务，将该缓存服务器的IP地址返回给全局负载均衡设备
    6. 全局负载均衡设备把服务器的IP地址返回给用户
    7. 用户向该缓存服务器发起请求，缓存服务器响应用户的请求，将用户所需内容发送至用户终端
    8. 如果缓存服务器没有用户想要的内容，那么缓存服务器就会向它的上一级缓存服务器请求内容，以此类推，直到获取到需要的资源。如果最后还是没有，就会进行回源，到自己的服务器中获取资源，然后把它们缓存到CDN服务器上。

![image](https://user-images.githubusercontent.com/70066311/167806433-483f0661-230f-46cb-8ac5-c8518f13566b.png)

![image](https://user-images.githubusercontent.com/70066311/171633331-2894fbc6-ce23-4866-9e6d-a1daad89aad5.png)

### 页面请求获取的html里面却是旧版本号的script链接
<font color="	#FF6347">因为后端采用的是集群服务，采用滚动部署，也就是说部署时节点服务是一批一批来更新的，直到集群中所有实例都更新成新版本，而不是一次性全部更新</font>。因此在部署期间新服务和旧服务会同时存在，如果在这个期间访问页面，页面接口可能会命中旧服务，也可能会命中新服务。当命中旧服务时，请求得到的`html`中的`script`是旧版本号；当部署完成时，集群中所有的实例都更新成新版本，页面请求命中新服务，请求得到的html里面script链接打上的是新版本号。

解决方案：<font color="	#FF6347">待项目部署完后刷新页面即可</font>。

### script链接是新版本号但拉取到的却是旧脚本代码
正常来说，部署项目后，浏览器根据新版本号去请求CDN上的静态脚本文件，如果CDN缓存中没有对应新版本号对应的脚本文件，则会向后端服务拉取新脚本，然后CDN再做一次缓存，后面的脚本请求直接由CDN返回。

但是，<font color="	#FF6347">如果部署还未完成浏览器就去访问了，此时这个阶段新服务和旧服务是同时存在的，当新版本号对应的脚本在CDN上找不到时，就会去服务请求，恰恰请求命中的是旧服务（服务响应跟版本号无关），旧服务返回旧的脚本，然后CDN缓存新版号对应的旧脚本，这样后续每次请求拉取到的都是CDN上缓存的就脚本，因此就出现了上述问题。</font>针对这个问题可以使用CDN刷新和预热来解决。

![image](https://user-images.githubusercontent.com/70066311/171643155-d102ed7e-7190-487d-ba47-c526145c9a0b.png)

### CDN刷新和预热
CDN提供资源的刷新的预热功能。<font color="	#FF6347">通过刷新功能，可以强制CDN节点`回源`并获取最新文件；通过预热，可以在业务高峰期预热热门资源，提高资源的访问效率。</font>

- 缓存刷新：提交缓存刷新请求后，CDN节点的缓存内容将会被强制过期。当用户向CDN节点请求资源时，CDN会直接向回源地址请求对应的资源返回给用户，并进行缓存。
- 缓存预热：提交缓存预热请求后，源站会主动将对应的资源缓存到CDN节点，当用户首次请求时，就能直接从CDN节点缓存中获取到最新的资源，无需在回源站请求。

## 懒加载
### *基本概念
在长网页中，若每次都将所有图片都加载出来，而用户每次只能看到部分图片，这样浪费了性能，如果使用图片的懒加载就可以解决以上问题。使用懒加载使得可视化界面之外的图片不会被加载，只显示当前区域的图片，这样使得<font color="	#FF6347">网页加载速度更快，减少了服务器的负载</font>。

### *懒加载的特点
1. 减少无用资源的加载
2. 提升用户体验：当页面图片较多时，用户可能会等待很长时间，这就影响了用户体检
3. 防止加载过多的图片资源影响其它文件资源的加载

### *懒加载实现原理
懒加载的实现原理是：<font color="	#FF6347">将图片的src属性赋为空值，将图片路径存储到data-src属性中，当滚动到需要图片加载时，再将data-src属性的值赋给src，以此来实现图片的延迟加载</font>。
1. window.innerHeight是浏览器可视区的高度
2. document.body.scrollTop || document.documentElement.scrollTop是浏览器滚动过的距离
3. imgs.offsetTop是元素（图片）顶部距离文档顶部的高度（包括以滚动的区域）。
4. <font color="	#FF6347">图片加载的条件</font>：img.offsetTop < document.body.scrollTop || document.documentElement.scrollTop + window.innerHeight

![image](https://user-images.githubusercontent.com/70066311/159425662-7559348b-a69a-446b-8ff2-84ccecdc01fa.png)

### *原生js实现懒加载
```html
<div>
  <img src="loading.gif" data-src="../img/list-item.png">
  <img src="loading.gif" data-src="../img/list-item.png">
  <img src="loading.gif" data-src="../img/list-item.png">
  <img src="loading.gif" data-src="../img/list-item.png">
  <img src="loading.gif" data-src="../img/list-item.png">
  <img src="loading.gif" data-src="../img/list-item.png">
</div>

<script>
  // 获取到全部的img元素
  const imgs = document.querySelectorAll('img')
  function lazyLoad(){
    let scrollTop = document.body.scrollTop || document.documentElement.scrollTop
    let winHeight = window.innerHeight
    for(let i = 0;i < imgs.length;i++){
      if(imgs[i].offsetTop < scrollTop + winHeight){
        imgs[i].src = imgs[i].getAttribute('data-src')
      }
    }
  }

  window.onscroll = lazyLoad()

</script>
```

### 懒加载与预加载
懒加载是指<font color="	#FF6347">延迟加载，当图片进入到页面的可视区域内在加载，起到延迟加载，缓解服务器压力的作用</font>。而预加载会增加服务器压力，他会<font color="	#FF6347">提前将资源加载并保存到本地，需要用到资源时直接从本地读取，这样可以减少用户等待时间，提升用户体验，但会给服务器增加压力</font>。

## 回流（重排）和重绘
### **回流**
当部分或全部元素的尺寸、属性或结构发生变化时，浏览器会重新渲染部分或全部文档的过程称为回流。

### **会导致回流的操作**
- 页面首次渲染
- 浏览器的窗口大小发生变化
- 元素的内容发生变化
- 元素的大小或位置发生变化
- 元素的字体发生变化
- 添加或删除可见的DOM元素
- 激活CSS伪类
- 查询某些属性或者调用某些方法

在触发回流时，会导致DOM元素重新排列，有两种情况：
1. 全局范围：从根节点开始，对整个渲染树进行重新布局
2. 局部范围：对渲染树的某部分进行重新布局

### **重绘**
当页面中某些元素的样式发生变化，但不会影响其在文档流中的位置时，浏览器就会对这些元素进行重绘。

### **会导致重绘的操作**
- color、background-color、 background-image
- outline-color、outline-width、outline-decoration
- border-radius、visibility、box-shadow

<font color="	#FF6347">当触发回流时，一定会触发重绘；但触发了重绘，不一定会重排</font>。

### **如何避免重排和重绘**
1. 避免频繁操作DOM。在操作DOM时，尽量在底层的DOM节点进行操作
2. 不要使用table布局，因为一个小改动都可能会引起table进行重新布局
3. 不要频繁操作元素样式
4. 避免频繁操作DOM
5. 使用absolute和fixed，使元素脱离文档流，这样他们的变化会不会影响其他元素
6. 可以使用display: none，操作结束后再把它显示出来，因为在display: none的元素上进行操作不会引起重绘和重排
7. 将DOM的多个读操作或写操作放在一起，而不是多个读写操作穿插着写。这得益于浏览器的渲染队列机制

**渲染队列**：浏览器会将多次的重排、重绘操作放入一个渲染队列中，等队列到一定长度后，会对队列进行批处理，这样就会让多次重排和重绘变为一次重排和重绘。

### *如何优化动画
可以把动画的position设置为absolute或fixed，使动画脱离文档流，这样动画元素的回流就不会影响页面了。

### *DocumentFragment
DocumentFragment是一个文档片段，是一个没有父对象的最小文档对象。DocumentFragment不是真实DOM树的一部分，所以它的变化不会重新渲染DOM树。当我们把DocumentFragment插入到DOM树中时，插入的不是DocumentFragment本身，而是DocumentFragment所有的子孙节点，且不会触发页面的重绘，这样做就可以大大增加页面的性能。


## 防抖和节流
### **防抖**
防抖是指<font color="	#FF6347">事件被触发n秒后再执行回调，如果在这n秒内事件又被触发，则重新计时</font>。这可以使用在一些点击请求上，避免因为用户的多次点击向后端发送多次请求。

### **防抖的场景应用**
- 防止多次按钮提交，只执行最后一次的提交
- 只执行输入框连续输入事件的最后一次

### **节流**
节流是指<font color="	#FF6347">在规定的一个时间单位内，只能触发一次该事件的回调函数，如果在同一个单位时间内某事件被触发多次，只能有一次生效</font>。节流可以使用在scroll函数的事件监听上。通过事件节流来降低事件调用的频率。

### **节流的场景应用**
- 拖拽场景：固定时间只执行一次，防止超高频次出发位置变动
- 缩放场景：浏览器resize
- 动画场景：避免短时间内多次出发动画引起性能问题

### **手写防抖与节流**
```js
// 防抖
function debounce(fn, delay){
  let timer = null
  return function(){
    if(timer){
      clearTimeout(timer)
    }
    timer = setTimeout(()=>{
      fn()
    }, delay)
  }
}
```

```js
// 节流，时间戳版
function throttleTimeStamp(fn, delay){
  let preTimer = Date.now()
  return function(){
    let nowTimer = Date.now()
    if(nowTimer - preTimer >= delay){
      preTimer = Date.now()
      return fn()
    }
  }
}

// 节流，定时器版
function throttleTime(fn, delay){
  let timer = null
  return function(){
    if(!timer){
      timer = setTimeout(()=>{
        fn()
        timer = null
      }, delay)      
    }
  }
}
```

# ES6
## 箭头函数
### **箭头函数和普通函数的区别**
1. 外形不同
箭头函数使用 <font color="	#FF6347">=></font> 定义。
```js
// 普通函数
function demo(){
  ...
}

// 箭头函数
let demo = () => {
  ...
}
```
2. 箭头函数都是匿名函数
普通函数可以有匿名函数，也可以有具名函数；箭头函数只有匿名函数。
```js
// 具名函数
function demo(){
  ...
}

// 匿名函数
let func = function(){
  ...
}

// 箭头函数
let demo = () => {
  ...
}
```
3. 箭头函数不可以用于构造函数，不能使用new
4. 箭头函数中的this指向不同  
①. 箭头函数本身不创建this
在普通函数中，this总是指向调用它的对象，如果用作构造函数，this指向创建的对象实例。  
而<font color="	#FF6347">箭头函数本身没有this，但它在声明时可以捕获其所在上下文的this供自己使用</font>。
```js
let success = "捕获成功"
let func = () => {
  console.log(this.success)
}

func()
// 打印：捕获成功
```
箭头函数在全局作用域声明，所以它捕获全局作用域中的this，this指向window对象

```js
var name = "message1";
function wrap(){
  this.name="message2";
  let func=() => {
    console.log(this.name);
  }
  func();
}
let en=new wrap();
// 打印：message2
```
②. 结合call()、apply()方法使用
箭头函数结合call()、apply()方法调用一个函数时，只传入一个参数对this没有影响。
```js
let obj2 = {
    a: 10,
    b: function(n) {
        let f = (n) => n + this.a;
        return f(n);
    },
    c: function(n) {
        let f = (n) => n + this.a;
        let m = {
            a: 20
        };
        return f.call(m,n);
    }
    
};
console.log(obj2.b(1));    // 11
console.log(obj2.c(1));    // 11
```

<font color="	#FF6347">5. 箭头函数的 this 永远指向其上下文的 this ，任何方法都改变不了其指向，如 call() , bind() , apply()</font>。

### 为什么箭头函数不能作为构造函数
<font color="#FF6347">构造函数需要this这个对象，用于接收参来的参数，以及在构造函数的最后将这个this返回</font>。而箭头函数没有this，所以不能作为构造函数。

### 如果new一个箭头函数会怎么样
因为箭头函数相对于普通函数并没有自己的this指向，而构造函数需要由this，所以箭头函数不能new。
<font color="#FF6347">new操作符实现的步骤如下</font>：

1. 创建一个对象
2. 将构造函数的作用域赋值给新对象（也就是将新对象的__proto__属性指向构造函数的prototype属性）
3. 构造函数中的this指向新对象（也就是为这个新对象添加属性和方法）
4. 返回新的对象 

## let、const、var的区别
1. 块级作用域：块级作用域用{}包括，let和const具有块级作用域，var不具有。块级作用域解决了ES5的存在的两个问题：
    - 内层变量可能会覆盖外层变量
    - 用来计数的循环变量泄露为全局变量
2. 变量提升：变量提升就是把变量的声明提升到作用域的最上面去，而不会把赋值也提升上来。
3. var声明的变量为全局变量，并会将该变量添加为全局对象的属性。let和const不会
4. 初始值设置：var和let可以不设置初始值，const必须设置初始值
5. let创建的变量可以修改指针指向（可重新赋值）

### var、let、const分别在什么时候使用？
- let限制了变量的作用域，保证不去污染全局变量，一般用于基本数据类型
- const一般在定义一些全局的常量或使用`require`来导入模块时使用，一般用于引用数据类型。
- 因为使用var可能会造成变量提升，全局变量污染等问题，应该尽可能少的使用var

使用优先级：<font color="	#FF6347">const > let > var</font>

### const对象可以修改吗？
const保证的并不是值不变，而是const变量指向的内存地址不变，<font color="	#FF6347">对于基本数据类型</font>，其值就永远保存在变量指向的那个内存地址，因此等同于常量。但<font color="#FF6347">对于引用类型的数据（对象和数组）</font>，变量指向数据的内存地址，const只能保证这个指针是固定不变的，至于它指向的数据结构是不是可变的，就完全不能控制了。

### 变量提升和函数提升
#### 变量提升
ES6之前，函数没有块级作用域，只有`全局作用域`和`函数作用域`，变量提升就是<font color="#FF6347">将变量申明提升到他所在的作用域的最开始的部分</font>。

```js
console.log(foo); // undefined
var foo = '小花猫';
console.log(foo)  // 小花猫
```

相当于：

```js
var foo;
console.log(foo);
foo = '小花猫';
console.log(foo);
```

#### 函数提升
函数的创建方式有两种，<font color="#FF6347">一种是函数声明形式，一种字面量形式（函数表达式）</font>，只有`函数声明形式`才有函数提升。例如：

```js
// 声明式
function foo () {
    // to do...
}
```

相当于：

```js
// 函数字面量
var foo = function () {
    // to do...
}
```

<font color="#FF6347">函数提升的优先级高于变量提升，且不会被同名变量声明时覆盖，但是会被变量赋值后覆盖</font>。

例如：

```js
console.log(bar);  // f bar() { console.log(123) }
console.log(bar()); // undefined
var bar = 456;
function bar() {
    console.log(123); // 123
}
console.log(bar); // 456
bar = 789;
console.log(bar); // 789
console.log(bar()) // bar is not a function
```

相当于：

```js
// js执行步骤
 
// 函数提升，函数提升优先级高于变量提升
var bar = function() {
    console.log(123)
};
// 变量提升，变量提升不会覆盖（同名）函数提升，只有变量再次赋值时，才会被覆盖
var bar;
console.log(bar);
console.log(bar());
// 变量赋值，覆盖同名函数字面量
bar = 456;
console.log(bar);
// 再次赋值
bar = 789
console.log(bar);
console.log(bar());
```

结果： 

```js
// js执行结果
 
f bar() { console.log(123) }
123  // 执行bar()里的console.log
undefined // bar()的返回值，如果函数没有返回值，默认为：undefined
456
789
[typeError]：bar is not a function
```

## 扩展运算符（...）
<font color="	#FF6347">扩展运算符对对象实例的拷贝属于浅拷贝</font>

## 数组运算符可以将数组用逗号分割为一个参数序列，且每次只能打开一层数组。
```js
console.log(...[1, 2, 3]);  // 1 2 3
console.log(...[1, [2, 3, 4], 5]);   // 1 [ 2, 3, 4 ] 5
console.log(...[1, ...[2, 3, 4], 5]);   // 1 2 3 4 5

function add(x, y) {
  return x + y;
}
const numbers = [1, 2];
add(...numbers) // 3

// 复制数组
const arr1 = [1, 2, 3];
const arr2 = [...arr1];
```

## 对对象与数组的结构的理解
### **数组的结构**
在解构数组时，以元素的位置为匹配条件来提取想要的数据：
```js
const [a, b, c] = [1, 2, 3]
```

还可以使用空占位的方式，实现对数组中某几个元素的精准提取：
```js
const [a, , c] = [1, 2, 3]
// a: 1, c: 3
```

### **对象的解构**
```js
const stu = {
  name: 'Bob',
  age: 24
}

const { name, age } = stu
```

### **提取高度嵌套的对象里的指定属性**
```js
const school = {
   classes: {
      stu: {
         name: 'Bob',
         age: 24,
      }
   }
}
```
<font color="	#FF6347">可以在解构出来的变量名右侧，通过冒号+{目标属性名}这种形式，进一步解构它，一直解构到拿到目标数据为止</font>。
```js
const { classes: { stu: { name } } } = school
console.log(name);   // Bob
```

# TypeScript
### **什么是TypeScript**
TypeScript是JavaScript的超集，扩展了JS的语法。为了保证兼容性，TS在编译阶段会转换为JS来运行。

### **TS的特性**
- 跨平台：可以安装在windows、mac、Linux等操作系统上
- ES6特性：TS可以使用ES6的特性，比如箭头函数，let，const等
- 面向对象的语言：TS提供了所有标准的面向对象功能，比如类、接口、模块等
- 静态类型检查：TS可以让开发者在编写代码时发现编译类型错误，无需运行脚本
- DOM操作：TS可以操作DOM来删除修改网页元素

### **TS的数据类型**
- boolean
- number
- null
- undefined
- string
- array
- object
- void
- tuple
- enum
- any

**tuple（元组）**      
元组类型，允许表示一个已知元素数量和类型的数组，各元素的类型不必相同，赋值的类型、位置、个数需要和定义的类型、位置、个数一致。

```ts
let tupleArr:[number, string, boolean];
tupleArr = [12, '34', true]; //ok
typleArr = [12, '34'] // no ok
```

**enum（枚举）**     
enum可以为一组数值赋予友好的名字。当一个变量可能有几种取值时，就可以将它定义为枚举类型。

```ts
enum Color {Red, Green, Blue}
let c: Color = Color.Green;
```

### **如何在React中应用TS**
在我做项目时，首先会在组件的最上方定义一个接口，表明要接受的props的类型，对props的类型进行限定，作用相当于PropsTypes。

# React
## 什么是React
<font color="	#FF6347">React是一个用于构建用户界面的JS库，主要用于构建UI。

- React具有较高的性能，采用虚拟DOM、diff算法、shouldComponentUpdate、useMemo()等方法来提高性能。
- React采用JSX代替JS，执行速度更快，并且是类型安全的，可以对数据类型进行检查。
- React使用组件化发开思想，提高复用性。
- React使用单向数据流，减少了重复代码。

</font>

## JSX
JSX是JS XML，用来在React中代替js。JSX的<font color="#FF6347">执行速度更快；是类型安全的，在编译过程中就能发现错误；使用JSX编写更加快速</font>。
下面就是一个简单的JSX语法：
```js
const element = <h1>Hello, world!</h1>
```

JSX其实是`React.createElement(component, props, ...children)`的语法糖，所以在组件中没有看到使用react却需要引入react就是因为使用了JSX。

<font color="#FF6347">React使用JSX后会使代码变得更简洁，结构层次更清晰</font>。但在实际运行时，会使用babel插件将JSX语法的代码转化为React.createElement的代码。


## React设计模式
### **常见的React设计模式**
1. 提供者模式    
**场景一**：在一个项目中，全局有一个状态，可以称之为 theme （主题），那么有很多 UI 功能组件需要这个主题，而且这个主题是可以切换的，就像 github 切换暗黑模式一样，那么如何优雅的实现这个功能呢？

这个场景就用到了<font color="#FF6347">提供者模式</font>。通过`context`保存全局变量的主题，然后将`theme`通过`Provider`形式传递下去，需要`theme`的时候，就使用`context`获取。这样做的好处是：<font color="#FF6347">当`theme`发生改变时，使用了`context`的组件就会重新更新，达到了切换主题的目的</font>。

2. 组合模式
组合模式适合一些容器组件场景，通过外层组件包裹内层组件，外层组件可以轻松获取内层组件的`props`（<font color="#FF6347">通过`props.children`获得子组件，通过`props.children.props`获得子组件的`props`</font>），还可以控制内层组件的渲染，组合模式可以直观地反映出`父子`组件的包含关系。

**场景二**：如下的Tabs和TabItem组合，构成切换tab功能，那么Tabs和TabItem的分工如下：
- Tabs负责展示和控制对应的`TabItem`，绑定切换`tab`回调方法`onChange`。当`tab`切换的时候，执行回调。
- TabItem负责展示对应的`tab`项，向Tabs传递props相关信息。

```js
<Tabs onChange={ (type)=> console.log(type)  } >
    <TabItem name="react"  label="react" >React</TabItem>
    <TabItem name="vue" label="vue" >Vue</TabItem>
    <TabItem name="angular" label="angular"  >Angular</TabItem>
</Tabs>
```

#### 组合模式原理
首先我们看一个简单的组合结构：
```js
<Groups>
    <Item  name="《React进阶实践指南》" />
</Groups>
```

**item在Groups中的形态**      
首先如果如上组合模式的写法，会被 jsx 编译成 React element 形态，Item 可以通过 Groups 的  props.children 访问到。
```js
function Groups (props){
    console.log( props.children  ) // Groups element
    console.log( props.children.props ) // { name : 'React进阶实践指南》' }
    return  props.children
}
```

但是这是针对单一节点的情况，事实情况下，外层容器可能有多个子组件的情况。

```js
<Groups>
    <Item  name="《React进阶实践指南》" />
    <Item name="《Nodejs深度学习手册》" />
</Groups>
```

这种情况下，props.children 就是一个数组结构，如果想要访问每一个的 props ，那么需要通过 React.Children.forEach 遍历 props.children。

```js
function Groups (props){
    console.log( props.children  ) // Groups element
    React.Children.forEach(props.children,item=>{
        console.log( item.props )  //依次打印 props
    })
    return  props.children
}
```

**隐式混入props**     
这个是组合模式的精髓所在，就是可以通过 React.cloneElement 向 children 中混入其他的 props，那么子组件就可以使用容器父组件提供的特有的 props 。我们来看一下具体实现：
```js
function Item (props){
    console.log(props) // {name: "《React进阶实践指南》", author: "alien"}
    return <div> 名称： {props.name} </div>
}
 
function Groups (props){
    const newChilren = React.cloneElement(props.children,{ author:'alien' })
    return  newChilren
}
```

- 用 React.cloneElement 创建一个新的 element，然后混入其他的 props -> author 属性，React.cloneElement 的第二个参数，会和之前的 props 进行合并 （ merge ）。

**控制渲染**    
组合模式可以通过 children 方式获取内层组件，也可以根据内层组件的状态来控制其渲染。比如如下的情况：
```js
export default ()=>{
    return <Groups>
    <Item  isShow name="《React进阶实践指南》" />
    <Item  isShow={false} name="《Nodejs深度学习手册》" />
    <div>hello,world</div>
    { null }
</Groups>
}
```

- 如上这种情况组合模式，只渲染 isShow = true 的 Item 组件。那么外层组件是如何处理的呢？

实际处理这个很简单，也是通过遍历 children ，然后通过对比 props ，选择需要渲染的 children 。接下来一起看一下如何控制：

```js
function Item (props){
    return <div> 名称： {props.name} </div>
}
/* Groups 组件 */
function Groups (props){
    const newChildren = []
    React.Children.forEach(props.children,(item)=>{
        const { type ,props } = item || {}
        if(isValidElement(item) && type === Item && props.isShow  ){
            newChildren.push(item)
        }
    })
    return  newChildren
}
```

- 通过 newChildren 存放满足要求的 React Element ，通过 Children.forEach 遍历 children 。
- 通过 isValidElement 排除非 element 节点；type指向 Item函数内存，排除非 Item 元素；获取 isShow 属性，只展示 isShow = true 的 Item，最终效果满足要求。

**内外层通信**    

![image](https://user-images.githubusercontent.com/70066311/168095865-3c59dee8-96aa-46bb-b5e9-92ac2b936413.png)


3. HOC设计模式
高阶组件时React中用于复用组件逻辑的一种方式。是一种基于React的组合特性而形成的设计模式。

<font color="#FF6347">HOC使用函数包裹组件</font>

```js
// 假设 checkUserAccess 已经在 utils 文件中被封装为了一段独立的逻辑
import checkUserAccess from './utils'
// 用高阶组件包裹目标组件
const withCheckAccess = (WrappedComponent) => {
    // 这部分是通用的逻辑：判断用户身份是否合法
    const isAccessible = checkUserAccess()  
    // 将 isAccessible（是否合法） 这个信息传递给目标组件
    const targetComponent = (props) => (
        <div className="wrapper-container">
            <WrappedComponent {...props} isAccessible={isAccessible} />
        </div>
    );
    return targetComponent;
};

/* 使用 */
const EnhancedAComponent = withCheckAccess(Acomponent);

```

4. props

## 类组件与函数式组件
- 类组件
类组件就是通过类的方式编写的组件，类组件有如下特点：
- <font color="#FF6347">必须继承`React.Component`</font>
- <font color="#FF6347">`render`被放在了组件的原型对象上，供实例使用</font>
- <font color="#FF6347">`render`中的`this`就是组件的实例对象</font>

**执行了ReactDOM.render(<MyComponent/>.......之后，发生了什么？**
1. `React`解析组件标签，找到`MyComponent`组件
2. 发现组件是使用类定义的，随后new出来该类的实例，并通过该实例调用原型上的`render`方法
3. 将`render`返回的`虚拟DOM`转为`真实DOM`，呈现在页面中

- 函数式组件
通过函数的方式编写的组件，函数式组件更符合React组件化发开的思想，保证了同样的输入会返回同样的输出。

**执行了ReactDOM.render(<MyComponent/>.......之后，发生了什么？**
1. `React`解析组件标签，找到`MyComponent`组件
2. 发现组件是使用函数定义的，随后调用该函数，将`render`返回的`虚拟DOM`转为`真实DOM`，呈现在页面中

**区别**
1. 生命周期方面，类组件有`生命周期函数`；函数组件可以使用`useEffect()`代替生命周期函数
2. state方面：类组件通过`setState()`进行状态管理；函数组件通过`useState()`进行状态管理
3. 在性能优化方面，类组件通过`shouldComponentUpdate()`方法进行性能优化；函数式组件通过`useMemo()`方法进行性能优化

### **state和props的区别**
state和props都是用来给组件提供数据参数的，state由组件内部自己定义，props由外部传入。

在函数式组件中，state通过useState钩子函数创建并通过setXxx()方法修改state的值；在类组件中，state可以在构造函数内部定义，也可以在构造函数外部定义，通过setState()方法修改state的值。在调用setState()方法修改state后react会调用render函数重新渲染页面，更新页面中的数据。

props是由外部组件传入的数据，react具有单向数据流的特性，所以他的主要作用是从父组件向子组件传递数据，props除了可以传一般数据类型，还可以传入对象、数组等引用数据类型，甚至还可以将回调函数传给子组件，子组件可以通过调用回调函数来实现向父组件通信。在子组件中，props是不可变的，如果想改变props，只能通过外部组件的传入进行更改。

**区别：**
相同点：
- 两者都是js对象
- 两者都用于保存数据
- props和state都可以出发重新渲染

不同点：
- props是外部传递给组件的，而state在组件内被组件自己管理的
- props在组件内部是不可修改的，但state在组件内部可以进行修改

## 虚拟DOM
### **什么是DOM**
DOM是使用一颗逻辑树来表示一个文档，树的每个分支的终点都是一个节点，可以用特定的方式（编写JS、CSS、HTML）来改变这个树的结构，从而改变文档结构、样式或内容。

### **什么是虚拟DOM**
虚拟DOM就是一个JS对象，通过对象的方式来表示DOM结构，通过事务处理机制，将多次DOM修改的结果一次性更新到页面上，<font color="#FF6347">从而有效的减少页面渲染次数，减少修改DOM重绘重排的时间，提高渲染性能</font>。

<font color="#FF6347">React在内存中维护一个跟真实DOM一样的虚拟DOM树，在改动完组件后，会再生成一个新的虚拟DOM，React会将新的虚拟DOM和原来的虚拟DOM进行对比，找出两个DOM树的不同的地方（diff），然后在真实DOM上更新diff，提高渲染速度</font>。

### **为什么要使用虚拟DOM**
1. 提供更好的性能
对比一下修改DOM时真实DOM操作和虚拟DOM的操作：
- 对于真实DOM：生成HTML字符串，重建`所有`DOM元素
- 对于虚拟DOM：生成虚拟DOM节点，采用diff算法，更新出现变化的真实DOM节点

可以看出，虚拟DOM虽然要进行更多的步骤，但它的性能消耗是极低的。

2. 跨平台
使用虚拟DOM可以很方便的进行跨平台操作。

### **diff算法的原理**
diff算法探讨的就是<font color="#FF6347">虚拟DOM树发生变化后，生成DOM树更新补丁的方式、它通过对比新旧两颗虚拟DOM树的变更差异，将更新补丁作用于真实DOM，以最小的成本完成视图更新</font>。

![image](https://user-images.githubusercontent.com/70066311/163707594-1c5dc046-dfd3-4645-ae48-e1884123074a.png)

具体流程如下：
1. 真实DOM首先映射为虚拟DOM
2. 当虚拟DOM发生变化时，根据变化计算生成`patch`，这个`patch`就是一个结构化的数据，包含了增加、更新、删除等操作。
3. 根据patch去更新真实DOM，反馈到用户页面上。

<font color="#FF6347">这样一个生成补丁，更新差异的过程称为diff算法</font>。

![image](https://user-images.githubusercontent.com/70066311/163707651-03869a59-baff-417f-8225-3c773301ecef.png)

diff算法可以总结为三个策略，分别从树、组件以及元素三个层面进行复杂度优化：

策略一：**忽略节点跨层级操作场景，提升对比效率（基于树进行对比）**
这一策略需要进行树比对，即对树进行分层比较。树比对的处理手法是非常“暴力”的，即<font color="#FF6347">两棵树只对同一层次的节点进行比较</font>，如果发现节点已经不存在了，则该节点及其子节点会被完全删除掉，不会用于进一步的比较，这就提升了比对效率。

策略二：**如果组件的class一致，则默认为相似的树结构，否则默认为不同的树结构（基于组件进行对比）**
在组件对比中：
- 如果组件是同一类型，则进行树对比
- 如果不是则直接放入补丁中
- 只要父组件类型不同，就会被重新渲染

策略三：**同一层级的子节点，可以通过标记 key 的方式进行列表对比。（基于节点进行对比）**
元素比对主要发生在同层级中，通过标记节点操作生成补丁。节点操作包含了插入、移动、删除等。其中节点重新排序同时涉及插入、移动、删除三个操作，所以效率消耗最大，此时策略三起到了至关重要的作用。通过标记 key 的方式，React 可以直接移动 DOM 节点，降低内耗。

### **React中的key是什么**
key是React用于追踪哪些列表中元素被修改、被添加、被移除的辅助标识。在开发中，我们要保证每个元素的key在其同级的元素具有唯一性。

<font color="#FF6347">diff算法中会借助key来判断该元素是新创建的还是被移动而来的元素，从而减少不必要的渲染</font>。

- key具有唯一性
- <font color="#FF6347">尽量不要用数组中的index作为key</font>。因为在进行删除操作时会发生误删的现象。
- <font color="#FF6347">不要再render的时候使用随机数或其它操作给元素加上不稳定的key，因为这样造成的性能开销比不加key更多</font>

### Vue的diff和react的diff的区别
相同点：
- 都不进行跨层级比较，只做同级比较
- 对数组或对象中深层次的变化无法检测
- 时间复杂度都为O(n)

不同点：
- Vue进行diff时，调用patch打补丁函数，一边比较一边给真实的DOM打补丁；而React是比较完后一次性更新DOM
- Vue进行对比节点时，当节点元素类型相同，但是className不同时，则认为是不同类型的元素，删除重新创建；React则认为是同类型节点，只会进行修改
- Vue的列表对比，采用在两端设置双指针；而React采用从左到右依次对比
- 当一个集合把最后一个节点移动到最前面时，React将前面的节点依次向后移动；而Vue会将最后一个插入到最前面。

### 传统的diff算法为什么是O(n^3)
首先需要进行两棵树的节点比较：树1上的节点1要遍历树2上的所有的节点，树1上的节点2也要遍历树2的所有节点，所以时间复杂度为O(n^2)。在对比过程中发现旧节点在新的树中未找到，那么就需要把旧节点删除，删除一棵树的一个节点(找到一个合适的节点放到被删除的位置)的时间复杂度为O(n)，同理添加新节点的复杂度也是O(n)，合起来diff两个树的复杂度就是O(n^3)

### Vue如何优化到了O(n)
Vue中的diff整体策略是：深度优化，同层比较。进行时间复杂度O(n)的while循环，循环条件为遍历旧节点数组&&遍历新节点数组，谁先遍历完循环就结束。

1. 比较只在同层级中进行，不会跨层级比较。
![image](https://user-images.githubusercontent.com/70066311/175453488-64c004b9-5eee-423e-859a-2e8ed59488d8.png)

2. 在比较过程中，循环从两边向中间收拢
![image](https://user-images.githubusercontent.com/70066311/175453629-0e7772f4-7e41-46ad-a438-d63e685f00d6.png)

下面举个`vue`通过`diff`算法更新的例子：

新旧`VNode`节点如下图所示：
![image](https://user-images.githubusercontent.com/70066311/175453810-7db86d0f-813c-409c-be5d-4eaffd25d43b.png)

第一次循环后，发现旧节点D与新节点D相同，直接复用旧节点D作为diff后的第一个真实节点，同时旧节点endIndex移动到C，新节点的 startIndex 移动到了 C。
![image](https://user-images.githubusercontent.com/70066311/175453877-e57e65f9-4c80-4afd-8ee2-b4f62401bcea.png)

第二次循环后，同样是旧节点的末尾和新节点的开头(都是 C)相同，同理，diff 后创建了 C 的真实节点插入到第一次创建的 B 节点后面。同时旧节点的 endIndex 移动到了 B，新节点的 startIndex 移动到了 E。
![image](https://user-images.githubusercontent.com/70066311/175453997-504bf78e-fd8e-4039-ae0d-63f935a19fdf.png)

第三次循环中，发现E没有找到，这时候只能直接创建新的真实节点 E，插入到第二次创建的 C 节点之后。同时新节点的 startIndex 移动到了 A。旧节点的 startIndex 和 endIndex 都保持不动。
![image](https://user-images.githubusercontent.com/70066311/175454071-d1602741-c982-48f3-a8f4-c13f321ace10.png)

第四次循环中，发现了新旧节点的开头(都是 A)相同，于是 diff 后创建了 A 的真实节点，插入到前一次创建的 E 节点后面。同时旧节点的 startIndex 移动到了 B，新节点的startIndex 移动到了 B。
![image](https://user-images.githubusercontent.com/70066311/175454139-fb661b50-225f-42c8-abba-b0ce9792b8e9.png)

第五次循环中，情形同第四次循环一样，因此 diff 后创建了 B 真实节点 插入到前一次创建的 A 节点后面。同时旧节点的 startIndex移动到了 C，新节点的 startIndex 移动到了 F。
![image](https://user-images.githubusercontent.com/70066311/175454344-e077c1f5-24c9-4250-8619-c2cb80e4330d.png)

新节点的 startIndex 已经大于 endIndex 了，需要创建 newStartIdx 和 newEndIdx 之间的所有节点，也就是节点F，直接创建 F 节点对应的真实节点放到 B 节点后面
![image](https://user-images.githubusercontent.com/70066311/175454373-6d37acd6-3092-4965-be99-12a51eff111c.png)

通过查看源码，可以知道while循环中主要处理了以下五种情景：
- 当新老 `VNode` 节点的 `start` 相同时，直接 `patchVnode` ，同时新老 `VNode` 节点的开始索引都加 1
- 当新老 `VNode` 节点的 `end`相同时，同样直接 `patchVnode` ，同时新老 `VNode` 节点的结束索引都减 1
- 当老 `VNode` 节点的 `start` 和新 `VNode` 节点的 `end` 相同时，这时候在 `patchVnode` 后，还需要将当前真实 `dom` 节点移动到 `oldEndVnode` 的后面，同时老 `VNode` 节点开始索引加 1，新 `VNode` 节点的结束索引减 1l
- 当老 `VNode` 节点的 `end` 和新 `VNode` 节点的 `start` 相同时，这时候在 `patchVnode` 后，还需要将当前真实 `dom` 节点移动到 `oldStartVnode` 的前面，同时老 `VNode` 节点结束索引减 1，新 `VNode` 节点的开始索引加 1
- 如果都不满足以上四种情形，那说明没有相同的节点可以复用，则会分为以下两种情况：
    - 从旧的 `VNode` 为 `key` 值，对应 `index` 序列为 `value` 值的哈希表中找到与 `newStartVnode` 一致 `key` 的旧的 `VNode` 节点，再进行`patchVnode`，同时将这个真实 `dom`移动到 `oldStartVnode` 对应的真实 `dom` 的前面
    - 调用 `createElm` 创建一个新的 `dom` 节点放到当前 `newStartIdx` 的位置

### React如何优化到了O(n)
为了优化diff算法，react中对普通的diff算法进行优化，通过三大策略奖时间复杂度将为O(n)

**Tree diff**：tree diff是diff算法的基础策略，它的重点在于同层比较。处于对diff算法的优化，react的tree diff对DOM节点跨层级移动的操作忽略不计，只对同层级的DOM节点进行比较（即同一个父节点下所有的子节点）。对比时，一旦发现节点不存在，就直接删除掉该节点及节点之下的所有子节点，这样对DOM树进行依次遍历，完成整个树的对比。

![image](https://user-images.githubusercontent.com/70066311/175495876-bc7ef0dc-f4a4-424b-b6f4-6fb5136c1445.png)

如果出现了跨层级移动的操作，那么久忽略它，只进行节点的创建和删除操作。React建议不要进行DOM节点的跨层级操作。

**component diff**：component diff是组件间的对比，在遇到组件之间的比较时，有三种策略：
1. 对比时，遇到同一类型的组件，遵循tree diff，进行层级比较
2. 对比时，一旦遇到不同类型的组件，直接将这个组件判断为`dirty component`（脏组件），并替换该组件和之下所有子节点
3. 对比时，在同一类型的两个组件中，如果你知道这个组件的VDOM没有任何变化，就可以手动使用 shouldComponentUpdate() 来判断组件是否需要进行diff，进一步的提升了diff效率和性能

优化点：
- 避免使用结构相同但类型不同的组件，因为虽然组件的结构不需要改动，但是由于类型不同的原因，diff会直接销毁该组件并重建。
- 对于同一类型并且没有变化的组件，合理使用 shouldComponentUpdate() 进行优化

**element diff策略：**element diff是针对同一层级的element节点的，在双方同一层级的节点对比时，有三种情况：

1. 面对全新的节点时，执行**插入操作**
2. 面对多余的节点时，执行**删除操作**
3. 面对换位的节点时，执行**移动操作**

### React-Fiber
在进行虚拟DOM向真实DOM更新时，React会占据浏览器资源，导致用户触发的事件无法得到响应，给用户一种卡顿的感觉。<font color="#FF6347">React-Fiber可以暂停页面的渲染，让浏览器先执行更高级的任务，等浏览器空闲后再恢复渲染。可以提高浏览器的用户响应速度，并兼顾任务执行效率；延时对DOM的操作，避免一次性操作大量DOM节点</font>

### Fiber的双缓冲技术
双缓冲指的是<font color="#FF6347">将需要变化的部分，先在内存中计算改变，计算完成后一次性展示给用户，这样用户就不会感知到明显的计算变化</font>。双缓冲共有两颗`Fiber树`，一颗为`current树`，展示到页面上的；另一颗是`WorkInProgress树`，存在于内存中，用来计算变化，然后直接替换`current树`。

### React的渲染过程
- 对于首次渲染，`React`主要的工作就是将`React.render`接收到的`VNode`转化为`Fiber`树，并根据`Fiber`树的层级关系，构建生成出`DOM`树并渲染至屏幕中
- 对于更新渲染时，`Fiber`树已经存在于内存中了，所以`React`更关心的是计算出`Fiber`树中各个节点的差异，并更新到屏幕中

#### 两个阶段
- render阶段：利用`Fiber`双缓冲技术，在内存中构造一颗`Fiber`树，在其上进行调和计算，找到需要更新的节点并记录，这个过程会被重复中断恢复执行（时间片、主线程让给浏览器执行更高级的任务）。
- commit阶段：根据render阶段的计算结果，执行更新操作，这个过程是同步执行的。


React中有三个部分协助渲染，分别是：
- Scheduler（调度器）：排序优先级，让优先级高的任务进行reconcile(调和)
- Reconciler（调和器）：找出哪些节点发生了变化，并打标签
- Renderer（渲染器）：将Reconciler中打好标签的节点渲染到页面上

1. 首先`jsx`经过babel的ast词法解析后调用`React.createElement`，`React.createElement`执行后生成jsx对象，也就是VDOM
2. 不管是在首次渲染还是更新状态的时候，这些渲染的任务都会经过`Scheduler`的调度，`Scheduler`会根据任务的优先级来决定将哪些任务优先进入render阶段。`Scheduler`会分配一个时间片给需要渲染的任务，如果是一个非常耗时的任务，如果在一个时间片之内没有执行完成，则会从当前渲染到的`Fiber`节点暂停计算，让出执行权给浏览器，在之后浏览器空闲的时候从之前暂停的那个`Fiber`节点继续后面的计算，这个计算的过程就是计算`Fiber`的差异，并标记副作用。
3. 在render阶段：render阶段的主角是`Reconciler`，在mount阶段和update阶段，它会比较jsx和当前Fiber节点的差异（diff算法指的就是这个比较的过程），将带有副作用的Fiber节点标记出来，这些`副作用有Placement（插入）、Update（更新）、Deletetion（删除）`等，而这些带有副作用Fiber节点会加入一条`EffectList`中，在commit阶段就会遍历这条`EffectList`，处理相应的副作用，并且应用到真实节点上。而Scheduler和Reconciler都是在内存中工作的，所以他们不影响最后的呈现。
4. 在commit阶段：会遍历`EffectList`，处理相应的生命周期，将这些副作用应用到真实节点，这个过程会对应不同的渲染器

### **受控组件与非受控组件**
1. 受控组件
在使用表单来收集用户输入时，例如\<input>、\<select>、\<textarea>等元素都要绑定一个`onChange`事件，当表单状态发生变化时，就会触发`onChange`事件，更新组件的state。这种组件为<font color="#FF6347">受控组件</font>，在受控组件中，组件渲染出的状态与它的value或checked属性相对应，react通过这种方法消息组件的局部状态，使整个状态可控。

```js
class TestComponent extends React.Component {
  constructor (props) {
    super(props);
    this.state = { username: 'lindaidai' };
  }
  render () {
    return <input name="username" value={this.state.username} />
  }
}
```

当我们向这个`input`输入内容时，会发现输入的内容并无法显示出来，也就是`input`标签是一个可读的状态。这是因为`input的value`被`this.state.usename`所控制住，当用户输入新的内容时，`this.state.usename`并不会自动更新，这样的话`input`的内容也不会变了。所应该在`input`中加入`onChange`事件，输入的时候触发事件函数，在函数内部实现`state`的更新。<font color="#FF6347">受控组件一般需要我们设置初始状态和一个状态更新事件</font>。

受控组件更新state的流程：
- 可以通过初始state中设置表单的默认值
- 每当表单的值发生变化时，调用onChange事件处理器
- 事件处理器通过事件对象e拿到改变后的状态，并更新组件的state
- 一旦通过setState方法更新state，就会触发视图的重新渲染，完成表单组件的更新

**受控组件的缺陷：**
表单元素的值都是由React组件进行管理，当有多个输入框，或者多个这种组件时，如果想同时获取到全部的值就必须每个都编写事件处理函数，这会让代码看起来很臃肿，所以为了解决这种情况，出现了非受控组件。

2. 非受控组件 
如果一个表单组件没有value或checked属性时，就是非受控组件。在非受控组件中，可以<font color="#FF6347">使用一个ref来获取DOM中的表单值，而不是为每个状态更新编写一个事件处理函数</font>。

如下第一个\<input>是一个非受控组件，它通过ref获取input输入框输入的值。
```js
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    alert('A name was submitted: ' + this.input.value);
    event.preventDefault();
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" ref={(input) => this.input = input} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
```

**<font color="#FF6347">页面中所有输入类的DOM如果是现用现取得称为非受控组件，而通过setState将输入的值维护到state中，需要时再从state获取，数据就受到了state得控制，这样的就是受控组件</font>**。


## React理念
## refs
refs：提供了一种方式，是我们可以访问DOM节点或在render方法中创建React元素。

以下几种情况适用于refs：
1. 管理焦点，例如文本框或媒体播放
2. 触发强制动画
3. 集成第三方DOM库

在官方文档中，<font color="#FF6347">React提醒我们不要过度使用refs</font>。

### **回调形式的refs**
在React16.3之前，都是使用回调函数的方式使用refs。

<font color="#FF6347">这个回调函数接收React组件实例或DOM元素作为参数，以使他们能在其他地方被存储和访问</font>。

下面是一个<font color="#FF6347">关于refs使用回调函数获取输入框焦点</font>的例子：
```js
import React, { Component } from 'react'

export default class Home extends Component {
  constructor(props) {
    super(props)
    // 首先设置节点为 null
    this.textInput = null

    this.setTextInputRef = element => {
      // 调用回调函数，将输入框的DOM赋值给textInput
      this.textInput = element
    }

    this.focusTextInput = () => {
      // 使用原生DOM API使text输入框获得焦点
      if (this.textInput) {
        // 先让文本框失去焦点，然后点击按钮后使文本框得到焦点
        this.textInput.focus()
      }
    }
  }

  componentDidMount() {
    // 组件被挂载后，让文本框自动获得焦点
    this.focusTextInput()
  }

  render() {
    return (
      <div>
        {/* 使用ref的回调函数将text输入框DOM节点的引用存储到React */}
        <input type="text" ref={this.setTextInputRef} />
        <input type="button" value="Focus the text input" onClick={this.focusTextInput} />
      </div>
    )
  }
}
```
上面的例子，在React组件挂载时，会调用ref回调函数并传入DOM元素，当卸载时又会传入null。<font color="#FF6347">在componentDidMount和componentDidUpdate触发前，React会保证refs一定是最新的</font>。

### **createRef**
#### **Refs的创建**
在React 16.3之后，<font color="#FF6347">Refs使用React.createRef()创建</font>，通过ref属性附加到React元素。<font color="#FF6347">在组件中通常将refs赋值给属性值，方便在整个组件中使用它们</font>。
```js
import React, { Component } from 'react'

export default class Home extends Component {
  constructor(props) {
    super(props)
    // 将ref属性赋值给一个实例属性
    this.myRef = React.createRef()
  }

  render() {
    return (
      <div>
        <input type="text" ref={this.myRef} />
      </div>
    )
  }
}
```

### **访问Refs**
可以通过ref的current访问DOM元素。
```js
componentDidMount() {
  // 在组件的任何地方都可以使用
  console.log(this.myRef.current);   // <input tepe="text">
}
```

ref的值根据节点的类型而有所不同：
- 当ref属性属于HTML元素时，ref接收到的就是DOM元素
- 当ref属性属于React组件时，ref接收到的就是组件实例
- 不可以再函数式组件上使用ref，因为函数式组件没有实例

### **使用createRef实现输入框自动获得焦点**
```js
import React, { Component } from 'react'

export default class Home extends Component {
  constructor(props) {
    super(props)
    // 将ref属性赋值给一个实例属性
    this.textInputRef = React.createRef()
  }

  componentDidMount() {
    // 在组件的任何地方都可以使用
    this.textInputRef.current.focus()
  }

  render() {
    return (
      <div>
        <input type="text" ref={this.textInputRef} />
      </div>
    )
  }
}

```

### **为class组件添加ref**
```js
import React, { Component } from 'react'

export default class About extends Component {
  constructor(props) {
    super(props);
    // 创建一个 ref 来存储 textInput 的 DOM 元素
    this.textInput = React.createRef();
    this.focusTextInput = this.focusTextInput.bind(this);
  }

  focusTextInput() {
    // 直接使用原生 API 使 text 输入框获得焦点
    // 注意：我们通过 "current" 来访问 DOM 节点
    this.textInput.current.focus();
  }

  render() {
    // 告诉 React 我们想把 <input> ref 关联到
    // 构造器里创建的 `textInput` 上
    return (
      <div>
        <input
          type="text"
          ref={this.textInput} />
        <input
          type="button"
          value="Focus the text input"
          onClick={this.focusTextInput}
        />
      </div>
    );
  }
}
```

```js
import React, { Component } from 'react'
import About from '../About'

export default class Home extends Component {
  constructor(props) {
    super(props)
    // 将ref属性赋值给一个实例属性
    this.textInputRef = React.createRef()
  }

  componentDidMount() {
    // 在组件的任何地方都可以使用
    this.textInputRef.current.focusTextInput()
  }

  render() {
    return (
      <div>
        <About ref={this.textInputRef} />
      </div>
    )
  }
}
```

## Context
Context提供了一个<font color="#FF6347">无需为每层组件手动添加props，就能在组件树间进行数据传递</font>的方法。某些属性很多组件都需要用，Context提供一种在组件之间共享此类值的方式，而不必显示地通过组件逐层传递props。

### **Context的API**
1. React.createContext
```js
const MyContext = React.createContext(defaultValue);
```
<font color="#FF6347">创建一个Context对象，当React渲染一个订阅了这个Context对象（MyContext）的组件，这个组件会从组件树中查找离自己最近的`Provider`，读取当前的Context值</font>。

<font color="#FF6347">将undefined传递给Provider的value时，defaultValue不会生效</font>。

2. Context.Provider
```js
<MyContext.Provider value={/* 某个值 */}>
```
每个Context对象都会返回一个Provider React组件，它允许组件订阅context的变化。Provider接收一个value属性，传递给组件。一个Provider可以和多个组件右对应关系。<font color="#FF6347">多个Provider也可以嵌套使用，里层的会覆盖外层的</font>。

<font color="#FF6347">当Provider中的value值发生变化时，内部的所有组件都会重新渲染</font>。而value值是否发生变化是通过<font color="#FF6347">浅比较</font>决定的，所以<font color="#FF6347">当Provider的父组件进行重新渲染时，可能会在Provider包含的组件中发生意外渲染</font>。

例如：当Provider 重渲染时，由于 value 属性总是被赋值为新的对象，以下的代码会重新渲染Provider下面所有的组件：
```js
class App extends React.Component {
  render() {
    return (
      <MyContext.Provider value={{something: 'something'}}>
        <Toolbar />
      </MyContext.Provider>
    );
  }
}
```
<font color="#FF6347">为了防止这种情况，可以把value中的属性提升到state中</font>。

```js
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: {something: 'something'},
    };
  }

  render() {
    return (
      <MyContext.Provider value={this.state.value}>
        <Toolbar />
      </MyContext.Provider>
    );
  }
}
```

3. contextType
```js
class MyClass extends React.Component {
  componentDidMount() {
    let value = this.context;
    /* 在组件挂载完成后，使用 MyContext 组件的值来执行一些有副作用的操作 */
  }
  componentDidUpdate() {
    let value = this.context;
    /* ... */
  }
  componentWillUnmount() {
    let value = this.context;
    /* ... */
  }
  render() {
    let value = this.context;
    /* 基于 MyContext 组件的值进行渲染 */
  }
}
MyClass.contextType = MyContext;
```
挂在class上的contextType属性可以赋值为由 React.createContext() 创建的 Context 对象，<font color="#FF6347">可以通过this.context获取最近的Context上的值</font>。

4. Context.Consumer
```js
<MyContext.Consumer>
  {value => /* 基于 context 值进行渲染*/}
</MyContext.Consumer>
```
Consumer可以让你在函数式组件中订阅context。

### **何时使用Context**
Context设计的目的是共享那些对于一个组件树而言是”全局“的数据，例如：当前认证的用户、主题或首选语言。

**逐层传递props**
```js
import React from 'react'
import { Button } from 'antd'

export default function Home() {
  return (
    <div>
      <Toolbar theme="dark" />
    </div>
  )
}

function Toolbar(props) {
  return (
    <div>
      {/* 
        Toolbar组件接受一个额外的theme属性，然后传递给ThemedButton组件，
        如果React应用中每个按钮都需要这样，那就很繁琐 
        因为对于theme这个属性必须逐层传递
      */}
      <ThemedButton theme={props.theme} />
    </div>
  )
}

class ThemedButton extends React.Component {
  render() {
    return <Button theme={this.props.theme} />
  }
}
```

**使用Context进行传递**
```js
import React from 'react'
import { Button } from 'antd'

// 1. 为theme创建一个context，createContext('light')中的light为默认值
const ThemeContext = React.createContext('light')

export default function ContextDemo() {
  return (
    // 2. 使用Provider将想要共享属性的组件包裹起来
    // 这样无论组件树多深。都可以访问到Context定义的属性
    <ThemeContext.Provider value='dark'>
      <Toolbar />
    </ThemeContext.Provider>
  )
}

function Toolbar() {
  return (
    <div>
      <ThemedButton />
    </div>
  )
}

class ThemedButton extends React.Component {
  // 3. 指定contextType读取当前的theme context
  // React会向上找到最近的theme Provider，然后使用它的值
  static contextType = ThemeContext

  handleClick = () => {
    console.log(this.context);
  }

  render() {
    return (
      <Button theme={this.context} onClick={this.handleClick} />
    )
  }
}
```

**使用多个context**
```js
import React from 'react'
import { Button } from 'antd'

// 1. 为theme创建一个context
const ThemeContext = React.createContext('light')
const ColorContext = React.createContext('red')

export default function ContextDemo() {
  return (
    // 2. 使用Provider将想要共享属性的组件包裹起来
    // 这样无论组件树多深。都可以访问到Context定义的属性
    <ThemeContext.Provider value='dark'>
      <ColorContext.Provider value='blue'>
        <Toolbar />
      </ColorContext.Provider>
    </ThemeContext.Provider>
  )
}

function Toolbar() {
  return (
    <div>
      <ThemedButton />
    </div>
  )
}

class ThemedButton extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {
          (theme) => (

            < ColorContext.Consumer >
              {
                (color) => (
                  <Button theme={theme} color={color} />
                )
              }
            </ColorContext.Consumer>
          )
        }
      </ThemeContext.Consumer>
    )
  }
}
```

## React组件传值的几种方式
1. props
    - 父传子：通过在子组件中写属性的方式传递数据，子组件需要调用props接收数据。
    - 子传父：父组件向子组件传递一个函数，子组件再回调这个函数，将数据以参数的形式传给父组件，父组件就可以在自己方法中对传入的数据进行处理。
    ```js
    //父组件
    import Child from './Child.js'；
    export default class Parent extend compenent{
      getData=(data)=>{
        console.log(data);
      }
      render(){
        return (
          <div>
            父组件
            <Child getData={this.getData}/>
          </div>
        )
      }
    }

    //子组件
    export default class Child extend compenent{
      state={
        data:[1,2,3]
      }
      render(){
        const {data}=this.state;
        return (
          <div>
            子组件
            <button onClick={()=>{this.props.getData(data)}}><button>
          </div>
        )
      }
    }
    ```

2. Context：Context无需为每层组件手动添加props，就能在组件间传递数据。
```js
// Context 可以让我们无须明确地传遍每一个组件，就能将值深入传递进组件树。
// 为当前的 theme 创建一个 context（“light”为默认值）。
const ThemeContext = React.createContext('light');
class App extends React.Component {
  render() {
    // 使用一个 Provider 来将当前的 theme 传递给以下的组件树。
    // 无论多深，任何组件都能读取这个值。
    // 在这个例子中，我们将 “dark” 作为当前的值传递下去。
    return (
      <ThemeContext.Provider value="dark">
        <Toolbar />
      </ThemeContext.Provider>
    );
  }
}

// 中间的组件再也不必指明往下传递 theme 了。
function Toolbar() {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

class ThemedButton extends React.Component {
  // 指定 contextType 读取当前的 theme context。
  // React 会往上找到最近的 theme Provider，然后使用它的值。
  // 在这个例子中，当前的 theme 值为 “dark”。
  static contextType = ThemeContext;
  render() {
    return <Button theme={this.context} />;
  }
}
```
被Context.Provider包裹的组件，不再需要逐层传递props就可以取到数据。

3. redux：redux是一个组件状态管理库，可以轻松实现非父子组件且嵌套关系复杂的组件之间的数据传递问题。

4. 路由传值
    - 使用router v6中的新钩子函数 useSearchParams和useParams
    - 使用query和state传参，但是刷新页面后参数会丢失

5. 使用消息订阅


## 生命周期
### React的生命周期有哪些
React生命周期分为三个阶段：
- 装载阶段：组件第一次在页面渲染
- 更新阶段：组件状态发生变化引起页面重新渲染
- 卸载阶段：组件从DOM树中被移除的阶段

<font color="	#FF6347">react生命周期(旧)</font>
![02_react生命周期(旧)](https://user-images.githubusercontent.com/70066311/160606822-92bbfe94-7d60-4e33-a77d-f312484822e0.png)

<font color="	#FF6347">react生命周期(新)</font>
![03_react生命周期(新)](https://user-images.githubusercontent.com/70066311/160606846-f1fcb249-e933-4a3f-b1ac-b834596a8d91.png)

### 组件挂载阶段
组件被创建就在挂载阶段，组件被创建后组件实例被插入到DOM中，完成组件的第一次渲染。在该阶段会一次调用如下方法：
- constructor
- getDerivedStateFromProps
- render
- componentDidMount  

(1) constructor()     
组件中的构造器，<font color="#FF6347">若显式定义了constructor，必须执行super(props)，否咋无法在构造函数中拿到this</font>。

构造器中通常做两件事：<font color="	#FF6347">定义state和给事件绑定this</font>。
```js
constructor(props){
  super(props)
  this.state={
    count: 0,
    name: "lsw"
  },
  this.handleClick = this.handleClick.bind(this)
}
```   
(2) getDrivedStateFromProps()：将传入的props映射到state上面
```js
static getDrivedStateFromProps(props, state)
```
<font color="	#FF6347">getDrivedStateFromProps()方法是一个静态方法</font>，不可以在该函数内部使用this。getDrivedStateFromProps()接受两个参数，<font color="	#FF6347">props代表接收到的新的参数，state代表当前组件的state对象</font>，会返回一个对象用来更新当前的state对象，如果不更新会返回null。

该方法会在<font color="	#FF6347">组件装载、接受到新的props、setState和forceUpdate时被调用</font>。

(3) render
render()是React最核心的方法，它只做一件事，就是根据state和props渲染新的页面。

(4) componentDidMount()
componentDidMount()会在组件挂载后立即调用用，主要做以下几件事情：
<font color="	#FF6347">
- 执行依赖于DOM的操作    
- 发送网络请求             
- 添加订阅消息（会在componentWillUnmount取消订阅）

</font>

### 组件更新阶段
当组件的state、props改变了，或调用了forceUpdate，会触发组件的更新，这个过程可能会发生多次。这个阶段会依次调用如下方法：
- getDrivedStateFromProps()
- shouldComponentUpdate()
- render()
- getSnapshotBeforeUpdate()
- componentDidUpdate()

(1) shouldComponentUpdate(nextProps, nextState)   
在讲这个生命周期函数之前，先要了解下面两个问题：
1. setState()在任何情况下都会导致组件重新渲染吗？
2. 如果没有调用setState、props的值也没有变化，组件就不会重新渲染吗？
第一个问题是<font color="	#FF6347">会</font>，第二个问题是<font color="	#FF6347">如果父组件重新渲染时，不管子组件的props有没有发生变化，都会引起子组件的重新渲染</font>，这样会导致性能下降，这时就要用到shouldComponentUpdate()。

shouldComponentUpdate()是在组件重新渲染开始之前触发的，返回值为一个布尔值，默认返回true，<font color="	#FF6347">通过比较this.state和nextState、this/props和nextProps的值是否变化，来返回true或false</font>。当返回false时，组件的更新过程停止，后续的render()和componentDidUpdate()也不会被调用。<font color="	#FF6347">不要使用深比较进行检查</font>。

(2) getSnapshotBeforeUpdate(prevProps, prevState)
prevProps, prevState表示更新之前的props和state，这个函数必须要和componentDidUpdate()一起使用，并且要有一个返回值，默认返回null，这个返回值作为参数传给componentDidUpdate()。

适用场景：<font color="	#FF6347">更新时需要用到更新之前的state和props的情况</font>，例如在带有滚动条的信息栏插入一条信息。

(3) componentDidUpdate(prevProps, prevState, snapshot)
componentDidUpdate()会在更新后被立即调用，首次渲染不会执行此方法，该阶段通常进行如下操作：
- 对DOM进行操作
- 进行网络请求

### 组件卸载阶段
该阶段只有一个生命周期函数：componentWillUnmount()，会在组件卸载及销毁之前调用，在此方法中必须要执行的操作是：
- 清除网络请求
- 取消在componentDidMount()中发布的消息订阅

### React废弃了三个生命周期函数是为什么？
被废弃的三个函数分别是：<font color="	#FF6347">componentWillMount()、componentWillUpdate()、componentWillReceiveProps()</font>。

componentWillMount()的功能完全可以被constructor()和componentDidMount()代替，比如异步请求、消息订阅的操作。如果使用服务端渲染的话，componentWillMount()会在服务器和客户端各执行一次，这会导致请求两次，增加服务器负担；而componentDidMount()只会在客户端执行一次。
1. <font color="	#FF6347">如果我们在componentWillMount()中订阅事件，但服务端并不会执行componentWillUnMount()，这会导致服务器端内存泄漏</font>。
2. <font color="	#FF6347">如果在componentWillMount()中进行异步请求，可以使数据返回的更快。但componentWillMount()执行结束后会立即执行render()，这时可能请求的结果还没有返回，当请求结果返回后，又会执行一次render()，所以第一次的render()是没有必要的，造成性能开销大</font>。

componentWillReceiveProps()中主要做的事是<font color="	#FF6347">比较更新前后的两个props是否一致，如果不一致，再将props更新到state</font>。这么做有两个问题：
1. <font color="	#FF6347">componentWillReceiveProps不单单只是在props变化才触发，当父组件重新渲染时，子组件的componentWillReceiveProps也会触发</font>
2. <font color="	#FF6347">会增加重绘的次数</font>

componentWillUpdate()不管更没更新，都会执行回调函数，而我们有时只想在更新成功后执行回调函数，这可以将componentWillUpdate()的回调迁移到componentDidUpdate()中进行。

### props改变后会在哪个生命周期函数中处理
<font color="	#FF6347">在getDrivedStateFromProps()函数中进行处理的</font>。getDrivedStateFromProps()是一个静态函数，不能通过this访问class的属性，而是通过参数提供的nextProps和prevProps进行比较，根据新传入的props来映射state。

### React性能优化在哪个生命周期函数
<font color="	#FF6347">shouldComponentUpdate()</font>。如果父组件重新渲染，子组件会跟着重新渲染，大多数情况下，子组件的这种重新渲染是没有必要的，所以可以在shouldComponentUpdate()方法中取消子组件的更新，提升性能。

### 网络请求在哪个生命周期函数中处理
<font color="	#FF6347">componentDidMount()和componentDidUpdate()</font>。在该生命周期函数中组件已被完全挂载到网页上了，可以保证数据的加载。

### Component和PureComponent的区别
Component和PureComponent几乎完全相同，但<font color="	#FF6347">PureComponent通过props和state的浅比较来实现shouldComponentUpdate()，在PureComponent中如果包含深层次的数据结构，那么会因为深层的数据不一致而导致更新错误，导致界面不更新</font>。

PureComponent已经实现了通过props和state的浅比较来实现shouldComponentUpdate()，不需要再去实现shouldComponentUpdate()，而Component需要再实现shouldComponentUpdate()。

#### PureComponent缺点
可能会因深层的数据不一致而产生错误的否定判断，从而shouldComponentUpdate结果返回false，界面得不到更新。

#### PureComponent优点
不需要开发者自己实现shouldComponentUpdate，就可以进行简单的判断来提升性能。

## 数据管理
### React setState调用的原理
![image](https://user-images.githubusercontent.com/70066311/160269643-e287ab67-d888-4a67-b8c4-2f11de24bd28.png)

setState具体的执行过程如下：
1. 首先调用setState()函数：
```js
ReactComponent.prototype.setState = function(partialState, callback){
  // updater：一个带有形参的函数，返回被更新的状态对象。它可以接收到props和state
  this.updater.enqueueSetState(this, partialState)
  if(callback){
    this.updater.enqueueCallback(this, callback, 'setState')
  }
}
```
enqueueSetState<font color="	#FF6347">将新的state放进组件的状态队列里，并调用enqueueUpdate来处理将要更新的实例对象</font>。

```js
enqueueSetState: function (publicInstance, partialState) {
  // 根据 this 拿到对应的组件实例
  var internalInstance = getInternalInstanceReadyForUpdate(publicInstance, 'setState');
  // 这个 queue 对应的就是一个组件实例的 state 数组
  var queue = internalInstance._pendingStateQueue || (internalInstance._pendingStateQueue = []);
  queue.push(partialState);
  //  enqueueUpdate 用来处理当前的组件实例
  enqueueUpdate(internalInstance);
}
```

setState()最终通过<font color="	#FF6347">enqueueUpdate更新state</font>。

```js
function enqueueUpdate(component) {
  ensureInjected();
  // 注意这一句是问题的关键，isBatchingUpdates标识着当前是否处于批量创建/更新组件的阶段
  if (!batchingStrategy.isBatchingUpdates) {
    // 若当前没有处于批量创建/更新组件的阶段，则立即更新组件
    batchingStrategy.batchedUpdates(enqueueUpdate, component);
    return;
  }
  // 否则，先把组件塞入 dirtyComponents 队列里，让它“再等等”
  dirtyComponents.push(component);
  if (component._updateBatchNumber == null) {
    component._updateBatchNumber = updateBatchNumber + 1;
  }
}
```

在enqueueUpdate中通过<font color="	#FF6347">batchingStrategy的isBatchingUpdates属性来判断当前是否处于批量创建/更新组件的阶段</font>。

batchingStrategy对象可以理解为“锁管理器”。这里的“锁”是指isBatchingUpdates变量。<font color="	#FF6347">isBatchingUpdates初始值为false，表示并未进行任何批量更新操作。每当React调用batchedUpdate去执行更新动作时，会先把这个锁给锁上（置isBatchingUpdates为true），表明“现在正处于批量更新过程中”</font>。当上锁后，更新需要更新的组件都要在队列中等待下一次批量更新。

setState()将对组件state的更新排入队列，并通知React需要使用更新后的 state重新渲染此组件及其子组件。<font color="	#FF6347">你需要将setState()视为请求而不是立即更新state（可能为异步的！！！）</font>。因为React会将多次的setState()放在一起一并执行，这样可以提升效率，减少页面渲染次数。

因为setState()并不总是立即更新state，可能会推迟更新。这导致在调用setState()后立即读取this.state有可能会拿到未更新之前的state。为了解决这个问题，我们可以<font color="	#FF6347">使用componentDidUpdate或setState(updater, callback)的回调函数</font>，保证在state更新后再执行。

**总结：**setState()用于更新状态，它接受两个参数，第一个参数可以**传入一个对象**，也可以传入**一个updater函数**。**传入的对象**代表需要更新的状态及状态值。**updater**为一个带有形参的函数，返回被更新的状态对象，可以接收到state和props；第二个参数是一个可选的回调函数，在状态更新完后进行回调。setState()并不会立即执行状态的更新，而更像是更新状态请求。
1. 在调用setState()后React会调用enqueueSetState()方法将需要更新的state入队。
2. 接着调用enqueueUpdate方法里面的batchingStrategy.isBatchingUpdates属性判断当前是否处理批量更新的阶段。若处于，则将需要更新state的组件放入dirtyComponent队列中等待下一次批量更新；若不处于则立即更新组件。


### **setState调用之后发生了什么？是同步还是异步的？**
<font color="	#FF6347">在代码中调用setState后React会将传入的对象与当前组件的状态合并，然后触发调和过程。经过调和过程，React会根据新的状态构建React元素树，然后计算新老元素树节点的差异，根据差异对页面进行渲染。</font>。

根据场景来决定是同步还是异步。
- <font color="	#FF6347">同步：在React无法控制的地方，比如DOM原生事件，例如：addEventListener、setTimeout、setInterval等事件中，就只能同步更新</font>。
- 异步：在React生命周期和合成事件中，<font color="	#FF6347">React可以把多次setState合并到一起进行更新，提高效率</font>。    

<font color="	#FF6347">setState设计为异步，可以提升性能。如果每次setState都要进行一次更新，那么意味着render函数会被频繁调用，这样效率很低。React采用延迟更新策略，可以把多次setState合并到一起进行更新，提高效率</font>。

**对于相同状态的进行同时调用setState，只有最后一个setState会生效，而不是单纯的累加**。
```js 
// 每次点击按钮value的值+2，而不是+3
<button 
  onClick={() => (
    setValue(value + 1), 
    setValue(value + 2)
  }
>
  value + 1
</button>
```

### setState的第二个参数是什么？
setState的第二个参数是一个回调函数，在组件重新渲染完后执行，等价于在componentDidUpdate中执行。在这个回调函数中可以拿到更新的后state的值。

### setState和replaceState的区别是什么？
setState用来设置状态，它接收两个参数，第一个参数是新的状态值，第二个参数是一个可选的回调函数，在状态改变后执行，可以获取到状态改变后的值。
React会将多次的setState合并为一次执行，提高性能，减少页面渲染次数。<font color="	#FF6347">setState只是覆盖原来的状态，不会减少原来的状态</font>。

<font color="	#FF6347">replaceState只会保留nextState中的值，原来的state将被删除，相当于赋值</font>。

### getDefaultProps和defaultProps
getDefaultProps和defaultProps用于指定属性的默认值。
```js
// ES5
getDefaultProps: function(){
    return {
        autoPlay: false,
        maxLoops: 10
    }
},

// ES6
// 静态函数:使某个函数只在一个源文件中有效，不能被其他源文件所用
static defaultProps = {
  name: "lsw"
}
```

### 校验propTypes
propTypes用来对传入的props数据进行验证，若props与propTypes定义的数据类型不符，控制台会报警告。可以避免随着程序越来越复杂出现的问题，还可以让程序变得更加易读。

## 组件通信
React组件常见的通信的方式有以下几种：
- 父向子通信：使用props。
- 子向父通信：使用props和回调函数。
- 跨级组件通信：使用context。
- 非嵌套关系的组件通信：redux。

### 父向子通信
父组件通过 props 向子组件传递需要的信息。在子组件中加入属性，这些属性就是要传给子组件的数据。子组件使用props接收这些数据。
```js
// 子组件: Child
const Child = props =>{
  return <p>{props.name}</p>
}

// 父组件 Parent
const Parent = ()=>{
    return <Child name="react"></Child>
}
```

### 子向父通信
子组件通过调用父组件传递到子组件的方法向父组件传递消息的。
```js
// 父组件
import React from 'react'
import Child from './components/Child';

function App() {
  const handleMessgae = (message) => {
    console.log(message);
  }

  return (
    <div className="App">
      <Child message={handleMessgae} />
    </div>
  );
}

export default App;

// 子组件
import React from 'react'

export default function Child(props) {
  const { message } = props
  const getMessage = () => {
    message("刘帅武")
  }

  return (
    <button onClick={getMessage}>点我返回消息</button>
  )
}
```

### 跨级组件的通信方式
父组件与子组件的子组件通信的方式：
- 使用props，层层传递。
- 使用context。context相当于一个大容器，不论嵌套多深，都可以在context中得到，对于跨越多层的全局数据可以使用context实现。
```js
import React, { useState, useContext } from "react";

// 1.使用React.createContext()创建一个context对象
const TestContext = React.createContext();

const Child1 = () => {
  // 3.子组件通过useContext(TestContext)获取值
  const value = useContext(TestContext);
  return (
    <div>
      {(() => console.log('Child1-render'))()}
      <h3>Child1-value: {value}</h3>
    </div>
  );
}

// 避免child2渲染，提升性能
const Child2 = React.memo(() => {
  return (
    <div>
      {(() => console.log('Child2-render'))()}
      <h3>Child2</h3>
    </div>
  )
})

// 这里已经实现了组件之间数据共享，但是只要testContext中的共享数据发生变化后，子组件都会重新渲染，
// 而child2并没有绑定数据，所以可以使用react.memo()来提升性能

function App() {
  const [value, setValue] = useState(0);

  return (
    <div className="App">
      {(() => console.log("Parent-render"))()}
      <button onClick={() => setValue(value + 1)}>value + 1</button>
      {/* 
        2.TestContext.Provider包裹子组件
          数据放在value属性中
      */}
      <TestContext.Provider value={value}>
        <Child1 />
        <Child2 />
      </TestContext.Provider>
    </div >
  );
}

export default App;
```
使用Context时，只要Context中的数据发生变化时，就会重新渲染使用Context的组件，可以使用useMemo绑定某些值，减少某些组件的渲染，提升页面加载效率。

### 非嵌套关系组件的通信方式
- 发布消息订阅
- 使用redux
- 如果是兄弟组件，找到它们共同的父组件进行通信。

## 路由
### **路由基本功能**
1. <font color="	#FF6347">保证视图和url的同步</font>。路由描述了URL和UI之间的映射关系，这种映射是单向的，即URL变化引起UI的变化而不许刷新页面。

### **history**
history可以用来兼容在不同浏览器、不同环境下对历史记录的管理。  

history分为三类，分别是BrowserHistory、HashHistory和MemeoryHistory。<font color="	#FF6347">BrowserHistory利用的是H5中的history接口</font>。<font color="	#FF6347">HashHistory利用的是history中的location属性的hash</font>。

**browserHistory**采用push和replace（编程式路由）来实现url的改变，这两个方法分别封装了history的**pushState**和**replaceState**方法。这两个方法都会改变当前的url，但不会刷新页面。还有例如go()、back()、forward()等方法。这些方法都会触发popState事件，所以在browseHistory采用<font color="	#FF6347">手动触发popState的方式来实现对url改变的监听</font>。 

**hashHistory**通过区分history对象中的location属性中包含的hash字段来渲染不同的组件。

### **React-Router的实现原理**
React-Router是建立在history之上的，<font color="	#FF6347">history会监听浏览器地址栏的变化，并解析url转化为location对象，然后router匹配到对应的路由，最后渲染对应的组件</font>。总结：<font color="	#FF6347">hash值改变，会触发全局window对象上的hashchange事件。React-Router就是通过hashchange事件监听URL的变化，从而进行DOM操作来模拟页面跳转的</font>。

Router负责<font color="	#FF6347">表示当前使用什么路由模式</font>。
Route<font color="	#FF6347">根据当前的url与自身的path属性进行匹配，匹配成功就渲染对应的组件</font>。

### 如何配置React-Router实现路由切换
- 使用\<Route>组件  
<font color="	#FF6347">路由匹配是通过比较<Route>的path属性与当前URL中的pathname来实现的</font>。可以给\<Route>组件加上 **exact** 属性来实现路由精准匹配。

```js
<Route path="/home" component={Home} />
```

- \<Switch>和\<Route>  
因为\<Route>采用的是模糊匹配，所以可能一次会匹配到多个路由，\<Switch>的作用就是控制每次只匹配一个路由。在\<Route>外层包裹\<Switch>表示只会匹配到第一个匹配的\<Route>。
```js
<Swicth>
  <Route path="/home" component={Home} />
  <Route path="/about" component={About} />
</Switch>
```

- \<Link>、\<NavLink>和\<Redirect>  
\<Link>就是渲染在页面中的路由跳转链接，\<Link>组件将被渲染为一个\<a>标签。
```js
<Link to="/home">Home</Link>
// 在页面中被渲染为：<a href="/home">Home</a>
```
 \<Link>的跳转行为只会触发相匹配的组件的内容更新，而不会重新渲染整个页面。


\<NavLink>是一种特殊的\<Link>，当它的to属性与当前地址匹配时，可以将其定义为active状态。

\<Redirect>组件用于重定向路由。
```js
<Redirect from="/users/:id" to="/user/profile/:id">
```
从/users/:id 转到 /user/profile/:id。

### **Link和a标签的区别**
从最终渲染的DOM来看，两者都是链接。区别在于：\<Link>是实现路由跳转的链接，一般配合
\<Route>使用，\<Link>的跳转行为只触发了相匹配的\<Route>对应的页面内容更新，而不会刷新整个页面。

<font color="	#FF6347">我个人的理解</font>：因为React是一个单页面应用，在每次进行路由切换时都是在一个HTML文件中发生的，这个HTML文件在页面首次加载时就已经下载下来了，使用\<Link>在路由切换时不会重新去请求一个HTML文件；而\<a>在每次跳转时都会加载对应页面的HTML文件，在某些网速慢得情况下会出现空白页，导致用户体验不好。\<Link>在通过阻止\<a>标签的默认事件，然后根据href（即\<Link>的to属性）进行页面跳转。

### **路由传参**
路由传参主要有几种形式：
1. params：
    - 刷新页面后参数不消失
    - 参数会在地址栏显示
    - 需要在Route中配置参数名称
    - 只能传递字符串
    - 不适用参数传递太多的情况，因为不同的浏览器对URL的长度限制不同

    **传递方法：**
    1. 首先在\<Route>中声明传递参数的个数
    ```js
    <Route path='/Inbox/:id' component={Inbox} />
    ```
    2. 然后在\<Link>中进行参数传递
    ```js
    <NavLink to={'/Inbox/01008'} >铅笔</NavLink>
    ```
    3. 取值
    ```js
    this.props.match.params
    ```
2. query：
    - 刷新页面后参数消失
    - 不会在URL中显示

    **传递方法：**
    1. 直接在\<Link>中通过query属性进行传参，query属性接收一个对象
    ```js
    <Link to={{pathname:'/Inbox',query:{id:'01009'}}} >铅笔</Link>
    ```
    2. 取值
    ```js
    this.props.location.query
    ```
3. state：
    - 刷新页面后参数不会消失
    - 参数不会在URL中显示
    
    **传递方法：**
    1. 直接在\<Link>中通过state属性进行传参，state属性接收一个对象
    ```js
    <Link to={{pathname:'/Inbox',state:{id:'01009'}}} >铅笔</Link>
    ```
    2. 取值
    ```js
    this.props.location.state
    ```
4. search：
    - 取参得到的是字符串，如果需要其他类型的还需要进行进一步解析

    **传递方法：**
    1. 直接在\<Link>中通过to属性进行传参
    ```js
    <Link to='/Inbox?a=1&b=2' >铅笔</Link>  
    ```
    2. 取值
    ```js
    this.props.location.search
    ```

### **Router如何获取URL的参数和历史对象**
获取URL参数：
1. get传值。通过`props.location.search`取值。
2. 动态路由传值。在V6之前的版本可以使用`props.match.params.属性值`来取值；V6
版本可以通过useParams和useSearchParams钩子函数来取值。

获取历史对象：
1. useHistory钩子函数获取历史对象。
2. `props.history`获取历史对象。

### **路由拦截（路由守卫）**
```js
const isAuth = () => {
  // 判断是否有token字段
  return localStorage.getItem("token")
}

// 实现路由拦截
<Route path="/cart" render={()=>{
  return isAuth() ? <Cart /> : <Redirect to="/login">
}} />

```

## Router V6
### **V6版本的一些更改**
1. \<Switch>重命名为\<Routes>
2. \<Route>的特性变更（component/render被element替代）
3. 嵌套路由变得更简单
4. 使用\<useNavigate>代替\<useHistory>
5. 使用\<useRoutes>代替react-router-config
6. 更小的体积

```js
// history模式
<BrowserRouter>
  {/* 路由入口：指定跳转到哪一个组件，to用来配置路由地址 */}
  <Link to='/'>首页</Link>
  <Link to='/about'>关于</Link>
  <Link to='/login'>登录</Link>
  {/* 路由出口：路由对应的组件会在这里进行渲染 */}
  <Routes>
    {/* 指定路径和组件的对应关系，用于指定导航链接，完成路由匹配 */}
    <Route path="/" element={<Home />}></Route>
    <Route path="/about" element={<About />}></Route>
    <Route path="/login" element={<Login />}></Route>
  </Routes>
</BrowserRouter >
```

- Link：路由入口，用于指定导航链接，完成路由跳转，最终渲染为a标签
- Routes：路由出口，路由对应的组件在Routes中进行渲染
- Route：指定路由地址与组件的对应关系，用于指定导航链接，完成路由匹配
- BrowserRouter：history模式

### **编程式导航**
Router v6通过useNavigate钩子函数实现编程式导航
```js
import { useNavigate } from 'react-router-dom'
// 指定钩子函数得到跳转函数
const navigate = useNavigate()
// 执行跳转函数，跳转到about页
navigate('/about')   // 相当于push
navigate('/about', { replace: true })   // 相当于replace
navigate(-1)    // 相当于back
navigate(1)     // 相当于forward
navigate(-2)    // 相当于go
```

### **传参**
Router v6有两种传参方式
1. searchParams传参
```js
// 传参：
navigage('/about?id=1001')
// 取参：
let [params] = useSearchParams()
let id = params.get('id')
```
params是一个对象，里面包含很多方法：get、append、delete、forEach等，可以对传来的参数进行操作。


2. params传参
```js
// 传参：
navigage('/about/1001')
// 取参：
let params = useParams()
let id = params.id
```
第二种方法的参数就是一个参数对象。

### **嵌套路由**
1. 定义嵌套路由声明
```js
{/* 指定路径和组件的对应关系，用于指定导航链接，完成路由匹配 */}
<Route path="/" element={<Home />}>
  {/* 定义二级路由 */}
  <Route path='board' element={<Board />}></Route>
  <Route path='article' element={<Article />}></Route>
</Route>
```

2. 使用<Outlet />指定二级路由出口     
然后再Home组件中配置二级路由出口。
```js
import { Outlet } from 'react-router-dom'
{/* 二级路由出口 */}
<Outlet></Outlet>
```

### **配置默认路由**
使用index关键字配置默认路由
```js
<Route index element={<Board />}></Route>
```

## Hooks
类组件：类组件是采用ES6 class的写法进行组件编写，类组件内部封装了很多东西，比如state，生命周期函数等，我们可以在组件挂载、渲染、卸载阶段分别写不同的逻辑。但使用类组件难以拆分内部逻辑，不方便复用，因此有了函数式组件。     
函数组件真正的将数据和页面渲染绑定到了一起，实现了输入一组数据，输出一个UI。更加方便复用与拆分。但函数式组件是一种无状态组件，它不可以定义state，没有生命周期函数。而Hooks使得函数式组件有了这些能力。

### 类组件与函数组件的区别
- 类组件继承class；函数式组件不需要
- 类组件有自己的生命周期函数；函数式组件通过Hooks实现生命周期函数
- 类组件有构造函数，可以通过this进行操作；函数式组件通过Hooks完成相关操作
- 类组件通过this.state/this.setState来维护状态；函数式组件通过useState维护状态

### 为什么useState使用数组而不是对象
如果使用数组，那么调用者在解构useState中的值时可以自由对这些值命名；而使用对象就必须用对象中的命名。

### 常用的Hooks
- useState：状态钩子，为函数式组件提供内部状态
- useContext：共享钩子，用于组件间共享状态，可以解决通过逐层传递props共享状态的麻烦。  
使用方法：   
1. <font color="	#FF6347">使用React.createContext()创建一个context对象</font>；
```js
  const TestContext = React.createContext();
```
2. <font color="	#FF6347">使用TestContext.Provider包裹需要共享数据的子组件</font>；
```js
// TestContext.Provider包裹子组件数据放在value属性中
<TestContext.Provider value={value}>
  <Child1 />
  <Child2 />
</TestContext.Provider>
```
3. <font color="	#FF6347">在子组件中使用useContext()获取值</font>
```js
// 子组件通过useContext(TestContext)获取值
const value = useContext(TestContext);
```

- useEffect：副作用钩子，<font color="#FF6347">数据获取、消息订阅、操作DOM等都属于副作用</font>。useEffect接收两个参数，第一个参数是一个回调函数，第二个参数是一个数组，可以传入state和props。只有状态数组中的状态值发生变化时才会执行回调函数中的代码。若数组为空，则useEffect只执行一次。<font color="	#FF6347">有时我们想在DOM更新后执行一些额外的代码，比如更新日志、发送请求等，就可以使用useEffect</font>。我们可以在函数式组件中实现像类组件生命周期的某个阶段(componentDidMount、componentDidUpdate、componentWillUnmount)可以完成的事。<font color="#FF6347">若传入空数组，则useEffect相当于componentDidMount；在组件销毁之前，模拟componentWillUnmount</font>

- useEffect的return函数的执行时机：
    1. 组件卸载时
    2. 执行当前effect会对上一个effect进行清除

- useRef：获得组件的实例，多用于\<input>、\<form>等带有输入的DOM标签。

**什么是闭包陷阱**：在hooks里面的函数，如果是useEffect(()=>(),[])这种写法，即只有组件`挂载阶段`执行，那么在这里面的函数，拿到的值始终都只是初始化时候的值，就算你在其他地方修改了值之后，也是获取不到最新值的。

React Hooks在渲染时维护了一个链表，来记录useState和useEffect等Hooks的位置和值。

```js
function App(){
    const [count, setCount] = useState(1)
    const [name, setName] = useState('chechengyi')
    useEffect(()=>{
        
    }, [])
    const text = useMemo(()=>{
        return 'ddd'
    }, [])
}
```

在组件第一次渲染时，为每个hooks都创建了一个对象：
```ts
type Hook = {
  memoizedState: any,
  baseState: any,
  baseUpdate: Update<any, any> | null,
  queue: UpdateQueue<any, any> | null,
  next: Hook | null,
};
```

最终形成了一个链表：

![image](https://user-images.githubusercontent.com/70066311/169180124-dcd9231a-ebc0-464f-8e19-0c17712978f4.png)


```js
const [count, setCount] = useState(1)
useEffect(() => {
    setInterval(() => {
        console.log(count)
    }, 1000)
        //闭包陷阱
}, [])

const handleClick = () => {
    setCount(count+1)
}

return (
        <div onClick={handleClick}>
            click to add, count: {count}
        </div>
)
```

在每次state更新时, 链表从头开始重新渲染，但是由于上面示例中useEffect没有依赖任何state，所以只有在第一次渲染的时候才会触发，setCount渲染更新时，useEffect里面的回调函数并没有触发，因此里面的setInterval里面的count还是初始化时的值，并没有获取到最新的. 这就是**闭包陷阱**。

**使用useRef解决闭包陷阱**     
<font color="	#FF6347">使用useRef每次拿到的都是这个对象本身，是同一个内存空间的数据，所以可以获取到最新的值</font>。

- useMemo：与useEffect类似，区别在于<font color="	#FF6347">传入useMemo的函数会在页面渲染的时候执行，而useEffect是在页面渲染后才执行</font>。只有在数组中存储的变量发生变化时，useMemo()才会执行回调函数，可以减少局部页面渲染，提升性能。

### useMemo和useCallback的区别
useCallback和useMemo都是优化性能的手段，区别在于<font color="	#FF6347">useCallback返回一个函数，当这个函数被当作组件使用时，可以避免每次更新都重新渲染该组件；useMemo返回一个值，避免每次渲染都要对值进行不必要的计算</font>。

### Memo、useMemo和useCallback的区别
三者都是进行性能优化的：
Memo针对的是一个组件是否重新渲染；而useMemo针对的是一段代码逻辑是否重新执行。
而useCallback主要用来缓存函数，如果state发生变化，那么整个组件都会被重新渲染，即使一些函数没有必要被渲染，可以使用useCallback来讲这些函数缓存，以此来减少性能损耗。

### useEffect和useLayoutEffect的区别
<font color="	#FF6347">useEffect是异步执行的，useLayoutEffect是同步执行的；useEffect的执行时机是浏览器完成渲染之后，useLayoutEffect的执行时机是浏览器把内容真正渲染到界面之前</font>。若在useEffect的回调函数中需要对DOM进行样式修改，可以使用useLayoutEffect，避免页面闪烁。<font color="	#FF6347">useLayoutEffect总是比useEffect先执行</font>。

### React.PureComponent、useMemo和React.memo的区别
React.PureComponent会浅比较prop和state，若比较前后prop和state没有变化，则可以减少渲染次数，提升效率。但<font color="	#FF6347">React.PureComponent只会作浅层比较，对于有复杂结构的prop和state可能会比较出错。所以React.PureComponent只适用于prop和state比较简单的情况</font>。

React.memo和React.PureComponent类似，React.PureComponent在类组件中使用，React.memo在函数式组件中使用。

useMemo根据数组中的prop和state的变化情况执行回调函数。

### 使用Hooks要注意的坑
1. 不要在循环，条件或嵌套函数中调用hooks，必须在React函数的顶层使用Hooks。     
React需要利用调用顺序来正确更新对应的状态，若在循环，条件或嵌套函数中调用hooks很容易导致调用顺序不一致，产生难以预计的后果。

2. 使用useState时，不能使用push、pop、splice等直接更改数组对象。   
直接使用push、pop、splice等方法无法直接获取到num值，要采用析构方式。
```js
import React, { useState } from 'react'

export default function App() {
  const [num, setNum] = useState([0, 1, 2, 3, 4])
  const test = () => {
    // num.push(5)
    // num.pop()
    num.splice(2)
    setNum([...num])
  }
  return (
    <div>
      <button onClick={test}>点我</button>
      {num}
    </div>
  )
}
```

3. 使用useState设置状态时，只有第一次会生效，后面需要更新状态，需要在useEffect中执行。

4. 善用useMemo、useCallback，不要滥用useContext。   

## Redux
### 对Redux的理解
<font color="	#FF6347">Redux是一个用来管理数据状态的工具</font>。因为React传递数据是单向的，父组件可以向子组件通过props传递数据，而子组件无法直接向父组件传递数据，这样的单向数据流成就了React的数据可控性。随着项目越来越大，state也越来越难以管理，而使用Redux可以轻松管理这些state。

Redux专门用于管理数据状态（容器组件），而React用于处理视图层逻辑，实现页面渲染（UI组件），两者通过connect连接起来。

![redux原理图](https://user-images.githubusercontent.com/70066311/160605698-6166cd12-93e9-491e-8474-65a0163114d8.png)

### Redux主要解决的问题
Redux主要解决的问题是将Redux的状态与React的UI绑定到一起，当使用dispatch(action)改变state时可以自动更新页面。

### Redux的工作原理
<font color="	#FF6347">当组件想要更新状态时，Redux会创建一个action对象，action对象包含两个数据，一个是必备的type，表示action类型，第二个state，在action不会修改state的值，而是等待store调用dispatch()方法将action对象传递给reducer，reducer才是真正更新state值的对象。reducer接收两个参数，一个是preState，一个是action，通过匹配不同的action.type来执行不同的逻辑，然后返回一个新的state。store在组件挂载到页面后(componentDidmount)通过subscribe()方法一直监听reducer，一旦reducer改变完状态，就可以通过getState()方法得到新的经过reducer处理后的state。</font>

### **Redux深入理解**
Redux源码主要分为以下几个模块文件：
- compose.js：提供从右到左进行函数式编程
- createStore.js：提供作为生成唯一store的函数
- combineReducers.js：提供合并多个reducer的函数，保证store的唯一性
- bindActionCreators.js：可以让开发者在不直接接触dispacth的前提下进行更改state的操作
- applyMiddleware.js：通过中间件来增强dispatch的功能

### **Redux工作流程**
1. 首先用户通过dispatch()函数发出Action对象
2. Store自动调用Reducer并传入两个参数，一个是当前的State，另一个是Action对象
3. Reducer更新后返回新的State
4. State一旦发生变化，Store就会调用监听函数，来更新View

### **Redux怎么实现属性传递的，原理**
<font color="	#FF6347">view -> action -> reducer -> store -> view</font>
1. 用户在view通过触发某些事件调用mapDispatchToProps()将action对象传给store
2. store自动调用reducer修改state
3. store通过subscribe()监听state是否发生变化，当state发生改变时，store就可以调用getState()方法获取到新的state
4. store通过mapStateToProps()方法将新的state映射到view中

### Redux的三大原则
1. 单一不可变状态树：整个应用程序的所有状态由一个JS对象（状态树）来表示。
2. 状态树只读：无法直接修改或写入状态树，只能通过发起`Action`来对其进行修改。`Action`是描述更改的一个普通JS对象，它是对该数据所做的更改的最小表示形式，它的结构完全取决于我们自己，唯一的要求是它必须有一个绑定的属性type。
3. 只能在Reducer中描述状态变化，Reducer是一个纯函数。

### **Redux的中间件是什么**
<font color="	#FF6347">view -> action -> middleware -> reducer -> store -> view</font>
Redux中间件是对dispatch的扩展，位于action -> reducer之间，使用中间件可以进行异步操作、action过滤、异常报告等功能。

在`Redux`中，中间件就是在`dispatch`过程中，在分发`action`时进行拦截处理，提供的时机是在`action`发起之后，到达`reducer`之前。这种机制可以使我们改变数据流，实现异步action、action过滤、日志输出、异常报告等功能。

### Redux异步<font color="	#FF6347">中间件</font>
1. redux-thunk    
优点：     
- 体积小，只有不到20行代码
- 使用简单

缺点：     
- 通常一个请求需要大量的代码，而且很多都是重复性质的
- 耦合严重：异步代码和action耦合在一起，不便于管理
- 功能少，在开发中有些功能需要自己封装

2. redux-saga
redux-saga是一个管理redux应用异步操作的中间件，它通过创建Saga将所有异步操作逻辑存放在一个文件进行集中处理，一次将同步与异步操作分离，以便于管理与维护。      
优点：     
- 异步解耦：异步操作放在单独的文件中，降低耦合性
- 异常可以直接使用try/catch捕获
- 功能强大：提供了大量的saga辅助函数供开发者使用
- 灵活：可以将多个saga并行/串行起来，形成异步流
- 易于测试

缺点：   
- 体积庞大
- 功能过剩：其实有很多功能都很难能用到
- ts支持不友好
- 学习难度大

### **Redux怎么处理并行操作**
<font color="	#FF6347">使用redux-saga</font>。    

- takeEvery：可以让多个saga任务并行被fork执行
```js
import {
    fork,
    take
} from "redux-saga/effects"

const takeEvery = (pattern, saga, ...args) => fork(function*() {
    while (true) {
        const action = yield take(pattern)
        yield fork(saga, ...args.concat(action))
    }
})
```

- takeLastest
takeLastest不允许多个saga并行执行，一旦收到新的发起的action，就会取消前面的所有fork任务。<font color="	#FF6347">在处理AJAX请求的时候，如果只希望获取最后一个请求的响应，taskLastest变得非常有用</font>。
```js
import {
    cancel,
    fork,
    take
} from "redux-saga/effects"

const takeLatest = (pattern, saga, ...args) => fork(function*() {
    let lastTask
    while (true) {
        const action = yield take(pattern)
        if (lastTask) {
            yield cancel(lastTask) // 如果任务已经结束，则 cancel 为空操作
        }
        lastTask = yield fork(saga, ...args.concat(action))
    }
})
```

### Redux状态管理器和变量挂载到window中有什么区别
二者都是存储数据以供后期使用。
- Redux状态更改可以回溯，数据多了的时候可以清晰地知道改动在哪里发生，完整的提供了一套状态管理模式；而window不可以。

### Redux和VueX的区别和共同思想
1. 区别：
    - VueX改进了Redux中的Action和Reducer函数，以mutations变化函数取代Reducer，无需switch，只需要在对应的mutations中改变state的值即可
    - 由于Vue自动重新渲染的特性，无需subscribe重新渲染函数，只要生成新的state即可
    - VueX数据流的顺序是：View调用store.commit提交对应的请求到Store中对应的mutations函数 -> store改变

通俗的理解就是：<font color="	#FF6347">VueX弱化了dispatch，通过commit进行store状态的更改，取消了action的概念，不必传入特定的action形式进行指定变更；弱化reducer，基于commit参数直接对数据进行转变，使得框架变得更加简单</font>。

2. 共同思想：Redux和VueX都是以MVVM思想进行设计，将数据从视图层抽离出来，实现变化可预测、单一数据源。

### Redux中的connect有什么作用
<font color="	#FF6347">connect负责连接Redux和React</font>

1. 获取State：connect通过context获取Provider中store，通过store.getState()获取整个store tree上所有state。
2. 包装原组件
3. 监听Store tree变化：connect缓存了store tree中state的状态，通过当前state状态 和变更前 state 状态进行比较，从而确定是否调用 this.setState()方法触发Connect及其子组件的重新渲染。

## react-redux源码解析
![image](https://user-images.githubusercontent.com/70066311/168463150-ea397238-5119-49dc-ae80-3aa86b4d148d.png)


### 为什么要在`root`根组件上使用`react-redux`的`Provider`组件包裹
#### `Provider`到底做了什么
1. Provider创建subscription，context保存上下文
首先看Provider的源码
```js
/* provider 组件代码 */
function Provider({ store, context, children }) {
  /* 利用useMemo，跟据store变化创建出一个contextValue 包含一个根元素订阅器和当前store  */
  const contextValue = useMemo(() => {
    /* 创建了一个根 Subscription 订阅器 */
    const subscription = new Subscription(store)
    /* subscription 的 notifyNestedSubs 方法 ，赋值给  onStateChange方法 */
    subscription.onStateChange = subscription.notifyNestedSubs
    return {
      store,
      subscription
    } /*  store 改变创建新的contextValue */
  }, [store])
  /*  获取更新之前的state值 ，函数组件里面的上下文要优先于组件更新渲染  */
  const previousState = useMemo(() => store.getState(), [store])

  useEffect(() => {
    const { subscription } = contextValue
    /* 触发trySubscribe方法执行，创建listens */
    subscription.trySubscribe() // 发起订阅
    if (previousState !== store.getState()) {
      /* 组件更新渲染之后，如果此时state发生改变，那么立即触发 subscription.notifyNestedSubs 方法  */
      subscription.notifyNestedSubs()
    }
    /*   */
    return () => {
      subscription.tryUnsubscribe()  // 卸载订阅
      subscription.onStateChange = null
    }
    /*  contextValue state 改变触发新的 effect */
  }, [contextValue, previousState])
+
  const Context = context || ReactReduxContext
  /*  context 存在用跟元素传进来的context ，如果不存在 createContext创建一个context  ，这里的ReactReduxContext就是由createContext创建出的context */
  return <Context.Provider value={contextValue}>{children}</Context.Provider>
}
```
`provider`的作用是：
- 创建一个contextValue，里面包含一个创建出来的父级`Subscription`和`redux`提供的`store`
- 通过react上下文`context`和`contextValue`传递给子孙组件

### react-redux是怎么和redux契合，做到state改变更新视图的呢

### `provider`用什么方式存放当前的redux的store，又是怎么传递给每一个需要管理`state`的组件的？

### `connect`是怎么连接业务组件，然后传递组件更新函数的

### `connect`怎么通过第一个参数，来订阅与之对应的`state`的

### `connect`怎么样将props和redux的state合并的

## React事件机制
React基于浏览器机制实现了一套事件机制，包括：`事件注册`、`事件合成`、`事件冒泡`、`事件派发`等。

### **合成事件**
合成事件是react模拟DOM原生事件的一个事件对象，其优点如下：
1. 兼容所有浏览器，兼容性好
2. 方便react统一管理和进行事件处理。对于原生事件来说，浏览器会监听事件是否被触发，当事件触发时会创建一个事件对象，<font color="	#FF6347">当多个事件被触发时就会创建多个事件对象，这样存在内部分配的问题</font>。对于合成事件来说，<font color="	#FF6347">有一个专门事件池来管理事件的创建和销毁，当需要使用事件时，就会在事件池中复用对象，事件回调结束后，再销毁事件对象上的属性，以便于下次再复用对象</font>。

```js
// 原生事件 事件处理函数写法
<button onclick="handleClick()">按钮命名</button>
      
// React 合成事件 事件处理函数写法
const button = <button onClick={handleClick}>按钮命名</button>
```

虽然看似合成事件被绑定到DOM上，React并不会把合成事件直接绑定到真实节点上，而是把所有的事件挂载到document上，使用一个统一的事件监听器去监听。

### **事件代理**
React未将事件处理函数与对应的DOM节点直接关联，而是在顶层使用了一个<font color="	#FF6347">全局事件监听器</font>监听所有的事件。

<font color="	#FF6347">React会在内部维护一个映射表记录事件与组件事件处理函数的对应关系</font>。当某个事件触发时，React根据映射表将事件分派给指定的事件处理函数。当一个组件挂载与卸载时，相应的事件处理函数会自动被添加到事件监听器的内部映射表中或从表中删除。

<font color="	#FF6347">这个事件监听器维持了一个映射来保存所以组件内部的事件监听和处理函数。当组件挂载或卸载时，只是在这个统一的事件监听器上插入或删除一些对象</font>。

<font color="	#FF6347">当事件发生时，首先被这个统一的事件监听器处理，然后在映射里找到真正的事件处理函数并调用。这样做简化了事件处理和回收机制，效率也提升很大</font>。

### 合成事件
React中的onClick、onChange等事件是**合成事件**，并不是浏览器的原生事件。<font color="	#FF6347">这些事件并没有绑定到对应的真实DOM上，而是通过**事件代理**的方式，将所有事件绑定到了document上</font>。当事件发生并冒泡到document时，React将事件内容封装并交由真正的处理函数运行，这样做不仅可以<font color="	#FF6347">减少内存消耗</font>，还可以<font color="	#FF6347">在组件挂载销毁时统一订阅和移除事件</font>。  
可以使用**event.preventDefault**阻止事件冒泡。

![事件机制](https://user-images.githubusercontent.com/70066311/157618463-b5fc6510-f7f9-498f-9722-cf7458d6972c.jpg)

### 实现合成事件的目的
 - 合成事件是一个跨浏览器的原生事件包装器，赋予了跨浏览器开发的能力，解决了浏览器之间的兼容问题。
 - 对于原生浏览器事件来说，浏览器会给监听器创建一个事件对象，如果你有很多的事件监听，那么就需要分配很多的事件对象，造成高额的内存分配问题，但<font color="	#FF6347">对于合成事件来说，有一个事件池专门来管理它们的创建和销毁，当事件需要被使用时，就会从池子中复用对象，事件回调结束后，就会销毁事件对象上的属性，从而便于下次复用事件对象</font>。

### React的事件和普通的HTML事件有什么不同？
1. 事件的命名方式不同，原生事件为全小写，react事件为小驼峰
2. 事件函数处理语法不同，原生事件为字符串，react事件为函数
3. <font color="	#FF6347">react事件不能采用return false的方式来阻止浏览器的默认行为，而必须明确调用preventDefault()来阻止默认行为</font>

### react事件执行顺序
事件的执行顺序为<font color="#FF6347">原生事件先执行，合成事件再执行</font>。合成事件会冒泡到document上，所以**尽量避免原生事件和合成事件混用**。<font color="	#FF6347">如果原生事件阻止冒泡，那么就会导致合成事件不执行</font>。

### 事件绑定的方式
- 在render中使用bind()绑定
- 在render中使用箭头函数
- 在类组件的构造函数中使用bind()绑定
- 在定义事件函数时使用箭头函数绑定

**render方法中使用bind**
```js
class App extends React.Component {
  handleClick() {
    console.log('this > ', this);
  }
  render() {
    return (
      <div onClick={this.handleClick.bind(this)}>test</div>
    )
  }
}
```
<font color="	#FF6347">这种方式在组件每次render的时候都会重新进行bind()操作，影响性能</font>

**render方法中使用箭头函数**
```js
class App extends React.Component {
  handleClick() {
    console.log('this > ', this);
  }
  render() {
    return (
      <div onClick={e => this.handleClick(e)}>test</div>
    )
  }
}
```
<font color="	#FF6347">同样在每次render时都要生成新的方法，影响性能</font>。

**constructor中bind**
```js
class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    console.log('this > ', this);
  }
  render() {
    return (
      <div onClick={this.handleClick}>test</div>
    )
  }
}
```
<font color="	#FF6347">在constructor中预先bind当前组件，可以避免在render操作中重复绑定</font>。

**定义阶段使用箭头函数绑定**
```js
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  handleClick = () => {
    console.log('this > ', this);
  }
  render() {
    return (
      <div onClick={this.handleClick}>test</div>
    )
  }
}
```
<font color="	#FF6347">可以避免在render操作中重复绑定</font>。

**区别**
一、二的方式性能较差，三的写法过于冗余，因此<font color="	#FF6347">四是最优的事件绑定方式</font>。

### 重新学习React事件机制
#### 事件注册

![image](https://user-images.githubusercontent.com/70066311/170669506-b457c072-0114-4428-97b0-36387efede29.png)

- document上注册：在React组件挂在阶段，根据组件内的声明的事件类型（onclick、onchange等），在document上注册事件（通过addEventListener），并指定统一的回调函数dispatchEvent。换句话说，<font color="	#FF6347">document 上不管注册的是什么事件，都具有统一的回调函数 dispatchEvent</font>。所以对于同一种事件类型，不论在document上注册了几次，最终也会保留一个有效实例，这样可以减少内存消耗。<font color="	#FF6347">并不是所有的事件都被挂载到了document上，例如：``</font>

```js
function TestComponent() {
  handleFatherClick=()=>{
		// ...
  }
 
  handleChildClick=()=>{
		// ...
  }
 
  return <div className="father" onClick={this.handleFatherClick}>
	<div className="child" onClick={this.handleChildClick}>child </div>
  </div>
}
```

在上述代码中，事件类型都是`onClick`，由于React的事件委托机制，会指定统一的回调函数`dispatchEvent`，所以最终只会在`document`上保留一个`click`事件，类似`document.addEventListener('click', dispatchEvent)`，这里可以看出React的事件是在DOM事件流的冒泡阶段被触发执行。

- 存储事件回调：React为了在触发事件时可以查找到对应的回调去执行，会把组件内的所有事件统一的存放到一个对象中（映射表）。首先根据事件类型分类存储，例如click事件相关的统一存储在一个对象中，回调函数的存储采用键值对（key/value）的方式存储在对象中，key时组件的唯一标识id，value对应的就是事件的回调函数。

React这样做有两个好处：
1. 避免每次都要创建事件对象，减少了内存的消耗
2. 组件在挂载或销毁时统一订阅和移除事件

React的事件注册的关键步骤如下图：
![image](https://user-images.githubusercontent.com/70066311/172813179-3700eed6-fcfc-4564-8a56-d601f09a582f.png)

#### 事件触发
<font color="	#FF6347">React的事件触发只会发生在DOM事件流的冒泡阶段</font>，因为在`document`上注册时就默认是在冒泡阶段被触发执行。

其大致流程如下：
1. 触发事件，开始DOM事件流：事件捕获阶段、处于目标阶段、事件冒泡阶段
2. 当事件冒泡到`document`时，触发统一的事件回调函数`ReactEventListener.dispatchEvent`
3. 根据原生事件对象（nativeEvent）找到事件触发节点对应的组件
4. 开始事件的合成
    - 根据当前事件类型生成指定的合成对象
    - 封装原生事件和冒泡机制
    - 查找当前元素以及它所有父级
    - 在`listenerBank`查找事件回调并合成到`event`
5. 批量执行合成事件内的回调函数
6. 如果没有阻止冒泡，会将继续进行 DOM 事件流的冒泡（从 document 到 window），否则结束事件触发

![image](https://user-images.githubusercontent.com/70066311/172816224-25b306bc-800d-482e-ab7b-fbab42719c43.png)

![image](https://user-images.githubusercontent.com/70066311/172816154-d6927ce5-9766-4ca3-a449-3d6f7b3a589c.png)


## React 高阶组件
**高阶组件**：高阶组件（HOC）就是一个函数，接收一个或多个组件作为参数，并返回一个新的组件。通常来说高阶组件会将额外的数据或功能添加到原本的组件中。本质上是一个<font color="#FF6347">装饰者设计模式</font>。高阶组件的主要功能是封装并分离组件的通用逻辑，让通用逻辑在组件间更好的被复用。

## React.Component 和 React.PureComponent 的区别
PureComponent表示一个纯组件，可以<font color="#FF6347">减少render渲染次数，从而提高组件的性能</font>。  
在React中，可以通过shouldComponentUpdate()函数执行reture false来阻止页面的更新，减少不必要的render。  
而PureComponent会自定执行shouldComonentUpdate。PureComponent只会进行浅比较，比较数据地址，不会比较数据内容是否一致。**如果数据具有深层次结构，利用对象等形式，不推荐使用PureComponent**。

## 哪些方法会触发 React 重新渲染
### *setState()方法被调用
当执行setState()方法时，组件会调用render使页面重新渲染。<font color="#FF6347">当传入null时，并不会重新渲染页面</font>。 
### *父组件的重新渲染
只要父组件重新渲染了，即使传入子组件的props未发生变化，子组件也会重新渲染。

## React如何判断什么时候重新渲染组件
通过shouldComponentUpdate()生命周期钩子函数的返回值true/false来判断是否需要重新渲染组件。

## React声明组件的方式
React声明组件主要有三种方式：
- 函数式组件（无状态组件）
- ES5原生方式：React.createClass定义的组件
- ES6：extends React.Component定义组件

### *无状态函数式组件
函数式组件只负责传入props来展示，不涉及到state状态的操作，组件不会被实例化，整体渲染性能得到提升，不能访问this对象，不能访问生命周期函数。   
可以通过useState()给函数式组件添加状态。

### *React.createClass与React.Component区别：
1. 创建语法不同：
```js
// React.createClass
import React from 'react';

const Contacts = React.createClass({  
  render() {
    return (
      <div></div>
    );
  }
});

export default Contacts;  
```

```js
// React.Component
import React from 'react';

class Contacts extends React.Component {  
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div></div>
    );
  }
}

export default Contacts;  
```

2. 设置propType 和 getDefaultProps不同

React.createClass：通过proTypes对象和getDefaultProps()方法来设置和获取props.
```js
// React.createClass
import React from 'react';

const Contacts = React.createClass({  
  propTypes: {
    name: React.PropTypes.string
  },
  getDefaultProps() {
    return {

    };
  },
  render() {
    return (
      <div></div>
    );
  }
});

export default Contacts;  
```

React.Component：通过设置两个属性propTypes和defaultProps
```js
// React.Component
import React form 'react';
class TodoItem extends React.Component{
    static propTypes = { // as static property
        name: React.PropTypes.string
    };
    static defaultProps = { // as static property
        name: ''
    };
    constructor(props){
        super(props)
    }
    render(){
        return <div></div>
    }
}
```

3. 状态定义不同
React.createClass：通过getInitialState()方法返回一个包含初始值的对象
```js
// React.createClass
import React from 'react';
let TodoItem = React.createClass({
    // return an object
    getInitialState(){ 
        return {
            isEditing: false
        }
    }
    render(){
        return <div></div>
    }
})
```

React.Component：通过state设置初始状态
```js
// React.Component
import React from 'react';
class TodoItem extends React.Component{
    state = { 
        isEditing: false
    }
    render(){
        return <div></div>
    }
}
```

4. this的指向不同
     - React.createClass：会正确绑定this
     - React.Component：由于使用了 ES6，属性并不会自动绑定到 React 类的实例上。

## 有状态组件与无状态组件
| |  有状态组件   | 无状态组件  |
| ---- |  ----  | ----  |
| 特点 | 是类组件、可以使用this、可以使用生命周期函数、根据外部传入的props和自身的state进行渲染、若频繁触发生命周期函数会影响性能 | 不依赖自身state、可以避免使用this、性能更高、只根据props进行渲染 |
| 使用场景 | 需要使用状态或需要使用状态操作组件时时 | 组件不需要管理state，纯展示 |
| 总结 | 类组件可以维护自身的状态变量，让开发者在组件的不同阶段对组件进行更多的控制  | 视图与数据解耦分离、专注于render |

### React和Vue在设计上有什么异同：
#### 同
- 都使用了虚拟DOM
- 都有自己的diff算法
- 都是比较轻量级的前端开发工具
- 都实现了单向数据流
- 都采用组件化的开发思想

#### 异
- Templating vs JSX
React的思想是`all in js`，通过js来生成html；而Vue是把html、css、js组合到一起，使用`模板引擎`来处理。Vue的`模板引擎`支持指令、过滤器等模板功能，简化了渲染流程；React中只能用js来操作DOM，页面渲染、条件判断等都需要js来控制，更加复杂。

- 单向绑定与双向绑定
单向绑定指的是：View层与Model层之间的映射关系，Model的更新会触发View的更新，而View的更新不会触发Model的更新，它们的作用是单向的。如下图所示。一个父组件下有两个子组件1和子组件2，父组件可以向子组件传递数据。假如子组件都获取到了父组件的name，在子组件1中对name重新修改之后，子组件2和父组件中的值并不会发生改变，这就是单向绑定。子组件不能直接改变父组件的状态。但反过来，如果是父组件中的name修改了，当然两个子组件中的name也就改变了。

![image](https://user-images.githubusercontent.com/70066311/175448458-4eeac4c1-ef3e-4b84-bdf0-0a2726f08547.png)

**单向绑定的优缺点：**
- 优点：所有状态变化都可以被记录、跟踪，状态变化通过手动调用出发，源头易追溯
- 缺点：有很多的样板代码，代码量会上升

双向绑定是Model的更新会触发View的更新，View的更新也会触发Model的更新，它们的作用是相互的。

React采用单向绑定：
![image](https://user-images.githubusercontent.com/70066311/175441717-15a32830-5d59-4e5d-a0ab-5deb32a4b749.png)

用户访问View，用户与页面交互引起数据的变化，React通过setState对State进行更新。React无法直接通过View修改State，必须通过setState进行操作，这样更加清晰可控。

而Vue支持单向绑定和双向绑定
单向绑定是通过`v-bind`和插值表达式`{{data}}`。在vue中，父组件使用props将值传递给子组件后，子组件并不能直接修改从父组件传递过来的值，而是通过$emit去通知父组件进行修改。所以vue是属于单项数据流的。

双向绑定是通过表单`v-model`，用户对view层的更改会直接同步到`model`层。所存在的双向绑定`v-model`只不过是`v-bind:value` 和 `v-on:input`的语法糖。
```js
<input  v-model="userName" />
<input v-bind:value="userName" v-on:input="userName = $event.target.value" />
```

**双向绑定的优缺点：**
- 优点：Vue在操作表单时使用v-model，可以减少onChange事件的处理，减少代码量
- 缺点：无法很好的跟踪双向绑定的数据变化

- 框架本质不同
Vue是MVVM模式的一种；而React只针对View层

- 状态管理
state对象在react应用中是不可变的，需要使用setState()方法更新状态；在Vue中，state对象并不是必须的，数据由data属性在Vue对象中进行管理。

- 性能优化
在react中，当父组件重新渲染时，也会触发子组件重新渲染，为了避免不必要的子组件重新渲染，你需要使用React.memo、PureComponent或实现 shouldComponentUpdate。

在vue中通过双向绑定的形式为每一个`data`属性建立一个依赖，以后只要修改`data`的任何一个属性，就会触发视图的重新渲染，而且是精确的修改对应的vdom。这就不需要开发人员对整个性能进行优化，允许他们更专注于构建应用程序本身。而vue这么做也有个缺点就是在大型应用中可能会有很多data，这样会造成对应的依赖较多，导致卡顿，所以大型应用中一般使用react。

# 场景题
## 如何实现登录
### **登录设计**
#### Cookie+Session

HTTP 是一种无状态的协议，客户端每次发送请求时，首先要和服务器端建立一个连接，在请求完成后又会断开这个连接。这种方式可以节省传输时占用的连接资源，但同时也存在一个问题：每次请求都是独立的，服务器端无法判断本次请求和上一次请求是否来自同一个用户，进而也就无法判断用户的登录状态。

```
Cookie 是服务器端发送给客户端的一段特殊信息，
这些信息以文本的方式存放在客户端，
客户端每次向服务器端发送请求时都会带上这些特殊信息。
```

有了 Cookie 之后，服务器端就能够获取到客户端传递过来的信息了，如果需要对信息进行验证，还需要通过 Session。

```
客户端请求服务端，服务端会为这次请求开辟一块内存空间，
这个便是 Session 对象。
```

**Cookie + Session  实现流程 ：**      
用户首次登录时：
![在这里插入图片描述](https://img-blog.csdnimg.cn/29eff433af81485d87f83f9888ef8f7f.png)
1. 用户访问 a.com/pageA，并输入密码登录。
2. 服务器验证密码无误后，会创建 SessionId，并将它保存起来。
3. 服务器端响应这个 HTTP 请求，并通过 Set-Cookie 头信息，将 SessionId 写入 Cookie 中。

第一次登录完成之后，后续的访问就可以直接使用 Cookie 进行身份验证了：
![在这里插入图片描述](https://img-blog.csdnimg.cn/7d41f6d86dd04255b15801ed91c44717.png)
1. 用户访问 a.com/pageB 页面时，会自动带上第一次登录时写入的 Cookie。
2. 服务器端比对 Cookie 中的 SessionId 和保存在服务器端的 SessionId 是否一致。
3. 如果一致，则身份验证成功。

Cookie+Session存在的问题
- 由于服务器端需要对接大量的客户端，也就需要存放大量的 SessionId，这样会导致服务器压力过大。
- 如果服务器端是一个集群，为了同步登录态，需要将 SessionId 同步到每一台机器上，无形中增加了服务器端维护成本。
- 由于 SessionId 存放在 Cookie 中，所以无法避免 CSRF 攻击。
- Cookie无法跨域，难以实现单点登录


#### Token登录

Token 是服务端生成的一串字符串，以作为客户端请求的一个令牌。当第一次登录后，服务器会生成一个 Token 并返回给客户端，客户端后续访问时，只需带上这个 Token 即可完成身份认证。

**token的实现流程：**      
用户首次登录时：
![在这里插入图片描述](https://img-blog.csdnimg.cn/54d6b9b14eba476fae3b1d7ed5ff5fc9.png)
1. 用户输入账号密码，并点击登录。
2. 服务器端验证账号密码无误，创建 Token。
3. 服务器将 Token 返回给客户端，由***客户端自由保存***。

后续页面访问时：
![在这里插入图片描述](https://img-blog.csdnimg.cn/7ffb8dbb2d2245ae9c7f2223d2c919f8.png)
1. 用户访问 a.com/pageB 时，带上第一次登录时获取的 Token。
2. 服务器端验证 Token ，有效则身份验证成功。

**Token 机制的特点**：      
- 服务器端不需要存放 Token，所以不会对服务器端造成压力，即使是服务器集群，也不需要增加维护成本。
- Token 可以存放在前端任何地方，可以不用保存在 Cookie 中，提升了页面的安全性。
- Token 下发之后，只要在生效时间之内，就一直有效，如果服务器端想收回此 Token 的权限，并不容易。
- Token在跨域后不会存在信息丢失的问题。
- 不会遭受CSRF攻击

#### Token的生成方式
最常见的 Token 生成方式是使用 JWT（Json Web Token），JWT的本质就是一个字符串，它将用户的信息保存到一个JSON字符串中，然后编码得到一个Token，并且这个Token带有签名信息，在接收后可以校验是否被篡改。

#### JWT的结构
JWT由Header（JWT头）、Payload（有效载荷）和Signature（签名）组成。

- Header中存储着一些描述信息
- Payload中存放着需要传递的数据，一般会把`用户信息数据`和`token的有效期`放在payload中
- Signature：签名部分，确保数据不被篡改

#### JWT的认证流程如下：
1. 首先，前端通过Web表单将自己的用户名和密码发送到后端的接口，这个过程一般是一个POST请求。建议的方式是通过SSL加密的传输(HTTPS)，从而避免敏感信息被嗅探
2. 后端核对用户名和密码成功后，将包含用户信息的数据作为JWT的Payload，将其与JWT Header分别进行Base64编码拼接后签名，形成一个JWT Token，形成的JWT Token就是一个如同lll.zzz.xxx的字符串
3. 后端将JWT Token字符串作为登录成功的结果返回给前端。前端可以将返回的结果保存在浏览器中，退出登录时删除保存的JWT Token即可
4. 前端在每次请求时将JWT Token放入HTTP请求头中的Authorization属性中(解决XSS和XSRF问题)
5. 后端检查前端传过来的JWT Token，验证其有效性，比如检查签名是否正确、是否过期、token的接收方是否是自己等等
6. 验证通过后，后端解析出JWT Token中包含的用户信息，进行其他逻辑操作(一般是根据用户信息得到权限等)，返回结果

#### 如何增加JWT的安全性
- 将JWT Token放在请求头中传输，避免网络劫持
- 为了避免token被劫持，使用HTTPS传输
- JWT可以使用暴力穷举破解，所以应该定期更换服务器的哈希签名密钥

#### token的缺点
1. 如果攻击者劫持了请求头，那么也会获得token
2. JWT可以被暴力穷举破解
3. token一旦下发很难收回，因为token是在客户端的，服务器很难做到收回用户的token
4. token需要进行签名，性能稍差

### token过期问题
#### 401错误的场景
有两种情况会出现`401`状态码：
- 未登录用户做一些需要权限才能做的操作，代码会报出401错误，这种情况下，应该让用户回到登录页
- 登录用户的token过期了
#### token过期
在用户首次登录成功后，服务器会返回一个token，token在后续请求时通过请求头带上。token一般有一个有效期，这个有效期一般由后端决定。token一旦过期就会被网关拦截。

#### refresh_token和token
当用户登录成功后，返回的token有两个值：

![image](https://user-images.githubusercontent.com/70066311/171977549-e150f433-8ce8-418f-b696-edbcb615febd.png)

- token：在访问一些接口时，需要传入token
- refresh_token：当token的有效期过了之后，可以使用它去请求一个特殊接口（由后端决定），并返回一个新的token回来，以替换过期的token。

#### refresh_token
服务端不需要刷新 Token 的过期时间，一旦 Token 过期，就反馈给前端，前端使用 Refresh Token 申请一个全新 Token 继续使用。这种方案中，服务端只需要在客户端请求更新 Token 的时候对 Refresh Token 的有效性进行一次检查，大大减少了更新有效期的操作，也就避免了频繁读写。当然 Refresh Token 也是有有效期的，但是这个有效期就可以长一点了，比如，以天为单位的时间。refresh token，也是加密字符串，并且和token是相关联的。相比获取各种资源的token，refresh token的作用仅仅是获取新的token，因此其作用和安全性要求都大为降低，所以其过期时间也可以设置得长一些。

#### 响应拦截器

![image](https://user-images.githubusercontent.com/70066311/171977583-1f43c22d-76e3-490c-b992-dd428c2f3734.png)

在响应拦截器中：
- 对于某次请求A，如果是401（2）
    - 有refresh_token，用refresh_token去请求返回新的token（3）
        - 新token请求成功（4）
            - 更新本地token（5）
            - 再发一次请求A（6）
        - 新token请求失败
            - 携带请求地址，跳转到登录页
    - 没有refresh_token，说明没有登陆
        - 携带请求地址跳转到登录页


### **单点登录**
单点登录就是公司在内部搭建一个认证中心，公司下的所有产品都在认证中心进行登录，当一个产品在认证中心登录后，那么该公司的其他产品也会保留这个登录状态，使用其他产品时就不需要在登录了。

#### 实现机制
当用户第一次访问应用系统的时候，因为还没有登录，会被引导到认证中心进行登录；根据用户提供的登录信息，认证系统进行身份校验，如果通过校验，应该返回给用户一个认证的凭据`ticket`；用户再访问别的应用的时候，就会将这个`ticket`带上，作为自己认证的凭据，应用系统接受到请求之后会把`ticket`送到认证系统进行校验，检查`ticket`的合法性。如果通过校验，用户就可以在不用再次登录的情况下访问应用系统2和应用系统3了。

### **第三方登录**
第三方账号进行登录，比如抖音可以使用微信的帐号登录。

## 如何给多个按钮绑定点击事件？如何优化？
事件委托方面说

## 从多个角度去考虑如何防止用户频繁的点击触发向后台获取数据？
使用缓存、防抖节流、状态码

## 在浏览器输入 URL 并回车后，如果页面迟迟没有出现，怎么去排查问题？
可以进行抓包，排查思路有：
1. 先确定浏览器是否可以访问其他网站，如果不可以，说明是客户端网络自身的问题，然后检查客户端网络配置。
2. 如果客户端没问题，就抓包确认DNS是否解析出了IP地址，如果没有解析出IP地址，<font color="#FF6347">说明是域名写错了</font>
3. 如果解析出了IP地址，抓包确认有没有和服务器建立三次握手，如果能成功建立三次握手，并且发出了HTTP请求，但是就是没有显示页面，可以查看服务端返回的响应码：
    - 404：检查URL输入的是否正确
    - 500：服务器内部错误
    - 200：可能是前端代码有问题，导致页面无法渲染
4. 如果访问速度很慢，很久才能显示出来，<font color="#FF6347">客户端的网口流量是否太大，导致TCP丢包</font>。或者加载JS文件造成网络拥塞、CSS文件还未加载完导致JS有对样式进行操作，不得不等待CSS文件加载完成。

## 一个显示股票的页面，有一个表格，表格里有很多行，如何动态的改变的某行某列的数据，用到了哪些api，如何去和后台进行数据的交互？

# 开放性试题
## 如何提升兼容性问题
### CSS兼容
- 不同浏览器的标签默认的`padding`和`margin`不同。解决方法有：
    1. 使用`*{margin:0;padding:0;}`， 但是这种方法性能差
    2. 引入样式重叠`reset.css`，把所有标签的默认样式清除掉
- 加浏览器前缀兼容早期的浏览器。例如：
    1. -moz-：兼容火狐浏览器
    2. -webkit-：兼容safari、谷歌等浏览器
    3. -ms-：兼容IE浏览器
- 使用媒体查询，适应不同设备，实现响应式布局。
- 图片之间有间距：<font color="#FF6347">使用float为图片布局</font>

### JS兼容
- 获取滚动高度的兼容性问题。<font color="#FF6347">一些浏览器将scrollTop绑定在body上，一些绑定在HTML上</font>。解决方式就是：`let scrollTop = document.body.scrollTop || document.documentElement.scroll`
- 事件绑定兼容性问题。浏览器事件分为DOM0级、DOM2级和IE事件模型，DOM2级事件绑定支持大多数的浏览器，而对于IE8及以下的浏览器不支持DOM2级事件绑定，他有自己的绑定方法attachEvent，这时就需要进行判断了。

## 为什么CSS要放在头部？CSS可不可以放在底部？为什么JS放在底部？JS可不可以放在头部
- CSS放在头部可以增加页面性能。在加载HTML生成DOM tree时，就可以同时对DOM tree进行渲染，这样就可以防止白屏、闪屏或布局混乱。CSS文件是在HTML文件解析时并行解析的。
- 如果CSS放在底部，那么要先渲染DOM，然后加载CSS后重新渲染DOM，这样就渲染了两次DOM，影响了性能。
- JS放在底部可以防止阻塞后面资源的加载。因为JS在加载后会立即执行，此时可能DOM还没有完全渲染到页面上，那么执行JS会阻塞DOM的渲染，导致用户等待的时间较长。所以应该将JS放在底部以减少DOM渲染的时间，或者给JS加上defer属性。
- 可以放在头部，但是要加上defer或者async属性。

## react怎么做会在更新时陷入死循环
1. 在事件绑定时传入带参数的函数
```jsx
class Demo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isToggleOn: true
    }
  }
  render() {
    // console.log(this);
    return (
      <button onClick={this.toggleBtnClick(this, this.state.isToggleOn)}>
        {this.state.isToggleOn ? 'Button On' : 'Button Off'}
      </button>
      );
    }
  toggleBtnClick(isToggleOn, e) {
    console.log('Now state is' + isToggleOn + ' before to convert.');
    this.setState({
      isToggleOn: !isToggleOn
    })
  }
}
```
解决方法：
  - 使用bind进行调用
  - 使用箭头函数调用

2. useEffect等hooks
在useEffect回调函数中使用了setState()方法，然后数组中绑定了该state，会导致进入无限循环
3. 在`render`外使用了setState
4. 在`componentDidUpdate`中使用setState
```js
class Demo extends React.Component {
      constructor(props) {
        super(props)
        this.state = {
          isToggleOn: 0
        }
      }

      componentDidUpdate(props, state, snapshot) {
        console.log(1);
        this.setState({ isToggleOn: this.state.isToggleOn + 1 })
      }

      handleClick = () => {
        this.setState({ isToggleOn: this.state.isToggleOn + 1 })
      }

      render() {
        return (
          <div>
            <button onClick={this.handleClick}></button>
            {console.log(111)}
          </div>
        )
      }
}
```
5. 在`render`使用setState
6. 在`getDerivedStatefromprops`使用setState


## React中如何提高组件中渲染效率的
有三种方式：
1. shoudleComponentUpdate
2. PureComponent
3. React.mome

### shoudleComponentUpdate
通过`shoudleComponentUpdate`生命周期函数来比对`state`和`props`，确定是否要重新渲染，默认情况下返回`true`表示重新渲染。

### PureComponent
通过对`props`和`state`的浅比较结果来实现`shouldComponentUpdate`。

### memo
用来缓存组件，避免不必要的渲染。

## 项目中如何做可以做到性能优化
- 避免使用内联函数
- 使用React Fragments避免额外标记
- 使用Immutable
- 懒加载
- 事件绑定方式
- 服务端渲染

### 避免使用内联函数
如果使用内联函数，则每次调用`render`函数时都会创建一个新的函数实例，例如：
```js
import React from "react";

export default class InlineFunctionComponent extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome Guest</h1>
        <input type="button" onClick={(e) => { this.setState({inputValue: e.target.value}) }} value="Click For Inline Function" />
      </div>
    )
  }
}
```

我们应该在组件内部创建一个函数，并将事件绑定到该函数本身。这样每次调用`render`时就不会创建单独的函数实例，如下：
```js
import React from "react";

export default class InlineFunctionComponent extends React.Component {
  
  setNewStateData = (event) => {
    this.setState({
      inputValue: e.target.value
    })
  }
  
  render() {
    return (
      <div>
        <h1>Welcome Guest</h1>
        <input type="button" onClick={this.setNewStateData} value="Click For Inline Function" />
      </div>
    )
  }
}
```

### 使用 React Fragments 避免额外标记
用户创建新组件时，每个组件应具有单个父标签。父级不能有两个标签，所以顶部要有一个公共标签，所以我们经常在组件顶部添加额外标签`div`。

这个额外标签除了充当父标签之外，并没有其他作用，这时候则可以使用`fragement`。

其不会向组件引入任何额外标记，但它可以作为父级标签的作用，如下所示：
```js
export default class NestedRoutingComponent extends React.Component {
    render() {
        return (
            <>
                <h1>This is the Header Component</h1>
                <h2>Welcome To Demo Page</h2>
            </>
        )
    }
}
```

### 事件绑定方式
类组件中在`constructor`中使用`bind`或`箭头函数`绑定事件之会生成一个实例；在`render`中会在每次`render`中都生成新的实例。

## 在项目中如何捕获异常
1. console.log()
2. try...catch
3. 在chrome F12中的源码按ctrl P搜索报错的文件，打断点调试
4. 如果是请求的话查看请求的状态码
5. 使用`componentDidCatch()`打印错误信息

|  对象   | 返回值  |
|  ----  | ----  |
| Array  | 返回数组本身 |
| Boolean  | 布尔值 |
| Date  | 存储的时间是从 1970 年 1 月 1 日午夜开始计的毫秒数 UTC |
| Function  | 函数本身 |
| Number | 数字值 |
| Object  | 对象本身 |
| String  | 对象本身 |
