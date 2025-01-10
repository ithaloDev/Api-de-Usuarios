export const validation = (req, res, next) => {
    const {user, email} = req.body

    if(!user || !email) {
        return res.status(400).send({msg: "Preenche o usuario ou email"})
    } else if(user.length < 6) {
        return res.status(400).send({msg: "O usuario deve ter mais de 6 caracteres"})
    }

    const regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    if(!regex.test(email)) {
        return res.status(400).send({msg: "Email invalido"})
    }

    next()
}