import React from 'react'
import { Layout } from 'antd';

import Head from './Head'
import Menu from './Menu'
const { Content, Sider } = Layout;

const Wrapper = (props) => {
  return (
    <Layout style={{height: '100%'}}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={broken => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
      <div className="logo" />
      <Menu />
      </Sider>
      <Layout>
        <Head/>
        <Content style={{ margin: '24px 16px 0' }}>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            {props.children}
          </div>
        </Content>
      </Layout>
    </Layout>
  )
}

export default Wrapper