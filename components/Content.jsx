import React from 'react';
import { Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import contentData from '../utils/contentData';

const Content = () => (
  <div className="next-steps " data->
    <h2 className=" text-center" data->
      FAQ
    </h2>
    <Row className="d-flex justify-content-between" data->
      {contentData.map((col, i) => (
        <Col key={i} md={5} className="mb-4">
          <h6 className="no-text-decor mb-3">
            <a href={col.link}>
            {/* <a> */}
              {/* <FontAwesomeIcon icon="link" className="mr-2" /> */}
              {col.title}
            </a>
          </h6>
          <p>{col.description}</p>
        </Col>
      ))}
    </Row>
  </div>
);

export default Content;
