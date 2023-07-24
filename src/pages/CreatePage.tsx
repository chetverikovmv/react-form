import { Container } from '../components/Container'
import { ProgressBar } from '../components/ProgressBar'
import { StepOneForm } from '../components/StepOneForm'
import { StepThreeForm } from '../components/StepThreeForm';
import { StepTwoForm } from '../components/StepTwoForm';
import { useTypedSelector } from '../hooks/useTypedSelector';

export const CreatePage = () => {
  const { step } = useTypedSelector(state => state.createForm.formData);

  return (
    <Container >
      <ProgressBar step={step}/>
      
      {step === '1' && <StepOneForm />}
      {step === '2' && <StepTwoForm />}
      {step === '3' && <StepThreeForm />}
    </Container>
  )
}
