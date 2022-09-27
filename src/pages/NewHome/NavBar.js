import React from 'react';


export default function NavBar() {

  return (
    <div>
      <nav>
        <div class="container nav__container"> 
          <a href="index.html" class="nav__logo">
            <h3>Welcome!</h3>
          </a>

          <ul class="nav__menu">
            <li><a href="index.html">主页</a></li>
            <li><a href="#aboutMe">关于</a></li>
            <li><a href="#portfolio">读书会</a></li>
            <li><a href="#contact">联系我们</a></li>
            <li>
              <a href="https://swc.osu.edu/health-and-wellness-resource-guide?Wellness+Dimension=6" class="btn btn-primary" download
              ><i class="uil uil-grin"></i> OSU 资源</a
              >
            </li>
          </ul>

          <button id="open-menu-btn"><i class="uil uil-bars"></i></button>
          <button id="close-menu-btn"><i class="uil uil-multiply"></i></button>
        </div>
      </nav>
    </div>
  );
}

