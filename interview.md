# 石墨文档
## 一面
### 1. 屏幕适配（媒体查询（媒体查询的语法），%布局（使用%的优缺点））
#### 媒体查询
**语法**：
```css
@media mediatype and|not|only (media feature){
  css-code
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

#### rem
 rem：**相对于html根元素的字体大小的倍数**。使用rem可以实现响应式布局，当屏幕分辨率发生变化时，元素也随之变化。

#### vh/vw 
vw表示相对于视图窗口的宽度，vh表示相对于视图窗口的高度，除了vw和vh之外，还有vmin和vmax两个相关的单位。vmin代表vw和vh之中的较小值，vmax代表较大值。使用vw和vh也可以实现响应式。

vw根据窗口的宽度，分成100等份，`100vw`就表示满宽，`50vw`就表示一半宽。

### 2. 水平居中垂直布局（使用transform: translate()带来的问题）
使用transform: translate可能会导致像素模糊的问题，如果宽高是奇数，那么使用transform: translate(-50%, -50%)得到的计算结果中会包含小数，导致渲染的内容模糊。

应该尽量使用偶数的像素单位；或直接使用flex实现水平垂直居中。

### 3. 场景题：将一个url中的参数写入到对象中（注意边界值判断）
### 4. typescript中的语法（返回值如何限制参数类型）
```js
function demo(a: String, b: Boolean): (String | Function) {
  return a
}
```
### 5. 登录模块中，token和localstorage分别是做什么的？
token用于用户身份认证；localstorage用户存储token。
#### 拓展问题：
##### token
token是服务器生成的一串字符串，以作为客户端请求的一个令牌。当第一次登录后，服务器会生成一个token并返回给客户端，客户端在之后的请求会写带上这个token进行身份认证。

##### token的实现流程
用户首次登录时：
![在这里插入图片描述](https://img-blog.csdnimg.cn/54d6b9b14eba476fae3b1d7ed5ff5fc9.png)

1. 用户输入用户名和密码，点击登录，浏览器发起post请求
2. 服务器首先验证账号和密码无误，然后创建token
3. 服务器将token返回给客户端，由客户端自由保存

后续页面访问时：
![在这里插入图片描述](https://img-blog.csdnimg.cn/7ffb8dbb2d2245ae9c7f2223d2c919f8.png)

1. 用户再次访问页面时，带上第一次登录时获取的token
2. 服务器验证token，有效则身份验证成功

##### token的优势
- 存放在客户端，对服务器的压力小，即使是服务器集群，也不需要增加维护成本。
- token可以存放在前端任何地方，可以不用保存在cookie中，提升了安全性
- token在跨域后不会存在信息丢失的问题
- token不会遭受csrf攻击

##### token的缺点
- token在下发后很难再被服务器收回
- token会被暴力穷举法破解，因此token的有效期不易设置太长，并且定期更新服务器的哈希签名密钥
- token也会遭受劫持
- token需要进行签名，性能稍差

##### token的生成方式
最常见的token生成方式JWT（JSON Web Token），JWT的本质是一个字符串，他将用户的信息保存到一个JSON字符串中，然后编码得到一个Token，并且这个Token带有签名信息，在接受后可以校验是否被篡改。

##### JWT结构
JWT由Header（JWT头）、Payload（有效载荷）和Signature（签名）组成。

- Header中存储着一些描述信息
- Payload中存放着需要传递的信息，一般会把`用户信息数据`和`token的有效期`放在payload中
- Signature：签名部分，确保数据不被篡改

##### JWT的认证流程：
1. 浏览器通过表单将用户名和密码提交到服务器，这个过程一般是一个POST请求，应该使用HTTPS传输，避免敏感信息被劫持
2. 服务器核对用户名和密码正确后将包含用户信息的数据作为Payload，将其与JWT的Header进行拼接后签名，形成一个JWT Token，这个Token就相当于一个aaa.bbb.ccc的字符串
3. 服务器将JWT Token字符串作为登录成功的结果返回给前端。前端可以将返回的结果保存在浏览器中，退出登录时删除保存的JWT Token即可
4. 前端在每次请求时将JWT Token放入HTTP请求头中的Authorization属性中(解决XSS和CSRF问题)
5. 后端检查前端传过来的JWT Token，验证其有效性，比如检查签名是否正确、是否过期、token的接收方是否是自己等等
6. 验证通过后，后端解析出JWT Token中包含的用户信息，进行其他逻辑操作(一般是根据用户信息得到权限等)，返回请求结果

##### 如何增加JWT的安全性
- 将Token放在请求头中，避免网络劫持
- 使用HTTPS传输
- JWT可以使用暴力穷举法破解，所以应该定期更换服务器的哈希签名密钥

##### token过期
有两种情况会出现401状态码：
- 未登录的用户做一些需要登录后才有权限操作的事情，服务器会返回401，并重定向到登录页
- 登录的用户token过期了

在用户首次登录后，服务器会返回一个token，在后续请求时通过请求头带上token。token的有效期由后端决定，token一旦过期就会被网关拦截。

##### refresh_token和token
当用户登录成功后，返回的token有两个值：

![image](https://user-images.githubusercontent.com/70066311/171977549-e150f433-8ce8-418f-b696-edbcb615febd.png)

- token：在访问一些接口时，需要传入token。就是每次请求携带的token。
- refresh_token：当token过期后，可以使用它去访问一些特殊的接口（由后端决定），并返回一个新的token，替换之前的token。

服务端不需要刷新 Token 的过期时间，一旦 Token 过期，就反馈给前端，前端使用 Refresh Token 申请一个全新 Token 继续使用。这种方案中，服务端只需要在客户端请求更新 Token 的时候对 Refresh Token 的有效性进行一次检查，大大减少了更新有效期的操作，也就避免了频繁读写。当然 Refresh Token 也是有有效期的，但是这个有效期就可以长一点了，比如，以天为单位的时间。refresh token，也是加密字符串，并且和token是相关联的。相比获取各种资源的token，refresh token的作用仅仅是获取新的token，因此其作用和安全性要求都大为降低，所以其过期时间也可以设置得长一些。

##### 响应拦截器中处理过期的token
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


### 6. token是存放在localstorage中的吗？
是

### 7. 在用户A注销之后登录了用户B，有没有可能导致用户B读取到用户A的信息？
在用户A注销时会清除用户A的相关信息，所以用户B无法读取到用户A的相关信息。
```js
<Menu.Item key={2} danger onClick={() => {
  // 清楚本地token
  localStorage.removeItem("token")
  // 更改url，跳转到登录页
  props.history.replace("/login")
}}>退出登录</Menu.Item>
```

### 8. 没有权限的用户访问出现403页面，服务器是200还是403？
当没有权限的用户通过地址栏输入url的方式访问更高权限用户才能访问的页面时，会返回403。

在用户发起访问请求后，浏览器将请求地址提交到服务器，服务器根据请求地址判断用户是否有相应的权限。判断方法是：获取用户所有的权限，对比该请求地址是否在用户的权限中。如果没有权限则会返回403状态码。前端axios的响应拦截器拦截到状态码为403，然后将页面重定向到无权限页面。

### 9. 先获取前端代码再报403还是直接报了403？

### 10. 具体说说路由懒加载
路由懒加载的方式有很多：
1. 使用React.lazy实现懒加载
    - 通过React.lazy动态import需要懒加载的组件
    - 使用Suspense来包裹懒加载的组件，可以设置fallback实现加载中的效果
```js
import React, { lazy, Suspense } from 'react';
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom'

