const { HttpResponse } = require("../../helper/httpresponse");
const { Task } = require("./task.model");

module.exports.addTask = async (query, body) => {
    const { task }  = body;
    if(task === "") {
        return new HttpResponse("task empty", null, 400);
    }

    //save to mongodb data base
    const newtask = await Task({name : task })
    newtask.save()
    return new HttpResponse("Data Fetch Successfully", [newtask], 200);
}

module.exports.updateTask = async (query, body) => {
    const { task, id }  = body;
    if(task === "") {
        return new HttpResponse("task empty", null, 400);
    }

    const oldtask = await Task.findById(id);

    //update the task
    const updateTask = await Task.findByIdAndUpdate({ _id: Object(id) }, { name : task, updateCount: oldtask.updateCount+1 }, {
        runValidators: true,
        new: true,
      });
    // updateTask.save();

    return new HttpResponse("Data Fetch Successfully", [updateTask], 200);
}

module.exports.getCount = async (query, body) => {
    const alltask = await Task.find({});
    let count = 0;
    alltask.map((e)=>{
        count = count + e.updateCount;
    })
    return new HttpResponse("Data Fetch Successfully", [{count}], 200);
}

module.exports.getAll = async (query, body) => {
    const alltask = await Task.find({});
    return new HttpResponse("Data Fetch Successfully", alltask, 200);
}