import './App.css';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      {/* Header */}
      <div className='app_header'>
        <Header />
      </div>
      {/* Body */}
      <div className='app_body'>
        <div className='app_container'>
          <div className='newsfeed'>NewsFeed</div>
          <div className='stats'>Stats</div>
        </div>
      </div>
    </div>
  );
}

export default App;