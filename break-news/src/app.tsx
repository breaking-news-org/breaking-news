import React from "react";
import HomePage from "./containers/homePage";
import ContactPage from "./containers/contactPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/mainLayout";
import "./styles/App.css";


const App = () => {
  return (
    <BrowserRouter basename="/">
      <MainLayout>
        <Routes>
          <Route path="*" element={<HomePage />}></Route>
          <Route path="home" element={<HomePage />}></Route>
          <Route path="contacts" element={<ContactPage />}></Route>
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
};

export default App;