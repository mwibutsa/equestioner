import React from 'react';
import Button from '../button'

const Header = props => {
  return (
    <React.Fragment>
      <div className="header">
        <div className="welcome-box">
          <h1 className="welcome-box__heading welcome-box__heading--primary">
            Welcome to EQuestioner
          </h1>
          <h3 className="welcome-box__heading welcome-box__heading--secondary">
            Crowd-source questions for a meetup. Questioner helps the meetup organizer prioritize questions to be answered. Other users can vote on asked
            {' '}
            questions and they bubble to the top or bottom of the log.
          </h3>
        <Button label="Get started" link="/" />
        </div>

      </div>
      <div className="about">this Div</div>
    </React.Fragment>
  );
};

export default Header;
