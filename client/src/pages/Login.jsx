import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../store/actions/auth-actions';
import { useNavigate, Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaArrowLeft } from "react-icons/fa";
import Logo from '../assets/images/Credifacil.png';
import TheSpinner from "../layout/TheSpinner";
import '../assets/css/login.css';

export default function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loading = useSelector((state) => state.ui.loginLoading);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      try {
        await dispatch(login(values));
        navigate("/dashboard");
      } catch (error) {
        console.log(error);
      }
    },
  });

  const handleGoogleLogin = () => {
    console.log("Login con Google (no implementado)");
    navigate("/dashboard");
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-logo">
            <img src={Logo} alt="" style={{ width: '200px', height: 'auto' }} />           
        </div>
        <div className="auth-form-container">
          <div className="auth-header">
            <button className="back-button" onClick={() => navigate("/")}>
              <FaArrowLeft /> Volver
            </button>
            <h1>¡Bienvenido!</h1>
            <p>Inicia sesión con tu cuenta.</p>
          </div>

          {loading ? <TheSpinner /> : (
            <form onSubmit={formik.handleSubmit} className="auth-form">
              <div className="form-group">
                <label htmlFor="email">Correo electrónico</label>
                
                  
                  <input
                    type="email"
                    id="email"
                    name="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    placeholder="example@domain.com"
                    required
                  />
                
                {formik.touched.email && formik.errors.email && (
                  <p className="error-message">{formik.errors.email}</p>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="password">Contraseña</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                    placeholder="Password"
                    required
                  />
                {formik.touched.password && formik.errors.password && (
                  <p className="error-message">{formik.errors.password}</p>
                )}
              </div>

              <div className="forgot-password">
                <a href="#">¿Olvidaste tu contraseña?</a>
              </div>

              
              <button type="submit" className="auth-button">
                Iniciar sesión
              </button>

              <div className="divider"><span>o continúa con</span></div>

              <button type="button" className="google-button" onClick={handleGoogleLogin}>
                <FcGoogle size={20} /> Google
              </button>

              <div className="auth-footer">
                <p>¿No tienes cuenta? <Link to="/register">Regístrate</Link></p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
