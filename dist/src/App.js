var destination = document.querySelector('#app');
var App = React.createClass({displayName: "App",
  render: function() {
    return (
      React.createElement("div", null, 
        React.createElement("h1", null, "Simple SPA"), 
        React.createElement("ul", {className: "header"}, 
          React.createElement("li", null, "Home"), 
          React.createElement("li", null, "Stuff"), 
          React.createElement("li", null, "Contact")
        ), 
        React.createElement("div", {className: "content"}

        )
      )
    )
  }
});

ReactDOM.render(
  React.createElement(ReactRouter.Router, null, 
    React.createElement(ReactRouter.Route, {path: "/", component: App}

    )
  ),
  destination
);
