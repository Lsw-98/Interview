# 面试八股文记录

注:  
    &emsp;&emsp;整个库的文档都是自己整理，自己手码的，有错误的地方，请指出，谢谢!!!。如果你喜欢的话，麻烦点一个star吧，谢谢!!!  
    &emsp;&emsp;下面进行正题。  

# CSS篇

## 盒子模型
盒子模型分为标准盒子模型和IE盒子模型，
 - 标准盒子模型包括4个部分：
     margin、border、padding、content
 - IE盒子模型包括2个部分：
     margin、content(padding、border、content)

### *如何转化盒子模型
    标准盒子模型：box-sizing: content-box  
    IE盒子模型： box-sizing:border-box  

### *两者的区别
 - 标准盒子模型的宽度为border * 2 + padding * 2 + content(width)
 - IE盒子模型为border * 2 + padding * 2 > width ? border + padding : width

## height和line-height的区别
### *height
 - height是整个盒子的高度
### *line-height
 - line-height是一行文字的高度，盒子的高度 = 行数 * 行高

    如果height === line-height，那么文字会居行中显示

## CSS选择器
 - 通配（*）
 - id选择器（#）
 - 类选择器（.）
 - 标签选择器
 - 相邻选择器（+）
 - 后代选择器(ul li)
 - 子元素选择器（>）
 - 属性选择器（a[href]）

### *CSS属性哪些可以继承
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


### *CSS属性哪些不可以继承
    border、margin、padding

## CSS优先级算法问题
    !important > 内联样式 > id > class > 标签 > 通配 

### *CSS权重计算
首先我给每个CSS选择器赋一个权重：
 - !important权重为10000
 - 内联样式权重为：1000
 - id为：100
 - class、属性选择器、伪类选择器：10
 - 标签、伪元素选择器：1
 - 通配、后代、子选择器、兄弟选择器：0

然后计算每个样式的权重值，权重大的优先

### *注意事项
1. 继承得到的样式的优先级最低

## 用CSS画一个三角形    
1.可以使用border(边框)画，设置边框三边为透明，另一边不透明
```html
<style>
  div {
    width: 0;
    height: 0;
    border: 100px solid transparent;
    border-right: 100px solid #ccc;
  } 
</style>

<div></div>
```

2.使用:after画
```html
<style>
  div:after {
    content: '';
    display: inline-block;
    width: 0;
    height: 0;
    border: 10px solid transparent;
    border-left: 10px solid coral;
  }
</style>

<div></div>
```

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

