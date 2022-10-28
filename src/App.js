import './App.css';
import {RouterProvider} from 'react-router-dom'
import { routes } from './Routes/Routes/Routes';
import toast, { Toaster } from 'react-hot-toast';
import { useContext } from 'react';
import { AuthContext } from './contexts/AuthProvider/AuthProvider';

function App() {
  const {theme} = useContext(AuthContext);
  return (
    <div className={theme}>
      <RouterProvider router = {routes}></RouterProvider>
      <Toaster />
    </div>
  );
}

export default App;
