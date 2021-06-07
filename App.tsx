import React, {Component} from 'react';
import Contacts from './components/contacts';

class App extends Component {
    render() {
        return (
            <Contacts contacts={this.state.contacts} />
        )
    }

    state = {
        contacts: []
    };

    componentDidMount() {
        fetch('https://simplescraper.io/api/I16XiGEIkHpZKUR4Wzzs?apikey=QjYxoh3dNpFyPo8eGHdUqLIb9r0Xoecc&limit=100')
            .then(res => res.json())
            .then((data) => {
                this.setState({ contacts: data.data })
            })
            .catch(console.log)
    }
}

export default App;