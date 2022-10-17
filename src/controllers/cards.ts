import CardService from '../services/cards';

class CardController {
    static register = async (req: any, res: any) => {
        try {

            const result = await CardService.register(req.body);

            if (result.data != null) {
                res.status(200).json({

                    status: true,
                    message: "Card created successfully",
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

            const result = await CardService.update(req.body);

            if(result.id != null){
                res.status(200).json({
                    status: true,
                    message: "Card atualizado com sucesso!",
                    result: result
                
                })
            }
             else{
                    res.status(404).json({
                        message: result,
                        message: "Cards não encontrados"

                    })
                }
            }
            catch(e){
                return (e.statusCode, e.message);
            }
    };
                    
    static listAll = async (req: any, res:any) => {
        try{

            const result = await CardService.listAll();

            if(result != null){
                res.status(200).json({
                    status: true,
                    message: "Cards encontrados com sucesso!",
                    result: result,
                })
            }
            else{
                res.status(404).json({
                    message: result,
                    message: "Cards não encontrados"

                })
            }
        }
        catch(e){
            return (e.statusCode, e.message);
        }
    };
}

export default CardController;