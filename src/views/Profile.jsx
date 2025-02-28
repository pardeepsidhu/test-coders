import * as React from "react"
import "../styles/profile.css"
import PropTypes from "prop-types"
import { Button } from "../components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card"

export function Profile({profileData}) {
  const {skills = [], name, bio, title, image} = profileData || {};
  
  const handleContact = () => {
    console.log("Contact button clicked");
  }
  
  return (
    <Card className="w-[350px] card">
      <CardHeader className="profile-header">
        <div className="image-box">
          <img className="image" src={image} alt={name} />
        </div>
        <CardTitle><span>{name}</span></CardTitle>
        <CardDescription>{title}</CardDescription>
      </CardHeader>
      
      <CardContent>
        <hr />
        <div className="bio-box">
          <strong>Bio</strong>: {bio}
        </div>
        <div className="bio-box">
          <p><strong>Skills</strong>: &nbsp; &nbsp;</p>
          {skills.length > 0 && skills.map((skill, index) => (
            <p key={skill}>
              {skill}{index !== skills.length - 1 ? "," : ""} &nbsp;
            </p>
          ))}
        </div>
      </CardContent>
      
      <CardFooter className="flex footer">
        <Button onClick={handleContact} className="contact-button">Contact</Button>
      </CardFooter>
    </Card>
  )
}



Profile.PropTypes ={
  profileData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    bio: PropTypes.string,
    title: PropTypes.string,
    image: PropTypes.string,
    skills: PropTypes.arrayOf(PropTypes.string)
  })
}