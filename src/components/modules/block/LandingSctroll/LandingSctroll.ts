import styled from 'styled-components';

export const LandingSctroll = styled.div`
  margin-top: 28px;
  width: 100%;

  .list-item {
    display: flex;
    align-items: center;
    gap: 30px;
    overflow-x: auto;
  }

  .item {
    width: 620px;
    padding: 30px;
    border: 1px solid #ffffff14;
    border-radius: 28px;

    .description {
      margin-top: 40px;
      font-size: 24px;
      line-height: 31.2px;
      color: #c6f57a;
    }

    .description-skin {
      margin-top: 10px;
      font-size: 24px;
      line-height: 31.2px;
      color: #c6f57a;
    }

    .contact {
      margin-top: 40px;

      .contact-name {
        font-size: 20px;
        line-height: 26px;
        color: #c6f57a;
        font-weight: 500;
      }

      .contact-description {
        font-size: 16px;
        line-height: 20.8px;
        color: #c6f57a;
      }
    }
  }
`;
