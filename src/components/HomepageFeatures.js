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
    title: 'A vibrant community providing interactive help, support and discussions',
    // Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Delphi-Community is not just a website – it's a vibrant hub of enthusiasts, developers, and experts who share a mutual passion: the realm of Delphi and Pascal-based languages. With over 1200 members on our Discord server, we are proud to be one of the largest and most active communities in this domain.
        
        <br/><br/><h3>Why Delphi-Community?</h3>

        <ul>
          <li><strong>Comprehensive Support: </strong>Whether you're a novice just starting out with Delphi or Pascal, or an experienced developer seeking specific solutions, our community is here to assist and guide you every step of the way.</li>
          <li><strong>Resources & Tutorials: </strong>Our platform boasts a wealth of resources, from basic tutorials to advanced guides, ensuring that every member can find the information they need.</li>
          <li><strong>Multilingual Support: </strong>We understand the global nature of coding and development. That's why we proudly support 20 different languages, including German and Afrikaans, ensuring that language is never a barrier to learning or collaboration.
          </li>
        </ul> 



        Join us today and be a part of a community that thrives on knowledge-sharing, collaboration, and the shared love for Delphi and Pascal-based languages. Welcome to the Delphi-Community family!<br/><br/>
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
