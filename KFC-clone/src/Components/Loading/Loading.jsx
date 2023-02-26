import { Center, Image } from "@chakra-ui/react";
import loading_gif from "../home/loading_gif.gif";

export default function Loading() {
  return (
    <Center>
      <Image z-index="10" src={loading_gif} />
    </Center>
  );
}
