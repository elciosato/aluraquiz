import styled from 'styled-components'
import Head from 'next/head'
import { useRouter } from 'next/router'

import db from '../db.json';
import Widget from '../src/components/Widget'
import QuizLogo from '../src/components/QuizLogo'
import QuizBackground from '../src/components/QuizBackground'
import Footer from '../src/components/Footer'
import GitHubCorner from '../src/components/GitHubCorner'

// const BackgroundImage = styled.div`
//   background-image: url(${db.bg});
//   flex: 1;
//   background-size: cover;
//   background-position: center;
// `;

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');
  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>My Alura Quiz</title>
      </Head>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <form onSubmit={function (eventInfo) {
              eventInfo.preventDefault();
              router.push(`/quiz?name=${name}`);
              console.log('Submit React');
            }}
            >
              <input 
                placeholder="Informe o seu nome" 
                onChange={function(eventInfo) {
                  // name = eventInfo.target.value;
                  setName(eventInfo.target.value);
                  console.log(name)
                }} />
              <button type="submit" disabled={name.length === 0}>
                Jogar 
              </button>
            </form>
            <p>{db.description}</p>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1>Quizes da Galera</h1>

            <p>lorem ipsum dolor sit amet...</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/elciosato" />
    </QuizBackground>
  );
}
