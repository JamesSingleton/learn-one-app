import Head from 'next/head';
import { SkipNavContent } from '@reach/skip-nav';
import { RecordsProvider } from '../../lib/learn/records';
import { useIsMobile } from '../media-query';
import NProgress from '../nprogress';
import Page from '../page';
import Footer from '../footer';
import PageContent from '../page-content';
import Container from '../container';
import SocialMeta from '../social-meta';
import Navigation from './Navigation';
import Lesson from './Lesson';
import Markdown, { H2 } from './Markdown';
import FeedbackContext from '../feedback-context';
import { ORG_NAME } from '../../lib/constants';

const Layout = ({ meta, children }) => {
  const isMobile = useIsMobile();

  return (
    <FeedbackContext.Provider value={{ label: 'next-learn' }}>
      {meta.stepId && (
        <Head>
          <meta name="robots" content="noindex" />
        </Head>
      )}
      <Page
        title={`${meta.subtitle ? `${meta.subtitle} - ` : ''}${meta.title} | Learn One App`}
        sticky={!isMobile}
      >
        <PageContent>
          <Container wideOnMobile>
            <div className="content">
              <RecordsProvider>
                <div className="navigation-mobile">
                  <Navigation isMobile meta={meta} />
                </div>
                <div className="navigation">
                  <Navigation meta={meta} />
                </div>
                <div className="lesson">
                  <Lesson meta={meta}>
                    {meta.subtitle && <H2>{meta.subtitle}</H2>}
                    <Markdown>{children}</Markdown>
                  </Lesson>
                  <hr />
                </div>
              </RecordsProvider>
            </div>
            <style jsx>{`
              .content {
                display: flex;
                margin-top: 1rem;
                margin-bottom: 5rem;
              }

              hr {
                border: 0;
                border-top: 1px solid #eaeaea;
                margin: 3rem 0 1.25rem 0;
              }

              .navigation-mobile {
                display: none;
              }

              .navigation {
                padding: 1rem 3rem 0 0;
              }

              .lesson {
                flex: 1;
                width: 100%;
                min-width: 0;
              }

              // CSS only media query for mobile + SSR
              @media screen and (max-width: 640px) {
                .content {
                  display: flex;
                  flex-direction: column;
                  padding: 0 1rem;
                  margin-bottom: 5rem;
                }
                .navigation-mobile {
                  display: block;
                  margin: 0 -1rem;
                }
                .navigation {
                  display: none;
                }
              }
            `}</style>
          </Container>
        </PageContent>
        <SocialMeta
          image="/static/images/learn.png"
          title="Learn | One App"
          url="https://learn-one-app.vercel.app/learn"
          description={`Enterprise grade React applications that scale.`}
        />
        <SkipNavContent />
        <Footer />
        <NProgress />
      </Page>
    </FeedbackContext.Provider>
  );
};

export default Layout;
