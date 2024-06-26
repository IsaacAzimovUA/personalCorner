import { Canvas } from '@react-three/fiber'
import { SkyBox } from './Components/SkyBox'
import { Scene } from './Components/Scene'
import { Suspense } from 'react'
import { Selection } from '@react-three/postprocessing'
import Effects from './Components/Effects'
// import { Perf } from 'r3f-perf'

function App() {
  return (
    <Canvas>
      {/* <Perf /> */}
      <Suspense fallback={null}>
        <Selection>
          <Effects />
          <SkyBox />
          <Scene />
        </Selection>
      </Suspense>
    </Canvas>
  )
}
export default App
