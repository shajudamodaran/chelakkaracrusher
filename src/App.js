import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.min.css'

import { BrowserRouter } from "react-router-dom";
import MainLayout from './Components/MainLayout/MainLayout';

function App() {
  return (

    <>

      <BrowserRouter>
        <MainLayout />
      </BrowserRouter>

    </>

  );
}

export default App;
