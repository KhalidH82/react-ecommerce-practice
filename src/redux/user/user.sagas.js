import { takeLatest, put, all, call } from "redux-saga/effects";
import UserActionTypes from "./user.types";
import { googleSignInSuccess, googleSignInFailure } from "./user.actions";

import {
  googleProvider,
  auth,
  createUserProfileDocument,
} from "../../firebase/firebase.utils";
import { optimize } from "webpack";

export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    const userRef = yield call(createUserProfileDocument, user);
    const userSnapShot = yield userRef.get();
    yield put(
      googleSignInSuccess({
        id: userSnapShot.id,
        ...userSnapShot.data(),
      })
    );
  } catch (error) {
    yield put(googleSignInFailure(error));
  }
}

export default function* onGoogleSignInStart() {
  yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* userSagas() {
  yield all([call(onGoogleSignInStart)]);
}
