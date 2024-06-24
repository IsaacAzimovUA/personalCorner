import { Environment } from '@react-three/drei'
import * as THREE from 'three'

export const SkyBox = () => {
  return (
    <Environment
      backgroundRotation={new THREE.Euler(1.2, 0, 0)}
      files={'hdr/background.hdr'}
      backgroundBlurriness={0.5}
      environmentIntensity={0.7}
      background
    />
  )
}
