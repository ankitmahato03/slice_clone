import Image, { type ImageProps } from "next/image";
type Props = Omit<ImageProps, "src"> & {
  srcLight: string;
  srcDark: string;
};

const ThemeImage = (props: Props) => {
  const { srcLight, srcDark, ...rest } = props;

  return (
    <>
      <h1>hello</h1>
    </>
  );
};

export default function Home() {
  return <div className="text-2xl bg-amber-950">hello from slice FE</div>;
}
