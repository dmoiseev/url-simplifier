import express from 'express';
import { nanoid } from 'nanoid-cjs';
import { URL } from 'url';

import { UrlModel } from '../models';

const router = express.Router();

router.post('/url', async (req, res) => {
    const { url } = req.body;

    try {
        const urlObj = new URL(url);
        const id = nanoid();

        const urlModel = new UrlModel({
            short: id,
            origin: urlObj.href
          });
  
        await urlModel.save();

        return res.json({ short: id })
    } catch(e) {
        res.status(400).json({ error: 'Invalid Url' });
    }
});

router.get('/:short', async (req, res) => {
    try {
        const { short } = req.params;
        const model = await UrlModel.where({ short }).findOne();

        if (model?.origin) {
            return res.redirect(301, model.origin);
        }

        res.status(404).json({ error: 'Not found' });
    } catch(e) {
        res.status(500).json({ error: 'Server Error' });
    }
})

export default router;
