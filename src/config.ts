import type {
  LicenseConfig,
  NavBarConfig,
  ProfileConfig,
  SiteConfig,
} from './types/config'
import { LinkPreset } from './types/config'

export const siteConfig: SiteConfig = {
  title: 'ShadesOfDeath',
  subtitle: 'Blog',
  lang: 'tr',
  themeHue: 250,
  banner: {
    enable: false,
    src: 'assets/images/demo-banner.png',
  },
}

export const navBarConfig: NavBarConfig = {
  links: [
    LinkPreset.Home,
    LinkPreset.Archive,
    LinkPreset.ognitorenks,
    LinkPreset.About,
    {
      name: 'GitHub',
      url: 'https://github.com/shadesofdeath',
      external: true,
    },
  ],
}

export const profileConfig: ProfileConfig = {
  avatar: 'assets/images/demo-avatar.png',
  name: 'Berkay AY',
  bio: 'Yaptığım uygulamaları paylaşmayı ve ekstradan insanları bilgilendirecek paylaşımlar yapıyorum..',
  links: [
    {
      name: 'Instagram',
      icon: 'fa6-brands:instagram',
      url: 'https://www.instagram.com/_berkay.ay/',
    },
    {
      name: 'GitHub',
      icon: 'fa6-brands:github',
      url: 'https://github.com/shadesofdeath',
    },
  ],
}

export const licenseConfig: LicenseConfig = {
  enable: true,
  name: 'CC BY-NC-SA 4.0',
  url: 'https://creativecommons.org/licenses/by-nc-sa/4.0/',
}
