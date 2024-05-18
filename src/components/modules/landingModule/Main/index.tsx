import Footer from '../../block/Footer';
import LandingExpand from '../../block/LandingExpand';
import LandingFaster from '../../block/LandingFaster';
import LandingMoreThan from '../../block/LandingMoreThan';
import LandingProfessional from '../../block/LandingProfessional';
import LandingSctroll from '../../block/LandingSctroll';
import LandingTheModal from '../../block/LandingTheModal';
import LandingWhyTrust from '../../block/LandingWhyTrust';
import * as S from './Main';

export default function MainLanding() {
  return (
    <S.MainWrap>
      <div className="content-main-landing">
        <LandingTheModal />
        <LandingProfessional />
        <LandingFaster />
        <LandingMoreThan />
        <LandingWhyTrust />
        <LandingSctroll />
        <LandingExpand />
        <Footer />
      </div>
    </S.MainWrap>
  );
}
