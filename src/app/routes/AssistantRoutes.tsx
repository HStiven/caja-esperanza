import { Outlet } from "react-router-dom"
import { NewDropDown } from "../components/NewDropdown"
import useMediaQueryScreen from "../hooks/MediaScreen/useMediaQueryScreen"

const AssistantRoutes = () => {

  const [isxSmall, isSmall] = useMediaQueryScreen();

  return (
    <section className="w-full d-flex flex-column flex-root">
      {(isxSmall || isSmall) ? <></> :
        <NewDropDown/>
      }
      <Outlet />
    </section>
  )
}

export { AssistantRoutes }