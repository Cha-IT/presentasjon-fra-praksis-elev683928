import React from 'react';
import { Deck, Slide, Heading, Text, FlexBox, DefaultTemplate } from 'spectacle';

function App() {
  return (
    <Deck template={<DefaultTemplate />}>
      
      {/* Slide 1: Tittel */}
      <Slide backgroundColor='black'>
        <FlexBox height="100%" flexDirection="column">
          <Heading color='lime'>Utplassering ved Serit</Heading>
          <Text color='lime'>Laget av Malte</Text>
        </FlexBox>
      </Slide>

      {/* Slide 2: Innhold */}
      <Slide backgroundColor='black'>
        <Heading color='lime'>Hva gjør Serit?</Heading>
        <Text color='lime'>
          Serit er en IT konsult som hjelper bedrifter med jobbdag IT.
        </Text>
        <Text color='lime'>
          Perfekt sted for noen som har lyst å lære mye av IT med mange ulike oppgaver.
        </Text>
      </Slide>

    </Deck>
  );
}

export default App;