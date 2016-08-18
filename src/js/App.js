var destination = document.querySelector('#app');
var { Router,
      Route,
      IndexRoute,
      IndexLink,
      Link } = ReactRouter;
var App = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Simple SPA</h1>
        <ul className="header">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/stuff">Stuff</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        <div className="content">

        </div>
      </div>
    )
  }
});


ReactDOM.render(
  <Router>
    <Route path="/" component={App}>
      <IndexRoute component={Stuff}/>

    </Route>
  </Router>,
  destination
);
