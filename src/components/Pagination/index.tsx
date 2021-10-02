import { Stack, Text } from "@chakra-ui/react";
import { useState } from "react";
import { PaginationPage } from "./PaginationPage";


export function Pagination () {

    let currentPageNumber = 1;
    const totalPages:number = 60;

    const [pagination, setPagination] = useState(generatePaginationArray(currentPageNumber));

    function generatePaginationArray (currentPageNumber: number) {
        const siblingsNumber = 1;

        const array = [...new Array((2 * siblingsNumber) + 1)]
            .map((_, index) => {
                const page = currentPageNumber - siblingsNumber + index;

                return {
                    page: page,
                    isCurrent: currentPageNumber === page
                }})
            .filter((pageItem) => pageItem.page > 0 && pageItem.page <= totalPages);
            return array;
    };

    currentPageNumber = pagination.reduce((acc, item) => {
        if(item.isCurrent) {
            acc =  item.page
            return acc;
        }
        return acc;
    }, 0);

    function updatePagination(page: number) {
        setPagination(generatePaginationArray(page));
    }

    return (
        <Stack direction="row">
            { currentPageNumber > 2 && 
                (<>
                <PaginationPage onPageChange={updatePagination} pageNumber={1} isCurrent={false} />
                <Text>...</Text>
                </>)
            }
            {
                pagination.map((paginationItem) => {
                    return (
                        <PaginationPage onPageChange={updatePagination} key={paginationItem.page} pageNumber={paginationItem.page} isCurrent={paginationItem.isCurrent} />
                    )
                })
            }

            {!(currentPageNumber !== totalPages-1) || !(currentPageNumber === totalPages) && 
                (<>
                <Text>...</Text>
                <PaginationPage onPageChange={updatePagination} pageNumber={totalPages} isCurrent={false} />
                </>)
            }

        </Stack>
    )
}