var React = require('react');
var ReactDOM = require('react-dom');
// storepicker component: this will let us make <StorePicker/>

var StorePicker = React.createClass({
	render: function() {
		return (
			<p> hello </p>
		)
	}
});

ReactDOM.render(<StorePicker/>, document.querySelector('#main'));