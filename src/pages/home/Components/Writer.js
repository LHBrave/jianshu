import React ,{ Component } from 'react';
import { connect } from 'react-redux';
import {
    RecommendWritterWrapper,
    RecommendWritterList,
} from '../style';

class Writer  extends Component{
    render(){
        const { recommendWritter } = this.props;
        return(
            <RecommendWritterWrapper>
                <div className='recTitle'>
                    <span className='recWritterFont'>推荐作者</span>
                    <a className='change-writter'>
                        <span className='iconfont change-icon'>&#xe851;</span>
                        换一批
                    </a>
                </div>
                {
                    recommendWritter.map((item)=>{
                        return (
                            <RecommendWritterList>
                                <a className='avatar'>
                                    <img className='avatar-image' src={item.get('imageUrl')}/>
                                </a>
                                <a className='follow'>
                                    关注
                                </a>
                                <a className='name'>
                                    {item.get('name')}
                                </a>
                                <p className='write-desc'>
                                    写了{item.get('articleLetterNum')}字 {item.get('like')}k喜欢
                                </p>
                            </RecommendWritterList>
                        )
                    })
                }
            </RecommendWritterWrapper>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        recommendWritter: state.getIn(['home','recommendWritter'])
    }
};

export default connect(mapStateToProps,null)(Writer);