import React from 'react'
import { Layout,  Avatar, Typography, Row, Col } from 'antd';
import Hello from './Hello'
const { Header } = Layout;
const { Title, Text } = Typography;

const Head = () => {
  return (
    <Header className="site-layout-sub-header-background" style={{ paddingLeft: 24 }}>
      <Row align="middle">
        <Col xs={24} sm={24} md={19} lg={19} xl={19}>
          <Row align="middle">
            <Col xs={24}>
              <Row align="middle" gutter={[16, 0]}>
                <Col xs={4} sm={4} md={3} lg={2}>
                  <Avatar size={50} src={require('../img/avatar.png')} />
                </Col>
                <Col xs={20} sm={20} md={21} lg={22}>
                  <Row>
                    <Title level={3} style={{margin: 0, lineHeight: 1.3}}>Fábio Henriques</Title>
                  </Row>
                  <Row>
                    <Text type="secondary"  style={{margin: 0, lineHeight: 1.3}}>Software Developer / AWS Cloud Practitioner</Text>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col xs={0} sm={0} md={5} lg={5} xl={5}>
          <Row justify="end">
            <Hello />
          </Row>
        </Col>
      </Row>
    </Header>
  )
}

export default Head