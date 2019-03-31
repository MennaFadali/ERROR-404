    const express = require('express')
    const router = express.Router()
    router.use(express.json())
    const mongoose = require('mongoose')

    // We will be connecting using database 
    const Notification = require('../../models/Notification')


router.get('/admin', async(request, response) => {
    const notifications = await Notification.find({type:"question"})
    
    response.json({msg: 'You have questions',data:notifications})
 
});




router.delete('/:id', async(req, res) => {
    try {
        const id = req.params.id
        const deletedNotification = await Notification.findByIdAndRemove({_id:id})
        res.json({msg:'Notification was deleted successfully', data: deletedNotification})
       }
       catch(error) {
           // We will be handling the error later
           console.log(error)
       }

   
})

router.get('/user/:id', async(request, response) => {
    const userId = request.params.id 

    const notifications = await Notification.find({type:"answer" , user:userId})
    response.json({msg: 'Your question is answered',data:notifications})

});
module.exports = router

