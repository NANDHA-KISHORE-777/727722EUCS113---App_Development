// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import './home.css';
// import Footer from './Footer';
// import images from './Assets/index1'

// function Home() {
//   const navigate = useNavigate();

//   const handleLogin = () => {
//     navigate('/login'); // Assuming the login page route is '/login'
//   };

//   return (
//     <div>
//       {/* <Navbar /> */}
//       <div className="home">
//         <header className="hero">
//           <h1>Welcome to Our Supply Chain Management!!!</h1>
//           <p>Unified service management platform for the digital enterprise</p>
//           <button onClick={handleLogin} className="login-btn">Login</button>
//         </header>
//         <section className="about">
//           <img src={images.inve3} alt='About us'/>
//           <div className="about-text">
//             <h2>About Us</h2>
//             <p>
//               Our Inventory Management System is designed to help businesses track and manage their inventory with ease.
//               From tracking stock levels to generating detailed reports and managing orders, our system provides all the
//               tools you need to keep your business running smoothly.
//             </p>
//             <p>
//               We prioritize security and reliability to ensure your data is always safe and accessible. Our user-friendly
//               interface and comprehensive features make us a trustworthy partner for your business.
//             </p>
//           </div>
//         </section>
//         <section className="gallery">
//           <h2>Features</h2>
//           <div className="gallery-images">
//             <div className="gallery-item">
//               <img src={images.inve1} alt="Track Inventory" />
//               <p>Track Inventory</p>
//             </div>
//             <div className="gallery-item">
//               <img src={images.inve4} alt="Generate Reports" />
//               <p>Generate Reports</p>
//             </div>
//             <div className="gallery-item">
//               <img src={images.inve2} alt="Manage Orders" />
//               <p>Manage Orders</p>
//             </div>
//           </div>
//         </section>
//       </div>
//       <Footer />
//     </div>
//   );
// }

// export default Home;


import React from 'react';
import { useNavigate } from 'react-router-dom';
import './home.css';
import Footer from './Footer';
import images from './Assets/index1';
import AppBar from './AppBar'; // Import the AppBar component

function Home() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login'); // Assuming the login page route is '/login'
  };

  return (
    <div>
      <AppBar /> {/* Include the AppBar component */}
      <div className="home">
        <header className="hero">
          <h1>Welcome to Our Supply Chain Management!!!</h1>
          <p>Unified service management platform for the digital enterprise</p>
          <button onClick={handleLogin} className="login-btn">Login</button>
        </header>
        {/* <section className="about">
          <img src={images.inve3} alt='About us'/>
          <div className="about-text">
            <h2>About Us</h2>
            <p>
              Our Inventory Management System is designed to help businesses track and manage their inventory with ease.
              From tracking stock levels to generating detailed reports and managing orders, our system provides all the
              tools you need to keep your business running smoothly.
            </p>
            <p>
              We prioritize security and reliability to ensure your data is always safe and accessible. Our user-friendly
              interface and comprehensive features make us a trustworthy partner for your business.
            </p>
          </div>
        </section>
        <section className="gallery">
          <h2>Features</h2>
          <div className="gallery-images">
            <div className="gallery-item">
              <img src={images.inve1} alt="Track Inventory" />
              <p>Track Inventory</p>
            </div>
            <div className="gallery-item">
              <img src={images.inve4} alt="Generate Reports" />
              <p>Generate Reports</p>
            </div>
            <div className="gallery-item">
              <img src={images.inve2} alt="Manage Orders" />
              <p>Manage Orders</p>
            </div>
          </div> */}
        {/* </section> */}
      </div>
      <Footer />
    </div>
  );
}

export default Home;
