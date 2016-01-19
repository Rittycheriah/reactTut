var React = require('react');
var ReactDOM = require('react-dom');

/* 
  StorePicker
  This will let us make <StorePicker/>
*/

var StorePicker = React.createClass({
	// always return a single element with many nested inside per JSX
  render : function() {
    return (
      <form>
      	<h2>Please enter a store</h2>
      	// react doesn't like self closing, put / in the end
      	<input type="text" ref="storeId"/>
      	<input type="Submit"/>
      </form>
    )
  }
});


ReactDOM.render(<StorePicker/>, document.querySelector('#main'));
