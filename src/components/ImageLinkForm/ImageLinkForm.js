import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({onInputChange, onButtonSubmit}) => {
	return(
		<div>
			<p className='f3 center'>
				{`Copy & paste an image URL below. This app will try to detect a face from the image`}
			</p>
			<div className='center'>
				<div className='form center pa4 br3 shadow-5'>
					<input className='f4 pa2 w-70 center' type='text' onChange={onInputChange}/>
					<button className='w-30 grow f4 link ph3 pv2 dib white' onClick={onButtonSubmit}>Detect</button>
				</div>
			</div>
		</div>
	);
}
export default ImageLinkForm;