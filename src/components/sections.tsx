import { HeroProps } from './hero'
import { FeatureListProps } from './feature-list'
import { LogoListProps } from './logo-list'
import { BenefitListProps } from './benefit-list'
import { TestimonialListProps } from './testimonial-list'
import { StatListProps } from './stat-list'
import { CtaProps } from './cta'
import { ProductListProps } from './product-list'

import { AboutHeroProps } from './about-hero'
import { AboutStatListProps } from './about-stat-list'
import { AboutLeadershipProps } from './about-leadership'
import { AboutLogoListProps } from './about-logo-list'
import { CarouselProps } from './carsousel-section'
import { IMarkdownSectionProps } from './markdown-section'
import { IAboutPeopleProps } from './people-info'
import { ISanityImage } from './ui'
import { IHorizontalSectionProps } from './horizontal-section'
import { IFaqProps } from './faq'
import { IMembershipFormProps } from './membership-form'

export { default as HomepageHero } from './hero'
export { default as HomepageFeatureList } from './feature-list'
export { default as HomepageLogoList } from './logo-list'
export { default as HomepageBenefitList } from './benefit-list'
export { default as HomepageTestimonialList } from './testimonial-list'
export { default as HomepageStatList } from './stat-list'
export { default as HomepageCta } from './cta'
export { default as HomepageProductList } from './product-list'
export { default as AboutHero } from './about-hero'
export { default as AboutStatList } from './about-stat-list'
export { default as AboutLeadership } from './about-leadership'
export { default as AboutLogoList } from './about-logo-list'
export { default as HomepageCarousel } from './carsousel-section'
export { default as HomepageMarkdown } from './markdown-section'
export { default as PeopleInfo } from './people-info'
export { default as HorizontalSection } from './horizontal-section'

export type SectionProps =
  | HeroProps
  | FeatureListProps
  | LogoListProps
  | BenefitListProps
  | TestimonialListProps
  | StatListProps
  | CtaProps
  | ProductListProps
  | AboutHeroProps
  | AboutStatListProps
  | AboutLeadershipProps
  | AboutLogoListProps
  | CarouselProps
  | IMarkdownSectionProps
  | IAboutPeopleProps
  | IHorizontalSectionProps

type Blocktypes =
  | 'HomepageHero'
  | 'HomepageFeatureList'
  | 'HomepageLogoList'
  | 'HomepageBenefitList'
  | 'HomepageTestimonialList'
  | 'HomepageStatList'
  | 'HomepageCta'
  | 'HomepageProductList'
  | 'AboutHero'
  | 'AboutStatList'
  | 'AboutLeadership'
  | 'AboutLogoList'
  | 'HomepageCarousel'
  | 'HomepageMarkdown'
  | 'PeopleInfo'
  | 'HorizontalSection'

type Types = 'Image'

type WithBlocktype<B = Blocktypes, P = SectionProps> = {
  id: string
  blocktype: B
} & P

type Typed<B = Blocktypes | Types, P = SectionProps> = {
  blocktype: B
} & P

type HomepageMarkdownBlock = WithBlocktype<
  'HomepageMarkdown',
  IMarkdownSectionProps
>

type HorizontalSectionBlock = WithBlocktype<
  'HorizontalSection',
  IHorizontalSectionProps
>

type FaqBlock = WithBlocktype<'Faq', IFaqProps>
type FormBlock = WithBlocktype<'Form', IMembershipFormProps>

type HorizontalSectionElement = Typed<
  'HorizontalSectionElement',
  { fraction: number; element: HomepageMarkdownBlock | FaqBlock | FormBlock }
>

type FractionedImage = Typed<
  'FractionedImage',
  { fraction: number; image: ISanityImage }
>

export type HomepageBlock =
  | WithBlocktype<'HomepageHero', HeroProps>
  | WithBlocktype<'HomepageFeatureList', FeatureListProps>
  | WithBlocktype<'HomepageLogoList', LogoListProps>
  | WithBlocktype<'HomepageBenefitList', BenefitListProps>
  | WithBlocktype<'HomepageTestimonialList', TestimonialListProps>
  | WithBlocktype<'HomepageStatList', StatListProps>
  | WithBlocktype<'HomepageCta', CtaProps>
  | WithBlocktype<'HomepageProductList', ProductListProps>
  | WithBlocktype<'AboutHero', AboutHeroProps>
  | WithBlocktype<'AboutStatList', AboutStatListProps>
  | WithBlocktype<'AboutLeadership', AboutLeadershipProps>
  | WithBlocktype<'AboutLogoList', AboutLogoListProps>
  | WithBlocktype<'HomepageCarousel', CarouselProps>
  | HomepageMarkdownBlock
  | HorizontalSectionBlock

export type DepartmentBlock =
  | WithBlocktype<'PeopleInfo', IAboutPeopleProps>
  | WithBlocktype<'HomepageMarkdown', IMarkdownSectionProps>

export type ArticleBlock = WithBlocktype<
  'HomepageMarkdown',
  IMarkdownSectionProps
>

export type HorizontalSectionContent =
  | HorizontalSectionElement
  | FractionedImage
