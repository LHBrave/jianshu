import React,{ Component } from 'react';
import {
    WrapperHeader ,
    Logo,
    Nav,
    NavItem,
    NavSerach,
    Addtion,
    Button,
    SearchWrapper,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoItem,
} from './style';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { actionCreators }  from './store';


class Header extends Component {
    constructor(props){
        super(props);
    }

   getListArea = ()=>{
        const { list,page,totalPage,handleMouseEnter,handleMouseLeave,focused,mouseIn,handleChangePage} = this.props;
        const newList = list.toJS();
        const displayList = [];
        if(newList.length){
            if(page < totalPage){
                for(let i = (page - 1) * 10;i < page * 10;i++){
                    displayList.push(
                        <SearchInfoItem key = {newList[i]}>{newList[i]}</SearchInfoItem>
                    )
                }
            }else{
                for(let i = (page - 1) * 10; i < newList.length;i++){
                    displayList.push(
                        <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
                    )
                }
            }
        }
        if(focused || mouseIn){
            return(
                <SearchInfo
                    onMouseEnter = {handleMouseEnter}
                    onMouseLeave = {handleMouseLeave}
                >
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch onClick = {() => {handleChangePage(page,totalPage,this.spinIcon)}} >
                            <span ref={(icon)=>{this.spinIcon = icon}} className = "iconfont spin"> &#xe851;</span>
                            换一批
                        </SearchInfoSwitch>
                    </SearchInfoTitle>
                    {
                        displayList
                    }
                </SearchInfo>
            )
        }else{
            return null;
        }
    };

    render() {
        const { focused ,handleInputFocus,handleInputBlur,list} = this.props;
        return (
            <WrapperHeader>
                <Logo href='/'/>
                <Nav>
                    <NavItem className = 'left active'>首页</NavItem>
                    <NavItem className = 'left'>下载</NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            in = {focused}
                            timeout = {200}
                            classNames = 'slide'
                        >
                            <React.Fragment>
                                <NavSerach
                                    className = {focused ? 'focused' : ''}
                                    onFocus = {()=>handleInputFocus(list)}
                                    onBlur = {handleInputBlur}
                                />
                                <span
                                    className = {focused ? 'focused iconfont zoom' : 'iconfont zoom'}
                                >
                                    &#xe64d;
                                </span>
                                {this.getListArea(focused)}
                            </React.Fragment>
                        </CSSTransition>
                    </SearchWrapper>
                    <NavItem className = 'right' >登陆</NavItem>
                    <NavItem className = 'right'>
                        <span className="iconfont">&#xe636;</span>
                    </NavItem>
                </Nav>
                <Addtion>
                    <Button className = 'writting'>
                        <span className="iconfont">&#xe615;</span>
                        写文章
                    </Button>
                    <Button className = 'reg'>注册</Button>
                </Addtion>
            </WrapperHeader>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        focused: state.getIn(['header','focused']),
        list: state.getIn(['header','list']),
        totalPage: state.getIn(['header','totalPage']),
        page: state.getIn(['header','page']),
        mouseIn: state.getIn(['header','mouseIn'])
    }
};

const mapDispatchToProps = (dispatch) =>{
    return {
        handleInputFocus(list){
            (list.size === 0) && dispatch(actionCreators.getList());
            dispatch(actionCreators.searchFocus());
        },
        handleInputBlur(){
            dispatch(actionCreators.searchBlur());
        },
        handleMouseEnter(){
            dispatch(actionCreators.mouseEnter());
        },
        handleMouseLeave(){
            dispatch(actionCreators.mouseLeave());
        },
        handleChangePage(page,totalPage,spin){
            let originAngle = spin.style.transform.replace(/[^0-9]/ig,'');
            if(originAngle){
                originAngle = parseInt(originAngle,10);
            }else{
                originAngle = 0;
            }
            spin.style.transform = `rotate(${originAngle + 360}deg)`;
            if(page < totalPage){
                page += 1;
                dispatch(actionCreators.changePage(page));
            }else{
                dispatch(actionCreators.changePage(1));
            }
        }
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Header);