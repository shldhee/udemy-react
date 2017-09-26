import React, { Component } from 'react';
// const Component = React.Compoent;


// const Searchbar = () => {
// 	return <input />;
// }; 함수형 컴포넌트
//

class SearchBar extends Component { // 문법적 설탕
	constructor(props) {
		super(props);

		this.state = { term: 'Starting Value' };
	}

	render() {
		return (
			<div>
				<input
					value={this.state.term}
					onChange={event => this.setState({ term: event.target.value })} />
			</div>
		);
	}
}

export default SearchBar;
