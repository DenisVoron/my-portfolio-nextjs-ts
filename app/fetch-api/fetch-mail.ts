import { NextResponse } from "next/server";
import { Inputs } from "../lib/definitions-type";

const sendingMail = async (data: Inputs): Promise<NextResponse> => {
  try {
    const respone = await fetch("/api", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    });
    return await respone.json();
  } catch (error) {
    throw error;
  }
};

export default sendingMail;
