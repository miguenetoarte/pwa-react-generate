import React, { Fragment, PureComponent } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as uiActions from "../../store/ui/navigation/actions";

class NavigationKeeper extends PureComponent {

    componentDidMount() {
        this.props.setNavigation(this.props.routerToKeep, this.props.objectToKeep);
    }

    render() {
        return <Fragment>
            { this.props.children }
        </Fragment>
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    ...uiActions,
}, dispatch)

export default connect(null, mapDispatchToProps)(NavigationKeeper);