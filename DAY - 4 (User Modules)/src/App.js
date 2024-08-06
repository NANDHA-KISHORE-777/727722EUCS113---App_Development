// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { CartProvider } from './CartContext';
import Login from './Login';
import SignUp from './SignUp';
import Home from './Home';
import Features from './Features';
import AboutUs from './AboutUs';
import Contact from './Contact';
import Footer from './Footer';
import Dashboard from './components/Dashboard';
import AppBar1 from './components/AppBar1';
import Items from './Items';
import AddSalesOrderPage from './AddSalesOrderPage';
import InventoryManager from './InventoryManager';
import CartPage from './CartPage';
import ItemGroupsManager from './ItemGroupsManager';
import Sidebar from './components/Sidebar1';
import PackagesDashboard from './PackagesDashboard';
import SalesDashboard from './SalesDashboard';
import { useUserContext } from './UserContext';
import { AuthProvider } from './AuthContext';
import './styles.css';

const sampleItems = {
  groups: {
    'Footwear': [
      { productName: 'Puma sneaker', productSKU: '5', productPrice: '6000', description: 'Unisex' },
      { productName: 'Nike sneaker', productSKU: '15', productPrice: '6700', description: 'Unisex' },
      { productName: 'Woodland shoe', productSKU: '35', productPrice: '4300', description: 'Unisex' },
      { productName: 'Adidas shoe', productSKU: '35', productPrice: '3999', description: 'Unisex' },
      { productName: 'Bata slippers', productSKU: '35', productPrice: '599', description: 'Unisex' },
    ],
    'Personal Care': [
      { productName: 'Himalaya', productSKU: '60', productPrice: '150', description: 'Body soap' },
      { productName: 'Lakme', productSKU: '24', productPrice: '350', description: 'Face cream' },
      { productName: 'Serum', productSKU: '20', productPrice: '799', description: 'Hair' },
      { productName: 'Titan - Country Road', productSKU: '99', productPrice: '600', description: ' Perfume'},
      { productName: 'Acne UV', productSKU: '10', productPrice: '999', description: 'Sunscreen (SPF-30)' },
    ],
    'Attires': [
      { productName: 'Jockey vest', productSKU: '17', productPrice: '200', description: 'All size' },
      { productName: 'Arrow', productSKU: '12', productPrice: '1599', description: 'Shirt' },
      { productName: 'Peter England', productSKU: '10', productPrice: '2999', description: 'Jean Pant' },
      { productName: 'Allen Solly', productSKU: '5', productPrice: '1200', description: 'Shirt' },
      { productName: 'Reymond', productSKU: '35', productPrice: '1000', description: 'Shirt' },
    ],
    'Electronics': [
      { productName: 'MI PowerBank', productSKU: '15', productPrice: '2250', description: '20000mah' },
      { productName: 'pixel 6a', productSKU: '5', productPrice: '75000', description: '18gb ram, 128gb rom, marble black.' },
      { productName: 'Apple Iphone 15 pro max', productSKU: '1', productPrice: '159999', description: '8gb ram, 256gb rom, blue titanium.' },
      { productName: 'Vivo Adapter', productSKU: '18', productPrice: '1000', description: '67 Watt - Fast Charger.' },
      { productName: 'Sony LED TV', productSKU: '25', productPrice: '110000', description: '65 inches with Android features.' },
    ],
  },
};

const App = () => {
  const location = useLocation();
  const { userRole } = useUserContext();

  const isHomePage = location.pathname === '/';
  const isLoginPage = location.pathname === '/login';
  const isSignUpPage = location.pathname === '/signup';
  const isAboutPage = location.pathname === '/about';
  const isFeaturePage = location.pathname === '/features';

  const showAppBarAndSidebar = !isHomePage && !isLoginPage && !isSignUpPage && !isAboutPage && !isFeaturePage;

  return (
    <AuthProvider>
      <CartProvider>
        <div>
          {showAppBarAndSidebar && <AppBar1 />}
          <div style={{ display: 'flex' }}>
            {showAppBarAndSidebar && <Sidebar />}
            <div style={{ flexGrow: 1, padding: '20px', marginLeft: showAppBarAndSidebar ? '232px' : '0', paddingTop: showAppBarAndSidebar ? '60px' : '0' }}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/login" element={<Login />} />
                <Route path="/features" element={<Features />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/admin-dashboard" element={<Dashboard />} />
                <Route path="/appbar" element={<AppBar1 />} />
                <Route path="/inventory/items" element={<Items />} />
                <Route path="/item-groups" element={<ItemGroupsManager items={sampleItems} isAdmin={userRole === 'admin'} />} />
                <Route path="/add-sales-order" element={<AddSalesOrderPage />} />
                <Route path="/inventory-manager" element={<InventoryManager />} />
                <Route path="/order-management" element={<CartPage />} />
                <Route path="/sales/packages" element={<PackagesDashboard />} />
                <Route path="/sales/orders" element={<SalesDashboard />} />
              </Routes>
              {location.pathname === '/contact' && <Footer />}
            </div>
          </div>
        </div>
      </CartProvider>
    </AuthProvider>
  );
};

export default App;
