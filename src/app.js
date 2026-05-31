import express from "express"
import { Task } from "./models/tasks.models.js"

const app = express()
app.use(express.json())

app.post("/tasks", async (req, res) => {
    const data = req.body
    await Task.create({
        title : data.title,
        completed : data.completed
    })
    res.status(201).json({
        massege : "Succesfully Added"
    })
})

app.get("/tasks", async (req, res) => {
    const Data = await Task.find()
    res.status(200).json({
        massege : "Succesfully Fetched",
        tasks : Data
    })
})


app.delete("/tasks/:id" , async (req , res) => {
    const id = req.params.id
    await Task.findOneAndDelete({
        _id : id
    })
    res.status(200).json({
        massege : "Successfully Deleted"
    })
})

app.patch("/tasks/:id",  async (req, res) => {
    const id = req.params.id
    const completed = req.body.completed
    await Task.findOneAndUpdate({
        _id : id
    } , {
        completed : completed
    })
    res.status(201).json({
        massege : "Successfully Updated"
    })
})

export default app