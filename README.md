# 深入学习CSS记录

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
标准盒子模型的宽度为border * 2 + padding * 2 + content(width)
IE盒子模型为border * 2 + padding * 2 > width ? border + padding : width