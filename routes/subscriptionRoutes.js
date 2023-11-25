import { Router } from "express";
import { createSubscription, deleteSubscription, updateSubscription, getSubscription, getSubscriptions } from "../controllers/subscriptionController.js";
import {validateAddSubscriptionData, validateSubscriptionId, validateUpdateSubscriptionData }from "../middlewares/validateSubscription.js";
import { verifyToken } from "../middlewares/jwt.js";
import { verifyAdmin } from "../middlewares/validateAdmin.js";
const router = Router()

router.post("/", verifyToken, verifyAdmin, validateAddSubscriptionData, createSubscription)
router.get("/", verifyToken, getSubscriptions)
router.delete("/:id", verifyToken, verifyAdmin, validateSubscriptionId, deleteSubscription)
router.put("/:id", verifyToken, verifyAdmin, validateUpdateSubscriptionData, updateSubscription)
router.get("/:id", verifyToken, verifyAdmin, validateSubscriptionId, getSubscription)

export default router