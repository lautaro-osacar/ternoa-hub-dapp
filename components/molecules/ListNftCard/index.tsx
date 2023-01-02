import Image from "next/image";
import Text from "../../atoms/Text";
import { IListNftCard } from "./types";

const ListNftCard: React.FC<IListNftCard> = ({
  onClickCreate,
  className = "",
  buttonColor,
}) => {
  return (
    <div
      className={`bg-gray-500 border-[3px] border-dashed border-gray-200] rounded-xl p-[10px] md:p-s20 inline-block ${className}`}
    >
      <div className="h-[205px] md:h-[365px] rounded-xl flex justify-center items-center bg-gray-100">
        <div className="flex items-center justify-center flex-col h-full">
          <div className="w-s48 h-s48 md:w-s136 md:h-s136 relative mb-s16 md:mb-s20">
            <Image src="/import-nft.svg" alt="Add NFT" layout="fill" />
          </div>
        </div>
      </div>
      <div
        className="bg-gray-100 rounded-xl p-s8 mt-s20 cursor-pointer"
        onClick={onClickCreate}
      >
        <div
          className="bg-gray-800 rounded-xl py-[12px] text-center"
          style={buttonColor ? { backgroundColor: buttonColor } : {}}
        >
          <Text
            type="p2"
            text="+ Add a new NFT"
            color="text-gray-500"
            weight="medium"
          />
        </div>
      </div>
    </div>
  );
};

export default ListNftCard;
