import React from 'react';
import { Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/router';
import eventData from '../utils/eventData';
import Link from 'next/link';

const EventTable = () => {
  return (
  <div className="next-steps " data->
    <h2 className=" text-center" data->
      Events
    </h2>
    <Row className="r-flex " data->
      {eventData.map((col, i) => (
        <Col key={i} md={5} className="m-4 event">
          <Link href={{ pathname: '/eventpage', query: { pid: i } }}>
          <h6 className="p-2">
            <a href={col.link}>
              {/* <FontAwesomeIcon icon="link" className="mr-2" /> */}
              {col.title}
            </a>
          </h6>
          <p>{col.description}</p>
          </Link>
        </Col>
      ))}
    </Row>
  </div>
);
      }

export default EventTable;
