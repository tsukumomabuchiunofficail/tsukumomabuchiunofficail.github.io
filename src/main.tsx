import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { initializeLinq, type IEnumerable } from 'linq-to-typescript'

declare global {
  interface Array<T> extends IEnumerable<T> {}
  interface Uint8Array extends IEnumerable<number> {}
  interface Uint8ClampedArray extends IEnumerable<number> {}
  interface Uint16Array extends IEnumerable<number> {}
  interface Uint32Array extends IEnumerable<number> {}
  interface Int8Array extends IEnumerable<number> {}
  interface Int16Array extends IEnumerable<number> {}
  interface Int32Array extends IEnumerable<number> {}
  interface Float32Array extends IEnumerable<number> {}
  interface Float64Array extends IEnumerable<number> {}
  interface Map<K, V> extends IEnumerable<[K, V]> {}
  interface Set<T> extends IEnumerable<T> {}
  interface String extends IEnumerable<string> {}
}
initializeLinq()


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
