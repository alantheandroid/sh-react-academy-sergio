import styled from 'styled-components'

export const StyledProdContainer = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 35px;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    90deg,
    rgba(233, 233, 233, 0.7) 0%,
    rgba(255, 255, 255, 1) 100%
  );

  .products-section {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: ${({ theme }) => theme.spacing.md}px;
  }

  .products-filter {
  }

  .products-list {
    display: flex;
    justify-content: center;
    align-items: stretch;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.md}px;
  }
`
