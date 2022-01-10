import { Router } from "express";
import { ensureAdmin } from './middlewares/ensureAdmin';
import { CreateUserController } from "./controllers/CreateUsersController";
import { CreateTagController } from "./controllers/CreateTagController";
import { AuthenticateJwtController } from "./controllers/AuthenticateJwtController";
import { CreateCompliementController } from "./controllers/CreateCompliementController";

const router = Router();

const createUserController = new CreateUserController()
router.post("/users", createUserController.handle)

const createTagController = new CreateTagController()
router.post("/tags", ensureAdmin, createTagController.handle)

const authenticateJwtController = new AuthenticateJwtController()
router.post("/authenticate", authenticateJwtController.handle)

const createCompliementController = new CreateCompliementController()
router.post("/compliemnt", createCompliementController.handle)

export { router };