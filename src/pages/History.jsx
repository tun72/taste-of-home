import HIstoryTable from "../features/history/HIstoryTable";
import Row from "../ui/Row";
import Heading from "../ui/Heading";
import HistoryTableOperation from "../features/history/HistoryTableOperation";
function History() {
  return (
    <div className="mx-auto flex max-w-[120rem] flex-col gap-10">
      <Row type="horizontal">
        <Heading as="h1">User History</Heading>
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
