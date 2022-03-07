# 深入学习CSS记录

注:  
    &emsp;&emsp;整个库的文档都是自己整理，自己手码的，有错误的地方，请指出，谢谢!!!。如果你喜欢的话，麻烦点一个star吧，谢谢!!!  
    &emsp;&emsp;下面进行正题。  

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
 - 后代选择器
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
 - class：10
 - 标签：1
 - 通配：0

然后计算每个样式的权重值，权重大的优先

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
  display: block  - 把某元素转化为块元素  
  display: inline - 把某元素转化为行内元素  
  display: inline-block - 把某元素转化为行内块元素

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

## display:none和visibility:hidden的区别
1. display:none是彻底消失，不在文档流中占位，浏览器也不会解析该元素；
visibility:hidden是视觉上消息了，可以理解为透明度为0的效果，在文档流中占位，浏览器会解析该元素
2. 使用visibility:hidden比display:none性能更好，当display进行切换属性时，页面会发生回流，而visibility切换时不会引起回流。

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

