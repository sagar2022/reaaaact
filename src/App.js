import Navbar from "./components/Navbar";
import Home from './components/pages/Home';
import { Routes, Route } from 'react-router-dom';
import Blog from "./components/pages/Blog";
import Contact from "./components/pages/Contact";
import Portfolio from "./components/pages/Portfolio";
import Github from "./components/blogs/blogPages/Github";
import Css from "./components/blogs/blogPages/Css";
import ReactBlog from "./components/blogs/blogPages/ReactBlog";
import Javascript from "./components/blogs/blogPages/Javascript";



function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path='/blog' element={ <Blog /> } />
        <Route path='/contact' element={ <Contact /> } />
        <Route path='/portfolio' element={ <Portfolio /> } />
        <Route path='/github' element={ <Github /> } />
        <Route path='/css' element={ <Css /> } />
        <Route path='/react' element={ <ReactBlog /> } />
        <Route path='/javascript' element={ <Javascript /> } />
      </Routes>
    </div>
  );
}

export default App;
