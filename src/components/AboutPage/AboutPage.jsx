import React from 'react';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="about container" id=''>
      <div>
        <h3>About</h3>
        <p>This app provides users with mountain biking trails, locations and user feedback data.</p>
        <p>Merp</p>
      </div>
    </div>
  );
}

export default AboutPage;
