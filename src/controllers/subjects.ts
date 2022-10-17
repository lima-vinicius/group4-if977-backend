import SubjectService from '../services/subjects';

class SubjectController {
    static register = async (req: any, res: any) => {
        try {

            const result = await SubjectService.register(req.body);

            if (result.data != null) {
                res.status(200).json({

                    status: true,
                    message: "Subject of Knowledge area created successfully",
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


    static delete = async (req: any, res: any) => {
        try {

            const result = await SubjectService.delete(req.body);
            
            if(result.id != null){
                res.status(200).json({
                    status: true,
                    message: "Assunto da Área do conhecimento deletada com sucesso!",
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

            const result = await SubjectService.update(req.body);

            if(result.id != null){
                res.status(200).json({
                    status: true,
                    message: "Assunto da Área do conhecimento atualizado com sucesso!",
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
             

    static listAll = async (req: any, res:any) => {
        try{

            const result = await SubjectService.listAll();

            if(result != null){
                res.status(200).json({
                    status: true,
                    message: "Assuntos encontrados com sucesso!",
                    result: result,
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

export default SubjectController;