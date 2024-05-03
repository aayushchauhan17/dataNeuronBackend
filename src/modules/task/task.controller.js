const _services = require("./task.services");

module.exports.addTask = async (req, res) => {
    try {
      const response = await _services.addTask(
        req.query,
        req.body,
      );
      res.status(response.statusCode).json(response);
    } catch (err) {
      console.log(err);
    }
};

module.exports.updateTask = async (req, res) => {
    try {
      const response = await _services.updateTask(
        req.query,
        req.body
      );
      res.status(response.statusCode).json(response);
    } catch (err) {
      console.log(err);
    }
};

module.exports.getCount = async (req, res) => {
    try {
      const response = await _services.getCount(
        req.query,
      );
      res.status(response.statusCode).json(response);
    } catch (err) {
      console.log(err);
    }
};

module.exports.getAll = async (req, res) => {
    try {
      const response = await _services.getAll(
        req.query,
      );
      res.status(response.statusCode).json(response);
    } catch (err) {
      console.log(err);
    }
};