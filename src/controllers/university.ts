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
    };

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
    };

    static listAll = async (req: any, res:any) => {
        try{

            const result = await universityService.listAll();

            if(result != null){
                res.status(200).json({
                    status: true,
                    message: "Universidade encontradas com sucesso!",
                    result: result,
                })
            }
            else{
                res.status(404).json({
                    message: "Universidades não encontradas"
                })
            }
        }
        catch(e){
            return (e.statusCode, e.message);
        }
    };

    static list = async (req: any, res: any) => {
        try {

            const result = await universityService.list(req.body);

            if(result.id != null){
                res.status(200).json({
                    status: true,
                    message: "Universidade encontrada com sucesso!",
                    result: result
                })
            }
            else{
                res.status(404).json({
                    message: result,
                })
            }
        }
        catch(e){
            return (e.statusCode, e.message);
        }
    };

    static delete = async (req: any, res: any) => {
        try {

            const result = await universityService.delete(req.body);

            if(result.id != null){
                res.status(200).json({
                    status: true,
                    message: "Universidade deletada com sucesso!",
                    result: result
                })
            }
            else{
                res.status(404).json({
                    message: result,
                })
            }
        }
        catch(e){
            return (e.statusCode, e.message);
        }
    };
}

export default UniversityController;