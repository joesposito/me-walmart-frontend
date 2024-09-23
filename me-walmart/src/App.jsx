import './styles/App.css';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:productId" element={<ProductPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
