import './App.css';
import { BrowserRouter,Routes ,Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import User from './Component/User'


function App() {
  return (
    <>
    <div>
      <h1>nav</h1>
    </div>
    
    <BrowserRouter>
      <Routes>
        <Route path='/user' element={<User/>}/>
    
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
