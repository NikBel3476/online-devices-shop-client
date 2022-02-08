import React from 'react';
import {Card, Col, Image} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {DEVICE_ROUTE} from "../utils/consts";
import starSvg from '../assets/Star.svg';

const DeviceItem = ({ device }) => {
    const navigate = useNavigate();

    return (
        <Col md={3} className="mt-3" onClick={() => navigate(`${DEVICE_ROUTE}/${device.id}`)}>
            <Card style={{width: 150, cursor: 'pointer'}}>
                <Image width={150} height={150} src={device.img}/>
                <div className="text-black-50 mt-1 d-flex justify-content-between align-items-center">
                    <div>
                        Device brand
                    </div>
                    <div className="d-flex align-items-center">
                        <div>{device.rating}</div>
                        <Image width={18} height={18} src={starSvg} />
                    </div>
                </div>
                <div>
                    {device.name}
                </div>
            </Card>
        </Col>
    );
};

export default DeviceItem;