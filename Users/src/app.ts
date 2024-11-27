import express from "express";
import UserRoutes from './router/UserRoutes'
const app=express();
app.use(express())
app.use('/api/users', UserRoutes)
const port=4000;

app.listen(port, ()=>{
    console.log(`Server is running at http://localhost:${port}`)
})
