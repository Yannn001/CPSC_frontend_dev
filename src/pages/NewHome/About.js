import React from 'react';


export default function About() {
  
  return (
    <div>
    <section id="aboutMe">
      <div class="container services__container">
        <div class="services__left">
          <h1> 大胆分享 </h1>
          <br/>
          <h1> 陪伴读书 </h1>
          <br/>
          <h1> 积极成长 </h1>
        </div>

        <div class="services__right">
          <h2>
            我们的<b>目标</b> 是在阅读和探讨中和大家一同探索心理健康知识, 将资源整合并以简单的方式传达给需要的人.
          </h2>
          <div class="services__cards">
            <div class="services__card">
              <span class="services__card-icon"
                ><i class="uil uil-layers-alt"></i
              ></span>
              <h5>我们的团队</h5>
              <a href="#skills">查看更多 <i class="uil uil-arrow-right"></i></a>
            </div>

            <div class="services__card">
              <span class="services__card-icon"
                ><i class="uil uil-browser"></i
              ></span>
              <h5>读书会</h5>
              <a href="#course">查看更多 <i class="uil uil-arrow-right"></i></a>
            </div>

            <div class="services__card">
              <span class="services__card-icon"
                ><i class="uil uil-lightbulb"></i
              ></span>
              <h5>未来展望</h5>
              <a href="#interest">查看更多 <i class="uil uil-arrow-right"></i></a>
            </div>
          </div>
        </div>
      </div>
    </section>

    </div>
  );
}

