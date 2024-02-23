'use client'

import { LoremContainer } from '@/containers/LoremContainer'
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
  Breadcrumbs,
  BreadcrumbsItem,
  Button,
  GlobalStyleProvider,
  Link,
  Masthead,
  MastheadUser,
  MastheadUserItem,
  SectionDivider,
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
  flex-direction: column;
  overflow: hidden;
`

const StyledApp = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`

const StyledBreadcrumbs = styled.div`
  border-top: 1px solid #e5e5e5;
  padding: 1rem;
`

const StyledContents = styled.div`
  background-color: teal;
  color: white;
  flex: 1;
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
              title="Kitchen Sink"
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
            <StyledBreadcrumbs>
              <Breadcrumbs>
                <BreadcrumbsItem link={<Link href="/">Home</Link>} />
                <BreadcrumbsItem href="/components">Components</BreadcrumbsItem>
                <BreadcrumbsItem
                  link={<Link href="/components/breadcrumb">Breadcrumb</Link>}
                />
              </Breadcrumbs>
            </StyledBreadcrumbs>
            <StyledContents>
              <LoremContainer lines={150} />
              <div>Hello world</div>
            </StyledContents>
          </StyledMain>
        </SidebarWrapper>
      </StyledApp>
    </GlobalStyleProvider>
  )
}
