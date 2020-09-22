import React from 'react'
import {Typography } from 'antd';
import {
  useParams
} from "react-router-dom";
const { Title } = Typography;

const Hello = () => {
  let { company } = useParams();

  return <Title level={3} style={{margin: 0}}>Hello, {company ? company.replace("_", " ") : 'World'}</Title>
  
}

export default Hello