import _ from 'lodash';
import React , {Component} from 'react'; //import react as javascript module ... use to create and manage our components
import ReactDOM from 'react-dom';// deal with actual DOM
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyDFlOkAgSKqfPwhF1uNH1BVDQUOS9zXFFM';



//create a new component. this component should produce some html.

class App extends Component { // this is a class/type of the component

    constructor(prop) {
        super(prop);

        this.state = {
            videos:[],
            selectedVideo:null
        };

        this.searchVideo('surfboard');
    };

    searchVideo(term){
        YTSearch({key: API_KEY, term:term}, videos => {
            this.setState({
                videos : videos,
                selectedVideo: videos[0]
            });
        });
    };
    

    render() {
       const videoSerach = _.debounce((term) => {this.searchVideo(term)},300);
        return(
            <div>
                {/*callback function*/}
                <SearchBar onSearchTermChange = {videoSerach}/> 
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList videos={this.state.videos} onVideoSelect={selectedVideo => this.setState({selectedVideo})}/>
            </div>
        );
    }
}


//take this component's generated html and put it on the page (the DOM)

//ReactDOM.render(App);

//we need to instantiate our components before passing them to the DOM 

ReactDOM.render(<App />, document.querySelector('.container'));