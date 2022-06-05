import AxiosTest from "./pages/AxiosTest";
import "./App.css";
import ArrayMap from "./components/ArrayMap";
import AppBar from "./components/common/AppBar";
import Welcome from "./components/Welcome";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NewsApiPage from "./pages/NewsApiPage";
import AuthPage from "./pages/AuthPage";
import AuthResult from "./pages/AuthResult";
import MainPage from "./pages/MainPage";
import BalancePage from "./pages/BalancePage";
import QrCode from "./pages/QrCode";
import QrCodeReader from "./pages/QrCodeReader";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/mainpage" element={<MainPage />} />
        <Route path="/balance" element={<BalancePage />} />
        <Route path="/news" element={<NewsApiPage />} />
        <Route path="/axiosTest" element={<AxiosTest />} />
        <Route path="/authResult" element={<AuthResult />} />
        <Route path="/qr" element={<QrCode />} />
        <Route path="/qrreader" element={<QrCodeReader />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
