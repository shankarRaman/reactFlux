"use strict";

var React = require('react');
var AddAuthor = require('./addAuthorForm');
// var AuthorApi = require('../../api/authorApi');
var AuthorStore = require('../../stores/authorStore');
var AuthorActions = require('../../actions/authorActions');
var Router = require('react-router');
var toastr = require('toastr');

var ManageAuthorPage = React.createClass({
	mixins: [
		Router.Navigation
	],
	getInitialState: function(){
		return {
			author: {id: '', firstName: '', lastName: ''},
			errors: {}
		};
	},
	
	componentWillMount: function() {
		var authorId = this.props.params.id;
		if (authorId){
			this.setState({author: AuthorStore.getAuthorById(authorId)});
		}
	},

	setAuthorState: function(event){
		var field = event.target.name;
		var value = event.target.value;
		this.state.author[field] = value;
		console.log(this.state.author);
		return this.setState({author: this.state.author});
	},

	isAuthorFormIsValid: function(){
		var formIsValid = true;
		this.state.errors= {};
		if (this.state.author.firstName.length < 3) {
			this.state.errors.firstName = "First name has to be greater than 3 characters";
			formIsValid = false;
		}
		if (this.state.author.lastName.length < 3) {
			this.state.errors.lastName = "Last name has to be greater than 3 characters";
			formIsValid = false;
		}

		this.setState({errors: this.state.errors});
		return formIsValid;
	},

	saveAuthor: function(event){
		if (!this.isAuthorFormIsValid()) {
			return;
		}
		event.preventDefault();
		AuthorActions.createAuthor(this.state.author);
		toastr.success('Author saved');
		this.transitionTo('authors');
	},

	render: function(){
		return (
			<div>
				<AddAuthor 
				author = {this.state.author} 
				onChange = {this.setAuthorState} 
				onSave = {this.saveAuthor}
				errors = {this.state.errors} />
			</div>
			);
	}
});
module.exports = ManageAuthorPage;