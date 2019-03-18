import * as Type from "./actionsTypes";
import * as routers from "../../../constants/routers";

const INITAL_STATE = {
    byId: { url: routers.ROOT, stateInitial: {} }
};

export default function (state = INITAL_STATE, action) {
    switch (action.type) {
        case Type.NAVIGATION: {
            return {
                ...state,
                byId: { url: action.url, stateInitial: action.stateInitial },
            }
        }
        default:
            return state;
    }
};

export const getUi = (state) => state.ui.navigation;