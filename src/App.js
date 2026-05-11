import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NextPage from './components/NextPage';
import Sufyan from './components/Sufyan';
import ZainNaseer from './components/ZainNaseer';
import UsmanManii from './components/UsmanManii';
import Yes from './components/Yes';

function App() {
  return (
    <div className="App">
      {/* <HomePage/> */}
      {/* <Sufyan/> */}
      <UsmanManii/>
      <ZainNaseer/>
      <Yes/>
      <h1>safyyan gndooo</h1>
       <h1>add by sufyan</h1>
    
<h3>Zain naseer</h3>
<h3>Naseer</h3>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/NextPage' element={<NextPage />} />
           <Route path='/Sufyan' element={<Sufyan/>} />
        </Routes>
        <h2>usman younas</h2>
        <h2>sir zain naseer saab</h2>
      </BrowserRouter>




    </div>
  );
}

export default App;
