import FluidBackground from '@/components/Fluids/FluidBackground';
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/page-header';
import Pager from '@/components/pager';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/config/site';
import { ExternalLink, Mail } from 'lucide-react';
import Link from 'next/link';

const IntroductionPage = () => {
  return (
    <div className='px-6 py-8 md:px-12 md:py-12 lg:px-16 lg:py-14'>
      <FluidBackground />
      <PageHeader>
        <PageHeaderHeading>Chandan Gupta</PageHeaderHeading>
        <PageHeaderHeading className="mt-2 text-muted-foreground">
            I build things that work, and enjoy proving they can be faster.
        </PageHeaderHeading>
        <PageHeaderDescription>
          Computer Science Engineering student at MANIT Bhopal, wired to turn
          ideas into working software — Next.js, React, Node.js, Express, and
          MongoDB on the build side, Docker and AWS to get it out the door.
          When I'm not shipping, you'll find me deep in a Codeforces or
          CodeChef contest, hunting for the sharper algorithm and the cleaner
          edge case.
        </PageHeaderDescription>
        <PageActions>
          <Button asChild size="sm" className="rounded-md">
            <Link href={siteConfig.links.resume} target="_blank">
              Get Resume
              <ExternalLink className="size-3" strokeWidth={2} />
            </Link>
          </Button>
          <Button asChild size="sm" variant="ghost" className="rounded-md">
            <Link href={siteConfig.links.email}>
              <Mail className="size-4" />
              Send Mail
            </Link>
          </Button>
        </PageActions>
      </PageHeader>

      <Pager
        prevHref="/contact"
        nextHref="/dsa"
        prevTitle="Contact"
        nextTitle="DSA"
      />
    </div>
  );
};
export default IntroductionPage;