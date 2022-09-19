import Layout from '@/components/Layout/index';
import Image from 'next/image';
import { abstractStars } from '../assets/images';
import { spiral } from '../assets/images';
import { searchNormal } from '../assets/images';
import { banner } from '../assets/images';

export default function Home() {
	const renderSection1 = () => {
		return (
			<div className='container mx-auto relative bg-red-200'>
				<div className='mb-24'>
					<h1 className='heading text-center lg:w-[724px] mx-auto lg:mt-[100px] mt-[50px] relative'>Discover Furniture With High Quality Wood
						<span className='lg:-mt-[12px] absolute mx-1 lg:mx-2 w-[24px] h-[24px] lg:w-[51px] lg:h-[51px]'><Image src={abstractStars} alt='Lalasia stars' /></span></h1>
					<div className='absolute top-[60px] lg:mx-[100px] w-[83.43px] h-[83.43px] lg:w-[249.07px] lg:h-[249.07px]'>
						<Image src={spiral} alt='Lalasia spiral' />
					</div>
					<p className='relative text-center mx-auto  lg:w-[796px] paragraph par1 px-4 mt-[30px]'>Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non. Purus parturient viverra nunc, tortor sit laoreet. Quam tincidunt aliquam adipiscing tempor.</p>
				</div>
				<div className='relative'>
					<div className='absolute z-10 -top-24 w-full left-auto right-auto'>
						<div className='mx-auto lg:w-[810px] mt-[50px] lg:h-[84px] bg-white flex justify-between items-center px-4 gap-[18px]'>
							<Image className='w-[32px] h-[32px]' src={searchNormal} alt="search" />
							<input className='w-[70%] h-[50px] p-2' type="search" placeholder="Search Property" />
							<button className='bg-[#518581] w-[170px] h-[54px] px-[54] py-[15] text-[#FFFFFF] font-bold text-center' type='submit'>Search</button>
						</div>
					</div>
					<div className='w-full h-[480px] relative'>
						<Image src={banner} alt='banner' layout='fill' />
					</div>
				</div>
			</div >
		);
	};



	return (
		<Layout>
			{renderSection1()}
		</Layout>
	);
}
