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

    static update = async (req: any, res: any) => {
        try {

            const result = await KnowledgeService.update(req.body);
            
            if(result.id != null){
                res.status(200).json({
                    status: true,
                    message: "Área do conhecimento atualizada com sucesso!",
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

            const result = await KnowledgeService.listAll();

            if(result != null){
                res.status(200).json({
                    status: true,
                    message: "Áreas do conhecimento encontradas com sucesso!",
                    result: result,
                })
            }
            else{
                res.status(404).json({
                    message: "Áreas do conhecimento não encontradas"
                })
            }
        }
        catch(e){
            return (e.statusCode, e.message);
        }
    };

    static list = async (req: any, res: any) => {
        try {

            const result = await KnowledgeService.list(req.body);

            if(result.id != null){
                res.status(200).json({
                    status: true,
                    message: "Área do conhecimento encontrada com sucesso!",
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
