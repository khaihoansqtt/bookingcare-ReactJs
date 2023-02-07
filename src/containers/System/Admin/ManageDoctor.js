import React, { Component } from 'react'
import { connect } from 'react-redux'
import Select from 'react-select'
import MarkdownIt from 'markdown-it'
import MdEditor from 'react-markdown-editor-lite'

import * as actions from '../../../store/actions'
import { userServices } from '../../../services'

import './ManageDoctor.scss'

const mdParser = new MarkdownIt(/* Markdown-it options */)

class ManageDoctor extends Component {
    constructor(props) {
        super(props)
        this.state = {
            contentHTML: '',
            contentMarkdown: '',
            description: '',
            selectedDoctor: null,
            doctorOptions: [],
            action: '',
        }
    }

    componentDidMount() {
        this.props.getAllDoctors()
    }

    componentDidUpdate(prevProps) {
        if (prevProps.allDoctors !== this.props.allDoctors) {
            const doctorOptions = this.buildDoctorOptions(this.props.allDoctors)
            this.setState({ doctorOptions })
        }

        if (prevProps.language !== this.props.language) {
            const doctorOptions = this.buildDoctorOptions(this.props.allDoctors)
            this.setState({ doctorOptions })
        }
    }

    handleChangeSelect = async (selectedDoctor) => {
        this.setState({ selectedDoctor })
        let res = await userServices.getDetailDoctor(selectedDoctor.value)
        if (res.data.Markdown) {
            let markdown = res.data.Markdown
            console.log(markdown.description)
            this.setState({
                contentHTML: markdown.contentHTML,
                contentMarkdown: markdown.contentMarkdown,
                description: markdown.description,
                action: 'UPDATE',
            })
        } else {
            this.setState({
                contentHTML: '',
                contentMarkdown: '',
                description: '',
                action: 'CREATE',
            })
        }
    }

    handleEditorChange = ({ html, text }) => {
        this.setState({
            contentHTML: html,
            contentMarkdown: text,
        })
    }

    handleOnChangeDescription = (e) => {
        this.setState({
            description: e.target.value,
        })
    }

    buildDoctorOptions(allDoctors) {
        return allDoctors.map((item) => {
            const label =
                this.props.language === 'vi'
                    ? `${item.lastName} ${item.firstName}`
                    : `${item.firstName} ${item.lastName}`
            const value = item.id
            return {
                value,
                label,
            }
        })
    }

    handlePostDetailDoctor = () => {
        this.props.postDetailDoctor({
            doctorId: this.state.selectedDoctor.value,
            contentMarkdown: this.state.contentMarkdown,
            contentHTML: this.state.contentHTML,
            description: this.state.description,
            action: this.state.action,
        })
    }

    render() {
        const { selectedDoctor } = this.state
        // Pattern data of Select libary
        // const doctors = [
        //     { value: 'chocolate', label: 'hihihaha' },
        //     { value: 'strawberry', label: 'Strawberry' },
        //     { value: 'vanilla', label: 'Vanilla' },
        // ]
        return (
            <div className="manage-doctor-container">
                <div className="manage-doctor-title">Thêm thông tin cho bác sĩ</div>
                <div className="manage-doctor-body">
                    <div className="select-doctor">
                        <label>Chọn bác sĩ</label>
                        <Select
                            value={selectedDoctor}
                            onChange={this.handleChangeSelect}
                            options={this.state.doctorOptions}
                        />
                    </div>
                    <div className="doctor-info">
                        <label>Thông tin giới thiệu</label>
                        <textarea
                            className="form-control"
                            rows="4"
                            onChange={(e) => this.handleOnChangeDescription(e)}
                            value={this.state.description}
                        />
                    </div>
                </div>
                <MdEditor
                    style={{ height: '500px' }}
                    renderHTML={(text) => mdParser.render(text)}
                    onChange={this.handleEditorChange}
                    value={this.state.contentMarkdown}
                />
                <button className="btn btn-primary" onClick={this.handlePostDetailDoctor}>
                    Lưu thông tin bác sĩ
                </button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        language: state.app.language,
        // gender: state.admin.gender,
        // role: state.admin.role,
        // position: state.admin.position,
        // allUsers: state.admin.allUsers,
        allDoctors: state.admin.allDoctors,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getAllDoctors: () => dispatch(actions.getAllDoctors()),
        postDetailDoctor: (body) => dispatch(actions.postDetailDoctor(body)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageDoctor)
