import Container from '../container';
import Button from '../button';
import SectionHeader from '../section-header';

export default function Learn() {
  return (
    <Container>
      <SectionHeader
        margin="0 0 2rem 0"
        id="learn"
        title="Learn One App"
        description="Learn One App step-by-step and earn points ✨."
      />
      <div>
        <Button href="/learn/basics/create-one-app-module" invert>
          Get Started
        </Button>
      </div>
    </Container>
  );
}
