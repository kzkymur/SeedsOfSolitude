import React , { useCallback, useState } from 'react';
import style from '@/style/Home.scss';
import Introduction_1 from './introduction_1';
import Introduction_2 from './introduction_2';

const Home: React.FC = () => {
	const [pageNumber, setPageNumber] = useState<number>(1);

	const countPage = useCallback(() => {
		setPageNumber(prev => prev + 1);
	}, []);

	return (
     <>
	 	<Introduction_1 countPage={countPage} pageNumber={pageNumber} />
		{pageNumber == 2 && <Introduction_2 countPage={countPage} pageNumber={pageNumber} />}
	 </>
	);
}

export default Home;
