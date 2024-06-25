import { Float, Text, useSelect } from '@react-three/drei'
import { useEffect, useState } from 'react'
import { ReactLogoModel } from './ReactLogoModel'
import { NodeLogoModel } from './NodeLogoModel'
import { BannerText } from './articles/Banner'
import {
  Selection,
  Select,
  EffectComposer,
  Outline,
} from '@react-three/postprocessing'

export const Scene = () => {
  const [hovered, setHovered] = useState<string | null>(null)
  const over = (name: string) => setHovered(name)
  // const isMobile = window.innerWidth < 768
  // const scaleFactor = window.innerWidth / 1400 + 0.35
  useEffect(() => {
    document.body.style.cursor = hovered ? 'pointer' : 'auto'
  }, [hovered])
  useSelect()
  return (
    <>
      <Selection>
        <EffectComposer autoClear={false}>
          <Outline edgeStrength={200} />
        </EffectComposer>
        <BannerText />

        <Float
          onPointerOver={() => over('react')}
          onPointerOut={() => setHovered(null)}
          floatIntensity={3}
          rotationIntensity={1}
          position={[3, 2, 0]}
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
          <Select enabled>
            <ReactLogoModel />
          </Select>
        </Float>
        <Float
          onPointerOver={() => over('node')}
          onPointerOut={() => setHovered(null)}
          floatIntensity={3}
          rotationIntensity={1}
          position={[-3, -2, 0]}
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

          <Select enabled>
            <NodeLogoModel />
          </Select>
        </Float>
      </Selection>
    </>
  )
}
