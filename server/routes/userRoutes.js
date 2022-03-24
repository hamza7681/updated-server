const express = require("express");
const {
  registerUser,
  authUser,
  allUsers,
  feedbackUser,
  getFeedbacks,
  contactUs,
  getContactus,
  getAllusers,
  getTeachers,
  getStudents,
  updateProfile,
  deleteProfile
} = require("../controllers/userControllers");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.route("/").get(protect, allUsers);
router.route("/register").post(registerUser);
router.post("/login", authUser);
router.post("/feedback", feedbackUser);
router.get("/getfeedback", getFeedbacks);
router.post("/contact", contactUs);
router.get("/getcontact", getContactus);
router.get("/allusers", getAllusers);
router.get("/teachers", getTeachers);
router.get("/students", getStudents);
router.patch("/update-profile", updateProfile);
router.delete('/delete-profile', deleteProfile)

module.exports = router;
