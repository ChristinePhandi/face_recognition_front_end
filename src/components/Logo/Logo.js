import React from 'react';
import Tilt from 'react-tilt';
import face from './face.png';
import './Logo.css'

const Logo = () => {
	return(
		<div className='ml4'>
			<Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 100, width: 100, borderRadius: 25}} >
			 <div className="Tilt-inner pa3"> <img style={{paddingTop: '5px'}}alt='logo' src={face}/> </div>
			</Tilt>
		</div>
	);
}
export default Logo;