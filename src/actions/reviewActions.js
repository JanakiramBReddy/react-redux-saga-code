import  { createAction } from 'redux-actions';
import { reviewActions } from '../constants/actionTypes';

export const reviewSubmit = createAction(reviewActions.REVIEW_SUBMIT)