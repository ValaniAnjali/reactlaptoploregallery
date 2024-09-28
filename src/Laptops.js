import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import your images here
import laptopImage1 from './assets/acer1.jpg';
import laptopImage2 from './assets/apple1.jpg';
import laptopImage3 from './assets/hp.png'; 
import laptopImage4 from './assets/hp11.jpg'; 
import './laptop.css';  // Import custom CSS

const Laptops = () => {
  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-md-3">
          <div className="card">
            <img src={laptopImage1} className="card-img-top" alt="HP Chromebook X360" />
            <div className="card-body">
              <h5 className="card-title">HP Chromebook X360</h5>
              <p className="card-text">
                Low price. ₹16,990<br/>
                4–64 GB RAM · 32 GB drive–1 TB
              </p>
              <Link to="/purchase" className="btn btn-primary">Purchase</Link>
            </div>
          </div>
        </div>
        
        <div className="col-md-3">
          <div className="card">
            <img src={laptopImage2} className="card-img-top" alt="HP 15s, AMD Ryzen 3" />
            <div className="card-body">
              <h5 className="card-title">HP 15s, AMD Ryzen 3</h5>
              <p className="card-text">
                Price:<strike>Rs.47557</strike> (24% Off)<br/>Rs.35990
              </p>
              <details>
                <summary>Details</summary>
                <p>11th Gen Intel Core i3-1115G4, 15.6-inch (39.6 cm), FHD, 8GB DDR4, 512GB SSD, Intel UHD Graphics</p>
              </details>
              <Link to="/purchase" className="btn btn-primary">Purchase</Link>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card">
            <img src={laptopImage3} className="card-img-top" alt="HP Laptop 15s" />
            <div className="card-body">
              <h5 className="card-title">HP Laptop 15s</h5>
              <p className="card-text">
                Price:<strike>Rs.67832</strike> (24% Off)<br/>Rs.51999
              </p>
              <details>
                <summary>Details</summary>
                <p>12th Gen Intel Core i5-1235U, 15.6-inch (39.6 cm), FHD, 8GB DDR4, 512GB SSD, Intel Iris Xe Graphics, Backlit KB, Thin & Light</p>
              </details>
              <Link to="/purchase" className="btn btn-primary">Purchase</Link>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card">
            <img src={laptopImage4} className="card-img-top" alt="HP 2023 Newest Laptop, 15.6" />
            <div className="card-body">
              <h5 className="card-title">HP 2023 Newest Laptop, 15.6"</h5>
              <p className="card-text">
                Price:<strike>Rs.97018</strike> (20% Off)<br/>Rs.77615
              </p>
              <details>
                <summary>Details</summary>
                <p>12th Gen Intel Core i5-1235U, 15.6-inch (39.6 cm), FHD, 8GB DDR4, 512GB SSD, Intel Iris Xe Graphics, Backlit KB, Thin & Light</p>
              </details>
              <Link to="/purchase" className="btn btn-primary">Purchase</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Laptops;
