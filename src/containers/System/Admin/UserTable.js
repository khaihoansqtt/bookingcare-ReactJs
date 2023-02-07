import React, { Component } from 'react'
import 'react-markdown-editor-lite/lib/index.css'
import { connect } from 'react-redux'

import * as actions from '../../../store/actions'

import './UserTable.scss'

class UserTable extends Component {
    constructor(props) {
        super(props)
        this.state = {
            allUsers: [],
        }
    }

    componentDidMount() {
        this.props.getAllUsers()
    }

    componentDidUpdate(prevProps) {
        if (prevProps.allUsers !== this.props.allUsers) {
            this.setState({
                allUsers: this.props.allUsers,
            })
        }
    }

    handleEditUser = (user) => {
        this.props.handleEditUserFromParent(user)
    }

    handleDeleteUser = (id) => {
        this.props.deleteUser(id)
    }

    render() {
        return (
            <React.Fragment>
                <table className="table table-striped table-hover">
                    <thead>
                        <tr className="table-danger">
                            <th scope="col">id</th>
                            <th scope="col">Email</th>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Address</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.allUsers.map((user, index) => (
                            <tr key={index}>
                                <td>{user.id}</td>
                                <td>{user.email}</td>
                                <td>{user.firstName}</td>
                                <td>{user.lastName}</td>
                                <td>{user.address}</td>
                                <td>
                                    <button className="btn" onClick={() => this.handleEditUser(user)}>
                                        <i className="fas fa-user-edit"></i>
                                    </button>
                                    <button className="btn" onClick={() => this.handleDeleteUser(user.id)}>
                                        <i className="fas fa-trash"></i>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        language: state.app.language,
        allUsers: state.admin.allUsers,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getAllUsers: () => dispatch(actions.fetchAllUsers()),
        deleteUser: (id) => dispatch(actions.deleteUser(id)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserTable)
