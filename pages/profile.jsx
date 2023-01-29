import React from 'react';
import { Row, Col } from 'reactstrap';
import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0/client';

import Loading from '../components/Loading';
import ErrorMessage from '../components/ErrorMessage';
import Highlight from '../components/Highlight';

function Profile() {
  const { user, isLoading } = useUser();

  return (
    <>
      {isLoading && <Loading />}
      {user && (
        <>
          <Row className="align-items-center profile-header mb-5 text-center text-md-left" data->
            <Col md={2}>
              <img
                src={user.picture}
                alt="Profile"
                className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
                decode="async"
                data-
              />
            </Col>
            <Col md>
              <h2 data->{user.nickname}</h2>
              <p className="lead text-muted" data->
                {user.email}
              </p>
            </Col>
          </Row>
          <Row data->
            <Highlight>{JSON.stringify(user, null, 2)}</Highlight>
          </Row>
        </>
      )}
    </>
  );
}

export default withPageAuthRequired(Profile, {
  onRedirecting: () => <Loading />,
  onError: error => <ErrorMessage>{error.message}</ErrorMessage>
});
