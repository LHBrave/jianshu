import styled from 'styled-components';

export const HomeWrapper = styled.div`
    overflow: hidden;
    width: 960px;
    margin: 0 auto;
    .banner-img{
        width: 625px;
        height: 270px;
    }
`;

export const HomeLeft = styled.div`
    width: 625px;
    float: left;
    padding-top: 30px;
    margin-left: 15px;
`;

export const HomeRight = styled.div`
    width: 280px;
    float: right;  
`;

export const TopicWrapper = styled.div`
    overflow: hidden;
    padding: 20px 0 10px 0;
    margin-left: -18px;
    border-bottom: 1px solid #f0f0f0;

`;

export const TopicItem = styled.div`
    float: left;
    height: 32px;
    background: #f7f7f7;
    line-height: 32px;
    font-size: 14px;
    color: #000;
    margin-left: 18px;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    padding-right: 10px;
    margin-bottom: 18px;
    .topic-pic{
        display: block;
        float: left;
        width: 32px;
        height: 32px;
        margin-right: 10px;
    }  
`;

export const ListWrapper = styled.div`
    width: 625px;
    height:  160px;
    overflow: hidden;
    margin: 0 0 15px;
    padding: 15px 2px 20px 0;
    border-bottom: 1px solid #f0f0f0;
    box-sizing: border-box;
    .list-img{
        width: 150px;
        height: 100px;
        float: right;
    }
`;

export const ListContent = styled.div`
    padding-right: 165px;
`;

export const ListTitle = styled.a`
    color: #333333;
    margin-bottom: 4px;
    font-size: 18px;
    font-weight: 700;
    line-height: 1.5
`;

export const ListAbstract = styled.div`
    color: #999999;
    font-size: 13px;
    margin-bottom: 8px;
    line-height: 24px;
`;

export const ListSocial = styled.div`
    font-size: 12px;
    line-height: 20px;
`;

export const IconSocial = styled.span`
    margin-right: 10px;
    .icon-font{
        color: #B4B4B4;
    }
`;

export  const ReadMore = styled.a`  
    display: block;
    border-radius:20px;
    background-color: #a5a5a5;
    height: 40px;
    box-sizing: border-box;
    margin: 30px auto 60px;
    padding: 10px 15px;
    text-align: center;
    font-size: 15px;
    color: #fff;
`;

export const RecommendWrapper = styled.div`
    margin: 30px 0;
`;

export  const RecommendItem = styled.a`
    display: block;
    width: 280px;
    height: 50px;
    background: url(${props => props.imageUrl});
    margin: 0 0 6px;
    border-radius: 4px;
    background-size: contain;
`;

//下载简书App模块样式
export const DownloadMobileJS = styled.a`
    display: block;
    margin-bottom: 30px;
    padding: 10px 22px;
    border: 1px solid #f0f0f0;
    border-radius: 6px;
    background-color: #fff;
    .QRCode-image{
        width: 60px;
        height: 60px;
        opacity: .85;
        vertical-align: middle;
    }
`;

export const  DownloadMobileInfo = styled.div`
    display: inline-block;
    margin-left: 7px;
    vertical-align: middle;
`;

export const DownloadMobileTitle = styled.div`
    font-size: 15px;
    color: #333;
`;

export const DownloadMobileDesc = styled.div`
    margin-top: 4px;
    font-size: 13px;
    color: #999;
`;

//推荐作者模块样式
export const RecommendWritterWrapper = styled.div`
    font-size: 13px;
    margin-bottom: 20px;
    .recTitle{
        overflow: hidden;
    }
    .recWritterFont{
        float: left;
        font-size: 14px;
        color: #969696;
    }
    .change-writter{
        float: right;
        display: inline-block;
        font-size: 14px;
        color: #969696;
    }
    .change-icon{
        line-height: 1;
        display: inline-block;
        margin-right: 4px;
        font-size: 14px;
    }
`;

export const RecommendWritterList = styled.div`
    margin-top: 15px;
    overflow: hidden;
    .avatar{
        float: left;
        width: 48px;
        height: 48px;
        margin-right: 10px;
        .avatar-image{
            width: 48px;
            height: 48px;
            border-radius: 50%;
            border: 1px solid #ddd;
            vertical-align: middle;
        }
    }
    .follow{
         float: right;
         font-size: 13px;
         margin-top: 5px;
         color: #42c02e;
         border-color: #42c02e;       
    }
    .name{
        display: block;
        padding-top: 5px;
        font-size: 14px;
        display: block;
    }
    .write-desc{
        margin-top: 2px;
        font-size: 12px;
        color: #969696;   
        overflow: hidden;
    }
`;


