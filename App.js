import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen"
import SignUpScreen from './screens/SignUpScreen';
import HomeScreen from './screens/HomeScreen';
import BookForm from "./screens/BookForm"


const router = createBrowserRouter([
  { path: "/login", element: <LoginScreen /> },
  { path: "/signup", element: <SignUpScreen /> },
  { path: "/", element: <HomeScreen /> },
  { path: "/add-book", element: <BookForm /> },
])

function App() {
  return <RouterProvider router={router} />;
}

export default App;
