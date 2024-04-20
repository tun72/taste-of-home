import styled from "styled-components";
import Form from "../../ui/Form";

const ProgressHeader = styled.div`
  margin-bottom: 4rem;
  display: grid;
  justify-content: space-between;
  gap: 1.2rem;
  grid-template-columns: auto auto;
  font-size: 1.8rem;
`;
const ProgressStyled = styled.progress`
  color: var(--color-brand-700);
  width: 100%;
  height: 12px;
  grid-column: 1 / -1;
`;

function OrderForm({ children, orderPage }) {
  return (
    <Form>
      {orderPage != null && (
        <ProgressHeader>
          <ProgressStyled value={orderPage} max={3} />
        </ProgressHeader>
      )}
      {children}
    </Form>
  );
}

export default OrderForm;
