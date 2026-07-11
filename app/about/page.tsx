import FluidBackground from '@/components/Fluids/FluidBackground';
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/page-header';
import Pager from '@/components/pager';

const AboutMePage = () => {
  return (
    <div className='px-6 py-8 md:px-12 md:py-12 lg:px-16 lg:py-14'>
      <PageHeader>
        <FluidBackground />
        <PageHeaderHeading>About Chandan</PageHeaderHeading>
        <PageHeaderHeading className="mt-2 text-muted-foreground">
          <span className="bg-yellow-300 text-black px-1.5 py-0.5 rounded-md">
            Full-Stack Developer, Competitive Coder
          </span>
        </PageHeaderHeading>
        <PageHeaderDescription>
          I'm a Computer Science Engineering student who loves building things
          that actually reach production. From full-stack web apps to
          AI-powered tools, I enjoy taking an idea from a blank file to a
          deployed, working product—handling everything from the database
          schema to the UI polish along the way.
        </PageHeaderDescription>

        <PageHeaderDescription>
          On the full-stack side, I work with Next.js, TypeScript, Node.js,
          and Express, along with databases like PostgreSQL and MongoDB. I've
          shipped and deployed projects using Docker, AWS EC2, and Vercel, so
          I care as much about how an app runs in production as how it looks
          in development.
        </PageHeaderDescription>

        <PageHeaderDescription>
          Alongside development, I'm deeply into competitive programming and
          problem-solving. I actively practice on Codeforces, CodeChef, and
          LeetCode, which has sharpened my grasp of data structures and
          algorithms and given me a strong instinct for writing efficient,
          clean code—skills that carry over directly into how I architect and
          debug real-world systems.
        </PageHeaderDescription>

        <PageHeaderDescription>
          I thrive on tackling hard problems, whether that's optimizing an
          algorithm's time complexity or designing a scalable backend. I'm
          always looking to contribute to impactful projects and keep
          leveling up as an engineer.
        </PageHeaderDescription>
      </PageHeader>

      <Pager
        prevHref="/"
        nextHref="/projects"
        prevTitle="Introduction"
        nextTitle="Projects"
      />
    </div>
  );
};
export default AboutMePage;