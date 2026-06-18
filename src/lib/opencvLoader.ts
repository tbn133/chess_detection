// Lazily load OpenCV.js (~9MB) from a CDN, only when board detection is needed.
// Cached so it loads at most once per session.

const OPENCV_URL = 'https://docs.opencv.org/4.9.0/opencv.js'

let cvPromise: Promise<any> | null = null

export function loadOpenCV(): Promise<any> {
  if (cvPromise) return cvPromise
  cvPromise = new Promise((resolve, reject) => {
    const w = window as any
    if (w.cv && w.cv.Mat) {
      resolve(w.cv)
      return
    }
    const script = document.createElement('script')
    script.src = OPENCV_URL
    script.async = true
    script.onload = () => {
      const cv = w.cv
      if (cv && typeof cv.then === 'function') {
        // Some builds export a module promise.
        cv.then((mod: any) => resolve(mod)).catch(reject)
      } else if (cv && cv.Mat) {
        resolve(cv)
      } else if (cv) {
        // Wait for the WASM runtime to finish initialising.
        cv.onRuntimeInitialized = () => resolve(cv)
      } else {
        reject(new Error('OpenCV.js loaded but cv is undefined'))
      }
    }
    script.onerror = () => reject(new Error('Không tải được OpenCV.js'))
    document.head.appendChild(script)
  })
  return cvPromise
}
