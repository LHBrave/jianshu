import { fromJS } from 'immutable';
const defaultValue = fromJS({
    topicList :[{
        id: 1,
        title: '动漫',
        imgUrl: 'https://upload-images.jianshu.io/upload_images/1211570-3e8c902ea136f554?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    },{
        id: 2,
        title: '手绘',
        imgUrl: 'https://upload-images.jianshu.io/upload_images/3369748-4113a39d40935560.jpg?imageMogr2/auto-orient/strip|imageView2/2/w/1200/format/webp'
    },{
        id: 3,
        title: '读书',
        imgUrl: 'https://upload-images.jianshu.io/upload_images/2320279-8a9ecad3a95e0c90.png?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    }],
    articleList:[
        {
            id: 1,
            title: '像极了爱情' ,
            desc: '啥是爱情？ 就像《啥是佩奇》一样。 我不知道，但我会主动地努力寻找。我问过好多人，他们有自己的理解和描述，我从中获得一些信息，我能感受到我在慢慢...',
            imageUrl: 'https://upload-images.jianshu.io/upload_images/14928065-10acc36022acc80b.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
        },
        {
            id: 2,
            title: '像极了爱情' ,
            desc: '啥是爱情？ 就像《啥是佩奇》一样。 我不知道，但我会主动地努力寻找。我问过好多人，他们有自己的理解和描述，我从中获得一些信息，我能感受到我在慢慢...',
            imageUrl: 'https://upload-images.jianshu.io/upload_images/14928065-10acc36022acc80b.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
        },
        {
            id: 3,
            title: '像极了爱情' ,
            desc: '啥是爱情？ 就像《啥是佩奇》一样。 我不知道，但我会主动地努力寻找。我问过好多人，他们有自己的理解和描述，我从中获得一些信息，我能感受到我在慢慢...',
            imageUrl: 'https://upload-images.jianshu.io/upload_images/14928065-10acc36022acc80b.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
        },
        {
            id: 4,
            title: '像极了爱情' ,
            desc: '啥是爱情？ 就像《啥是佩奇》一样。 我不知道，但我会主动地努力寻找。我问过好多人，他们有自己的理解和描述，我从中获得一些信息，我能感受到我在慢慢...',
            imageUrl: 'https://upload-images.jianshu.io/upload_images/14928065-10acc36022acc80b.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
        },
    ]

});

export const reducer = (state = defaultValue,action)=>{
    return state;
}