import React from 'react';
import ReactDom from 'react-dom';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      'items': []
    }
  }

  componentDidMount() {
    this.getItems();
  }
  
  getItems() {
    fetch('https://randomuser.me/api/')
    .then(results => results.json())
    .then(results => this.setState({'items': results}));
  }

  render() {
    return (
      <h1> Test</h1>
    );
  }
}

ReactDom.render(
  <App />,
  document.getElementById('root')
);

export default App;
