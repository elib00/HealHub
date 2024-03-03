import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  RouterProvider,
  Route,
  Navigate
} from 'react-router-dom';

import AuthLayout from './layouts/AuthLayout';
import RootLayout from './layouts/RootLayout';
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";

function App() {
  const routes = (
    <Route path="/">
      <Route index element={<Navigate to="auth"/>}></Route>
      <Route path="auth" element={<AuthLayout />}>
        <Route index element={<Navigate to="register"/>}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="register" element={<Register />}></Route>
      </Route>
      <Route path="home" element={<Home />}>
      </Route>
    </Route>
  );

  const router = createBrowserRouter(createRoutesFromElements(routes));

  return (
    <RouterProvider router={router} />
  );

}

export default App
