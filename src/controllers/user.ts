import StudentService from '../services/user';

class StudentController {
    static register = async (req: any, res: any) => {
        try {

            const result = await StudentService.register(req.body);

            if (result.data != null) {
                res.status(200).json({

                    status: true,
                    message: "Student user created successfully",
                    result,
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

            const result = await StudentService.login(req.body)

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

export default StudentController;