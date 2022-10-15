import jwt from 'jsonwebtoken';
import error from 'http-errors';
import { resolve } from 'path';
require('dotenv').config()

const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET

async function signAccessToken(payload: any){
    return new Promise((resolve, reject)=>{
        jwt.sign({payload}, accessTokenSecret, {

        }, (err: any, token: any) => {
            
            if(err){
                reject(new error.InternalServerError())
            }
            resolve(token)
        })
    })
}

async function verifyAccessToken(token:any){
    return new Promise((resolve, reject) => {
        jwt.verify(token, accessTokenSecret, (err: any, payload: any) => {
            if(err){
                const message = 
                err.name == 'JsonWebTokenError' ? 'Unauthorized': err.message

                return reject(new error.Unauthorized(message))
            }
            resolve(payload)
        })
    })
}

const functions = {
    signAccessToken,
    verifyAccessToken
}

export default functions


