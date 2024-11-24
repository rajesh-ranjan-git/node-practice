import express from "express";
import hostController from "../controllers/hostController.js";

const hostRouter = express.Router();

hostRouter.get("/hostHomesList", hostController.getHostHomesList);
hostRouter.get("/registerHome", hostController.getRegisterHome);
hostRouter.post("/registerHome", hostController.registerHomeSuccess);
hostRouter.get("/editHome/:houseId", hostController.getEditHome);
hostRouter.post("/editHome", hostController.editHomeSuccess);

export default hostRouter;
