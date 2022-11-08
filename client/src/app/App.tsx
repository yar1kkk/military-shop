import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Sidebar from "../components/sidebar/Sidebar";
import HomePage from "../pages/home/HomePage";
import LoginPage from "../pages/login/LoginPage";
import RegisterPage from "../pages/register/RegisterPage";

function App() {
  const [sidebar, setSidebar] = React.useState<boolean>(false);

  const showSidebar = () => (sidebar ? setSidebar(false) : setSidebar(true));

  return (
    <>
      <Router>
        <Header handleShow={showSidebar} />
        <Sidebar isShown={sidebar} handleShow={showSidebar} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
