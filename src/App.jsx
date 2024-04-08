import './App.css';
import { BrowserRouter,Routes ,Route } from 'react-router-dom';
import Home from './Component/home'
import Create from './Component/create';
import Read from './Component/read';
import Update from './Component/update';

function App() {
  return (
    <>
    
    <BrowserRouter>
      <Routes>
        <Route path='/' element ={<Home/>}/>
        <Route path='/create' element ={<Create/>}/>
        <Route path='/read' element ={<Read/>}/>
        <Route path='/update' element ={<Update/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
