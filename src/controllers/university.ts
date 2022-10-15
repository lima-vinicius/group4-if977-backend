import universityService from '../services/university';
import error from 'http-errors';

class UniversityController {
     static register = async (req: any, res: any, next: any) =>{
        try{

            const university = await universityService.register(req.body);
            res.status(200).json({

                status: true,
                message: "University user created successfully",
                data: university
            })
        }
        catch(e){
            next(error(e.statusCode, e.message))
        }
     }
}

export default UniversityController;