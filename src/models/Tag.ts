export type Tag = {
	id: number;
	name: string;
};

export interface PublicAllTagsResponse {
	success: boolean;
	message: string;
	data?: Tag[];
}

export interface TagCreateAdminRequest {
	name: string;
}

export interface TagCreateAdminResponse {
	success: boolean;
	message: string;
	data: Tag;
}

export interface TagDeleteAdminRequest {
	id: number;
}

export interface TagDeleteAdminResponse {
	success: boolean;
	message: string;
}
