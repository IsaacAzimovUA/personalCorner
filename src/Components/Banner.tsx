import { Html } from '@react-three/drei'
import { useGLTF } from '@react-three/drei'
import ModelWithText from './ModelWithText'
const BannerText = () => {
  const widtdPositionFactor = window.innerWidth / 1400 + 0.2
  const widthScaleFactor =
    window.innerWidth < 768 ? window.innerWidth / 1400 + 0.25 : 1
  return (
    <>
      <ModelWithText
        scale={widthScaleFactor}
        modelPath="models/reactLogo.gltf"
        modelPosition={[3 * widtdPositionFactor, 2.2, 0]}
        modelScale={0.8}
        text={'<Frontend/>'}
        textPosition={[-1.2, 0, 0]}
        textAnchorX={'right'}
        textFontSize={0.3}
      />
      <ModelWithText
        scale={widthScaleFactor}
        modelPath="models/nodeLogo.gltf"
        modelPosition={[-3 * widtdPositionFactor, -2.2, 0]}
        text={"res.end('Backend');"}
        textPosition={[1.2, 0, 0]}
        textAnchorX={'left'}
        textFontSize={0.3}
      />
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
              🎨 to seamless state management with React and Redux Toolkit ⚛️,
            </p>
            <p
              style={{
                color: '#fff',
                textAlign: 'justify',
                textIndent: '2rem',
              }}
            >
              I’m all about making the web engaging and fun. I also enjoy
              creating immersive 3D effects with Three.js, Fiber, Spring, and
              Drei 🎮. When I’m not coding, you’ll find me strumming my ukulele
              🎶, exploring new tech 🔍, or diving into a good book 📚. Let’s
              build something awesome together!
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
