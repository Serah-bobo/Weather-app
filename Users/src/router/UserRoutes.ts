import { getUsers } from "../Controller/UserController";
import { Router } from "express";

const router=Router()
router.get('/',getUsers)
  export default  router