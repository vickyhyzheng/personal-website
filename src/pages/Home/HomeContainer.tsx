import { useDesktop } from "../../utils/useDesktop"
import { Home } from "./Home"
import { HomeMobile } from "./HomeMobile"

export const HomeContainer = () => {
  const { isDesktop } = useDesktop()
  return isDesktop ? <Home /> : <HomeMobile />
}
