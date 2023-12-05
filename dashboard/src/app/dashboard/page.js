'use client';
import styled from '@emotion/styled';
import Image from 'next/image';

const Wrapper = styled.div`
  display: flex;
  border-width: 10px;
  padding-left: 240px;
  transition: 300ms;
`;

const DashboardAside = styled.aside`
  width: 240px;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  overflow-y: scroll;

  display: flex;
  flex-direction: column;
  row-gap: 20px;
  padding: 0 20px;
  background-color: hsl(var(--ui-color-background-100));

  &::-webkit-scrollbar {
    display: none;
  }
`;

const AsideLogo = styled.div`
  height: 90px;
  /* margin-bottom: 50px; */
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
  column-gap: 10px;
`;

const AsideMenuItem = styled.div`
  cursor: pointer;
  transition: 500ms;
  display: flex;
  align-items: center;
  border-radius: 10px;
  padding: 10px 20px;
  column-gap: 10px;
  font-size: var(--font-base);
  color: hsl(var(--ui-color-foreground-090));
  position: relative;
  &:hover {
    background-color: hsl(var(--ui-color-background-090));
  }
  & > p {
    flex-grow: 1;
    margin: 0;
  }
`;

const Menu = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;

const SubMenu = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 3px;
  margin-top: 3px;
  padding-left: 35px;
`;

const LogoText = styled.p`
  font-size: var(--font-xl);
  font-weight: bold;
  color: hsl(var(--ui-color-primary));
`;

const UserText = styled.p`
  font-size: var(--font-xl);
  font-weight: bold;
  color: hsl(var(--ui-color-primary));
  & > span {
    color: hsl(var(--ui-color-foreground-100));
    font-size: var(--font-sm);
  }
`;

const MainWrapper = styled.div`
  flex-grow: 1;
`;

const Main = styled.main`
  padding: 30px 20px;
`;

const DashboardPage = () => {
  return (
    <Wrapper>
      <DashboardAside>
        <AsideLogo>
          <Image width={70} height={70} src={'/logo.svg'} alt="logo" />
          <LogoText>Portfolio For</LogoText>
        </AsideLogo>
        <nav>
          <Menu>
            <li>
              <AsideMenuItem>
                <i class="fa-solid fa-chart-column"></i>
                <p>Overview</p>
                <i class="fa-solid fa-angle-right"></i>
              </AsideMenuItem>
            </li>
            <li>
              <AsideMenuItem>
                <i class="fa-solid fa-chart-column"></i>
                <p>경력</p>
                <i class="fa-solid fa-angle-right"></i>
              </AsideMenuItem>
            </li>
            <li>
              <AsideMenuItem>
                <i class="fa-solid fa-chart-column"></i>
                <p>나의 활동</p>
                <i class="fa-solid fa-angle-down"></i>
              </AsideMenuItem>
              <SubMenu>
                <li>
                  <AsideMenuItem>
                    <i class="fa-solid fa-l sub-icon"></i>
                    <p>봉사활동</p>
                    <i class="fa-solid fa-angle-right"></i>
                  </AsideMenuItem>
                </li>
                <li>
                  <AsideMenuItem>
                    <i class="fa-solid fa-l sub-icon"></i>
                    <p>독서활동</p>
                    <i class="fa-solid fa-angle-right"></i>
                  </AsideMenuItem>
                </li>
              </SubMenu>
            </li>
            <li>
              <AsideMenuItem>
                <i class="fa-solid fa-chart-column"></i>
                <p>할일 목록</p>
                <i class="fa-solid fa-angle-right"></i>
              </AsideMenuItem>
            </li>
          </Menu>
        </nav>
      </DashboardAside>
      <MainWrapper>
        <header>
          <UserText>
            배상엽<span>님</span>
          </UserText>
          <i class="fa-solid fa-bars menu-icon"></i>
        </header>
        <Main></Main>
        <footer>ⓒ 2023. bsy all rights reserved</footer>
      </MainWrapper>
    </Wrapper>
  );
};

export default DashboardPage;
