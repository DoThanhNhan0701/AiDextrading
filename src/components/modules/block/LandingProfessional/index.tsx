import GripImage from '@/public/icons/common/grid-profesial.svg';
import { Col, Row } from 'antd';
import Image from 'next/image';
import * as S from './LandingProfessional';
import Button from '@/components/core/common/Button';

export default function LandingProfessional() {
  return (
    <S.LandingProfessionalWrap>
      <div className="LandingProfessional" />
      <S.ContentProfessional>
        <Row className="professional">
          <Col span={12}>
            <p className="the-all">The all-in-one solution</p>
            <div className="professional-trading">
              Professional Trading BOT using private Nodes
            </div>
            <p className="trade-securely">
              Trade securely with unprecedented ease and tap into the liquidity
              of these decentralized ecosystems.
            </p>
            <div className="btn-dex">
              <Button
                width="500px"
                height="62px"
                padding="18px 24px"
                type="primary"
              >
                DEX Integration
              </Button>
              <Button
                width="500px"
                height="62px"
                margin="10px 0 0 0"
                padding="18px 24px"
                type="primary"
              >
                Market Data Analysis
              </Button>
              <Button
                width="500px"
                height="62px"
                margin="10px 0 0 0"
                padding="18px 24px"
                type="primary"
              >
                Sniper Monitor
              </Button>
            </div>
          </Col>
          <Col span={12}>
            <div className="image-right">
              <Image
                className="image-grip"
                src={GripImage}
                unoptimized
                alt=""
              />
              <Image
                className="image-square"
                src={'/icons/common/square.png'}
                width={195.76}
                height={195.76}
                alt=""
              />
            </div>
          </Col>
        </Row>
      </S.ContentProfessional>
    </S.LandingProfessionalWrap>
  );
}
