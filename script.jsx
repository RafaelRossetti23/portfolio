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
                        <li><a href="#about-me">About Me</a></li>
                        <li><a href="#contact">Contact</a></li>
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
    
    function UI(){
        const UIbutton = document.getElementById("UI");
        const UXbutton = document.getElementById("UX");
        const WDbutton = document.getElementById("WebDesign");
        const ALLbutton = document.getElementById("ALL");

        UIbutton.classList.add("active");
        UXbutton.classList.remove("active");
        WDbutton.classList.remove("active");
        ALLbutton.classList.remove("active");

        const UI = document.querySelectorAll(".UI")
        UI.forEach(function(UIitem){
            UIitem.style.display = "inline-block"
        })
    

        const elementos = document.querySelectorAll(".UX");
        elementos.forEach(function(elemento){
            elemento.style.display = "none";
        })
        const elementos2 = document.querySelectorAll(".WebDesign");
        elementos2.forEach(function(elemento){
            elemento.style.display = "none";
        })

        

        


        
    }
    function UX(){

        const UIbutton = document.getElementById("UI");
        const UXbutton = document.getElementById("UX");
        const WDbutton = document.getElementById("WebDesign");
        const ALLbutton = document.getElementById("ALL");

        UXbutton.classList.add("active");
        UIbutton.classList.remove("active");
        WDbutton.classList.remove("active");
        ALLbutton.classList.remove("active");

     
        const UX = document.querySelectorAll(".UX")
        UX.forEach(function(UXitem){
            UXitem.style.display = "inline-block"
        })


        const elementos = document.querySelectorAll(".UI");
        elementos.forEach(function(elemento){
            elemento.style.display = "none";
        })
        const elementos2 = document.querySelectorAll(".WebDesign");
        elementos2.forEach(function(elemento){
            elemento.style.display = "none";
        })


    }
    function WebDesign(){
        const UIbutton = document.getElementById("UI");
        const UXbutton = document.getElementById("UX");
        const WDbutton = document.getElementById("WebDesign");
        const ALLbutton = document.getElementById("ALL");

        UIbutton.classList.remove("active");
        UXbutton.classList.remove("active");
        WDbutton.classList.add("active");
        ALLbutton.classList.remove("active");

        const WebDesign = document.querySelectorAll(".WebDesign")
        WebDesign.forEach(function(WDitem){
            WDitem.style.display = "inline-block"
        })

        const elementos = document.querySelectorAll(".UI");
        elementos.forEach(function(elemento){
            elemento.style.display = "none";
        })
        const elementos2 = document.querySelectorAll(".UX");
        elementos2.forEach(function(elemento){
            elemento.style.display = "none";
        })

    }
    function ALL(){
        const UIbutton = document.getElementById("UI");
        const UXbutton = document.getElementById("UX");
        const WDbutton = document.getElementById("WebDesign");
        const ALLbutton = document.getElementById("ALL");

        UIbutton.classList.remove("active");
        UXbutton.classList.remove("active");
        WDbutton.classList.remove("active");
        ALLbutton.classList.add("active");

        const UI = document.querySelectorAll(".UI")
        UI.forEach(function(UIitem){
            UIitem.style.display = "inline-block"
        })
        const UX = document.querySelectorAll(".UX")
        UX.forEach(function(UXitem){
            UXitem.style.display = "inline-block"
        })
        const WebDesign = document.querySelectorAll(".WebDesign")
        WebDesign.forEach(function(WDitem){
            WDitem.style.display = "inline-block"
        })
        
    }
    
    
    return(
        
        <div className="recent-works">
            
            <h1>My recent <span className="blue">works</span></h1>
            <nav className="services-category">
                <ul>
                    <li onClick={ALL} id="ALL" className="active">All</li>
                    <li onClick={UI} id="UI">UI</li>
                    <li onClick={UX} id="UX">UX</li>
                    <li onClick={WebDesign} id="WebDesign">WebDesign</li>
                </ul>
            </nav>
            <nav className="services-images">
                <ul>
                    <li>
                        <img className="UI"
                            src="images/recent-work-1.svg" 
                        />
                    </li>
                    <li>
                        <img className="UI"
                            src="images/recent-work-1.svg" 
                        />
                    </li>
                    <li>
                        <img className="UX"
                            src="images/recent-work-2.svg" 
                        />
                    </li>
                    <li>
                        <img className="WebDesign"
                            src="images/recent-work-3.svg" 
                        />
                    </li>
                    <li>
                        <img className="WebDesign"
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
            <div id="contact" className="form">
            <div className="form-1">
                <h1>Got a project in <span class="blue">mind?</span></h1>
                <img src="images/scaling-man.svg"/>
            </div>
            <div className="form-2">
                <img class="keyboard" src="images/keyboard.svg" alt="" />
                <form action="https://api.sheetmonkey.io/form/3tM9kUMen8EbhViaozpnXu" method="post">
                    <div className="name">
                        <label>Your name</label>
                        <input type="text" name="Name" placeholder="name" required/>
                    </div>
                    <div className="email">
                        <label>Your email</label>
                        <input type="email" name="Email" required placeholder="email"/>
                    </div>
                    <div className="message">
                        <label>Your Message</label>
                        <textarea type="text" name="Message" required rols="50" cols="20">Message</textarea>
                    </div>
                    <input type="hidden" name="Created" value="x-sheetmonkey-current-date-time" />
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
                        <li><a href="#about-me"><img src="images/contact.svg" />About me</a></li>
                        <li><a href="#contact"><img src="images/phone.svg" />Contact</a></li>
                    </ul>
                </nav>
                <nav className="footer-nav-social">
                    <ul>
                        <li><a href="https://facebook.com/" target="_blank"><img src="images/facebook.svg" alt="" /></a></li>
                        <li><a href="https://instagram.com/" target="_blank"><img src="images/instagram.svg" alt="" /></a></li>
                        <li><a href="https://twitter.com/" target="_blank"><img src="images/twitter.svg" alt="" /></a></li>
                        <li><a href="https://youtube.com/" target="_blank"><img src="images/youtube.svg" alt="" /></a></li>
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