
import './App.css';
import Footer from './Components/Footer';

import Nav from './Components/Nav';
import { BrowserRouter,Route ,Routes} from 'react-router-dom';
import Signup from './Components/Signup';
import PrivateComponent from './Components/PrivateComponent';
import Login from './Components/Login';
import AddProduct from './Components/AddProduct';
import ProductList from './Components/ProductList';

function App() {
  return (
    <>
    <BrowserRouter>
    <Nav/>
    <Routes>

      <Route element = {<PrivateComponent/>}>
      <Route path='/'element={<ProductList/>}></Route>
     
      <Route path='/add'element={<AddProduct />}/>
      <Route path='/update'element={<h1>Update Product Component</h1>}></Route>
      <Route path='/logout'element={<h1>logout Component</h1>}></Route>
      <Route path='/profile'element={<h1>Profile Product list Component</h1>}></Route>
    </Route>
      <Route path='/signup'element={<Signup/>} />
      <Route path='/login' element={<Login/>} />
    </Routes>
    <Footer></Footer>
    </BrowserRouter>
    </>
  );
}

export default App;
