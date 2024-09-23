document.addEventListener("DOMContentLoaded", function () {
    // Event listeners for quantity and price selections
    var cafeSingle = document.getElementById('Qty_Cafe_Single');
    var cafeDouble = document.getElementById('Qty_Cafe_Double');
    var icedSingle = document.getElementById('Qty_Iced_Single');
    var icedDouble = document.getElementById('Qty_Iced_Double');
    
    // Add event listeners to track changes in input
    cafeSingle.addEventListener('change', calculateSubtotals);
    cafeDouble.addEventListener('change', calculateSubtotals);
    icedSingle.addEventListener('change', calculateSubtotals);
    icedDouble.addEventListener('change', calculateSubtotals);
    
    document.getElementById('Qty_JustJava').addEventListener('change', calculateSubtotals);
    document.getElementById('Qty_Cafe').addEventListener('change', calculateSubtotals);
    document.getElementById('Qty_Iced').addEventListener('change', calculateSubtotals);
    
    // Function to calculate subtotals and total price
    function calculateSubtotals() {
        let justJavaQty = parseInt(document.getElementById('Qty_JustJava').value) || 0;
        let cafeQty = parseInt(document.getElementById('Qty_Cafe').value) || 0;
        let icedQty = parseInt(document.getElementById('Qty_Iced').value) || 0;

        // Price selections
        let cafePrice = cafeSingle.checked ? parseFloat(cafeSingle.value) : (cafeDouble.checked ? parseFloat(cafeDouble.value) : 0);
        let icedPrice = icedSingle.checked ? parseFloat(icedSingle.value) : (icedDouble.checked ? parseFloat(icedDouble.value) : 0);

        // Calculate subtotals
        let justJavaSubtotal = justJavaQty * 2.00;
        let cafeSubtotal = cafeQty * cafePrice;
        let icedSubtotal = icedQty * icedPrice;

        // Display subtotals
        document.getElementById('Subtotal_JustJava').value = justJavaSubtotal.toFixed(2);
        document.getElementById('Subtotal_Cafe').value = cafeSubtotal.toFixed(2);
        document.getElementById('Subtotal_Iced').value = icedSubtotal.toFixed(2);

        // Calculate total price
        let totalPrice = justJavaSubtotal + cafeSubtotal + icedSubtotal;
        document.getElementById('Total_Price').value = totalPrice.toFixed(2);
    }
});
