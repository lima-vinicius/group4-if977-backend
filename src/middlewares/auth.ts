import * as jwt from '../utils/jwt';
import error from 'http-errors';

const auth = async (req: any, res: any, next: any) =>{
    if(!req.headers.authorization){
        return next(new error.Unauthorized('Access token is required'))
    }

    const token = req.headers.authorization.split(' ')[1]

    if(!token) {
        return next(new error.Unauthorized())
    }

    await jwt.default.verifyAccessToken(token).then((user: any) => {
        req.user = user
        next()
    }).catch ((e: any) => {
        next(new error.Unauthorized(e.message))
    })
}

export default auth