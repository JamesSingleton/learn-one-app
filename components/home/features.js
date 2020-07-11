import Container from '../container';
import Button from '../button';
import SectionHeader from '../section-header';

export default function Features() {
  return (
    <Container dark wide role="region" aria-labelledby="features">
      <Container center padding>
        <SectionHeader
          id="features"
          title="Why One App"
          description="Our goal is to provide a web application framework for building fast, scalable, secure, and modular experiences."
        />
        <div className="row">
          <div className="column">
            <h3 className="f3 fw6">Micro-UI</h3>
            <p>
              Powered by{' '}
              <a
                href="https://one-amex-docs.americanexpress.com/en-us/holocron/api/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Holocron
              </a>
              {', '}
              this allows for code splitting via independently developed, tested, and deployed
              Modules.
            </p>
          </div>
          <div className="column">
            <h3 className="f3 fw6">Flexibility</h3>
            <p>
              An omnichannel solution to UI. Whether you're performing server-side, client-side,
              delivering modules as a service to web email or phone/IoT clients. One App covers this
              for you.
            </p>
          </div>
          <div className="column">
            <h3 className="f3 fw6">Security</h3>
            <p>
              Configurable security settings, all pages are protected by a content security policy
              and all modules are injected with sub-resource integrity.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="column">
            <h3 className="f3 fw6">Scalability</h3>
            <p>
              Wrapped within an application that scales across 1,000's of engineers and multiple
              units of an enterprise website.
            </p>
          </div>
          <div className="column">
            <h3 className="f3 fw6">Internationalization</h3>
            <p>
              One App allows you to easily setup{' '}
              <a
                href="https://one-amex-docs.americanexpress.com/en-us/one-app/api/modules/internationalization"
                target="_blank"
                rel="noopener noreferrer"
              >
                internationalization
              </a>{' '}
              within your application.
            </p>
          </div>
          <div className="column">
            <h3 className="f3 fw6">Ready for Production</h3>
            <p>
              Optimized for delivering performant, maintainable user experiences with minimal
              downtime.
            </p>
          </div>
        </div>
        <style jsx>{`
          .row:not(:last-of-type) {
            margin-bottom: 3rem;
          }
          .column {
            text-align: left;
          }
          // CSS only media query for tablet
          @media screen and (max-width: 960px) {
            .row {
              flex-direction: column;
              margin: -1.5rem 0;
            }
            .column {
              width: 100%;
              padding: 1.5rem 0;
              text-align: center;
              max-width: 350px;
            }
          }
        `}</style>
      </Container>
    </Container>
  );
}
