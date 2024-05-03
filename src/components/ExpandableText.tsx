import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  text: string;
}

const ExpandableText = ({ text }: Props) => {
  const [expanded, isExpanded] = useState(false);
  const limit = 300;

  if (!text) return null;

  if (text.length <= limit) return <Text>{text}</Text>;

  return (
    <>
      {expanded ? <Text>{text}</Text> : <Text>{text.slice(0, 300)}...</Text>}
      <Button
        onClick={() => isExpanded(!expanded)}
        fontWeight="bold"
        colorScheme="yellow"
        marginTop={5}
      >
        {expanded ? "Show Less" : "Read More"}
      </Button>
    </>
  );
};

export default ExpandableText;
