const router = require("express").Router();
const _controller = require("./task.controller");

router.post("/add", _controller.addTask);
router.put("/update", _controller.updateTask);
router.get("/count", _controller.getCount);
router.get("/getAll", _controller.getAll);



module.exports = router;