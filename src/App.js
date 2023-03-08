import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
	  한글로 눈에 띄게 커밋하기
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
	  리액트를 배우자!
        </a>
      </header>
	  <button>
	  	Beautiful Button
	  </button>
	  <footer>
	  	Ugly Footer
	  	Another Footer
	  </footer>
    </div>
  );
}

export default App;
