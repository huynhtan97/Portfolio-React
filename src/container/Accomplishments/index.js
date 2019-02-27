import React, { Component } from 'react';
// Wrap this around every page to get sidenav and toolbar
import MainLayout from "../../layout/MainLayout";

class Accomplishments extends Component {
    render() {
      return <MainLayout selectedKey={this.props.location.pathname}> Accomplishments < /MainLayout>
    }
}

export default Accomplishments