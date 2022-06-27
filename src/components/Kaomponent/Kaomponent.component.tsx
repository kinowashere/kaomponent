import KaomojiEnum from 'ts/enums/Kaomoji.enums';
import React, { lazy, Suspense } from 'react';
import Kaomoji from 'components/Kaomoji';
import { useKaomponent } from './Kaomponent.hooks';
import 'index.css';

const Caption = lazy(() => import('components/Caption'));

export interface IKaomponentComponent {
  kaomoji: KaomojiEnum;
  caption?: boolean;
}

function KaomponentComponent(props: IKaomponentComponent) {
  const { kaomoji, caption = false } = props;
  const { withCaption, toggleCaption } = useKaomponent({ caption });
  return (
    <button
      type="button"
      onClick={() => toggleCaption()}
      className="bg-gray-100 py-3 px-6 rounded-xl border border-gray-200"
    >
      <Suspense fallback={<Kaomoji kaomoji={KaomojiEnum.WAIT} />}>
        <Kaomoji kaomoji={kaomoji} />
        {withCaption && <Caption />}
      </Suspense>
    </button>
  );
}

export default KaomponentComponent;