import { Box, Stack } from "@mui/system"
import React, { useEffect, useRef } from "react"

export default function ImageCarousel({ images }: { images: string[] }) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const scrollDuration = 20000
  const pauseDuration = 1000

  const scrollTo = (
    element: HTMLDivElement | null,
    distance: number,
    duration: number,
    startTime: number
  ) => {
    if (!element) return

    const currentTime = performance.now()
    const elapsed = currentTime - startTime
    let easedTime

    if (elapsed < duration) {
      easedTime = distance * (elapsed / duration)
    } else {
      easedTime = distance
    }

    if (element) {
      element.scrollLeft = easedTime
    }

    if (elapsed < duration * 2) {
      // Considering scroll in both directions
      requestAnimationFrame(() =>
        scrollTo(element, distance, duration, startTime)
      )
    }
  }

  const jumpToLeft = (element: HTMLDivElement | null) => {
    if (element) {
      element.scrollLeft = 0 // Jump to the left instantly
    }
  }

  const startScrollLoop = (
    element: HTMLDivElement | null,
    totalWidth: number,
    duration: number,
    pauseDuration: number
  ) => {
    if (!element) return

    const loop = () => {
      jumpToLeft(element) // Jump to the left initially
      setTimeout(() => {
        const startTime = performance.now() + pauseDuration
        scrollTo(element, totalWidth, duration, startTime)
        setTimeout(() => {
          jumpToLeft(element)
          loop() // Start the next scroll loop after the pause and scroll end
        }, duration + pauseDuration)
      }, pauseDuration)
    }

    loop() // Initial call to start the loop
  }

  useEffect(() => {
    if (containerRef.current) {
      const totalWidth =
        containerRef.current.scrollWidth - containerRef.current.clientWidth
      startScrollLoop(
        containerRef.current,
        totalWidth,
        scrollDuration,
        pauseDuration
      ) // Start the scroll loop with a 1-second pause
    }
  }, [])

  const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
    event.preventDefault()
    const element = containerRef.current
    if (element) {
      element.scrollLeft = 0 // Keep the scroll at the leftmost position
    }
  }

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
        }}
      >
        <Stack
          direction="row"
          spacing={2}
          ref={containerRef}
          onScroll={handleScroll}
          sx={{
            overflow: "scroll",
            "&::-webkit-scrollbar": {
              display: "none",
            },
            overflowX: "hidden",
            scrollbarWidth: "none",
          }}
        >
          {images.map((image, idx) => {
            return (
              <img
                key={idx}
                src={image}
                height={520}
                style={{ borderRadius: "16px", marginBottom: "64px" }}
              />
            )
          })}
        </Stack>
      </Box>
    </Box>
  )
}
