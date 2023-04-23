import logo from './logo.svg';
import './App.css';
import ParentComponent from './props/ParentComponent';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <h1>hello world</h1>
      </header> */}

      <h1>App Component</h1>
      <ParentComponent />
    </div>
  );
}

export default App;
