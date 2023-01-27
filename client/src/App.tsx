import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "./App.css";
import SignIn from "./pages/Auth/SignIn";
import SignUp from "./pages/Auth/SignUp";


const App = () => {
  return (

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />

          {/* Protected route for subscriber*/}

        </Routes>
        <ToastContainer autoClose={8000} />
      </BrowserRouter>

  );
};

export default App;
