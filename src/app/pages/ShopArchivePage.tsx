import { useNavigate } from 'react-router';
import { ShopArchive } from '@/app/components/ShopArchive';

export function ShopArchivePage() {
  const navigate = useNavigate();

  return (
    <ShopArchive 
      onClose={() => navigate('/')}
      onShopArchiveClick={() => {}}
      onTeamClick={() => navigate('/contributors')}
      onAdvertiseClick={() => navigate('/advertise')}
      onFeaturedCreatorsClick={() => navigate('/featured-creators')}
      onShowTerms={() => navigate('/terms-of-service')}
      onShowPrivacy={() => navigate('/privacy-policy')}
      onShowPressKit={() => navigate('/press-kit')}
    />
  );
}
