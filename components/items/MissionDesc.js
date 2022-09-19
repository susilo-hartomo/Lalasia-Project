import React from 'react';
import RoundIcon from './RoundIcon';

function MissionDesc({ icon, alt, title, desc, containerStyle }) {
	return (
		<div className={`flex gap-6 ${containerStyle}`}>
			<RoundIcon icon={icon} alt={alt} />
			<div>
				<h3 className='heading mb-4'>{title}</h3>
				<p className='text-paragraph-1'>{desc}</p>
			</div>
		</div>
	);
}

export default MissionDesc;
