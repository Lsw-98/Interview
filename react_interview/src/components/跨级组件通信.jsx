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
      <button onClick={() => (
        setValue(value + 1),
        setValue(value + 2)
      )}>value + 1</button>
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
