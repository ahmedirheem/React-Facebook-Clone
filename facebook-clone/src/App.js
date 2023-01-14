import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widget from './Widget';

function App() {
  return (
    <div className="App">
      <h1>Welcome</h1>

      <Header />

      {/* App body */}
        <div className="app_body">
          <Sidebar/>
          <Feed/>
          <Widget/>
        </div>
    </div>
  );
}

export default App;
