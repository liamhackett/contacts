import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scoll';
import './App.css';
class App extends Component{
    constructor(){
        super();
        this.state = {
            robots: [],
            searchField: ''
        }
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response =>  response.json())
            .then(users => this.setState({robots: users}));
    }

    onSearchChange = (event) => {
        console.log(event.target.value);
        this.setState({ searchField: event.target.value});
    }
    render() {
        const { robots, searchField } = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        });
        return !robots.length ?
           
             <h1 className="title">Loading</h1>  :
             (
                <div className="tc">
                    <h1 className="title">Contacts</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <CardList robots={filteredRobots} />
                    </Scroll>
                </div>
        );
    }
    
}

export default App;
