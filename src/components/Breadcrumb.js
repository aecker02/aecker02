import React from 'react'
import { toTitleCase } from '../utils/helpers'

const Breadcrumb = ({currentPage, parentPage}) => {
  return (
    <nav className="breadcrumb">
      <ol>
        <li><a href="/">Home</a></li>
        {parentPage && <li><a href={`/${parentPage}`}>{toTitleCase(parentPage)}</a></li> }
        <li>{toTitleCase(currentPage)}</li>
      </ol>
    </nav>
  );
};

export default Breadcrumb;