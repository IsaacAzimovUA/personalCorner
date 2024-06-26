import { BannerText } from './articles/Banner'

import ModelWithText from './ModelWithText'

export const Scene = () => {
  return (
    <>
      <BannerText />
      <ModelWithText
        modelPath="models/reactLogo.gltf"
        modelPosition={[3, 2, 0]}
        modelScale={0.8}
        text={'<Frontend/>'}
        textPosition={[-1.2, 0, 0]}
        textAnchorX={'right'}
        textFontSize={0.3}
      />
      <ModelWithText
        modelPath="models/nodeLogo.gltf"
        modelPosition={[-3, -2, 0]}
        text={"res.end('Backend');"}
        textPosition={[1.2, 0, 0]}
        textAnchorX={'left'}
        textFontSize={0.3}
      />
    </>
  )
}
