import { constants } from '../store';
import axios from 'axios';
import { fromJS } from 'immutable';

export const searchFocus = ()=>({
    type: constants.SEARCH_FOCUS
});

export const searchBlur = ()=>({
    type: constants.SEARCH_BLUR
});

const changeList = (data)=>({
    type: constants.CHANGE_LIST,
    data: fromJS(data),
    totalPage: Math.ceil(data.length / 10)
});

export const getList = () =>{
    return (dispatch)=>{
        axios.get('api/headerList.json').then((res)=>{
            const response = res.data;
            dispatch(changeList(response.data));
        }).catch((err)=>{
            console.log(err);
        })
    }
};

export const mouseEnter = () => ({
    type: constants.MOUSE_ENTER
});

export const mouseLeave = ()=>({
    type: constants.MOUSE_LEAVE
});

export const changePage = (page)=>({
    type: constants.CHANGE_PAGE,
    page
})

