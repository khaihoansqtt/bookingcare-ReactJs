import React, { Component } from 'react'
import { connect } from 'react-redux'

import { userServices } from '../../services'
import ModalEditUser from './ModalEditUser'
import ModalUser from './ModalUser'

import './UserManage.scss'
class UserManage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            allUsers: [],
            isOpenModalUser: false,
            isOpenModalEditUser: false,
            editUser: {},
        }
    }

    async componentDidMount() {
        this.reRenderAllUser()
    }

    reRenderAllUser = async () => {
        const data = await userServices.getAllUsers('ALL')
        this.setState({
            allUsers: data.user,
        })
    }

    handleAddNewUser = () => {
        this.setState({
            isOpenModalUser: true,
        })
    }

    toggleModalUser = () => {
        this.setState({
            isOpenModalUser: false,
        })
    }

    handleEditUser = (user) => {
        this.setState({
            isOpenModalEditUser: true,
            editUser: user,
        })
    }

    toggleModalEditUser = () => {
        this.setState({
            isOpenModalEditUser: false,
        })
    }

    handleDeleteUser = async (id) => {
        await userServices.deleteUser(id)
        await this.reRenderAllUser()
    }

    render() {
        console.log('rerender')
        return (
            <div>
                <ModalUser
                    isOpen={this.state.isOpenModalUser}
                    toggleFromParent={this.toggleModalUser}
                    reRenderAllUser={this.reRenderAllUser}
                />
                {this.state.isOpenModalEditUser && (
                    <ModalEditUser
                        isOpen={this.state.isOpenModalEditUser}
                        toggleFromParent={this.toggleModalEditUser}
                        reRenderAllUser={this.reRenderAllUser}
                        currentUser={this.state.editUser}
                    />
                )}
                <div className="title">MANAGE USER</div>
                <button className="btn-primary mb-2" onClick={this.handleAddNewUser}>
                    Add New User
                </button>
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
                                    <a className="btn" onClick={() => this.handleEditUser(user)}>
                                        <i className="fas fa-user-edit"></i>
                                    </a>
                                    <a className="btn" onClick={() => this.handleDeleteUser(user.id)}>
                                        <i className="fas fa-trash"></i>
                                    </a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {}
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(UserManage)
