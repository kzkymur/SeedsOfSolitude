import React , { useCallback, useState } from 'react';
import style from '@/style/Home.scss';
import Introduction_1 from './introduction_1';
import Introduction_2 from './introduction_2';

const Home: React.FC = () => {
	const [pageNumber, setPageNumber] = useState<number>(1);

	const countPage = useCallback(() => {
		setPageNumber(prev => prev + 1);
	}, []);

	const decountPage = () => {
		setPageNumber(prev => prev - 1);
	};

	return (
     <div className={`${style.wrapper} ${pageNumber == 3 ? style.wrapperBlack : ""}`}>
	 	<Introduction_1 countPage={countPage} pageNumber={pageNumber} />
		{((pageNumber == 1)||(pageNumber == 2)||(pageNumber == 3)) && <Introduction_2 countPage={countPage} pageNumber={pageNumber} />}
		<button className={style.debug} onClick={decountPage}>デバッグ用Page戻るボタン</button>
	 </div>
	);
}

export default Home;
