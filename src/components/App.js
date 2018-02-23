import React, { Component } from 'react'

import '../style.scss'


export default class App extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    $('.current').css('color', '#1abb9c');

    $("#burger-nav").on("click", function(){

      $("#toggle ul").toggleClass("open");
      
    })
  } 


  render() {
    return (
    <div>
      <header>
         <div className="wrapper">
           <h1 className="logo">Marble</h1>

            <nav id="toggle">
              <h2>Main Navigation</h2>
              <div id="burger-nav"></div>
                <ul className="">
                  <li><a href="" className="current">Home</a></li>
                  <li><a href="">About</a></li>
                  <li><a href="">Journal</a></li>
                  <li><a href="">Service</a></li>
                  <li><a href="">Features</a></li>
                  <li><a href="">Contact</a></li>
                </ul>
            </nav>
         </div>
      </header>

      <div id="banner">

        <img src="./images/banner.jpg" alt="banner" />

      </div>

      <main className="wrapper">
        
        <section id="icons">

          <ul>

            <li>
              <img src="./images/icon-1.png" alt="icon" />
              <h3>Pellentesque</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec arcu magna  efficitur tempus. </p>
            </li>
            <li>
              <img src="./images/icon-2.png" alt="icon" />
              <h3>Consectetur</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec arcu magna  efficitur tempus. </p>
            </li>
            <li>
              <img src="./images/icon-3.png" alt="icon" />
              <h3>Tristiquet</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec arcu magna  efficitur tempus. </p>
            </li>
            <li>
              <img src="./images/icon-4.png" alt="icon" />
              <h3>Fermentum</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec arcu magna  efficitur tempus. </p>
            </li>

          </ul>

        </section>

        <section id="snaps">

          <ul>
            <h2>OUR LATEST WORKS</h2>
            <li>
              <img src="./images/snap-1.jpg" alt="snap" />
              <h3>New Fun Project</h3>
              <p className="tags">Nobis Business Card</p>
              <p>
                 Donec risus nisi, tempus sit amet ligula a, blandit feugiat leo. Vestibulum hendrerit vitae.  
              </p>
            </li>
            <li>
              <img src="./images/snap-2.jpg" alt="snap" />
              <h3>New Fun Project</h3>
              <p className="tags">Web Design Application</p>
              <p>
                Donec risus nisi, tempus sit amet ligula a, blandit feugiat leo. Vestibulum hendrerit vitae.   
              </p>
            </li>
            <li>
              <img src="./images/snap-3.jpg" alt="snap" />
              <h3>Passionaries Branding Cover</h3>
              <p className="tags">Branding Graphic Design</p>
              <p>
                 Donec risus nisi, tempus sit amet ligula a, blandit feugiat leo. Vestibulum hendrerit vitae.  
              </p>
            </li>
        
          </ul>

        </section>

      </main>

      <div id="quote">
            <blockquote>
             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec arcu magna. Quisque ut dapibus est. Praesent efficitur tempus pellentesque morbi suscipit nisi sit.
            </blockquote>
      </div>

      <footer>
            <div className="wrapper">
               <ul>
                 <li><h4>GET IN TOUCH</h4></li>
                 <li>
                    Vivamus facilisis hendrerit eros sed porttitor. Sed pretium felis at augue aliquet pulvinar.
                 </li>
                 <li className="address">
                    Moonshine Street No: 14/05 Light City, Jupiter
                 </li>
                 <li className="contact">
                    0247 541 65 87
                 </li>
                 <li className="email">
                   support@wavelong.com
                 </li>
               </ul>
                <ul>
                 <li><h4>TWITTER</h4></li>
                 <li className="tw">
                    Morbi neque elit, auctor vel pulvinar a, gravida vel nulla. Sed eros dui laoreet quis.
                 </li>
                 <li className="tw">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit nam.
                 </li>
                 <li className="tw">
                    Sed maximus dui eros, non sagittis diam convallis id.
                 </li>
               </ul>
                <ul>
                 <li><h4>POPULAR POST</h4></li>
                 <li>
                    Nulla vel scelerisque mauris Class aptent taciti sociosqu ad. <br /> 14 Nov, 2012   
                 </li>
                 <li>
                    Nam bibendum blandit tellus. <br /> 22 May, 2012 
                 </li>
                 <li>
                   Proin porta tincidunt sagittis Suspendisse lacus erat. <br /> 15 July 2012
                 </li>
               </ul>
                <ul>
                 <li><h4>ABOUT US</h4></li>
                 <li>
                    Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla scelerisque ipsum eget lacus iaculis, sed tristique mauris mattis.
                 </li>
                 <li>
                    Bibendum blandit tellus ut fringilla. Vestibulum pharetra turpis eget volutpat semper proin porta tincidunt sagittis. 
                 </li>
               </ul>

               <div id="copyright">@ 2018 Marble. All rights reserved. Theme by elemis.</div>
            </div>
      </footer>

    </div>
    )
  }
}
