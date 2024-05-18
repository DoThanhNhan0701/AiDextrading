import styled from 'styled-components';

export const LandingFasterWrap = styled.div`
  margin-top: 160px;

  .title {
    text-align: center;

    h5 {
      font-size: 64px;
      line-height: 70.4px;
    }

    p {
      padding-top: 30px;
      font-size: 20px;
      line-height: 32px;
      max-width: 520px;
      margin: auto;
    }
  }
`;

export const ContentMission = styled.div``;

export const Mission = styled.div`
  margin-top: 80px;
  padding: 40px;
  border-radius: 28px;
  border: 1px solid rgba(255, 255, 255, 0.08);

  span {
    font-size: 40px;
    line-height: 44px;
  }

  p {
    margin-top: 24px;
    max-width: 521px;
    font-size: 18px;
    line-height: 28.8px;
    color: #b5b5b5;
  }

  .image {
    position: relative;

    .graph-background {
      width: 100%;
      height: 100%;
      object-fit: contain;
      margin-top: 30px;
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 16px;
    }

    .graph-dot {
      top: 10%;
      position: absolute;
      width: 100%;
      height: 100%;
      object-fit: contain;
      left: 0;
    }

    .text-popup {
      top: 20%;
      left: 35%;
      position: absolute;
      display: flex;
      align-items: center;
      gap: 2px;
      padding: 8px 12px;
      border: 1px solid rgba(198, 245, 122, 0.4);
      border-radius: 8px;

      span {
        margin-left: 8px;
        font-weight: 500;
        font-size: 14px;
        line-height: 16.8px;
      }

      p {
        font-size: 14px;
        margin-top: 0;
        line-height: 16.8px;
      }
    }
  }
`;

export const Vision = styled.div`
  margin-top: 80px;
  padding: 40px;
  border-radius: 28px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  position: relative;

  span {
    font-size: 40px;
    line-height: 44px;
  }

  p {
    margin-top: 24px;
    max-width: 521px;
    font-size: 18px;
    line-height: 28.8px;
    color: #b5b5b5;
  }

  .media {
    width: 100%;
    height: 100%;
    object-fit: contain;
    margin-top: -99px;
  }
`;

export const OptimizedForSecurity = styled.div`
  margin-top: 40px;
  position: relative;
  width: 100%;
  text-align: center; //nhandt

  .background {
    transform: rotateX(180deg);
    width: 100%;

    .right {
      transform: rotateY(180deg);
      object-fit: contain;
      /* width: 50%; */
    }
  }

  .content-base {
    margin: 60px;

    .content {
      top: 10%;
      width: 100%;
      position: absolute;
      padding: 31.47px;
    }

    .title {
      margin-top: 59px;
      font-size: 40px;
      line-height: 44px;
      display: block;
      text-align: left;
    }

    .description {
      font-size: 18px;
      line-height: 28.8px;
      max-width: 456px;
      margin-top: 24px;
    }
  }

  .OptimizedAsset {
    width: 100%;
    margin-left: -88px;
  }
`;

export const ListFeatures = styled.div`
  margin-top: 80px;
`;

export const Item = styled.div`
  .header {
    display: flex;
    align-items: center;
    gap: 14px;

    .title {
      font-size: 20px;
      line-height: 26px;
    }
  }

  .description {
    font-size: 16px;
    color: #b5b5b5;
    line-height: 25.6px;
    margin-top: 20px;
  }
`;
