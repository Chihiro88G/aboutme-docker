import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import Home from './pages/Home';


function App() {
  return (
    <>
      <BrowserRouter>
        <SwitchRoutes />
      </BrowserRouter>
    </>
  );
}

export default App;

function SwitchRoutes() {
  return(
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<Home />} />
        {/* <Route path='/about' element={<About />} /> */}
      </Route>
    </Routes>
  );
}
