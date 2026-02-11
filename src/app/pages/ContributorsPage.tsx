import { useNavigate, useOutletContext } from 'react-router';
import { Team } from '@/app/components/Team';

type OutletContext = {
  isWalletConnected: boolean;
  onWalletToggle: () => void;
};

export function ContributorsPage() {
  const navigate = useNavigate();
  const { isWalletConnected, onWalletToggle } = useOutletContext<OutletContext>();

  return (
    <Team 
      onClose={() => navigate('/')}
      onShopArchiveClick={() => navigate('/shop-archive')}
      onTeamClick={() => navigate('/contributors')}
      onAdvertiseClick={() => navigate('/advertise')}
      onFeaturedCreatorsClick={() => navigate('/featured-creators')}
      onShowTerms={() => navigate('/terms-of-service')}
      onShowPrivacy={() => navigate('/privacy-policy')}
      onShowPressKit={() => navigate('/press-kit')}
      isWalletConnected={isWalletConnected}
      onWalletToggle={onWalletToggle}
    />
  );
}
