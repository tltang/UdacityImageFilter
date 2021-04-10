import { Router, Request, Response } from 'express';
import {deleteLocalFiles, filterImageFromURL} from "../../../../util/util";

const router: Router = Router();

//basic test script
//router.get('/', async (req: Request, res: Response) => {
//    const items = req.params
//    res.send(items);
//});

router.get('/filteredimage', async (req, res) => {
    let { image_url } = req.query;

    if (!image_url)
        return res.status(400).send('image_url is required!');

    const filteredpath = await filterImageFromURL(image_url);

    res.status(200).sendFile(filteredpath, (err) => {
        deleteLocalFiles([filteredpath]);
    });

});

export const ImagesRouter: Router = router;
