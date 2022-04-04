import ContainerDesktop from '../src/ContainerDesktop'
import Header from '../src/Header'
import QuestionsContainer from '../src/QuestionsContainer'

export default function Home() {
  return (
    <>
      <ContainerDesktop>
        <Header></Header>
        <QuestionsContainer />
      </ContainerDesktop>
      
    </>
  )
}
