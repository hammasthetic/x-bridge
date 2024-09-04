'use client'
import React, { useMemo } from "react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Pagination, Spinner, getKeyValue} from "@nextui-org/react";
import useSWR from "swr";


const fetcher = (url:string) => fetch(url).then((res) => res.json());

export default function TokensTable() {
  const [page, setPage] = React.useState(1);

  const {data, isLoading} = useSWR(`https://swapi.py4e.com/api/people?page=${page}`, fetcher, {
    keepPreviousData: true,
  });

  const rowsPerPage = 5;

  const pages = useMemo(() => {
    return data?.count ? Math.ceil(data.count / rowsPerPage) : 0;
  }, [data?.count, rowsPerPage]);

  const loadingState = isLoading || data?.results.length === 0 ? "loading" : "idle";

  return (
    <Table
    radius="sm"
    shadow="none"
    className=" max-h-full"
      aria-label="Example table with client async pagination"
      bottomContent={
        pages > 0 ? (
          <div className="flex w-full justify-center">
            <Pagination
              isCompact
              showControls
              showShadow
              color="primary"
              page={page}
              total={pages}
              onChange={(page) => setPage(page)}
            />
          </div>
        ) : null
      }
    >
      <TableHeader>
        <TableColumn key="name">name</TableColumn>
        <TableColumn key="height">balance</TableColumn>
        <TableColumn key="mass">action</TableColumn>
      </TableHeader>
      <TableBody
        items={data?.results ? (data?.results as Array<any>).slice(0,5) : []}
        loadingContent={<Spinner />}
        loadingState={loadingState}
      >
        {
        
        (item) => (
          <TableRow key={(item as any)?.name}>
            {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
