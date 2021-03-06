import Link from 'next/link';
import Container from '../container';
import Button from '../button';
import SectionHeader from '../section-header';
import Image from '../image';

export default function Learn() {
  return (
    <Container padding center>
      <SectionHeader
        margin="0 0 2rem 0"
        id="learn"
        title="Learn One App"
        description="Learn One App step-by-step and earn points ✨."
      />
      <Link href="/learn/basics/create-a-module">
        <a title="Get started learning One App">
          <Image
            shadow
            alt="Learn page overview"
            oversize={false}
            margin={60}
            src="/static/images/learn.png"
            width={1145 / 2}
            height={642 / 2}
          />
        </a>
      </Link>
      <div>
        <Button href="/learn/basics/create-a-module" invert>
          Get Started
        </Button>
      </div>
    </Container>
  );
}
