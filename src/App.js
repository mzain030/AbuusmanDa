import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NextPage from './components/NextPage';
import Sufyan from './components/Sufyan';
import ZainNaseer from './components/ZainNaseer';
import UsmanManii from './components/UsmanManii';

function App() {
  return (
    <div className="App">
      {/* <HomePage/> */}
      {/* <Sufyan/> */}
      <UsmanManii/>
    

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/NextPage' element={<NextPage />} />
           <Route path='/Sufyan' element={<Sufyan/>} />
        </Routes>
      </BrowserRouter>




    </div>
  );
}

export default App;
