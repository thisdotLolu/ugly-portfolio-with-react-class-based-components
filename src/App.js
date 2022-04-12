import React,{Component} from "react";
import Projects from "./Projects";
import SocialProfiless from "./SocialProfiless";
import Profilepic from '../src/profilepic.png'

class App extends Component {
    state={displayBio:false}

    toggleDisplayBio=()=>{
             this.setState({displayBio:!this.state.displayBio})
    }


    // constructor(){
    //     super()
    //     this.state={
    //         displayBio:false
    //     }
    //     this.toggleDisplayBio=this.toggleDisplayBio.bind(this)
    // }
 
    // toggleDisplayBio(){
    //     this.setState({displayBio:!this.state.displayBio})
    // }
    render(){
      
        
        return(
            <div>
            <img src={Profilepic} alt="profile" style={{borderRadius:500}}/>        
            <h1>Hello</h1>
            <p>My name is Lolu</p>
            <p>Always working with meaningful projects</p>
            {
                 this.state.displayBio? (
                    <div>
                        <div>
                            <p>I live in San Fransisco</p>
                            <p>I am using JavaScript</p>
                            <p>Love music</p>
                        </div>
                        <div>
                            <button onClick={this.toggleDisplayBio}>Show less</button>
                        </div>
                    </div>
                    ): 
                <div>
                    <button onClick={this.toggleDisplayBio}>Read More</button>
                </div>
            }
            <br />
            <hr />
            <Projects></Projects>
            <hr/>
            <SocialProfiless></SocialProfiless>
            </div>
        )
    }
}


export default App;