import React from 'react';
import classNames from 'classnames';
import Link from 'next/link';
import { useAmp } from 'next/amp';

import Container from '../container';
import Button from '../button';
import Campaign from './campaign';

import { links } from '../../site-manifest';

class LogoContainer extends React.PureComponent {
  state = {
    scroll: 0
  };

  componentDidMount() {
    this.setState({ mounted: true });
    window.addEventListener('scroll', this.onScroll);
    this.onScroll();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll);
  }

  onScroll = () => {
    const scroll = window.scrollY || window.document.body.scrollTop;
    this.setState({ scroll });
  };

  render() {
    const { isAmp } = this.props;
    const { scroll, mounted } = this.state;

    // const LOGO_TOP = isMobile ? 126 : 170;
    const LOGO_TOP = 170 + 50; // 170 + height of banner
    return (
      <div className={classNames('logo-main f4 fw6', { unmounted: !mounted })}>
        <Link href="/">
          <a className={scroll >= LOGO_TOP ? null : 'disable'} aria-label="Next.js">
            <img src="/static/images/one-app.png" style={{ height: 80 }} />
          </a>
        </Link>
        <style jsx>{`
          .disable {
            pointer-events: none;
          }
          .logo-main {
            display: flex;
            justify-content: center;
            color: #0070f3;
            left: 0;
            right: 0;
            width: 200px;
            margin: auto;
          }
          .logo-main .version {
            width: 0;
            // margin-left: -0.2rem;
            margin-top: 0.4rem;
            cursor: pointer;
            display: ${isAmp ? 'none' : 'inherit'};
          }
          .version.hide {
            opacity: 0;
          }
          a.version {
            color: #0070f3;
          }
          .version .tip {
            color: #111;
            white-space: nowrap;
          }
          .unmounted {
            display: ${isAmp ? 'inherit' : 'none'};
          }
        `}</style>
      </div>
    );
  }
}

// eslint-disable-next-line react/no-multi-comp
export default function Intro() {
  const isAmp = useAmp();

  return (
    <Container role="main" wide center overflow dotBackground>
      <Container>
        <div className="intro-container">
          <LogoContainer isAmp={isAmp} />
          <div className="campaign no-drag no-tap-highlight">
            <h1 className={classNames('title-1', 'fw6')}>The Framework for</h1>
            <h2 className={classNames('title-2', 'fw7')}>
              <Campaign />
            </h2>
            <div className="main-button">
              <div className="button-spacer">
                <Button href="/learn/basics/create-one-app-module" invert>
                  Start Learning
                </Button>
              </div>
            </div>
          </div>
          <div>
            <div className="links">
              <a href={links.license} rel="noopener noreferrer" target="_blank">
                <span className="mute">License: MIT</span>
              </a>
              <div>
                <Button
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://one-amex-docs.americanexpress.com/"
                  amp
                >
                  View Docs
                </Button>
              </div>
              <div>
                <Button
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/americanexpress/one-app"
                >
                  GitHub
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <style jsx>{`
        .button-spacer {
          display: inline-block;
          padding: 10px;
        }
        .intro-container {
          padding: 3rem 0 2rem 0;
          overflow: visible;
        }
        h2 {
          margin-top: 1rem;
          margin-bottom: 2rem;
        }
        .main-button {
          margin-bottom: 2rem;
        }
        .links {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .links > * {
          padding: 0 0.5rem;
        }
        .campaign {
          width: 100%;
          letter-spacing: -0.02rem;
          overflow: hidden;
          cursor: default;
          z-index: -1;
          margin: 1rem 0 5rem;
        }
        .f-xs-0 {
          font-size: 2.887rem; /* 2.566rem; /* 2.281rem; */
        }
        .f-xs-1 {
          font-size: 2.027rem; //.566rem;
        }
        .logo-main {
          display: flex;
          justify-content: center;
          color: #0070f3;
          margin: auto;
          margin-bottom: 2rem;
        }
        .title-1 {
          font-size: 1.5rem;
        }
        .title-2 {
          font-size: 4rem;
          margin-top: -5rem;
          margin-bottom: 0;
        }
        /* CSS only media query for mobile */
        @media screen and (max-width: 640px) {
          .title-1 {
            font-size: 22px;
          }
          .title-2 {
            font-size: 30px;
            margin-top: -2.4rem;
          }
          .campaign {
            margin: 0 0 2rem;
          }
          .main-button {
            margin-top: 2rem;
          }
        }
      `}</style>
    </Container>
  );
}
