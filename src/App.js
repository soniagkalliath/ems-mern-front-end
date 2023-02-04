import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router , Routes , Route } from "react-router-dom";
import Add from './components/Add'
import Edit from './components/Edit'
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/add' element={<Add/>}/>
          <Route path='/edit' element={<Edit/>}/>

         
        </Routes>
      </Router>
    </div>
  );
}

export default App;
