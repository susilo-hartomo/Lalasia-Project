import React from 'react';

function CountingDesc({ total, prefix, desc }) {
	return (
		<div>
			<h2 className='heading'>
				{total} {prefix ? <span>{prefix}</span> : <></>}
			</h2>
			<p className='text-paragraph-1 par-3'>{desc}</p>
		</div>
	);
}

export default CountingDesc;
