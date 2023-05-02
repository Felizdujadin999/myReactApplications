// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'; 
import TopNav from './pages/dashBoard/component/topNav';
import FooterII from './pages/dashBoard/component/footerII';
import Felix from './pages/dashBoard/component/functionalComponent';
import Classwork from './Classwork';
import Tictactoe from './pages/dashBoard/component/Tictactoe';
import QuoteGenerator from './pages/dashBoard/component/RandomQuoteGenerator';
import Calculator from './pages/dashBoard/component/Calculator';
import StateMgtWithReducer from './pages/dashBoard/component/StateMgtWithReducer';
import Cycle from './pages/dashBoard/component/Cycle';
import FrontCyclePage from './pages/dashBoard/component/CycleFrontPage';
import TrackPeriod from './pages/dashBoard/component/TrackPage';
import TodoList from './pages/dashBoard/component/TodoList';
import CounterComponent from './pages/dashBoard/component/CounterComponent';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>`
          {/* <Route path='/tictactoe' element={<Tictactoe />} /> */}
          <Route path='/Cycle' element={<Cycle />} />
          <Route path='/StateReducer' element={<StateMgtWithReducer />}/>
          <Route path='/FrontPage' element={<FrontCyclePage />} />
          <Route path='/TrackPeriod' element={<TrackPeriod />} />
          <Route path='/ToDoList' element={<TodoList />} />
          <Route path='/counter' element={<CounterComponent />} />
          {/* <Route path='/quoteGenerator' element={<QuoteGenerator/>} /> */}
          {/* <Route path='/calculator' element={<Calculator/>} /> */}
          {/* <Route path='/classwork' element={<Classwork />} /> */}
        </Routes>
      </Router>
      {/* <TopNav />
      <Felix />
       <FooterII />  */}
      {/*<FooterTwo />
      <Hero />
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
    </div>
  );
}

export default App;
