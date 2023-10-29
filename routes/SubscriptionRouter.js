const express = require('express')
const router = express.Router()
const SubscriptionController = require('../controllers//SubscriptionController')

router.post('/', SubscriptionController.createSubscription)
router.get('/', SubscriptionController.getSubscriptions)
router.get('/:id', SubscriptionController.getSubscriptionById)
router.put('/:id', SubscriptionController.updateSubscription)
router.delete('/:id', SubscriptionController.deleteSubscription)

module.exports = router