import React from 'react';
import { Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import eventData from '../utils/eventData';

const EventTable = () => (
  <div className="next-steps my-5 event" data->
    <h2 className="my-5 text-center" data->
      Events
    </h2>
    <Row className="d-flex justify-content-between" data->
      {eventData.map((col, i) => (
        <Col key={i} md={20} className="mb-4">
          <h6 className="mb-3">
            <a href={col.link}>
              <FontAwesomeIcon icon="link" className="mr-2" />
              {col.title}
            </a>
          </h6>
          <p>{col.description}</p>
        </Col>
      ))}
    </Row>
  </div>
);

export default EventTable;
