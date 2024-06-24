import { useGLTF } from '@react-three/drei'
import { useMemo } from 'react'

export const NodeLogoModel = () => {
  const modelNodeLogo = useGLTF('models/nodeLogo.gltf', true)
  const scene = useMemo(() => modelNodeLogo.scene, [modelNodeLogo])

  return (
    <mesh scale={0.9}>
      <primitive object={scene} dispose={null} />
    </mesh>
  )
}
