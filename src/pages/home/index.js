//imports
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Card,
  CardBody,
  Col,
  Row,
  Button,
  CardTitle,
  CardText,
  CardSubtitle,
  Input
} from 'reactstrap';

//import styles
import './style.scss';

const Home = () => {
  let history = useHistory();

  const [username, setUsername] = useState(null);

  const handleText = ({ target }) => {
    setUsername(target.value);
  };
  const handleSubmit = () => {
    history.push(`/profile/${username}`);
  };
  return (
    <React.Fragment>
      <Row className='container'>
        <Col>
          <Card>
            <CardBody>
              <CardTitle tag='h5'>Git profile info</CardTitle>
              <CardSubtitle tag='h6' className='mb-2 text-muted'>
                Git username
              </CardSubtitle>
              <CardText>Please enter your git username</CardText>

              <Row>
                <Col span={7}>
                  <Input
                    type='text'
                    name='username'
                    id='username'
                    placeholder='username'
                    onChange={handleText}
                  />
                </Col>
                <Col span={4}>
                  <Button
                    color='info'
                    disabled={!(username && username.length > 0)}
                    onClick={handleSubmit}
                  >
                    Get data
                  </Button>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default Home;
