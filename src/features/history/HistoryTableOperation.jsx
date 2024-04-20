import Filter from "../../ui/Filter";
import TableOperations from "../../ui/TableOperation";

function HistoryTableOperation() {
  return (
    <TableOperations>
      <Filter
        filterField={"status"}
        options={[
          { value: "all", label: "All" },
          { value: "success", label: "Success" },
          { value: "pending", label: "Pending" },
        ]}
      />
    </TableOperations>
  );
}

export default HistoryTableOperation;
