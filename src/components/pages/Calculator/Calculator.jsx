import { Container } from './calculator.styled';
import DataForm from '../../dataForm/dataForm';
import { Button } from 'components/Button/Button';

const Calculator = () => {
  return (
    <Container>
      <div>
        <DataForm></DataForm>
        <Button type="submit" text="Comienza a perder peso" />
      </div>
    </Container>
  );
};
export default Calculator;
