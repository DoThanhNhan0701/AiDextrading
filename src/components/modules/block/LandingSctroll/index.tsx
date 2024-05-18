import Image from 'next/image';
import * as S from './LandingSctroll';

export default function LandingSctroll() {
  return (
    <S.LandingSctroll>
      <div className="list-item">
        <div className="item">
          <Image
            src={'/icons/common/icon-sctroll.svg'}
            width={48}
            height={48}
            alt=""
          />
          <p className="description">
            I have been using this product for a few weeks now and I am blown
            away by the results.
          </p>
          <p className="description-skin">
            My skin looks visibly brighter and smoother, and I have received so
            many compliments on my complexion.
          </p>
          <div className="contact">
            <span className="contact-name">Nick Cregan</span>
            <p className="contact-description">CEO, Fairlight Management</p>
          </div>
        </div>

        <div className="item">
          <Image
            src={'/icons/common/icon-sctroll.svg'}
            width={48}
            height={48}
            alt=""
          />
          <p className="description">
            I have been using this product for a few weeks now and I am blown
            away by the results.
          </p>
          <p className="description-skin">
            My skin looks visibly brighter and smoother, and I have received so
            many compliments on my complexion.
          </p>
          <div className="contact">
            <span className="contact-name">Nick Cregan</span>
            <p className="contact-description">CEO, Fairlight Management</p>
          </div>
        </div>

        <div className="item">
          <Image
            src={'/icons/common/icon-sctroll.svg'}
            width={48}
            height={48}
            alt=""
          />
          <p className="description">
            I have been using this product for a few weeks now and I am blown
            away by the results.
          </p>
          <p className="description-skin">
            My skin looks visibly brighter and smoother, and I have received so
            many compliments on my complexion.
          </p>
          <div className="contact">
            <span className="contact-name">Nick Cregan</span>
            <p className="contact-description">CEO, Fairlight Management</p>
          </div>
        </div>
      </div>
    </S.LandingSctroll>
  );
}
