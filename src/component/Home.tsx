import React , { useCallback, useState } from 'react';
import style from '@/style/Home.scss';
import Introduction_1 from './introduction_1';

const Home: React.FC = () => {
	const [pageNumber, setPageNumber] = useState<number>(0);

	const countPage = useCallback(() => {
		setPageNumber(prev => prev + 1);
	}, []);


	return (
     <>
	 	<Introduction_1 countPage={countPage} />
	 </>
	);
}

export default Home;
