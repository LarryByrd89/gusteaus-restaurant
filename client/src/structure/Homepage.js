
import orange from '../assets/images/orange-dishes.png'
import fish from '../assets/images/fish-dish.png'
import spaghetti from '../assets/images/spaghetti-dish.png'
import soup from '../assets/images/soup-dish.png'
import bun from '../assets/images/bun-dish.png'
import yellow from '../assets/images/yellow-dish.png'
import star from '../assets/images/star-dish.png'


import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
    // const [isDropdownOpen, setDropdownOpen] = useState(false);

    // const toggleDropdown = () => {
    //     setDropdownOpen(!isDropdownOpen);
    // };
    
return(
    <>

    {/* <header>
        <div className="logo-nav container">

        <div class="scrolling-words-container">
  <div class="scrolling-words-box">
    <ul>
    <li>1800 S Main St, Roswell NY </li>
    <li>575-627-0144</li>
    <li>Opening Hours From 1:00pm - 10:00pm</li>
    </ul>
  </div>
</div>

            <div className="logo">
                <img src={siteIcon} alt="Le Bon Manges"/>
            </div>
            <div className="nav">
                <nav>
                <label>
                <input type="checkbox"/>
                <span class="menu"> <span class="hamburger"></span> 
                </span>
                <ul>
                <li> <Link to="/">Home</Link> </li>
                <li> <Link to="/about">About Us</Link> </li>
                <li> <a href="#">Dinner Menu</a> </li>
                <li> <a href="#">Patron Perks</a> </li>
                <li> <a href="#">Contact</a> </li>
                </ul>
                </label>
                </nav>
            </div>
        </div>
        </header> */}

<section className="intro clearfix">
    <div className="showcase"></div>
</section>

<section className="section-two">

<div className="sectwo-header container">
      <h1>C&apos;est Le Bon Mange </h1>
      <h2>This Is<em>The Good Eats</em></h2>
      <hr/>
</div>

<div className="desc-gallery">



</div>

<div className="gallery-and-desc container">

<div className="description">
  <p>We welcome you to our new franchise expansion to the country. This restaurant is a part of the eight wordplay restaurant since 1963, originating from our head chef in France.</p>
      
  <p>
  But each of our restaurants carry out the same high quality, atmosphere, service and most importantly a palette surprise for everyone to remember.
  </p>

  <p>So please peruse around to your heart&apos;s content.</p>
</div>
<div className="gallery-container">
  <div className="carousel">
    <div className="carousel__face"></div>
    <div className="carousel__face"></div>
    <div className="carousel__face"></div>
    <div className="carousel__face"></div>
    <div className="carousel__face"></div>
    <div className="carousel__face"></div>
    <div className="carousel__face"></div>
    <div className="carousel__face"></div>
    <div className="carousel__face"></div>
  </div>
</div>
</div>
</section>

<section className="section-three">
            <div>
            <div className="sec-three-header container">
                <h2>Our Staff and Process</h2>
                <h3>From Prep To Platter</h3>
            </div>
            <div className="pllx-and-desc">
            <div className='home-parallax'></div>

            <p className='container sec-three-desc'>
                Our restaurant has always been full of people with different skill sets and hidden talents from veteran chefs to the new cooks and charismatic waiters to swift servers. Even our original founders were an unlikely combination. 
                <p>Here we value  creativity, talent, and most of all honesty to ourselves, our work, and those who enjoy our service.</p>
            </p>
            </div>
            </div>
        </section>

        <section className="section-four">
        <div className="slider-one">
        <div className="slider">
        <div className="slide-track">
            <div className="slide">
                <img src={orange} height="400" width="380" alt="" />
            </div>
            <div className="slide">
                <img src={fish} height="400" width="380" alt="" />
            </div>
            <div className="slide">
                <img src={spaghetti} height="400" width="380" alt="" />
            </div>
            <div className="slide">
                <img src={soup} height="400" width="350" alt="" />
            </div>
            <div className="slide">
                <img src={bun} height="400" width="350" alt="" />
            </div>
            <div className="slide">
                <img src={yellow} height="400" width="350" alt="" />
            </div>
            <div className="slide">
                <img src={star} height="400" width="350" alt="" />
            </div>
            <div className="slide">
                <img src={orange} height="400" width="380" alt="" />
            </div>
            <div className="slide">
                <img src={fish} height="400" width="380" alt="" />
            </div>
            <div className="slide">
                <img src={spaghetti} height="400" width="380" alt="" />
            </div>
            <div className="slide">
                <img src={soup} height="400" width="350" alt="" />
            </div>
            <div className="slide">
                <img src={bun} height="400" width="350" alt="" />
            </div>
            <div className="slide">
                <img src={yellow} height="400" width="350" alt="" />
            </div>
            <div className="slide">
                <img src={star} height="400" width="350" alt="" />
            </div>
          
          
            </div>
        </div>
    </div>
</section>

<section className="secfour-header container">
        <h2>Discover A Whole New Culinary Journey</h2>
        <p>
          With a passion for gourmet cuisine and a dedication to your dining
          pleasure, we take pride in crafting memorable moments for our
          cherished guests. From the warm ambiance of our restaurant to the
          exquisite flavors on your plate, every detail is designed to delight.
        </p>
        <p>
          From classic favorites to innovative creations, our menu is a symphony
          of flavors that caters to diverse palates. Explore our diverse menu
          offerings.
        </p>
</section>


<section></section>

{/* <footer>
    <div className="store-info container">
                <p>Welcome</p>
                <ul>
                    <li>1800 S Main St, Roswell NY </li>
                    <li>575-627-0144</li>
                    <li>Opening Hours From 1:00pm - 10:00pm</li>
                </ul>
            </div>

</footer> */}

    </>
)
}

export default HomePage;