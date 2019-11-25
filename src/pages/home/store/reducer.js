import { fromJS } from 'immutable';
import { constants } from '../store';
const defaultValue = fromJS({
    topicList :[],
    articleList:[],
    recommendWritter: []
});

export const reducer = (state = defaultValue,action)=>{
    switch (action.type) {
        case constants.GET_HOME_PAGE_DATA:
            return state.merge({
                topicList: action.topicList,
                articleList: action.articleList,
                recommendWritter: action.recommendWritter
            });
        default:
            return state;
    }
}