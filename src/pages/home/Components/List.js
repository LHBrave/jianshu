import React ,{ Component } from 'react';
import { connect } from 'react-redux';
import  {
    ListWrapper,
    ListTitle,
    ListContent,
    ListAbstract,
    ListSocial,
    IconSocial,
    ReadMore
} from '../style';
import {Button} from "../../../common/header/style";

class List  extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const { articleList } = this.props;
        return(
       <div>
           {
               articleList.map((item) => {
                   return (
                       <ListWrapper key={item.get('id')}>
                           <img className='list-img' src={item.get('imageUrl')}/>
                           <ListContent>
                               <ListTitle>
                                   {item.get('title')}
                               </ListTitle>
                               <ListAbstract>
                                   {item.get('desc')}
                               </ListAbstract>
                               <ListSocial>
                                   <IconSocial>
                                       <span className="iconfont icon-font">&#xeaee;</span>
                                       <span className="icon-font">23.1</span>
                                   </IconSocial>
                                   <IconSocial>
                                       <span className="iconfont icon-font ">&#xe60b;</span>
                                       <span className="icon-font">852</span>
                                   </IconSocial>
                                   <IconSocial>
                                       <span className="iconfont icon-font">&#xe62a;</span>
                                       <span className="icon-font">124</span>
                                   </IconSocial>
                               </ListSocial>
                           </ListContent>
                       </ListWrapper>
                   )
               })
           }
           <ReadMore>阅读更多</ReadMore>
            </div>

        )
    }
}

export const MapStateToProps = (state)=>{
    return {
        articleList: state.getIn(['home','articleList'])
    }
};
export default connect(MapStateToProps,null)(List);