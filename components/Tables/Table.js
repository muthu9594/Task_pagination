import { Table, Pagination } from "@nextui-org/react";
import { useState } from "react";
import useSWR from "swr";
// import styles from "../../styles/table.module.css";

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
      {/* <Table
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
      </Table> */}
      <table>
        <thead>
          <tr>
            <th scope="col">NAME</th>
            <th scope="col">GENDER</th>
            <th scope="col">COMPANY</th>
            <th scope="col">EMAIL</th>
            <th scope="col">PHONE</th>
          </tr>
        </thead>
        <tbody>
          {data.data &&
            data.data.map((Detail) => (
              <tr key={Detail._id}>
                <td scope="row" data-label="NAME">
                  {Detail.name}
                </td>
                <td data-label="GENDER">{Detail.gender}</td>
                <td data-label="COMPANY">{Detail.company}</td>
                <td data-label="EMAIL">{Detail.email}</td>
                <td data-label="PHONE">{Detail.phone}</td>
              </tr>
            ))}
        </tbody>
      </table>
      <div className="m-8">
        <Pagination total={20} initialPage={1} onChange={handleChange} />
      </div>
    </div>
  );
};

export default table;
