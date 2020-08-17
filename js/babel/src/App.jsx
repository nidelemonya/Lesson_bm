import React from 'react';
// import './style.css';
import styles from './style.css';

export default function App() {
    return (
        <div 
        // className="swiper-container"
        className={styles['swiper-container']}
        >
            {/* { 只能这样找 } */}
            {/* 这里是在 dist 目录上查找 */}
            {/* http:baidu.com/a/b/index.html */}
            {/* ./ http:baidu.com/a/b/lemon.png */}
            {/* /  http:baidu.com/lemon.png */}
            <img src="/lemon.png" alt="图片加载出错"></img>
            this is app hello lemon
        </div>
    )
}