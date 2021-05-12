// listening for every function of a specific type that we pass to it
import { takeLatest, call, put } from 'redux-saga/effects';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
import {
    fetchCollectionsSuccess,
    fetchCollectionsFailure
} from './shop.actions';
import ShopActionTypes from './shop.types';
// function generator

// function pauses on the yield. Its going to the next state after .next()
export function* fetchCollectionAsync() {
    // We have to use a lot of yields, because we can stop this function,
    // in more places in case that we wouldn't call it twice.
    // and we have more controle
try {
    const collectionRef = firestore.collection('collections');
    // like async await
    const snapshot = yield collectionRef.get();
    // call just takes function as a first argument, and as a second argument takes
    // some value that needs to be passed into this function
    const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot);
    // put is another saga parameter, it works the same as disptach
    yield put(fetchCollectionsSuccess(collectionsMap))
    // the same code
        // collectionRef.get().then(snapshot => {
        //  const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        //  dispatch(fetchCollectionsSuccess(collectionsMap));
        // }).catch(error => dispatch(fetchCollectionsFailure(error.message)));
    } catch (error) {
        yield put(fetchCollectionsFailure(error.message))
    }

}
// take every creates a non blocking call in order to not stop our application
// to continue running either other sagas
export function* fetchCollectionsStart() {
    yield takeLatest(ShopActionTypes.FETCH_COLLECTIONS_START, fetchCollectionAsync);
}