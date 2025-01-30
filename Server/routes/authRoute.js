const express = require("express");
const cors = require("cors");

const router = express.Router();

const corsOptions = {
  origin: "https://bitclub-airdrop.vercel.app",
  credentials: true,
  methods: "GET,POST,PUT,DELETE,OPTIONS",
  allowedHeaders: "Content-Type,Authorization",
};
//http://localhost:2000
router.use(cors(corsOptions));
router.options("*", cors(corsOptions));

const {
  newTask,
  startFarm,
  activeTask,
  getTaskDone,
  claimFarming,
  farmingStatus,
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
router.get("/status/:userId", farmingStatus);

module.exports = router;
