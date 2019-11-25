import axios  from 'axios';
import { constants } from '../store';
import { fromJS } from 'immutable';

const getHomeDataAction = (result)=>({
    type: constants.GET_HOME_PAGE_DATA,
    articleList: fromJS(result.articleList),
    topicList: fromJS(result.topicList),
    recommendWritter: fromJS(result.recommendWritter)
});

export const getHomeData = ()=>{
    return (dispatch) =>{
        axios.get('/api/homeData.json')
            .then((res)=>{
                dispatch(getHomeDataAction(res.data.data));
            })
            .catch((err)=>{
                console.log(err);
            })
    }
};