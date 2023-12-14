import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Join from './components/Join'
import Chat from './components/Chat'

function App() {
  return (
    <div className="App">
     <Router>
      <Routes>
        <Route path='/' exact Component={Join}/>
        <Route path='/chat'  Component={Chat}/>
      </Routes>
     </Router>
    </div>
  );
}

export default App;
