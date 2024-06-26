import {
  IconArrowDown,
  IconArrowsRightLeft,
  IconBrandLinkedin,
  IconBrandTailwind,
  IconBrandTwitter,
  IconBulb,
  IconCheck,
  IconClock,
  IconComponents,
  IconDownload,
  IconListCheck,
  IconMail,
  IconMapPin,
  IconPhoneCall,
  IconRocket,
} from '@tabler/icons-react';
import {
  ContactProps,
  FAQsProps,
  FeaturesProps,
  HeroProps,
  SocialProofProps,
  TeamProps,
  TestimonialsProps,
} from '../../types';
import heroImg from '~/assets/images/hero.jpg';
import nextJsLogo from '~/assets/images/nextjs-logo.png';
import reactLogo from '~/assets/images/react-logo.png';
import tailwindCssLogo from '~/assets/images/tailwind-css-logo.png';
import typescriptLogo from '~/assets/images/typescript-logo.png';
import cameraFrontImg from '~/assets/images/camera-front.jpg';
import cameraBackImg from '~/assets/images/camera-back.jpg';
import gasImg from '~/assets/images/gas.jpg';

// Hero data on Home page *******************
export const heroHome: HeroProps = {
  title: (
    <>
      Your centralized platform <span className="hidden md:inline">for Students and</span> <span>Teachers</span>{' '}
      {/* <span className="sm:whitespace-nowrap">Tailwind CSS</span> */}
    </>
  ),
  subtitle: (
    <>
      <span className="hidden md:inline">
        <span className="font-semibold underline decoration-primary-600 decoration-wavy decoration-1 underline-offset-2">
          College-Compass
        </span>{' '}
        is a centralized platform for the <em>Students</em> + <em>Teachers</em>.
      </span>{' '}
      Get in touch with Teachers, get all your data centrally at one platform and get some intresting features
      with our platform. 
      Checkout for more :) .
    </>
  ),
  callToAction: {
    text: 'Sign-In',
    href: '/',
    targetBlank: true,
  },
  callToAction2: {
    text: 'Log-In',
    href: 'http://localhost:5173/login',
  },
  image: {
    src: heroImg,
    alt: 'Hero TailNext',
  },
};

// SocialProof data on Home page *******************
export const socialProofHome: SocialProofProps = {
  id: 'socialProof-on-home',
  hasBackground: false,
  images: [
    {
      link: 'https://nextjs.org/',
      src: nextJsLogo,
      alt: 'NextJs Logo',
    },
    {
      link: 'https://react.dev/',
      src: reactLogo,
      alt: 'React Logo',
    },
    {
      link: 'https://tailwindcss.com/',
      src: tailwindCssLogo,
      alt: 'Tailwind CSS Logo',
    },
    {
      link: 'https://www.typescriptlang.org/',
      src: typescriptLogo,
      alt: 'Typescript Logo',
    },
  ],
};

