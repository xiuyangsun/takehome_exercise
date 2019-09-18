import React from 'react';
import Button from "@material-ui/core/Button";

const About = ({ history }) => (
  <div>
    <h1>AirMap Take Home Exercise</h1>
    <p>Candidate: Bobby Sun</p>
    <p>09/17/2019</p>
    <Button
        variant="outlined"
        color="primary"
        onClick={() => {history.push('/')}}
      >
        Home
      </Button>
  </div>
)

export default About;