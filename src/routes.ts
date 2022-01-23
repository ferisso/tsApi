import { Router } from "express";

// controllers
import { CreateUserController } from "./controllers/CreateUsersController";
import { CreateTagController } from "./controllers/CreateTagController";
import { AuthenticateJwtController } from "./controllers/AuthenticateJwtController";
import { CreateCompliementController } from "./controllers/CreateCompliementController";

// middlewares
import { isAuth } from "./middlewares/ensureAuthenticate";
import { ensureAdmin } from './middlewares/ensureAdmin';

const router = Router();

const createUserController = new CreateUserController()
router.post("/users", createUserController.handle)

const createTagController = new CreateTagController()
router.post("/tags", isAuth, ensureAdmin, createTagController.handle)

const authenticateJwtController = new AuthenticateJwtController()
router.post("/authenticate", authenticateJwtController.handle)

const createCompliementController = new CreateCompliementController()
router.post("/compliemnt", createCompliementController.handle)

export { router };