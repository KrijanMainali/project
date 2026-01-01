import express from 'express';

const router = express.Router();

const userRouter = router.route('/api/user').get().post();

export default userRouter;
