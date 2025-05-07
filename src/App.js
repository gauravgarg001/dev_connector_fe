import React, { useEffect } from 'react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Routers from './Component/RoutesAndLayout';
import ProgressBar from './Hooks/use-nprogress';

function App() {
  return (<>
    <ProgressBar/>
      <Routers/>
    <ToastContainer/>
  </>);
}

export default App;