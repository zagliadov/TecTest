import React from "react";
import { render, screen } from "@testing-library/react";
import { MemberInfo } from "./MemberInfo";

describe("MemberInfo component", () => {
  test("MemberInfo render", async () => {
    render(<MemberInfo />);
    
  });
});
