let React = require('react');
let d3 = require('d3');

let EventsMixin = {
	propTypes: {
		onClick: React.PropTypes.func,
	},

	getDefaultProps() {
		return {
			onClick: function(e,data){},
		};
	}
};

module.exports = EventsMixin;
