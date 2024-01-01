import React from "react";

type ContainerProp = {
  style: React.CSSProperties;
};

const Container = (props: ContainerProp) => {
  return (
    <div>
      <div style={props.style}>Text content goes here</div>
    </div>
  );
};

export default Container;
