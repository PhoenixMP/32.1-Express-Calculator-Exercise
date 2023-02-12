const express = require('express');
const ExpressError = require("./expressError");
const { makeArray, mode, mean, median } = require('./math');

const app = express();


app.get("/", (req, res) => {

    return res.send("home");
})

app.get("/mean", (req, res) => {
    console.log(req.query.nums)

    if (!req.query.nums) {
        throw new ExpressError("Must pass in numbers separated by commas", 400);
    }
    const nums = req.query.nums.split(',');
    const arr = makeArray(nums)
    if (arr instanceof Error) {
        throw new ExpressError(arr.message);
    }
    let result = {
        operation: "mean",
        result: mean(arr)
    }
    return res.send(result);
})

app.get("/median", (req, res) => {
    if (!req.query.nums) {
        throw new ExpressError("Must pass in numbers separated by commas", 400);
    }
    const nums = req.query.nums.split(',');
    const arr = makeArray(nums)
    if (arr instanceof Error) {
        throw new ExpressError(arr.message);
    }
    let result = {
        operation: "median",
        result: median(arr)
    }
    return res.send(result);
})

app.get("/mode", (req, res) => {
    if (!req.query.nums) {
        throw new ExpressError("Must pass in numbers separated by commas", 400);
    }
    const nums = req.query.nums.split(',');
    const arr = makeArray(nums)
    if (arr instanceof Error) {
        throw new ExpressError(arr.message);
    }
    let result = {
        operation: "mode",
        result: mode(makeArray(arr))
    }
    return res.send(result);
})


// If no other route matches, respond with a 404
app.use((req, res, next) => {
    const e = new ExpressError("Page Not Found", 404)
    next(e)
})


// Error handler
app.use(function (err, req, res, next) {
    let status = err.status || 500;
    let message = err.msg;

    // set the status and alert the user
    res.status(status)

    return res.json({
        error: err,
        message: message
    });
});

app.listen(3000, () => {
    console.log("Server running on port 3000")
});


