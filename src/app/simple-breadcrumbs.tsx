import {
  Breadcrumbs,
  BreadcrumbsItem,
  Link,
} from '@royalnavy/react-component-library'
import styled from 'styled-components'

export const StyledBreadcrumbs = styled.div`
  //border-top: 1px solid #e5e5e5;
  padding: 1rem;
`

export const SimpleBreadCrumbs = () => (
  <StyledBreadcrumbs>
    <Breadcrumbs>
      <BreadcrumbsItem link={<Link href="/">Home</Link>} />
      <BreadcrumbsItem href="/components">Components</BreadcrumbsItem>
      <BreadcrumbsItem
        link={<Link href="/components/breadcrumb">Breadcrumb</Link>}
      />
    </Breadcrumbs>
  </StyledBreadcrumbs>
)
