import React, { Component } from 'react';

class Resume extends Component {
    render() {
      if(this.props.data){

        // Resume Education
        var education = this.props.data.education.map(function(edu){
          return <div key={edu.school} className="row item">
             <div className="twelve columns">
                <h3>{edu.school}</h3>
                <p className="info">{edu.degree} <span>&bull;</span> <em className="date">{edu.graduated}</em></p>
                <p>
                  {edu.description}
                </p>
             </div>
          </div>
        });

        // Resume Work
        var work = this.props.data.work.map(function(job){
          return <div key={job.company} className="row item">
              <div className="twelve columns">
                  <h3>{job.company}</h3>
                  <p className="info">{job.title} <span>&bull;</span> <em className="date">{job.years}</em></p>
                  <p>
                      {job.description}
                  </p>
              </div>
          </div>
        });

        // Resume skills
        var skills = this.props.data.skills.map(function(skill){
          var className = 'bar-expand '+skill.name.toLowerCase();
          return <li key={skill.name}><span style={{width:skill.level}} className={className}></span><em>{skill.name}</em></li>
        });
      }
        return (
          <section id="resume">
              <div className="row education">
                  <div className="three columns header-col">
                      <h1><span>Education</span></h1>
                  </div>
                  <div className="nine columns main-col">
                      {education}
                  </div>
              </div>

              <div className="row work">
                  <div className="three columns header-col">
                      <h1><span>Work</span></h1>
                  </div>
                  <div className="nine columns main-col">
                      {work}
                  </div>
              </div>
              <div className="row skill">
                  <div className="three columns header-col">
                      <h1><span>Skills</span></h1>
                  </div>
                  <div className="nine columns main-col">
                      <p>Below are a list of my skills in a more graphical display rather then just describing the experience I have I made a bar graph for my experience level in each on of the topics below.
                      </p>
                      <div className="bars">
                          <ul className="skills">
                              {skills}
                          </ul>
                      </div>
                  </div>
              </div>
          </section>
        );
    }
}

export default Resume;
