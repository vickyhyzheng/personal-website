import { RefObject } from "react"

export const skipToSection = (ref: RefObject<any>) => {
  if (ref && ref.current) {
    ref.current.scrollIntoView({ behavior: "smooth" })
  }
}
