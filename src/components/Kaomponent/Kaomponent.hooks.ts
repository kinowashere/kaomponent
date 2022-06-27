import { useState } from 'react';

export interface IUseKaomponent {
  caption: boolean;
}

export interface IUseKaomponentReturns {
  withCaption: boolean;
  toggleCaption(): void;
}

export const useKaomponent = (props: IUseKaomponent): IUseKaomponentReturns => {
  const { caption } = props;
  const [withCaption, setWithCaption] = useState(caption);
  const toggleCaption = () => setWithCaption(!withCaption);

  return { withCaption, toggleCaption };
};
