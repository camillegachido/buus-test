import { render } from "@testing-library/react";
import { localizationProvider } from "~/common/hocs";

function defaultRender(children: any) {
  return render(localizationProvider(children))
}

export default defaultRender