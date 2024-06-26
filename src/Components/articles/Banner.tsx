import { Html } from '@react-three/drei'

const BannerText = () => {
  return (
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
            style={{ color: '#fff', textAlign: 'justify', textIndent: '2rem' }}
          >
            Hey there! 👋 I’m a full-stack developer who loves crafting dynamic
            web experiences. From sleek interfaces with TailWind CSS 🎨 to
            seamless state management with React and Redux Toolkit ⚛️,
          </p>
          <p
            style={{ color: '#fff', textAlign: 'justify', textIndent: '2rem' }}
          >
            I’m all about making the web engaging and fun. I also enjoy creating
            immersive 3D effects with Three.js, Fiber, Spring, and Drei 🎮. When
            I’m not coding, you’ll find me strumming my ukulele 🎶, exploring
            new tech 🔍, or diving into a good book 📚. Let’s build something
            awesome together!
          </p>
        </div>
      </div>
    </Html>
  )
}

export { BannerText }
