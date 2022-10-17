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
    };

    static listAll = async () => {
        try{

            const subjects = await prisma.subject.findMany();

            if(!subjects) throw Object.assign(new Error('Assuntos não encontrados'), { status: 404});

            return subjects;
        }
        catch(e){
            return e.message;
        }
    };


}

export default SubjectService;