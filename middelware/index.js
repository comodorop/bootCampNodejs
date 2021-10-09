const ips = ["192.168.1.2"]

module.exports = {
    listWhiteIp: async (req, res, next) => {
        next()
        // let {body} = req
        // if (req.body.hasOwnProperty("ip")) {
        //     let { ip } = req.body
        //     if (ips.includes(ip)) {
        //         next()
        //     }
        //     else {
        //         return res.status(401).send({ msg: "you Dont have access" })
        //     }
        // }
        // else {
        //     return res.status(401).send({ msg: "Requiere ip porperty" })
        // }
    }
}