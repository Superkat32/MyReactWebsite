import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';

function AboutPage() {
  return (
    <div className="fullScreenColoredSection">
      <div className="grid">
        <div>
          <SayingHello />
        </div>
        <div>
          <AboutMe />
        </div>
        <div>
          <MyLinks />
        </div>
      </div>
    </div>
  )
}

function SayingHello() {
  return(
    <>
    <div>
      <MyIcon />
    </div>
    <div className="avatarCompatSection">
      <h2>Hey there!</h2>
      <p>I'm Superkat32!</p>
    </div>
    </>
  )
}

function MyIcon() {
  return (
    <div className="avatarColoredSection">
      <img 
      className='avatar'
      src="https://avatars.githubusercontent.com/u/89557012?v=4"
      alt="Superkat's avatar"
      />
    </div>
  )
}

function AboutMe() {
  return (
    <div className="highlightColoredSectionBulletPoint">
      <ul>
        <li>I enjoy making high quality Fabric mods for Minecraft.</li>
        <li>I'm learning Java and Kotlin.</li>
        <li>I open source all of my work</li>
        <li>I also enjoy playing with other technologies, such as React.</li>
      </ul>
    </div>
  )
}

function MyLinks() {
  return (
    <>
      <div>
        <GithubIcon />
        <ModrinthIcon />
      </div>
      <div className="avatarCompatSection">
        <p>You can find my work here!</p>
        <div className="altColoredButton">
          <a href="https://modrinth.com/user/Superkat32">Modrinth</a>
        </div>
        <div className="altColoredButton">
          <a href="https://github.com/Superkat32">GitHub</a>
        </div>
      </div>
    </>
  )
}

function GithubIcon() {
  return (
    <div className="avatarColoredSection2">
      <img 
      className='avatar'
      src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
      alt="GitHub's logo"
      />
    </div>
  )
}

function ModrinthIcon() {
  return (
    <div className="avatarColoredSection3">
      <img 
      className='avatar'
      src="https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,format=auto,onerror=redirect,quality=80/uploads/publication/logo/a49f8e1b-3835-4ea1-a85b-118c6425ebc3/Modrinth_Dark_Logo.png"
      alt="Modrinth's logo"
      />
    </div>
  )
}


export default function App() {
  return (
    <div className="App">
      <h1 className="header">Superkat's Awesome Website</h1>
      <AboutPage />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

