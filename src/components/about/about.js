import './about.css'
import picture from '../../graphics/about_large.jpg'

function About() {
    return (
        <div className="about-page">
            <h1 className="about-title">
                ABOUT
            </h1>

            <div className="about-body">
                hi, i'm will.
            </div>

            <div class="flex">

                <div className="about-paragraph">
                    i am a senior at university of minnesota studying computer science, purusing a
                    career as a solutions architect or a software engineer.

                    <br></br>
                    <br></br>
                    <br></br>
                    
                    outside of the experience on my resume, i have always enjoyed working on various
                    projects like this website, byt8, and other small projects in my github.  i also love 
                    to travel, cook, and cuddle with our two dogs.  don't hesitate to reach out if you want
                    to connect for any particular reason. 
                
                </div>

                <div class="picture">
                    <img src={picture} alt="Will Sather" />
                </div>

            </div>
        </div>
    );
  }
  
  export default About;
  