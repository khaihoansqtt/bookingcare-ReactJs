import React, { Component } from 'react'
import { connect } from 'react-redux'
class ProductManage extends Component {
    state = {}

    componentDidMount() {}

    render() {
        return <div className="text-center">User redux</div>
    }
}

const mapStateToProps = (state) => {
    return {}
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductManage)
