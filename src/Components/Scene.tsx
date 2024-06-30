import { Scroll, ScrollControls } from '@react-three/drei'
import { BannerText } from './Banner'

import Html from './Html'

export const Scene = () => {
  return (
    <>
      <ScrollControls pages={3}>
        <Scroll>
          <BannerText />
        </Scroll>
        <Scroll html style={{ width: '100%' }}>
          <Html />
        </Scroll>
      </ScrollControls>
    </>
  )
}
