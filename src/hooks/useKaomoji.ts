import KaomojiEnum from 'ts/enums/Kaomoji.enums';

export interface IUseKaomoji {
  kaomoji: KaomojiEnum;
}

export interface IUseKaomojiReturns {
  kaomojiKey?: string;
}

const useKaomoji = (props: IUseKaomoji): IUseKaomojiReturns => {
  const { kaomoji } = props;
  const kaomojiKey = Object.keys(KaomojiEnum).find(
    (i) => KaomojiEnum[i as keyof typeof KaomojiEnum] === kaomoji
  );
  return { kaomojiKey };
};

export default useKaomoji;
