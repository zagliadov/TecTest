import React from "react";
import { render, screen } from "@testing-library/react";
import { MemberInfo } from "./MemberInfo";

test("MemberInfo render", async () => {
  const { asFragment } = render(<MemberInfo />);
  const email = screen.getByText('hello');
  expect(email).toBeInTheDocument();
  expect(asFragment(<MemberInfo />)).toMatchSnapshot();
});
