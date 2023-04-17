import { Inter } from "next/font/google";
import Table from "@/components/Tables/Table";
import { Fragment } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Fragment>
      <Table />
    </Fragment>
  );
}
