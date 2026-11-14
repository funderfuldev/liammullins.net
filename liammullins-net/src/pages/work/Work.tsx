import useIsMobile from '../../hooks/useIsMobile';
import WorkDesktop from './WorkDesktop';
import WorkMobile from './WorkMobile';

export default function Work() {
  const isMobile = useIsMobile();
  return isMobile ? <WorkMobile /> : <WorkDesktop />;
}