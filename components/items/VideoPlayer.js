import React, { useState } from 'react';
import Image from 'next/image';

import { playButtonIc } from '../../assets/icons';
import { videoThumbnail } from '../../assets/images';

function VideoPlayer({ urlVideo }) {
	const [videoInfo, setVideoInfo] = useState({
		timeStart: '00:00',
		timeFinish: '12:00',
		pause: false,
		finish: false,
		play: false,
		progress: '40',
	});

	return (
		<div className='bg-gray-400/10 relative lg:h-[550px] h-[240px]'>
			<div className='w-full h-full relative'>
				<Image src={videoThumbnail} layout='fill' />
			</div>
			<iframe
				width='100%'
				height='100%'
				src='https://res.cloudinary.com/dssvrf9oz/video/upload/v1635662987/pexels-pavel-danilyuk-5359634_1_gmixla.mp4'></iframe>
			{/* <video className='w-100 h-100' src={urlVideo} /> */}

			<div className='w-full z-10 h-3/4 absolute bottom-0 left-0 bg-gradient-to-t from-title-1/60 to-transparent'></div>
			<div className='w-full absolute lg:top-[45%] top-[35%] z-20 cursor-pointer'>
				<img className='mx-auto' alt='' src={playButtonIc.src} />
			</div>
			<div className='absolute lg:bottom-8 bottom-3 w-full z-20'>
				<div className='h-1 w-5/6 lg:my-5 my-2 mx-auto bg-white/40'>
					<div className={`bg-white h-full`} style={{ width: `${videoInfo.progress}%` }}></div>
				</div>
				<div className='flex justify-between w-5/6 mx-auto'>
					<p className='text-white'>{videoInfo.timeStart}</p>
					<p className='text-white'>{videoInfo.timeFinish}</p>
				</div>
			</div>
		</div>
	);
}

export default VideoPlayer;
