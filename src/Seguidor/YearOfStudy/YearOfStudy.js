import React from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import Subject from '../Subject/Subject';
import Styles from './YearOfStudy.scss';
import cssModules from 'react-css-modules';

const YearOfStudy = ({subjects, year}) => (
  <div styleName="Container">
    <p styleName="Heading">Año {year}</p>
    <hr />
    {subjects.map((subject, i) =>
	  <div key={subject.id}>
	    <Subject name={subject.name} status={subject.status} />
	  </div>
	  )}
  </div>
);

export default cssModules(YearOfStudy, Styles, { allowMultiple: true });
