import Layout from '@/components/Layout/index';

export default function Home() {
	return (
		<Layout>
			<h1 className='h1'>Welocome to next js with tailwind setup</h1>

			<label htmlFor='' className='label text-xs'>
				Label
			</label>

			<p className='paragraph'>paragraph</p>
		</Layout>
	);
}
