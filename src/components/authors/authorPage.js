	"use strict";

	var React = require('react');
	var AuthorApi = require('../../api/authorApi');
	var AuthorList = require('./authorList');
	var Link = require('react-router').Link;

	var Authors = React.createClass({
	getInitialState: function(){
		return {
				authors: []
			};
	},
	componentDidMount: function(){
		this.setState({authors: AuthorApi.getAllAuthors() });
	},
	render: function(){
		return (
				<div>
					<h1>Authors</h1>
					<Link to="addAuthors" className="btn btn-default">Add Author</Link>
					<AuthorList authors={this.state.authors} />
				</div>
			);
	}
	});

	module.exports = Authors;