const express = require("express");
const cors = require("cors");

const router = express.Router();

const corsOptions = {
  origin: "http://localhost:2000",
  credentials: true,
  methods: "GET,POST,PUT,DELETE,OPTIONS",
  allowedHeaders: "Content-Type,Authorization",
};

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
router.post("/api/farming/start", startFarm);
router.post("/api/farming/claim", claimFarming);
router.get("/api/farming/status/:userId", farmingStatus);

module.exports = router;
