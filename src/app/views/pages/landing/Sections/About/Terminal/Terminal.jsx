import React from 'react';
import cx from 'classnames';

import classes from './Terminal.scss';
import Window from '../../../../../components/Window/Window';

export default function Terminal() {
  return (
    <Window title={'brychan@10.0.1.52: bash'}>
      <div className={classes.terminalArea}>
        <div className={classes.command}>$ cat /home/brychan/README.txt</div>
        <div className={classes.response}>
          I am working as a Software Engineer for Cisco in San Jose helping to develop a large-scale
          cloud provisioning platform while taking a break from studying at the University of Kent
          in England. There I am studying Computer Science as an undergraduate, expecting to
          graduate in 2020 with an exceptional grade.
          <br />
          <br />
          I focus on creating high performance, well engineered, and elegant applications as a full
          stack engineer. I have experience developing scalable backend services for large-scale
          applications, and also greatly enjoy designing beautiful user interfaces.
        </div>
        <div>
          <br />
        </div>
        <div className={classes.command}>$ ls /home/brychan/skills</div>
        <div className={classes.response}>
          <span>Swift</span>
          <span>React</span>
          <span>Java</span>
          <span>JavaScript</span>
          <span>C#</span>
          <span>SQL</span>
          <span>HTML</span>
          <span>CSS</span>
        </div>
        <div>
          <br />
        </div>
        <div className={classes.command}>$ exit</div>
      </div>
    </Window>
  );
}