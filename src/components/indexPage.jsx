import React from 'react';
import {Link } from 'react-router-dom'

// import { Link } from 'react-dom'




function IndexPage() {
    return (
        <React.Fragment>
            <div id="preloader">
        <div className="jumper">
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
    



    <header className="header-area header-sticky">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <nav className="main-nav">
                        
                        <a href="index.html" className="logo">
                            Larva
                        </a>
                        
                
                        <ul className="nav">
                            <li className="scroll-to-section"><a href="#welcome" className="menu-item">Home</a></li>
                            <li className="scroll-to-section"><a href="#about" className="menu-item">About</a></li>
                            <li className="scroll-to-section"><a href="#testimonials" className="menu-item">Testimonials</a>
                            </li>
                            <li className="submenu">
                                <a href="javascript:;">Drop Down</a>
                                <ul>
                                    <li><a href="" className="menu-item">About Us</a></li>
                                    <li><a href="" className="menu-item">Features</a></li>
                                    <li><a href="" className="menu-item">FAQ's</a></li>
                                    <li><a href="" className="menu-item">Blog</a></li>
                                </ul>
                            </li>
                            <li className="scroll-to-section"><a href="#contact-us" className="menu-item">Contact Us</a></li>
                        </ul>
                        <a className='menu-trigger'>
                            <span>Menu</span>
                        </a>
                        
                    </nav>
                </div>
            </div>
        </div>
    </header>
    


    
    <div className="welcome-area" id="welcome">

        
        <div className="header-text">
            <div className="container">
                <div className="row">
                    <div className="left-text col-lg-6 col-md-12 col-sm-12 col-xs-12"
                        data-scroll-reveal="enter left move 30px over 0.6s after 0.4s">
                        <h1>Simple App that we <em>CREATE</em></h1>
                        <p>Lava <a href="#">HTML landing page</a> template is provided by <a href="#">TemplateMo</a>.
                           You can modify and use it for your commercial websites for free of charge. This template is last updated on 29 Oct 2019.</p> 
                        <a href="#about" className="main-button-slider">KNOW US BETTER</a>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
    

    
    <section className="section" id="about">
        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12"
                    data-scroll-reveal="enter left move 30px over 0.6s after 0.4s">
                    <div className="features-item">
                        <div className="features-icon">
                            <h2>01</h2>
                            <img src="/images/features-icon-1.png" alt=""/>
                            <h4>Trend Analysis</h4>
                            <p>Curabitur pulvinar vel odio sed sagittis. Nam maximus ex diam, nec consectetur diam.</p>
                            <a href="#testimonials" className="main-button">
                                Read More
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12"
                    data-scroll-reveal="enter bottom move 30px over 0.6s after 0.4s">
                    <div className="features-item">
                        <div className="features-icon">
                            <h2>02</h2>
                            <img src="/images/features-icon-2.png" alt=""/>
                            <h4>Site Optimization</h4>
                            <p>Curabitur pulvinar vel odio sed sagittis. Nam maximus ex diam, nec consectetur diam.</p>
                            <a href="#testimonials" className="main-button">
                                Discover More
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12"
                    data-scroll-reveal="enter right move 30px over 0.6s after 0.4s">
                    <div className="features-item">
                        <div className="features-icon">
                            <h2>03</h2>
                            <img src="/images/features-icon-3.png" alt=""/>
                            <h4>Email Design</h4>
                            <p>Curabitur pulvinar vel odio sed sagittis. Nam maximus ex diam, nec consectetur diam.</p>
                            <a href="#testimonials" className="main-button">
                                More Detail
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>


    <div className="left-image-decor"></div>

    
    <section className="section" id="promotion">
        <div className="container">
            <div className="row">
                <div className="left-image col-lg-5 col-md-12 col-sm-12 mobile-bottom-fix-big"
                    data-scroll-reveal="enter left move 30px over 0.6s after 0.4s">
                    <img src="/images/left-image.png" className="rounded img-fluid d-block mx-auto" alt="App"/>
                </div>
                <div className="right-text offset-lg-1 col-lg-6 col-md-12 col-sm-12 mobile-bottom-fix">
                    <ul>
                        <li data-scroll-reveal="enter right move 30px over 0.6s after 0.4s">
                            <img src="/images/about-icon-01.png" alt=""/>
                            <div className="text">
                                <h4>Vestibulum pulvinar rhoncus</h4>
                                <p>Please do not redistribute this template ZIP file for a download purpose. You may <a
                                rel="nofollow" href="https://templatemo.com/contact" target="_parent">contact</a> us for
                            additional licensing of our template or to get a PSD file.</p>
                            </div>
                        </li>
                        <li data-scroll-reveal="enter right move 30px over 0.6s after 0.5s">
                            <img src="/images/about-icon-02.png" alt=""/>
                            <div className="text">
                                <h4>Sed blandit quam in velit</h4>
                                <p>You can <a rel="nofollow"
                                        href="https://templatemo.com/tm-540-lava-landing-page">download Lava
                                        Template</a> from our website. Duis viverra, ipsum et scelerisque placerat, orci
                                    magna consequat ligula.</p>
                            </div>
                        </li>
                        <li data-scroll-reveal="enter right move 30px over 0.6s after 0.6s">
                            <img src="/images/about-icon-03.png" alt=""/>
                            <div className="text">
                                <h4>Aenean faucibus venenatis</h4>
                                <p>Phasellus in imperdiet felis, eget vestibulum nulla. Aliquam nec dui nec augue
                                    maximus porta. Curabitur tristique lacus.</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>


    <div className="right-image-decor"></div>


    <section className="section" id="testimonials">
        <div className="container">
            <div className="row">
                <div className="col-lg-8 offset-lg-2">
                    <div className="center-heading">
                        <h2>What They Think <em>About Us</em></h2>
                        <p>Suspendisse vitae laoreet mauris. Fusce a nisi dapibus, euismod purus non, convallis odio.
                            Donec vitae magna ornare, pellentesque ex vitae, aliquet urna.</p>
                    </div>
                </div>
                <div className="col-lg-10 col-md-12 col-sm-12 mobile-bottom-fix-big"
                    data-scroll-reveal="enter left move 30px over 0.6s after 0.4s">
                    <div className="owl-carousel owl-theme">
                        <div className="item service-item">
                            <div className="author">
                                <i><img src="/images/testimonial-author-1.png" alt="Author One"/></i>
                            </div>
                            <div className="testimonial-content">
                                <ul className="stars">
                                    <li><i className="fa fa-star"></i></li>
                                    <li><i className="fa fa-star"></i></li>
                                    <li><i className="fa fa-star"></i></li>
                                    <li><i className="fa fa-star"></i></li>
                                    <li><i className="fa fa-star"></i></li>
                                </ul>
                                <h4>Jonathan Smart</h4>
                                <p>“Nullam hendrerit, elit a semper pharetra, ipsum nibh tristique tortor, in tempus
                                    urna elit in mauris.”</p>
                                <span>Besta CTO</span>
                            </div>
                        </div>
                        <div className="item service-item">
                            <div className="author">
                                <i><img src="/images/testimonial-author-1.png" alt="Second Author"/></i>
                            </div>
                            <div className="testimonial-content">
                                <ul className="stars">
                                    <li><i className="fa fa-star"></i></li>
                                    <li><i className="fa fa-star"></i></li>
                                    <li><i className="fa fa-star"></i></li>
                                    <li><i className="fa fa-star"></i></li>
                                    <li><i className="fa fa-star"></i></li>
                                </ul>
                                <h4>Martino Tino</h4>
                                <p>“Morbi non mi luctus felis molestie scelerisque. In ac libero viverra, placerat est
                                    interdum, rhoncus leo.”</p>
                                <span>Web Analyst</span>
                            </div>
                        </div>
                        <div className="item service-item">
                            <div className="author">
                                <i><img src="/images/testimonial-author-1.png" alt="Author Third"/></i>
                            </div>
                            <div className="testimonial-content">
                                <ul className="stars">
                                    <li><i className="fa fa-star"></i></li>
                                    <li><i className="fa fa-star"></i></li>
                                    <li><i className="fa fa-star"></i></li>
                                </ul>
                                <h4>George Tasa</h4>
                                <p>“Fusce rutrum in dolor sit amet lobortis. Ut at vehicula justo. Donec quam dolor,
                                    congue a fringilla sed, maximus et urna.”</p>
                                <span>System Admin</span>
                            </div>
                        </div>
                        <div className="item service-item">
                            <div className="author">
                                <i><img src="/images/testimonial-author-1.png" alt="Fourth Author"/></i>
                            </div>
                            <div className="testimonial-content">
                                <ul className="stars">
                                    <li><i className="fa fa-star"></i></li>
                                    <li><i className="fa fa-star"></i></li>
                                    <li><i className="fa fa-star"></i></li>
                                    <li><i className="fa fa-star"></i></li>
                                </ul>
                                <h4>Sir James</h4>
                                <p>"Fusce rutrum in dolor sit amet lobortis. Ut at vehicula justo. Donec quam dolor,
                                    congue a fringilla sed, maximus et urna."</p>
                                <span>New Villager</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    


    
    <footer id="contact-us">
        <div className="container">
            <div className="footer-content">
                <div className="row">
                    
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="contact-form">
                            <form id="contact" action="" method="post">
                                <div className="row">
                                    <div className="col-md-6 col-sm-12">
                                        <fieldset>
                                            <input name="name" type="text" id="name" placeholder="Full Name" required=""
                                                style={{backgroundColor: (250,250,250,0.3)}}/>
                                        </fieldset>
                                    </div>
                                    <div className="col-md-6 col-sm-12">
                                        <fieldset>
                                            <input name="email" type="text" id="email" placeholder="E-Mail Address"
                                                required="" style={{backgroundColor: (250,250,250,0.3)}}/>
                                        </fieldset>
                                    </div>
                                    <div className="col-lg-12">
                                        <fieldset>
                                            <textarea name="message" rows="6" id="message" placeholder="Your Message"
                                                required="" 
                                                style={{backgroundColor: (250,250,250,0.3)}}
                                                ></textarea>
                                        </fieldset>
                                    </div>
                                    <div className="col-lg-12">
                                        <fieldset>
                                            <button type="submit" id="form-submit" className="main-button">Send Message
                                                Now</button>
                                        </fieldset>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    
                    <div className="right-content col-lg-6 col-md-12 col-sm-12">
                        <h2>More About <em>Lava</em></h2>
                        <p>Phasellus dapibus urna vel lacus accumsan, iaculis eleifend leo auctor. Duis at finibus odio.
                            Vivamus ut pharetra arcu, in porta metus. Suspendisse blandit pulvinar ligula ut elementum.
                            <br/><br/>If you need this contact form to send email to your inbox, you may follow our <a
                                rel="nofollow" href="https://github.com/bryanqueen" target="_parent">contact</a> page
                            for more detail.</p>
                        <ul className="social">
                            <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                            <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                            <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                            {/* <li><a href="#"><i className="fa fa-rss"></i></a></li> */}
                            <li><a href="https://github.com/bryanqueen"><i className="fa fa-github"></i></a></li>
                            {/* <li><a href="#"><i className="fa fa-discord"></i></a></li> */}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="sub-footer">
                        <p>Copyright &copy; 2022 Larva Landing Page

                        | Designed by <a rel="nofollow" href="https://github.com/bryanqueen">Bryan Queen</a></p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
        </React.Fragment>
    );
}

export default IndexPage;