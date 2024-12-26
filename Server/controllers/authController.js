const cron = require("node-cron");
const TaskDone = require("../models/TaskDone");
const TaskModel = require("../models/TaskModel");
const Farming = require("../models/FarmingModel");

cron.schedule("0 * * * *", async () => {
  try {
    const cutoff = new Date(Date.now() - 48 * 60 * 60 * 1000);
    const result = await TaskDone.deleteMany({ createdAt: { $lt: cutoff } });
    console.log(result)
    console.log(`Deleted ${result.deletedCount} expired tasks.`);
  } catch (error) {
    console.error("Error deleting expired tasks:", error);
  }
});

const getTaskDone = async (req, res) => {
  const { userID } = req.body;
  const results = await TaskDone.find({ UserID: userID });

  if (results.length > 0) {
    const data = [];
    for (let i = 0; i < results.length; i++) {
      const element = results[i];
      // const filterTask = await TaskModel.findOne({ TaskID: element.TaskID });
      data.push(element);
    }
    return res.json({ data });
  } else {
    res.json({ data: false });
  }
};

const activeTask = async (req, res) => {
  const { userID } = req.body;
  const results1 = await TaskDone.find({ UserID: userID });

  if (results1.length > 0) {
    const tasks = [];
    for (let i = 0; i < results1.length; i++) {
      const element = results1[i].TaskID;
      tasks.push(element);
    }
    const data = await TaskModel.find({ TaskID: { $nin: tasks } });
    return res.json({ data });
  } else {
    try {
      const data = await TaskModel.find({});
      res.json({ data });
    } catch (error) {
      console.log(error);
    }
  }
};

const createTaskDone = async (req, res) => {
  const { TaskID, userID } = req.body;

  const findTask = await TaskDone.findOne({ TaskID: TaskID });
  const findActiveTask = await TaskModel.findOne({ TaskID: TaskID });

  if (findTask) {
    return res.json({ data: false });
  }

  if (findActiveTask) {
    await TaskDone.create({
      UserID: userID,
      TaskID: findActiveTask.TaskID,
      ButtonStatus: "Claim",
      Icon: findActiveTask.Icon,
      Link: findActiveTask.Link,
      Message: findActiveTask.Message,
      Value: findActiveTask.Value,
    });

    res.json({
      message: "Hello From Server",
    });
  } else {
    return res.json({
      data: false,
    });
  }
};

const claimedFunction = async (req, res) => {
  const { claimID, userID, claimValue } = req.body;

  try {
    const findfarmer = await Farming.findOne({ userId: userID });

    if (!findfarmer) {
      await Farming.create({
        userId: userID,
        tokenBalance: claimValue,
        farmingDuration: Date.now(),
      });

      await TaskDone.updateOne(
        { TaskID: claimID },
        { $set: { ButtonStatus: "Completed" } }
      );

      return res.json({ message: "Success" });
    }

    await TaskDone.updateOne(
      { TaskID: claimID },
      { $set: { ButtonStatus: "Completed" } }
    );
    
    await Farming.updateOne(
      { userId: userID },
      { $inc: { tokenBalance: claimValue } }
    );

    return res.json({ message: "Success" });
  } catch (error) {
    return res.json({
      data: "error",
    });
  }
};

const newTask = async (req, res) => {
  const { link, social, cpx, message } = req.body;
  function generateTaskID() {
    const prefix = "TASK";
    const randomPart = Math.random().toString(36).substring(2, 10);
    const timestamp = Date.now().toString(36);

    return `${prefix}-${timestamp}-${randomPart}`;
  }
  const taskID = generateTaskID();
  const taskSocialIcon = {
    Youtube: "https://clipart-library.com/images/dc4LABqni.png",
    Facebook: "https://img.icons8.com/m_rounded/512/FFFFFF/facebook.png",
    Twitter:
      "https://freepnglogo.com/images/all_img/1725374683twitter-x-logo.png",
    Telegram:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSofki2i-o95YcfWGaj96gqaT5ABn_oQaLpHg&s",
    Instagram:
      "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/instagram-white-icon.png",
  };
  console.log(social);

  if (social === "YouTube") {
    try {
      await TaskModel.create({
        Icon: taskSocialIcon.Youtube,
        Message: message,
        Value: cpx,
        Link: link,
        TaskID: taskID,
        ButtonStatus: "Start",
      });
      return res.json({ data: true });
    } catch (error) {
      res.json(error);
    }
  }

  if (social === "Facebook") {
    try {
      await TaskModel.create({
        Icon: taskSocialIcon.Facebook,
        Message: message,
        Value: cpx,
        Link: link,
        TaskID: taskID,
        ButtonStatus: "Start",
      });
      return res.json({ data: true });
    } catch (error) {
      res.json(error);
    }
  }

  if (social === "Instagram") {
    try {
      await TaskModel.create({
        Icon: taskSocialIcon.Instagram,
        Message: message,
        Value: cpx,
        Link: link,
        TaskID: taskID,
        ButtonStatus: "Start",
      });
      return res.json({ data: true });
    } catch (error) {
      res.json(error);
    }
  }

  if (social === "Telegram") {
    try {
      await TaskModel.create({
        Icon: taskSocialIcon.Telegram,
        Message: message,
        Value: cpx,
        Link: link,
        TaskID: taskID,
        ButtonStatus: "Start",
      });
      return res.json({ data: true });
    } catch (error) {
      res.json(error);
    }
  }

  if (social === "Twitter") {
    try {
      await TaskModel.create({
        Icon: taskSocialIcon.Twitter,
        Message: message,
        Value: cpx,
        Link: link,
        TaskID: taskID,
        ButtonStatus: "Start",
      });
      return res.json({ data: true });
    } catch (error) {
      res.json(error);
    }
  }
};

