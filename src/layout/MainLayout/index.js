import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom"
import { Layout, Menu, Icon } from "antd";

import "./index.css";
import Routes from "../../route";

const { Header, Sider } = Layout;

class MainLayout extends Component {
    static propTypes = {
        children: PropTypes.any,
        selectedKey: PropTypes.string,
    }

    static defaultProps = {
        children: null,
        selectedKey: ""
    }

    constructor(props) {
        super(props);
        this.state = {
            collapsed: false,
        }
    }
    
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    render() {
        return <Layout className="Layout">
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
        >
          <span className="logo" >{this.state.collapsed ? "An" : "An Huynh" }</span>
          <Menu theme="dark" mode="inline" selectedKeys={[this.props.selectedKey]}>
            {Routes.map(route => (
                <Menu.Item key={route.route}>
                    <Link to={route.route}>
                        <Icon type={route.icon} />
                        <span>{route.name}</span>
                    </Link>
                </Menu.Item> 
            ))}
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          {this.props.children}
        </Layout>
      </Layout>
    }
}

export default MainLayout;