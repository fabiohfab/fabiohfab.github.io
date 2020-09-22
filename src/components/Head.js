import React from 'react'
import { Layout,  Avatar, Typography } from 'antd';
import Hello from './Hello'
const { Header } = Layout;
const { Title, Text } = Typography;

const Head = () => {
  return (
    <Header className="site-layout-sub-header-background" style={{ paddingLeft: 24, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
      <div style={{alignItems: 'center', display: 'flex'}}>
        <Avatar size={50} src={require('../img/avatar.png')} />
        <div style={{paddingLeft: 10, flexDirection: 'column', lineHeight: 1}}>
          <Title level={3} style={{margin: 0}}>Fábio Henriques</Title>
          <Text type="secondary">Software Developer / AWS Cloud Practitioner</Text>
        </div>
      </div>
      <div>
        <Hello />
      </div>
    </Header>
  )
}

export default Head