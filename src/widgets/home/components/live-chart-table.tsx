import AvatarProfile from "@/shared/components/common/avatar-profile";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shared/components/ui/table";
import { cn } from "@/shared/lib/utils";

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
];

function LiveChartTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[10%]">종목</TableHead>
          <TableHead className="text-right">현재가</TableHead>
          <TableHead className="text-right">등락률</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.length === 0 && (
          <TableRow>
            <TableCell colSpan={3}>No results.</TableCell>
          </TableRow>
        )}
        {invoices.map((invoice, index) => (
          <TableRow
            key={invoice.invoice}
            className={cn(
              "text-foreground-toss",
              (index + 1) % 2 !== 0 && "bg-background-toss-secondary/50"
            )}
          >
            <TableCell>
              <AvatarProfile src="" ticker={invoice.invoice} />
            </TableCell>
            <TableCell className="text-right">
              {invoice.paymentStatus}
            </TableCell>
            <TableCell className="text-right">
              <p className="pr-2">{invoice.paymentMethod}</p>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default LiveChartTable;
