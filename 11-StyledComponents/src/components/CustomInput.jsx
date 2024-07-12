import { styled } from "styled-components";

const ControlLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({ $invalid }) => ($invalid ? "#f87171" : "#6b7280")};
`;

const ControlInput = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  line-height: 1.5;
  background-color: ${({ $invalid }) => ($invalid ? "#fed2d2" : "#d1d5db")};
  color: ${({ $invalid }) => ($invalid ? "#ef4444" : "#374151")};
  border: 1px solid transparent;
  border-color: ${({ $invalid }) => ($invalid ? "#f73f3f" : undefined)};
  border-radius: 0.25rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
`;

const CustomInput = ({ label, invalid, ...props }) => {
  return (
    <p>
      <ControlLabel $invalid={invalid}> {label} </ControlLabel>
      <ControlInput $invalid={invalid} {...props} />
    </p>
  );
};

export default CustomInput;
