import {all,put,takeLatest} from 'redux-saga/effects';
import {reviewActions} from '../constants/actionTypes';

export function* reviewSubmit(args){
        yield put({
            type:reviewActions.REVIEW_SUBMIT,
            payload:args.payload
        })
    
}

export default function* root(){
    yield all([
        takeLatest(reviewActions.REVIEW_SUBMIT,reviewSubmit)
    ])
}