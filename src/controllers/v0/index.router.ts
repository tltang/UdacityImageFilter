import { Router, Request, Response } from 'express';
import {ImagesRouter} from "./images/routes/image.router";

const router: Router = Router();

router.use('/images', ImagesRouter);

router.get('/', async (req: Request, res: Response) => {
    res.send(`V0`);
});

export const IndexRouter: Router = router;
