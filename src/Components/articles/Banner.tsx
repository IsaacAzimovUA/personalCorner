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
          <p style={{ color: '#fff', textAlign: 'justify' }}>
            Hey there! 👋 I’m a full-stack developer who loves crafting dynamic
            web experiences. From sleek interfaces with TailWind CSS 🎨 to
            seamless state management with React and Redux Toolkit ⚛️, I’m all
            about making the web engaging and fun. I also enjoy creating
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

const ReactText = () => {
  return (
    <Html fullscreen rotation-y={20}>
      <div className="wrapper">
        <h1
          style={{
            textShadow: '4px 1px #0FFBF9,-4px 1px #FF3F4A',
            fontWeight: '300',
            lineHeight: '1.2',
          }}
        >
          Front End
        </h1>
        <div style={{ maxWidth: '40rem' }}>
          <p style={{ color: '#000' }}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit
            asperiores pariatur fugit.
          </p>
          <ul style={{ color: '#000' }}>
            <li>Lorem, ipsum dolor.</li>
            <li>Lorem, ipsum dolor.</li>
            <li>Lorem, ipsum dolor.</li>
          </ul>
        </div>
      </div>
    </Html>
  )
}

const NodeText = () => {
  return (
    <Html fullscreen>
      <div className="wrapper">
        <h1
          style={{
            textShadow: '4px 1px #0FFBF9,-4px 1px #FF3F4A',
            fontWeight: '300',
            lineHeight: '1.2',
          }}
        >
          Backend
        </h1>
        <div style={{ maxWidth: '40rem' }}>
          <p style={{ color: '#000' }}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit
            asperiores pariatur fugit.
          </p>
          <ul style={{ color: '#000' }}>
            <li>Lorem, ipsum dolor.</li>
            <li>Lorem, ipsum dolor.</li>
            <li>Lorem, ipsum dolor.</li>
          </ul>
        </div>
      </div>
    </Html>
  )
}

export { BannerText, ReactText, NodeText }
