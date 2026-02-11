import { createBrowserRouter } from 'react-router';
import { AppLayout } from '@/app/components/AppLayout';
import { HomePage } from '@/app/pages/HomePage';
import { FeaturedCreatorsPage } from '@/app/pages/FeaturedCreatorsPage';
import { ContributorsPage } from '@/app/pages/ContributorsPage';
import { ShopArchivePage } from '@/app/pages/ShopArchivePage';
import { AdvertisePage } from '@/app/pages/AdvertisePage';
import { PrivacyPolicyPage } from '@/app/pages/PrivacyPolicyPage';
import { TermsOfServicePage } from '@/app/pages/TermsOfServicePage';
import { PressKitPage } from '@/app/pages/PressKitPage';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: AppLayout,
    children: [
      { index: true, Component: HomePage },
      { path: 'featured-creators', Component: FeaturedCreatorsPage },
      { path: 'contributors', Component: ContributorsPage },
      { path: 'shop-archive', Component: ShopArchivePage },
      { path: 'advertise', Component: AdvertisePage },
      { path: 'privacy-policy', Component: PrivacyPolicyPage },
      { path: 'terms-of-service', Component: TermsOfServicePage },
      { path: 'press-kit', Component: PressKitPage },
      { path: '*', Component: HomePage }, // Fallback to home for unknown routes
    ],
  },
]);
