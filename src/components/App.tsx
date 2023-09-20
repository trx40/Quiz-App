import SignIn from "./SignIn";
import Form from "./Form"
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import Quiz from "./Quiz";

const router = createBrowserRouter([
  {
    path: '/',
    element: <SignIn />
  },
  {
    path: '/form',
    element: <Form />
  },
  {
    path: '/quiz',
    element: <Quiz />
  },
  {
    path: '/result',
    element: <div>Result Component</div>
  },
])

// import Button from "@mui/material/Button";

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
    <RouterProvider router={router} />
    </LocalizationProvider>
  );
}

export default App;
