import React from 'react'

const Breadcrumb = ({currentPage, parentPage}) => {
  return (
    <nav className="breadcrumb">
      <ol>
        <li><a href="/">Home</a></li>
        {parentPage && <li><a href={`/${parentPage}`}>Library</a></li> }
        <li>{currentPage}</li>
      </ol>
    </nav>
  );
};

export default Breadcrumb;