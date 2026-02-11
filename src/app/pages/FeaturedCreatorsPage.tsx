import { useNavigate, useOutletContext } from 'react-router';
import { FeaturedCreators } from '@/app/components/FeaturedCreators';

type OutletContext = {
  isWalletConnected: boolean;
  onWalletToggle: () => void;
};

export function FeaturedCreatorsPage() {
  const navigate = useNavigate();
  const { isWalletConnected, onWalletToggle } = useOutletContext<OutletContext>();

  return (
    <FeaturedCreators 
      onClose={() => navigate('/')}
      onShopArchiveClick={() => navigate('/shop-archive')}
      onTeamClick={() => navigate('/contributors')}
      onAdvertiseClick={() => navigate('/advertise')}
      onShowTerms={() => navigate('/terms-of-service')}
      onShowPrivacy={() => navigate('/privacy-policy')}
      onShowPressKit={() => navigate('/press-kit')}
      isWalletConnected={isWalletConnected}
      onWalletToggle={onWalletToggle}
    />
  );
}
