import React from 'react';
import ReactDOM  from 'react-dom';

class Mern extends React.Component {
  render(){
    return (
      <h1>Mongo, Express, React, NodeJS</h1>
    );
  }
}

ReactDOM.render(<Mern/>, document.getElementById('react'));
