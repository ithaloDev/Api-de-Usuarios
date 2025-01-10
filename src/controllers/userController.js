import { UserService } from "../services/userService.js";

const users = new UserService()

export default class userController {
    async createUser(req, res) {
        try {
            const { user, email } = req.body;
            const createdUser = await users.createUser(user, email);
            return res.status(201).json(createdUser);
        } catch (err) {
            console.error(err);
            return res.status(500).json({ msg: "Erro ao criar o usuário." });
        }
    }

    async deleteUser(req, res) {
        try {
            const { id } = req.params;
            const deletedUser = await users.deleteUser(id);
            if (!deletedUser) {
                return res.status(404).json({ msg: "Usuário não encontrado." });
            }
            return res.status(200).json({ msg: "Usuário deletado com sucesso." });
        } catch (err) {
            console.error(err);
            return res.status(500).json({ msg: "Erro ao deletar o usuário." });
        }
    }

    async updateUser(req, res) {
        try {
            const { id } = req.params;
            const { user, email } = req.body;
            const updatedUser = await users.updateUser(id, user, email);
            if (!updatedUser) {
                return res.status(404).json({ msg: "Usuário não encontrado." });
            }
            return res.status(200).json(updatedUser);
        } catch (err) {
            console.error(err);
            return res.status(500).json({ msg: "Erro ao atualizar o usuário." });
        }
    }

    async listUsers(req, res) {
        try {
            const listUsers = await users.listUser()
            return res.status(200).send(listUsers)
        } catch (err) {
            console.error(err)
            return res.status(500).send({ msg: "Erro no servido tente novamente" })
        }
    }
}