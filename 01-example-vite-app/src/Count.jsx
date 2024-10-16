import React, { useEffect } from "react";

export default function Count(props) {
  useEffect(() => {
    document.title = `this count is ${props.count}`;
    return ()=>{
        document.title="closed the count component"
    }
  }, [props.count]);
  return <div>{props.count}</div>;
}
