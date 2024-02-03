// GrandParentComponent
const GrandParentComponent = () => {
    const dataFromGrandparent = "Hello from Grandparent!";
  
    return (
      <ParentComponent dataFromGrandparent={dataFromGrandparent} />
    );
  };
  
  // ParentComponent
  const ParentComponent = (props) => {
    return (
      <ChildComponent dataFromParent={props.dataFromGrandparent} />
    );
  };
  
  // ChildComponent
  const ChildComponent = (props) => {
    return (
      <p>{props.dataFromParent}</p>
    );
  };
  