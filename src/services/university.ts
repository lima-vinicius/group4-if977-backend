import bcrypt from 'bcryptjs';
import * as jwt from '../utils/jwt';

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

require('dotenv').config();

class UniversityService {
    static register = async (data: any) => {
        const {email} = data;
        data.password = bcrypt.hashSync(data.password, 8);

        const university = prisma.universityUser.create({
            data
        }).finally(async () => await prisma.$disconnect())

        const accessToken = await jwt.default.signAccessToken(university)

        return {
            data,
            accessToken
        }
    }
}


export default UniversityService;