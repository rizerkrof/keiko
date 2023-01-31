import { render, screen } from "@testing-library/react"
import { Home } from "./index"
import "@testing-library/jest-dom"

import { rest } from "msw"
import { setupServer } from "msw/node"

const server = setupServer(
  rest.get("http://localhost:8000/pokemon", (req, res, ctx) => {
    // Respond with a mocked user token that gets persisted
    // in the `sessionStorage` by the `Login` component.
    return res(
      ctx.json([
        { id: 1, name: "bulbasaur", height: 7, weight: 69 },
        { id: 2, name: "ivysaur", height: 10, weight: 130 },
      ]),
    )
  }),
)

describe("<Home />", () => {
  // Enable API mocking before tests.
  beforeAll(() => server.listen())

  it("should display ivysaur", () => {
    const { findByText } = render(<Home />)
    expect(findByText("ivysaur")).toBeTruthy()
  })

  // Reset any runtime request handlers we may add during the tests.
  afterEach(() => server.resetHandlers())

  // Disable API mocking after the tests are done.
  afterAll(() => server.close())
})
