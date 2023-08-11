import './App.css';
import React from 'react';

// First highlighted ara

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
          <a href="https://github.com/Superkat32">GitHub</a>
        </div>
        <div className="altColoredButton">
          <a href="https://modrinth.com/user/Superkat32">Modrinth</a>
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

const PROJECTS = [
  {project: "Broken Lead Warner", category: "fabricmod", icon: "https://cdn.modrinth.com/data/29RFArLV/d29ad4c8448761c3db2e5c2759bc541c5df6d68a.png", imgalt: "Broken Lead Warner icon", desc: "A simple mod which alerts you if your lead breaks."},
  {project: "Explosive Enhancement", category: "fabricmod", icon: "https://cdn.modrinth.com/data/OSQ8mw2r/88f44e9ed022061b1eb865996b2f98fe01937de6.png", imgalt: "Explosive Enhancement icon", desc: "Makes the explosion effect cooler! Even includes an API!"},
  {project: "Postmortal Particles", category: "fabricmod", icon: "https://cdn.modrinth.com/data/5km6gS6P/856c44060b5570eb1278c1ac18bc9b2db10754ea.png", imgalt: "Postmortal Particles icon", desc: "Overhauls the totem of undying effect! "},
  {project: "Sparking Strikes", category: "fabricmod", icon: "https://cdn.modrinth.com/data/y3xdomkH/ac8c3c9da8b58ac27c7925469575a0afd984d239.png", imgalt: "Sparkling Strikes icon", desc: "Adds fun, customizable particles whenever landing a strike on a foe!"},
  {project: "You Were Slain", category: "fabricmod", icon: "https://cdn.modrinth.com/data/SfSneJdD/029b73b8938990803ae43803e6e2896ad15aeee6.png", imgalt: "You Were Slain icon", desc: "Customize the death screen unlike ever before!"},
  {project: "Hampter", category: "fabricmod", icon: "https://cdn.modrinth.com/data/9UqguhZC/a9cb1208f61d68baedc8f40cb81ede63375d309b.png", imgalt: "Hampter icon", desc: "Adds the one and only Hampter to Minecraft!"}
]


// Second highlighted ara
function MyProjects({ projects }) {
  const myprojects = [];
  projects.forEach((project) => {
    myprojects.push(
      // <ProjectIcon icon={project.icon} key={project.icon} />
      <Project project={project} key={project} />
    );
  });

  return (
    <div className="fullScreenColoredSection">
      {/* <h1 className="header">My Projects</h1>
      <h3>All here for you to see!</h3> */}
      <h1>Minecraft Fabric Mods</h1>
      <div className="grid">
          {myprojects}
      </div>
    </div>
  )
}

function Project({ project }) {
  return(
    <>
    <div>
      <div>
        <ProjectIcon icon={project.icon} imgalt={project.imgalt} key={project} />
      </div>
      <div className="avatarCompatSection">
        <h4>{project.project}</h4>
        <p>{project.desc}</p>
      </div>
    </div>
    </>
  )
}

function ProjectIcon({ icon, imgalt }) {
  return(
    <>
    <div className="avatarColoredSection">
      <img 
      className='avatar'
      src={icon}
      alt={imgalt}
      />
    </div>
    </>
  )
}

export default function App() {
  return (
    <div className="App">
      <h1 className="header">Superkat's Awesome Website</h1>
      <AboutPage />
      <h1 className="header">My Projects</h1>
      <h3>All here for you to see!</h3>
      <MyProjects projects={PROJECTS} />
    </div>
  );
}

