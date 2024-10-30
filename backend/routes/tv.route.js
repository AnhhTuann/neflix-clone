import express from "express";
import {
  getMovieDetails,
  getTrendingMovie,
} from "../controllers/movie.controller.js";
import {
  getSimilarTvs,
  getTvsByCategory,
  getTvTrailers,
} from "../controllers/tv.controller.js";

const router = express.Router();

router.get("/trending", getTrendingMovie);
router.get("/:id/trailers", getTvTrailers);
router.get("/:id/details", getMovieDetails);
router.get("/:id/similar", getSimilarTvs);
router.get("/:category", getTvsByCategory);

export default router;
