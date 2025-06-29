 const randomBillNo = "ORD" + Math.floor(100000 + Math.random() * 900000);
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric"
  });

  if (!sessionStorage.getItem("completedOrder")) {
    const completedOrder = {
      billNo: randomBillNo,
      date: formattedDate
    };
    sessionStorage.setItem("completedOrder", JSON.stringify(completedOrder));
  }

  const customer = JSON.parse(localStorage.getItem("customer")) || {};
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const completedOrder = JSON.parse(sessionStorage.getItem("completedOrder")) || {};
  document.getElementById("order-id").textContent = completedOrder.billNo || "N/A";
  document.getElementById("order-date").textContent = completedOrder.date || "N/A";
  document.getElementById("customer-name").textContent = customer.name || "";
  document.getElementById("customer-address").textContent = customer.address || "";
  document.getElementById("customer-phone").textContent = `Phone– ${customer.number || ""}`;
  const tableBody = document.getElementById("product-table-body");
  let totalAmount = 0;

  cart.forEach(product => {
    const row = document.createElement("tr");
    const productTotal = product.rate * product.qty;

    row.innerHTML = `
      <td>${product.name}</td>
      <td>${product.qty}</td>
      <td>${product.rate}</td>
      <td>${productTotal.toFixed(2)}</td>
    `;

    totalAmount += productTotal;
    tableBody.appendChild(row);
  });

  document.getElementById("grand-total").textContent = totalAmount.toFixed(2);
  function downloadInvoice() {
    const invoice = document.getElementById("invoice");
    html2pdf().from(invoice).save("Invoice.pdf");
    window.open('thankyou.html')
  }