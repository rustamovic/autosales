import {createSelector} from "reselect";

const seller = state => state.seller;

export const sellerDataMine = createSelector(
    [seller],
    state => state.sellerData
);

export const countMine = createSelector(
    [seller],
    state => state.count
);