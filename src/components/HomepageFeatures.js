import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
import imgDc from '../../static/img/discord.png';
import Link from '@docusaurus/Link';


const FeatureList = [
  {
    // title: 'Open Source & Community',
    // Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    Src: imgDc,
  },
  {
    // justifyContent: 'center',
    title: 'A community for help, support and discussion',
    // Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        With over 600 members, join the most active Delphi Discord community to help or get help and discuss programming with like-minded people.<br/><br/>
        <Link className={clsx('button button--primary button--lg')} to="https://discord.com/invite/c382VBk">Join Discord</Link>
      </>
    ),
  },
];

function Feature({Svg, Src, title, description}) {
  return (
    <div className={clsx('col col--6')}>
      <div className="text--center">
        {Svg != undefined ? <Svg className={styles.featureSvg} alt={title} />
        : Src != undefined ? <img src={Src} alt={title} />
        : ''
        }
        
      </div>
      <div className="padding-horiz--md">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  let divStyle = {minHeight: 'calc(100vh - 60px)'}
  return (
    <section className={styles.features} style={divStyle}> 
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
