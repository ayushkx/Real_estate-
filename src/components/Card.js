import React from 'react' ;
import './Card.css' ;
import KingBedIcon from '@mui/icons-material/KingBed';
import BathtubIcon from '@mui/icons-material/Bathtub';
import StarsIcon from '@mui/icons-material/Stars';

export default function Cards(props) {
    return (
            <div className="card-container">
                    <div className='image-container'>
                    <img src={props.img} alt="project"/>
                    </div>
                    <div className='card-content'>
                    <h3 className="card-title">{props.name}</h3>
                    <div>
                     ₹{props.price}/month <StarsIcon sx={{ margin : "0 0 4% 30%"}}/>
                    </div>
                    <div className='card-text'>
                        Address-{props.Address}{props.location}
                    </div>
                    <hr />
                    <p className="card-des"><KingBedIcon sx={{ fontSize: 20 }}/>{props.description1}  <BathtubIcon sx={{ fontSize: 20 }}/>{props.description2}</p>
                    </div>
                </div>                     
    )
}
