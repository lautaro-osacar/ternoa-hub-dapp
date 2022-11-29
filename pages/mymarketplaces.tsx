import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import GridWrapper from "../components/atoms/GridWrapper";
import { IMarketplaceListItem } from "../components/molecules/MarketplaceListItem/types";
import AccountMarketplacesTemplate from "../components/templates/AccountMarketplacesTemplate";
import BaseTemplate from "../components/templates/base/BaseTemplate";
import { useWalletConnectClient } from "../hooks/useWalletConnectClient";
import { marketplaceApi } from "../store/slices/marketplaces";
import { jsonDataSelector } from "../store/slices/marketplacesData";
import { parseOffchainDataImage } from "../utils/strings";

const MyMarketplaces: NextPage = () => {
  const router = useRouter();
  const [trigger, marketplaces] =
    marketplaceApi.useLazyGetMarketplacesByOwnerQuery();
  const marketplacesData = useSelector(jsonDataSelector);
  const { account } = useWalletConnectClient();

  useEffect(() => {
    if (account) {
      trigger({ owner: account });
    }
  }, [account, trigger]);

  const parseMarketplacesListItems = (): IMarketplaceListItem[] | undefined => {
    if (marketplaces.data && marketplacesData) {
      return marketplaces.data.marketplaces.map((indexerMarketplaceData) => {
        const marketplaceData = marketplacesData[indexerMarketplaceData.id];
        if (marketplaceData) {
          return {
            isLoading: marketplaceData.state.isLoading,
            name: marketplaceData.jsonData?.name,
            logo: marketplaceData.jsonData?.logo,
            onClickManage: () =>
              router.push({
                pathname: "/configuremarketplace",
                query: { marketplaceId: indexerMarketplaceData.id },
              }),
            preview: {
              src:
                marketplaceData.jsonData?.logo &&
                parseOffchainDataImage(marketplaceData.jsonData.logo),
              alt: marketplaceData.jsonData?.name,
            },
          };
        } else {
          return {
            isLoading: false,
            onClickManage: () =>
              router.push({
                pathname: "/configuremarketplace",
                query: { marketplaceId: indexerMarketplaceData.id },
              }),
            name: "Unnamed Marketplace",
          };
        }
      });
    }
  };

  return (
    <BaseTemplate>
      <div className="flex justify-center bg-gray-100 py-s40 px-s24 flex flex-1">
        <GridWrapper>
          <AccountMarketplacesTemplate
            isLoading={marketplaces.isFetching}
            marketplaces={parseMarketplacesListItems()}
            onClickAddNew={() => router.push("/createmarketplace")}
          />
        </GridWrapper>
      </div>
    </BaseTemplate>
  );
};

export default MyMarketplaces;
