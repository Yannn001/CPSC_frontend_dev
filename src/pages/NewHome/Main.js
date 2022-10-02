import React from 'react';


export default function Main() {

    return (
        <div>
            <header>
                <div class="container header__container">
                    <div class="header__left">
                        <div>
                            <h1>Chinese Peer Support Cohort</h1>
                            <p>
                                我们是自发的学生团体, 希望与OSU的中国学生一起进步,学习心理健康知识.
                            </p>
                            <a href="#contact" class="btn btn-primary btn-lg">联系我们</a>
                        </div>
                    </div>

                    <div class="header__right">
                        <div class="header__image">
                            <img src="" />
                        </div>
                        <div class="header__right-bg"></div>
                        <ul class="header__socials">
                            {/* <li>
                                <a href="https://www.linkedin.com/in/wang-chengyan-1b118b218" target="_blank"
                                ><i class="uil uil-linkedin"></i
                                ></a>
                            </li>
                            <li>
                                <a href="https://github.com/Yannn001?tab=repositories" target="_blank"
                                ><i class="uil uil-github-alt"></i
                                ></a>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </header>
        </div>
    );
}

