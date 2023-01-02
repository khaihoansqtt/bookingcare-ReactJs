import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

import { createNewUserInDb } from '../../services/userServices'

class ModalUser extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            address: '',
        }
    }

    handleOnChange(field, value) {
        this.setState({
            [field]: value,
        })
    }

    isModalUserValid = (data) => {
        const field = ['email', 'password', 'firstName', 'lastName', 'address']
        for (let i of field) {
            if (!this.state[i]) {
                alert(`Missing parameter: ${i}`)
                return false
            }
        }
        return true
    }

    handleAddNewUser = async (data) => {
        if (this.isModalUserValid()) {
            try {
                const response = await createNewUserInDb(data)
                this.props.reRenderAllUser()
                if (response.errCode != 0) alert(response.errMessage)
                else {
                    this.toggle()
                    this.setState({
                        email: '',
                        password: '',
                        firstName: '',
                        lastName: '',
                        address: '',
                    })
                }
            } catch (error) {
                alert(error)
            }
        }
    }

    toggle() {
        this.props.toggleFromParent()
    }
    render() {
        return (
            <Modal isOpen={this.props.isOpen} toggle={() => this.toggle()} size="lg" className="modal-user-container">
                <ModalHeader toggle={() => this.toggle()}>Add New User</ModalHeader>
                <ModalBody>
                    <div className="modal-user-body">
                        <div className="input-container">
                            <label htmlFor="email">Email</label>
                            <input
                                id="email"
                                type="text"
                                onChange={(e) => this.handleOnChange('email', e.target.value)}
                                value={this.state.email}
                            />
                        </div>
                        <div className="input-container">
                            <label htmlFor="password">Password</label>
                            <input
                                id="password"
                                type="password"
                                onChange={(e) => this.handleOnChange('password', e.target.value)}
                                value={this.state.password}
                            />
                        </div>
                    </div>
                    <div className="modal-user-body">
                        <div className="input-container">
                            <label htmlFor="firstName">Fist Name</label>
                            <input
                                id="firstName"
                                type="text"
                                onChange={(e) => this.handleOnChange('firstName', e.target.value)}
                                value={this.state.firstName}
                            />
                        </div>
                        <div className="input-container">
                            <label htmlFor="lastName">Last Name</label>
                            <input
                                id="lastName"
                                type="text"
                                onChange={(e) => this.handleOnChange('lastName', e.target.value)}
                                value={this.state.lastName}
                            />
                        </div>
                    </div>
                    <div className="modal-user-body">
                        <div className="input-container max-width-input">
                            <label htmlFor="address">Address</label>
                            <input
                                id="address"
                                type="text"
                                onChange={(e) => this.handleOnChange('address', e.target.value)}
                                value={this.state.address}
                            />
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={() => this.handleAddNewUser(this.state)}>
                        Add New User
                    </Button>{' '}
                    <Button color="secondary" onClick={() => this.toggle()}>
                        Close
                    </Button>
                </ModalFooter>
            </Modal>
        )
    }
}

const mapStateToProps = (state) => {
    return {}
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalUser)
