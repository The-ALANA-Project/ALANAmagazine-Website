import { useNavigate } from 'react-router';
import { TermsOfService } from '@/app/components/TermsOfService';

export function TermsOfServicePage() {
  const navigate = useNavigate();

  return (
    <TermsOfService 
      onClose={() => navigate('/')}
      onShowPrivacy={() => navigate('/privacy-policy')}
      onShopArchiveClick={() => navigate('/shop-archive')}
      onTeamClick={() => navigate('/contributors')}
      onAdvertiseClick={() => navigate('/advertise')}
      onShowPressKit={() => navigate('/press-kit')}
    />
  );
}