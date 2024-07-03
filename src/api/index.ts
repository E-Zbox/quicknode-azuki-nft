import { Core } from "@quicknode/sdk";
// interface
import { ITokenResponse } from "./interface";

const QUICKNODE_ENDPOINT = process.env.NEXT_PUBLIC_QUICKNODE_ENDPOINT_URL;

if (!QUICKNODE_ENDPOINT)
  throw new Error(`Missing "QUICKNODE_ENDPOINT" variable in environment`);

export const fetchTokens = async (
  page: number = 1
): Promise<ITokenResponse> => {
  let response: ITokenResponse = {
    data: [],
    error: "",
    success: false,
  };

  try {
    const core = new Core({
      endpointUrl: QUICKNODE_ENDPOINT,
      config: {
        addOns: {
          nftTokenV2: true,
        },
      },
    });

    const { tokens: data } = await core.client.qn_fetchNFTsByCollection({
      collection: "0xED5AF388653567Af2F388E6224dC7C4b3241C544",
      page,
      perPage: 40,
    });

    response = {
      data,
      error: "",
      success: true,
    };
  } catch (error) {
    response = {
      ...response,
      error: `${error}`,
    };
  } finally {
    return response;
  }
};
