import api from "@/lib/axios";
import { ProductSchema, TProductSchema } from "@/schema/product";
import { ValidateBackendResponse } from "@/utils";

export async function useProduct(
    id: string,
): Promise<TProductSchema | undefined> {
    return await api
        .get(`/product/${id}`)
        .then((res) => res.data)
        .then((res) => ValidateBackendResponse(res.data, ProductSchema));
}
