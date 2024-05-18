import styled from 'styled-components';

export const LandingProfessionalWrap = styled.div`
  position: relative;

  .LandingProfessional {
    background-image: url(/images/common/LandingProfessional.png);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center top;
    width: 100%;
    max-width: 1360px;
    height: auto;
    aspect-ratio: 1360 / 969;
    border-radius: 48px;
  }
`;

export const ContentProfessional = styled.div`
  position: absolute;
  top: 0;
  padding: 90px 0 0 0;
  width: 100%;
  background: linear-gradient(
      270.08deg,
      #060807 0.06%,
      rgba(6, 8, 7, 0) 53.99%,
      #060807 99.93%
    ),
    linear-gradient(180deg, rgba(6, 8, 7, 0) 0%, #060807 100%);
  height: 100%;
  border-radius: 48px;
  padding-bottom: 51px;

  .professional {
    padding: 0 60px;

    .btn-dex {
      margin-top: 80px;
    }

    .the-all {
      font-size: 18px;
      background: linear-gradient(
        90deg,
        #009596 0%,
        #c6f57a 50.5%,
        #e8ffc3 100%
      );
      background-clip: text;
      color: transparent;
    }

    .professional-trading {
      margin-top: 30px;
      font-size: 64px;
      line-height: 70.4px;
    }

    .trade-securely {
      font-size: 20px;
      line-height: 32px;
      color: #b5b5b5;
      margin-top: 30px;
      padding-right: 78px;
    }
  }

  .image-right {
    margin: 25.5px 0 25.5px 34px;
    display: flex;
    align-items: center;
    justify-content: center;

    .image-grip {
      position: relative;
      object-fit: contain;
      width: 100%;
      height: 100%;
    }

    .image-square {
      position: absolute;
    }
  }
`;
