import React, {useEffect, useState} from 'react';
import { Avatar, Layout, Menu, Col, Row, Affix } from 'antd';
import style from "./GlobalHeader.module.css"
import { withRouter } from "react-router-dom";

const { Header } = Layout;

// Data structure of the Top navigation bar
const items = [
    {
        key: "/iteration1/home",
        label: "Home"
    },
    {
        key: "/iteration1/backgroundInfo",
        label: "Background Info"
    },
    {
        key: "/iteration1/diseases",
        label: "Diseases",
    },
    {
        key: "/iteration1/BirthToAges4",
        label: "Vaccines"
        // children: [{
        //     key: "/BirthToAges6",
        //     label: "Birth to Ages 6"
        // }}]
    }]

const GlobalHeader = (props) => {

    const onClick = (e) => {
        //console.log(props);
        props.history.push(e.key)
    };

    const [selectedKey,setSelectedKey] = useState([props.location.pathname]);

    useEffect(()=>{
        setSelectedKey(props.location.pathname);
        console.log(selectedKey);
    },[]);


    return (
        <Affix offsetTop={0}>
            <Header
                style={{
                    // position: 'fixed',
                    zIndex: 1,
                    width: '100%',
                }}>
                <Row>
                    <Col span={1}><Avatar size={40} src="https://s3.bmp.ovh/imgs/2022/09/01/c53ecacabc1dfcaf.png" /></Col>
                    <Col span={3}><h2 className={style.logo}>Pediroo</h2></Col>
                    <Col span={16}>
                        <Menu
                            theme="dark"
                            mode="horizontal"
                            onClick={onClick}
                            items={items}
                            defaultSelectedKeys={selectedKey}
                        />
                    </Col>
                    <Col span={4}><span className={style.username} style={{ float: "right" }}>Welcome,User</span></Col>
                </Row>
            </Header>
        </Affix>
    );
};

export default withRouter(GlobalHeader);