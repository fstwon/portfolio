import { FirstWord } from './components/firstWord/FirstWord.component';
import { SecondWord } from './components/secondWord/SecondWord.component';
import './onboarding.style.scss';

export function Onboarding() {
  return (
    <section className='onboarding_section'>
      <>
        <FirstWord />
        <SecondWord />
      </> 
    </section>
  )
}