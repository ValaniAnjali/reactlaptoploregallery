import React from 'react';
import './Home.css'; // Assuming you have a separate CSS file for additional styling
import carouselImg from './assets/11.png';
import sale from './assets/sale.jpg';

const Home = () => {
    return (
        <div className="home-container">
            <section className="content">
                <h2>LAPTOP COLLECTION</h2>
                <p>Hello..This Website Is Here To Help You Select The Best Laptop According To Your Requirements.</p>
                
                <button type="button" className="btn btn-primary" >
                    Sell is Here
                </button>

                <div id="myCarousel" className="carousel slide carousel-custom-size" data-bs-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-bs-target="#myCarousel" data-bs-slide-to="0" className="active"></li>
                        <li data-bs-target="#myCarousel" data-bs-slide-to="1"></li>
                        <li data-bs-target="#myCarousel" data-bs-slide-to="2"></li>
                    </ol>

                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={carouselImg} className="d-block w-100" alt="Slide 1" />
                        </div>
                        <div className="carousel-item">
                            <img src={sale} className="d-block w-100" alt="Slide 2" />
                        </div>
                        <div className="carousel-item">
                            <img src={carouselImg} className="d-block w-100" alt="Slide 3" />
                        </div>
                    </div>

                    <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </section>
        </div>
    );
};

export default Home;