const Login = lazy(() => import('../views/login/Login'));
const NewsSandBox = lazy(() => import('../views/newsSandBox/NewsSandBox'));
const Detail = lazy(() => import('../views/visitor/Detail'));
const Visitor = lazy(() => import('../views/visitor/Visitor'));

export default function indexRouter() {
  return (
    <HashRouter>
      <Switch>
        <Suspense fallback={<div>loading</div>}>
          <Route path="/login" component={Login}></Route>
          <Route path="/visitor" component={Visitor}></Route>
          <Route path="/detail/:id" component={Detail}></Route>
          {/* <Route path="/" component={NewsSandBox}></Route> */}
          <Route path="/" render={() =>
            localStorage.getItem("token") ?
              <NewsSandBox></NewsSandBox> :
              <Redirect to="/login"></Redirect>
          }></Route>
        </Suspense>
      </Switch>
    </HashRouter>
  );
}
```

2. webpack中使用lazyload-loader
```js
// webpack 配置中
module: {
  rules: [
    {
      test: /.(js|jsx)$/,,
    use: [
      'babel-loader',
      'lazyload-loader'
    ]
 },
```

业务代码中，使用lazy!前缀代表需要懒加载的Router。

```js

import Shop from 'lazy!./src/view/Shop';
// Router 正常使用
<Route path="/shop" component = { Shop } />
```

### 11. 页面跳转出现白屏如何解决？
1. 先确定浏览器是否可以访问其他网站，如果不可以，说明是客户端网络自身的问题，然后检查客户端网络配置
2. 抓包确认DNS是否解析出IP地址，如果没有解析出IP地址，说明是域名写错了
3. 查看服务端返回的响应码：
  - 404：检查输入的URL是否正确
  - 500：服务器内部出错，导致浏览器一直等待请求的资源返回，造成阻塞，无法渲染页面
  - 200：如果返回200就表示问题出在前端，可能是前端代码有问题，导致页面无法渲染
4. 如果访问速度很慢，很久才能显示出来，那么有可能是客户端的网口流量太大，导致TCP丢包；或者是加载JS文件造成网络拥塞、CSS文件还未加载完导致JS又对样式操作，不得不等待CSS加载完成。

#### 拓展问题：
##### 为什么会出现白屏？
1. 等待HTML文件返回
2. JS未加载完
3. 浏览器兼容性问题（比如IE6以下的浏览器）
4. css加载慢，因为渲染树是由DOM树和CSSOM树合成的，如果css未加载完成，就会阻塞渲染树的合成
5. URL无效或含有中文字符
##### 如何减少白屏时间
1. 减少http请求次数和请求大小
2. 使用缓存、预加载等策略
3. 使用link引入css而不是@import
4. 引入js加上defer或async属性，或将js引入放在文档底部
5. 优化用户体检，使用loading进度条
6. 使用懒加载
7. 使用语义化标签，HTML层级不要太深

### 12. webpack优化（打包、CSS加载、懒加载）

### 13. 使用图片懒加载最终会把图片处理成什么样的？

### 14. webpack使用图片懒加载后图片的名字为什么会变成哈希值？

### 15. 断点续传整个的流程
### 16. 文件上传为什么使用web worker？使用promise不行吗？
### 17. 文件上传暂停如何实现的？
### 18. 有没有考虑过服务器得到的文件和上传的文件不一定完全一致？
### 19. 网络原因导致上传丢包怎么办？
### 20. 漏传的情况怎么解决
### 21. 分片上传如何实现的？
### 22. 场景题：使用promise实现并发请求只有4个的情况
### 23. 类组件中的componentDidUpdate在什么时候被触发？

componentDidUpdate()方法在组件完成更新后(state、props发生改变或调用this.forceUpdate())会被立即调用，组件首次渲染不会执行此方法。是在`render之后`执行。常在此处做`DOM操作`、`发送网络请求`等操作。

### 24. componentDidUpdate先触发还是render先触发？

render先触发

### 25. 函数式组件中刚挂载组件不要触发函数（在函数式组件中如何实现componentDidUpdate的？）

1. 使用`useRef + useEffect`。

基本思路就是使用useEffect而不传入依赖时，相当与在组件首次挂载和每次更新时都需要执行useEffect中的副作用函数，可以利用useRef去掉初次渲染时的调用。

```js
const mounting = useRef(true);
useEffect(() => {
  if (mounting.current) {
    console.log("初次")
    mounting.current = false;
    return
  }
  console.log("DidUpdated")
});
```

useRef语法：
```js
const refContainer = useRef(initialValue)
```

- 返回一个可变的ref对象，该对象只有一个current属性，初始值为传入的参数(initialValue)
- 返回的ref对象在组件的整个生命周期内保持不变
- 当更新current值时不会re-render，这是与useState不同的地方
- 更新useRef属于副作用，所以一般写在useEffect或事件函数中

2. 使用useState的弊端

```js
const [Flag, setFlag] = useState(true)

uesEffect(() => {
  if (Flag) {
   setFlag(false)
   return
  }
})
```

flag不能通过useState去定义，否则setFlag(false)改变状态后，会立刻执行一次`ComponentDidUpdated`

3. 使用全局变量的弊端

```js
import React, { useEffect,useState} from 'react'

export default Demo() => {
    let [num,setNum] = useState(0)
    let flag = true
    
    useEffect(()=>{
        if(flag){
            console.log("初次渲染")
            flag = false
            return 
        }

        console.log("componentDidUpdate")

    })
    
    
    return (
        <>
            <button onClick={()=>{ setNum(num+1) }}>按钮{num}</button>
        </>
    )
}
```

如果使用全局变量作为flag，那么在使用setNum更新状态后，组件后render一次，那么全局变量会被重新赋值为true，这样就会一直执行if之后的语句了。

#### 拓展问题：

##### 说说react生命周期

React生命周期分为三个阶段：
  - 挂载阶段：组件第一次在页面渲染
  - 更新阶段：组件状态发生变化而引起页面重新渲染
  - 卸载阶段：组件从DOM树中被移除

<font color="	#FF6347">react生命周期(旧)</font>
![02_react生命周期(旧)](https://user-images.githubusercontent.com/70066311/160606822-92bbfe94-7d60-4e33-a77d-f312484822e0.png)

<font color="	#FF6347">react生命周期(新)</font>
![03_react生命周期(新)](https://user-images.githubusercontent.com/70066311/160606846-f1fcb249-e933-4a3f-b1ac-b834596a8d91.png)

**组件挂载阶段**：

组件被创建后组件实例被插入到DOM中，完成组件的第一次渲染。在该阶段会依次调用如下方法：
1. constructor
2. getDerivedStateFromProps
3. render
4. componentDidMount

(2) constructor()

组件中的构造器，<font color="#FF6347">若显示定义了constructor，必须调用`super(props)`，否则无法在构造函数中拿到this</font>。因为实例化的类组件是继承`React.Component`的，子类本身没有this，需要使用父类的this，而super的作用就是将父类的this继承给子类。

constructor()中通常进行两件事，`定义state`和`绑定this`。

```js
constructor(props){
  super(props)
  this.state={
    count:0,
    name:"zhangsan"
  }
  this.handleClick = this.handleClick.bind(this)
}
```

(2) getDrivedStateFromProps()：将传入的props映射为state

<font color="	#FF6347">getDrivedStateFromProps()是一个静态方法，不可以再该函数内部使用this</font>。getDrivedStateFromProps接收两个参数，props代表接收到的新的参数，state代表当前组件的state对象，会返回一个对象用来更新当前state对象，如果不更新就返回null。

该方法会在<font color="	#FF6347">组件挂载、接收到新的props、setState和forceUpdate时被调用</font>

（3）render

render()是React最核心的方法，它只做一件事，就是根据state和props渲染新的页面。

（4）componentDidMount()

在组件挂载后执行，执行时机在render之后。主要做以下几件事：

1. DOM操作
2. 消息订阅
3. 发送网络请求

**组件更新阶段**：

当state、props发生变化，或调用了forceUpdate()方法，会触发组件的更新。这个阶段会依次调用如下方法：

1. getDrivedStateFromProps()
2. shouldComponentUpdate()
3. render()
4. getSnapshotBeforeUpdate()
5. componentDidUpdate()

(2) shouldComponentUpdate(nextProps, nextState)

在讲这个生命周期函数之前，先要了解下面两个问题：
1. setState()在任何情况下都会导致组件重新渲染吗？
2. 如果没有调用setState、props的值也没有变化，组件就不会重新渲染吗？
第一个问题是<font color="	#FF6347">会</font>，第二个问题是<font color="	#FF6347">如果父组件重新渲染时，不管子组件的props有没有发生变化，都会引起子组件的重新渲染</font>，这样会导致性能下降，这时就要用到shouldComponentUpdate()。

shouldComponentUpdate()是在组件重新渲染之前触发的，返回一个布尔值，默认返回true，<font color="	#FF6347">通过比较this.state和nextState、this/props和nextProps的值是否变化，来返回true或false</font>。当返回false时，组件更新过程停止，也不会调用render和componentDidUpdate方法。

(3) getSnapshotBeforeUpdate(prevProps, prevState)

prevProps, prevState表示更新之前的state、props，这个函数必须要和componentDidUpdate()一起使用，默认返回值为null，这个返回值作为参数传给componentDidUpdate()

<font color="	#FF6347">使用场景</font>：更新时需要用到更新之前的state和props的情况，例如，在带有滚动条的信息栏插入一条信息。

(5) componentDidUpdate(prevProps, prevState, snapshot)

componentDidUpdate()会在更新后被立即调用，首次渲染不会执行此方法，该阶段通常进行如下操作：
- 对DOM进行操作
- 进行网络请求

**组件卸载阶段**：
该阶段只有一个生命周期函数：componentWillUnmount()，会在组件卸载及销毁之前调用，在此方法中必须要执行的操作是：
- 清除网络请求
- 取消在componentDidMount()中发布的消息订阅

##### React废弃了三个生命周期函数，哪三个，为什么废除？
被废弃的三个函数分别是：<font color="	#FF6347">componentWillMount()、componentWillUpdate()、componentWillReceiveProps()</font>

1. componentWillMount()    
componentWillMount()的工作完全可以被componentDidMount()代替，比如异步请求、消息订阅等。如果使用服务器端渲染，componentWillMount会在服务器和客户端各执行一次（因为服务端渲染componentDidMount之前的函数都会被执行一次），这会导致componentWillMount()分别在客户端和服务端执行一次，如果在componentWillMount()中进行了网络请求，会请求两次，增加服务器负担；且componentWillMount()执行完后会立即执行render()，这时可能请求结果还没有返回，当请求结果返回后，又会执行一次render，造成重复渲染，性能开销大。而componentDidMount()只会在客户端执行一次。

如果在componentWillMount()进行了消息订阅，但服务器款不会执行componentWillUnMount()，这会导致无法取消消息订阅，导致服务器内存泄漏。

2. componentWillUpdate()     
componentWillUpdate()不管组件更没更新，都会执行回调函数，而有时我们希望componentWillUpdate()只在更新成功后执行回调，这可以在componentDidUpdate()中进行。所以componentWillUpdate()的作用可以被componentDidUpdate()代替。

3. componentWillReceiveProps()     
componentWillReceiveProps()是在props发生变化时触发，但是实际上props没发生变化也会触发。例如：父组件重新渲染时，子组件的componentWillReceiveProps()也会触发，会增加重绘的次数，导致效率较低。

如果在componentWillReceiveProps()中执行副作用，存在内存溢出的风险，比如发起异步action，更新redux状态数据，进而引发组件props更新，循环触发componentWillReceiveProps()

##### props改变后会在哪个生命周期函数中处理
首先在getDrivedStateFromProps()中进行处理，getDrivedStateFromProps()是一个静态函数，不能通过this访问class属性，而是通过参数提供的nextProps和prevProps进行比较，根据新传入的props来映射state。

##### React性能优化在哪个生命周期函数
shouldComponentUpdate()。如果父组件重新渲染，那么子组件也会重新渲染，大多数情况下，子组件的重新渲染是没有必要的，所以可以在子组件的shouldComponentUpdate()返回false，取消子组件的渲染，提升性能。

##### 网络请求是在哪个生命周期函数
componentDidMount()和componentDidUpdate()。这两个生命周期被触发的时机是组件已经渲染完成，可以保证数据的加载。

##### Component和PureComponent的区别
Component和PureComponent几乎完全相同，差别是PureComponent已经实现了通过props和state的浅比较来实现shouldComponentUpdate()，不需要再去实现shouldComponentUpdate()，而Component需要再实现shouldComponentUpdate()。

##### PureComponent优缺点
优点：不需要自己实现shouldComponentUpdate()就可以进行简单的判断来提升性能。

缺点：PureComponent是通过浅比较state和props，如果state或props有深层的数据，那么会出现比较错误的情况。如果浅层的数据相同，但深层的数据不同，但shouldComponentUpdate结果返回false，使组件得不到更新。

##### 说说hooks
类组件：类组件采用ES6 class的写法进行组件编写，类组件内部封装了很多东西，比如：state，生命周期函数等。我们可以在组件挂载、渲染、卸载阶段分别写不同的逻辑。但使用类组件难以拆分内部逻辑，不方便复用，因此有了函数式组件。

函数式组件真正的将数据和页面渲染绑定到了一起，实现了输入一组数据，输出一个UI，更加方便复用与拆分。但函数式组件是一种无状态组件，他不可以定义state，没有生命周期函数。而Hooks使得函数式组件有了这些能力。

##### 常用的Hooks
1. useState：状态钩子。为函数式组件提供内部状态。参数是state的默认值，返回一个数组，第一个参数是当前的state，第二个参数是更新state的方法。

函数式组件和类组件关于state的区别：
- state的声明方式：函数式通过`useState`获取；类式通过`constructor`构造函数中设置
- state的读取方式：函数组件中直接使用状态变量；类组件通过`this.state`调用状态变量
- state的更新方式：使用setState更新；类组件使用`this.setState`更新

2. useEffect：副作用钩子。<font color="#FF6347">数据获取、消息订阅、操作DOM等都属于副作用</font>。useEffect接收两个参数，第一个参数是一个回调函数，第二个参数是一个数组，可以传入state和props。只有状态数组中的状态值发生变化时才会执行回调函数中的代码。若数组为空，则useEffect只执行一次。<font color="	#FF6347">有时我们想在DOM更新后执行一些额外的代码，比如更新日志、发送请求等，就可以使用useEffect</font>。我们可以在函数式组件中实现像类组件生命周期的某个阶段(componentDidMount、componentDidUpdate、componentWillUnmount)可以完成的事。<font color="#FF6347">若传入空数组，则useEffect相当于componentDidMount；在组件销毁之前，模拟componentWillUnmount</font>

useEffect的return函数的执行时机：组件卸载时。

3. useCallback：记忆组件。当组件重新渲染的时候，会导致方法会被重新创建。使用useCallback会固定函数的引用，只要依赖项没有改变，则始终会返回之前的函数的地址。
例如：在父组件中创建了一个名为handleClick的事件处理函数并把这个handleClick传给子组件，当父组件重新渲染时，会重新创建名为handleClick函数的实例，并传给子组件，这时，新旧的handleClick函数的地址发生变化，子组件会认为props发生了改变，就会重新渲染子组件，造成了不必要的渲染。

- 在使用了useCallback后，只有依赖项改变后，才会使函数重新声明一次。
- 如果传入空数组，那么第一次创建后就被缓存，后期不管如何变化都只能拿到缓存的函数引用。
- 如果不传数组，那么每次组件渲染完后都会获得最新的函数引用

4. useMemo：记忆组件。与useCallback功能类似，useMemo是缓存函数的运算结果，通常对于计算复杂的情况适用。

5. useRef：保存引用值，操作当前DOM。useRef有两种用法：
- 保持变量的持久化，当组件重新渲染时不会重新初始化变量，而会保留之前的值。例如：使用useEffect和useRef实现componentDidUpdate
- 获取当前的DOM实例。
```js
function CustomForm() {
  const eleRef = useRef(null)
  const handleSubmit = (e) => {
    console.log(eleRef.current.value)
    e.preventDefault();
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        NAME: <input type="text" ref={eleRef} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  )
}
```

6. useConext：共享钩子。用于组件间共享状态，可以解决通过逐层传递props共享状态的麻烦。  
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

##### 为什么useState使用数组而不是对象
使用数组可以在解构useState时自由对state命名；而使用对象就必须要使用对象中的名称。

##### Hooks的注意事项
1. 不在循环、条件或嵌套函数中使用hooks
2. 必须在React函数的顶层使用hooks
3. 善用useMemo、useCallback，不要滥用useContext
4. 对于useState，修改state必须使用setState方法，不能直接修改state值

##### useEffect和useLayoutEffect的区别
1. useEffect是异步执行的，可用于处理消息订阅、发送请求等；useLayoutEffect是同步执行的，用于处理DOM操作，调整样式，避免页面闪烁等。因此要避免在useLayoutEffect中进行大量耗时的计算，可能会阻塞线程的执行。
2. useEffect的执行时机是浏览器渲染完成之后；useLayoutEffect的执行时机是浏览器把内容真正渲染到界面之前。

```js
import React, { useEffect, useLayoutEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
function App() {
  const [state, setState] = useState("hello world")
  
  useEffect(() => {
    let i = 0;
    while (i <= 100000000) {
      i++;
    };
    setState("world hello");
  }, []);

  useLayoutEffect(() => {
    let i = 0;
    while (i <= 100000000) {
      i++;
    };
    setState("world hello");
  }, []);
  
  return (
    <>
      <div>{state}</div>
    </>
  );
}
export default App;
```

useLayoutEffect可以解决屏幕闪烁的问题。如果使用useEffect，会在浏览器渲染之后再去执行，会导致`hello world`先被渲染到屏幕上，在变成`world hello`，就会出现屏幕闪烁的问题。而useLayoutEffect是在页面渲染之前执行的，会等待useLayoutEffect执行完再去渲染页面，这样就避免了闪烁。

所以最好把DOM操作放在useLayoutEffect中。

##### React.memo、useMemo和useCallback的区别
三者都是性能优化的手段。React.memo类似于类组件中的shouldComponentUpdate；useMemo和useCallback会判断props和state是否变化，从而避免每次父组件render时去创建子组件函数的实例，提升性能。

区别在于React.memo是判断一个组件是否需要被重新渲染；useCallback用于缓存函数实例，避免子组件渲染后创建与之前一样的函数实例；而useMemo用于缓存函数的计算结果，避免子组件渲染后再执行一次函数运算，针对的是一段代码逻辑是否重新执行。

### 26. 反问：如果进行CSS兼容不同浏览器？

答：浏览器私有前缀和postcss