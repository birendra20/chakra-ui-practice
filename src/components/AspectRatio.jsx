import React from "react";
import { AspectRatio } from "@chakra-ui/react";

const AspectRatios = () => {
  return (
    <AspectRatio ratio={16 / 2}>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/K704DxoDb9U"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
    </AspectRatio>
  );
};

export default AspectRatios;
