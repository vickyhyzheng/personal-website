import { useEffect } from "react"

export default function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])

  return null
}
