var App = React.createClass({
  render: function() {
    return React.createElement('h1',null,'Hello World')
  }
})

ReactDOM.render(
  React.createElement(App),
    document.getElementById('app')
  )
