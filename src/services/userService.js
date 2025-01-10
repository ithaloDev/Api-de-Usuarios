import prisma from "../model/userModel.js";

export class UserService {
    async createUser(user, email) {
        const createUser = await prisma.user.create({
            data: {
                user,
                email
            }
        })

        return createUser
    }

    async deleteUser(id) {

        const existingUser = await prisma.user.findUnique({
            where: { id },
        });

        if (!existingUser) {
            return null;
        }

        const deleteuser = await prisma.user.delete({
            where: {
                id
            }
        })

        return deleteuser
    }

    async updateUser(id, user, email) {

        const existingUser = await prisma.user.findUnique({
            where: { id },
        });

        if (!existingUser) {
            return null;
        }

        const updateUser = await prisma.user.update({
            where: {
                id
            },
            
            data: {
                user,
                email
            }
        })

        return updateUser
    }

    async listUser() {
        const users = await prisma.user.findMany()

        return users
    }
}


