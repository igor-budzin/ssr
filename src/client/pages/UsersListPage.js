import React from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet'
import {Input} from 'antd';

import { fetchUsers } from '../actions';

import 'antd/lib/input/style/css';

class UsersList extends React.Component {
	componentDidMount() {
		this.props.fetchUsers();
	}

	renderUsers() {
		return this.props.users.map(user => {
			return <li key={user.id}>{user.name}</li>
		});
	}

	head() {
		return (
			<Helmet>
				<title>{`${this.props.users.length} Users Loaded`}</title>
				<meta property="og:title" content="Users App" />
			</Helmet>
		);
	}

	render() {
		return (
			<div>
				{this.head()}
				User List
				<ul>{this.renderUsers()}</ul>
				<Input size="large" />
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		users: state.users
	}
}

function loadData(store) {
	return store.dispatch(fetchUsers());
}

export default { 
	loadData,
	component: connect(mapStateToProps, { fetchUsers })(UsersList)
};
