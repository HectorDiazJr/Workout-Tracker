// const db = require("../models");
// const mongojs = require("mongojs")

// module.exports = function(app) {
//     app.get("api/workouts", (req, res) => {
//         db.Workout.find({}, (err, data) => {
//             if (err) {
//                 res.send(err);
//             } else {
//                 res.json(data);
//             }
//         });
//     });

//     app.get("/api/workouts/range", (req, res) => {
//         db.Workout.find({}, (err, data) => {
//             if (err) {
//                 res.send(err);
//             } else {
//                 res.json(data);
//             }
//         });
//     });

//     app.get("/app/workouts/:id", (req, res) => {
//         db.Workout.findOne(
//             {
//                 _id: mongojs.ObjectId(req.params.id)
//             },
//             (err, data) => {
//                 if (err) {
//                     res.send(err);
//                 } else {
//                     res.send(data);
//                 }
//             }
//         );
//     });

//     app.post("/api/workouts", (req, res) => {
//         const result = db.Workout.create({}, (err, data) => {
//             if (err) {
//                 res.send(err);
//             } else  {
//                 res.json(data);
//             }
//         });
//     });

//     app.put("/api/workouts/:id", (req, res) => {
//         console.log("id", req.params.id);
//         db.Workout.findByIdAndUpdate(
//             req.params.id,
//             {$push:{exercises: req.body} },
//             {new: true, runValidators:true }
//         )
//         .then(data => res.json(data))
//         .catch(err => {
//             res.json(err)
//         })
//     });
// };

const db = require("../models");
module.exports = function (app) {
    app.get("/api/workouts", function (req, res) {
        db.Workout.find({}).then(function (dbWorkouts) {
            res.json(dbWorkouts);
        })
        .catch(err => {res.json(err)});
    });
    app.post("/api/workouts", function ({ body }, res) {
        db.Workout.create(body)
        .then(dbworkout => res.json(dbworkout))
        .catch(err => res.json(err));
    })
    app.put("/api/workouts/:id", function (req, res) {
        console.log(req.body);
        db.Workout.findByIdAndUpdate(req.params.id,{
            $push: {
                exercises: req.body
            }
        }).then(dbWorkout => {
            res.json(dbWorkout);
        }).catch(err => res.json(err));
        // db.Workout.findByIdAndUpdate({ _id: req.params.id }, { rating: req.body.rating }).then(function (dbWorkout) {
        //     res.json(dbWorkout);
        // })
        // .catch(err => res.json(err))
    });
    app.get("/api/workouts/range", (req, res) => {
        db.Workout.find({}).then(dbUser => {
            res.json(dbUser);
        })
        .catch(err => res.json(err));
    })
    app.post("/api/workouts/range", function ({ body }, res) {
        db.Workout.create(body).then(dbUser => {
            res.json(dbUser);
        })
        .catch(err => res.json(err));
    })
    // app.post(“/api/workouts”, function ({ body }, res) {
    //     db.Workout.create(body)
    //     .then(dbworkout => res.json(dbworkout))
    //     .catch(err => res.json(err));
    // });
};