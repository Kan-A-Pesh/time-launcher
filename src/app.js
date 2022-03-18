class HelloMessage extends React.Component {
    render() {
    return (
        <div className="app">
            
        </div>
    );
    }
  }
  
  ReactDOM.render(React.createElement(HelloMessage, { name: "Thierry" }), document.getElementById('root'));