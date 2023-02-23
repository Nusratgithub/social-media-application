import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router';
import router from './routes/route';

function App() {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
