import React, { Component } from 'react'
import { connect } from 'react-redux'
import Lightbox from 'react-image-lightbox'
import 'react-image-lightbox/style.css'

import * as actions from '../../../store/actions'
import { CommonUtils } from '../../../utils'

import './UserRedux.scss'
import UserTable from './UserTable'

class UserRedux extends Component {
    constructor(props) {
        super(props)
        this.state = {
            genderArr: [],
            roleArr: [],
            positionArr: [],
            previewImgUrl: '',
            isOpen: false,
            id: '',
            action: 'create',

            email: '',
            password: '',
            firstName: '',
            lastName: '',
            address: '',
            phoneNumber: '',
            gender: '',
            role: '',
            position: '',
            avatar: '',
        }
    }

    componentDidMount() {
        this.props.fetchGenderStart()
        this.props.fetchRoleStart()
        this.props.fetchPositionStart()
    }

    componentDidUpdate(prevProps) {
        if (prevProps.gender !== this.props.gender) {
            this.setState({
                ...this.state,
                genderArr: this.props.gender,
                gender: this.props.gender[0].key,
            })
        }
        if (prevProps.role !== this.props.role) {
            this.setState({
                ...this.state,
                roleArr: this.props.role,
                role: this.props.role[0].key,
            })
        }
        if (prevProps.position !== this.props.position) {
            this.setState({
                ...this.state,
                positionArr: this.props.position,
                position: this.props.position[0].key,
            })
        }
        if (prevProps.allUsers !== this.props.allUsers) {
            const { gender, role, position } = this.props
            this.setState({
                email: '',
                password: '',
                firstName: '',
                lastName: '',
                address: '',
                phoneNumber: '',
                gender: gender && gender.length > 0 ? gender[0].key : '',
                role: role && role.length > 0 ? role[0].key : '',
                position: position && position.length > 0 ? position[0].key : '',
                avatar: '',
                previewImgUrl: '',
            })
        }
    }

    handlePreview = async (files) => {
        const fileBase64 = await CommonUtils.toBase64(files[0])
        const previewImgUrl = URL.createObjectURL(files[0])
        console.log(fileBase64)
        this.setState({
            previewImgUrl,
            avatar: fileBase64,
        })
    }

    handleChangeInput = (field, data) => {
        this.setState(
            {
                [field]: data,
            },
            () => console.log(this.state)
        )
    }

    handleCreateNewUser = (user) => {
        console.log(user)
        const fields = [
            'email',
            'password',
            'firstName',
            'lastName',
            'address',
            'phoneNumber',
            'gender',
            'role',
            'position',
            'avatar',
        ]
        let isValid = true
        if (this.state.action === 'create') {
            for (var i of fields) {
                if (this.state[i] === '') {
                    isValid = false
                    alert(`Missing required parameter: ${i}`)
                    break
                }
            }
            if (isValid) this.props.createNewUser(user)
        }
        if (this.state.action === 'edit') {
            user.id = this.state.id
            this.props.editUser(user)
            this.setState({
                action: 'create',
            })
        }
    }

    handleEditUserFromParent = (user) => {
        console.log(user.image)
        const b64 = new Buffer(user.image, 'base64').toString('binary')
        console.log(b64)
        this.setState({
            id: user.id,
            email: user.email,
            password: user.password,
            firstName: user.firstName,
            lastName: user.lastName,
            address: user.address,
            phoneNumber: user.phoneNumber,
            gender: user.gender,
            role: user.role,
            position: user.position,
            avatar: b64,
            action: 'edit',
            previewImgUrl: `${b64}`,
        })
    }

