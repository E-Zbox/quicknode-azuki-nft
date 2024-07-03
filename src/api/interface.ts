interface IGenericResponse<T> {
  data: T;
  error: string;
  success: boolean;
}

interface ITrait {
  value: string;
  trait_type: string;
}

export interface IToken {
  collectionName: string;
  collectionAddress: string;
  collectionTokenId: string;
  description: string;
  name: string;
  imageUrl: string;
  traits: ITrait[];
}

export interface ITokenResponse extends IGenericResponse<IToken[]> {}
