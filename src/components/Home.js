import React, { useState } from 'react' ;
import './home.css' ;
import Data from './data.js' ;
import Cards from './Card.js' ;
import "./filter.css" ;
import Dropdown from "react-bootstrap/Dropdown";
import Bardata from './bardata' ;

function createCard(Data) {
    return  <Cards 
        name ={Data.name}
        price = {Data.price}
        type = {Data.type}
        date ={Data.date}
        location = {Data.location}
        Address = {Data.Address}
        description1 = {Data.description1}
        description2 = {Data.description2}
        img = {Data.image}
     />
}

export default function Properties(props) {
    const [items , setItems] = useState(Data) ;

    const filterItem = () =>{
        const updateItems = Data.filter((curitem) => {
                if(curitem.price === props){
                    return curitem.price === props ;
                }
                else if (curitem.location === props){
                    return curitem.location === props ;
                }
                else if (curitem.type === props){
                    return curitem.type === props;
                } 
                else if (curitem.date === props){
                    return curitem.date === props;
                }
                else {
                    return  curitem;
                }
        });
      
      setItems(updateItems)  ;
    }
    

    return (
        <div>
            <div>
                <p className='para'>
                    Search Properties to rent ......
                </p>
                <div className='container'> 

                </div>
            </div>
            <hr/>
            <div className="flex-container ">
                   { items.map(createCard)}
            </div>
            <hr/> 
          
        </div>
    )
}


export const  Drop = (props) => {

    const [state , setState] = useState(`${props.name}`);

    const handleSelect = (e) => {
        setState(e);
    }
    
    return (
        <div>
                <span style={{backgroundColor:"#7266eb"}}>
                <Dropdown onSelect={handleSelect}>
                        <Dropdown.Toggle id="dropdown-basic">
                        {state}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                        <Dropdown.Item eventKey={props.item1} onClick={Properties(props.item1)}>{props.item1}</Dropdown.Item>
                        <Dropdown.Item eventKey={props.item2} onClick={Properties(props.item2)}>{props.item2}</Dropdown.Item>
                        <Dropdown.Item eventKey={props.item3} onClick={Properties(props.item3)}>{props.item3}</Dropdown.Item>
                        <Dropdown.Item eventKey={props.item4} onClick={Properties(props.item4)}>{props.item4}</Dropdown.Item>
                        <Dropdown.Item eventKey={props.name} onClick={Properties(props.name)}>None</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    </span>
                </div>
    )
};

