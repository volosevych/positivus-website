 const buttonData = [
    {
        id: '0',
        title: 'Request a quote'
    },
    {
        id: '1',
        title: 'Book a consultation'
    },
    {
        id: '2',
        title: 'Get your free proposal'
    },
    {
        id: '3',
        title: 'Send Message'
    },
    {
        id: '4',
        title: 'See all team'
    }
];

const companyLogos = [
    {
      id: '0',
      logo: '/assets/company-logos/amazon.png',
    },

    {
        id: '1',
        logo: '/assets/company-logos/dribble.png',
    },

    {
        id: '2',
        logo: '/assets/company-logos/hotspot.png',
    },

    {
        id: '3',
        logo: '/assets/company-logos/netflix.png',
    },

    {
        id: '4',
        logo: '/assets/company-logos/notion.png',
    },

    {
        id: '5',
        logo: '/assets/company-logos/zoom.png',
    },
  ];

const services = [
    {
        id: '0',
        title: `Search engine<br>optimization`,
        image: '/assets/services-imgs/service-1.png',
        bgColor: 'bg-p3',
        bgText: 'bg-p1 rounded-md',
        btn: [
            {
                icon: '/assets/arrows/icon-1.svg',
                text: 'Learn more',
            }
        ]
    },

    {
        id: '1',
        title: 'Pay-per-click<br>advertising',
        image: '/assets/services-imgs/service-2.png',
        bgColor: 'bg-p1',
        bgText: 'bg-p3 rounded-md',
        btn: [
            {
                icon: '/assets/arrows/icon-1.svg',
                text: 'Learn more',
            }
        ]
    },

    {
        id: '2',
        title: 'Social Media<br>Marketing',
        image: '/assets/services-imgs/service-3.png',
        bgColor: 'bg-p2',
        bgText: 'bg-p3 rounded-md',
        textColor: 'text-p3',
        hover: 'hover:border-b-2 hover:border-white',
        btn: [
            {
                icon: '/assets/arrows/icon-2.svg',
                text: 'Learn more',
            }
        ]
    },

    {
        id: '3',
        title: 'Email<br>Marketing',
        image: '/assets/services-imgs/service-4.png',
        bgColor: 'bg-p3',
        bgText: 'bg-p1 rounded-md',
        btn: [
            {
                icon: '/assets/arrows/icon-1.svg',
                text: 'Learn more',
            }
        ]
    },

    {
        id: '4',
        title: 'Content<br>Creation',
        image: '/assets/services-imgs/service-5.png',
        bgColor: 'bg-p1',
        bgText: 'bg-p3 rounded-md',
        btn: [
            {
                icon: '/assets/arrows/icon-1.svg',
                text: 'Learn more',
            }
        ]
    },

    {
        id: '5',
        title: 'Analytics and<br>Tracking',
        image: '/assets/services-imgs/service-6.png',
        bgColor: 'bg-p2',
        bgText: 'bg-p1 rounded-md',
        textColor: 'text-p3',
        hover: 'hover:border-b-2 hover:border-white',
        btn: [
            {
                icon: '/assets/arrows/icon-2.svg',
                text: 'Learn more',
            }
        ]
    },
]

const title = [
    {
        id: '0',
        name: 'Services',
        text: 'At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:'
    },

    {
        id: '1',
        name: 'Case Studies',
        text: 'Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies'
    },

    {
        id: '2',
        name: 'Our Working Process',
        text: 'Step-by-Step Guide to Achieving Your Business Goals'
    }, 

    {
        id: '3',
        name: 'Team',
        text: 'Meet the skilled and experienced team behind our successful digital marketing strategies'
    },

    {
        id: '4',
        name: 'Testimonials',
        text: 'Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services'
    },

    {
        id: '5',
        name: 'Contact Us',
        text: "Connect with Us: Let's Discuss Your Digital Marketing Needs"
    },
]

const caseStudies = [
    {
        id: '0',
        text: 'For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.',
        btn: 'Learn more',
    },

    {
        id: '1',
        text: 'For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.',
        btn: 'Learn more',
    },

    {
        id: '2',
        text: 'For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.',
        btn: 'Learn more',
    },
]

const steps = [
    {
      number: '01',
      title: 'Consultation',
      description: 'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.',
    },
    {
      number: '02',
      title: 'Research and Strategy Development',
      description: 'We will conduct research and develop a strategy tailored to your business needs.',
    },
    {
      number: '03',
      title: 'Implementation',
      description: 'We will implement the strategies discussed and continuously monitor the performance.',
    },

    {
        number: '04',
        title: 'Monitoring and Optimization',
        description: 'We will implement the strategies discussed and continuously monitor the performance.',
      },

      {
        number: '05',
        title: 'Reporting and Communication',
        description: 'We will implement the strategies discussed and continuously monitor the performance.',
      },

      {
        number: '06',
        title: 'Continual Improvement',
        description: 'We will implement the strategies discussed and continuously monitor the performance.',
      },
  ];

const team = [
    {
        id: '0',
        name: 'John Smith',
        title: 'CEO and Founder',
        experience: '10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy',
        photo: '/assets/photos/photo-1.svg',
    },

    {
        id: '1',
        name: 'Jane Doe',
        title: 'Director of Operations',
        experience: '7+ years of experience in project management and team leadership. Strong organizational and communication skills',
        photo: '/assets/photos/photo-2.svg',
    },

    {
        id: '2',
        name: 'Michael Brown',
        title: 'Senior SEO Specialist',
        experience: '5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization',
        photo: '/assets/photos/photo-3.svg',
    },

    {
        id: '3',
        name: 'Emily Johnson',
        title: 'PPC Manager',
        experience: '3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis',
        photo: '/assets/photos/photo-4.svg',
    },

    {
        id: '4',
        name: 'Brian Williams',
        title: 'Social Media Specialist',
        experience: '4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement',
        photo: '/assets/photos/photo-5.svg',
    },

    {
        id: '5',
        name: 'Sarah Kim',
        title: 'Content Creator',
        experience: '2+ years of experience in writing and editing Skilled in creating compelling, SEO-optimized content for various industries',
        photo: '/assets/photos/photo-6.svg',
    },
]

const testimonials = [
    {
        id: '0',
        name: 'John Smith',
        title: 'Marketing Director at XYZ Corp',
        comment: '"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."'
    },

    {
        id: '1',
        name: 'John Smith',
        title: 'Marketing Director at XYZ Corp',
        comment: '"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."'
    },

    {
        id: '2',
        name: 'John Smith',
        title: 'Marketing Director at XYZ Corp',
        comment: '"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."'
    },

    {
        id: '3',
        name: 'John Smith',
        title: 'Marketing Director at XYZ Corp',
        comment: '"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."'
    },

    {
        id: '4',
        name: 'John Smith',
        title: 'Marketing Director at XYZ Corp',
        comment: '"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."'
    }
]

export { buttonData, companyLogos, services, title, caseStudies, steps, team, testimonials };
