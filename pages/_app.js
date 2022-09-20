import { useEffect } from 'react';
import '@/styles/fonsts.css';
import '@/styles/VideoPlayer.css';
import '@/styles/globals.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

function MyApp({ Component, pageProps }) {
	useEffect(() => {
		AOS.init();
		return () => {};
	}, []);
	return <Component {...pageProps} />;
}

export default MyApp;
