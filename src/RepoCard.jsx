import React from 'react';

export default function RepoCard({ repo }) {
  return (
    <a href={repo.html_url} target='_blank' rel='noopener noreferrer'>
      <div key={repo.id} className='card bg-secondary text-white'>
        <div class="card-body">
          <h5 className='card-title'>
            {repo.name}
          </h5>
        </div>
      </div>
    </a>
  )
}