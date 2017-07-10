import React from 'react';
import UserList from '../components/ListUserPage';
import {connect} from 'react-redux';
import {fetchUsers,deleteUser} from '../actions/userActions';

class USERSPage extends React.Component {
    componentDidMount() {
    this.props.fetchUsers();

    }
    render() {
        return (
            <div className="container">
                <UserList users={this.props.users} deleteUser={this.props.deleteUser}/>
            </div>
        )
    }
}

USERSPage.propTypes = {
    users: React.PropTypes.array.isRequired,
    fetchUsers:React.PropTypes.func.isRequired,
    deleteUser:React.PropTypes.func.isRequired
}

function mapStateToProps(state) {
    return {users: state.users}
}

export default connect(mapStateToProps, {fetchUsers,deleteUser})(USERSPage);