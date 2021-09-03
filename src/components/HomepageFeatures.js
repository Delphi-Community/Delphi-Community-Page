import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Open Source & Community',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Everyone is welcome to commit to the community or any projects. Every project we have, is 100% open source! 
      </>
    ),
  },
  {
    title: 'Revived IDE',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Our passion and goal is to keep the pascal language modern.
        Everyone is able to commit changes to the Revived IDE as on Lazarus, just much faster and we're able to change much more.
        Its based on FreePascal and Lazarus.
      </>
    ),
  },
  {
    title: 'Objective User Friendly',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        We are a very competent and friendly community. Our community is based on a modern #irc which supports multiple languages. <a  href="https://discord.com/invite/c382VBk" target="_blank">Join here</a>
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
