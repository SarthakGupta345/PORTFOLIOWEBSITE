import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/page-header';
import Pager from '@/components/pager';
import TimelineViewer from '@/components/timeline-viewer';
import { experiences } from '@/constants/experience';

const ExperiencePage = () => {
  return (
    <div className='px-6 py-8 md:px-12 md:py-12 lg:px-16 lg:py-14'>
      <PageHeader className="mb-10">
        <PageHeaderHeading>Experience</PageHeaderHeading>
        <PageHeaderHeading className="mt-2 text-muted-foreground">
          You need it to get the job, but the job’s what gives it!
        </PageHeaderHeading>
        <PageHeaderDescription>
          Throughout my journey as a developer, I have had the opportunity to
          work with cutting-edge technologies while also mastering the fine art
          of debugging at 2 AM. From building dynamic web applications to
          deciphering cryptic error messages, my experience has been a mix of
          structured learning and spontaneous problem-solving. Each project and
          internship has sharpened my ability to write clean code, collaborate
          effectively, and most importantly—fix bugs before they fix me.
        </PageHeaderDescription>
      </PageHeader>

      <TimelineViewer data={experiences} />

      <Pager
        prevHref="/skills-tools"
        nextHref="/education"
        prevTitle="Skills & Tools"
        nextTitle="Education"
      />
    </div>
  );
};
export default ExperiencePage;
