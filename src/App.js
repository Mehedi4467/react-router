
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Componenets/About/About';
import Contact from './Componenets/Contact/Contact';
import Header from './Componenets/Header/Header';
import Home from './Componenets/Home/Home';
import NotFound from './Componenets/NotFound/NotFound';
import Shop from './Componenets/Shop/Shop';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/shop' element={<Shop></Shop>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
