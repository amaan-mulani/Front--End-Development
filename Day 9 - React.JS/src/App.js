//import logo from './logo.svg';
import './App.css';
// import MyTask1 from './component/MyTask1';
// import MyTask2 from './component/MyTask2';
// import Counter from './component/Counter';

//  import FunctionComp from './component/FunctionComp';
//  import ClassComp from './component/ClassComp';
// //importing Tasks 2 components
//  import FunctionAmaan from './component/FunctionAmaan';
//  import ClassAmaan from './component/ClassAmaan';
//  import MyMethodComp from './component/MyMethodComp';
import StateExample from './component/StateExample';  
// import ConditionalRunComp from './component/ConditionalRunComp';
//  import MyCss from './component/MyCss';
// import MyImagesComp from './component/MyImagesComp';
// import myImages from './shared folder/constant folder/constantData';
function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <FunctionComp></FunctionComp>
      <ClassComp></ClassComp> 
      <FunctionAmaan fname="Amaan" age="24"></FunctionAmaan>
      <ClassAmaan fname="Amaan" age="24"></ClassAmaan>
      <MyMethodComp></MyMethodComp> 
      
      <ConditionalRunComp></ConditionalRunComp> 
      <MyCss></MyCss> 
      <MyImagesComp></MyImagesComp>
      <myImages></myImages> */}
      {/* <MyTask1 fname="Amaan" lname="Mulani" contact="12345678" gender="Male" address="Vashi"></MyTask1>
      <MyTask2 fname="Amaan" lname="Mulani" contact="12345678" gender="Male" address="Vashi"></MyTask2>
      <Counter></Counter> */}
      <StateExample></StateExample>
    </div>
  );
}

export default App;
