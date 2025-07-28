import MediaIcon from '@/components/MediaIcon.jsx'


export default {
  title: 'Base/MediaIcon',
  component: MediaIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs']
};

export const YouTube = {
  args: {
    link: 'https://www.youtube.com/',
    icon: '/icons/SEYVA_ICONS_YT.svg',
    alt: 'YouTube',
    width: 50,
    height: 50
  }
};

export const Instagram = {
  args: {
    link: 'https://instaram.com/',
    icon: '/icons/SEYVA_ICONS_IG.svg',
    alt: 'Instagram',
    width: 50,
    height: 50
  }
};

export const X = {
  args: {
    link: 'https://x.com/',
    icon: '/icons/SEYVA_ICONS_X.svg',
    alt: 'X',
    width: 50,
    height: 50
  }
};

export const Facebook = {
  args: {
    link: 'https://www.facebook.com/',
    icon: '/icons/SEYVA_ICONS_FB.svg',
    alt: 'Facebook',
    width: 50,
    height: 50
  }
};
