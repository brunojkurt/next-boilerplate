import { WelcomeText } from 'styles/pages/home'
import { useI18n } from 'hooks/i18n'

const Home = () => {
  const { t } = useI18n()
  return (
    <WelcomeText>{t('pages.home.welcome')}</WelcomeText>
  )
}

export default Home
