import React ,{ Component } from 'react';
import {
    RecommendWritterWrapper,
    RecommendWritterList,
} from '../style';

class Writer  extends Component{
    render(){
        return(
            <RecommendWritterWrapper>
                <div className='recTitle'>
                    <span className='recWritterFont'>推荐作者</span>
                    <a className='change-writter'>
                        <span className='iconfont change-icon'>&#xe851;</span>
                        换一批
                    </a>
                </div>
                <RecommendWritterList>
                    <a className='avatar'>
                        <img className='avatar-image' src="http://upload.jianshu.io/users/upload_avatars/3343569/6940ee65-036f-4b7a-9935-5915d9b67d14.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp"/>
                    </a>
                    <a className='follow'>
                        关注
                    </a>
                    <a className='name'>
                        吴晓步
                    </a>
                    <p className='write-desc'>
                        写了707.4k字 24.4k喜欢
                    </p>
                </RecommendWritterList>
            </RecommendWritterWrapper>
        )
    }
}

export default Writer;