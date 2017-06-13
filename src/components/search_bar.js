import React , {Component} from 'react';

// const SearchBar = () => { //this is a functional component
//     return <input />;
// };

class SearchBar extends Component {
    constructor(props){
        super(props);

        this.state = {term: "starting value"};
    }

    render() {
       // return <input onChange={this.onInputChange}/>;
       return (
           <div className="search-bar">
                <input value={this.state.term} 
                       onChange={event => this.onInputChange(event.target.value)} />            
           </div>           
       );
       
    }

    onInputChange(term){
        this.setState({term});
        this.props.onSearchTermChange(term);
    }

    //state:{this.state.term}

    // onInputChange(event){
    //     console.log(event.target.value);
    // }

}


export default SearchBar;