import { useGLTF } from '@react-three/drei'
import { Flex, Box } from '@react-three/flex'
import { useThree } from '@react-three/fiber'
import { ModelWithText } from './ModelWithText'

const BannerText = () => {
  const mobileScaleFactor = window.innerWidth < 576 ? 0.7 : 1
  const viewport = useThree((state) => state.viewport)
  return (
    <>
      <Flex
        flexDirection={'column'}
        position={[-viewport.width / 2, viewport.height / 2, 0]}
        size={[viewport.width, viewport.height, 0]}
        align={'center'}
      >
        <Box
          justifyContent={'space-between'}
          maxWidth={'700px'}
          width={'100%'}
          height={'100%'}
        >
          <Box centerAnchor alignSelf={'flex-end'} marginTop={0.5}>
            <ModelWithText
              scale={mobileScaleFactor}
              modelPath="models/reactLogo.gltf"
              modelScale={0.8}
              text={'<Frontend/>'}
              textPosition={[-3.3, 0, 0]}
            />
          </Box>
          <Box centerAnchor marginBottom={0.5}>
            <ModelWithText
              scale={mobileScaleFactor}
              modelPath="models/nodeLogo.gltf"
              text={"res.end('Backend');"}
              textPosition={[1.1, 0, 0]}
            />
          </Box>
        </Box>
      </Flex>
    </>
  )
}
useGLTF.preload('models/reactLogo.gltf')
useGLTF.preload('models/nodeLogo.gltf')

export { BannerText }
