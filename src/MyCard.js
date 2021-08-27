import React from "react";
import {Card,CardBody,CardTitle,CardText} from "reactstrap";
import {FaEnvelope,FaMapMarkedAlt,FaPhone} from "react-icons/fa";

const MyCard=({details})=>{
    return(
        <Card>
            <CardBody className="text-center">
            <img height="150" width="150"
            className="rounded-circle img-thumbnail border-danger"
            src={details.picture?.large}/>
            <CardTitle className="text-primary">
           <h1>
        <span>{details.name?.title}</span>{" "}
           <span>{details.name?.first}</span>
           <span>{details.name?.last}</span>
           </h1>
           </CardTitle>
           <CardText className="text-secondary">
               <FaMapMarkedAlt color="blue"/>
               {details.location?.city}{" "}
               <FaPhone color="green"/>
               {details.phone}
               
               <p>
                   <FaEnvelope color="red"/>
                   {details.email}
               </p>
           </CardText>
           
           
            
            </CardBody>
        </Card>

    );
}

export default MyCard;