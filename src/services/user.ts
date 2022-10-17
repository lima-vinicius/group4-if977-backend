import bcrypt from 'bcryptjs';
import * as jwt from '../utils/jwt';

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

require('dotenv').config();

class StudentService {
    static register = async (data: any) => {

        try {

            const { email } = data;

            const find = await prisma.studentUser.findUnique({
                where: {
                    email: data.email
                }
            })
            if (find == undefined) {
                data.password = bcrypt.hashSync(data.password, 8);

                const student = prisma.studentUser.create({
                    data
                }).finally(async () => await prisma.$disconnect())

                const accessToken = await jwt.default.signAccessToken(student)

                return { data, accessToken }

            }
            else if (find != undefined) {
                return "Student user yet exist, try again."
            }
        }
        catch (e) {
            return e
        }
    };

    static login = async (data: any) => {

        try {
            const { email, password } = data;

            const student = await prisma.studentUser.findUnique({
                where: {
                    email
                }
            });

            if (!student) {
                throw Object.assign(new Error('Estudante não encontrado'), { status: 404 })
            }
            const checkPassword = bcrypt.compareSync(password, student.password)
            if (!checkPassword) throw Object.assign(new Error('Email ou senha inválido'), { status: 401 })
            delete student.password
            const accessToken = await jwt.default.signAccessToken(student)

            return { accessToken }
        }
        catch (e) {
            return e
        }
    };

    static listAll = async () => {
        try {

            const students = await prisma.studentUser.findMany();

            if (!students) throw Object.assign(new Error('Estudantes não encontrados'), { status: 404 });

            return students;
        }
        catch (e) {
            return e.message;
        }
    };

    static list = async (data: any) => {

        try {

            const { id } = data;
            const student = await prisma.studentUser.findUnique({
                where: {
                    id
                }
            });

            if (!student) throw Object.assign(new Error('Estudante não encontrado'), { status: 404 });

            return student;
        }
        catch (e) {
            return e.message;
        }
    };


    static delete = async (data: any) => {

        try {

            const { id } = data;

            const student = await prisma.studentUser.delete({
                where: {
                    id: id,
                }
            });

            if (!student) throw Object.assign(new Error('Estudante não encontrado'), { status: 404 });


            return student;
        }
        catch (e) {
            return e.message;
        }
    };

    static update = async (data: any) => {

        try {

            const { id } = data;

            const student = await prisma.studentUser.update({
                where: {
                    id: id,
                },
                data: {
                    name: data.name,
                    address: data.address,
                    city: data.city,
                    country: data.country,
                }
            });

            if (!student) throw Object.assign(new Error('Estudante não encontrada'), { status: 404 });

            return student;
        }
        catch (e) {
            return e.message;
        }
    };
}


export default StudentService;