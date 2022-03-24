const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const generateToken = require("../config/generateToken");
const Feedback = require("../models/feedbackModel");
const Contact = require("../models/ContactSchema");

const allUsers = asyncHandler(async (req, res) => {
  const keyword = req.query.search
    ? {
        $or: [
          { name: { $regex: req.query.search, $options: "i" } },
          { email: { $regex: req.query.search, $options: "i" } },
        ],
      }
    : {};

  const users = await User.find(keyword).find({ _id: { $ne: req.user._id } });
  res.send(users);
});

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, pic, username, role, contact, gender } =
    req.body;

  if (
    !name ||
    !email ||
    !password ||
    !username ||
    !role ||
    !contact ||
    !gender
  ) {
    res.status(400);
    throw new Error("Please Enter all the Feilds");
  }

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const user = await User.create({
    name,
    email,
    password,
    pic,
    username,
    role,
    contact,
    gender,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      pic: user.pic,
      username: user.username,
      contact: user.contact,
      gender: user.gender,
      role: user.role,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("User not found");
  }
});

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      pic: user.pic,
      username: user.username,
      contact: user.contact,
      gender: user.gender,
      role: user.role,
      qualification: user.qualification,
      desc: user.desc,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid Email or Password");
  }
});

const feedbackUser = async (req, res) => {
  const { name, email, feedback } = req.body;
  if (!name || !email || !feedback) {
    return res.status(400).json({ msg: "Please enter the missing fields" });
  }
  const feedbackUsers = await Feedback.create({
    name,
    email,
    feedback,
  });
  if (feedbackUsers) {
    return res.status(200).json({ msg: "Thanks for your feedback...!!! " });
  } else {
    return res.status(400).json({ msg: "Something Wrong!" });
  }
};

const getFeedbacks = async (req, res) => {
  const allFeedbacks = await Feedback.find();
  res.json(allFeedbacks);
};

const contactUs = async (req, res) => {
  const { name, email, phone, mainMessage } = req.body;
  if (!name || !email || !phone || !mainMessage) {
    return res.status(400).json({ msg: "Please enter the missing fields" });
  }
  const contactUsers = await Contact.create({
    name,
    email,
    phone,
    mainMessage,
  });
  if (contactUsers) {
    return res.status(200).json({ msg: "Thanks for contacting us...!!! " });
  } else {
    return res.status(400).json({ msg: "Something Wrong!" });
  }
};

const getContactus = async (req, res) => {
  const getContacts = await Contact.find();
  res.json(getContacts);
};

const getAllusers = async (req, res) => {
  const allusers = await User.find().select("-password");
  res.json(allusers);
};

const getTeachers = async (req, res) => {
  const teachers = await User.find({ role: "teacher" }).select("-password");
  res.json(teachers);
};

const getStudents = async (req, res) => {
  const students = await User.find({ role: "student" }).select("-password");
  res.json(students);
};

const updateProfile = async (req, res) => {
  const { id, qualification, desc, name, contact } = req.body;
  await User.findOneAndUpdate(
    { _id: id },
    { qualification, desc, name, contact }
  );
  res.status(200).json({ msg: "Profile has been updated successfully" });
};

const deleteProfile = async (req, res) => {
  const { id } = req.body;
  await User.findOneAndDelete({ _id: id });
  res.status(200).json({ msg: "Profile Deleted" });
};

module.exports = {
  allUsers,
  registerUser,
  authUser,
  feedbackUser,
  getFeedbacks,
  contactUs,
  getContactus,
  getAllusers,
  getTeachers,
  getStudents,
  updateProfile,
  deleteProfile
};
