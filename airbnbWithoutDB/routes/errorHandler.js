import express from "express";

const errorHandler = express.Router();

errorHandler.use("/", (req, res, next) => {
  res.status(404).render("error", { pageTitle: "404 - Page Not Found" });
});

export default errorHandler;