    render() {
        console.log('re-render component')
        const { language, isLoadingGender } = this.props
        const {
            isOpen,
            previewImgUrl,
            email,
            password,
            firstName,
            lastName,
            address,
            phoneNumber,
            gender,
            role,
            position,
            avatar,
        } = this.state
        return (
            <div className="user-redux-container">
                <div className="user-redux-header my-3">USER WITH REDUX !!!</div>
                <div className="container">
                    <div className="add-user">Add new user</div>
                    <div>{isLoadingGender ? 'Gender is loading...' : ''}</div>
                    <div className="row my-2">
                        <div className="col-3">
                            <label>Email</label>
                            <input
                                type="email"
                                className="form-control"
                                value={email}
                                onChange={(e) => this.handleChangeInput('email', e.target.value)}
                            ></input>
                        </div>
                        <div className="col-3">
                            <label>Password</label>
                            <input
                                type="password"
                                className="form-control"
                                value={password}
                                onChange={(e) => this.handleChangeInput('password', e.target.value)}
                            ></input>
                        </div>
                        <div className="col-3">
                            <label>First Name</label>
                            <input
                                type="text"
                                className="form-control"
                                value={firstName}
                                onChange={(e) => this.handleChangeInput('firstName', e.target.value)}
                            ></input>
                        </div>
                        <div className="col-3">
                            <label>Last Name</label>
                            <input
                                type="text"
                                className="form-control"
                                value={lastName}
                                onChange={(e) => this.handleChangeInput('lastName', e.target.value)}
                            ></input>
                        </div>
                    </div>
                    <div className="row my-2">
                        <div className="col-9">
                            <label>Address</label>
                            <input
                                type="text"
                                className="form-control"
                                value={address}
                                onChange={(e) => this.handleChangeInput('address', e.target.value)}
                            ></input>
                        </div>
                        <div className="col-3">
                            <label>Phone Number</label>
                            <input
                                type="number"
                                className="form-control"
                                value={phoneNumber}
                                onChange={(e) => this.handleChangeInput('phoneNumber', e.target.value)}
                            ></input>
                        </div>
                    </div>
                    <div className="row my-2">
                        <div className="col-3">
                            <label>Gender</label>
                            <select
                                className="form-select"
                                aria-label="Default select example"
                                value={gender}
                                onChange={(e) => this.handleChangeInput('gender', e.target.value)}
                            >
                                {this.state.genderArr &&
                                    this.state.genderArr.length > 0 &&
                                    this.state.genderArr.map((item, index) => (
                                        <option key={index} value={item.keyMap}>
                                            {language === 'vi' ? item.valueVi : item.valueEn}
                                        </option>
                                    ))}
                            </select>
                        </div>
                        <div className="col-3">
                            <label>Role</label>
                            <select
                                className="form-select"
                                aria-label="Default select example"
                                value={role}
                                onChange={(e) => this.handleChangeInput('role', e.target.value)}
                            >
                                {this.state.roleArr.map((item, index) => (
                                    <option key={index} value={item.keyMap}>
                                        {language === 'vi' ? item.valueVi : item.valueEn}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="col-3">
                            <label>Position</label>
                            <select
                                className="form-select"
                                aria-label="Default select example"
                                value={position}
                                onChange={(e) => this.handleChangeInput('position', e.target.value)}
                            >
                                {this.state.positionArr &&
                                    this.state.positionArr.length > 0 &&
                                    this.state.positionArr.map((item, index) => (
                                        <option key={index} value={item.keyMap}>
                                            {language === 'vi' ? item.valueVi : item.valueEn}
                                        </option>
                                    ))}
                            </select>
                        </div>
                        <div className="col-3">
                            <label>Avatar</label>
                            <label htmlFor="upload-file">
                                Upload image
                                <i style={{ marginLeft: '15px' }} className="fas fa-upload"></i>
                            </label>
                            <input
                                onChange={(e) => this.handlePreview(e.target.files)}
                                hidden
                                type="file"
                                id="upload-file"
                                className="form-control"
                            />
                            <div
                                style={{
                                    border: '1px solid #ddd',
                                    backgroundImage: `url(${previewImgUrl})`,
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'center',
                                    backgroundSize: 'contain',
                                    height: '120px',
                                    width: '100%',
                                }}
                                onClick={() => this.setState({ isOpen: true })}
                            ></div>
                            {isOpen && (
                                <Lightbox
                                    mainSrc={previewImgUrl}
                                    onCloseRequest={() => this.setState({ isOpen: false })}
                                />
                            )}
                        </div>
                    </div>
                    <button
                        className="btn btn-primary submit my-3"
                        onClick={() =>
                            this.handleCreateNewUser({
                                email: email,
                                password: password,
                                firstName: firstName,
                                lastName: lastName,
                                address: address,
                                phoneNumber: phoneNumber,
                                gender: gender,
                                role: role,
                                position: position,
                                image: avatar,
                            })
                        }
                    >
                        Save
                    </button>
                    <UserTable handleEditUserFromParent={this.handleEditUserFromParent} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        language: state.app.language,
        gender: state.admin.gender,
        role: state.admin.role,
        position: state.admin.position,
        allUsers: state.admin.allUsers,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchGenderStart: () => dispatch(actions.fetchGenderStart()),
        fetchRoleStart: () => dispatch(actions.fetchRoleStart()),
        fetchPositionStart: () => dispatch(actions.fetchPositionStart()),

        createNewUser: (payload) => dispatch(actions.createNewUser(payload)),
        getAllUsers: () => dispatch(actions.fetchAllUsers()),
        editUser: (user) => dispatch(actions.editUser(user)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux)
