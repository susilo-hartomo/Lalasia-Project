import React from 'react';

function SecondaryButton({ text, onClick }) {
	return (
		<div
			className='w-full group max-h-14 h-14 text-center cursor-pointer bg-transparent  border group-hover:border-primary-4 border-paragraph-6 px-9 py-4'
			onClick={onClick}>
			<h5 className='heading text-title-1 group-hover:text-primary-1'>{text}</h5>
		</div>
	);
}

export default SecondaryButton;
