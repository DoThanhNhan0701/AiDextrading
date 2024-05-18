import styled from 'styled-components';

export const LandingWhyTrust = styled.div`
  .title {
    font-size: 64px;
    line-height: 70.4px;
  }

  .description {
    font-size: 18px;
    line-height: 28.8px;
    color: #b5b5b5;
    max-width: 530px;
    margin-top: 12ox;
  }

  .list-btn {
    display: flex;
    gap: 10px;
    height: 100%;
    align-items: end;

    .btn-why {
      display: block;
      padding: 7px 16px;
      border: 1px solid #ffffff1a;
      height: 36px;
      border-radius: 38px;
      width: 161px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }

    .shadown {
      box-shadow: 0px 4px 50px 0px #c6f57a66, 0px 0px 12px 0px #ffffff33;
    }
  }
`;

export const ContentWhy = styled.div`
  margin-top: 40px;
  padding: 60px;
  border: 1px solid #ffffff14;
  border-radius: 28px;

  .realistic-scenarios {
    font-size: 40px;
    margin-top: 30px;
    line-height: 44px;
  }
`;

export const ListRealisticScenarios = styled.div`
  margin-top: 80px;
`;

export const ItemRealisticScenarios = styled.div`
  max-width: 330px;

  .header {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;

    p {
      font-size: 20px;
      line-height: 26px;
    }

    .description {
      line-height: 25.6px;
      font-size: 16px;
    }
  }
`;
