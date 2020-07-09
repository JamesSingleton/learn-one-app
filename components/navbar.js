import { memo, useContext } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import cn from 'classnames';
import { SkipNavLink } from '@reach/skip-nav';

import Container from './container';
import GitHubLogo from './icons/github';
import Button from './button';

function Navbar() {
  const { route } = useRouter();

  return (
    <Container center>
      <SkipNavLink tabIndex="0" />
      <h1 className="visually-hidden" aria-hidden="true">
        Next.js
      </h1>
      <nav className="f-reset">
        <div className="mobile-top">
          <Link href="/">
            <a className="mobile-logo" title="Go to the homepage">
              <img src="/static/images/one-app.png" style={{ height: 50 }} />
            </a>
          </Link>

          <div className="learn">
            <Button href="/learn/basics/create-one-app-module">Learn</Button>
          </div>
        </div>

        <div className="links">
          <Link href="/">
            <a className="logo">
              <img src="/static/images/one-app.png" style={{ height: 50 }} />
            </a>
          </Link>

          <Link href="/showcase">
            <a
              className={cn('mute', {
                selected: route.startsWith('/showcase')
              })}
              title="Showcase"
            >
              Showcase
            </a>
          </Link>

          <Link href="/docs/[[...slug]]" as="/docs/getting-started">
            <a
              className={cn('mute', {
                selected: route.startsWith('/docs')
              })}
              title="Documentation"
            >
              Docs
            </a>
          </Link>

          <Link href="/blog">
            <a
              className={cn('mute', {
                selected: route.startsWith('/blog')
              })}
            >
              Blog
            </a>
          </Link>

          <a
            className="mute"
            href="https://vercel.com/solutions/nextjs?utm_source=next-site&utm_medium=navbar&utm_campaign=next-website"
            target="_blank"
            rel="noopener noreferrer"
          >
            Enterprise
          </a>
          <a
            href="https://github.com/vercel/next.js"
            aria-label="Next.js on GitHub"
            rel="noopener noreferrer"
            target="_blank"
            className="icon mute"
          >
            <GitHubLogo color="currentColor" />
          </a>

          <div className="learn">
            <Button href="/learn/basics/create-one-app-module">Learn</Button>
          </div>
        </div>
      </nav>

      <style jsx>{`
        nav {
          position: relative;
          flex: 1;
          height: 80px;
          display: flex;
          align-items: center;
        }
        .links {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          z-index: 1;
        }
        .links a {
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .links a:hover {
          color: #000;
        }
        .links a.selected {
          color: #0070f3;
          text-shadow: 0px 0px 1px #0070f3;
        }
        .links a:first-child,
        .links a:last-child {
          display: flex;
        }
        a.icon,
        a.icon > :global(div.container) {
          /* Remove additional space from SVG */
          display: inline-flex;
          justify-content: center;
        }
        a.icon > :global(div.container) {
          overflow: visible;
        }
        .mobile-logo,
        .mobile-top {
          display: none;
        }
        .header-feedback {
          display: inline-flex;
        }
        .no-feedback {
          visibility: hidden;
          width: 90px;
        }
        .learn :global(a) {
          background-color: rgba(0, 118, 255, 0.9);
          color: #fff;
          border: 1px solid rgba(0, 118, 255, 0.9);
          padding: 0.25rem 1rem;
          margin: 0;
        }
        .learn :global(a:focus),
        .learn :global(a:hover) {
          background-color: transparent;
          color: rgba(0, 118, 255, 0.9);
        }
        /* Mobile */
        @media (max-width: 640px) {
          .mobile-logo {
            display: block;
          }
          nav {
            height: unset;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            padding: 1rem 0;
          }
          nav .links .logo,
          nav .links .learn {
            display: none;
          }
          nav .links a {
            font-size: 14px;
          }
          .mobile-top {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 0.5rem;
          }
          .learn {
            margin-left: 0.5rem;
          }
        }
        @media (max-width: 1020px) {
          .header-feedback {
            display: none;
          }
        }
      `}</style>
    </Container>
  );
}

export default memo(Navbar);
