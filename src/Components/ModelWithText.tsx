import { Float, useGLTF } from '@react-three/drei'
import { Select } from '@react-three/postprocessing'
import React from 'react'
import { Vector3 } from '@react-three/fiber'

interface ModelWithTextProps {
  scale?: number
  modelPath: string
  modelScale?: number
  text?: string
  textPosition?: Vector3
  textAnchorX?: number | 'left' | 'center' | 'right' | undefined
  textFontSize?: number
}
const ModelWithText: React.FC<ModelWithTextProps> = ({
  scale,
  modelPath,
  modelScale,
  // text,
  // textPosition,
  // textAnchorX,
  // textFontSize,
}) => {
  const modelRectLogo = useGLTF(modelPath, true)
  return (
    <Float
      floatIntensity={2}
      rotationIntensity={1}
      scale={scale}
      position={[0, 0, 0]}
    >
      {/* <Text
        font={'fonts/JetBrainsMono-VariableFont_wght.ttf'}
        fontSize={textFontSize}
        position={textPosition}
        anchorY={'middle'}
        anchorX={textAnchorX}
      >
        {text}
      </Text> */}
      <Select enabled>
        <primitive
          object={modelRectLogo.scene}
          dispose={null}
          scale={modelScale}
        />
      </Select>
    </Float>
  )
}

export default ModelWithText
