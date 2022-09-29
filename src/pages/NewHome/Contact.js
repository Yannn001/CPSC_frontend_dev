import React from 'react';


export default function Contact() {

    return (
        <div>
            <section id="contact">
                <div class="container contact__container">
                    <div class="contact__left">
                        <h2>联系我们</h2>
                        <p>
                            谢谢你浏览我们的网站, 如果你对我们的活动感兴趣的话, 不妨留下联系方式, 我们会主动与你取得联系.
                        </p>
                        <ul class="contact__socials">
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

                    <form action="https://formspree.io/f/mdojkwkr" method="POST">
                        <input type="text" name="name" placeholder="Your Name" required />
                        <input type="email" name="email" placeholder="Your Email" required />
                        <textarea
                            name="message"
                            rows="6"
                            placeholder="Message"
                            required
                        ></textarea>
                        <button type="submit" class="btn">
                            Send <i class="uil uil-arrow-right"></i>
                        </button>
                    </form>
                </div>
            </section>
        </div>
    );
}

