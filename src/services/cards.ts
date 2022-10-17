import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

require('dotenv').config();

class CardService {
    static register = async (data: any) => {

        try {

            const { title } = data;

            const find = await prisma.card.findFirst({
                where: {
                    title: data.title
                }
            })
            if (find == undefined) {

                const subject = prisma.card.create({
                    data
                }).finally(async () => await prisma.$disconnect())


                return {data};

            }
            else if (find != undefined) {
                return "Card yet exist, try again."
            }
        }
        catch (e) {
            return e
        }
    };

    static delete = async(data: any) => {

        try{

            const {id} = data;
            const student = await prisma.card.delete({
                where:{
                    id: id,
                }
            });

            if(!student) throw Object.assign(new Error('Card não encontrado'), { status: 404});

            return student;
            
            }
        catch(e){
            return e.message;
        }
    };
            
    static update = async(data: any) => {

        try{

            const {id, title, question, answer} = data;
            const card = await prisma.card.update({
                where:{
                    id: id,
                },
                data: {
                    title: title,
                    question: question,
                    answer: answer,

                }
            });

            if(!card) throw Object.assign(new Error('Card não encontrada'), { status: 404});

            return card;
         
        }
        catch(e){
            return e.message;
        }
    };

    static listAll = async () => {
        try{

            const cards = await prisma.card.findMany();

            if(!cards) throw Object.assign(new Error('Cards não encontrados'), { status: 404});

            return cards;
        }
        catch(e){
            return e.message;
        }
    };
}

export default CardService;