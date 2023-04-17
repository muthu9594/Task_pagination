import { Table, Pagination } from "@nextui-org/react";
import { useState } from "react";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

const table = () => {
  const [page, setpage] = useState(1);
  const { data, error } = useSWR(
    `http://localhost:3000/api/fetchData?page=${page}`,
    fetcher
  );
  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  console.log(data.data, "Data");

  const handleChange = (e) => {
    setpage(e);
  };
  return (
    <div>
      <Table
        css={{
          height: "auto",
          minWidth: "100%",
        }}
        aria-label="Example table with static content"
      >
        <Table.Header>
          <Table.Column>NAME</Table.Column>
          <Table.Column>GENDER</Table.Column>
          <Table.Column>COMPANY</Table.Column>
          <Table.Column>EMAIL</Table.Column>
          <Table.Column>PHONE</Table.Column>
        </Table.Header>
        <Table.Body>
          {data.data.map((Detail) => (
            <Table.Row key={Detail._id}>
              <Table.Cell>{Detail.name}</Table.Cell>
              <Table.Cell>{Detail.gender}</Table.Cell>
              <Table.Cell>{Detail.company}</Table.Cell>
              <Table.Cell>{Detail.email}</Table.Cell>
              <Table.Cell>{Detail.phone}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      <div className="m-8">
        <Pagination total={20} initialPage={1} onChange={handleChange} />
      </div>
    </div>
  );
};

export default table;
