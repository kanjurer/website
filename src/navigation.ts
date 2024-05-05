import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    { text: 'Home', href: '/' },
    { text: 'Resume', href: '/resume' },
    // { text: 'Projects', href: '/projects' },
    { text: 'Blog', href: '/blog/1' },
    { text: 'Contact', href: '/contact' },
  ],
  actions: [
    {
      text: 'Resume',
      href: '/resume.pdf',
      target: '_blank',
    },
  ],
};

export const footerData = {
  links: [
    {
      title: '',
      links: [
        { text: 'Home', href: '/' },
        { text: 'Resume', href: '/resume' },
        { text: 'Projects', href: '/projects' },
        { text: 'Blog', href: '/blog' },
        { text: 'Contact', href: '/contact' },
      ],
    },
  ],
  secondaryLinks: [
    // { text: 'Resume', href: getPermalink('/resume-pdf') }
  ],
  socialLinks: [
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/onwidget/astrowind' },
    { ariaLabel: 'Github', icon: 'tabler:brand-linkedin', href: 'https://linkedin.com/in/kanav-bhardwaj' },
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://twitter.com/kanjurer' },
    // { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://' },
    // { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  footNote: `
    <img class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm" src="https://onwidget.com/favicon/favicon-32x32.png" alt="onWidget logo" loading="lazy"></img>
    Made with love <3.
  `,
};
