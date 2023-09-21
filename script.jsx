function Nav(){
    return (
        <div id="navbar">
            <div className="logo-header">
                <div className="logo">
                    <a href="#">R7Design</a>
                </div>
            </div>
            <div className="nav-header">
                <nav>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About Me</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </nav>    
            </div>
        </div>
    )
}
function Header(){
    return(
        <header id="header">
            <div className="item-1">   
                <div className="overflow over-item-1">
                    <img 
                        src="images/arrow-spin.svg"
                        className="arrow-spin"
                    />
                    <h1 className="first-h1 h1-principal">Creative UI</h1>
                    <h1 className="second-h1 h1-principal">Designer</h1>
                    <nav className="nav-btn">
                        <ul>
                            <li> <a href="">Hire me</a></li>
                            <li>  <a id="download-cv" href="">
                            Download CV
                            <img 
                                src="images/icon.svg" 
                            />
                        </a></li>
                        </ul>  
                    </nav>
                </div>
                <div className="btn-down">  
                    <div className="btn-1">
                        <a href="#about-me">
                            <img
                                src="images/btn-down.svg" 
                            />
                        </a>
                    </div>
                </div>
            </div>
            <div className="item-2">
                <div className="sitting-man-svg">
                    <img 
                        src="images/sitting-man.svg"
                    />
                </div>
            </div>
        </header>
        
    )
}
function AboutMe(){  
   function read() {
        const btnLess = document.querySelector(".less")
        const btnMore = document.querySelector(".more")
        const btn = document.querySelector(".content")
        const contentAdd = document.querySelector(".content-add");
        contentAdd.style.display = "block";
        btnLess.style.display ="block"
        btnMore.style.display ="none"  
    }
    function less(){
        const btnLess = document.querySelector(".less")
        const btnMore = document.querySelector(".more")
        const btn = document.querySelector(".content")
        const contentAdd = document.querySelector(".content-add");
        contentAdd.style.display = "none";
        btnLess.style.display ="none"
        btnMore.style.display ="block"
    }
    function showLess(){

    }
    return (
        <div className="aboutme" id="about-me">
            <div className="aboutme-item-1">
                <div className="about-me-img">
                    <img className="aboutme-icon"
                        src="images/about-me-icons.svg"
                    />
                    <div className="texts">
                        <h1>About<h1 className="me">me</h1></h1>
                        <p className="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis<p className="content-add">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque distinctio repellendus tempora facilis sunt, doloribus officiis quod ut libero. Repudiandae fugit veniam sit eos? Quod laudantium dolorem sed ad magnam!</p><button className="btn-read more" onClick={read}>...Read More</button>
                        <button className="btn-read less" onClick={less}>...Show Less</button></p>
                    </div>
                </div>
            </div>
            
            <div className="aboutme-item-2">
                <div className="bg-about">
                    <img
                        src="images/bg-about.svg"
                    />
                </div>
            </div>
        </div>
    )
}
function Divisoria(){
    return(
        <div className="divisoria">
            <div className="div-1"><h1>Divisoria</h1></div>
            <div className="div-2"><h1>Divisoria</h1></div>
        </div>
    )
}
function RecentWorks(){
    return(
        <div className="recent-works">
            <h1>My recent <span className="blue">works</span></h1>
            <nav className="services-category">
                <ul>
                    <li className="active">All</li>
                    <li>UI</li>
                    <li>UX</li>
                    <li>WebDesign</li>
                </ul>
            </nav>
            <nav className="services-images">
                <ul>
                    <li>
                        <img
                            src="images/recent-work-1.svg" 
                        />
                    </li>
                    <li>
                        <img
                            src="images/recent-work-2.svg" 
                        />
                    </li>
                    <li>
                        <img
                            src="images/recent-work-3.svg" 
                        />
                    </li>
                </ul>
            </nav>
        </div>
        
    )
}

function Form(){
    return (
        <div className="form">
            <div className="form-1">
                <h1>Got a project in <span class="blue">mind?</span></h1>
                <img src="images/scaling-man.svg"/>
            </div>
            <div className="form-2">
                <img class="keyboard" src="images/keyboard.svg" alt="" />
                <form action="#">
                    <div className="name">
                        <label>Your name</label>
                        <input type="text" name="name" placeholder="name"/>
                    </div>
                    <div className="email">
                        <label>Your email</label>
                        <input type="email" name="email" placeholder="email"/>
                    </div>
                    <div className="message">
                        <label>Your Message</label>
                        <textarea rols="50" cols="20">Message</textarea>
                    </div>
                    <div className="button-send">
                    <button>Send Message <img src="images/send.svg" /></button>
                    </div>
                </form>
                <img class="mail" src="images/mail.svg" />
            </div>
        </div>

    )
}

function Footer(){
    return(
        <div className="footer">
            <div className="footer-1">

            </div>
            <div className="footer-2">
                <nav className="footer-nav">
                    <ul>
                        <li><a href="#"><img src="images/home.svg" /> Home</a></li>
                        <li><a href="#"><img src="images/contact.svg" />About me</a></li>
                        <li><a href="#"><img src="images/phone.svg" />Contact</a></li>
                    </ul>
                </nav>
                <nav className="footer-nav-social">
                    <ul>
                        <li><a href="#"><img src="images/facebook.svg" alt="" /></a></li>
                        <li><a href="#"><img src="images/instagram.svg" alt="" /></a></li>
                        <li><a href="#"><img src="images/twitter.svg" alt="" /></a></li>
                        <li><a href="#"><img src="images/youtube.svg" alt="" /></a></li>
                    </ul>
                </nav>
                <div className="terms">
                    <a href="#">Terms of Service</a>&nbsp; - &nbsp;
                    <a href="#">Privacy Policy</a>
                </div>
            </div>
        </div>
    )
}

function Home(){
    return (
        <div className="container">
            
            <Nav />
            <Header />
            <AboutMe />
            <Divisoria />
            <RecentWorks />
            <Form />
            <Footer />
        </div>
    )
}



ReactDOM.render(<Home />, app);