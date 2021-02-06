import React from 'react';
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  Button,
  Alert,
  FormGroup,
  Label,
  Input,
  CardImg,
} from 'reactstrap';
import Navbar from '../Navbar/navbar';
import './dashboard.css';
import profileImg from '../../Assets/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg';
import cardImg from '../../Assets/image-20160525-25226-1sk5ic6.jpg';
import fa from '../../Assets/f_logo_RGB-Hex-Blue_512.png';
import yt from '../../Assets/youtube-organization-area-symbol-wordcamp-israel.jpg';
import ins from '../../Assets/63cb74c62c563351d1fbac26edf3416c.jpg';

export default function Dashboard() {
  return (
    <div className="header mt-1" style={{ minHeight: '100vh' }}>
      <Navbar />
      <div className="container hero">
        <div className="row">
          <div className="col-sm col-md-3">
            <Card>
              <CardBody>
                <div>
                  <CardTitle>Pages and Channels</CardTitle>
                  <Alert color="secondary">
                    <h6>
                      Rachna Rana{' '}
                      <img
                        className="img-fluid profile-img"
                        src={yt}
                        alt="facebook-logo"
                        style={{ height: '20px' }}
                      />
                    </h6>
                  </Alert>
                  <Alert color="secondary">
                    <h6>
                      Rachna.ranade3
                      <img
                        className="img-fluid profile-img"
                        src={fa}
                        alt="facebook-logo"
                      />
                    </h6>
                  </Alert>
                  <Alert color="secondary">
                    <h6>
                      Rachna Ranade
                      <img
                        className="img-fluid profile-img"
                        src={ins}
                        alt="facebook-logo"
                      />
                    </h6>
                  </Alert>
                </div>
                <div>
                  <CardTitle>Status</CardTitle>

                  <FormGroup check>
                    <Label check>
                      <Input type="radio" name="radio1" /> Requirement Manual
                      Action
                    </Label>
                  </FormGroup>
                  <FormGroup check>
                    <Label check>
                      <Input type="radio" name="radio1" />
                      Marked as safe by:
                    </Label>
                    <ul>
                      <li>
                        <Label check>
                          <Input type="radio" name="radio1" />
                          Manual Action
                        </Label>
                      </li>
                      <li>
                        <Label check>
                          <Input type="radio" name="radio1" />
                          AI
                        </Label>
                      </li>
                    </ul>
                  </FormGroup>
                  <FormGroup check>
                    <Label check>
                      <Input type="radio" name="radio1" />
                      Hidden By
                    </Label>
                    <ul>
                      <li>
                        <Label check>
                          <Input type="radio" name="radio1" />
                          Manual Action
                        </Label>
                      </li>
                      <li>
                        <Label check>
                          <Input type="radio" name="radio1" />
                          AI
                        </Label>
                      </li>
                      <li>
                        <Label check>
                          <Input type="radio" name="radio1" />
                          Keywords
                        </Label>
                      </li>
                    </ul>
                  </FormGroup>
                </div>
              </CardBody>
            </Card>
          </div>
          <div className="col-sm col-md-6 div2">
            <Card className="mb-3">
              <CardBody>
                <div className="d-flex">
                  <img
                    className="img-fluid profile-img"
                    src={profileImg}
                    alt="login-rt-image"
                  />
                  <div className="profile-des">
                    <h4>Prayag Mukhi</h4>
                    <h6>12:26AM, Today</h6>
                  </div>
                </div>
                <CardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </CardText>
              </CardBody>
            </Card>
            <Card>
              <CardBody>
                <div className="d-flex">
                  <img
                    className="img-fluid profile-img"
                    src={profileImg}
                    alt="login-rt-image"
                  />
                  <div className="profile-des">
                    <h4>Prayag Mukhi</h4>
                    <h6>12:26AM, Today</h6>
                  </div>
                </div>
                <CardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </CardText>
              </CardBody>
            </Card>
          </div>
          <div className="col-sm col-md-3 card-3">
            <Card>
              <CardBody>
                <div className="d-flex">
                  <img
                    className="img-fluid profile-img"
                    src={profileImg}
                    alt="login-rt-image"
                  />
                  <div className="profile-des">
                    <h4>Prayag Mukhi</h4>
                    <h6>12:26AM, Today</h6>
                  </div>
                </div>
                <CardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </CardText>
                <CardImg
                  top
                  width="100%"
                  className="c-3-img"
                  src={cardImg}
                  alt="Card image cap"
                />
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
