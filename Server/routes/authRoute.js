const express = require("express");
const cors = require("cors");

const router = express.Router();

const corsOptions = {
  origin: "http://localhost:2000",
  credentials: true,
  methods: "GET,POST,PUT,DELETE,OPTIONS",
  allowedHeaders: "Content-Type,Authorization",
};
// https://bitclub-airdrop.vercel.app 
router.use(cors(corsOptions));
router.options("*", cors(corsOptions));

const {
  user,
  getUser,
  newTask,
  getRefBal,
  startFarm,
  activeTask,
  newReferral,
  getReferrals,
  getTaskDone,
  claimFarming,
  farmingStatus,
  startReferral,
  createTaskDone,
  claimedFunction,
} = require("../controllers/authController");

router.post("/newTask", newTask);
router.post("/task", getTaskDone);
router.post("/activeTask", activeTask);
router.post("/createTask", createTaskDone);
router.post("/claimed", claimedFunction);
router.post("/start", startFarm);
router.post("/claim", claimFarming);
router.post("/api/user", user);
router.post("/getRefBal", getRefBal)
router.get("/api/user/:userId", getUser);
router.get("/status/:userId", farmingStatus);
router.post("/startReferral", startReferral);
router.post("/referral/", newReferral);
router.post("/getReferrals", getReferrals);
module.exports = router;
