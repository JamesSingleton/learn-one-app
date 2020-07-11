import { SkipNavContent } from '@reach/skip-nav';

import Page from '../components/page';
import Footer from '../components/footer';
import Learn from '../components/home/learn';
// import Features from '../components/home/features';
import SocialMeta from '../components/social-meta';
import { ORG_NAME } from '../lib/constants';

export default function Index() {
  return (
    <Page title={`One App by ${ORG_NAME} - A fresh, modular take on web application development`}>
      <SocialMeta
        image="/static/twitter-cards/home.jpg"
        title={`One App by ${ORG_NAME} - A fresh, modular take on web application development`}
        url="https://learn-one-app.now.sh"
        description="A fresh, modular take on web application development"
      />
      <SkipNavContent />
      <Learn />
      {/* <Features /> */}

      <Footer />
    </Page>
  );
}
