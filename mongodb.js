// CRUD create read update delete

const { MongoClient, ObjectID } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
  if (error) {
    return console.log('Unable to connect to database!')
  }
  const db = client.db(databaseName);

  // db.collection('users').findOne({ name: 'Jen' }, (error, user) => {
  //     if (error) {
  //         return console.log('Unable to fetch')
  //     }
  //
  //     console.log(user)
  // });
  //
  // db.collection('users').findOne({ _id: new ObjectID("5ca99ed78aae923931277315") }, (error, user) => {
  //     if (error) {
  //         return console.log('Unable to fetch')
  //     }
  //
  //     console.log(user)
  // });

  // db.collection('users').find({ age: 27 }).toArray((error, users) => {
  //     console.log(users)
  // })

  // db.collection('tasks').findOne({ _id: new ObjectID("5ca9a4ee63daec3cda72425a") }, (error, task) => {
  //   console.log(task)
  // });
  //
  // db.collection('tasks').find({ completed: false }).toArray((error, tasks) => {
  //   console.log(tasks)
  // })

  // db.collection('tasks').updateMany(
  //     { completed: false },
  //     { $set: { completed: true } })
  //     .then((result) => {
  //     console.log("Tasks updated")
  // }).catch((error) => {
  //     console.log("error")
  // })

  // db.collection('users').deleteMany(
  //     { age: 27 })
  //     .then((result) => {
  //       console.log("Users deleted")
  //     }).catch((error) => {
  //   console.log("error")
  // })

  db.collection('tasks').deleteOne(
      { description: 'Learn NodeJS' })
      .then((result) => {
        console.log("deleted")
      }).catch((error) => {
    console.log("error")
  })
});
