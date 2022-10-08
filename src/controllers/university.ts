import universityService from '../services/university';

class UniversityController {
    static register = async (req: any, res: any) => {
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

    static login = async (req:any, res:any ) => {
        try {

            const result = await universityService.login(req.body)

            if(result.accessToken != null){
                res.status(200).json({
                    status: true,
                    message: "Login realizado com sucesso!",
                    result
                })
            }
            else{
                res.status(result.status).json({
                    message: result
                })
            }
           
        }
        catch (e){
            return (e.statusCode, e.message)
        }
    }
}

export default UniversityController;