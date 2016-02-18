	"use strict";

	var React = require('react');
	var Link = require('react-router').Link;

	var AuthorsList = React.createClass({
		render: function(){
			var createAuthorRow = function(author){
				return (
						<tr key={author.id}>
							<td><Link to="manageAuthor" params={{id: author.id}}>{author.id}</Link></td>
							<td>{author.firstName} {author.lastName}</td>
						</tr>
					);
			};
			return (
					<div>
						<h1>Authors</h1>
						<table className='table'>
							<thead>
							<td>
								ID
								</td>
								<td>
								Name
								</td>
							</thead>	
							<tbody>
								{this.props.authors.map(createAuthorRow, this)}
							</tbody>
						</table>
					</div>
				);
		}
		});

	module.exports = AuthorsList;