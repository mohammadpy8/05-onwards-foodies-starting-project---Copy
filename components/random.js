function Random(props) {
  const Component = props.component || "div";
  return <Component>{props.children}</Component>;
}

export default Random;
