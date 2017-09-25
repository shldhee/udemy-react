import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

// API key
const API_KEY = 'AIzaSyAUfkH5Pc2AGhiguXKEEKVIv51sy7bip_M';

// Create a new component. This component should produce
// some HTML

const App = () => {
	return (
		<div>
			<SearchBar />
		</div>
	)
}

// Taks this component's generated HTML and put it
// on the page (in the DOM)

//<App /> 인스턴스로 만들기 2번째 요소에 삽입
ReactDOM.render(<App />, document.querySelector('.container'));
