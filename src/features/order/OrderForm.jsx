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
  &::-webkit-progress-bar {
    border-radius: 7px;
  }

  &::-webkit-progress-value {
    border-radius: 7px;
  }
`;

function OrderForm({ children, orderPage }) {
  const steps = {
    1: "Fill in your information",
    2: "Fill in your Address",
    3: "Choose Payment",
    4: "Finish and Order",
  };

  return (
    <Form>
      {orderPage != null && (
        <ProgressHeader>
          <h3 class="text-xl font-semibold">
            Step {orderPage + 1}: {steps[orderPage + 1]}
          </h3>
          <ProgressStyled value={orderPage} max={3} />
        </ProgressHeader>
      )}
      {children}
    </Form>
  );
}
export default OrderForm;
