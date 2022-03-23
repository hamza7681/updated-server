import React, { useState } from "react";
import FooterLogo from "../../../Assests/FooterLogo.png";
import { Input } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
// import { auth } from "../../../Api/axios";
import axios from "axios";

import "./login.css";
import {
  MailOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
  KeyOutlined,
} from "@ant-design/icons";
export default function Login() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const LOGIN = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:5000/api/user/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        console.log(res.data.token);
        localStorage.setItem("userInfo", JSON.stringify(res.data));
        localStorage.setItem("token", res.data.token);
        dispatch({
          type: "LOGIN",
          payload: {
            token: localStorage.getItem("token"),
            userInfo: JSON.parse(localStorage.getItem("userInfo")),
          },
        });
        navigate("/");
      })
      .catch((e) => console.log(e));
  };

  return (
    <>
      <div className="container-fluid pt-4 main_wrapper">
        <div className="container pt-3 pb-3 inside_wrapper mt-4">
          <div className="container in_wrapper">
            <div className="main_heading">
              <h1 className="register_heading">Login</h1>
              <h6 className="already">
                Don't have an account ?
                <span className="move">
                  <Link to="/Reg" className="text-warning">
                    Register
                  </Link>
                </span>
              </h6>
            </div>
            <div className="row">
              <div className="col-md-7">
                <form className="row g-2">
                  <div className="col-md-12">
                    <label className="input_label">Email:</label>

                    <Input
                      size="large"
                      placeholder="Email"
                      prefix={<MailOutlined />}
                      className="input_field"
                      type="email"
                      value={email}
                      onChange={(e) => setemail(e.target.value)}
                    />
                  </div>

                  <div className="col-md-12">
                    <label className="input_label">Password:</label>

                    <Input.Password
                      placeholder="input password"
                      iconRender={(visible) =>
                        visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                      }
                      prefix={<KeyOutlined />}
                      className="input_field"
                      size="large"
                      type="email"
                      value={password}
                      onChange={(e) => setpassword(e.target.value)}
                    />
                  </div>
                  <button className="btn_submit" onClick={LOGIN}>
                    Login
                  </button>
                </form>
              </div>
              <div className="col-md-5 text-center">
                <div className="IMAGE">
                  <img src={FooterLogo} alt="" className="w-50 mt-4 mb-5 " />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
