import { PageHeader, PageHeaderHeading } from '@/components/page-header';
import Pager from '@/components/pager';
import ContactForm from './ContactForm';
// import { Github, Instagram, MessageCircle, Send as TelegramIcon, Twitter } from 'lucide-react';

// const socials = [
//   {
//     name: 'GitHub',
//     href: 'https://github.com/SarthakGupta345',
//     icon: Github,
//     colorClass: 'hover:text-neutral-900 dark:hover:text-neutral-50',
//   },
//   {
//     name: 'Twitter',
//     href: 'https://twitter.com/your-handle',
//     icon: Twitter,
//     colorClass: 'hover:text-sky-500',
//   },
//   {
//     name: 'Instagram',
//     href: 'https://instagram.com/your-handle',
//     icon: Instagram,
//     colorClass: 'hover:text-pink-500',
//   },
//   {
//     name: 'Telegram',
//     href: 'https://t.me/your-handle',
//     icon: TelegramIcon,
//     colorClass: 'hover:text-blue-500',
//   },
//   {
//     name: 'Discord',
//     href: 'https://discord.com/users/your-id',
//     icon: MessageCircle,
//     colorClass: 'hover:text-indigo-500',
//   },
  
// ];

const ContactPage = () => {
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

      {/* <div className="mt-10 pt-8 border-t border-neutral-200 dark:border-neutral-800">
        <p className="text-sm text-muted-foreground mb-4">
          Or find me here:
        </p>
        <div className="flex flex-wrap gap-3">
          {socials.map((social) => {
            const Icon = social.icon;
            return (
              <Link
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group inline-flex items-center gap-2 text-sm font-medium text-neutral-600 dark:text-neutral-400 border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 px-3.5 py-2 rounded-full transition-all duration-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:scale-[1.03] ${social.colorClass}`}
              >
                <Icon className="h-4 w-4 transition-colors" />
                {social.name}
              </Link>
            );
          })}
        </div>
      </div> */}

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