import { Layout } from "antd";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import {
  Cryptocurrencies,
  CryptoDetails,
  Exchanges,
  Homepage,
  Navbar,
  News
} from "./components";

function App() {
  return (
    <div className="App">
      <div className="main-layout">
      <div className="navbar">
      <Navbar />
    </div>
    <div className="main">
      <Layout>
        <div className="routes">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="exchanges" element={<Exchanges />} />
            <Route path="cryptocurrencies" element={<Cryptocurrencies />} />
            <Route path="/crypto/:coinId" element={<CryptoDetails />} />
            <Route path="/news" element={<News />} />
          </Routes>
        </div>
      </Layout>
    </div>
      </div>
    </div>
  );
}

export default App;
