import React, { Component } from 'react';
// const Component = React.Compoent;


// const Searchbar = () => {
// 	return <input />;
// }; 함수형 컴포넌트
//

class SearchBar extends Component { // 문법적 설탕
	constructor(props) {
		super(props);

		this.state = { term: '' };
	}

	render() {
		return (
			<div className="search-bar">
				<input
					value={this.state.term}
					onChange={event => this.onInputChange(event.target.value)} />
			</div>
		);
	}

	onInputChange(term) {
		this.setState({term});
		this.props.onSearchTermChange(term);
	}
}

export default SearchBar;
