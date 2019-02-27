import React, { Component } from 'react';
import MainLayout from '../../layout/MainLayout';

class WorkExperiences extends Component {
    render() {
      return <MainLayout selectedKey = {this.props.location.pathname} > WorkExperiences </MainLayout >
    }
}

export default WorkExperiences