import {
  IconChatBubble,
  IconExitToApp,
  IconPerson,
  IconSettings,
} from '@royalnavy/icon-library'
import {
  Link,
  Masthead,
  MastheadUser,
  MastheadUserItem,
} from '@royalnavy/react-component-library'
import styled from 'styled-components'

const StyledMasthead = styled.div``

export const SimpleMasthead = () => (
  <StyledMasthead>
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
  </StyledMasthead>
)
