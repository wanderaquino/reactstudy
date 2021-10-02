import { Button } from "@chakra-ui/react";

interface PaginationPageProps {
    pageNumber: number,
    isCurrent?: boolean,
    onPageChange: (page: number) => void
}

export function PaginationPage({ isCurrent, pageNumber, onPageChange} : PaginationPageProps) {

    return (
        isCurrent ? (
            <Button 
                size="sm" 
                colorScheme="pink">
                    {pageNumber}
            </Button>
        ) : 

        <Button
            size="sm"
            bg="blue.800"
            onClick={ e => onPageChange(Number(e.currentTarget.innerText))}
            >
            {pageNumber}
        </Button>
    )
}