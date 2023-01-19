import './experience.css'

function Experience() {
    
    return (
        <div className="experience-page">
            <h1 className="experience-title">
                EXPERIENCE
            </h1>

            <div className="experience-body">
                <a href="https://github.com/willsather/Will-Sather/blob/master/HTML/resume/2021%20Will%20Sather%20Resume%20(PDF).pdf" style={{color: "grey"}}  target="_blank" rel="noreferrer">{`// check out my resume here`}</a>
            </div>

            <div className="experience-div">
                <ul id="experience-list">

                    <li> <span>VMware Tanzu Labs.</span>
                        <ol id="sub-list-position">
                            <li>Software Engineer.</li>
                        </ol> 
                        <ol id="sub-list-description">
                            <li>tbd (june 2022).</li>
                        </ol>
                    </li>


                    <li> <span>Dell Technologies.</span>
                        <ol id="sub-list-position">
                            <li>Solutions Architect Intern.</li>
                        </ol>
                        <ol id="sub-list-description">
                            <li>ismv4 associate exam, dart, flutter, firebase.</li>
                        </ol>
                    </li>
                    
                    <li> <span>Ivanti.</span>
                        <ol id="sub-list-position">
                            <li>Software Engineer Intern.</li>
                        </ol> 

                        <ol id="sub-list-description">
                            <li>c#, typescript, azure devops, angular, ci pipeline.</li>
                        </ol>
                    </li>

                    <li> <span>byt8.</span>
                        <ol id="sub-list-position">
                            <li>Developer &amp; Creator.</li>
                        </ol> 

                        <ol id="sub-list-description">
                            <li>firebase, google cloud platform, javascript, swift, xcode.</li>
                        </ol>
                    </li>

                </ul>
            </div>
        </div>
    );
  }
  
  export default Experience;
  