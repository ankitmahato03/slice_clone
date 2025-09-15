import Image, { type ImageProps } from "next/image";
type Props = Omit<ImageProps, "src"> & {
  srcLight: string;
  srcDark: string;
};
import { PrismaClient } from "@repo/prisma/client";
const client = new PrismaClient();
const ThemeImage = (props: Props) => {
  const { srcLight, srcDark, ...rest } = props;

  return (
    <>
      <Image {...rest} src={srcLight} className="imgLight" />
      <Image {...rest} src={srcDark} className="imgDark" />
    </>
  );
};

export default function Home() {
  return <div className="text-2xl bg-amber-950">hello from slice FE</div>;
}
