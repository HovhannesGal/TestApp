import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../context";
import {Row} from "react-bootstrap";


const DeviceList = () => {
    const {device} = useContext(Context)

    return (
        <Row className="d-flex">
           
        </Row>
    );
};

export default observer(DeviceList);