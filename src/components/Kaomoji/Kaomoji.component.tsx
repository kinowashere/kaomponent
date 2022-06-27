import KaomojiEnum from 'ts/enums/Kaomoji.enums';
import React from 'react';

export interface IKaomojiComponent {
  kaomoji: KaomojiEnum;
}

function KaomojiComponent(props: IKaomojiComponent) {
  const { kaomoji } = props;
  return <div className="font-mono text-slate-700 font-bold">{kaomoji}</div>;
}

export default KaomojiComponent;
