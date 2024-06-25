import { useGLTF } from '@react-three/drei'
import { useMemo } from 'react'

export const ReactLogoModel = () => {
  const modelRectLogo = useGLTF('models/reactLogoLowpoly.gltf', true)

  const scene = useMemo(() => modelRectLogo.scene, [modelRectLogo])
  return (
    <mesh scale={0.7}>
      <primitive object={scene} dispose={null} />
    </mesh>
  )
}
