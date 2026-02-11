import { useNavigate } from 'react-router';
import { PrivacyPolicy } from '@/app/components/PrivacyPolicy';

export function PrivacyPolicyPage() {
  const navigate = useNavigate();

  return (
    <PrivacyPolicy 
      onClose={() => navigate('/')}
      onShowTerms={() => navigate('/terms-of-service')}
      onShopArchiveClick={() => navigate('/shop-archive')}
      onTeamClick={() => navigate('/contributors')}
      onAdvertiseClick={() => navigate('/advertise')}
      onShowPressKit={() => navigate('/press-kit')}
    />
  );
}