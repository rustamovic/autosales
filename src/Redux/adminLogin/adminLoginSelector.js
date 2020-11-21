import {createSelector} from "reselect";

const admin = state => state.admin;

export const adminLoginBeginMine = createSelector(
    [admin],
    state => state.adminLoginBegin
);

export const adminLoginSuccessMine = createSelector(
    [admin],
    state => state.adminLoginSuccess
);

export const addAdminLoginFailMine = createSelector(
    [admin],
    state => state.addAdminLoginFail
);

export const addAdminLoginSuccessMineSecond = createSelector(
    [admin],
    state => state.addAdminLoginSuccess
);