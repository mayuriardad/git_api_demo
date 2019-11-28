import React from 'react';
import './App.css';
import RepoCard from './RepoCard';

function App() {

  const [username, setUsername] = React.useState('');
  const [userRepos, setUserRepos] = React.useState([])

  const [isUsernameValid, setisUsernameValid] = React.useState(true)
  const getRepo = () => {
    if (!username) {
      setisUsernameValid(false)
    }
    fetch(`https://api.github.com/users/${username}/repos`).then((response) => {
      return response.json()
    }).then((data) => {
      setUserRepos(data);
    })
  }

  const handleChange = (event) => {
    if (event.target.value) {
      setisUsernameValid(true)
    }
    setUsername(event.target.value)
  }

  return (
    <div className='container'>
      <div className="form-group w-50">
        <label>Enter username:</label>
        <input className='form-control' type='text' name='username' onChange={handleChange} value={username} />
      </div>
      {!isUsernameValid && <h5 className='text-danger'>Please enter valid username</h5>}
      <div>
        <button className="btn btn-primary mb-1" onClick={getRepo}>Search Repositories</button>
        {!!userRepos.length &&
          <>
            <h5 className='mb-1'>{`Public Repositories of ${username}`}</h5>
            <div class="row">
              {userRepos.map((repo, index) => {
                return <>
                  <div className='col-6 mt-2' key={repo.id}>
                    <RepoCard repo={repo} />
                  </div>
                  {(index + 1) % 2 === 0 && <div className='w-100'></div>}
                </>
              })}
            </div>
          </>}
      </div>
    </div>
  );
}

export default App;
