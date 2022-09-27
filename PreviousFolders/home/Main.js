import * as React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';

export default function Main() {

    return (
        <div>
            <nav>
                <div class="container nav__container">
                    <a href="index.html" class="nav__logo">
                        <h3>Welcome!</h3>
                    </a>

                    <ul class="nav__menu">
                        <li><a href="index.html">HOME</a></li>
                        <li><a href="#aboutMe">ABOUT ME</a></li>
                        <li><a href="#portfolio">PORTFOLIO</a></li>
                        <li><a href="#contact">CONTACT</a></li>
                        <li>
                            <a href="./images/resume.pdf" class="btn btn-primary" download
                            ><i class="uil uil-download-alt"></i> Download CV</a
                            >
                        </li>
                    </ul>

                    <button id="open-menu-btn"><i class="uil uil-bars"></i></button>
                    <button id="close-menu-btn"><i class="uil uil-multiply"></i></button>
                </div>
            </nav>

            <header>
                <div class="container header__container">
                    <div class="header__left">
                        <div>
                            <h3>Hello There! I'm</h3>
                            <h1>Chengyan<br />Wang</h1>
                            <p>
                                A fourth year computer science major undergraduate student and a learning to be a Full Stack Web Developer.
                            </p>
                            <a href="#contact" class="btn btn-primary btn-lg">Get in touch</a>
                        </div>
                    </div>

                    <div class="header__right">
                        <div class="header__image">
                            <img src="./images/avatar.png" />
                        </div>
                        <div class="header__right-bg"></div>
                        <ul class="header__socials">
                            <li>
                                <a href="https://www.linkedin.com/in/wang-chengyan-1b118b218" target="_blank"
                                ><i class="uil uil-linkedin"></i
                                ></a>
                            </li>
                            <li>
                                <a href="https://github.com/Yannn001?tab=repositories" target="_blank"
                                ><i class="uil uil-github-alt"></i
                                ></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
            <div>
            </div>
        </div>
    );
}
