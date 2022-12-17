const AdminDash = (req,res,next)=>{

    res.status(200).send({
        success: true,
        message: 'Valid user'
    })
}
module.exports = {AdminDash}