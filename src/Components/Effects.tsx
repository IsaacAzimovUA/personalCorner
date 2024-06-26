import { EffectComposer, Outline } from '@react-three/postprocessing'

const Effects = () => {
  return (
    <EffectComposer autoClear={false}>
      <Outline
        edgeStrength={10}
        hiddenEdgeColor={0xffffff}
        blur
        kernelSize={1}
      />
    </EffectComposer>
  )
}

export default Effects
