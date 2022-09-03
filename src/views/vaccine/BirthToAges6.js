import React, { useEffect, useState } from 'react';
import { Layout, Timeline, Card, Col, Row, Divider, Typography, Checkbox } from 'antd';
import LocationIdentifier from "../../components/basicPageFrame/LocationIdentifier";
import './BirthToAges6.css'
import { list } from 'postcss';
import axios from "axios";

const { Content } = Layout;
const { Title, Paragraph } = Typography;

const title = "Children Immunization"
const subtitle = "Vaccines schedules for children from birth to ages 6"

const BirthToAges6 = () => {
    const [vaccines, getVaccines] = useState([]);

    useEffect(() => {
        getAllVaccines();
    }, []);

    const getAllVaccines = () => {
        axios.get('https://edg53vnmmh.execute-api.us-east-1.amazonaws.com/dev/vaccines'
        )
            .then((response) => {
                const allVaccines = response.data.Items;
                getVaccines(allVaccines);
                console.log(response.data);
            })
            .catch(error => console.error('Error:$(error)'));
    }

    return (
        <div>
            <Content
                style={{
                    padding: '0 50px',
                }}
            >
                <LocationIdentifier title={title} subtitle={subtitle} />
                <div className="site-layout-content">
                    <Row style={{ paddingTop: "30px" }}>
                        <Col span={3}></Col>
                        <Col span={18}>
                            <Paragraph>
                                <Title>Vaccine Schedules Birth to Ages 6</Title>
                                <Divider />
                                <blockquote style={{ fontSize: "16px" }}>Free vaccinations and recommended vaccine schedules are available to protect children against various diseases.</blockquote>
                                <Divider />
                            </Paragraph>
                        </Col>
                    </Row>

                    <div className='vaccineContent' style={{ display: 'flex', justifyContent: 'space-between', paddingTop: "0.5rem" }}>
                        <div className='vaccinations' style={{ justifyContent: 'center' }}>
                            <div className='vaccinesData'>
                                {vaccines.map((vaccine, index) => {
                                    const onChange = (e) => {
                                        console.log(`checked = ${e.target.checked}`);
                                    };

                                    return (
                                        <div className='vaccineData' key={index} style={{ paddingTop: "30px" }}>
                                            {/* <h2>{vaccine.childrenAge}</h2> */}

                                            {/* <Card
                                                title={vaccine.name}
                                                // extra={<a href="#">More</a>}
                                                style={{
                                                    width: 300,
                                                }}>
                                                <p>{vaccine.content}</p>
                                                <Checkbox onChange={onChange}>Inoculated</Checkbox>
                                            </Card> */}

                                            {
                                                vaccines.map(item => item.childrenAge === '2 months' ? //<--HERE
                                                    <div>
                                                        <h2 >{item.name}</h2>
                                                        <h2>{item.content}</h2>

                                                    </div>
                                                    : null)
                                            }

                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="timelines" style={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <Timeline>
                                <Timeline.Item>Birth</Timeline.Item>
                                <Timeline.Item>2 months</Timeline.Item>
                                <Timeline.Item>4 months</Timeline.Item>
                                <Timeline.Item>6 months</Timeline.Item>
                                <Timeline.Item>12 months</Timeline.Item>
                                <Timeline.Item>18 months</Timeline.Item>
                                <Timeline.Item>19-23 months</Timeline.Item>
                                <Timeline.Item>2-3 years</Timeline.Item>
                                <Timeline.Item>4-6 years</Timeline.Item>
                            </Timeline>
                        </div>
                    </div>
                </div>
            </Content >
        </div>

    );
};

export default BirthToAges6;