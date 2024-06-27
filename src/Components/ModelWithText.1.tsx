import { Center, Float, Text3D, useGLTF } from '@react-three/drei'
import { Select } from '@react-three/postprocessing'
import React from 'react'
import { ModelWithTextProps } from './ModelWithText'

export const ModelWithText: React.FC<ModelWithTextProps> = ({
  scale,
  modelPath,
  modelScale,
  text,
  textPosition,
}) => {
  const modelRectLogo = useGLTF(modelPath, true)
  return (
    <Float
      floatIntensity={2}
      rotationIntensity={2}
      scale={scale}
      position={[0, 0, 0]}
    >
      <Center>
        <ambientLight />

        <Text3D
          // size={10}
          scale={0.19}
          // curveSegments={24}
          // bevelEnabled
          // bevelSize={0.08}
          // bevelThickness={0.03}
          height={0.2}
          // lineHeight={0.9}
          position={textPosition}
          font={'fonts/JetBrainsMono_Regular.json'}
        >
          {text}
          <meshStandardMaterial color={'white'} />
        </Text3D>

        <Select enabled>
          <ambientLight />
          <pointLight intensity={10} position={[0, 0, 0]} />
          <primitive
            object={modelRectLogo.scene}
            dispose={null}
            scale={modelScale}
          />
        </Select>
      </Center>
    </Float>
  )
}
