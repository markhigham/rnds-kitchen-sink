'use client'

import { SimpleMasthead } from '@/app/simple-masthead'
import { SimpleSidebarNav } from '@/app/simple-sidebar'
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

const StyledSidebar = styled(Sidebar)`
  // max-height: 30rem;
`

const StyledApp = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`

const StyledMain = styled.div`
  border: dashed 3px hotpink;
  flex-direction: column;
  overflow: hidden;
`

const StyledBreadcrumbs = styled.div`
  border-top: 1px solid #e5e5e5;
  padding: 1rem;
`

const StyledContents = styled.div`
  flex-grow: 1;
  border: dotted 5px blue;
  overflow: scroll;
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
            <SimpleMasthead />
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
