import React from 'react';
import './App.css';

function App() {

  const [username, setUsername] = React.useState('');

  const [userRepos, setUserRepos] = React.useState([])
  const getRepo = () => {
    fetch(`https://api.github.com/users/${username}/repos`).then((response) => {
      return response.json()
    }).then((data) => {
      setUserRepos(data);
    })
  }

  return (
    <div className="App">
        <label>Enter username</label>
        <input name='username' onChange={(event) => setUsername(event.target.value)} value={username}/>
        <button onClick={getRepo}>Search Repositories</button>
        <table>
          <tbody>
          {userRepos.map((repo) => {
          return <tr key={repo.id}>
            <td>
              <a href={repo.html_url} target='_blank' rel='noopener noreferrer'>{repo.name}</a>
              </td>
            </tr>
          })}
          </tbody>
        </table>
        
    </div>
  
  );
}

export default App;
