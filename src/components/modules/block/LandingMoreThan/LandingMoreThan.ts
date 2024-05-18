import styled from 'styled-components';

export const LandingMoreThanWrap = styled.div`
  margin-top: 160px;
  position: relative;

  .LandingMoreThanWrap {
    width: 100%;
    height: 505px;
    border-radius: 48px;
  }

  .title-header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    top: 0;
    width: 100%;
    margin-top: 160px;

    .more-than {
      font-size: 64px;
      line-height: 70.4px;
      text-align: center;
    }

    .description {
      padding-top: 30px;
      max-width: 545px;
      font-size: 18px;
      line-height: 28.8px;
      margin: auto;
      text-align: center;
    }

    .btn-contact-sales {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      position: relative;
    }
  }

  .landing-asset {
    display: flex;
    justify-content: center;
    margin-top: 76px;
    margin-bottom: 160px;
  }
`;
