import Image from 'next/image';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import * as S from './LandingSctroll';

const data = [
  {
    description:
      ' I have been using this product for a few weeks now and I am blown away by the results.',
    description_skin:
      'My skin looks visibly brighter and smoother, and I have received so many compliments on my complexion.',
    contact_name: 'Nick Cregan',
    contact_description: 'CEO, Fairlight Management',
  },
  {
    description:
      ' I have been using this product for a few weeks now and I am blown away by the results.',
    description_skin:
      'My skin looks visibly brighter and smoother, and I have received so many compliments on my complexion.',
    contact_name: 'Nick Cregan',
    contact_description: 'CEO, Fairlight Management',
  },
  {
    description:
      ' I have been using this product for a few weeks now and I am blown away by the results.',
    description_skin:
      'My skin looks visibly brighter and smoother, and I have received so many compliments on my complexion.',
    contact_name: 'Nick Cregan',
    contact_description: 'CEO, Fairlight Management',
  },
];

export default function LandingSctroll() {
  return (
    <S.LandingSctroll>
      <div className="list-item">
        {data.map((item, index) => (
          <div className="item" key={index}>
            <Image
              src={'/icons/common/icon-sctroll.svg'}
              width={48}
              height={48}
              alt=""
            />
            <p className="description">{item.description}</p>
            <p className="description-skin">{item.description_skin}</p>
            <div className="contact">
              <span className="contact-name">{item.contact_name}</span>
              <p className="contact-description">{item.contact_description}</p>
            </div>
          </div>
        ))}
      </div>
    </S.LandingSctroll>
  );
}
