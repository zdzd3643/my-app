import logo from './logo.svg';
import './App.css';

function App() {
  let isrc = 'https://image.cine21.com/resize/cine21/person/2019/1030/11_35_56__5db8f70c422b9[X252,310].jpg'
  return (
    <div className="App">
      <header className="App-header">
        <img src={isrc} 
        style={{borderRadius:'50%'}}
        className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          공유도 리액트한다~!
        </a>
      </header>
    </div>
  );
}

export default App;
