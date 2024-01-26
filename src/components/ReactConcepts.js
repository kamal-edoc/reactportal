import { CORE_CONCEPTS } from "../data";
import Section from "./Section";
import CoreConcept from "./CoreConcept";

export default function ReactConcepts() {
    return (
      <Section title="Core Concepts" id="core-concepts">
        <ul>
          {CORE_CONCEPTS.map((conceptItem) => {
            return <CoreConcept {...conceptItem} />;
          })}
          {/* <CoreConcepts
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
          />*/}

          {/*
            <CoreConcepts {...CORE_CONCEPTS[1]} />
            <CoreConcepts {...CORE_CONCEPTS[2]} />
            <CoreConcepts {...CORE_CONCEPTS[3]} /> 
          */}
        </ul>
      </Section>
    );

}