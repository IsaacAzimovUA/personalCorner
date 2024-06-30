import { TypeAnimation } from 'react-type-animation'

const Html = () => {
  return (
    <>
      <section>
        <div className="wrapper">
          <h1
            style={{
              fontSize: window.innerWidth < 568 ? '2rem' : '3rem',
              margin: '0',
            }}
          >
            Dmytro Hordus
          </h1>
          <TypeAnimation
            preRenderFirstString={true}
            wrapper="p"
            sequence={[
              '> Hey there! 👋',
              1000,
              '> Hey there! 👋 I’m a front-end developer',
              1000,
              '> Hey there! 👋 I’m a back-end developer',
              1000,
              '> Hey there! 👋 I’m a full-stack developer who loves crafting dynamic web experiences. From sleek interfaces with TailWind CSS 🎨 to seamless state management with React and Redux Toolkit ⚛️, I’m all about making the web engaging and fun.',
            ]}
            speed={50}
            style={{
              fontSize: window.innerWidth < 568 ? '1rem' : '1.3rem',
              display: 'inline-block',
              fontFamily: 'fonts/JetBrainsMono_Regular.ttf',
              textAlign: 'justify',
            }}
          />
        </div>
      </section>
      <section>
        <div className="wrapper">
          <TypeAnimation
            wrapper="p"
            sequence={[
              2000,
              '> I also enjoy creating immersive 3D effects with Three.js, Fiber, Spring, and Drei 🎮. When I’m not coding, you’ll find me strumming my ukulele 🎶, exploring new tech 🔍, or diving into a good book 📚. Let’s build something awesome together!',
            ]}
            speed={50}
            style={{
              fontSize: window.innerWidth < 568 ? '1rem' : '1.3rem',
              display: 'inline-block',
              fontFamily: 'fonts/JetBrainsMono_Regular.ttf',
              textAlign: 'justify',
            }}
          />
        </div>
      </section>
    </>
  )
}

export default Html
