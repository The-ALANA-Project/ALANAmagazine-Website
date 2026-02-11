import { useNavigate } from 'react-router';
import { TermsOfService } from '@/app/components/TermsOfService';

export function TermsOfServicePage() {
  const navigate = useNavigate();

  return (
    <TermsOfService 
      onClose={() => navigate('/')}
      onShowPrivacy={() => navigate('/privacy-policy')}
      onShowPressKit={() => navigate('/press-kit')}
    />
  );
}