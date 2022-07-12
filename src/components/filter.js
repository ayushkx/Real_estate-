import React, { useState }  from 'react' ;
import "./filter.css" ;
import {Drop} from './Home';


function Filter(props) {

    return (
       <div>
          <p className='para'>
            Search Properties to rent ......
          </p>
        <div className='container'> 
            <Drop name="Price" item1="15,000" item2="20,000" item3="25,000" item4="35,000"  />
            <Drop name="Location" item1="Delhi" item2="Mumbai" item3="Noida" item4="Lucknow" />
            <Drop name="Move" item1="Today" item2="August" item3="September" item4="October" />
            <Drop name="Type" item1="House" item2="Farmhouse" item3="Penthouse" item4="Apartments" />
        </div>
        </div>
      )
    }
  
  export default Filter ; 