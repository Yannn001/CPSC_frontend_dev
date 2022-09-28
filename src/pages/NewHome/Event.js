import React from 'react';


export default function Event() {

    return (
        <div>
            <section id="portfolio">
      <div class="container portfolio__container">
        <div class="portfolio__head">
          <h1>Portfolio</h1>
          <div class="portfolio__head-right">
            <p>
              Here are some examples of my website
            </p>
            <a href="https://github.com/Yannn001?tab=repositories">Explore More <i class="uil uil-arrow-right"></i></a>
          </div>
        </div>

        <div class="portfolio__projects">
          <article class="portfolio__project">
            <span class="portfolio__project-image"
              ><img src="./images/project1.png"
            /></span>
            <div class="portfolio__cta">
              <a href="https://github.com/Yannn001/task_manager" class="btn" target="_blank"
                >Github</a
              >
            </div>
          </article>
          <article class="portfolio__project">
            <span class="portfolio__project-image"
              ><img src="./images/project2.png"
            /></span>
            <div class="portfolio__cta">
              <a href="https://github.com/Yannn001/CPCOH" class="btn" target="_blank"
                >Github</a
              >
            </div>
          </article>
        </div>
      </div>
    </section>
        </div>
    );
}

