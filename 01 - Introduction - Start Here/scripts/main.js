var React = require('react');
var ReactDOM = require('react-dom');
// storepicker component: this will let us make <StorePicker/>
// This renders as a <p> but the <StorePicker/> becomes a 
// reusable web component 
var StorePicker = React.createClass({
	render: function() {
		return (
			<p> hello </p>
		)
	}
});

ReactDOM.render(<StorePicker/>, document.querySelector('#main'));