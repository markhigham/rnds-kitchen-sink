import styled from 'styled-components'

const StyledContainer = styled.div`
  padding: 1rem;
`

export const LoremContainer = (props: { lines: number }) => {
  const text = 'lorem ipsum dolor sit amet consectetur adipiscing elit'

  const lines = new Array(props.lines).fill(0).map((e, i) => e + i)

  return (
    <StyledContainer>
      {lines.map((index) => (
        <div key={`key${index}`}>{text}</div>
      ))}
    </StyledContainer>
  )
}
