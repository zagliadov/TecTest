import { render, screen } from "@testing-library/react";
import { Expenses } from "./Expenses";

describe("Expenses component", () => {
  

  it("Expenses render", async () => {
    const { asFragment } = render(<Expenses />);
    expect(await screen.findByText(/Logged in as/i)).toBeInTheDocument();
    expect(asFragment(<Expenses />)).toMatchSnapshot();
  });
});
