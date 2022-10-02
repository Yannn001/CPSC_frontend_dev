import React from 'react';


export default function Event() {

    return (
        <div>
            <section id="portfolio">
      <div class="container portfolio__container">
        <div class="portfolio__head">
          <h1>读书会活动</h1>
          <div class="portfolio__head-right">
            <p>
              点击链接可以查看读书会安排哦
            </p>
            <a href="https://github.com/Yannn001?tab=repositories">如何报名 <i class="uil uil-arrow-right"></i></a>
          </div>
        </div>

        <div class="portfolio__projects">
          <article class="portfolio__project">
            <span class="portfolio__project-image"
              ><img src="https://meet.eslite.com/Content/Images/Article/1200x628_20220209143427.jpg"
            /></span>
            <div class="portfolio__cta">
              <a href="" class="btn" target="_blank"
                >日程安排</a
              >
            </div>
          </article>
          <article class="portfolio__project">
            <span class="portfolio__project-image"
              ><img src="https://user-images.githubusercontent.com/69735000/191848907-d4a0b1a0-a32d-4595-93f8-d688cd4966c5.jpg"
            /></span>
            <div class="portfolio__cta">
              <a href="" class="btn" target="_blank"
                >日程安排</a
              >
            </div>
          </article>
        </div>
      </div>
    </section>
        </div>
    );
}

