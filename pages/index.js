import { SkipNavContent } from '@reach/skip-nav';

import Page from '../components/page';
import Footer from '../components/footer';
import Intro from '../components/home/intro';
import Learn from '../components/home/learn';
import Features from '../components/home/features';
import SocialMeta from '../components/social-meta';
import { ORG_NAME } from '../lib/constants';

export default function Index() {
  return (
    <Page title={`One App - A fresh, modular take on web application development`}>
      <SocialMeta
        image="/static/twitter-cards/home.png"
        title={`One App - A fresh, modular take on web application development`}
        url="https://learn-one-app.vercel.app"
        description="A fresh, modular take on web application development"
      />
      <SkipNavContent />
      <Intro />
      <Features />
      <Learn />
      <Footer />
    </Page>
  );
}
