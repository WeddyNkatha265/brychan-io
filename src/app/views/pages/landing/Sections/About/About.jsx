import React from 'react';

import Settings from '../../../../../settings';

import classes from './About.scss';
import Terminal from '../../../../components/Terminal/Terminal';
import Title from '../../../../components/Title/Title';

export default function About() {
  return (
    <section className={classes.about}>
      <Title title={'😊 A little bit about me.'} alignLeft />
      <Terminal />
    </section>
  );
}
