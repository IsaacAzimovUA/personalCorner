import { Html } from '@react-three/drei'
import { useGLTF } from '@react-three/drei'
import ModelWithText from './ModelWithText'
import { Flex, Box } from '@react-three/flex'
import { useThree } from '@react-three/fiber'

const BannerText = () => {
  const mobileScaleFactor = window.innerWidth < 568 ? 0.7 : 1
  const { viewport } = useThree()
  return (
    <>
      <Flex
        flexDirection={'column'}
        position={[-viewport.width / 2, viewport.height / 2, 0]}
        size={[viewport.width, viewport.height, 0]}
        align={'center'}
        justify={'center'}
      >
        <Box
          justifyContent={'space-between'}
          maxWidth={'700px'}
          maxHeight={'700px'}
          width={'100%'}
          height={'100%'}
        >
          <Box centerAnchor padding={1}>
            <ModelWithText
              scale={mobileScaleFactor}
              modelPath="models/reactLogo.gltf"
              // modelPosition={[3 * widtdPositionFactor, 2.2, 0]}
              modelScale={0.8}
              text={'<Frontend/>'}
              textPosition={[1.2, 0, 0]}
              textAnchorX={'left'}
              textFontSize={0.3}
            />
          </Box>

          <Box centerAnchor alignSelf={'flex-end'} padding={1}>
            <ModelWithText
              scale={mobileScaleFactor}
              modelPath="models/nodeLogo.gltf"
              // modelPosition={[-3 * widtdPositionFactor, -2.8, 0]}
              text={"res.end('Backend');"}
              textPosition={[-1.2, 0, 0]}
              textAnchorX={'right'}
              textFontSize={0.3}
            />
          </Box>
        </Box>
      </Flex>
      <Html fullscreen>
        <div className="wrapper">
          <div style={{ maxWidth: '40rem' }}>
            <h1
              style={{
                textShadow: '4px 1px #0FFBF9,-4px 1px #FF3F4A',
                fontWeight: '300',
                lineHeight: '1.2',
                fontSize: '2.3rem',
                textAlign: 'center',
              }}
            >
              Dmytro Hordus
            </h1>
            <p
              style={{
                color: '#fff',
                textAlign: 'justify',
                textIndent: '2rem',
              }}
            >
              Hey there! 👋 I’m a full-stack developer who loves crafting
              dynamic web experiences. From sleek interfaces with TailWind CSS
              🎨 to seamless state management with React and Redux Toolkit
              ⚛️,I’m all about making the web engaging and fun.
            </p>
            <p
              style={{
                color: '#fff',
                textAlign: 'justify',
                textIndent: '2rem',
              }}
            >
              I also enjoy creating immersive 3D effects with Three.js, Fiber,
              Spring, and Drei 🎮. When I’m not coding, you’ll find me strumming
              my ukulele 🎶, exploring new tech 🔍, or diving into a good book
              📚. Let’s build something awesome together!
            </p>
          </div>
        </div>
      </Html>
    </>
  )
}
useGLTF.preload('models/reactLogo.gltf')
useGLTF.preload('models/nodeLogo.gltf')

export { BannerText }
