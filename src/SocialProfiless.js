import React, { Component } from 'react'
import SOCIAL_PROFILES from './data/SocialProfiles'

class SocialProfile extends Component {
  render() {
      const {link,image}=this.props.social_profile;
    return (
      <span>
        <a href={link}>
              <img src={image} alt='socialprofile' style={{width:35,height:35,margin:10}}/>
        </a>
      </span>
    )
  }
}


export class SocialProfiless extends Component {
  render() {
    return (
      <div>
          <h2>Connect With Me!</h2>
          <div>
              {
                  SOCIAL_PROFILES.map(social=>{
                      return(
                          <SocialProfile key={social.id} social_profile={social}></SocialProfile>
                      )
                  })
              }
          </div>
      </div>
    )
  }
}

export default SocialProfiless