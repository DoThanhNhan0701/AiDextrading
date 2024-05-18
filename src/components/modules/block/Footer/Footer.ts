import styled from 'styled-components';

export const FooterWrap = styled.div`
  margin-top: 241px;

  .logo {
    display: flex;
    align-items: center;
    gap: 10px;

    span {
      display: block;
      font-size: 19px;
      font-weight: 700;
    }
  }

  .footer-end {
    margin-top: 60px;
    border-top: 1px solid #b5b5b5;
    padding: 60px 0 40px 0;
    display: flex;
    justify-content: space-between;

    .list-tems {
      display: flex;
      align-items: center;
      gap: 20px;
      color: #b5b5b5;
    }

    .list-icons {
      display: flex;
      align-items: center;
      gap: 8px;
    }
  }
`;

export const Item = styled.div`
  .title {
    font-size: 16px;
    line-height: 25.6px;
  }

  .list-menu {
    margin-top: 24px;
    display: flex;
    flex-direction: column;
    gap: 16px;

    p {
      color: #b5b5b5;
      line-height: 16.8px;
    }
  }
`;
