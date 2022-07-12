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
        price = {Data.Price}
        type = {Data.Type}
        date ={Data.date}
        location = {Data.location}
        Address = {Data.Address}
        description1 = {Data.description1}
        description2 = {Data.description2}
        img = {Data.image}
     />
}

export default function Properties() {
    const [items , setItems] = useState(Data) ;

    const filterItem = (props) =>{
        const updateItems = Data.filter((curitem) => {
                if(curitem.Price === props){
                    return curitem.Price === props ;
                }
                else if (curitem.location === props){
                    return curitem.location === props ;
                }
                else if (curitem.Type === props){
                    return curitem.Type === props;
                } 
                else if (curitem.date === props){
                    return curitem.date === props;
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
                            {Bardata.map((props) => {

                            return (
                                <div>
                                        <Dropdown style={{backgroundColor:"#7266eb"}}>
                                                <Dropdown.Toggle id="dropdown-basic">
                                                {props.name}
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu>
                                                <Dropdown.Item eventKey={props.item1} onClick={() => filterItem(props.item1)}>{props.item1}</Dropdown.Item>
                                                <Dropdown.Item eventKey={props.item2} onClick={() => filterItem(props.item2)}>{props.item2}</Dropdown.Item>
                                                <Dropdown.Item eventKey={props.item3} onClick={() => filterItem(props.item3)}>{props.item3}</Dropdown.Item>
                                                <Dropdown.Item eventKey={props.item4} onClick={() => filterItem(props.item4)}>{props.item4}</Dropdown.Item>
                                                <Dropdown.Item eventKey={props.name} onClick={() => setItems(Data)}>None</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </div>
                                    )}
                            )};
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

