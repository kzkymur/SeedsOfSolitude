import React , { useCallback, useState } from 'react';
import style from '@/style/Home.scss';
import Introduction_1 from './introduction_1';

const Home: React.FC = () => {
	const [pageNumber, setPageNumber] = useState<number>(1);

	const countPage = useCallback(() => {
		setPageNumber(prev => prev + 1);
	}, []);

	return (
     <>
	 	<Introduction_1 countPage={countPage} pageNumber={pageNumber} />
		 <p>{pageNumber}</p>
	 </>
	);
}

export default Home;
