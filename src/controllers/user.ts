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
    };

    static listAll = async (req: any, res:any) => {
        try{

            const result = await StudentService.listAll();

            if(result != null){
                res.status(200).json({
                    status: true,
                    message: "Estudantes encontrados com sucesso!",
                    result: result,
                })
            }
            else{
                res.status(404).json({
                    message: "Estudantes não encontrados"
                })
            }
        }
        catch(e){
            return (e.statusCode, e.message);
        }
    };

    static list = async (req: any, res: any) => {
        try {

            const result = await StudentService.list(req.body);

            if(result.id != null){
                res.status(200).json({
                    status: true,
                    message: "Estudante encontrado com sucesso!",
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

            const result = await StudentService.delete(req.body);
            
            if(result.id != null){
                res.status(200).json({
                    status: true,
                    message: "Estudante deletado com sucesso!",
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

    static update = async (req: any, res: any) => {
        try {

            const result = await StudentService.update(req.body);


            if(result.id != null){
                res.status(200).json({
                    status: true,
                    message: "Usuário atualizado com sucesso!",
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

export default StudentController;