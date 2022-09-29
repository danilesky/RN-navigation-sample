import React, { useState } from "react";
import { AddButtonBody, BackgroundCut, Icon, Title } from "./AddButton.styled";

export const AddButton = () => {
  const [opened, setOpened] = useState(false);
  return (
    <BackgroundCut>
      <AddButtonBody>
        <Title>
          <Icon name="plus-square" size={24} color="black" />
        </Title>
      </AddButtonBody>
    </BackgroundCut>
  );
};
