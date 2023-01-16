import LoaderEllipsis from "../../atoms/LoaderEllipsis";
import { INftDetailTemplate } from "./types";

const base: INftDetailTemplate = {
  id: '0',
  name: 'My detailed NFT',
  nftImage: {
    src: "https://ipfs-dev.trnnfr.com/ipfs/QmQ1sD95jLSo1vJK6mcXHGogrph8Bqpgx7L8Vy4SX6Xbrg",
    alt: "NFT",
    loader: <LoaderEllipsis></LoaderEllipsis>
  },
  creator: {
    pubKey: "5GYiVxT9SLvW8mUDPK3PorCYYRWtkw6XRNh7PLfxDPsSHLxF"
  },
  collectionName: "Uzuki",
  collectionLogo: {
    src: "https://ipfs-dev.trnnfr.com/ipfs/QmQ1sD95jLSo1vJK6mcXHGogrph8Bqpgx7L8Vy4SX6Xbrg",
    alt: "NFT",
    loader: <LoaderEllipsis></LoaderEllipsis>
  },
  quantity: '10',
  description: "Description mock for NFT Detail Template",
  displayButton:true,
  disabled:true,
  buttonText:"Not for sale"


};

export const mockNftDetailTemplateProps = {
  base,
};
