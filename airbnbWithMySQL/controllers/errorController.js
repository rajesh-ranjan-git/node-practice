const errorController = (req, res, next) => {
  res.status(404).render("error", { pageTitle: "404 - Page Not Found", currentPage: "error" });
}

export default errorController;