import styled from 'styled-components'

const StyledContainer = styled.div`
  padding: 1rem;
  line-height: 1.8;
`

export const LoremContainer = (props: { lines: number }) => {
  const text =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  const lines = new Array(props.lines).fill(0).map((e, i) => e + i)

  return (
    <StyledContainer>
      {lines.map((index) => (
        <p key={`key${index}`}>{text}</p>
      ))}
    </StyledContainer>
  )
}
