
var HeaderComp = React.createClass({
    render: function() {
        return (<h3> This is a header component in a js file </h3>);
    }
});

var bdy = document.getElementsByTagName('body');
ReactDOM.render( <HeaderComp/>, bdy[0] );