// Features data on Home page *******************
export const featuresHome: FeaturesProps = {
  id: 'features-on-home',
  hasBackground: false,
  columns: 2,
  header: {
    title: (
      <>
        What you get with <span className="whitespace-nowrap">our College Compass</span>
      </>
    ),
    subtitle:
      "Elevating Your College Expirence. Discover the unleased power in Our Platform's Strengths.",
    tagline: 'Features',
  },
  items: [
    {
      title: 'Personalized Dashboards',
      description:
        'Take control of your academic journey with a user-friendly dashboard tailored to your role. Access everything in one place: View current CGPA, class schedules, attendance records, club activities, and announcements with ease.',
      icon: IconBrandTailwind,
      callToAction: {
        text: 'Discover now',
        href: '/',
      },
    },
    {
      title: 'Streamlined Communication',
      description:
        'This fosters a collaborative learning environment and enables timely dissemination of important updates and reminders.',
      icon: IconComponents,
      callToAction: {
        text: 'Discover now',
        href: '/',
      },
    },
    {
      title: 'Centralized Data Management',
      description:
        'College Compass ensures the safe storage and management of student and teacher information. Administrators can easily retrieve essential data for administrative purposes, promoting efficiency and data integrity across the institution.',
      icon: IconListCheck,
      callToAction: {
        text: 'Discover now',
        href: '/',
      },
    },
    {
      title: 'Effortless Management: Data at Your Fingertips',
      description:
        'Centralized data hub: College Compass securely stores and manages student and teacher information, streamlining administrative tasks.',
      icon: IconRocket,
      callToAction: {
        text: 'Discover now',
        href: '/',
      },
    },
  ],
};
// Testimonials data on Home page *******************
export const testimonialsHome: TestimonialsProps = {
  id: 'testimonials-on-home',
  hasBackground: true,
  header: {
    title: 'What our Students say about us',
    subtitle:
      'Something Good',
  },
	testimonials: [{
    name: 'Aman Kamble',
    job: 'Teacher - MIT ADT University',
    testimonial: `College Compass has completely transformed the way I manage my academic life. The personalized dashboard helps me keep track of my grades, attendance, and schedule all in one place.`,
    image: {
      src: 'https://images.unsplash.com/photo-1619734086067-24bf8889ea7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
      alt: 'Aman Kamble',
    },
    href: '/',
  },
  {
    name: 'Shafi Pathan',
    job: 'Teacher - MIT ADT University',
    testimonial: `As a teacher, College Compass has been a game-changer. The platform makes it incredibly easy to manage my class schedules and track attendance. I appreciate how it keeps all the necessary information, like student contact details and room assignments, organized and accessible.`,
    image: {
      src: 'https://images.unsplash.com/photo-1565049786474-1dea82a8b995?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
      alt: 'Shafi Pathan',
    },
    href: '/',
  },
  {
    name: 'Harsh Hande',
    job: 'Student - MIT ADT University',
    testimonial: ' The communication tools have made it so much easier to stay in touch with my professors and classmates. I cant imagine going back to the old way of doing things!',
    image: {
      src: 'https://images.unsplash.com/photo-1659057106920-da022cfbc0cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
      alt: 'Kelsey Arden',
    },
    href: '/',
  },
  {
    name: 'Monil Karia',
    job: 'Student - MIT ADT University',
    testimonial: 'College Compass has revolutionized the way we manage our academic operations. The centralized data management system ensures that all student and teacher information is stored securely and can be retrieved easily. ',
    image: {
      src: 'https://images.unsplash.com/photo-1572417884940-c24659be6068?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
      alt: 'Sarah Johnson',
    },
    href: '/',
  },
  {
    name: 'Manali Thakkar',
    job: 'Student - MIT ADT University',
    testimonial: 'The platforms user-friendly interface has made it simple for both students and teachers to navigate and utilize its features effectively. Its a powerful tool that has enhanced our institutions efficiency and communication',
    image: {
      src: 'https://images.unsplash.com/photo-1694287877106-ee22f764aef1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
      alt: 'Keith Young',
    },
    href: '/',
  },
  {
    name: 'Manali"s Friend',
    job: 'Student - MIT ADT University',
    testimonial: 'College Compass is an essential tool for any educator. The platforms ability to manage class schedules and track attendance saves me so much time and effort. ',
    image: {
      src: 'https://images.unsplash.com/photo-1665984867752-6370ab5ae35e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
      alt: 'Lisa Gordon',
    },
    href: '/',
  },
],
};

// FAQS data on Home page *******************
export const faqs2Home: FAQsProps = {
  id: 'faqsTwo-on-home',
  hasBackground: false,
  header: {
    title: 'Frequently Asked Questions',
    subtitle:
      'Get answers to commonly asked questions about College Compass.',
    tagline: 'FAQS',
  },
  items: [
    {
      title: 'Who can use College Compass?',
      description: `College Compass is designed for both students and teachers at your institution.`,
    },
    {
      title: 'How can I access my College Compass dashboard?',
      description: `You can access your College Compass dashboard through your institution's login portal (specific instructions will be provided by your school).`,
    },
    {
      title: "What features does the Student Dashboard offer?",
      description: `The Student Dashboard allows students to view their current CGPA, attendance, and course schedule. They can also access teacher profiles to learn about their expertise and availability, and stay updated on club activities, news, and announcements.`,
    },
    {
      title: "How do I stay informed about club activities and news updates?",
      description: `College Compass keeps students informed about upcoming events, activities, and news updates through the platform. You can access this information directly from your Student Dashboard, promoting engagement and participation within the campus community.`,
    },
    {
      title: 'How does College Compass handle student data?',
      description: `College Compass stores and manages student information securely in accordance with all relevant data privacy regulations.`,
    },
    {
      title: 'How does College Compass benefit school administration?',
      description: `College Compass facilitates easy data retrieval for administrative purposes, streamlining tasks and improving efficiency.`,
    },
  ],
};


