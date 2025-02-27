import * as React from "react"
import "../styles/profile.css"
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
  let {skills,name,bio,title,image} = profileData;
    const handleContact = ()=>{
      
    }
  return (
    <Card className="w-[350px] card">
      <CardHeader className={"profile-header"}>
       <div className="image-box">
        <img className="image" src={image} />
       </div>
        <CardTitle><span>{name}</span></CardTitle>
        <CardDescription>{title}</CardDescription>
      </CardHeader> 

      <CardContent>
        <hr />
        <div className="bio-box" > <strong >Bio </strong> &nbsp; : {bio}</div>
        <div className="bio-box" > <p><strong>Skills </strong>: &nbsp; &nbsp;</p>
       
        {skills.length &&  skills.map((skill , index)=>{
                return <p key={skill}>{skill}  {index !==  skills.length-1 && ","} &nbsp;</p>  
            })}

        </div>
      
    
      </CardContent>
   
      <CardFooter className="flex footer">
        
         <Button onClick={handleContact} className={"contact-button"}>Contact</Button>
      </CardFooter>
    </Card>
  )
}
