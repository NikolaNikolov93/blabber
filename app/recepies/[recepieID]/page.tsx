"use client";

import { useParams } from "next/navigation";

const Recepie = () => {
  const params = useParams();

  return <div>The recepie is: {params.recepieID} </div>;
};

export default Recepie;
