import React, { Component } from 'react';
import PROJECTS from './data/projects';

class Project extends Component{
    render(){
        const {title,link,image,description}=this.props.project;
        return(
            <div>
                <h3>{title}</h3>
                <img src={image} alt="profile" style={{width:300,margin:15}}/>
                <p>{description}</p>
                <a href={link}>View Project</a>
            </div>
            
        )

    }
}



class Projects extends Component {
  render() {
    return (
      <div>
          <h2>Highlighted projects</h2>
          <div style={{display:'flex' ,margin:13, justifyContent:'center',maxWidth:1422}}>
              {
                  PROJECTS.map((project)=>{
                      return(
                          <div key={project.id}>
                              <Project project={project}></Project>
                          </div>
                      )
                  })
              }
          </div>
      </div>
    )
  }
}

export default Projects