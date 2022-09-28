import React from 'react';


export default function Contact() {

    return (
        <div>
            <section id="contact">
                <div class="container contact__container">
                    <div class="contact__left">
                        <h2>Let's Talk</h2>
                        <p>
                            Hi, thank you for visiting my website, if you would like to contact me, feel free to leave you name, email, and a short message here. I will get back to you as soon as possible.
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

