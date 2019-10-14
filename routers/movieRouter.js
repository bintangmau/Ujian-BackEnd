const express = require('express')
const router = express.Router()
const { movieController } = require('../controllers')

router.get('/getmovie', movieController.geMovie)
router.get('/getcategories', movieController.getCategory)
router.get('/getmovcat', movieController.getMovcat)
router.post('/postmovie', movieController.postMovie)
router.post('/postcategory', movieController.postCategory)
router.post('/editmovie', movieController.updateMovie)
router.post('/editcategory', movieController.updateCategory)
router.post('/deletemovie', movieController.deleteMovie)
router.post('/deletecategory', movieController.deleteCategory)
router.post('/deletemovcat', movieController.deleteMovcat)


module.exports = router