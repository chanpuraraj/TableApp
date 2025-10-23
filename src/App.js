import logo from './logo.svg';
import './App.css';
import Table from './Table';

function App() {
  const data = [
    { id: 1, name: 'Alice', role: 'Admin', location: 'New York' },
    { id: 2, name: 'Bob', role: 'User', location: 'San Francisco' },
    { id: 3, name: 'Charlie', role: 'Moderator', location: 'Los Angeles' }
  ];

  return(
    <div style={{padding: '20px'}}>
      <h1>Employee Table</h1>
      <Table data = {data}/>
    </div>
  );
  /*return (
    <div className="App">
      <header className="App-header">
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
      </header>
    </div>
  );*/
}

export default App;
