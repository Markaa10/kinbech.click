import { EditIcon, TrashIcon } from "assets/icons";
import Flex from "components/flex";
import { Body1 } from "components/texts";
import React, { useState } from "react";
import styled, { css } from "styled-components";
import { colors } from "theme";
import tw from "twin.macro";

// interface ITabProps {}
const Tab = styled(Body1)`
  color: #373737;
  cursor: pointer;
  padding-bottom: 0.375rem;
  ${({ active }: any) =>
    active &&
    css`
      color: #3c55f6;
      border-bottom: 1px solid #3c55f6;
    `};
` as any;

const Table = styled.table`
  width: 80%;
  margin: 2.5rem 10%;
  text-align: left;
  border-spacing: 0.5rem 4.125rem;
  border-collapse: collapse;
  background: #fff;
  border-radius: 10px;
`;

const Thead = styled.thead`
  ${tw``}
  color: #fff;
`;

const TableHead = styled.th`
  ${tw`py-4 px-10`}
  background: ${colors.primary};

  &:first-child {
    border-top-left-radius: 10px;
  }
  &:last-child {
    border-top-right-radius: 10px;
  }
`;

const TableRow = styled.tr``;

const TableData = styled.td`
  ${tw`py-4 px-10`};

  border-bottom: 1px solid #5b5b5b;
`;

function MyAdsContainer() {
  const [activeTab, setActiveTab] = useState<string>("All Ads");

  const tabs = [
    { id: 1, tab: "All Ads" },
    { id: 2, tab: "Active Ads" },
    { id: 3, tab: "Sold Ads" },
    { id: 4, tab: "Expiring Ads" },
  ];

  const tableData = [
    {
      id: 1,
      date: "2021/05/21",
      productName: "Huwawei V12 pro",
      price: 1200,
      expiringDate: "2021/07/12",
      status: "Active",
    },
    {
      id: 2,
      date: "2021/05/21",
      productName: "Huwawei V12 pro",
      price: 1200,
      expiringDate: "2021/07/12",
      status: "Expired",
    },
    {
      id: 3,
      date: "2021/05/21",
      productName: "Huwawei V12 pro",
      price: 1200,
      expiringDate: "2021/07/12",
      status: "Active",
    },
    {
      id: 4,
      date: "2021/05/21",
      productName: "Huwawei V12 pro",
      price: 1200,
      expiringDate: "2021/07/12",
      status: "Near Expiry",
    },
    {
      id: 5,
      date: "2021/05/21",
      productName: "Huwawei V12 pro",
      price: 1200,
      expiringDate: "2021/07/12",
      status: "Sold",
    },
    {
      id: 6,
      date: "2021/05/21",
      productName: "Huwawei V12 pro",
      price: 1200,
      expiringDate: "2021/07/12",
      status: "Active",
    },
    {
      id: 7,
      date: "2021/05/21",
      productName: "Huwawei V12 pro",
      price: 1200,
      expiringDate: "2021/07/12",
      status: "Sold",
    },
    {
      id: 8,
      date: "2021/05/21",
      productName: "Huwawei V12 pro",
      price: 1200,
      expiringDate: "2021/07/12",
      status: "Active",
    },
    {
      id: 9,
      date: "2021/05/21",
      productName: "Huwawei V12 pro",
      price: 1200,
      expiringDate: "2021/07/12",
      status: "Expired",
    },
  ];

  return (
    <div style={{ background: "#E5E5E5" }}>
      <Flex gap={5.37} justifyContent="center">
        {tabs.map((item) => (
          <Tab
            key={item.id}
            active={item.tab === activeTab ? true : false}
            onClick={() => setActiveTab(item.tab)}
          >
            {item.tab}
          </Tab>
        ))}
      </Flex>

      <Table>
        <Thead>
          <TableRow>
            <TableHead>S.N.</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Product Name</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Expiring Date</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </Thead>

        <tbody>
          {tableData.map((item) => (
            <TableRow key={item.id}>
              <TableData>{item.id}</TableData>
              <TableData>{item.date}</TableData>
              <TableData>{item.productName}</TableData>
              <TableData>{item.price}</TableData>
              <TableData>{item.expiringDate}</TableData>
              <TableData>
                {item.status}
                <TrashIcon />
                <EditIcon />
              </TableData>
            </TableRow>
          ))}
        </tbody>
        {/* <tfoot>
          <tr>
            <td>
              <select name="" id="">
                <option value="9">9</option>
                <option value="8">8</option>
                <option value="7">7</option>
                <option value="6">6</option>
              </select>
            </td>
          </tr>
        </tfoot> */}
      </Table>
    </div>
  );
}

export default MyAdsContainer;
