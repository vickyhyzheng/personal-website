import { RefObject } from "react"

export const skipToSection = (ref: RefObject<any>, smooth: boolean = true) => {
  if (ref && ref.current) {
    ref.current.scrollIntoView({ behavior: smooth ? "smooth" : "auto" })
  }
}
