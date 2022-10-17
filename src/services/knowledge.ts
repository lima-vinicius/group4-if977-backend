import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

require('dotenv').config();

class KnowledgeService {
    static register = async (data: any) => {

        try {

            const { name } = data;

            const find = await prisma.knowledge.findFirst({
                where: {
                    name: data.name
                }
            })
            if (find == undefined) {
                
                const knowledge = prisma.knowledge.create({
                    data
                }).finally(async () => await prisma.$disconnect())

                
                return {data};

            }
            else if (find != undefined) {
                return "Knowledge area yet exist, try again."
            }
        }
        catch (e) {
            return e
        }
    };

    static delete = async(data: any) => {

        try{

            const {id} = data;
            const student = await prisma.knowledge.delete({
                where:{
                    id: id,
                }
            });

            if(!student) throw Object.assign(new Error('Área do conhecimento não encontrada'), { status: 404});

            return student;
        }
        catch(e){
            return e.message;
        }
    };
}

export default KnowledgeService;
