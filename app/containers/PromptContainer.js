var React = require('React');
var Prompt = require('../components/Prompt');

var PromptContainer = React.createClass({
	contextTypes: {
		router: React.PropTypes.object.isRequired
	},
	getInitialState: function() {
		return {
			username: ''
		}
	},
	handleSubmitUser: function(e) {
		e.preventDefault();

		var username = this.state.username;
		this.setState({
			username: ''
		});

		if(this.props.routeParams.playerOne) {
			this.context.router.push({
				pathname: '/battle',
				query: {
					playerOne: this.props.routeParams.playerOne,
					playerTwo: this.state.username
				}
			})
		} else {
			this.context.router.push('/playerTwo/' + this.state.username);
		}
	},
	handleUpdateUser: function(e) {
		this.setState({
			username: e.target.value
		})
	},

	render: function() {
		return (
			<Prompt header={this.props.route.header} username={this.state.username} onUpdateUser={this.handleUpdateUser} onSubmitUser={this.handleSubmitUser}/>
		)
	}
});

module.exports = PromptContainer;