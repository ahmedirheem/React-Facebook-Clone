import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';

function App() {
  return (
    <div className="App">
      <h1>Welcome</h1>

      <Header />

      {/* App body */}
        <div className="app_body">
          <Sidebar/>
          <Feed/>
        </div>
        {/* Widget */}
    </div>
  );
}

export default App;
