"use client";

import { useState } from "react";

const useStateExp = () => {
  const [index, setIndex] = useState(0);

  return { index, setIndex };
};

export default useStateExp;
