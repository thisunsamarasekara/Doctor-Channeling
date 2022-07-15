import jsPDF from "jspdf";
import "jspdf-autotable";


const generateBookingPDF = (channelDetails) => {
    const document = new jsPDF();

    const tableColumn = [
        "Doctor",
        "Date",
        "Status",
        "Time",
        "Number"
    ];

    const tableRows = [];

    if(channelDetails && channelDetails.length > 0) {
        channelDetails.forEach((channel) => {
            const dataRow = [
                channel.doctor,
                channel.date.slice(0,10),
                channel.status,
                channel.time,
                channel.number,
            ];
            tableRows.push(dataRow);
        });
        document.autoTable(tableColumn, tableRows, { startY: 20 });
        const date = Date().split(" ");

        const dateStr =
        date[0] + date[1] + date[2] + date[3] + date[4] + date[5] + date[6];
        // ticket title. and margin-top + margin-left
        document.text("Detail Order Report", 14, 15);
        // we define the name of our PDF file.
        document.save(`report_${dateStr}.pdf`);
      }
}
export default generateBookingPDF;