import React from 'react';

interface Props {
    title: string;
}

const Header = (props: Props) => {
    return (
        <div className="list-books-title">
            <h1>{ props.title }</h1>
        </div>
    )
}

export default Header;