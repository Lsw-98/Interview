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

1. position: fixed;   - 固定定位，相对于窗口定位，不管浏览器怎么滚动
2. position: relative;   - 相对于自身的位置进行定位，不脱离文档流
3. position: absolute;   - 相对第一个有relative的父元素进行定位，脱离文档流


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