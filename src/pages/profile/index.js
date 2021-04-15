//imports
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';

import {
  Card,
  CardBody,
  Col,
  Row,
  Button,
  CardTitle,
  ListGroup,
  ListGroupItem,
  Spinner,
  Alert
} from 'reactstrap';

//import actions
import { getUserGitRepData } from '../../store/actions';

//import icon
import WatcherIcon from '../../assets/watcher';

//import styles
import './style.scss';

const Profile = () => {
  const { username } = useParams();
  let history = useHistory();

  const dispatch = useDispatch();
  const { error, data, loading } = useSelector(({ Git }) => Git);

  useEffect(() => {
    dispatch(getUserGitRepData(username));
  }, [username]);

  return (
    <React.Fragment>
      <Row className='container'>
        <Col>
          {
            //if data is loading
            loading ? (
              <Row className='m-10'>
                <Spinner type='grow' color='primary' />
                <Spinner type='grow' color='success' />
                <Spinner type='grow' color='danger' />
                <Spinner type='grow' color='warning' />
                <Spinner type='grow' color='info' />
              </Row>
            ) : (
              <Card>
                <CardBody>
                  <CardTitle tag='h5'> {username} repository data </CardTitle>
                  <ListGroup>
                    {data?.map(item => (
                      <ListGroupItem key={item.id}>
                        <Row>
                          <Col md={6} xs={12}>
                            {item.full_name}
                          </Col>
                          <Col md={6} xs={12}>
                            {item.name}
                          </Col>
                        </Row>
                        <Row>
                          <Col md={6} xs={12}>
                            <Row>
                              <Col xs={1}>
                                <WatcherIcon />
                              </Col>
                              <Col>{item.watchers}</Col>
                            </Row>
                          </Col>
                          <Col md={6} xs={12}>
                            {item.language}
                          </Col>
                        </Row>
                      </ListGroupItem>
                    ))}
                  </ListGroup>
                  <Row className='d-flex flex-row-reverse mt-10'>
                    <Button
                      color='success'
                      onClick={() => history.push('/home')}
                    >
                      Change user
                    </Button>
                  </Row>
                </CardBody>
              </Card>
            )
          }
          {error && (
            <Row className='m-10 mt-10'>
              <Col xs={12}>
                <Alert color='danger'>User not found!</Alert>
              </Col>
              <Col>
                <Button color='danger' onClick={() => history.push('/home')}>
                  Change another user
                </Button>
              </Col>
            </Row>
          )}
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default Profile;