## display有哪些属性，作用是什么？
  display: none   - 表示该元素不会显示，但盒子还在DOM中    
  display: block  - 把某元素转化为块元素，会占一行，<font color="	#FF6347">默认宽度为父元素宽度，可以设置宽高</font>  
  display: inline - 把某元素转化为行内元素，<font color="	#FF6347">默认宽度为内容宽度，不可以设置宽高，同行显示 </font>  
  display: inline-block - 把某元素转化为行内块元素  
  display: list-item - 像块级元素一样显示，但会加上一个标记，例如：  
  ![list-item](https://user-images.githubusercontent.com/70066311/157609326-04ade374-811f-429f-a68a-0ce65da62d21.png)  
  display：table - 将元素当作表格使用，<font color="	#FF6347">默认宽度为父元素宽度，可以设置宽高</font>    
  display: inherit - 继承父元素的display属性

## 行内元素和块级元素
|  |  行内元素   | 块级元素  |
| ---- |  ----  | ----  |
| 可否设置宽高 | 设置宽高无效，宽高为内容宽高  | 可以设置宽高 |
| 可否设置padding和margin | 可以设置水平方向的、不可设置垂直方向的  | 可以设置任意方向的padding和margin |
| 可否自动换行 | 不会自动换行  | 自动换行 |
| 排列方式 |   | 一块占一行，从上到下排列 |


## BFC规范
BFC(块级格式化上下文)就是页面上一个隔离的独立容器，里面的子元素不会影响到外面的元素

### *BFC布局规则
 - 内部盒子在垂直方向，一个接一个的放置
 - Box垂直方向的距离由margin决定，属于同一个BFC的两个相邻Box的margin会发生重叠
 - 计算BFC的高度时，浮动元素也参与计算
 - 每个Box的margin box的左边，与包含块border box的左边相接触（对于从左往右的格式化 ，否则相反）。即使存在浮动也是如此
 - BFC的区域不会与float box重叠

### * 如何创建BFC
 - float的值不为none
 - position的值不为static或者relative
 - overflow的值不为visible
 - display的值为inline-block、table-cell、flex、table-caption、inline-flex


 ## 如何清除浮动
 1. 使用BFC
 2. 使用:after

 ### *:before 和 :after
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

## position有哪些值，分别根据什么定位

- position: fixed;   - 固定定位，相对于窗口定位，不管浏览器怎么滚动
- position: relative;   - 相对于自身的位置进行定位，不脱离文档流
- position: absolute;   - 相对第一个有relative的父元素进行定位，脱离文档流


## reset.css
reset是一个css文件，可以重置css样式

## Normalize.css
Normalize.css：可以增强跨浏览器渲染的一致性

## sprite的优缺点
### *什么是sprite
把多个小图标合并为一个大图片

### *优点
减少了http请求的次数，提升了性能

### *缺点
可维护性差（例如图片位置进行修改或内容宽高修改）

## 隐藏元素的方式
1. display:none是彻底消失，<font color="	#FF6347">不在文档流中占位，浏览器也不会解析该元素，不会响应绑定事件，子节点不会继承</font>。  
2. visibility:hidden是视觉上消失了，可以理解为透明度为0的效果，<font color="	#FF6347">在文档流中占位，浏览器会解析该元素，不会响应绑定事件，子节点会继承</font>。  
3. opacity:0将透明度设置为0，以此来实现元素的隐藏，<font color="	#FF6347">会响应绑定的事件</font>。  
4. z-index:负值是其他元素覆盖该元素，实现隐藏  
 - 使用visibility:hidden比display:none性能更好，<font color="	#FF6347">当display进行切换属性时，页面会发生回流，造成文档重排；而visibility切换时不会引起回流，只会引起本元素重绘</font>。

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

## opacity和rgba的区别
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

## link和@import的区别
两者都是外部引用CSS的方式，区别如下：
1. link时XHTML标签，除了可以引用CSS还可以引用其他文件；@import只能引用CSS文件
2. link兼容性比@import更好
3. link在引入CSS时，在页面载入的同时进行加载；@import要等页面完全加载完后再加载CSS
4. link可以使用JS控制DOM改变样式；@import不可以。

## transiton和animation的区别
 - transition是过度属性，在某些时候触发的事件例如输入框得到焦点、失去焦点等。
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

## margin 和 padding 的使用场景
- 需要在border外侧添加空白，且空白处不需要背景色时，使用margin
- 需要在border内测添加空白，且空白处需要背景色时，使用padding

## line-height的三种赋值方式
1. 单位：使用px为固定值，em会参考父元素font-size值计算自身行高
2. 数字：按比例传给后代，例如父元素行高为1.5，子元素字体为18px，则子元素的行高为1.5 * 18 = 24px
3. 百分比：按计算后的值传给后代

## <font color="	#FF6347">CSS优化性能的方法</font>
### *<font color="	#FF6347">加载性能</font>
1. css压缩
2. 使用单一样式：尽量使用margin-left: 10px这种的单一样式，比使用margin:left 10px效率更高
3. 使用link，少使用@import。因为link是在页面加载的同时进行加载，而@import要等页面加载完后再加载CSS文件

### *<font color="	#FF6347">选择器性能</font>
1. 关键选择器：尽量使用类、id选择器，少使用标签、后代选择器
2. 避免无关的选择器规则
3. 避免使用通配选择器
4. 尽量多使用class
5. 少使用后代选择器，因为这样做会增加选择器的深度
6. 了解一些可继承的属性，避免重复定义

### *<font color="	#FF6347">渲染性能</font>
1. 属性值为0时，不要加单位
2. 慎重使用浮动、定位等高性能属性
3. 减少页面的重排、重绘
4. 避免选择器深层嵌套

### *<font color="	#FF6347">可维护性、健壮性</font>
1. 将具有相同属性的CSS代码抽离出来，提高CSS可维护性
2. 将CSS定义到外部文件，做到样式与内容分离

## z-index属性
在有两个重叠的标签时，想要一个在另一个上方或下方出现，z-index的值越大，就越在上层。使用z-index属性需要position属性是relative、absolute或fixed。
z-index属性在下列情况会失效：
1. 若父元素的position为relative，子元素的z-index就会失效
2. 元素的position属性不是relative、absolute或fixed
3. 元素在设置了z-index的同时还设置了float浮动。去除float，改为display:inline-block

## 重绘与重排
### *重排
<font color="	#FF6347">当DOM的变化引起了元素几何属性的变化时</font>，比如：改变元素的宽高、元素的位置等，导致浏览器不得不重新计算元素的几何属性，并重新构建渲染树，这个过程为重排

### *重绘
完成重排后，将重新构建的渲染树渲染到页面上，这个过程称为重绘。  

<font color="	#FF6347">重排负责元素的几何属性更新，重绘负责元素的样式更新。重排必然会带来重绘，但重绘不一定带来重排，例如改变背景颜色，不会引起重排，但会带来重绘。</font>

## 定位与浮动
### *浮动的工作原理
- 浮动的元素会脱离文档流，不占据空间（引起高度塌陷问题）
- 浮动元素碰到包含它的边框或其他浮动元素的边框会停留

当元素浮动后，不会影响块级元素的布局，只会影响内联元素布局。当包含框的高度小于浮动框的时候，此时就会出现**高度塌陷**。详细代码见"/css/定位与浮动/02_高度塌陷.html"。

### *浮动引起的问题
- 父元素的高度无法被撑开，影响与父元素同级的元素
- 与浮动同级的非浮动元素会会紧随浮动元素之后

### *清除浮动的方式
- 给父元素设置height属性
- 在最后一个浮动元素之后加一个空的div，给该div加上<font color="	#FF6347">clear: both</font>属性
- 给包含浮动元素的父元素加上<font color="	#FF6347">overflow: hidden 或者 overflow: auto</font>属性
- 给父元素添加伪元素::after
```js
.father::after{
  content: "";
  display: block;
  clear: both;
}
```

### *BFC（块级格式化上下文）
如果一个元素触发BFC的条件，那么BFC中的元素布局不受外部影响。

### *触发BFC的条件
- overflow的值为: hidden、auto、scroll
- 元素设置浮动
- 元素设置绝对定位：position：absolute、fixed
- display设置为inline-block、table-cell、table-caption、flex

### *BFC的作用
1. 解决margin重叠问题。
2. 解决高度塌陷问题。
3. 创建自适应两栏布局。

### *margin重叠问题
两个块级元素的上下边距可能会合并为一个外边距，其大小会取边距值大的那个。<font color="	#FF6347">浮动元素与绝对定位这种脱离文档流的元素外边距不会折叠，重叠只会出现在垂直方向上</font>。

### 解决margin重叠的方法
**兄弟元素之间**
- 底部元素变为行内盒子：display：inline-block
- 底部元素设置浮动
- 底部元素的position的值为:absolute/fixed

**父子元素之间**
- 父元素加上overflow: hidden
- 父元素添加透明边框
- 子元素变为行内盒子：display：inline-block
- 子元素加入浮动或定位

## 常见的CSS布局单位
1. px  
px是屏幕能显示的最小区域。
2. em和rem  
em和rem都是相对长度单位。em是相对于父元素，rem相对于root。
    - em：文本相对长度单位，相对父元素字体大小的倍数。相对于当前对象内文本的字体尺寸。如果当前行内文本的字体尺寸未被设置，则相对于浏览器默认字体尺寸（16px）进行设置。
    - rem：相对于 根元素的字体大小的倍数。使用rem可以实现响应式布局，当屏幕分辨率发生变化时，元素也随之变化。
3. %  
通过%可以实现响应式效果。一般认为子元素的百分比相对于父元素。
4. vw和vh  
vw表示相对于视图窗口的宽度，vh表示相对于视图窗口的高度，除了vw和vh之外，还有vmin和vmax两个相关的单位。vmin代表vw和vh之中的较小值，vmax代表较大值。使用vw和vh也可以实现响应式。

## px、em、rem的区别及使用场景
### 区别
1. px是固定的像素，一旦设置了就无法因为适应页面大小而改变。
2. em和rem相对于px有更高的灵活性，他们是相对长度单位，其长度不固定，更适用响应式布局。
3. em相对父元素设置字体大小，这就有个问题：<font color="#FF6347">进行任何元素设置，都需要知道它父元素的大小</font>，而rem只需要知道根元素的大小。

### 使用场景：
1. 对于只需要适配少数移动设备，且分辨率对页面影响不大的，使用px即可。
2. 对于需要适配各种移动设备，就用rem。

# JS
## JS基础
### JS有哪些数据类型
JS中有Undefined、Null、Object、Number、String、Boolean、Symbol、BigInt。  
- Symbol代表创建后独一无二且不可变的数据类型，它主要是为了解决可能出现的全局变量冲突问题。
- BigInt是一种数字类型的数据，他可以表示任意精度格式的整数，使用BitInt可以安全的存储和操作大整数，即使这个数已经超出了Number能够表示的安全整数范围。

## this


## call()、apply()、bind()
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

## 原型与原型链
 
## 执行上下文/作用域链/闭包
### 1. 对闭包的理解
**闭包是指有权访问另一个函数作用域中变量的函数**。创建闭包最常见的方法就是在一个函数中创建另一个函数，创建的函数可以访问到当前函数的局部变量。  
闭包有两个常用的用途：
 - <font color="#FF6347">在函数外部能够访问到函数内部的变量</font>。可以通过外部调用闭包函数，从而在外部访问到函数内部的变量，可以使用这种方法来创建私有变量。
 - <font color="#FF6347">是已经运行结束的函数中的上下文变量对象继续留在内存中，因为闭包函数保留了这个变量对象的引用，所以这个变量对象不会被回收</font>。
在JS中，闭包存在的意义就是让我们可以在函数外部访问函数内部的变量。

### 2.作用域、作用域链
**全局作用域**  
 - 最外层函数和最外层函数外面定义的变量拥有全局作用域
 - 所有未定义直接赋值的变量自动声明为全局作用域
 - suoyouwindow对象的属性拥有全局作用域
 - 全局作用域容易引起命名冲突问题
**函数作用域**  
 - 函数作用域声明在函数内部
 - 内层作用域可以访问到外部，反之不行

**块级作用域**  
 - 使用let和const指令可以声明块级作用域
 - let和const声明的变量不会有变量提升，但不可重复声明

**作用域链**  
在当前作用域中查找所需变量，但该作用于没有这个变量，那么这个变量就是自由变量，如果在自己的作用域找不到该变量就去父级作用域查找，知道访问到window的作用域终止，这一层层的关系就是作用域链。

### 3.执行上下文
**执行上下文栈**  
js使用执行上下文栈来管理执行上下文。  
当js执行代码时，首先遇到全局代码，会创建一个全局执行上下文并压入执行栈中，每当遇到一个函数调用，就会为该函数创建一个新的执行上下文并压入栈顶，引擎会执行位于执行上下文栈顶的函数，当函数执行完后，执行上下文从栈中弹出，继续执行下一个执行上下文。当所有代码都执行完毕后，从栈中弹出全局执行上下文。

## 异步编程
### JS异步机制
1. 回调函数  
使用多个回调函数嵌套会造成<font color="#FF6347">回调地狱</font>，上下两层的代码耦合度高。
2. Promise  
Promise是ES6引入的异步编程的解决方案，Promise可以封装异步操作，获取成功和失败的结果。Promise的优点是：支持链式调用，可以解决回调地狱问题。
3. generator  
4. async  
当函数内部执行到一个await语句时，如果语句返回一个promise对象，那么函数会等待promise变为resolve状态在继续向下执行。
### 对Promise的理解
Promise是一种异步编程的解决方案，可以解决回调地狱问题。Promise有三种状态：pending（进行中）、resolved（已完成）、rejected（已拒绝）。Promise只能由pending转化到resolved状态或pending转化到rejected状态。一旦从进行中状态转化为其他状态就不可再改变了。  
### Promise使用流程
首先创建Promise实例，然后Promise对象会执行异步操作，若异步操作成功，则调用resolve()方法并将Promise对象的状态改为resolved，失败则调用reject()方法并将Promise对象的状态改为rejected。在后续调用then方法时，若Promise对象的的状态为resolved，则调用第一个回调函数，否则调用第二个回调函数。then()方法的返回对象也是一个Promise对象，因此可以进行链式调用。

### Promise转换状态的三种方式
1. resolve函数
2. reject函数
3. 抛出错误：使用throw抛出错误

**Promise的缺点：**
1. 无法取消，一旦新建就会立即执行。
2. 如果不设置回调函数，Promise内部抛出错误，不会反应到外部。

### Promise是改变状态先执行还是指定回调先执行
当执行器中的代码为同步时，会先改变状态后执行回调。  
当执行器中的代码为异步时，会先执行回调再改变状态。

### Primise.then()返回新的promise的结果状态由什么决定？
由then()返回的回调函数执行的结果决定。
- 如果抛出异常，则新的promise的状态为rejected
- 如果返回的是非promise的值，则新的promise状态为fulfilled
- 如果返回的是promise，则promise的执行结果为新的promise的结果

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
all()方法可以完成并行任务，它接收一个数组，数组的每一项都是一个promise对象，<font color="#FF6347">当数组中所有的promise的状态都达到了resolved的时候，all方法的状态就会变为resolved，如果有一个状态变为了rejected，那么all方法的状态就会变成rejected</font>。all()方法成功后返回一个数组，该数组记录着每个promise的resolve执行的值。失败后返回最先被reject失败状态的值。  

**race()**
race()方法和all()方法一样，区别是race()会返回最先执行完的promise对象。
<font color="#FF6347">race()方法可以用来解决某一件事超过多久就不做了</font>。例如：  
```js
Promise.race(promise1, timeOutPromise(5000)).then(res=>{})
```    

**finally()**
finally()方法用于指定不管Promise对象最后状态如何，都会执行的操作。

### async
async的返回值为promise对象。这个promise的状态是由async的返回值决定的。

### await
await必须写在async()函数内部，await表达式的运算结果取决于它等的是什么：
 - 如果它等到是普通表达式，那么表达式的运算结果就是await返回的结果。
 - 如果等到的是promise对象，那么await会等promise对象的状态变为resolve后，得到resolve的值，作为await表达式的运算结果。

 ### async/await对比promise的优势
 1. 代码阅读起来更加像同步。promise虽然解决了回调地狱问题，但then的链式调用也会带来额外的阅读负担。
 2. 调试友好。调试器只能跟踪同步代码的每一步。
 3. 错误处理友好。
 4. promise传递中间值比较麻烦，而async/await几乎是同步写法，非常优雅。

 ### 并行和并发的区别
|     | 并发  | 并行  |
|  ----  | ----  | ---- |
| 概念  | 在某个时刻通过CPU切换对多个任务进行处理  | 同一时刻发生多个事件  |
| CPU资源  | 需要对CPU资源进行抢占 | 不会对CPU资源进行抢占 |
| 线程切换  | 会进行线程切换  | 线程之间不会进行切换 |

# 计算机网络
## HTTP和HTTPS的区别
HTTP是服务器用于传输数据到本地浏览器的协议，它的传输时明文的，未加密的，因此不安全。HTTPS在HTTP的基础上加入了SSL协议，构建可进行加密传输和身份认证的传输协议，比HTTP安全性更高。  
主要区别在于：
- HTTPS协议需要CA证书，费用较高
- HTTP协议是明文传输的；HTTPS是密文传输的
- HTTP的端口是80；HTTPS的端口是443
- HTTP协议是无状态的；HTTPS协议

### *HTTPS工作原理
1. 客户端向服务器发送建立SLL协议连接请求；
2. 服务器接收到请求后将公钥发送给客户端；
3. 服务端与客户端协商安全协议等级；
4. 客户端使用公钥加密会话密钥，并发送给服务器；
5. 服务器使用私钥解密会话密钥；
6. 这样，服务器和客户端就可以通过会话密钥来实现通信了。

### *HTTPS的优点
1. HTTPS可以认证用户和服务器，保证数据传输正确
2. 使用密文传输更加安全

### *HTTPS的缺点
1. 页面加载时间变长
2. 开销变大

## HTTP 1.0 和 HTTP 1.1之间的区别
- 连接方面：HTTP 1.0使用非持久连接；HTTP 1.1使用持久连接。持久连接可使多个HTTP请求复用同一个TCP连接，以此来避免使用非持久连接时每次需要建立连接的时延。
- 资源请求方面：HTTP 1.0存在浪费带宽的现象，当只想请求数据的某个部分时，HTTP 1.0会将整个数据返回；而HTTP 1.1允许返回部分数据。
- 缓存方面：HTTP 1.1比HTTP 1.0的缓存策略更多。
- HTTP 1.1还增加了PUT等请求。

## HTTP 1.1 和 HTTP 2.0的区别
- 二进制协议：HTTP 2.0的头部信息和数据体都是二进制，HTTP 1.1的头部信息是文本。
- 多路复用：HTTP 2.0中客户端和服务器都可以同时发送多个请求或回应，这样就避免了队头堵塞（HTTP 规定报文必须是“一发一收”，如果某个请求因为处理耽误了太多时间，那么它后面的请求就不得不等待，造成**队头堵塞**）的问题。
- 头部数据压缩：HTTP 2.0对头部信息进行了压缩。因为头部信息中例如cookie等字段都是重复，每次请求都会带上这些字段造成带宽的浪费。
- 服务器推送：HTTP 2.0允许未经服务器允许，向客户端推送资源（静态资源），这样可以减少延迟。

## HTTP协议的优点和缺点
HTTP是超文本传输协议，是客户端与服务器之间交换报文的格式和方式，默认使用80端口，它使用TCP作为传输层协议，保证了数据传输的可靠性。    
**优点**：  
1. 简单：客户端像服务器发送请求时，只需要传送请求方法和路径。
2. 无连接：限制每次连接只处理一个请求。服务器处理完客户端的请求并收到客户端的应答后，才断开连接，这样可以节省传输时间。
3. 灵活：HTTP允许传输任意类型的数据。
4. 无状态：HTTP是无状态协议。缺少状态意味着如果后面的处理需要前面的信息，则必须重传，这样会导致每次连接传送的数据量非常大。   

**缺点**：
1. 无状态：HTTP服务器不会保存关于客户的任何信息。
2. 明文传输。
3. 没有进行身份认证。
4. 无法验证报文的完整性。

## HTTP 3.0
HTTP 3.0基于UDP协议实现了类似于TCP的多路复用数据流、传输可靠性等功能。
HTTP 3.0在UDP的基础上增加了一层用来保障数据传输的可靠性，提供了数据包重传、拥塞控制等特性。

## HTTP的性能
### *长连接
HTTP有两种连接方式，一种是持久连接，另一种是非持久连接。
- 非持久连接指的是服务器必须为每一个请求的对象建立和维护一个全新的连接。
- 持久连接指的是TCP连接可以被多个请求复用，可以避免每次建立TCP连接三次握手而消耗的时间。
### *管道网络传输
在同一个TCP连接里面，客户端可以发起多个请求，只要第一个请求发送出去了，就可以发出第二个请求，减少整体的响应时间。但服务器还是按照顺序回应请求。
### *队头堵塞
解决方法：
1. 增加任务队列。分配多个长连接，不至于一个队列的任务阻塞所有任务。
2. 将域名分出很多二级域名，使它们指向同一台服务器，能够并发的持久连接变多了。


## 端口的作用
一个IP地址对应一台主机，一台主机可以提供多个服务，例如ftp服务、web服务等。如果只有一个IP号就无法区分对应的服务，因此要使用IP+端口的方式来区分不同的服务。

## GET和POST请求的区别
- 应用场景：GET请求用于对服务器资源不会产生影响的场景；POST请求用于对服务器资源会产生影响的情景。
- 是否缓存：浏览器一般会对GET请求进行缓存，POST请求很少缓存
- 发送报文格式：GET请求的报文中实体部分为空，POST请求的报文中实体部分一般为向服务器发送的数据
- 安全性：GET请求会将请求的参数放入到url中，这样不太安全，因为请求的url会被保留在历史记录中
- 参数类型：POST请求支持传递更多的参数

## POST和PUT请求的区别
- PUT请求是向服务器发送数据，从而修改数据内容，但不会增加数据，可以理解为更新数据。
- POST请求是向服务器发送数据，该请求可以改变数据资源，也可以创建新的内容，可以理解为创建数据。

## 状态码类别
|  类别   | 原因  | 描述 |
|  ----  | ----  | ---- |
| 1xx  | 信息性状态码 | 接受的请求正在处理 |
| 2xx  | 成功状态码 | 请求正常处理完成 |
| 3xx  | 重定向状态码 | 需要进行附加操作完成请求 |
| 4xx  | 客户错误状态码 | 服务器无法处理请求 |
| 5xx  | 服务器错误状态码 | 服务器处理请求错误 |

## 304状态码
服务器为了提高网站访问速度，会对之前的部分页面指定缓存机制，当客户端在此前对这些页面进行请求，服务器会根据缓存内容判断页面与之前是否相同，若相同直接返回304，此时客户端调用缓存内容，不必对资源进行二次下载。
### *产生较多304状态码的原因
- 页面长时间不更新或更新周期长
- 纯静态页面或强制生成静态html

### *304状态码会造成以下问题
- 网站快照停止（网页快照是搜索引擎在收录网页时，对网页进行备份，存在自己的服务器缓存里）
- 收录减少
- 权重下降

## OSI七层模型
1. 应用层  
<font color="	#FF6347">应用层为用户提供应用接口和用户直接提供各种网络服务</font>。
    - 在客户端与服务器中经常会有数据的请求，这个时候就会用到http和https协议。
    - FTP是文件传输协议。百度网盘、迅雷应该是基于此协议的。
    - SMTP是简单邮件传输协议。在用户邮箱验证码登录时，需要使用此协议。
2. 表示层  
<font color="	#FF6347">表示层提供各种用于应用层数据的编码和转换功能
，确保一个系统的应用层发送的数据能被另一个系统的应用层识别 </font>。
3. 会话层  
负责建立、管理和终止<font color="	#FF6347">表示层实体之间的通信会话</font>。
4. 传输层  
<font color="	#FF6347">建立了主机端到端的连接，为上层协议提供端到端的可靠和透明的数据传输服务。</font>传输层为上层屏蔽了下层数据传输的细节，使上层只是看到两个传输实体的数据通路。
5. 网络层  
我的理解是IP协议层，<font color="	#FF6347">该层用来创建两个节点之间的连接，在两个节点间选择合适的路由进行数据转发</font>。
6. 数据链路层  
网络层规划了数据的传输路线，而<font color="	#FF6347">数据链路层就是这些传输路线</font>。数据链路层将比特组合成字节、再将字节转换为帧。
7. 物理层  
进行信号的传输。

## TCP和UDP
TCP和UDP都是传输层协议，它们都属于TCP/IP协议族
### *UDP
UDP全称为<font color="	#FF6347">用户数据报协议</font>，在网络中它与TCP协议一样用于处理数据包，<font color="	#FF6347">是一种无连接协议</font>。UDP有<font color="	#FF6347">不提供数据包分组、组装和不能对数据包进行排序</font>的缺点，也就是说，<font color="	#FF6347">当报文发送后，无法得知其是否安全送达</font>。   

UDP的特点如下：
1. 面向无连接。UDP不像TCP一样在发送数据前需要进行三次握手建立连接，UDP在想发送数据时就可以发送了，并且也能是数据报文的搬运工，不会对报文进行拆分和拼接操作。
    - 在发送端，应用层将数据传递给传输层的UDP协议，UDP只会给数据加上一个UDP报文头标识其为UDP协议，然后就转发给网络层。
    - 在接收端，网络层将数据传给传输层，UDP只去除IP报文头就传递给应用层，不会做任何拼接操作。
2. 有单播、多播、广播的功能。
3. 面向报文。
4. 不可靠的。
5. 头部开销小，传输数据报文时很高效。

### *TCP
TCP全称为<font color="	#FF6347">传输控制协议</font>，是一种<font color="	#FF6347">可靠的，面向连接的，基于字节流的传输层通信协议</font>。   
TCP的特点如下：
1. 面向连接。在发送数据之前必须在两端建立链接。
2. 仅支持单播传输。
3. 面向字节流的。
4. 可靠传输。
5. 提供拥塞控制。当网络出现拥塞时，TCP能够减小向网络注入数据的速率和数量，缓解拥塞。
6. 提供全双工通信。TCP允许通信双方的应用程序在任何时候都能发送数据，TCP连接在两端设有缓存，可以临时存放双向通信的数据。TCP可以立即发送一个数据段，也可以缓存一段时间以便发送更多的数据段。

### *TCP和UPD的区别
|     | UDP  | TCP |
|  ----  | ----  | ---- |
| 是否连接  | 无连接  | 有链接 |
| 是否可靠  | 不可靠 | 可靠 |
| 连接对象个数  | 支持一对一，一对多，多对多，多对一 | 2 |
| 传输方式  | 报文 | 字节流 |
| 首部开销  | 首部开销小，仅8字节 | 最小20字节，最大60字节 |
| 适用场景  | 适用于实时应用，视频会议、直播等 | 适用于要求可靠的传输应用，例如文件传输 |

### *TCP和UDP的适用场景
- TCP：效率要求不高，但对准确率要求高的场景。例如：文件传输，接收邮件、远程登录等。
- UDP：效率要求高，准确率要求相对低的场景。例如：QQ聊天、在线视频、语音电话、广播通信等。

### *UDP为什么不可靠
UDP在传输数据之前不需要建立连接，远程主机在接收到UDP报文后，不需要确认，提供不可靠交付。
1. 不保证消息的交付：不确认、不重传、无超时
2. 不保证交付顺序：不设置包序号、不重排、不会发生队首阻塞
3. 不跟踪连接状态：不必建立连接或重启状态机
4. 不进行拥塞控制

### *TCP的重传机制
TCP使用两套独立的机制来完成重传。一是<font color="	#FF6347">基于时间</font>，二是<font color="	#FF6347">基于确认信息</font>。
TCP在发送一个数据之后，就开启一个定时器，若是在这个时间内没有收到发送数据的ACK确认报文，则对报文进行重传，在达到一定次数还没有成功时，放弃并发送一个复位信号。

### *TCP的拥塞控制机制
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
    - 无论是满开始阶段还是拥塞避免阶段，只要发送方判断网络出现拥塞（发送方没有收到确认就认为出现了网络拥塞），就把ssthresh设置为原来的一半，然后把cwnd设置为1，执行满开始算法。如图所示：
![6UDR26C(74WGDI6(E8E1BQK](https://user-images.githubusercontent.com/70066311/158375955-48d935dc-3e7e-48b8-ae8f-ffd2c13db149.png)

3. 快速重传
    - 快速重传要求接收方在收到一个失序的报文段后就立即发出重复确认，接收方在收到三个连续的重复确认就立即重传对方尚未收到的报文段，而不必继续等待设置的重传机器时间到期。可以提高整个网络的吞吐量。
4. 快速恢复
    - 当发送方收到三个重复确认时，就执行“乘法减小”算法，因为发送方此时可以接收到三个重复确认，因此发送方会认为此时网络没有拥塞，所以不执行慢开始算法，而是将cwnd设置为ssthresh的大小，然后执行拥塞避免算法。
  ![image](https://user-images.githubusercontent.com/70066311/158376919-2679dd76-62ed-4e9c-a4be-281637b5a46c.png)

### *TCP的三次握手和四次挥手
**三次握手**
![image](https://user-images.githubusercontent.com/70066311/158377197-02514074-efc7-4521-a730-4a5dd861148f.png)
三次握手其实就是建立一个TCP连接时，需要客户端和服务器总共发送3个包。进行三次握手的主要作用就是<font color="	#FF6347">确认双方的接收能力和发送能力是否正常、指定自己的初始化序列号为后面的可靠性传送做准备</font>。   
ACK：确认序号有效；SYN：发起一个新连接。   
刚开始客户端处于Closed的状态，服务器处于Listen状态。
 - 第一次握手：首先客户端向服务器发送一段TCP报文，其中：标记位SYN表示<font color="	#FF6347">请求建立新连接</font>；序号seq=X，X一般为1；随后客户端进入SYN-SEND阶段。
 - 第二次握手：服务器接收到来自客户端的TCP报文后，结束Listen阶段，并返回一段TCP报文，其中：标志位为SYN和ACK，表示<font color="	#FF6347">确认客户端的报文seq序号有效，服务器能正常接收客户端发送的数据，并同意创建新连接</font>；序号seq=Y；确认号Ack=X+1,表示<font color="	#FF6347">收到客户端的序号seq并将其值加1作为自己确认号ACK的值；随后服务器进入SYN-RCVD阶段</font>。
 - 第三次握手：客户端收到来自服务器的确认收到数据的TCP报文之后，<font color="	#FF6347">明确了从客户端到服务器的数据传输是正常的</font>，结束SYN-SENT阶段，并返回最后一段TCP报文。其中：标志位为ACK，表示<font color="	#FF6347">确认收到服务器发来的同意连接信号</font>；序号seq=X+1，<font color="	#FF6347">表示收到服务器端的确认号ACK，并将其值作为自己的序号</font>；确认号为ACK=Y+1，表示<font color="	#FF6347">收到服务器端的序号seq，并将其值加1作为自己的确认号ACK的值</font>；随后客户端进入ESTABLISHED阶段。
在客户端与服务器传输的TCP报文中，双方的确认号ACK和
序号seq的值，都是在彼此ACK和seq值的基础上进行计算的，这样保证了TCP报文传输的连贯性。一旦出现某一方发出的TCP报文丢失，便无法继续握手，以此确保了三次握手的顺利完成。

**为什么进行三次握手**  
为了防止服务器开启一些无用的连接增加服务器开销以及防止已失效的连接请求报文突然又传送到了服务器，因而产生错误。

**四次挥手**  
FIN：释放一个连接

四次握手就是<font color="	#FF6347">TCP连接的释放</font>。连接的释放必须是一方主动释放，一方被动释放。以下是以客户端主动发起释放连接的图解：
![image](https://user-images.githubusercontent.com/70066311/158497814-c0984ba5-6eb4-45ba-8b79-c9e8d0352179.png)
挥手之前主动释放连接的客户端结束ESTABLISHED阶段，随后开始“四次挥手”：
1. 首先客户端想要释放连接，向服务器端发送一段TCP报文，并且<font color="	#FF6347">停止在客户端到服务器端方向上发送数据，但是客户端仍能接收从服务器端传输过来的数据</font>。**这里不发送的是正常连接时传输的数据，而不是一切数据，所以客户端仍能发送ACK确认报文**。
2. 服务器收到客户端发出的TCP报文后，确认了客户端想要释放连接，返回一段TCP报文。随后<font color="	#FF6347">服务器开始准备释放服务器到客户端方向上的连接</font>。  
前两次挥手既让服务器知道了客户端想要释放连接，也让客户端知道了服务器端了解了自己想要释放的请求，于是，可以确认关闭客户端到服务器端方向上的连接了。
3. 服务器端在发送确认报文后，停止在服务器端到客户端方向上的发送数据，但是服务器端仍能够接收到从客户端传输过来的数据。
4. 客户端收到从服务器端发出的确认TCP报文，确认了服务器端已做好释放连接的准备，随后向服务器发送一段报文，并<font color="	#FF6347">等待2MSL</font>。
后两次挥手既让客户端知道了服务器端准备好释放连接，也让服务器知道了客户端了解了自己准备好释放连接了。于是，可以确认关闭服务器端到客户端的连接，由此完成了四次挥手。  

**为什么握手是三次，挥手是四次**   
之所以是三次握手是因为在第二次握手时<font color="	#FF6347">服务器端发送给客户端的TCP报文是请求连接和确认报文一起发送给客户端的</font>。请求连接表示服务器端同意建立连接，确认报文表示告诉客户端，服务器收到了它的请求。  
而四次挥手是因为<font color="	#FF6347">释放连接报文和确认接收报文分别传输的。因为在收到客户端发来的释放连接请求时，服务器可能还有必要的数据需要处理，所以只能先发送确认报文，等准备好释放连接后再发送释放连接报文</font>。

**为什么客户端需要等待2MSL**  
为了确认服务器端是否收到客户端发出的ACK确认报文。  

当客户端发出最后的ACK确认报文后，并不能确定服务器端是否收到，所以客户端会设置一个2MSL（MSL：一段报文在传输过程中的最大生命周期，2MSL即服务器端发出报文以及客户端发出确认报文的总时长）的计时器。服务器端在1MSL内没有收到客户端发来的确认报文，就再次向客户端发送报文。<font color="	#FF6347">如果客户端在2MSL内，再次收到了来自服务器端的FIN报文，说明服务器端由于各种原因没有接收到客户端发出的ACK确认报文。客户端再次向服务器端发出ACK确认报文，计时器重置，重新开始2MSL的计时；客户端在2MSL内没有再次收到来自服务器端的FIN报文，说明服务器端正常接收了ACK确认报文，客户端可以进入CLOSED阶段，完成“四次挥手”。</font>

# 浏览器原理
## XSS攻击
XSS攻击指的是<font color="	#FF6347">跨站脚本攻击，是一种代码注入攻击</font>。攻击者通过在网站注入恶意脚本，是指在用户的浏览器上运行，从而盗取用户的信息如cookie等。  

XSS的本质是因为网站没有对恶意代码进行过滤，与正常的代码混合到了一起，浏览器没有办法分辨哪些脚本是可信的，从而导致了恶意代码的执行。  

攻击者可以通过这种攻击方式进行以下操作：
- 获取页面数据：如DOM、localstroage、cooike
- DOS攻击：发送合理请求，占用服务器资源，从而使用户无法正常访问服务器
- 破坏页面结构
- 流量劫持（将链接指向某网站）

### *攻击类型
XSS分为存储型、反射型、DOM型。
- 存储型指的是恶意脚本会存储在目标服务器上，当浏览器请求数据时，脚本从服务器传回并执行。
- 反射型指的是攻击者诱导用户访问一个带有恶意代码的 URL 后，服务器端接收数据后处理，然后把带有恶意代码的数据发送到浏览器端，浏览器端解析这段带有 XSS 代码的数据后当做脚本执行，最终完成 XSS 攻击。 
- DOM 型指的通过修改页面的 DOM 节点形成的 XSS。

### *如何防御XSS攻击
- 对数据获取渲染和字符串拼接的时候应该对可能出现的恶意代码情况进行判断。
- 使用CSP。<font color="	#FF6347">CSP的本质是建立一个白名单，告诉浏览器哪些外部资源可以加载和执行，从而防止恶意代码的注入攻击</font>。
- 对敏感信息进行保护。如：进行人机验证，避免脚本伪装成用户执行一些操作。

## CSRF攻击
CSRF攻击是指<font color="	#FF6347">跨站请求伪造攻击</font>。攻击者诱导用户进入一个第三方网站，然后该第三方网站向被攻击网站发送跨站请求。如果用户在被攻击网站中保存了登录状态，那么攻击者就可以利用这个登录状态，绕过后台用户验证，冒充用户向服务器执行一些操作。  

CSRF的本质是<font color="	#FF6347">利用cookie会在同源请求中携带发送给服务器的数据的特点，以此来实现冒充用户</font>。

### *攻击类型
常见的CSRF攻击有三种：
- GET类型。比如在网站中的一个img标签里构建一个请求，当用户打开这个网站的时候就会自动发起请求。
- POST类型。比如构建一个表单，然后隐藏它，当用户进入页面时，自动提交这个表单。
- 链接类型。比如在a标签的href属性里构建一个请求，然后诱导用户去点击。

### *如何防御CSRF攻击
- 进行同源检测。服务器根据 http 请求头中 origin 或者 referer 信息来判断请求是否为允许访问的站点，从而对请求进行过滤。当 origin 或者 referer 信息都不存在的时候，直接阻止请求。
- 使用CSRF Token进行验证。服务器向用户返回一个随机数token，当用户再次发起请求时，在请求参数中加入服务器端返回的token，然后服务器对这个token进行验证。
- 显示验证方法。添加验证码、密码等。

## 中间人攻击
中间人攻击是指攻击者与通讯的两端分别创建独立的连接，并交换其所受到的数据，使用通讯的两端认为他们正在通过一个私密的连接与对方直接对话。但事实上整个会话都被攻击者完全控制。攻击者可以拦截双方的通信内容并加入新的内容。

## 那些可能引起前端安全问题
- XSS
- CSRF
- 恶意第三方库

## 网络劫持有哪几种？如何防范
DNS劫持（例如：输入京东强制跳转到淘宝就属于DNS劫持）
- DNS强制解析：通过修改运营商的本地DNS记录，来引导用户流量到缓存服务器
- 302跳转方式：通过监控网络出口的流量，分析判断哪些内容是可以进行劫持处理的，再对劫持的内存发起302跳转的回复，引导用户获取内容。

HTTP劫持（例如：访问谷歌但一直弹出广告）  
由于http时明文传输的，运营商会修改http相应内容（即加广告）  

DNS劫持由于涉嫌违法，已被监管起来。而http劫持依然非常盛行，最有效的办法就是使用https，将http加密，使得运营商无法获取明文。


## 跨域
### *同源策略
同源策略限制了从一个源加载的文档或脚本与另一个源的资源的交互。<font color="	#FF6347">同源即协议、端口号、域名必须一致</font>。  
下表给出了与 URL http://store.company.com/dir/page.html 的源进行对比的示例:
|  URL   | 是否跨域  | 原因 | 
|  ----  | ----  | ---- |
| http://store.company.com/dir/page.html  | 同源 | 完全相同 |
| http://store.company.com/dir/inner/another.html  | 同源 | 只有路径不同 |
| https://store.company.com/secure.html  | 跨域 | 协议不同 |
| http://store.company.com:81/dir/etc.html  | 跨域 | 端口不同 ( http:// 默认端口是80) |
| http://news.company.com/dir/other.html  | 跨域 | 主机不同 |
同源策略主要限制了三个方面：
1. 当前域下的js脚本不能访问其他域下的cookie、localStorage
2. 当前域下的js脚本不能操作或访问其它域下的DOM
3. 当前域下的ajax无法发送跨域请求

同源策略的目的主要是<font color="	#FF6347">为了保证用户的信息安全</font>。

### *如何解决跨域问题
1. CORS跨域资源共享机制


# 前端性能优化
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
### *回流
当部分或全部元素的尺寸、属性或结构发生变化时，浏览器会重新渲染部分或全部文档的过程称为回流。

### *会导致回流的操作
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

### *重绘
当页面中某些元素的样式发生变化，但不会影响其在文档流中的位置时，浏览器就会对这些元素进行重绘。

### *会导致重绘的操作
- color、background-color、 background-image
- outline-color、outline-width、outline-decoration
- border-radius、visibility、box-shadow

<font color="	#FF6347">当触发回流时，一定会触发重绘；但触发了重绘，不一定会重排</font>。

### *如何避免重排和重绘
1. 在操作DOM时，尽量在底层的DOM节点进行操作
2. 不要使用table布局
3. 不要频繁操作元素样式
4. 避免频繁操作DOM
5. 使用absolute和fixed，使元素脱离文档流，这样他们的变化会不会影响其他元素

**渲染队列**：浏览器会将多次的重排、重绘操作放入一个渲染队列中，等队列到一定长度后，会对队列进行批处理，这样就会让多次重排和重绘变为一次重排和重绘。

### *如何优化动画
可以把动画的position设置为absolute或fixed，使动画脱离文档流，这样动画元素的回流就不会影响页面了。

### *DocumentFragment
DocumentFragment是一个文档片段，是一个没有父对象的最小文档对象。DocumentFragment不是真实DOM树的一部分，所以它的变化不会重新渲染DOM树。当我们把DocumentFragment插入到DOM树中时，插入的不是DocumentFragment本身，而是DocumentFragment所有的子孙节点，且不会触发页面的重绘，这样做就可以大大增加页面的性能。


## 防抖和节流
### *防抖
防抖是指<font color="	#FF6347">事件被触发n秒后再执行回调，如果在这n秒内事件又被触发，则重新计时</font>。这可以使用在一些点击请求上，避免因为用户的多次点击向后端发送多次请求。
### *节流
节流是指<font color="	#FF6347">在规定的一个时间单位内，只能触发一次该事件的回调函数，如果在同一个单位时间内某事件被触发多次，只能有一次生效</font>。节流可以使用在scroll函数的事件监听上。通过事件节流来降低事件调用的频率。

# ES6
## 箭头函数
### *箭头函数和普通函数的区别
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
<font color="	#FF6347">箭头函数的 this 永远指向其上下文的 this ，任何方法都改变不了其指向，如 call() , bind() , apply()</font>。

## let、const、var的区别
1. 块级作用域：块级作用域用{}包括，let和const具有块级作用域，var不具有。块级作用域解决了ES5的存在的两个问题：
    - 内层变量可能会覆盖外层变量
    - 用来计数的循环变量泄露为全局变量
2. 变量提升：变量提升就是把变量的声明提升到作用域的最上面去，而不会把赋值也提升上来。
3. var声明的变量为全局变量，并会将该变量添加为全局对象的属性。let和const不会
4. 初始值设置：const必须设置初始值
5. let创建的变量可以修改指针指向（可重新赋值）


# React篇
## React事件机制
React中的onClick、onChange等事件是**合成事件**，并不是浏览器的原生事件。这些事件并没有绑定到对应的真实DOM上，而是通过**事件代理**的方式，将所有事件绑定到了document上。这样做不仅可以<font color="	#FF6347">减少内存消耗</font>，还可以<font color="	#FF6347">在组建挂载销毁时统一订阅和移出事件</font>。  
可以使用**event.preventDefault**阻止事件冒泡。

![事件机制](https://user-images.githubusercontent.com/70066311/157618463-b5fc6510-f7f9-498f-9722-cf7458d6972c.jpg)

### *实现合成事件的目的
 - 合成事件是一个跨浏览器的原生时间包装器，赋予了跨浏览器开发的能力，解决了浏览器之间的兼容问题。
 - 对于原生浏览器事件来说，浏览器会给监听器创建一个事件对象，如果你有很多的事件监听，那么就需要分配很多的事件对象，造成高额的内存分配问题，但对于合成事件来说，有一个事件池专门来管理它们的创建和销毁，当事件需要被使用时，就会从池子中复用对象，事件回调结束后，就会销毁事件对象上的属性，从而便于下次复用事件对象。

## React的事件和普通的HTML事件有什么不同？
1. 事件的命名方式不同，原生事件为全小写，react事件为小驼峰
2. 事件函数处理语法不同，原生事件为字符串，react事件为函数
3. react事件不能采用return false的方式来阻止浏览器的默认行为，而必须明确调用preventDefault()来阻止默认行为

## 合成事件
合成事件是react模拟DOM原生事件的一个事件对象，其优点如下：
1. 兼容所有浏览器，兼容性好
2. 将事件统一放到一个数组，避免频繁的新增删除
3. 方便react统一管理和事务机制

## react时间执行顺序
事件的执行顺序为<font color="#FF6347">原生事件先执行，合成事件再执行</font>。合成事件会冒泡到document上，所以**尽量避免原生事件和合成事件混用**。如果原生事件阻止冒泡，那么就会导致合成事件不执行。

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