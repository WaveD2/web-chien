import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  //const navigate = useNavigate(); // Hook để điều hướng


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Kiểm tra tài khoản đăng nhập
    const fixedAccount = { email: "admin", password: "123456789" };

    if (
      formData.email === fixedAccount.email &&
      formData.password === fixedAccount.password
    ) {
      alert("Đăng nhập thành công!");
      //navigate("/admin-home"); // Điều hướng đến giao diện admin


      // Thêm logic điều hướng sau khi đăng nhập thành công
     window.location.href = "/admin-home";
    } else {
      setError("Email hoặc mật khẩu không đúng!");
    }
  };

  // CSS dưới dạng object
  const styles = {
    container: {
      backgroundColor: "#fff",
      padding: "20px 30px",
      borderRadius: "10px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      width: "100%",
      maxWidth: "400px",
      margin: "50px auto",
      textAlign: "center",
      fontFamily: "Arial, sans-serif",
    },
    header: {
      marginBottom: "20px",
      color: "#333",
    },
    form: {
      display: "flex",
      flexDirection: "column",
      gap: "15px",
    },
    label: {
      fontWeight: "bold",
      color: "#555",
      marginBottom: "5px",
      display: "block",
    },
    input: {
      width: "100%",
      padding: "10px",
      border: "1px solid #ddd",
      borderRadius: "5px",
      fontSize: "14px",
    },
    inputFocus: {
      borderColor: "#007bff",
      outline: "none",
    },
    button: {
      backgroundColor: "#007bff",
      color: "#fff",
      padding: "10px",
      border: "none",
      borderRadius: "5px",
      fontSize: "16px",
      cursor: "pointer",
      transition: "background-color 0.3s",
    },
    buttonHover: {
      backgroundColor: "#0056b3",
    },
    errorText: {
      color: "red",
      fontSize: "14px",
      margin: "0",
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Đăng Nhập</h2>
      <form style={styles.form} onSubmit={handleSubmit}>
        <div>
          <label style={styles.label}>Email:</label>
          <input
            style={styles.input}
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label style={styles.label}>Mật khẩu:</label>
          <input
            style={styles.input}
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        {error && <p style={styles.errorText}>{error}</p>}
        <button
          type="submit"
          style={{
            ...styles.button,
            ":hover": styles.buttonHover,
          }}
        >
          Đăng Nhập
        </button>
      </form>
    </div>
  );
};

export default Login;
