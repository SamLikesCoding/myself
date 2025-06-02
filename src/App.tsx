import myRole from './states/roleState';
import resume from './assets/resume.json';
import logo from './assets/img/bg.png'
import { useEffect } from 'react';
import './App.css'

function App() {

  let ridx = myRole((state) => state.roleIdx);
  const updateRole = myRole((state) => state.updateRole);
  const roles = resume.desp;

  useEffect(() => {
    const cycler = setInterval(() => {
      updateRole(roles.length-1 <= ridx? 0 : ridx+1); 
    }, 500);
    return () => clearInterval(cycler); 
  });

  return (
    <>
      <div id='mainboard'>
        <div className='card'style={{ backgroundColor: '#EEC643', padding: '12px' }}>
          <code style={{ color: 'black' }}>hover over title to reveal</code>
          <div className='tab'>
            <h1>Skills</h1>
            {
              resume.skills.map(skill => (
                <div className='crumb'>
                  <div>
                    <h3>{skill.name}</h3>
                    <code>{skill.desp}</code>
                  </div>
                  <div>
                    <img src={skill.icon} alt="" style={{ scale: '0.5' }} />
                  </div>
                </div>
              ))
            }
          </div>
          <div className='tab'>
            <h1>Work Experiences</h1>
            <div style={{ padding: '6px' }}></div>
            {
              resume.workExp.map(work => (
                <div style={{ paddingTop: '20px' }}>                 
                  <h2>{work.title}</h2>
                  <br />
                  <code>
                    {work.subtitle}
                    <br />
                    {work.descp}
                  </code>
                </div>
              ))
            }
          </div> 
           <div className='tab'>
            <h1>Contact</h1>
            <div style={{ padding: '6px' }}></div>
            <code>GitHub : <a href={'https://github.com/'+resume.contact['github']}>{"@"+resume.contact['github']}</a></code>
            <br />
            <code>E-mail : <a href={'mailto'+resume.contact['email']}>{resume.contact['email']}</a></code>
            <br />
            <code>Whatsapp : <a href={'https://wa.me/'+resume.contact['whatsapp']}>{resume.contact['whatsapp']}</a></code>
            <br />
            <code>LinkedIn : <a href={resume.contact['linkedin']}>{resume.contact['linkedin']}</a></code>
            <br />
          </div> 
        </div>
        <div className='rowCard' style={{ width: '100%' }}>
          <div className='card' style={{ backgroundColor: '#0E79B2', padding: '18px' }}>
               <h2>About me</h2>
               {resume.aboutMe.map(txt => (<p>{txt}</p>))}
          </div>
          <div className='colCard' style={{ width: '100%'}}>
            <div className='card' style={{ backgroundColor: '#001F54', padding: '24px' }}>
              <p>Hi, My name is</p>
              <h1>{resume.name}</h1>
              <p>{roles[ridx]}</p>
            </div>
            <div className='card'>
              <img src={logo} alt="My photo" style={{ 
                objectFit: 'cover', 
                height: '100%', width: '100%', 
                padding: '-4em'
              }}/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
