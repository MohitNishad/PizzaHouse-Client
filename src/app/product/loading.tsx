"use client";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Card } from "@/components/ui/card";
import { usePathname } from "next/navigation";
import React from "react";

type Props = {};

function Loading({}: Props) {
    const pathname = usePathname();
    const showProductLoading = pathname.split("/").length > 2;

    return showProductLoading ? (
        <article className="pt-2 md:pt-10">
            <MaxWidthWrapper>
                <div className={`flex gap-2 flex-col lg:flex-row`}>
                    <div className="flex flex-col gap-1 flex-1">
                        <div className="max-w-[400px] max-h-[360px] rounded-md overflow-hidden mx-auto shimmer" />
                        <Card className="p-2 shadow-none bg-gray-50">
                            <div>
                                <div className="h-5 shimmer" />
                                <div className="h-4 shimmer" />
                                <div className="h-3 w-4 shimmer" />
                            </div>
                            {[
                                "7082409e-6357-4ea3-8324-ceb1662b1b4b",
                                "4f63cf75-20c3-44e2-b055-e0747206e016",
                                "d2bbf503-9f3f-4936-8634-83d30416a5b8",
                                "56d07342-f997-45a8-a6a2-1e388690175c",
                            ].map((id) => (
                                <div className="h-3 w-5 shimmer" key={id} />
                            ))}
                        </Card>
                    </div>
                    <div className="h-[400px] shimmer" />
                </div>
                <div className="w-9 h-3 shimmer" />
            </MaxWidthWrapper>
        </article>
    ) : (
        <MaxWidthWrapper className="md:px-1 flex justify-center flex-col gap-1 md:flex-row mt-1 product-search-height">
            <Card className="p-2 bg-gray-50 shadow-none flex flex-col gap-1 min-w-[250px] md:min-w-[270px] md:w-[270px]">
                <div className="flex rounded-lg border bg-card text-card-foreground p-2 flex-col gap-3">
                    <div className="h-12 shimmer" />
                    <div className="h-3 shimmer" />
                </div>
                <div className="min-h-[300px] shimmer" />
            </Card>
            <Card className="p-2 bg-gray-50 overflow-y-scroll w-full min-h-[500px] grid grid-cols-1 justify-items-center sm:grid-cols-2 lg:grid-cols-3 gap-2">
                {[
                    "41ebf1d1-6815-472a-860c-a329be131140",
                    "26451fe5-b976-48fb-bb38-17d6db9753ff",
                    "dafe57d2-8ffa-4e41-beb7-1901e1718f91",
                    "5d374090-3883-45e2-9eeb-68142c09eb83",
                    "e742daf3-e4c8-4c12-a9e6-0978c49af509",
                    "dff4f6b9-17c7-4473-a4c9-aabb8d65b307",
                    "4128ca71-72b1-4ebf-8936-afef47db6d6c",
                    "c70a0a66-602b-416e-b160-9519bd86cab6",
                    "97eb25dd-8ed0-44a5-9f80-274072f4de05",
                ].map((pro) => (
                    <Card className="p-2 max-w-[278px] h-[330px]" key={pro}>
                        <div className="w-[260px] h-[195px] rounded-sm shimmer" />
                        <div className="flex flex-col h-[110px] justify-between gap-3 py-2">
                            <div className="flex flex-col gap-1">
                                <div className="w-[120px] h-6 rounded shimmer" />
                                <div className="font-normal text-gray-700 w-full h-4 shimmer" />
                            </div>
                            <div>
                                <div className="mx-auto w-[100px] h-12 shimmer" />
                            </div>
                        </div>
                    </Card>
                ))}
            </Card>
        </MaxWidthWrapper>
    );
}

export default Loading;
