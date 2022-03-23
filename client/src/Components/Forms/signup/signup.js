import React, { useState } from "react";
import FooterLogo from "../../../Assests/FooterLogo.png";
import { Input } from "antd";
import { Link } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";
import { useDispatch } from "react-redux";
import "./signup.css";
import {
  UserOutlined,
  MailOutlined,
  PhoneOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
  KeyOutlined,
} from "@ant-design/icons";
import axios from "axios";

export default function Signup() {
  const dispatch = useDispatch();
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setemail] = useState("");
  const [username, setusername] = useState("");
  const [gender, setgender] = useState("");
  const [role, setrole] = useState("");
  const [contact, setcontact] = useState("");
  const [password, setpassword] = useState("");
  const [cpassword, setcpassword] = useState("");
  const [pic, setPic] = useState();
  const fullName = firstName + lastName;

  const REGISTER = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:5000/api/user/register", {
        name: fullName,
        email: email,
        password: password,
        pic: pic,
      })
      .then((res) => console.log(res.data))
      .catch((e) => console.log(e));
  };

  const postDetails = (pics) => {
    if (pics === undefined) {
      console.log("Please upload Image");
    }
    console.log(pics);
    if (pics.type === "image/jpeg" || pics.type === "image/png") {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "innovative-learning");
      data.append("cloud_name", "hamza7681");
      fetch("https://api.cloudinary.com/v1_1/hamza7681/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          setPic(data.url.toString());
          console.log(data.url.toString());
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <>
      <div className="container-fluid pt-4 Main_wrapper ">
        <div className="container pt-3 pb-3 INSIDE_wrapper mt-4">
          <div className="container in_wrapper">
            <div className="main_heading">
              <h1 className="register_heading">Register your account</h1>
              <h6 className="already">
                Already register ?
                <span className="move">
                  <Link to="/login" className="text-warning">
                    Login
                  </Link>
                </span>
              </h6>
            </div>
            <div className="row">
              <div className="col-md-7">
                <form className="row g-2">
                  <div className="col-md-6">
                    <label className="input_label">First Name:</label>
                    <Input
                      size="large"
                      placeholder="First Name"
                      prefix={<UserOutlined />}
                      className="input_field"
                      value={firstName}
                      onChange={(e) => setfirstName(e.target.value)}
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="input_label">Last Name:</label>

                    <Input
                      size="large"
                      placeholder="Last Name"
                      prefix={<UserOutlined />}
                      className="input_field"
                      value={lastName}
                      onChange={(e) => setlastName(e.target.value)}
                    />
                  </div>
                  <div className="col-md-12">
                    <label className="input_label">Email:</label>

                    <Input
                      size="large"
                      placeholder="Email"
                      prefix={<MailOutlined />}
                      className="input_field"
                      value={email}
                      onChange={(e) => setemail(e.target.value)}
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="input_label">Username:</label>

                    <Input
                      size="large"
                      placeholder="Username"
                      prefix={<UserOutlined />}
                      className="input_field"
                      value={username}
                      onChange={(e) => setusername(e.target.value)}
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="input_label">Contact:</label>

                    <Input
                      size="large"
                      placeholder="Contact"
                      prefix={<PhoneOutlined />}
                      className="input_field"
                      value={contact}
                      onChange={(e) => setcontact(e.target.value)}
                    />
                  </div>
                  <div className="col-md-12 mt-3 ">
                    <label className="input_label">Gender:</label>
                    <span className="radio_btn">
                      <input
                        type="radio"
                        name="gender"
                        value={gender}
                        onChange={(e) => setgender(e.target.value)}
                      />
                      <span className="gender">Male</span>
                    </span>
                    <span className="radio_btn1">
                      <input
                        type="radio"
                        name="gender"
                        value={gender}
                        onChange={(e) => setgender(e.target.value)}
                      />
                      <span className="gender">Female</span>
                    </span>
                  </div>
                  <div className="col-md-12 mt-3 ">
                    <label className="input_label">Role:</label>
                    <span className="radio_btn">
                      <input
                        type="radio"
                        name="role"
                        value={role}
                        onChange={(e) => setrole(e.target.value)}
                      />
                      <span className="role">Student</span>
                    </span>
                    <span className="radio_btn1">
                      <input
                        type="radio"
                        name="role"
                        value={role}
                        onChange={(e) => setrole(e.target.value)}
                      />
                      <span className="role">Teacher</span>
                    </span>
                  </div>
                  <div className="col-md-6">
                    <label className="input_label">Password:</label>

                    <Input.Password
                      placeholder="input password"
                      iconRender={(visible) =>
                        visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                      }
                      prefix={<KeyOutlined />}
                      className="input_field"
                      size="large"
                      value={password}
                      onChange={(e) => setpassword(e.target.value)}
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="input_label">Confirm Password:</label>

                    <Input.Password
                      placeholder="input password"
                      iconRender={(visible) =>
                        visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                      }
                      prefix={<KeyOutlined />}
                      className="input_field"
                      size="large"
                      value={cpassword}
                      onChange={(e) => setcpassword(e.target.value)}
                    />
                  </div>
                  <div className="col-12">
                    <label className="input_label">
                      Select Profile Picture:
                    </label>
                    <input
                      className="form-control"
                      style={{ borderRadius: "25px" }}
                      type="file"
                      accept="image/*"
                      onChange={(e) => postDetails(e.target.files[0])}
                    />
                  </div>
                  <button className="btn_submit" onClick={REGISTER}>
                    Register
                  </button>
                </form>
              </div>
              <div className="col-md-5">
                <div className="image text-center">
                  <img src={FooterLogo} alt="" className="w-75  mb-5 mt-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
