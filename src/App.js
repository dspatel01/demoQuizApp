import './App.css';
import Home from './component/home/Home';
import HtmlQuestion from './pages/HtmlQuestion';
import CssQuestion from './pages/CssQuestion';
import JavaQuestion from './pages/JavaQuestion';
import JavaScriptQuestion from './pages/JavaScriptQuestion';
import PhpQuestion from './pages/PhpQuestion';
import SqlQuestion from './pages/SqlQuestion';
import HtmlQuestionPage from './pages/HtmlQuestionPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './component/nav/Navbar';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/HtmlQuestion' element={<HtmlQuestion />} />        
          <Route exact path='/csslQuestion' element={<CssQuestion />} />
          <Route exact path='/javaQuestion' element={<JavaQuestion />} />
          <Route exact path='/javascriptQuestion' element={<JavaScriptQuestion />} />
          <Route exact path='/phpQuestion' element={<PhpQuestion />} />
          <Route exact path='/sqlQuestion' element={<SqlQuestion />} />
          <Route exact path='/htmlQuestionPage' element={<HtmlQuestionPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
