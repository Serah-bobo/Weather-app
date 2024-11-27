import { Request,Response } from "express";
interface  User{
    id:number;
    name:string;
    username:string;
    email:string;
    address:{
        street:string;
        suite:string;
        city:string;
        zipcode:string;
        geo:{
            lat:string;
            lng:string
        }
    };
    phone:string;
    website:string;
}
const getUsers=async(req:Request, res:Response)=>{
    try{
        console.log('Fetching users...');
        const response=await fetch('https://jsonplaceholder.typicode.com/users')
        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`)}
        //return user data
       const data:User[]=await response.json()
       
       res.status(200).json(data)
    }catch(error){
        console.error("Error fetching users:", error);
        res.status(500).json({ error: "Unable to fetch data" });
    }

}
export {getUsers}