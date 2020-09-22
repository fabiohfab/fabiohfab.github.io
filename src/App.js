import React, { useEffect, useState } from 'react'
import { Layout, Menu, Avatar, Typography, Timeline, Card } from 'antd';
import { SnippetsOutlined, UserOutlined, BankOutlined, RadarChartOutlined, ClockCircleOutlined, BoxPlotOutlined, BarChartOutlined, LineChartOutlined, LaptopOutlined, DatabaseOutlined, Html5Outlined, ProfileOutlined, CoffeeOutlined, DeploymentUnitOutlined, DashboardOutlined } from '@ant-design/icons';
import Icon from '@material-ui/core/Icon';
import { makeStyles } from '@material-ui/core/styles';
const { Header, Content, Sider } = Layout;
const { Title, Text, Paragraph } = Typography;


const App = (props) => {

  const [content, setContent] = useState("1")
  const [course, setCourse] = useState(1)
  const [company, setCompany] = useState(null)

  const gridStyle = {
    display: 'flex',
    height: '150px',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 20
  };


  useEffect(() => {
    let keyValues = window.location.search.slice(1,).split("&")
    keyValues.forEach(keyValue => {
      let [key, value] = keyValue.split("=")
      if(key === 'company') {
        setCompany(value)
      }
    });
  })

  


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
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<UserOutlined />} onClick={(event) => {
            setContent(event.key)
          }}>
            About me
          </Menu.Item>
          <Menu.Item key="2" icon={<BankOutlined />} onClick={(event) => {
            setContent(event.key)
          }}>
            Education
          </Menu.Item>
          <Menu.Item key="3" icon={<SnippetsOutlined />} onClick={(event) => {
            setContent(event.key)
          }}>
            Experience
          </Menu.Item>
          <Menu.Item key="4" icon={<RadarChartOutlined />} onClick={(event) => {
            setContent(event.key)
          }}>
            Skills & Interests
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header className="site-layout-sub-header-background" style={{ paddingLeft: 24, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{alignItems: 'center', display: 'flex'}}>
            <Avatar size={50} src={require('./img/avatar.png')} />
            <div style={{paddingLeft: 10, flexDirection: 'column', lineHeight: 1}}>
              <Title level={3} style={{margin: 0}}>Fábio Henriques</Title>
              <Text type="secondary">Software Developer / AWS Cloud Practitioner</Text>
            </div>
          </div>
          <div>
            <Title level={3} style={{margin: 0}}>Hello, {company ? company.replace("_", " ") : 'World'}</Title>
          </div>
        </Header>
        <Content style={{ margin: '24px 16px 0' }}>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            {content === "1" ? <div style={{fontSize: 18, display: 'flex'}}>
              <div style={{width: '25%', marginRight: 20, flexDirection: 'column', display: 'flex', alignItems: 'center', fontSize: 14}}>
                <Avatar size={124} src={require('./img/avatar.png')} />
                <Text type="secondary" style={{marginTop: 10}}>September 12, 1997</Text>
                <div style={{display: 'flex', flexDirection: 'column', marginTop: 20}}>
                  <Title level={4}>Contacts</Title>
                  <Text type="secondary" style={{marginTop: 10}}>fabiomchenriques@ua.pt</Text>
                  <Text type="secondary" style={{marginTop: 10}}>913965017</Text>
                </div>
              </div>
              <div style={{flexDirection: 'row'}}>
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
              </div>
            </div> : content === "2" ? <div>
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
                <Card title="Relevant courses in Mathematics degree">
                  <Card.Grid style={gridStyle}><BoxPlotOutlined style={{fontSize: 25, marginRight: 10}} />Statistics</Card.Grid>
                  <Card.Grid style={gridStyle}><BarChartOutlined style={{fontSize: 25, marginRight: 10}} />Statistical Data Analysis</Card.Grid>
                  <Card.Grid style={gridStyle}><LineChartOutlined style={{fontSize: 25, marginRight: 10}} /> Statistical Models</Card.Grid>
                  <Card.Grid style={gridStyle}><CoffeeOutlined style={{fontSize: 25, marginRight: 10}} />Programming I and II</Card.Grid>
                  <Card.Grid style={gridStyle}><CoffeeOutlined style={{fontSize: 25, marginRight: 10}} />Object-oriented programming</Card.Grid>
                  <Card.Grid style={gridStyle}><ProfileOutlined style={{fontSize: 25, marginRight: 10}} />Systems modeling and analysis</Card.Grid>
                  <Card.Grid style={gridStyle}><Html5Outlined style={{fontSize: 25, marginRight: 10}} />Introduction to web technologies</Card.Grid>
                  <Card.Grid style={gridStyle}><DatabaseOutlined style={{fontSize: 25, marginRight: 10}} />Databases</Card.Grid>
                  <Card.Grid style={gridStyle}><LaptopOutlined style={{fontSize: 25, marginRight: 10}} />Multimedia Systems</Card.Grid>
                </Card> : course === 1 ? 
                <Card title="Relevant courses in master in Mathematics and Applications">
                  <Card.Grid style={gridStyle}><LaptopOutlined style={{fontSize: 25, marginRight: 10}} />Computation Theory</Card.Grid>
                  <Card.Grid style={gridStyle}><DeploymentUnitOutlined style={{fontSize: 25, marginRight: 10}} />Computational Logic</Card.Grid>
                  <Card.Grid style={gridStyle}><DatabaseOutlined style={{fontSize: 25, marginRight: 10}} />Mathematical Tools for Big Data</Card.Grid>
                  <Card.Grid style={gridStyle}><BarChartOutlined style={{fontSize: 25, marginRight: 10}} />Data Mining</Card.Grid>
                  <Card.Grid style={gridStyle}><LineChartOutlined style={{fontSize: 25, marginRight: 10}} />Machine Learning</Card.Grid>
                  <Card.Grid style={gridStyle}><CoffeeOutlined style={{fontSize: 25, marginRight: 10}} />Object-oriented Concurrent Programming</Card.Grid>
                  <Card.Grid style={gridStyle}><DashboardOutlined style={{fontSize: 25, marginRight: 10}} />Simulation and Optimization</Card.Grid>
                </Card> : <></>
              }
            </div> : content === "3" ? <>
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
                      <Text> Professional internship, Match Profiler</Text>
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
            </> :
            <>
              <Card>
                
                <Card.Grid style={gridStyle}>
                  <Icon className="fab fa-aws" style={{ fontSize: 75, width: 'auto' }}/>
                  <Text>API Gateway EC2 S3 Lambda Cognito</Text>
                </Card.Grid>
                <Card.Grid style={gridStyle}>
                  <Icon className="fab fa-php" style={{ fontSize: 75, width: 'auto' }}/>
                  <Text>php</Text>
                </Card.Grid>
                <Card.Grid style={gridStyle}>
                  <Icon className="fab fa-python" style={{ fontSize: 75, width: 'auto' }}/>
                  <Text>Python Django pandas scikit-learn</Text>
                </Card.Grid>
                <Card.Grid style={gridStyle}>
                  <Icon className="fab fa-html5" style={{ fontSize: 75, width: 'auto' }}/>
                  <Text>HTML</Text>
                </Card.Grid>
                <Card.Grid style={gridStyle}>
                  <Icon className="fab fa-css3" style={{ fontSize: 75, width: 'auto' }}/>
                  <Text>CSS</Text>
                </Card.Grid>
                <Card.Grid style={gridStyle}>
                  <Icon className="fab fa-js-square" style={{ fontSize: 75, width: 'auto' }}/>
                  <Text>JavaScript</Text>
                </Card.Grid>
                <Card.Grid style={gridStyle}>
                  <Icon className="fab fa-node" style={{ fontSize: 75, width: 'auto' }}/>
                  <Text>node.js</Text>
                </Card.Grid>
                <Card.Grid style={gridStyle}>
                  <Icon className="fab fa-react" style={{ fontSize: 75, width: 'auto' }}/>
                  <Text>React JS React Native</Text>
                </Card.Grid>
                <Card.Grid style={gridStyle}>
                  <Icon className="fas fa-database" style={{ fontSize: 75, width: 'auto' }}/>
                  <Text>MySQL SQL Server MongoDB</Text>
                </Card.Grid>
                <Card.Grid style={gridStyle}>
                  <Icon className="fab fa-java" style={{ fontSize: 75, width: 'auto' }}/>
                  <Text>Java</Text>
                </Card.Grid>
                <Card.Grid style={gridStyle}>
                  <Avatar shape='square' src='https://socket.io/css/images/logo.svg' style={{height: '60px', width: '200px',  color: '#1890ff'}}/>
                  <Text>socket.io</Text>
                </Card.Grid>
                <Card.Grid style={gridStyle}>
                  <Icon className="fab fa-bootstrap" style={{ fontSize: 75, width: 'auto' }}/>
                  <Text>Bootstrap</Text>
                </Card.Grid>
              </Card>
              <Title level={2} style={{marginTop: 30}}>Some projects where i used these technologies</Title>
              <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
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
              </div>
            </>}
          </div> 
        </Content>
      </Layout>
    </Layout>
  );
}

export default App