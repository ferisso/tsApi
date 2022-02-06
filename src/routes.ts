import { Router } from "express";

// controllers
import { CreateUserController } from "./controllers/CreateUsersController";
import { CreateTagController } from "./controllers/CreateTagController";
import { AuthenticateJwtController } from "./controllers/AuthenticateJwtController";
import { CreateCompliementController } from "./controllers/CreateCompliementController";
import { ListUserController } from "./controllers/ListUserController"

// middlewares
import { isAuth } from "./middlewares/ensureAuthenticate";
import { ensureAdmin } from './middlewares/ensureAdmin';
import { ListTagController } from "./controllers/ListTagController";

const router = Router();
// Get
const listUserController = new ListUserController()
router.get("/users", isAuth, listUserController.handle)

const listTagController = new ListTagController()
router.get("/tags", isAuth, listTagController.handle)
// Posts
const createUserController = new CreateUserController()
router.post("/users", createUserController.handle)

const createTagController = new CreateTagController()
router.post("/tags", isAuth, ensureAdmin, createTagController.handle)

const authenticateJwtController = new AuthenticateJwtController()
router.post("/authenticate", authenticateJwtController.handle)

const createCompliementController = new CreateCompliementController()
router.post("/compliemnt", createCompliementController.handle)
// Put
// Deletes

export { router };