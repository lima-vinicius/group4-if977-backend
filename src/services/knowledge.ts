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

    static update = async(data: any) => {

        try{

            const {id, name} = data;
            const knowledge = await prisma.knowledge.update({
                where:{
                    id: id,
                },
                data: {
                    name: name,
                }
            });

            if(!knowledge) throw Object.assign(new Error('Área do conhecimento não encontrada'), { status: 404});
            
            
            return knowledge;
        }
        catch(e){
            return e.message;
        }
    };

    static listAll = async () => {
        try{

            const knowledges = await prisma.knowledge.findMany();

            if(!knowledges) throw Object.assign(new Error('Universidades não encontradas'), { status: 404});

            return knowledges;
        }
        catch(e){
            return e.message;
        }
    };

    static list = async(data: any) => {

        try{

            const {id} = data;
            const knowledge = await prisma.knowledge.findUnique({
                where:{
                    id
                }
            });

            if(!knowledge) throw Object.assign(new Error('Universidade não encontrada'), { status: 404});

            return knowledge;
        }
        catch(e){
            return e.message;
        }
    };
}

export default KnowledgeService;
