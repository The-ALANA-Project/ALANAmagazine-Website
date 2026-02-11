import { useNavigate } from 'react-router';
import { PressKit } from '@/app/components/PressKit';

export function PressKitPage() {
  const navigate = useNavigate();

  return (
    <PressKit 
      onClose={() => navigate('/')}
      onShopArchiveClick={() => navigate('/shop-archive')}
      onTeamClick={() => navigate('/contributors')}
      onAdvertiseClick={() => navigate('/advertise')}
      onShowTerms={() => navigate('/terms-of-service')}
      onShowPrivacy={() => navigate('/privacy-policy')}
    />
  );
}