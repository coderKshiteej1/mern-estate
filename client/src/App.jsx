import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Signinnn from './pages/Signinnn';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import About from './pages/About';
import Heeader from './components/Heeader';
export default function App() {
  return <BrowserRouter>
  <Heeader/>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/sign-in' element={<Signinnn/>}/>
    <Route path='/sign-out' element={<Signup/>}/>
    <Route path='/profile' element={<Profile/>}/>
    <Route path='/about' element={<About/>}/>
  </Routes>
    </BrowserRouter>
}