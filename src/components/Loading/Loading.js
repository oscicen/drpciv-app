import React from "react";

const Loading = props => {
  if (props.isLoading) {
    return <div>Loading...</div>;
  } else {
    if (props.error === "") {
      return props.children;
    } else {
      return <div>Error fetching: {props.error}</div>;
    }
  }
};

export default Loading;
