import React, {useState} from 'react';
import styled, {keyframes} from 'styled-components';

const Card = () => {
  const [isClick, setClick] = useState(true);
  const onClickChange = () => setClick(!isClick);
  console.log(isClick);
  return (
    <div>
      <Layout>
        <Box>
          <Panel onClick={onClickChange}>
            <PanelTop>
              <PanelCircle />
              <PanelInfo>
                <PanelName>이름을 적어주세요</PanelName>
                <PanelDetail>성별 / 나이 / 전화번호를 적어주세요</PanelDetail>
              </PanelInfo>
            </PanelTop>
          </Panel>

          <Panel>
            <PanelTop>
              <PanelCircle />
              <PanelInfo>
                <PanelName>이름을 적어주세요</PanelName>
                <PanelDetail>성별 / 나이 / 전화번호를 적어주세요</PanelDetail>
              </PanelInfo>
            </PanelTop>
          </Panel>
          <Panel>
            <PanelTop>
              <PanelCircle />
              <PanelInfo>
                <PanelName>이름을 적어주세요</PanelName>
                <PanelDetail>성별 / 나이 / 전화번호를 적어주세요</PanelDetail>
              </PanelInfo>
            </PanelTop>
          </Panel>
          <Panel>
            <PanelTop>
              <PanelCircle />
              <PanelInfo>
                <PanelName>이름을 적어주세요</PanelName>
                <PanelDetail>성별 / 나이 / 전화번호를 적어주세요</PanelDetail>
              </PanelInfo>
            </PanelTop>
          </Panel>
          <Panel>
            <PanelTop>
              <PanelCircle />
              <PanelInfo>
                <PanelName>이름을 적어주세요</PanelName>
                <PanelDetail>성별 / 나이 / 전화번호를 적어주세요</PanelDetail>
              </PanelInfo>
            </PanelTop>
          </Panel>
        </Box>

        <Box>
          <div style={{fontSize: '14px'}}>확인 목록이 없습니다.</div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </Box>
      </Layout>
    </div>
  );
};

const Golayout = keyframes`
  0$ {
    opacity: 0;
    left: -20px;
  }
  100% {
    opacity: 1;
    left: 0;
  }
`;

const Layout = styled.div`
  min-width: 1200px;
  margin: 12px 50px 0;
  display: flex;
  justify-content: center;
`;

const Box = styled.div`
  position: relative;
  width: 448px;
  margin-right: 8px;
  padding: 16px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background: white;
  box-sizing: border-box;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.08);
  animation: ${Golayout} 0.35s;
  height: max-content;
`;

const Panel = styled.button`
  position: relative;
  width: 405px;
  flex-basis: 256px;
  flex-grow: 1;
  height: 76sp;
  padding: 18px 0 18px 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.04);
  box-sizing: border-box;
  margin: 0 4px 8px;
  cursor: pointer;
  transition: 0.35s;
  color: #495057;
  display: inline-block;
  background: white;

  &:hover {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.12);
    transition: 0.35s;
  }
  &:focus {
    background-color: #495057;
    color: white;
    border: 0;
    outline: 0;
  }
`;

const PanelTop = styled.div`
  display: flex;
  height: 54px;
`;

const PanelCircle = styled.div`
  flex-shrink: 0;
  width: 48px;
  height: 48px;
  border-radius: 48px;
  background: #eee;
  margin-right: 12px;
`;

const PanelInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const PanelName = styled.div`
  font-size: 14px;
  font-weight: bold;
  margin-top: 6px;
`;

const PanelDetail = styled.div`
  font-size: 12px;
  font-weight: bold;
  color: #adb5bd;
`;

export default Card;
