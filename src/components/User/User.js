import React from 'react';

const User = ({user, orgs, repos}) => (
    <div>
      <p>Name: {user.name}</p>
      <p>Company: {user.company}</p>
      {
        orgs.map(org => {
          return <div>
            <p>Organisation: {org.login}</p>
          </div>
        })
      }
      {
        repos.map(repo => {
          return <div>
            <p>Repository: {repo.name}</p>
          </div>
        })
      }
    </div>
);

export default User;