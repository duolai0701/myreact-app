import React, { Component } from 'react';
import { Layout, Breadcrumb } from 'antd';
import logo from '../../assets/images/logo.png'
//引入样式
import './BasicLayout.less'
//引入leftNav组件
import LeftNav from './left-nav/LeftNav.jsx'
//引入验证的组件
import WithCheckLogin from '../../containers/withCheckLogin/WithCheckLogin.jsx'
//引入头部的组件
import HeaderMain from '../../components/header-main/HeaderMain.jsx'
//引入实现国际化的翻译的相关的包,高阶组件
import {withTranslation } from 'react-i18next';

const { Header, Content, Footer, Sider } = Layout;

//国际化高阶组件
@withTranslation()
@WithCheckLogin
class BasicLayout extends Component {
    //状态数据
    state = {
        collapsed: false,
      };
      //显示或者是隐藏
      onCollapse = collapsed => {
        this.setState({ collapsed });
      };
    render() {
     const {t} = this.props
        return (
            <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
              <div className="basic-layout-logo">
                  <img src={logo} alt={logo}/>
                  <h2 style={{display:this.state.collapsed?'none':'block'}}>{t('title')}</h2>
              </div>
              <LeftNav/>
         </Sider>
            <Layout>
            <HeaderMain/>
              <Content style={{ margin: '20px' }}>
                <div style={{ padding: 10, background: '#fff', minHeight: 420 }}>
                    {
                        //children代表的是当前这个父级组件的所有子级组件
                        this.props.children
                    }
                </div>
              </Content>
              <Footer style={{ textAlign: 'center' }}>  欢迎使用后天管理系统~~~</Footer>
            </Layout>
          </Layout>
     
        );
    }
}

export default BasicLayout;