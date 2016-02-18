"use strict";

var React = require('react');
var Link = require('react-router').Link;

var NotFoundPage = React.createClass({
	render: function(){
		return (
			<div>
				<h1>Page not found</h1>
				<p>Oops! The page you are looking for is no longer available</p>
				<p><Link to="app">Back to home</Link></p>
			</div>
			);
	}
});

module.exports = NotFoundPage;