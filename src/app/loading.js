import { Spin } from "antd";
import React from "react";

const loading = () => {
  return (
    <div>
      <Spin fullscreen size="large" />
    </div>
  );
};

export default loading;
