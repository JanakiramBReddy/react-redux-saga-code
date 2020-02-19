import {all,fork} from 'redux-saga/effects';

import reviewSaga from './reviewSaga';

export default function* root(){
    yield all([
        fork(reviewSaga)
    ])
}