import styled from "@emotion/styled";
import HomeIcon from '@mui/icons-material/Home';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined';
import TopicOutlinedIcon from '@mui/icons-material/TopicOutlined';
import ChecklistOutlinedIcon from '@mui/icons-material/ChecklistOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import SubdirectoryArrowRightOutlinedIcon from '@mui/icons-material/SubdirectoryArrowRightOutlined';

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

  &::-webkit-scrollbar{
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
  & > img{
    height: 100%;
  }
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
  position:relative;
  &:hover{
    background-color: hsl(var(--ui-color-background-090));
  }
  & > p{
    flex-grow: 1;
    margin: 0;
  }
  & > .sub-icon{
    position: absolute;
    left: -13px;
    top: 7px;
  }

  & > svg{
    font-size: 16px;
  }

  ${(props)=> props.active && 
    {backgroundColor : 'hsl(var(--ui-color-background-090))' }
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
  & > span{
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

const Header = styled.header`
  height: 90px;
  position:sticky;
  top: 0;

  display: flex;
  align-items: center;
  padding: 0 20px;
  background-color: hsl(var(--ui-color-background-100));
  /* backdrop-filter: blur(5px); */

  justify-content: space-between;
`;

const Footer = styled.footer`
  border-top: 1px solid hsl(var(--ui-color-foreground-000));
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 0;
`;

const DashboardPage = ()=>{
  return (
    <Wrapper>
    <DashboardAside>
      <AsideLogo>
        <img src={'/logo.svg'} alt="logo"/>
        <LogoText>Portfolio For</LogoText>
      </AsideLogo>
      <nav>
        <Menu>
          <li >
            <AsideMenuItem active={true}>
              <DashboardOutlinedIcon/>
              <p>Overview</p>
              <KeyboardArrowRightOutlinedIcon/>
            </AsideMenuItem>
          </li>
          <li >
            <AsideMenuItem >
              <AssignmentIndOutlinedIcon/>
              <p>경력</p>
              <KeyboardArrowRightOutlinedIcon/>
            </AsideMenuItem>
          </li>
          <li >
            <AsideMenuItem>
              <TopicOutlinedIcon/>
              <p>나의 활동</p>
              <KeyboardArrowDownOutlinedIcon/>
            </AsideMenuItem>
            <SubMenu>
              <li>
                <AsideMenuItem >
                  <SubdirectoryArrowRightOutlinedIcon className="sub-icon"/>
                  <p>봉사활동</p>
                  <KeyboardArrowRightOutlinedIcon/>
                </AsideMenuItem>
              </li>
              <li>
                <AsideMenuItem>
                  <SubdirectoryArrowRightOutlinedIcon className="sub-icon"/>
                  <p>독서활동</p>
                  <KeyboardArrowRightOutlinedIcon/>
                </AsideMenuItem>
              </li>
            </SubMenu>
          </li>
          <li >
            <AsideMenuItem>
              <ChecklistOutlinedIcon/>
              <p>할일 목록</p>
              <KeyboardArrowRightOutlinedIcon/>
            </AsideMenuItem>
          </li>
        </Menu>
      </nav>
    </DashboardAside>
    <MainWrapper>
      <Header>
        <UserText>배상엽<span>님</span></UserText>
        <i class="fa-solid fa-bars menu-icon"></i>
      </Header>
      <Main>
      </Main>
      <Footer>
        ⓒ 2023. bsy all rights reserved
      </Footer>
    </MainWrapper>
    </Wrapper>
  )
}

export default DashboardPage;

