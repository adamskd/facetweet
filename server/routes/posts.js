import express from "express"
import {getFeedPosts, getUserPosts, likePosts} from "../controllers/posts.js"
import {verifyToken} from "../middleware/auth.js"

const router = express.Router()

/* READ */
router.get("/", veriftyToken, getFeedPosts)
router.get("/:userId/Posts", verifyToken, getUserPosts)

/* UPDATE */
router.patch("/:id/like", verifyToken, likePosts)

export default router;