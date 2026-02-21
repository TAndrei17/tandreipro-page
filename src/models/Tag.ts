export type Tag = {
	id: string;
	name: string;
};

export interface PublicAllTagsResponse {
	success: boolean;
	message: string;
	data?: Tag[];
}
