
import './App.css';
import Nav from './Nav';
import { BrowserRouter,Route ,Routes} from 'react-router-dom';
function App() {
  return (
    <>
    <BrowserRouter>
    <Nav/>
    <Routes>
      <Route path='/'element={<h1>Product list Component</h1>}></Route>
      <Route path='/add'element={<h1>Add Product  Component</h1>}></Route>
      <Route path='/update'element={<h1>Update Product Component</h1>}></Route>
      <Route path='/logout'element={<h1>logout Component</h1>}></Route>
      <Route path='/profile'element={<h1>Profile Product list Component</h1>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
