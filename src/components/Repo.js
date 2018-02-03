import React from 'react';

const Repo = props => {
  const imageStyle = {
    position: 'relative',
    margin: '-1em',
    height: '100%',
    backgroundImage: `url(${props.repoIMG})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderRadius: '10px',
    zIndex: '1'
  };
  return (
    <div className="repo">
      <div className="repo-image" style={imageStyle} />

      <a href={props.repoURL} target="_blank" className="repo-content">
        <p>#{props.index + 1}</p>
        <h1>{props.name}</h1>
        <p>Forks: {props.forks}</p>
        <p>@{props.user}</p>
      </a>
    </div>
  );
};

export default Repo;
