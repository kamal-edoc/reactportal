import TabButton from "./TabButton";
import Section from "./Section";
import { useState } from "react";
import { EXAMPLES } from "../data";
import Tabs from "./Tabs";


export default function Examples(){
    const [selectTopic, setSelectTopic] = useState('components');
    const handleSelect = (selectedButton) => {
    setSelectTopic(selectedButton);
    // console.log(selectedButton);
  };

    return (
      <Section id="examples" title={"Examples"} name="Kamal">
        <Tabs
          
          buttons={
            <>
              <TabButton
                onClick={() => handleSelect("components")}
                isSelected={selectTopic === "components"}
              >
                Components
              </TabButton>
              <TabButton
                onClick={() => handleSelect("jsx")}
                isSelected={selectTopic === "jsx"}
              >
                JSX
              </TabButton>
              <TabButton
                onClick={() => handleSelect("props")}
                isSelected={selectTopic === "props"}
              >
                Props
              </TabButton>
              <TabButton
                onClick={() => handleSelect("state")}
                isSelected={selectTopic === "state"}
              >
                State
              </TabButton>
            </>
          }
        >

        </Tabs>
        <div id="tab-content">
          <h3>{EXAMPLES[selectTopic].title}</h3>
          <p>{EXAMPLES[selectTopic].description}</p>
          <pre>
            <code>{EXAMPLES[selectTopic].code}</code>
          </pre>
        </div>
      </Section>
    );
}
