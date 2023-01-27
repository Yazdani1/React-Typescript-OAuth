import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import {useState,useEffect} from 'react';

import "./App.css";
import SignIn from "./pages/Auth/SignIn";
import SignUp from "./pages/Auth/SignUp";
import Dashboard from "./pages/Dashboard/Dashboard";
import {getUserInfo} from "./services/API";


const App = () => {


  
  const [userInfo, setUserInfo] = useState<any>(null);

  const loadUserInfo = async () => {
    try {
      const res = await getUserInfo();
      if (res) {
        setUserInfo(res.data.user);
        localStorage.setItem('access_token', res.data.token);
        console.log("Token info"+res.data.token);
      }
    } catch (error: any) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadUserInfo();
  }, []);




  return (

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />

          {/* Protected route for subscriber*/}

          <Route path="/dashboard" element={ userInfo && <Dashboard />} />


        </Routes>
        <ToastContainer autoClose={8000} />
      </BrowserRouter>

  );
};

export default App;
