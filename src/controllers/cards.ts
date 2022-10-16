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
    }
}

export default CardController;