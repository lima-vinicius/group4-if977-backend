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

    static delete = async(data: any) => {

        try{

            const {id} = data;
            const student = await prisma.subject.delete({
                where:{
                    id: id,
                }
            });

            if(!student) throw Object.assign(new Error('Assunto da Área do conhecimento não encontrada'), { status: 404});

            return student;
            
            }
        catch(e){
            return e.message;
        }
    };

    static update = async(data: any) => {

        try{

            const {id, name} = data;
            const subject = await prisma.subject.update({
                where:{
                    id: id,
                },
                data: {
                    name: name,
                }
            });

            if(!subject) throw Object.assign(new Error('Assunto da Área do conhecimento não encontrada'), { status: 404});

            return subject;
          }
        catch(e){
            return e.message;
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