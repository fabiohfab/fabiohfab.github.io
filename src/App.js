import React, { useState } from 'react'
import {  Avatar, Typography, Timeline, Card, Row, Col } from 'antd';
import { ClockCircleOutlined, BoxPlotOutlined, BarChartOutlined, LineChartOutlined, LaptopOutlined, DatabaseOutlined, Html5Outlined, ProfileOutlined, CoffeeOutlined, DeploymentUnitOutlined, DashboardOutlined } from '@ant-design/icons';
import Icon from '@material-ui/core/Icon';
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Wrapper from './components/Wrapper'
const { Title, Text, Paragraph } = Typography;

const App = (props) => {

  const [course, setCourse] = useState(1)

  const gridStyle = {
    display: 'flex',
    height: '150px',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 20,
    border: 1
  };

  return (
    <Router>
      <Switch>
        <Route path="/(company)?/:company?/education">
          <Wrapper>
            <div style={{width: '50%'}}>
              <Timeline mode="left">
                <Timeline.Item style={{cursor: 'pointer'}} key="1" dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />} color="blue" onClick={() => {
                  setCourse(1)
                }}>
                  <Text strong>since 2018</Text>
                  <div style={{display: 'flex', flexDirection: 'column'}}>
                    <Text> Master in Mathematics and Applications (Computer and Informatics branch)</Text>
                    <Text type="secondary">University of Aveiro, Department of Mathematics, Aveiro</Text>
                  </div>
                </Timeline.Item>
                <Timeline.Item style={{cursor: 'pointer'}} key="2" onClick={() => {
                    setCourse(2)
                }}>
                  <Text strong>2015-2018</Text>
                  <div style={{display: 'flex', flexDirection: 'column'}}>
                    <Text> Mathematics Degree (minor in Computer and Informatics)</Text>
                    <Text type="secondary">University of Aveiro, Department of Mathematics, Aveiro</Text>
                  </div>
                </Timeline.Item>
              </Timeline>
            </div>
            {
              course === 2 ?
              <Row>
                <Col xs={24}>
                  <Title level={4} style={{lineHeight: 1.3}}>Relevant courses in Mathematics degree</Title>
                </Col>
                <Col xs={24} sm={12} md={8} style={gridStyle}>
                  <BoxPlotOutlined style={{fontSize: 25, marginRight: 10}} />Statistics
                </Col>
                <Col xs={24} sm={12} md={8} style={gridStyle}>
                  <BarChartOutlined style={{fontSize: 25, marginRight: 10}} />Statistical Data Analysis
                </Col>
                <Col xs={24} sm={12} md={8} style={gridStyle}>
                  <LineChartOutlined style={{fontSize: 25, marginRight: 10}} /> Statistical Models
                </Col>
                <Col xs={24} sm={12} md={8} style={gridStyle}>
                  <CoffeeOutlined style={{fontSize: 25, marginRight: 10}} />Programming I and II
                </Col>
                <Col xs={24} sm={12} md={8} style={gridStyle}>
                  <CoffeeOutlined style={{fontSize: 25, marginRight: 10}} />Object-oriented programming
                </Col>
                <Col xs={24} sm={12} md={8} style={gridStyle}>
                  <ProfileOutlined style={{fontSize: 25, marginRight: 10}} />Systems modeling and analysis
                </Col>
                <Col xs={24} sm={12} md={8} style={gridStyle}>
                  <Html5Outlined style={{fontSize: 25, marginRight: 10}} />Introduction to web technologies
                </Col>
                <Col xs={24} sm={12} md={8} style={gridStyle}>
                  <DatabaseOutlined style={{fontSize: 25, marginRight: 10}} />Databases
                </Col>
                <Col xs={24} sm={12} md={8} style={gridStyle}>
                  <LaptopOutlined style={{fontSize: 25, marginRight: 10}} />Multimedia Systems
                </Col>
              </Row> : course === 1 ? 
              <Row>
                <Col xs={24}>
                  <Title level={4} style={{lineHeight: 1.3}}>Relevant courses in master in Mathematics and Applications</Title>
                </Col>
                <Col xs={24} sm={12} md={8} style={gridStyle}>
                  <LaptopOutlined style={{fontSize: 25, marginRight: 10}} />Computation Theory
                </Col>
                <Col xs={24} sm={12} md={8} style={gridStyle}>
                  <DeploymentUnitOutlined style={{fontSize: 25, marginRight: 10}} />Computational Logic
                </Col>
                <Col xs={24} sm={12} md={8} style={gridStyle}>
                  <DatabaseOutlined style={{fontSize: 25, marginRight: 10}} />Mathematical Tools for Big Data
                </Col>
                <Col xs={24} sm={12} md={8} style={gridStyle}>
                  <BarChartOutlined style={{fontSize: 25, marginRight: 10}} />Data Mining
                </Col>
                <Col xs={24} sm={12} md={8} style={gridStyle}>
                  <LineChartOutlined style={{fontSize: 25, marginRight: 10}} />Machine Learning
                </Col>
                <Col xs={24} sm={12} md={8} style={gridStyle}>
                  <CoffeeOutlined style={{fontSize: 25, marginRight: 10}} />Object-oriented Concurrent Programming
                </Col>
                <Col xs={24} sm={12} md={8} style={gridStyle}>
                  <DashboardOutlined style={{fontSize: 25, marginRight: 10}} />Simulation and Optimization
                </Col>
              </Row> : <></>
            }
          </Wrapper>
        </Route>
        <Route path="/(company)?/:company?/experience">
          <Wrapper>
            <div style={{width: '50%'}}>
              <Timeline mode="left">
              <Timeline.Item>
                <Text strong>since 2020</Text>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                  <Text> R&D Software Developer, Human Profiler</Text>
                  <Text type="secondary">
                    Development of a Django RESTful API (Django REST framework) and mobile
                    application in React Native; Responsible for developing a machine learning
                    model using python, scikit-learn, pandas, matplotlib; Responsible for integration and migration of services
                    in the AWS cloud;
                  </Text>
                </div>
              </Timeline.Item>
              <Timeline.Item>
                <Text strong>2019-2020</Text>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                  <Text> Professional internship, Match Profiler</Text>
                  <Text type="secondary">
                    Development of a Django RESTful API (Django REST framework) and mobile
                    application in React Native; Responsible for developing a machine learning
                    model using python, scikit-learn, pandas, matplotlib; Integration of services
                    in the AWS cloud
                  </Text>
                </div>
              </Timeline.Item>
              <Timeline.Item>
                <Text strong>2017-2019</Text>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                  <Text> Research Fellow, CIDMA, UA</Text>
                  <Text type="secondary">
                    Web Application Development SIACUA in C# and .NET
                    Development of a web application in Django for parameterization of mathematical
                    exercises
                  </Text>
                </div>
              </Timeline.Item>
              <Timeline.Item>
                <Text strong>2018</Text>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                  <Text> pmate, University of Aveiro</Text>
                  <Text type="secondary">
                    Participation as a volunteer in the area of technical support in national science
                    competitions, organized by pmate
                  </Text>
                </div>
              </Timeline.Item>
              <Timeline.Item>
                <Text strong>2017-2018</Text>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                  <Text> ENEMath 2018 organizer</Text>
                  <Text type="secondary">
                    Organizer of the annual event of national meeting of math students in the
                    area of communication and image, being responsible for the construction of
                    the website and the registration system.
                  </Text>
                </div>
              </Timeline.Item>
              <Timeline.Item>
                <Text strong>2017</Text>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                  <Text> Summer Academy, University of Aveiro</Text>
                  <Text type="secondary">Scientific Monitor at Summer Academy 2017</Text>
                </div>
              </Timeline.Item>
              <Timeline.Item>
                <Text strong>2017</Text>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                  <Text> European Study Group with Industry | Staff and participant</Text>
                  <Text type="secondary">Participation in the study group to predict asset acquisition: PRIO Energy.</Text>
                </div>
              </Timeline.Item>
              <Timeline.Item>
                <Text strong>2016-2017</Text>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                  <Text> Research fellow</Text>
                  <Text type="secondary">
                    LEMA project - Development of digital games dedicated to children with
                    autism, in JavaScript
                  </Text>
                </div>
              </Timeline.Item>
              <Timeline.Item>
                <Text strong>2015-2017</Text>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                  <Text> Collaborator at Mathematics Student Center, UA</Text>
                  <Text type="secondary">
                    Collaboration in NEMAt, being responsible for the website development, stock
                    management backoffice and development of the math notes platform for
                    shared use by all students.
                  </Text>
                </div>
              </Timeline.Item>
            </Timeline>
            </div>
          </Wrapper>
        </Route>
        <Route path="/(company)?/:company?/skills">
          <Wrapper>
            <Row>
              <Col style={gridStyle} xs={24} sm={12} md={8}>
                <Icon className="fab fa-aws" style={{ fontSize: 75, width: 'auto' }}/>
                <Text>API Gateway EC2 S3 Lambda Cognito</Text>
              </Col>
              <Col style={gridStyle} xs={24} sm={12} md={8}>
                <Icon className="fab fa-php" style={{ fontSize: 75, width: 'auto' }}/>
                <Text>php</Text>
              </Col>
              <Col style={gridStyle} xs={24} sm={12} md={8}>
                <Icon className="fab fa-python" style={{ fontSize: 75, width: 'auto' }}/>
                <Text>Python Django pandas scikit-learn</Text>
              </Col>
              <Col style={gridStyle} xs={24} sm={12} md={8}>
                <Icon className="fab fa-html5" style={{ fontSize: 75, width: 'auto' }}/>
                <Text>HTML</Text>
              </Col>
              <Col style={gridStyle} xs={24} sm={12} md={8}>
                <Icon className="fab fa-css3" style={{ fontSize: 75, width: 'auto' }}/>
                <Text>CSS</Text>
              </Col>
              <Col style={gridStyle} xs={24} sm={12} md={8}>
                <Icon className="fab fa-js-square" style={{ fontSize: 75, width: 'auto' }}/>
                <Text>JavaScript</Text>
              </Col>
              <Col style={gridStyle} xs={24} sm={12} md={8}>
                <Icon className="fab fa-node" style={{ fontSize: 75, width: 'auto' }}/>
                <Text>node.js</Text>
              </Col>
              <Col style={gridStyle} xs={24} sm={12} md={8}>
                <Icon className="fab fa-react" style={{ fontSize: 75, width: 'auto' }}/>
                <Text>React JS React Native</Text>
              </Col>
              <Col style={gridStyle} xs={24} sm={12} md={8}>
                <Icon className="fas fa-database" style={{ fontSize: 75, width: 'auto' }}/>
                <Text>MySQL SQL Server MongoDB</Text>
              </Col>
              <Col style={gridStyle} xs={24} sm={12} md={8}>
                <Icon className="fab fa-java" style={{ fontSize: 75, width: 'auto' }}/>
                <Text>Java</Text>
              </Col>
              <Col style={gridStyle} xs={24} sm={12} md={8}>
                <Avatar shape='square' src='https://socket.io/css/images/logo.svg' style={{height: '60px', width: '200px',  color: '#1890ff'}}/>
                <Text>socket.io</Text>
              </Col>
              <Col style={gridStyle} xs={24} sm={12} md={8}>
                <Icon className="fab fa-bootstrap" style={{ fontSize: 75, width: 'auto' }}/>
                <Text>Bootstrap</Text>
              </Col>
            </Row>
            <Row>
              <Title level={2} style={{marginTop: 30}}>Some projects where i used these technologies</Title>
            </Row>
            <Row align='middle' justify='center'>
              <Col xs={24} sm={12} md={12} lg={8} justify='center' align='middle'>
                <Card                
                  hoverable
                  style={{ width: 240, margin: 30 }}
                  cover={<img alt="example" src="https://raw.githubusercontent.com/minecode/shopping_cart/master/assets/play_console_images/Google%20Pixel%203%205.5-inch%20Display%20(1080%20x%202160)%20Screenshot%201.png" />}
                >
                  <Card.Meta title="Shopping Cart" />
                  <Text type="secondary">A mobile app to help you track your spendings by category and over time</Text>
                  <div style={{marginTop:10}}>
                    <a href='https://play.google.com/store/apps/details?id=pt.fhenriques.shopping_cart'>Mobile</a>
                  </div>
                </Card>
              </Col>
              <Col xs={24} sm={12} md={12} lg={8} justify='center' align='middle'>
                <Card
                  hoverable
                  style={{ width: 240, margin: 30 }}
                  cover={<img alt="example" src="https://lh3.googleusercontent.com/zYhjTeXp8I4gJziUE0_7KpObpWsDa4WYDFygloHCnscVQx6ihYoCLeo2xokGB7-PbUEb=w1842-h1006" />}
                >
                  <Card.Meta title="Ocean king" />
                  <Text type="secondary">A web and mobile game inspired in skull king card game</Text>
                  <div style={{marginTop:10}}>
                    <a href='https://minecode.github.io/ocean_king/'>Web</a>
                  </div>
                  <div>
                    <a href='https://play.google.com/store/apps/details?id=pt.fhenriques.ocean_king&hl=pt_PT'>Mobile</a>
                  </div>
                </Card>
              </Col>
              <Col xs={24} sm={12} md={12} lg={8} justify='center' align='middle'>
                <Card
                hoverable
                style={{ width: 240, margin: 30 }}
                cover={<img alt="example" src="https://raw.githubusercontent.com/minecode/pet_find/master/assets/play_console_images/Google%20Pixel%203%205.5-inch%20Display%20(1080%20x%202160)%20Screenshot%201.png" />}
              >
                <Card.Meta title="Pet find"/>
                <Text type="secondary">A mobile app to help you or other persons to find her animals</Text>
                <div style={{marginTop:10}}>
                  <a href='https://play.google.com/store/apps/details?id=pt.fhenriques.petfind&hl=pt_PT'>Mobile</a>
                </div>
              </Card>
            </Col>
            </Row>
          </Wrapper>
        </Route>
        <Route path="/(company)?/:company?/">
          <Wrapper>
            <Row>
              <Col xs={24} sm={24} md={6} lg={5} xl={5} style={{ fontSize: 14}}>
                <Row gutter={[16, 16]} align='middle'>
                  <Col xs={12} sm={12} md={24} lg={24} xl={24}>
                    <Row>
                      <Avatar size={124} src={require('./img/avatar.png')} />
                    </Row>
                    <Row>
                      <Text type="secondary" style={{marginTop: 10}}>September 12, 1997</Text>
                    </Row>
                  </Col>
                  <Col xs={12} sm={12} md={24} lg={24} xl={24}>
                    <Row align='middle'>
                      <Title level={4} style={{lineHeight: 1.3}}>Contacts</Title>
                    </Row>
                    <Row>
                      <Text type="secondary" style={{marginTop: 10}}>fabiomchenriques@ua.pt</Text>
                    </Row>
                    <Row>
                      <Text type="secondary" style={{marginTop: 10}}>913965017</Text>
                    </Row>
                  </Col>
                </Row>
              </Col>
              <Col xs={24} sm={24} md={18} lg={19} xl={19}>
                <Row>
                  <Title>About me</Title>
                  <Paragraph>
                    I'm currently a software developer @ Match Profiler and am working with technologies such as reactor, django and AWS cloud where I recently obtained Cloud Practitioner certification. Working in the cloud is something that motivates me and it is my goal to learn and find out more about it.
                  </Paragraph>
                  <Paragraph>
                    In every project I have integrated I have developed my proactivity and versatility and these are the characteristics that I want to take to my next professional challenge.
                    I am determined, focused and like to codify, especially if it is a challenging project, where I can learn and discover new things.
                  </Paragraph>
                  <Paragraph>
                    I want to improve and at this moment I am open to work with an experienced and talented team to help me progress in my career, but at the same time share my experience in the job market to help the team achieve its goals.
                  </Paragraph>
                </Row>
              </Col>
            </Row>
          </Wrapper>
        </Route>
      </Switch>
    </Router>
  );
}

export default App