const startFarm = async (req, res) => {
  const { userId } = req.body;
  const farmingDuration = 3 * 60 * 60 * 1000; // 3 hours in milliseconds

  try {
    // Update farming data or create a new record if it doesn't exist
    const updatedData = await Farming.findOneAndUpdate(
      { userId }, // Query by userId
      {
        farmingStartTime: Date.now(),
        tokenBalance: 0,
        claimed: false,
        farmingDuration, // Include farmingDuration
      },
      { upsert: true, new: true } // Create if not exists, return updated doc
    );

    res.json({ farmingDuration });
  } catch (error) {
    console.error("Error starting farming:", error);
    res.status(500).json({ error: "Failed to start farming." });
  }
};

const claimFarming = async (req, res) => {
  const { userId, tokens } = req.body;

  try {
    // Find user farming data by userId
    const userData = await Farming.findOne({ userId });

    if (!userData) {
      return res.status(404).json({ error: "User not found." });
    }

    // Check if tokens are already claimed
    if (userData.claimed) {
      return res.status(400).json({ error: "Tokens already claimed." });
    }

    // Check if farming duration is complete
    const currentTime = Date.now();
    const farmingStartTime = new Date(userData.farmingStartTime).getTime();
    const farmingDuration = userData.farmingDuration;

    if (isNaN(farmingStartTime) || typeof farmingDuration !== "number") {
      return res.status(400).json({ error: "Invalid farming data." });
    }

    const elapsedTime = currentTime - farmingStartTime;

    if (elapsedTime < farmingDuration) {
      return res.status(400).json({
        error: "Farming duration not yet complete. Please wait.",
      });
    }

    if (!tokens) {
      return res.status(400).json({
        error: "Invalid Token Value",
      });
    }
    // Update claimed status and token balance
    await Farming.updateOne(
      { userId: userId },
      { $inc: { tokenBalance: tokens }, claimed: true }
    );

    res.json({ tokenBalance: tokens });
  } catch (error) {
    console.error("Error claiming tokens:", error);
    res.status(500).json({ error: "Failed to claim tokens." });
  }
};

const farmingStatus = async (req, res) => {
  const { userId } = req.params;

  try {
    // Validate `userId`
    if (!userId) {
      console.error("User ID is missing in request.");
      return res.status(400).json({ error: "User ID is required." });
    }

    // Retrieve user farming data
    const userData = await Farming.findOne({ userId });

    if (!userData) {
      const farmingDuration = 3 * 60 * 60 * 1000; // 3 hours in milliseconds

      const updatedData = await Farming.findOneAndUpdate(
        { userId }, // Query by userId
        {
          farmingStartTime: Date.now(),
          tokenBalance: 0,
          claimed: false,
          farmingDuration, // Include farmingDuration
        },
        { upsert: true, new: true } // Create if not exists, return updated doc
      );

      return res.json({ farmingDuration });
    }

    res.status(200).json(userData); // Explicitly set a 200 status code
  } catch (error) {
    console.error("Error fetching farming status:", error);
    res.status(500).json({ error: "Failed to retrieve farming status." });
  }
};

module.exports = {
  newTask,
  startFarm,
  activeTask,
  getTaskDone,
  claimFarming,
  farmingStatus,
  createTaskDone,
  claimedFunction,
};
