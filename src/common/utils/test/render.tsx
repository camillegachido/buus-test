import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { localizationProvider } from "~/common/hocs";

function defaultRender(children: any) {
  return render(<BrowserRouter>{localizationProvider(children)}</BrowserRouter>)
}

export default defaultRender