// Team data on Home page *******************
export const teamHome: TeamProps = {
  id: 'team-on-home',
  hasBackground: false,
  header: {
    title: 'Team Members',
    subtitle:
      'Meet the Brainy Bunch Behind the Scenes :).  Nerds by Day, Superheroes by Night!',
    // tagline: 'Team',
  },
  teams: [
    {
      name: 'Monil Karia',
      occupation: 'Co-Founder',
      image: {
        src: 'https://images.unsplash.com/photo-1637858868799-7f26a0640eb6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: 'Monil Karia',
      },
      items: [
        {
          title: 'Know more on Twitter',
          icon: IconBrandTwitter,
          href: '#',
        },
        {
          title: 'Know more on Linkedin',
          icon: IconBrandLinkedin,
          href: '#',
        },
        {
          title: 'Contact by email',
          icon: IconMail,
          href: 'monilkaria2019@gmail.com',
        },
      ],
    },
    {
      name: 'Harsh Hande',
      occupation: 'Co-Founder',
      image: {
        src: 'https://images.unsplash.com/photo-1614583224978-f05ce51ef5fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2172&q=80',
        alt: 'Harsh Hande',
      },
      items: [
        {
          title: 'Know more on Twitter',
          icon: IconBrandTwitter,
          href: '#',
        },
        {
          title: 'Know more on Linkedin',
          icon: IconBrandLinkedin,
          href: '#',
        },
        {
          title: 'Contact by email',
          icon: IconMail,
          href: 'harshhande95@gmail.com',
        },
      ],
    },
    {
      name: 'Manali Thakkar',
      occupation: 'Co-Founder',
      image: {
        src: 'https://images.unsplash.com/photo-1639628735078-ed2f038a193e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80',
        alt: 'Manali Thakkar',
      },
      items: [
        {
          title: 'Know more on Twitter',
          icon: IconBrandTwitter,
          href: '#',
        },
        {
          title: 'Know more on Linkedin',
          icon: IconBrandLinkedin,
          href: '#',
        },
        {
          title: 'Contact by email',
          icon: IconMail,
          href: '#',
        },
      ],
    },
    {
      name: 'Friend',
      occupation: 'UX INTERN',
      image: {
        src: 'https://images.unsplash.com/photo-1628260412297-a3377e45006f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80',
        alt: 'Anonymous Friend',
      },
      items: [
        {
          title: 'Know more on Twitter',
          icon: IconBrandTwitter,
          href: '#',
        },
        {
          title: 'Know more on Linkedin',
          icon: IconBrandLinkedin,
          href: '#',
        },
        {
          title: 'Contact by email',
          icon: IconMail,
          href: '#',
        },
      ],
    },
  ],
};

// Contact data on Home page *******************
export const contactHome: ContactProps = {
  hasBackground: true,
  header: {
    title: 'Get in Touch',
    subtitle: 'Connect with us for any inquiries or assistance we are here to help!',
    tagline: 'Contact',
  },
  content:
    'Have a question, comment, or just want to say hello? We would love to hear from you! Whether you are a student, teacher, or just curious about College Compass, do not hesitate to reach out. Our friendly team is here to assist you with any inquiries or assistance you may need. Drop us a message, and lets start a conversation today!',
  items: [
    {
      title: 'Our Address',
      description: ['MIT ADT University, Loni Kalbhor'],
      icon: IconMapPin,
    },
    {
      title: 'Contact',
      description: ['Mobile: 1234567890', 'Mail: collegecompass@gmail.com'],
      icon: IconPhoneCall,
    },
    {
      title: 'Working hours',
      description: ['Nerds by Day, Superheroes by Night. Inshort Alltime :)'],
      icon: IconClock,
    },
  ],
  form: {
    title: 'Ready to Get Started?',
    inputs: [
      {
        type: 'text',
        name: 'name',
        autocomplete: 'off',
        placeholder: 'Your name',
      },
      {
        type: 'email',
        name: 'email',
        autocomplete: 'on',
        placeholder: 'Your email address',
      },
    ],
    textarea: {
      cols: 30,
      rows: 5,
      name: 'textarea',
      placeholder: 'Write your message...',
    },
    btn: {
      title: 'Send Message',
      type: 'submit',
    },
  },
};