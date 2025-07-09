import express from 'express';
import { addActivity, getActivities } from '../controllers/activityController';

export const activityRouter = express.Router();

activityRouter.post('/', addActivity);
activityRouter.get('/', getActivities);
