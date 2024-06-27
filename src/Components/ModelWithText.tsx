import { Vector3 } from '@react-three/fiber'
import { ModelWithText } from './ModelWithText.1'

export interface ModelWithTextProps {
  scale?: number
  modelPath: string
  modelScale?: number
  text: string
  textPosition?: Vector3
}
export default ModelWithText
