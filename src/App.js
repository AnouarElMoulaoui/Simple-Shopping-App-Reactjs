import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Detail from "./components/products/Detail";
import { UserContext } from "./contexts/UserContext";
import Card from "./pages/card/Card";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";

const App = ()  => {
  const {token} = useContext(UserContext);
  return (
      <div>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/product/Detail/:id" exact element={token ? <Detail /> : <Login/>} />
          <Route path="/card" exact element={token ? <Card /> : <Login />} />
        </Routes>
      </div>
    )
}
export default App;