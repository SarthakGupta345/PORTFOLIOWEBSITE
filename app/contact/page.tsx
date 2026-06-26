import { PageHeader, PageHeaderHeading } from '@/components/page-header';
import Pager from '@/components/pager';
import ContactForm from './ContactForm';

const ContactPage = async () => {
  return (
    <div className='px-6 py-8 md:px-12 md:py-12 lg:px-16 lg:py-14'>
      <PageHeader>
        <PageHeaderHeading>Contact</PageHeaderHeading>
        <PageHeaderHeading className="mt-2 text-muted-foreground">
          Get in touch before I write another line of code!
        </PageHeaderHeading>
      </PageHeader>

      <div className="mt-4">
        <ContactForm /> 
      </div>

      <Pager
        prevHref="/education"
        nextHref="/stats"
        prevTitle="Education"
        nextTitle="Stats"
      />
    </div>
  );
};
export default ContactPage;
