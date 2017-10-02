import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyAUfkH5Pc2AGhiguXKEEKVIv51sy7bip_M';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			videos: [],
			selectedVideo: null
		 };

		 this.videoSearch('surfboards');
	}

	videoSearch(term) {
		YTSearch({key: API_KEY, term: term}, (videos) => {
			this.setState({
				videos: videos,
				selectedVideo: videos[0]
			 });
		});
	}

	render() {
		const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 1500);

		return (
			<div>
				<SearchBar onSearchTermChange={videoSearch} />
				<VideoDetail video={this.state.selectedVideo}/>
				<VideoList
					onVideoSelect={selectedVideo => this.setState({selectedVideo})}
					videos={this.state.videos} /> { /* App(부모)가 자식에게 데이터 넘겨줌. VideoList(자식)은 props로 받음, setState호출시마다 새로운 데이터를 전달함. */ }
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector('.container'));
