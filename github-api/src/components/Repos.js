import React, { Component } from "react";

const Repos = ({ repositories }) => {
  return (
    <div className="repo-names">
      {repositories.map((repo) => (
        <div className="each-repo" key={repo.name}>
          <a href={repo.html_url} className="repo-link" target="_blank">
            {repo.name}
          </a>
        </div>
      ))}
    </div>
  );
};

export default Repos;
