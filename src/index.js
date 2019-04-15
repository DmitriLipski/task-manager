const express = require('express');
require('./db/mongoose');
const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');

const app = express();
const port = process.env.PORT || 5000;

// app.use((req, res, next) => {
//     res.status(503).send("Server is under maintenance mode")
// });

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
    console.log('Server is up on port ' + port)
});

// const Task = require('./models/task');
// const User = require('./models/user');
//
// const main = async () => {
//     // const task = await Task.findById('5c2e505a3253e18a43e612e6')
//     // await task.populate('owner').execPopulate()
//     // console.log(task.owner)
//
//     const user = await User.findById('5cb36abbf7239e7b58c7a746');
//     await user.populate('tasks').execPopulate();
//     console.log(user.tasks)
// };
//
// main();
