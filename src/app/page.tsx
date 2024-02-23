'use client'

import '@royalnavy/fonts'
import {
  IconChatBubble,
  IconExitToApp,
  IconFeedback,
  IconHome,
  IconLocalShipping,
  IconMessage,
  IconPerson,
  IconSettings,
  IconVerifiedUser,
} from '@royalnavy/icon-library'
import {
  Button,
  GlobalStyleProvider,
  Link,
  Masthead,
  MastheadUser,
  MastheadUserItem,
  Sidebar,
  SidebarNav,
  SidebarNavItem,
  SidebarWrapper,
} from '@royalnavy/react-component-library'
import styled from 'styled-components'

const isActive = new Date().getMinutes() % 2 === 0

const StyledSidebar = styled(Sidebar)`
  // max-height: 30rem;
`
const SimpleSidebarNav = () => (
  <SidebarNav>
    <SidebarNavItem
      icon={<IconHome />}
      link={<Link href="#">Dashboard</Link>}
    />
    <SidebarNavItem
      icon={<IconVerifiedUser />}
      link={<Link href="#">Reports</Link>}
    />
    <SidebarNavItem
      icon={<IconLocalShipping />}
      link={<Link href="#">Platforms</Link>}
    />
    <SidebarNavItem
      icon={<IconFeedback />}
      link={<Link href="#">Data&nbsp;Feed</Link>}
    />
    <SidebarNavItem
      icon={<IconMessage />}
      link={<Link href="#">Messages</Link>}
    />
    <SidebarNavItem
      icon={<IconSettings />}
      link={<Link href="#">Settings</Link>}
    />
  </SidebarNav>
)

const StyledMain = styled.main`
  flex: 1;
  display: flex;
`

const StyledApp = styled.div`
  height: 100vh;
  display: flex;

  display: flex;
  flex-direction: column;
`

export default function Home() {
  return (
    <GlobalStyleProvider>
      <StyledApp>
        <SidebarWrapper>
          <StyledSidebar>
            <SimpleSidebarNav />
          </StyledSidebar>
          <StyledMain>
            <Masthead
              homeLink={<Link href="#" />}
              title="Navy Schedule Service"
              user={
                <MastheadUser initials="RN">
                  <MastheadUserItem
                    icon={<IconPerson />}
                    link={<Link href="#">Profile</Link>}
                  />
                  <MastheadUserItem
                    icon={<IconSettings />}
                    link={<Link href="#">Settings</Link>}
                  />
                  <MastheadUserItem
                    icon={<IconChatBubble />}
                    link={<Link href="#">Support</Link>}
                  />
                  <MastheadUserItem
                    icon={<IconExitToApp />}
                    link={<Link href="#">Logout</Link>}
                  />
                </MastheadUser>
              }
              onSearch={function noRefCheck(e, searchText) {
                console.log('search', searchText)
              }}
            />
          </StyledMain>
        </SidebarWrapper>
      </StyledApp>
    </GlobalStyleProvider>
  )
}
