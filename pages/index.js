import Layout from '@/components/Layout/index';
import Image from 'next/image';
import { abstractStars } from '../assets/images';
import { spiral } from '../assets/images';

export default function Home() {
	const renderSection1 = () => {
		return (
			<div className='container mx-auto relative'>
				<h1 className='heading text-center lg:w-[724px] mx-auto lg:mt-[100px] mt-[50px] relative'>Discover Furniture With High Quality Wood
					<span className='sm:-mt-[20px] absolute mx-1 sm:mx-2 w-[24px] h-[24px] sm:w-[51px] sm:h-[51px]'><Image src={abstractStars} alt='Lalasia stars' /></span></h1>
				<div className='absolute top-[100px] mx-[100px] lg:w-[249.07px] lg:h-[249.07px]'>
					<Image src={spiral} alt='Lalasia spiral' />
				</div>
				<p className='text-center mx-auto  lg:w-[796px] paragraph par1 px-4 mt-[30px]'>Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non. Purus parturient viverra nunc, tortor sit laoreet. Quam tincidunt aliquam adipiscing tempor.</p>
			</div>
		);
	};



	return (
		<Layout>
			{renderSection1()}

			<label htmlFor='' className='label text-xs'>
				Label
			</label>

			<p className='paragraph'>paragraph</p>
		</Layout>
	);
}
