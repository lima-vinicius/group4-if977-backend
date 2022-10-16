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
    }
}

export default SubjectController;