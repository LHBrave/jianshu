import React ,{ Component } from 'react';
import { HomeWrapper ,HomeLeft,HomeRight} from './style';
import Topic from './Components/Topic';
import List from './Components/List';
import Recommend from './Components/Recommend';
import Writer from './Components/Writer';


class Home  extends Component{
    render(){
        return(
            <HomeWrapper>
                <HomeLeft>
                    <img className='banner-img' src="https://upload-images.jianshu.io/upload_images/1202579-bffcce7ac5b5d054?imageMogr2/auto-orient/strip|imageView2/2/w/640/format/webp"/>
                    <Topic>

                    </Topic>
                    <List></List>
                </HomeLeft>
                <HomeRight>
                    <Recommend></Recommend>
                    <Writer></Writer>
                </HomeRight>
            </HomeWrapper>
        )
    }
}

export default Home;