import { Html } from '@react-three/drei'
import { useGLTF } from '@react-three/drei'

import { Flex, Box } from '@react-three/flex'
import { useThree } from '@react-three/fiber'
import { ModelWithText } from './ModelWithText'
import { TypeAnimation } from 'react-type-animation'

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
              textPosition={[-3, 0, 0]}
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
      <Html fullscreen>
        <div className="wrapper">
          <div style={{ maxWidth: '40rem', minHeight: '17rem' }}>
            <h1
              style={{
                fontSize: window.innerWidth < 568 ? '2rem' : '3rem',
                margin: '0',
              }}
            >
              Dmytro Hordus
            </h1>
            <TypeAnimation
              className=".bannerText"
              preRenderFirstString={true}
              wrapper="p"
              sequence={[
                // Same substring at the start will only be typed out once, initially
                'Hey there! 👋 I’m a back-end developer',
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                'Hey there! 👋 I’m a front-end developer',
                1000,
                'Hey there! 👋 I’m a full-stack developer who loves crafting dynamic web experiences. From sleek interfaces with TailWind CSS 🎨 to seamless state management with React and Redux Toolkit ⚛️,I’m all about making the web engaging and fun.',
                1000,
              ]}
              speed={50}
              style={{
                fontSize: window.innerWidth < 568 ? '1rem' : '1.3rem',
                display: 'inline-block',
                fontFamily: 'fonts/JetBrainsMono_Regular.ttf',
                textAlign: 'justify',
              }}
            />
            {/* <p
              style={{
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
                textAlign: 'justify',
                textIndent: '2rem',
              }}
            >
              I also enjoy creating immersive 3D effects with Three.js, Fiber,
              Spring, and Drei 🎮. When I’m not coding, you’ll find me strumming
              my ukulele 🎶, exploring new tech 🔍, or diving into a good book
              📚. Let’s build something awesome together!
            </p> */}
          </div>
        </div>
      </Html>
    </>
  )
}
useGLTF.preload('models/reactLogo.gltf')
useGLTF.preload('models/nodeLogo.gltf')

export { BannerText }
