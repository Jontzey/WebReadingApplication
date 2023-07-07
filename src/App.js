
import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './RouterComponents/Home';
import Header from './UiComponents/HeaderComp';
import Mangas from './RouterComponents/Mangas';
import NotFound from './UiComponents/NotFound';
import MangaSelected from './Components/MangaSelected';
import MangaImage from './Components/MangaImage';
function App() {
  return (
    <div className="App">
        
    <Router>
      <Header/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/Mangas' element={<Mangas/>}/>
      <Route path="/MangaLibrary/:id" element={<MangaSelected/>}/>
      <Route path="/MangaLibrary/:id/:id2" element={<MangaImage/>}/>

      <Route path='/*' element={<NotFound/>}/>
       
      </Routes>
    </Router>
    </div>
  );
}

export default App;
