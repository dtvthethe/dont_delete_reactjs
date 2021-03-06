import { TODO_FETCH_SUCCESS, TODO_FETCH_FAIL } from '../actions/todoType';

const todoReducer = (data = {products: [], is_loading: true}, action) => {
    switch(action.type) {
        // ko cần `TODO_FETCH` vì sẽ được gọi trong saga
        // đây là dữ liệu sẽ hiển thị ra view
        case TODO_FETCH_SUCCESS:
            return {
                data: action.data,
                is_loading: false
            }
        case TODO_FETCH_FAIL:
            return {
                is_loading: true,
                error: action.error,
            }
        default:
            return data;
    }
}

export default todoReducer;
