import React from 'react';
const languages = [
  'All',
  'JavaScript',
  'Java',
  'Python',
  'CSS',
  'PHP',
  'Ruby',
  'C++',
  'C',
  'Shell',
  'C#',
  'Objective-C'
];
const SelectLanguage = props => {
  const { selectLanguage } = props;
  return (
    <select onChange={e => selectLanguage(e.target.value)}>
      {languages.map(language => {
        return (
          <option key={language} value={language}>
            {language}
          </option>
        );
      })}
    </select>
  );
};

export default SelectLanguage;
