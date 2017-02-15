var React = require('react');
var transprarentBg = require('../styles').transprarentBg;
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var Home = React.createClass({
	render: function() {
		return (
			<div className='jumbotraon col-sm-12 text-center' style={transprarentBg}>
				<h1>Github Battle</h1>
				<Link to='playerOne'>
					<button type='button' 
						className='btn btn-lg btn-success'>
						Get Started 
					</button>
				</Link>
			</div>
		)
	}
});

module.exports = Home;