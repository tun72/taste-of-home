import HIstoryTable from "../features/history/HIstoryTable";
import Row from "../ui/Row";
import Heading from "../ui/Heading";
import HistoryTableOperation from "../features/history/HistoryTableOperation";
import styled from "styled-components";

function History() {
  return (
    <div className="mx-auto flex max-w-[80%] flex-col py-[4rem] gap-[2.5rem]">
      <Row type="horizontal">
        <Heading as="h2">User Order History</Heading>
        {/* <CabinTableOperations /> */}
        <HistoryTableOperation />
      </Row>
      <Row>
        <HIstoryTable />
      </Row>
    </div>
  );
}

export default History;
