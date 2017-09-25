import React from 'react';
import ReactDOM from 'react-dom';

// Create a new component. This component should produce
// some HTML

const App = function() {
	return <div>Hi!</div>;
}

// Taks this component's generated HTML and put it
// on the page (in the DOM)

//<App /> 인스턴스로 만들기
ReactDOM.render(<App />);
