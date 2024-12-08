import React, { useState, useEffect, useRef } from "react";
import { Form, Button, Container, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom"; // Đảm bảo bạn đã cài đặt react-router-dom
import "./style.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const usernameRef = useRef(null);

  const navigate = useNavigate();

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      navigate("/home");
    }
  }, [navigate]);

  useEffect(() => {
    if (usernameRef.current) {
      usernameRef.current.focus();
    }
  }, []);


  useEffect(() => {
    setIsFormValid(username.trim() !== "" && password.trim() !== "");
  }, [username, password]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "12345678") {
      setError("");
      localStorage.setItem("loggedInUser", JSON.stringify({ username }));
      navigate("/home");
    } else {
      setError("Thông tin đăng nhập không chính xác!");
    }
  };

  return (
    <Container
      className="d-flex justify-content-center align-items-center login-container"
    >
      <div className="login-box">
        <h3 className="text-center login-title">Welcome Back</h3>
        {error && <Alert variant="danger" className="login-alert">{error}</Alert>}
        <Form onSubmit={handleLogin}>
          <Form.Group className="mb-3">
            <Form.Label className="login-label">Tên đăng nhập</Form.Label>
            <Form.Control
              ref={usernameRef}
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="login-input"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="login-label">Mật khẩu</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="login-input"
            />
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            className="w-100 login-button"
            disabled={!isFormValid}
          >
            Đăng nhập
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default Login;
