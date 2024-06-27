import { Center, Float, Text3D, useGLTF } from '@react-three/drei'
import { Select } from '@react-three/postprocessing'
import { Vector3 } from '@react-three/fiber'

export interface ModelWithTextProps {
  scale?: number
  modelPath: string
  modelScale?: number
  text: string
  textPosition?: Vector3
}

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
      floatIntensity={1}
      rotationIntensity={2}
      scale={scale}
      position={[0, 0, 0]}
    >
      <Center>
        <group>
          <Text3D
            scale={0.19}
            height={0.4}
            position={textPosition}
            font={'fonts/JetBrainsMono_Regular.json'}
          >
            {text}
            <meshStandardMaterial color={'white'} />
          </Text3D>
          <Select enabled>
            <pointLight intensity={10} position={[0, 0, 3]} />

            <primitive
              object={modelRectLogo.scene}
              dispose={null}
              scale={modelScale}
            />
          </Select>
        </group>
      </Center>
    </Float>
  )
}
