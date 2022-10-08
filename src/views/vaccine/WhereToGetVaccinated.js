import React from 'react';
import { Row, Col, Typography } from 'antd';
import './WhereToGetVaccinated.css'

const { Title, Text } = Typography;

const WhereToGetVaccinated = () => {
    return (
        <div style={{ padding: "6%", height: '30rem', width: '100%', position: 'relative', backgroundColor: '#FAFAFA' }}>
            <Row>

                <div style={{ position: 'absolute', width: '30rem', height: 'auto' }}>
                    <Title level={2} style={{ paddingTop: '2rem' }}>Where to Get Vaccinated?</Title>
                    <Title level={5} style={{ color: 'cadetblue', paddingTop: '5%' }} >Book an Appointment at</Title>
                    <div className='grid-container'>
                        <div className='grid-item'>
                            <Title level={2} style={{ color: 'cadetblue' }}>01</Title>
                            <Title level={5} style={{ marginTop: '15%' }}>Local City Council</Title>
                            <Text style={{ marginTop: '5%' }}>Head to your local city council vaccination program</Text>
                        </div>
                        <div className='grid-item'>
                            <Title level={2} style={{ color: 'cadetblue' }}>02</Title>
                            <Title level={5}>GP</Title>
                            <Text>Find a GP close to you</Text>
                        </div>
                    </div>
                </div>


                <Col span={12}>
                    <div style={{ position: 'absolute', objectFit: 'cover', backgroundSize: 'cover', left: '90%' }}>
                        <img src="https://s1.imagehub.cc/images/2022/10/08/2947.jpg" alt="2947.jpg" style={{ height: '17rem', width: 'auto' }} />
                    </div>
                </Col>

            </Row>
        </div>
    );
};

export default WhereToGetVaccinated;