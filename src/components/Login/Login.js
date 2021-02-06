import React, { useRef, useState } from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { useAuth } from '../../context/AuthContext';
import { Link, useHistory } from 'react-router-dom';
import loginPgImg from '../../Assets/bf0756aa3cb6adc1b861cd2c83125a0f-woman-sitting-talking-in-podcast-character.png';
import './login.css';

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError('');
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push('/');
    } catch {
      setError('Failed to log in');
    }
    setLoading(false);
  }

  return (
    <>
      <div>
        <div className="d-flex align-items-center justify-content-center">
          <div className="container">
            <a href="/" className="navbar-brand brand">
              Rep<span>suite</span>.
            </a>
            <div className="row">
              <div className="col-md-6 d-flex m-auto justify-content-center flex-column left">
                <Card className="lt-card">
                  <Card.Body>
                    <h1 className="text-center mb-4">Hey There 👋</h1>
                    <p>
                      Welcome back to Rep<span>suite</span>.
                    </p>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                      <Form.Group id="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" ref={emailRef} required />
                      </Form.Group>
                      <Form.Group id="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          type="password"
                          ref={passwordRef}
                          required
                        />
                        <small id="emailHelp" class="form-text text-muted">
                          Use 6 or more character to make a strong password
                        </small>
                      </Form.Group>

                      <Button
                        disabled={loading}
                        className="w-50 btn btn-danger"
                        type="submit"
                      >
                        Log In
                      </Button>
                    </Form>
                  </Card.Body>
                </Card>
                <div className="w-100 text-center mt-2 bottom-text">
                  New User? <Link to="/signup">signup instead</Link>
                </div>
              </div>
              <div className="col-md-6 col-lg-5 pb-5 pt-5 right">
                <img
                  className="img-fluid"
                  src={loginPgImg}
                  alt="login-rt-image"
                />
                <p>💭 Fully Automated Comment Moderation</p>
                <p>📎 Take a backseat while we automate your repo</p>
                <p>💲 Start with free trial</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
