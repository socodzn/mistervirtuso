import React from 'react'
import style from './header.module.css';
import Link from 'next/link';

const Header: React.FC = () => {
    return (
        <>
        <div className={style['header-container']}>
            <Link href='/'className={style['header-link-left']}>home</Link>
            <div>
                <Link href='/resume' className={style['header-link-resume']}>shop</Link>
                <Link href='/looks'className={style['header-link-contact']}>looks</Link>
            </div>
        </div>
        </>
    );
};

export default Header ;

