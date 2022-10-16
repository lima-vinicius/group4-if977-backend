import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

require('dotenv').config();

class SubjectService {
    static register = async (data: any) => {

        try {

            const { name } = data;

            const find = await prisma.subject.findFirst({
                where: {
                    name: data.name
                }
            })
            if (find == undefined) {

                const subject = prisma.subject.create({
                    data
                }).finally(async () => await prisma.$disconnect())


                return {data};

            }
            else if (find != undefined) {
                return "Subject of knowledge area yet exist, try again."
            }
        }
        catch (e) {
            return e
        }
    }
}

export default SubjectService;