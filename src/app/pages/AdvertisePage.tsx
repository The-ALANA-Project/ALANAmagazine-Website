import { useNavigate, useOutletContext } from 'react-router';
import { AdvertiseWithUs } from '@/app/components/AdvertiseWithUs';

type OutletContext = {
  isWalletConnected: boolean;
  onWalletToggle: () => void;
};

export function AdvertisePage() {
  const navigate = useNavigate();
  const { isWalletConnected, onWalletToggle } = useOutletContext<OutletContext>();

  return (
    <AdvertiseWithUs 
      onClose={() => navigate('/')}
      onShopArchiveClick={() => navigate('/shop-archive')}
      onTeamClick={() => navigate('/contributors')}
      onAdvertiseClick={() => {}}
      onShowTerms={() => navigate('/terms-of-service')}
      onShowPrivacy={() => navigate('/privacy-policy')}
      onShowPressKit={() => navigate('/press-kit')}
      isWalletConnected={isWalletConnected}
      onWalletToggle={onWalletToggle}
    />
  );
}
