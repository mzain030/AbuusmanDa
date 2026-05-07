import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NextPage from './components/NextPage';
import Sufyan from './components/Sufyan';
import ZainNaseer from './components/ZainNaseer';

function App() {
  return (
    <div className="App">
      {/* <HomePage/> */}
      <Sufyan/>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/NextPage' element={<NextPage />} />
        </Routes>
      </BrowserRouter>
   {/* <HomePage/> */}
<ZainNaseer/>


    </div>
  );
}

export default App;
