import React, { Component } from 'react';
import styles from './PageTemplate.scss';
import classNames from 'classnames/bind';

/** page template을 위한 컴포넌트. 페이지 틀, 타이틀/콘텐츠 등의 속성 설정 */

const cx = classNames.bind(styles);

const PageTemplate = ({children}) => {
    return (
        <div className = {cx('page-template')}>
            <h1>일정 관리</h1>
            <div className={cx('content')}>
                {children}
            </div>
        </div>
    );
};

export default PageTemplate;