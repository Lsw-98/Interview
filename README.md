# 深入学习CSS记录

注:
    整个库的文档都是自己整理，自己手码的，不知道有没有错误的地方，如果有，请指出。
    如果你喜欢的话，麻烦点一个star吧，谢谢!!!

    下面进行正题。
    
## 盒子模型
盒子模型分为标准盒子模型和IE盒子模型，
 - 标准盒子模型包括4个部分：
     margin、border、padding、content
 - IE盒子模型包括2个部分：
     margin、content(padding、border、content)

### 如何转化盒子模型
    标准盒子模型：box-sizing: content-box  
    IE盒子模型： box-sizing:border-box  

### 两者的区别
 - 标准盒子模型的宽度为border * 2 + padding * 2 + content(width)
 - IE盒子模型为border * 2 + padding * 2 > width ? border + padding : width

## height和line-height的区别
### height
 - height是整个盒子的高度
### line-height
 - line-height是一行文字的高度，盒子的高度 = 行数 * 行高