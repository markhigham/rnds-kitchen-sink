'use client'

import { SimpleBreadCrumbs } from '@/app/simple-breadcrumbs'
import { SimpleMasthead } from '@/app/simple-masthead'
import { SimpleSidebarNav } from '@/app/simple-sidebar'
import { LoremContainer } from '@/containers/LoremContainer'
import '@royalnavy/fonts'
import {
  GlobalStyleProvider,
  Sidebar,
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
  flex-direction: column;
  height: 100vh;
  display: flex;
`
const StyledContents = styled.div`
  overflow: auto;
`

const StyledPanels = styled.div`
  display: flex;
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
            <SimpleBreadCrumbs />
            <StyledContents>
              <StyledPanels>
                <LoremContainer lines={5} />
                <LoremContainer lines={6} />
                <LoremContainer lines={5} />
              </StyledPanels>
            </StyledContents>
          </StyledMain>
        </SidebarWrapper>
      </StyledApp>
    </GlobalStyleProvider>
  )
}
