// import logo from './logo.svg';
import './App.css';
import TopNav from './pages/dashBoard/component/topNav';
import Footer from './pages/dashBoard/component/footer';
import { FooterTwo } from './pages/dashBoard/component/footer';
import Hero from './pages/dashBoard/component/hero';

function App() {
  return (
    <div className="App">
      <TopNav />
      <Footer />
      <FooterTwo />
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
