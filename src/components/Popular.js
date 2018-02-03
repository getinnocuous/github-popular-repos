import React, { Component } from 'react';
import SelectLanguage from './SelectLanguage';
import Repo from './Repo';
import api from '../util/api';
import Spinner from 'react-spinkit';

class Popular extends Component {
  state = {
    selectedLanguage: 'All',
    repos: null,
    loaded: false
  };
  componentDidMount() {
    this.selectLanguage(this.state.selectedLanguage);
  }
  selectLanguage = selectedLang => {
    this.setState(
      {
        selectedLanguage: selectedLang,
        loaded: false
      },
      () => {
        api.fetchPopularRepos(this.state.selectedLanguage).then(repos => {
          this.setState({ repos: repos, loaded: true });
        });
      }
    );
  };
  render() {
    return (
      <div className="Popular">
        <p>
          Showing repos for&nbsp;
          <SelectLanguage
            selectedLanguage={this.state.selectedLanguage}
            selectLanguage={this.selectLanguage}
          />
        </p>
        <div className="repo-grid">
          {this.state.loaded ? (
            this.state.repos.map((repo, index) => {
              return (
                <Repo
                  index={index}
                  key={repo.name}
                  forks={repo.forks}
                  name={repo.name}
                  repoURL={repo.html_url}
                  repoIMG={repo.owner.avatar_url}
                  user={repo.owner.login}
                />
              );
            })
          ) : (
            <Spinner name="circle" />
          )}
        </div>
        <p className="disclaimer">
          Inpsired from a{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://tylermcginnis.com/"
          >
            Tyler Mcginnis
          </a>{' '}
          tutorial.
        </p>
      </div>
    );
  }
}

export default Popular;
