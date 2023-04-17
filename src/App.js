// import logo from './logo.svg';
import './App.css';
import TopNav from './pages/dashBoard/component/topNav';
import FooterII from './pages/dashBoard/component/footerII';
import Felix from './pages/dashBoard/component/functionalComponent';
import Classwork from './Classwork';
import Tictactoe from './pages/dashBoard/component/Tictactoe';
import QuoteGenerator from './pages/dashBoard/component/RandomQuoteGenerator';
import Calculator from './pages/dashBoard/component/Calculator';


function App() {
  return (
    <div className="App">
      {/* <Classwork /> */}
      <Tictactoe />
      {/* <QuoteGenerator/> */}
      {/* <Calculator/> */}
      {/* <TopNav />
      <Felix />
       <FooterII /> */}
      {/*<FooterTwo />
      <Hero /> */}
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
