import './App.css';
import Header from './components/Header/Header';
import Newsfeed from './components/NewsFeed/Newsfeed';
import Stats from './components/Stats/Stats';

function App() {
  return (
    <div className="app">
      <div className='app_header'>
        <Header />
      </div>
      <div className='app_body'>
        <div className='app_container'>
          <Newsfeed />
          <Stats />
        </div>
      </div>
    </div>
  );
}

export default App;