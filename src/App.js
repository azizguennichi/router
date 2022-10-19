import Signup from './components/Signup';
import './App.css';
import {Routes,Route} from 'react-router-dom';
import Home from './components/Home';
function App() {
  return (
    <div>
       <Signup />
       <Routes>
<Route path='/Home' element={<Home />}>

</Route>
       </Routes>
    </div>
  );
}

export default App;
