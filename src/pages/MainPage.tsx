import { Container } from '../components/Container'
import { ProfileForm } from '../components/ProfileForm'
import { ProfileHeader } from '../components/ProfileHeader'

export const MainPage = () => {
  return (
    <Container main>      
      <ProfileHeader />
      <ProfileForm inputWidth={400}/>
    </Container>
  )
}
