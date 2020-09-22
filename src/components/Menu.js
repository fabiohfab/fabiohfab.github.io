import React, {useEffect, useState} from 'react'
import { Menu as M } from 'antd';
import { SnippetsOutlined, UserOutlined, BankOutlined, RadarChartOutlined } from '@ant-design/icons';
import {
  Link,
  useParams
} from "react-router-dom";

const Menu = () => {
  let { company } = useParams();
  const [link, setLink] = useState('')
  const [linkEducation, setLinkEducation] = useState('')
  const [linkExperience, setLinkExperience] = useState('')
  const [linkSkills, setLinkSkills] = useState('')
  const [defaultSelect, setDefault] = useState(null)

  useEffect(() => {
    setLink(company !== undefined ? "/" + company + "/"  : "/")
    setLinkEducation(company !== undefined ?  "/" + company + "/education"  : "/education")
    setLinkExperience(company !== undefined ?  "/" + company + "/experience"  : "/experience")
    setLinkSkills(company !== undefined ?  "/" + company + "/skills"  : "/skills")

    if(window.location.href.split("/").pop().includes('education')) {
      setDefault(['2'])
    } else if(window.location.href.split("/").pop().includes('experience')) {
      setDefault(['3'])
    } else if(window.location.href.split("/").pop().includes('skills')) {
      setDefault(['4'])
    } else {
      setDefault(['1'])
    }
  }, [company])

  return (
    <>
      {defaultSelect && <M theme="dark" mode="inline" defaultSelectedKeys={defaultSelect}>
        <M.Item key="1" icon={<UserOutlined />}>
          <Link to={link}>
              About me
          </Link>
        </M.Item>
        <M.Item key="2" icon={<BankOutlined />}>
          <Link to={linkEducation}>
            Education
          </Link>
        </M.Item>
        <M.Item key="3" icon={<SnippetsOutlined />}>
          <Link to={linkExperience}>
            Experience
          </Link>
        </M.Item>
        <M.Item key="4" icon={<RadarChartOutlined />}>
          <Link to={linkSkills}>
            Skills & Interests
          </Link>
        </M.Item>
      </M>}
    </>
  )
}

export default Menu