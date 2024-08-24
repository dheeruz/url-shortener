import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

const Output = () => {
  const footer = {
    color: 'red',
  };

  const foot = {
    textAlign: 'center',
    animation:'eaeIn 4s ease-out'

  };
  const styles = `
  @keyframes eaeIn{
    0%{opacity:0;transform:translateY(120px);}
    100%{opacity:1;transform:translateY(0);}
  }`
  ;
  const items = {
    margin:'1%',
    color:'black'
  };

  return (
    <div style={foot}>
        <style>{styles}</style>
      <h3>Designed and Developed by</h3>
      <h2 style={footer}> Dheeraj &hearts;</h2>
      <div >
      <a href="https://www.linkedin.com/in/sai-dheeraj-a-78070226b/"><FontAwesomeIcon style={items} icon={faLinkedin} /></a>
      <a href="https://www.instagram.com/dheeru._.7/"><FontAwesomeIcon style={items} icon={faInstagram} /></a>
      <a href="https://github.com/dheeruz"><FontAwesomeIcon style={items} icon={faGithub} /></a>
      <a href="https://x.com/Dheeraj20051876"><FontAwesomeIcon style={items} icon={faTwitter} />
</a>
      </div>
      
    </div>
  );
};

export default Output;
