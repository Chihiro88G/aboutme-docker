import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects'

function App() {
  return (
    <>
      <Router>
        <SwitchRoutes />
      </Router>
    </>
  );
}

export default App;

function SwitchRoutes() {
  return(
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/projects' element={<Projects />} />
      </Route>
    </Routes>
  );
}
