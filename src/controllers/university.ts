import universityService from '../services/university';
import error from 'http-errors';

class UniversityController {
    static register = async (req: any, res: any, next: any) => {
        try {

            const result = await universityService.register(req.body);

            if (result.data != null) {
                res.status(200).json({

                    status: true,
                    message: "University user created successfully",
                    data: result
                })
            }
            else {
                res.status(409).json({
                   
                    message: result
                })
            }

        }
        catch (e) {
            return (e.statusCode, e.message)
        }
    }
}

export default UniversityController;