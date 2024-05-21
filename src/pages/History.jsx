import HistoryTable from "../features/history/HistoryTable";
import Row from "../ui/Row";
import Heading from "../ui/Heading";
import HistoryTableOperation from "../features/history/HistoryTableOperation";

function History() {
  return (
    <div className="mx-auto flex max-w-[80%] flex-col py-[4rem] gap-[2.5rem]">
      <Row type="horizontal">
        <Heading as="h2">User Order History</Heading>
        <HistoryTableOperation />
      </Row>
      <Row>
        <HistoryTable />
      </Row>
    </div>
  );
}

export default History;
