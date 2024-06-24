import { Float, Text } from '@react-three/drei'
import { useEffect, useState } from 'react'
import { ReactLogoModel } from './ReactLogoModel'
import { NodeLogoModel } from './NodeLogoModel'

import { PortalElement } from './PortalElement'
import { BannerText, NodeText, ReactText } from './articles/Banner'
import { a, useSpring } from '@react-spring/three'

export const Scene = () => {
  const [active, setActive] = useState<string | null>(null!)
  const [hovered, setHovered] = useState<string | null>(null)
  const over = (name: string) => setHovered(name)
  const isMobile = window.innerWidth < 768
  const scaleFactor = window.innerWidth / 1400 + 0.35
  useEffect(() => {
    document.body.style.cursor = hovered ? 'pointer' : 'auto'
  }, [hovered])

  const [springReact, apiReact] = useSpring(() => ({
    from: { x: 2 * scaleFactor, y: 2 },
  }))

  useEffect(() => {
    if (active === 'react') {
      apiReact.start({
        to: {
          x: -2.4 * scaleFactor + (isMobile ? 0.6 : 0),
          y: isMobile ? 0.7 : 0,
        },
      })
    } else {
      apiReact.start({
        to: {
          x: 2 * scaleFactor,
          y: 2,
        },
      })
    }
  }, [active, apiReact, isMobile, scaleFactor])
  const [springNode, apiNode] = useSpring(() => ({
    from: { x: -2 * scaleFactor, y: -2.65 },
  }))
  useEffect(() => {
    if (active === 'node') {
      apiNode.start({
        to: {
          x: -2.4 * scaleFactor + (isMobile ? 0.6 : 0),
          y: isMobile ? 0.7 : 0,
        },
      })
    } else {
      apiNode.start({
        to: {
          x: -2 * scaleFactor,
          y: -2.65,
        },
      })
    }
  }, [active, apiNode])

  return (
    <>
      {/* <Playground /> */}
      {/* <OrbitControls /> */}
      {active === null ? <BannerText /> : null}
      {active === 'react' ? <ReactText /> : null}
      {active === 'node' ? <NodeText /> : null}

      {/* <CameraControls ref={controlsRef} /> */}
      <a.group
        scale={isMobile ? 0.5 : 1}
        position-x={springReact.x}
        position-y={springReact.y}
        position-z={0}
      >
        <Float
          onPointerOver={() => over('react')}
          onPointerOut={() => setHovered(null)}
          floatIntensity={3}
          rotationIntensity={1}
        >
          <Text
            font={'fonts/JetBrainsMono-VariableFont_wght.ttf'}
            fontSize={0.3}
            position={[-1.2, 0, 0]}
            anchorY={'middle'}
            anchorX={'right'}
          >
            {'<Frontend/>'}
            <meshBasicMaterial color={'white'} toneMapped={false} />
          </Text>
          <PortalElement name="react" active={active} setActive={setActive}>
            <ReactLogoModel />
          </PortalElement>
        </Float>
      </a.group>
      <a.group
        scale={isMobile ? 0.5 : 1}
        position-x={springNode.x}
        position-y={springNode.y}
        position-z={0}
      >
        <Float
          onPointerOver={() => over('node')}
          onPointerOut={() => setHovered(null)}
          floatIntensity={3}
          rotationIntensity={1}
        >
          <Text
            font={'fonts/JetBrainsMono-VariableFont_wght.ttf'}
            fontSize={0.3}
            position={[1.2, 0, 0]}
            anchorY={'middle'}
            anchorX={'left'}
          >
            {"res.end('Backend');"}
            <meshBasicMaterial color={'white'} toneMapped={false} />
          </Text>
          <PortalElement name="node" active={active} setActive={setActive}>
            <NodeLogoModel />
          </PortalElement>
        </Float>
      </a.group>
    </>
  )
}
