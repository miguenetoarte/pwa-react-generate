import React from 'react';
import {connect} from 'react-redux';
import * as uiSelectors from "../store/ui/navigation/reducer";
import {withRouter} from "react-router-dom";

class App extends React.Component {

  render() {
    return this.props.children;
  }
}

const mapStateToProps = state => ({
  ui: uiSelectors.getUi(state)
})

export default withRouter(connect(mapStateToProps, null)(App));
