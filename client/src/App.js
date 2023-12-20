
import {Routes,Route} from 'react-router-dom'
import Homepage from './pages/Homepage';
import About from './pages/About';
import PageNotFound from './pages/PageNotFound';
import Login from './pages/auth/Login';
import Dashboard from './pages/Dashboard';
import CreateProduct from './pages/CreateProduct'
import ListingProduct from './pages/ListingProduct'
import ViewProducts from './pages/ViewProducts'
function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/dashoard' element={<Dashboard/>}/>  
      <Route path='/dashboard/create-product' element={<CreateProduct/>}/>   
      <Route path='/dashboard/list-product' element={<ListingProduct/>}/>   
      <Route path='/dashboard/view-product' element={<ViewProducts/>}/>   
  
      <Route path='*' element={<PageNotFound/>}/>
    </Routes>
    </>
 
  );
}

export default App;
