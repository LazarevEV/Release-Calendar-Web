import { React, useState } from "react";
import styled from 'styled-components';
import DatePane from './components/datePane/DatePane';
import Header from './components/header/Header';
import { getTodayDate } from './utils/dateHandlers';

const AppWrapper = styled.div`
	width: 100vw;
	height: 100vh;

	display: flex;
	flex-direction: column;

	background-image: linear-gradient(to right top, #391c3d, #3b2448, #3b2b54, #39345f, #353c6a, #28406c, #18446d, #00476c, #004560, #004251, #003e43, #083936);

	padding: 0;
	margin: 0;
`

function App() {
	const [ currentDate, setCurrentDate ] = useState(getTodayDate())

	return (
		<AppWrapper>
			<Header currentDate={currentDate}/>
			<DatePane />
		</AppWrapper>
  	);
}

export default App;
