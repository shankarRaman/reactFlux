"use strict";

var React = require('react');
var Input = require('../common/textInput');

var AddAuthor = React.createClass({
	render: function(){
		return (
			<div>
				<form>
					<h1>Manage Author</h1>
					<Input
						name="firstName"
						label="First Name"
						value={this.props.author.firstName}
						onChange={this.props.onChange}
						error= {this.props.errors.firstName} />
				    <Input 
				    	name="lastName" 
				    	label="Last Name" 
				    	value={this.props.author.lastName} 
				    	onChange={this.props.onChange} 
				    	error= {this.props.errors.lastName}/>
					<input type="submit" value="Save" onClick={this.props.onSave} className="btn btn-default" />
				</form>
			</div>
			);
	}
});

module.exports = AddAuthor;