import KnowledgeService from '../services/knowledge';

class KnowledgeController {
    static register = async (req: any, res: any) => {
        try {

            const result = await KnowledgeService.register(req.body);

            if (result.data != null) {
                res.status(200).json({

                    status: true,
                    message: "Knowledge area created successfully",
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

            const result = await KnowledgeService.delete(req.body);

            if(result.id != null){
                res.status(200).json({
                    status: true,
                    message: "Área do conhecimento deletada com sucesso!",
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

export default KnowledgeController;
