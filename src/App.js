import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './components/Content/Home/Home';
import Create from './components/Content/Create/Create';
import Update from './components/Content/Updated/Update';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/create' element = {<Create/>}/>
        <Route path='/edit/:id' element = {<Update/>}/>
      </Routes>
    </div>
  );
}

export default App;
