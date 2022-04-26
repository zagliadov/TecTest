import { render, screen } from "@testing-library/react";
import { Search } from "./Search";

describe("search component", () => {

  it("Search render", () => {
    render(<Search />);
  });
});
