import React, { Component } from "react";
import MainLayout from "../../layout/MainLayout";

class Hobbies extends Component {
    render() {
      return <MainLayout selectedKey = {this.props.location.pathname} > Hobbies < /MainLayout>
    }
}

export default Hobbies;