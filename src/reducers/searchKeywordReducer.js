// import axios from "axios";

export const searchKeyword = {
    keyword : ''
}

const baseURL = "http://localhost:3000/search/";

export const reducer = (state, action) => {
    switch(action.type) {
        case "search":
            searchKeyword.keyword = action.value;
            window.location.href = `${baseURL}${searchKeyword.keyword}`;
            return{...state, keyword: action.value};
        default:
            return state;
    }
}

