import { MeshPortalMaterial, RoundedBox } from '@react-three/drei'
import React, { ReactNode, useRef } from 'react'
import { SkyBox } from './SkyBox'
import { BackSide, DoubleSide } from 'three'
import { useFrame } from '@react-three/fiber'
import { easing } from 'maath'

export interface PortalElementProps {
  children: ReactNode
  name: string
  setActive: React.Dispatch<React.SetStateAction<string | null>>
  active: string | null
}
export const PortalElement: React.FC<PortalElementProps> = ({
  children,
  name,
  setActive,
  active,
}) => {
  const portalMaterial = useRef(null!)

  useFrame((_state, delta) => {
    const portal = active === name
    easing.damp(portalMaterial.current, 'blend', portal ? 1 : 0, 0.2, delta)
  })

  return (
    <RoundedBox
      radius={0.1}
      name={name}
      args={[2, 2, 0.1]}
      onClick={() => setActive(active === name ? null : name)}
    >
      <MeshPortalMaterial
        ref={portalMaterial}
        side={DoubleSide}
        // blend={active === name ? 1 : 0}
      >
        <ambientLight intensity={1} />
        <SkyBox />
        {children}
        <mesh onClick={() => setActive(active === name ? null : name)}>
          <sphereGeometry args={[10, 32, 32]} />
          <meshStandardMaterial side={BackSide} />
        </mesh>
      </MeshPortalMaterial>
    </RoundedBox>
  )
}
