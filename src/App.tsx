import { Canvas } from '@react-three/fiber'
import { SkyBox } from './Components/SkyBox'
import { Scene } from './Components/Scene'
import { Suspense } from 'react'

// import { Perf } from 'r3f-perf'

function App() {
  return (
    <Canvas>
      {/* <Perf /> */}
      <Suspense fallback={null}>
        <SkyBox />
        <Scene />
      </Suspense>
    </Canvas>
  )
}
export default App
