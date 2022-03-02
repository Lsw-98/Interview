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
